import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === "fr" ? "/fr/faq" : "/en/faq";
  return buildMetadata({ locale, page: "faq", path });
}

export default async function FAQPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">{isFr ? "FAQ" : "FAQs"}</h1>
      <div className="mt-6 space-y-4">
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "En combien de temps voit-on des résultats ?" : "How fast can we see results?"}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {isFr
              ? "Souvent en quelques semaines, selon la concurrence et la constance."
              : "Often within a few weeks depending on competition and consistency."}
          </p>
        </div>
      </div>
    </Container>
  );
}
