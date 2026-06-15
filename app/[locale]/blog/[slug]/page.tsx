import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { compileBlogPost } from "@/lib/blog/compile-post";
import { getAllPostParams, getPostSource } from "@/lib/blog/posts";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllPostParams();
}

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostSource(locale, slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    openGraph: post.frontmatter.image
      ? { images: [{ url: post.frontmatter.image }] }
      : undefined,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const dict = await getDictionary(locale);
  const post = getPostSource(locale, slug);

  if (!post) notFound();

  const { content } = await compileBlogPost(locale, post.content);
  const { frontmatter } = post;

  return (
    <>
      <section className="border-b border-stroke">
        <Container className="py-20 lg:py-24">
          <Link
            href={`/${locale}/blog`}
            className="text-sm font-medium uppercase tracking-[0.18em] text-ink-subtle transition-colors hover:text-ink-strong"
          >
            ← {dict.common.backToBlog}
          </Link>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-ink-subtle">
                {frontmatter.tags.join(" · ")}
              </p>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] sm:text-6xl lg:text-[72px]">
                {frontmatter.title}
              </h1>
            </div>
            <div className="max-w-2xl">
              <p className="text-lg leading-8 text-ink-base">{frontmatter.excerpt}</p>
              <p className="mt-4 text-sm text-ink-subtle">
                <time dateTime={frontmatter.publishedAt}>
                  {formatDate(frontmatter.publishedAt, locale)}
                </time>
                {frontmatter.author ? ` · ${frontmatter.author}` : null}
              </p>
            </div>
          </div>
          {frontmatter.image ? (
            <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-stroke">
              <Image
                src={frontmatter.image}
                alt={frontmatter.title}
                width={1200}
                height={640}
                className="h-[320px] w-full object-cover sm:h-[420px]"
                priority
              />
            </div>
          ) : null}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <article className="mx-auto max-w-3xl">{content}</article>
        </Container>
      </section>
    </>
  );
}
