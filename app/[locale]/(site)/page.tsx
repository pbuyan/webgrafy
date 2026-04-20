import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === "fr" ? "/fr" : "/en";
  return buildMetadata({ locale, page: "home", path });
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const isFr = locale === "fr";

  return (
    <Container className="py-14">
      <div className="max-w-3xl">
        <div className="text-sm text-muted-foreground">Webgrafy</div>
        <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
          {isFr
            ? "Plus de rendez-vous pour les entreprises beauté & bien-être."
            : "More bookings for beauty & wellness businesses."}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {isFr
            ? "Nous aidons les salons et cliniques à être visibles sur Google, à gagner la confiance grâce aux avis, et à transformer les visiteurs en rendez-vous."
            : "We help salons and clinics get found on Google, build trust with reviews, and turn visitors into appointments."}
        </p>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Google Business Profile" : "Google Business Profile"}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {isFr ? "Visibilité sur Maps + posts + photos." : "Maps visibility + posts + photos."}
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Avis & réputation" : "Reviews & reputation"}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {isFr ? "Système simple pour obtenir plus d’avis 5★." : "Simple system to get more 5★ reviews."}
          </p>
        </div>
        <div className="rounded-xl border p-5">
          <div className="font-semibold">{isFr ? "Page de réservation" : "Booking page"}</div>
          <p className="mt-2 text-sm text-muted-foreground">
            {isFr ? "Page rapide qui convertit en rendez-vous." : "Fast page that converts into appointments."}
          </p>
        </div>
      </div>

      <div className="mt-10 text-sm text-muted-foreground">
        {isFr ? "(Remplacez ce contenu par vos sections finales.)" : "(Replace this with your final sections.)"}
      </div>
    </Container>
  );
}
