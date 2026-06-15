import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog/posts";
import { locales } from "@/lib/i18n/config";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.webgrafy.com";
const pages = ["", "/services", "/packages", "/portfolio", "/blog", "/about", "/contact", "/faq", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? ("weekly" as const) : ("monthly" as const),
      priority: page === "" ? 1 : 0.8,
    })),
  );

  const postEntries = locales.flatMap((locale) =>
    getAllPosts(locale).map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date(`${post.publishedAt}T12:00:00`),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticEntries, ...postEntries];
}
