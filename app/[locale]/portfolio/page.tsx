import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { ProjectCard } from "@/components/ui/project-card";
import { ServiceVisuals } from "@/components/ui/service-visuals";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const p = dict.pages.portfolio;

  return (
    <>
      <PageIntro eyebrow={p.eyebrow} title={p.title} text={p.text} />

      <ServiceVisuals
        eyebrow={p.servicesEyebrow}
        title={p.servicesTitle}
        text={p.servicesText}
        labels={p.serviceVisuals}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {dict.projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} yearLabel={dict.common.yearLabel} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
