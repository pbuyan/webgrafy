import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ContactBlock } from "@/components/ui/contact-block";
import { PageIntro } from "@/components/ui/page-intro";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { SectionLabel } from "@/components/ui/section-label";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const s = dict.pages.services;

  return (
    <>
      <PageIntro eyebrow={s.eyebrow} title={s.title} text={s.text} />

      <section className="border-b border-stroke bg-white py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {dict.services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                label={dict.common.serviceLabel}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href={`/${locale}/about#contact`}>
              <Button variant="dark">{s.cta}</Button>
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-stroke bg-surface-pale py-20">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel>{s.industriesEyebrow}</SectionLabel>
            <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
              {s.industriesTitle}
            </h2>
            <p className="mt-6 text-lg leading-8 text-ink-base">{s.industriesText}</p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-stroke bg-stroke sm:grid-cols-2 lg:grid-cols-3">
            {s.industries.map((industry) => (
              <div key={industry.name} className="flex flex-col bg-white p-6">
                <h3 className="text-lg font-semibold text-ink-strong">{industry.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{industry.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline
        eyebrow={s.processEyebrow}
        title={s.processTitle}
        steps={dict.processSteps}
      />

      <section className="border-b border-stroke bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionLabel>{s.whyEyebrow}</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
                {s.whyTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-base">{s.whyText}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {s.pillars.map((pillar, index) => (
                <div
                  key={pillar.title}
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
                  <h3 className="text-lg font-semibold leading-7 text-ink-rich">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink-soft">{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-stroke bg-surface-pale py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionLabel>{s.faqEyebrow}</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-ink-strong sm:text-5xl [font-family:var(--font-display)]">
                {s.faqTitle}
              </h2>
            </div>
            <div className="divide-y divide-stroke border-y border-stroke">
              {s.faqs.map((faq) => (
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

      <ContactBlock id="contact" locale={locale} dict={dict} />
    </>
  );
}
