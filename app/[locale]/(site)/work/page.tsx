import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === "fr" ? "/fr/realisations" : "/en/work";
  return buildMetadata({ locale, page: "work", path });
}

export default async function WorkPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">{isFr ? "Réalisations" : "Work"}</h1>
      <p className="mt-3 text-muted-foreground">{isFr ? "Exemples et résultats (à compléter)." : "Examples and results (to be completed)."}</p>
    </Container>
  );
}
