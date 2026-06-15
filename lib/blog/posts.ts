import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { locales, type Locale } from "@/lib/i18n/config";
import { blogFrontmatterSchema, type BlogFrontmatter, type BlogPostMeta } from "./types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function getSlugDirs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
}

function parsePostFile(slug: string, locale: Locale): BlogPostMeta | null {
  const filePath = path.join(BLOG_DIR, slug, `${locale}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data } = matter(raw);
  const frontmatter = blogFrontmatterSchema.parse(data);

  return { ...frontmatter, slug, locale };
}

export function getAllPosts(locale: Locale): BlogPostMeta[] {
  return getSlugDirs()
    .map((slug) => parsePostFile(slug, locale))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getFeaturedPosts(locale: Locale, limit = 3): BlogPostMeta[] {
  return getAllPosts(locale)
    .filter((post) => post.featured)
    .slice(0, limit);
}

export function getPostSource(
  locale: Locale,
  slug: string,
): { frontmatter: BlogFrontmatter; content: string } | null {
  const filePath = path.join(BLOG_DIR, slug, `${locale}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = blogFrontmatterSchema.parse(data);

  return { frontmatter, content };
}

export function getPostSlugs(): string[] {
  return getSlugDirs();
}

export function getAllPostParams(): { locale: Locale; slug: string }[] {
  const slugs = getSlugDirs();

  for (const slug of slugs) {
    for (const locale of locales) {
      const filePath = path.join(BLOG_DIR, slug, `${locale}.mdx`);
      if (!fs.existsSync(filePath)) {
        throw new Error(`Missing blog translation: content/blog/${slug}/${locale}.mdx`);
      }
    }
  }

  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}
