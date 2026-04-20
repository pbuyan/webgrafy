import Link from "next/link";
import { ContactBlock } from "@/components/ui/contact-block";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden border-b border-[#d9d0c5]">
        <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(rgba(17,17,17,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.12)_1px,transparent_1px)] [background-size:84px_84px]" />
        <Container className="relative py-20 lg:py-28">
          <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="mb-8 inline-flex rounded-full border border-[#d9d0c5] bg-white/50 px-4 py-1.5 text-[11px] uppercase tracking-[0.22em] text-[#7d7468]">
                {dict.home.badge}
              </div>
              <p className="mb-5 text-xs uppercase tracking-[0.24em] text-[#7d7468]">{dict.home.eyebrow}</p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-[92px]">
                {dict.home.title}
              </h1>
              <div className="mt-10 grid max-w-3xl gap-10 border-t border-[#d9d0c5] pt-8 lg:grid-cols-[1.25fr_0.75fr]">
                <p className="text-lg leading-8 text-[#4d463e]">{dict.home.intro}</p>
                <div className="space-y-4 text-sm uppercase tracking-[0.16em] text-[#7d7468]">
                  {dict.home.traits.map((trait, index) => (
                    <div key={trait} className={`flex items-center justify-between ${index < 2 ? "border-b border-[#d9d0c5] pb-3" : "pb-1"}`}>
                      <span>{trait}</span>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link href={`/${locale}/work`}><Button>{dict.home.ctaPrimary}</Button></Link>
                <Link href={`/${locale}/contact`}><Button variant="secondary">{dict.home.ctaSecondary}</Button></Link>
              </div>
            </div>

            <div className="grid gap-5">
              <div className="rounded-[2.25rem] border border-[#d9d0c5] bg-white/60 p-5 shadow-[0_25px_80px_rgba(0,0,0,0.08)]">
                <div className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
                  <div className="h-[380px] rounded-[1.8rem] border border-[#d9d0c5] bg-gradient-to-b from-[#ebe4da] to-[#f8f5f0] p-6">
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#7d7468]"><span>{dict.projects[0].name}</span><span>{dict.common.serviceLabel}</span></div>
                      <div className="space-y-4">
                        <div className="h-20 rounded-[1.4rem] border border-[#d9d0c5] bg-white/80" />
                        <div className="grid grid-cols-3 gap-3"><div className="h-16 rounded-[1rem] bg-[#111111]" /><div className="h-16 rounded-[1rem] bg-[#b8ada0]" /><div className="h-16 rounded-[1rem] border border-[#d9d0c5] bg-white" /></div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-5">
                    <div className="h-[180px] rounded-[1.8rem] border border-[#d9d0c5] bg-white/80 p-5">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#7d7468]"><span>{dict.projects[1].name}</span><span>Web</span></div>
                      <div className="mt-5 space-y-3"><div className="h-4 w-20 rounded-full bg-[#111111]" /><div className="h-20 rounded-[1.2rem] border border-[#d9d0c5] bg-[#f0ebe4]" /></div>
                    </div>
                    <div className="h-[180px] rounded-[1.8rem] border border-[#d9d0c5] bg-[#f1ebe3] p-5">
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-[#7d7468]"><span>{dict.projects[2].name}</span><span>Graphics</span></div>
                      <div className="mt-5 grid grid-cols-3 gap-3"><div className="h-20 rounded-[1.1rem] border border-[#d9d0c5] bg-white" /><div className="h-20 rounded-[1.1rem] bg-[#d9cec1]" /><div className="h-20 rounded-[1.1rem] bg-[#111111]" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#d9d0c5] bg-white/35">
        <Container className="grid gap-6 py-6 text-center text-[11px] uppercase tracking-[0.22em] text-[#7d7468] md:grid-cols-4">
          {dict.home.trust.map((item) => (
            <div key={item}>{item}</div>
          ))}
        </Container>
      </section>

      <section className="py-24">
        <Container>
          <div className="grid gap-10 border-b border-[#d9d0c5] pb-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionLabel>{dict.home.highlightsEyebrow}</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                {dict.home.highlightsTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#544c43]">{dict.home.highlightsText}</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {dict.services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} label={dict.common.serviceLabel} />
            ))}
          </div>
        </Container>
      </section>

      <ContactBlock locale={locale} dict={dict} />
    </>
  );
}
