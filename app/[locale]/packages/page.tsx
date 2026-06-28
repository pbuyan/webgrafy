import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ContactBlock } from "@/components/ui/contact-block";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { SectionLabel } from "@/components/ui/section-label";
import { Button, buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";

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
    path: "/packages",
    title: dict.pages.packages.title,
    description: dict.pages.packages.text,
  });
}

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
      <section className="border-b border-stroke">
        <Container className="py-20 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <SectionLabel>{p.eyebrow}</SectionLabel>
              <h1 className="mt-4 text-5xl font-semibold leading-[0.94] tracking-[-0.05em] break-words hyphens-auto sm:text-6xl lg:text-[78px]">
                {p.title}
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-ink-base">{p.text}</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href={`/${locale}/about#contact`} className="w-full sm:w-auto">
              <Button variant="dark" className="w-full whitespace-normal sm:w-auto">
                {p.heroCtaPrimary}
              </Button>
            </Link>
            <Link href="#packages" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full whitespace-normal sm:w-auto">
                {p.heroCtaSecondary}
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      <section id="packages" className="border-b border-stroke bg-surface-pale py-20">
        <Container>
          <SectionLabel>{p.tiersHeading}</SectionLabel>
          <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {p.tiers.map((tier) => {
              const isPopular = Boolean(tier.popular);
              return (
                <article
                  key={tier.name}
                  className={`relative flex flex-col border bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.06)] ${isPopular
                      ? "border-ink-strong ring-1 ring-ink-strong"
                      : "border-stroke"
                    }`}
                >
                  {isPopular && (
                    <span className="absolute -top-3 left-8 inline-flex items-center gap-1.5 bg-ink-strong px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
                      <Sparkles className="h-3 w-3" aria-hidden />
                      {p.popularLabel}
                    </span>
                  )}
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-ink-strong [font-family:var(--font-display)]">
                    {tier.name}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-ink-soft">{tier.description}</p>
                  <p className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-ink-strong [font-family:var(--font-display)]">
                    {tier.price}
                  </p>
                  <p className="mt-4 text-sm leading-6 text-ink-base">
                    <span className="font-medium text-ink-strong">{p.bestForLabel}:</span>{" "}
                    {tier.bestFor}
                  </p>
                  {tier.chooseItems && tier.chooseItems.length > 0 && (
                    <div className="mt-6">
                      <p className="text-sm font-medium text-ink-strong">{p.chooseItemsLabel}</p>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {tier.chooseItems.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-stroke bg-surface-warm px-3 py-1 text-xs text-ink-soft"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <ul className="mt-8 flex flex-1 flex-col gap-4 text-sm leading-7 text-ink-base">
                    {tier.includes.map((line) => (
                      <li key={line} className="flex gap-3">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-brand" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  {tier.timeline && (
                    <p className="mt-6 text-sm text-ink-soft">
                      <span className="font-medium text-ink-strong">{p.timelineLabel}:</span>{" "}
                      {tier.timeline}
                    </p>
                  )}
                  <Link
                    href={`/${locale}/about#contact`}
                    className={buttonVariants({
                      variant: isPopular ? "dark" : "outline",
                      className: "mt-8 w-full justify-center whitespace-normal text-center",
                    })}
                  >
                    {tier.cta}
                  </Link>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-b border-stroke bg-white py-20">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>{p.guidanceEyebrow}</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
              {p.guidanceTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink-base">{p.guidanceText}</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-stroke bg-stroke sm:grid-cols-2 lg:grid-cols-3">
            {p.guidanceItems.map((item) => (
              <div key={item.scenario} className="flex flex-col bg-white p-6">
                <p className="text-sm leading-7 text-ink-soft">{item.scenario}</p>
                <p className="mt-4 flex items-center gap-2 text-base font-semibold text-ink-strong">
                  <ArrowRight className="h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {item.packageName}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-stroke bg-surface-pale py-20">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>{p.addOnsHeading}</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
              {p.addOnsTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink-base">{p.addOnsText}</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-stroke bg-stroke sm:grid-cols-2">
            {p.addOns.map((addOn) => (
              <div key={addOn.title} className="flex flex-col bg-white p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-semibold text-ink-strong">{addOn.title}</h3>
                  <span className="shrink-0 text-base font-semibold tracking-[-0.02em] text-ink-strong [font-family:var(--font-display)]">
                    {addOn.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{addOn.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-stroke bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionLabel>{p.includedHeading}</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
                {p.includedTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-base">{p.includedText}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {p.guarantees.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-stroke bg-surface-warm p-6"
                >
                  <div
                    className={`mb-5 h-10 w-10 rounded-full ${index % 4 === 0
                        ? "bg-ink"
                        : index % 4 === 1
                          ? "bg-warm-mid"
                          : index % 4 === 2
                            ? "border border-stroke bg-white"
                            : "bg-warm-light"
                      }`}
                  />
                  <h3 className="text-lg font-semibold leading-7 text-ink-rich">{item.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* <ProcessTimeline
        eyebrow={p.processEyebrow}
        title={p.processTitle}
        steps={p.processSteps}
      /> */}

      <section className="border-b border-stroke bg-surface-warm py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>{p.ctaEyebrow}</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
                {p.ctaTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink-base">{p.ctaText}</p>
            </div>
            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:flex-wrap">
              <Link href="#contact" className="w-full sm:w-auto">
                <Button variant="dark" className="w-full whitespace-normal sm:w-auto">
                  {p.ctaPrimary}
                </Button>
              </Link>
              <Link href={`/${locale}/about#contact`} className="w-full sm:w-auto">
                <Button variant="outline" className="w-full whitespace-normal sm:w-auto">
                  {p.ctaSecondary}
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <ContactBlock
        id="contact"
        locale={locale}
        dict={dict}
        title={p.contactOverride.title}
        text={p.contactOverride.text}
      />
    </>
  );
}
