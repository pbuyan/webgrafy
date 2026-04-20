import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.pages.about.eyebrow,
    description: dict.pages.about.text,
    alternates: { canonical: `/${locale}/about` },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageIntro
        eyebrow={dict.pages.about.eyebrow}
        title={dict.pages.about.title}
        text={dict.pages.about.text}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2.5rem] border border-[#d9d0c5] bg-white/55 p-10 shadow-[0_25px_80px_rgba(0,0,0,0.06)] lg:p-14">
              <SectionLabel>{dict.about.approachEyebrow}</SectionLabel>
              <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-5xl">
                {dict.about.approachTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#544c43]">{dict.about.approachText}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {dict.about.whyUs.map((item, index) => (
                <div key={item} className="rounded-[2rem] border border-[#d9d0c5] bg-white/60 p-7 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                  <div className={`mb-5 h-10 w-10 rounded-2xl ${index === 0 ? "bg-[#111111]" : index === 1 ? "bg-[#b8ada0]" : index === 2 ? "border border-[#d9d0c5] bg-white" : "bg-[#ded5ca]"}`} />
                  <p className="text-lg font-medium leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-[2.5rem] border border-[#d9d0c5] bg-white/55 p-8 shadow-[0_25px_80px_rgba(0,0,0,0.06)] lg:p-12">
            <div className="flex flex-col gap-4 border-b border-[#d9d0c5] pb-10 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel>{dict.about.processEyebrow}</SectionLabel>
                <h2 className="mt-4 text-4xl font-semibold leading-[0.96] tracking-[-0.05em]">
                  {dict.about.processTitle}
                </h2>
              </div>
              <p className="max-w-xl text-[#544c43]">{dict.about.processText}</p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {dict.processSteps.map((step) => (
                <div key={step.title} className="rounded-[1.8rem] border border-[#d9d0c5] bg-[#faf7f2] p-6">
                  <div className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#7d7468]">{step.number}</div>
                  <div className="mt-8 text-2xl font-semibold">{step.title}</div>
                  <div className="mt-3 text-sm leading-7 text-[#5b534a]">{step.text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <Link href={`/${locale}/contact`}><Button>{dict.about.cta}</Button></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
