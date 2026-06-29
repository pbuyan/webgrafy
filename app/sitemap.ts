import type { MetadataRoute } from "next";
import { execFileSync } from "node:child_process";
import { getAllPosts } from "@/lib/blog/posts";
import { locales, siteUrl } from "@/lib/i18n/config";
import { localeAlternatesMap } from "@/lib/i18n/metadata";

// Stable fallback when git history is unavailable (e.g. a shallow CI checkout
// or an environment without `git`). The sitemap is generated at build time, so
// this is the deploy timestamp.
const buildDate = new Date();

const gitDateCache = new Map<string, Date | null>();

/**
 * Last git commit date (ISO, committer date) for a repo-relative file, or
 * `null` when git or the file's history is unavailable. Build-time only.
 */
function gitLastModified(relPath: string): Date | null {
  const cached = gitDateCache.get(relPath);
  if (cached !== undefined) return cached;

  let result: Date | null = null;
  try {
    const iso = execFileSync("git", ["log", "-1", "--format=%cI", "--", relPath], {
      cwd: process.cwd(),
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    const date = iso ? new Date(iso) : null;
    if (date && !Number.isNaN(date.getTime())) result = date;
  } catch {
    result = null;
  }

  gitDateCache.set(relPath, result);
  return result;
}

/** Most recent of the given dates, falling back to the build date. */
function mostRecent(...dates: (Date | null | undefined)[]): Date {
  const valid = dates.filter(
    (d): d is Date => d instanceof Date && !Number.isNaN(d.getTime()),
  );
  if (valid.length === 0) return buildDate;
  return valid.reduce((a, b) => (a > b ? a : b));
}

// Locale-agnostic route → source file. Visible copy for every page lives in the
// shared dictionaries, so a page's freshness is max(its own file, dictionaries).
const DICTIONARIES = "lib/i18n/dictionaries.ts";
const routeSource: Record<string, string> = {
  "": "app/[locale]/page.tsx",
  "/services": "app/[locale]/services/page.tsx",
  "/packages": "app/[locale]/packages/page.tsx",
  "/portfolio": "app/[locale]/portfolio/page.tsx",
  "/blog": "app/[locale]/blog/page.tsx",
  "/about": "app/[locale]/about/page.tsx",
  "/contact": "app/[locale]/contact/page.tsx",
  "/faq": "app/[locale]/faq/page.tsx",
  "/privacy": "app/[locale]/privacy/page.tsx",
  "/terms": "app/[locale]/terms/page.tsx",
};

export default function sitemap(): MetadataRoute.Sitemap {
  const dictionariesDate = gitLastModified(DICTIONARIES);

  // Adding a post should refresh the home page and the blog index.
  const newestPost = getAllPosts(locales[0])[0];
  const newestPostDate = newestPost
    ? new Date(`${newestPost.publishedAt}T12:00:00`)
    : null;

  const staticEntries = locales.flatMap((locale) =>
    Object.entries(routeSource).map(([page, source]) => {
      const fileDate = mostRecent(gitLastModified(source), dictionariesDate);
      const lastModified =
        page === "" || page === "/blog"
          ? mostRecent(fileDate, newestPostDate)
          : fileDate;
      return {
        url: `${siteUrl}/${locale}${page}`,
        lastModified,
        changeFrequency: page === "" ? ("weekly" as const) : ("monthly" as const),
        priority: page === "" ? 1 : 0.8,
        alternates: { languages: localeAlternatesMap(page) },
      };
    }),
  );

  const postEntries = locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => {
      const published = new Date(`${post.publishedAt}T12:00:00`);
      const edited = gitLastModified(`content/blog/${post.slug}/${locale}.mdx`);
      return {
        url: `${siteUrl}/${locale}/blog/${post.slug}`,
        lastModified: mostRecent(published, edited),
        changeFrequency: "monthly" as const,
        priority: 0.7,
        alternates: {
          languages: localeAlternatesMap(`/blog/${post.slug}`),
        },
      };
    }),
  );

  return [...staticEntries, ...postEntries];
}
