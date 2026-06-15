import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export async function BlogCTA({ locale }: { locale: Locale }) {
  const dict = await getDictionary(locale);

  return (
    <div className="my-10 rounded-[1.6rem] border border-stroke bg-surface-warm px-6 py-8 sm:px-8">
      <p className="text-sm uppercase tracking-[0.18em] text-ink-subtle">{dict.pages.blog.ctaEyebrow}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-ink-strong">
        {dict.pages.blog.ctaTitle}
      </h3>
      <p className="mt-3 max-w-xl text-base leading-7 text-ink-base">{dict.pages.blog.ctaText}</p>
      <Link
        href={`/${locale}/about#contact`}
        className={buttonVariants({ variant: "primary", className: "mt-6" })}
      >
        {dict.pages.blog.ctaButton}
      </Link>
    </div>
  );
}
