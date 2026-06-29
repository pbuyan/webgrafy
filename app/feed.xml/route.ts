import { getAllPosts } from "@/lib/blog/posts";
import { defaultLocale, siteUrl } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRfc822(date: string): string {
  return new Date(`${date}T12:00:00Z`).toUTCString();
}

export async function GET() {
  const dict = await getDictionary(defaultLocale);
  const posts = getAllPosts(defaultLocale);

  const items = posts
    .map((post) => {
      const link = `${siteUrl}/${defaultLocale}/blog/${post.slug}`;
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${toRfc822(post.publishedAt)}</pubDate>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
    })
    .join("\n");

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${escapeXml(dict.meta.siteName)} Blog</title>
    <link>${escapeXml(`${siteUrl}/${defaultLocale}/blog`)}</link>
    <description>${escapeXml(dict.pages.blog.metaDescription)}</description>
    <language>en-ca</language>
    <lastBuildDate>${toRfc822(posts[0]?.publishedAt ?? new Date().toISOString().slice(0, 10))}</lastBuildDate>
${items}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
