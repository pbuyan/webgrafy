import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === "fr" ? "/fr/services" : "/en/services";
  return buildMetadata({ locale, page: "services", path });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <Container className="py-12">
      <h1 className="text-3xl font-extrabold tracking-tight">{isFr ? "Services" : "Services"}</h1>
      <p className="mt-3 text-muted-foreground">
        {isFr
          ? "Des services pensés pour les rendez-vous : Google Maps, avis, et pages de réservation."
          : "Services built for bookings: Google Maps, reviews, and booking pages."}
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Croissance GBP" : "GBP Growth"}</div>
          <p className="mt-2 text-sm text-muted-foreground">{isFr ? "Posts, photos, optimisation." : "Posts, photos, optimization."}</p>
        </div>
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Avis & réputation" : "Reviews Engine"}</div>
          <p className="mt-2 text-sm text-muted-foreground">{isFr ? "QR, scripts, réponses." : "QR, scripts, replies."}</p>
        </div>
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Page de réservation" : "Booking Funnel Page"}</div>
          <p className="mt-2 text-sm text-muted-foreground">{isFr ? "Conversion + tracking." : "Conversion + tracking."}</p>
        </div>
      </div>
    </Container>
  );
}
