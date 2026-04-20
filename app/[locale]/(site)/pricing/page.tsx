import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === "fr" ? "/fr/tarifs" : "/en/pricing";
  return buildMetadata({ locale, page: "pricing", path });
}

export default async function PricingPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">{isFr ? "Tarifs" : "Pricing"}</h1>
      <p className="mt-3 text-muted-foreground">
        {isFr ? "Forfaits simples. Livrables clairs." : "Simple pricing. Clear deliverables."}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Sprint Visibilité" : "Visibility Sprint"}</div>
          <p className="mt-2 text-sm text-muted-foreground">{isFr ? "À partir de 1 200 $" : "Starting at $1,200"}</p>
        </div>
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Retainer mensuel" : "Monthly Retainer"}</div>
          <p className="mt-2 text-sm text-muted-foreground">{isFr ? "350 $ / 650 $ / 1 100 $" : "$350 / $650 / $1,100"}</p>
        </div>
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Page de réservation" : "Booking Page"}</div>
          <p className="mt-2 text-sm text-muted-foreground">{isFr ? "À partir de 1 200 $" : "Starting at $1,200"}</p>
        </div>
      </div>
    </Container>
  );
}
