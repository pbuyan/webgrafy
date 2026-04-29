import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionLabel } from "@/components/ui/section-label";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export default async function PackagesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const p = dict.pages.packages;

  return (
    <>
      <PageIntro eyebrow={p.eyebrow} title={p.title} text={p.text} />

      <section className="border-b border-stroke bg-surface-pale py-20">
        <Container>
          <SectionLabel>{p.tiersHeading}</SectionLabel>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {p.tiers.map((tier) => (
              <article
                key={tier.name}
                className="flex flex-col border border-stroke bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.06)]"
              >
                <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink-strong [font-family:var(--font-display)]">
                  {tier.name}
                </h2>
                <p className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-ink-strong [font-family:var(--font-display)]">
                  {tier.price}
                </p>
                <ul className="mt-8 flex flex-1 flex-col gap-4 text-sm leading-7 text-ink-base">
                  {tier.includes.map((line) => (
                    <li key={line} className="flex gap-3">
                      <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/about#contact`}
                  className={buttonVariants({ variant: "dark", className: "mt-10 w-full justify-center" })}
                >
                  {p.getStarted}
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
