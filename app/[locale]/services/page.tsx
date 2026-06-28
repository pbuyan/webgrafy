import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ContactBlock } from "@/components/ui/contact-block";
import { PageIntro } from "@/components/ui/page-intro";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { SectionLabel } from "@/components/ui/section-label";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
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
    path: "/services",
    title: dict.pages.services.title,
    description: dict.pages.services.text,
  });
}

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
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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

      {/* <section className="border-b border-stroke bg-white py-20">
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
                    className={`mb-5 h-10 w-10 rounded-full ${index === 0
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
      </section> */}

      <ContactBlock id="contact" locale={locale} dict={dict} />
    </>
  );
}
