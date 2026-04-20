import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import { Container } from "@/components/layout/Container";
import ContactForm from "@/components/sections/contact/ContactForm";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const path = locale === "fr" ? "/fr/contact" : "/en/contact";
  return buildMetadata({ locale, page: "contact", path });
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <Container className="py-10">
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="md:sticky md:top-24">
          <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
          <p className="mt-3 text-muted-foreground">
            {locale === "fr"
              ? "Nous vous envoyons un plan d’action en 5 points après votre audit."
              : "We’ll share a 5-point action plan after your audit."}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
            <li>• {locale === "fr" ? "Audit gratuit (15 min)" : "Free audit (15 min)"}</li>
            <li>• {locale === "fr" ? "Mise en place rapide" : "Fast setup"}</li>
            <li>• {locale === "fr" ? "Approche orientée rendez-vous" : "Booking-focused approach"}</li>
          </ul>
        </div>

        <ContactForm locale={locale} />
      </div>
    </Container>
  );
}
