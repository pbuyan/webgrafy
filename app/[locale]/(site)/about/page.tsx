import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === "fr" ? "/fr/a-propos" : "/en/about";
  return buildMetadata({ locale, page: "about", path });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">{isFr ? "À propos" : "About"}</h1>
      <p className="mt-3 text-muted-foreground">{isFr ? "Webgrafy aide les entreprises à obtenir plus de rendez-vous." : "Webgrafy helps businesses get more bookings."}</p>
    </Container>
  );
}
