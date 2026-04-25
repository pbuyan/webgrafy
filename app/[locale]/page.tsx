import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactBlock } from "@/components/ui/contact-block";
import { Container } from "@/components/ui/container";
import { LogoStrip } from "@/components/ui/logo-strip";
import { ProcessTimeline } from "@/components/ui/process-timeline";
import { ProjectCard } from "@/components/ui/project-card";
import { SectionLabel } from "@/components/ui/section-label";
import { ServiceCard } from "@/components/ui/service-card";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";
import { buttonVariants } from "@/components/ui/button";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="relative -mt-20 overflow-hidden pt-20 text-white">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            priority
            className="object-cover object-[center_right] sm:object-right"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-linear-to-r from-pitch via-pitch/85 to-transparent sm:via-pitch/65"
            aria-hidden
          />
        </div>
        {/* <Container className="py-16 lg:py-20"> */}
        <div className="relative z-10 grid items-stretch gap-0 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.28)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_40%)] px-8 py-12 lg:px-12 lg:py-16">
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-white/70">
              {dict.home.badge}
            </div>
            <p className="mt-7 text-xs uppercase tracking-[0.22em] text-brand">{dict.home.eyebrow}</p>
            <h1 className="mt-5 max-w-xl text-6xl font-semibold leading-[0.9] tracking-[-0.05em] text-surface [font-family:var(--font-display)] sm:text-7xl">
              {dict.home.title}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/78">{dict.home.intro}</p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href={`/${locale}/contact`} className={buttonVariants({ variant: "primary" })}>
                {dict.home.ctaPrimary}
              </Link>
              <Link href={`/${locale}/work`} className={buttonVariants({ variant: "secondary", className: "gap-2 rounded-none" })}>
                {dict.home.ctaSecondary}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[420px] lg:min-h-[900px]" aria-hidden />
        </div>
        {/* </Container> */}
      </section>

      <LogoStrip title={dict.home.trustedBy} logos={dict.home.logoStrip} />

      <section className="border-b border-stroke bg-surface-pale py-20">
        <Container>
          <SectionLabel>{dict.home.servicesEyebrow}</SectionLabel>
          <h2 className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-ink-strong [font-family:var(--font-display)] sm:text-6xl">
            {dict.home.servicesTitle}
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {dict.services.map((service, index) => (
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                label={dict.common.serviceLabel}
                exploreLabel={dict.common.exploreService}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-stroke bg-white py-20">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>{dict.home.workEyebrow}</SectionLabel>
              <h2 className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-ink-strong [font-family:var(--font-display)] sm:text-6xl">
                {dict.home.workTitle}
              </h2>
            </div>
            <Link href={`/${locale}/work`} className="inline-flex items-center gap-2 text-sm font-medium text-ink-rich">
              {dict.common.viewAllProjects}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {dict.projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} yearLabel={dict.common.yearLabel} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-b border-stroke bg-surface-warm py-20">
        <Container>
          <SectionLabel>{dict.home.testimonialsEyebrow}</SectionLabel>
          <h2 className="mt-3 text-5xl font-semibold tracking-[-0.04em] text-ink-strong [font-family:var(--font-display)] sm:text-6xl">
            {dict.home.testimonialsTitle}
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {dict.testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline
        eyebrow={dict.home.processEyebrow}
        title={dict.home.processTitle}
        steps={dict.processSteps}
      />

      <ContactBlock locale={locale} dict={dict} />
    </>
  );
}
