import Link from "next/link";
import { Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ContactBlock } from "@/components/ui/contact-block";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionLabel } from "@/components/ui/section-label";
import { Button, buttonVariants } from "@/components/ui/button";
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
            {p.tiers.map((tier) => {
              const isPopular = Boolean(tier.popular);
              return (
                <article
                  key={tier.name}
                  className={`relative flex flex-col border bg-white p-8 shadow-[0_14px_40px_rgba(0,0,0,0.06)] ${
                    isPopular
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
                  {tier.description && (
                    <p className="mt-2 text-sm leading-6 text-ink-soft">{tier.description}</p>
                  )}
                  <p className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-ink-strong [font-family:var(--font-display)]">
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
                    className={buttonVariants({
                      variant: isPopular ? "dark" : "outline",
                      className: "mt-10 w-full justify-center",
                    })}
                  >
                    {p.getStarted}
                  </Link>
                </article>
              );
            })}
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
                  className="rounded-[1.5rem] border border-stroke bg-surface-warm p-6"
                >
                  <div
                    className={`mb-5 h-10 w-10 rounded-full ${
                      index === 0
                        ? "bg-ink"
                        : index === 1
                          ? "bg-warm-mid"
                          : index === 2
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
              <SectionLabel>{p.faqHeading}</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
                {p.faqTitle}
              </h2>
            </div>
            <div className="divide-y divide-stroke border-y border-stroke">
              {p.faqs.map((faq) => (
                <details key={faq.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium text-ink-strong">
                    <span>{faq.question}</span>
                    <span
                      aria-hidden
                      className="mt-1 text-2xl leading-none text-ink-soft transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-ink-base">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-stroke bg-surface-warm py-20">
        <Container>
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionLabel>{p.customHeading}</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
                {p.customTitle}
              </h2>
              <p className="mt-6 text-lg leading-8 text-ink-base">{p.customText}</p>
            </div>
            <Link href={`/${locale}/about#contact`}>
              <Button variant="dark">{p.customCta}</Button>
            </Link>
          </div>
        </Container>
      </section>

      <ContactBlock id="contact" locale={locale} dict={dict} />
    </>
  );
}
