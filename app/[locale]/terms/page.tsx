import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
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
    path: "/terms",
    title: dict.pages.terms.title,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const p = dict.pages.terms;

  return (
    <>
      <PageIntro eyebrow={p.eyebrow} title={p.title} text={p.lastUpdated} />

      <section className="py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="divide-y divide-stroke">
              {p.sections.map((section) => (
                <div key={section.heading} className="py-8">
                  <h2 className="text-xl font-semibold text-ink-strong">{section.heading}</h2>
                  <p className="mt-4 text-base leading-8 text-ink-base">{section.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
