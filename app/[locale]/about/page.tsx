import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { SectionLabel } from "@/components/ui/section-label";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

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

      <section className="border-b border-[#d9d0c5] py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.8rem] border border-[#d9d0c5] bg-white p-10 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
              <SectionLabel>{dict.about.approachEyebrow}</SectionLabel>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-[#1f1b18] [font-family:var(--font-display)] sm:text-6xl">
                {dict.about.approachTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#544c43]">{dict.about.approachText}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {dict.about.whyUs.map((item, index) => (
                <div key={item} className="rounded-[1.5rem] border border-[#d9d0c5] bg-[#f7f2ec] p-6">
                  <div className={`mb-5 h-10 w-10 rounded-full ${index === 0 ? "bg-[#111111]" : index === 1 ? "bg-[#b8ada0]" : index === 2 ? "border border-[#d9d0c5] bg-white" : "bg-[#ded5ca]"}`} />
                  <p className="text-lg font-medium leading-7 text-[#2d2925]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ProcessTimeline
        eyebrow={dict.about.processEyebrow}
        title={dict.about.processTitle}
        steps={dict.processSteps}
      />

      <section className="py-16">
        <Container className="flex justify-center">
          <Link href={`/${locale}/contact`}>
            <Button variant="dark">{dict.about.cta}</Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
