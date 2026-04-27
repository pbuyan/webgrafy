import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { SectionLabel } from "@/components/ui/section-label";
import { ContactBlock } from "@/components/ui/contact-block";
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

      <section className="border-b border-stroke py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[1.8rem] border border-stroke bg-white p-10 shadow-[0_16px_40px_rgba(0,0,0,0.04)]">
              <SectionLabel>{dict.about.approachEyebrow}</SectionLabel>
              <h2 className="mt-4 text-5xl font-semibold tracking-[-0.04em] text-ink-strong [font-family:var(--font-display)] sm:text-6xl">
                {dict.about.approachTitle}
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-ink-base">{dict.about.approachText}</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {dict.about.whyUs.map((item, index) => (
                <div key={item} className="rounded-[1.5rem] border border-stroke bg-surface-warm p-6">
                  <div className={`mb-5 h-10 w-10 rounded-full ${index === 0 ? "bg-ink" : index === 1 ? "bg-warm-mid" : index === 2 ? "border border-stroke bg-white" : "bg-warm-light"}`} />
                  <p className="text-lg font-medium leading-7 text-ink-rich">{item}</p>
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

      <ContactBlock locale={locale} dict={dict} />
    </>
  );
}
