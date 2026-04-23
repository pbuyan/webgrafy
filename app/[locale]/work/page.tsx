import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { ProjectCard } from "@/components/ui/project-card";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export default async function WorkPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageIntro
        eyebrow={dict.pages.work.eyebrow}
        title={dict.pages.work.title}
        text={dict.pages.work.text}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {dict.projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} yearLabel={dict.common.yearLabel} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
