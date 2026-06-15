import Image from "next/image";
import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/types";
import type { Locale } from "@/lib/i18n/config";

function formatDate(date: string, locale: Locale) {
  return new Intl.DateTimeFormat(locale === "fr" ? "fr-CA" : "en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(`${date}T12:00:00`));
}

export function BlogPostCard({
  post,
  index,
  readMoreLabel,
}: {
  post: BlogPostMeta;
  index: number;
  readMoreLabel: string;
}) {
  const bg = ["bg-tint-1", "bg-tint-2", "bg-tint-3"][index % 3];

  return (
    <Link
      href={`/${post.locale}/blog/${post.slug}`}
      className="block overflow-hidden rounded-[1.6rem] border border-stroke bg-white shadow-[0_16px_40px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_24px_56px_rgba(0,0,0,0.10)]"
    >
      <article>
        {post.image ? (
          <div className={`p-4 ${bg}`}>
            <div className="overflow-hidden rounded-[1.2rem] border border-stroke bg-white/60">
              <Image
                src={post.image}
                alt={post.title}
                width={700}
                height={420}
                className="h-[240px] w-full object-cover"
              />
            </div>
          </div>
        ) : null}
        <div className="p-6">
          <div className="mb-3 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-ink-subtle">
            <span>{post.tags[0] ?? "Blog"}</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt, post.locale)}</time>
          </div>
          <h3 className="text-2xl font-semibold text-ink-strong">{post.title}</h3>
          <p className="mt-3 text-sm leading-7 text-ink-base">{post.excerpt}</p>
          <p className="mt-5 text-sm font-medium text-ink-rich">{readMoreLabel} →</p>
        </div>
      </article>
    </Link>
  );
}
