import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { BlogPostCard } from "@/components/blog/blog-post-card";
import { getAllPosts } from "@/lib/blog/posts";
import { siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata, resolveMetaDescription } from "@/lib/i18n/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    siteName: dict.meta.siteName,
    path: "/blog",
    title: dict.pages.blog.title,
    description: resolveMetaDescription(
      dict.pages.blog.metaDescription,
      dict.pages.blog.text,
    ),
    rssFeedUrl: `${siteUrl}/feed.xml`,
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const posts = getAllPosts(locale);
  const p = dict.pages.blog;

  return (
    <>
      <PageIntro eyebrow={p.eyebrow} title={p.title} text={p.text} />

      <section className="py-20">
        <Container>
          {posts.length === 0 ? (
            <p className="text-base leading-7 text-ink-base">{p.empty}</p>
          ) : (
            <div className="grid gap-6 lg:grid-cols-2">
              {posts.map((post, index) => (
                <BlogPostCard
                  key={post.slug}
                  post={post}
                  index={index}
                  readMoreLabel={dict.common.readMore}
                />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
