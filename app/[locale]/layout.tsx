import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { HtmlLang } from "@/components/html-lang";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { CookieConsent } from "@/components/ui/cookie-consent";
import { CursorFollower } from "@/components/ui/cursor-follower";
import { JsonLd } from "@/components/structured-data";
import { defaultLocale, isValidLocale, locales, siteUrl, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import {
  ORGANIZATION_ID,
  WEBSITE_ID,
  organizationPublisher,
} from "@/lib/seo/schema";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(validLocale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.siteName,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.siteDescription,
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon/icon-32.png", type: "image/png", sizes: "32x32" },
        { url: "/favicon/icon-16.png", type: "image/png", sizes: "16x16" },
      ],
      apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180" },
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title: dict.meta.siteName,
      description: dict.meta.siteDescription,
      type: "website",
      locale: validLocale === "fr" ? "fr_CA" : "en_CA",
      images: ["/images/og-cover.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.siteName,
      description: dict.meta.siteDescription,
      images: ["/images/og-cover.jpg"],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: dict.meta.siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo-black.png`,
    description: dict.meta.siteDescription,
    email: dict.contactBlock.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Montreal",
      addressRegion: "QC",
      addressCountry: "CA",
    },
    areaServed: "CA",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61591352091454",
      "https://www.instagram.com/webgrafy/",
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteUrl,
    name: dict.meta.siteName,
    description: dict.meta.siteDescription,
    publisher: organizationPublisher(),
    inLanguage: [...locales],
  };

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={websiteSchema} />
      <CursorFollower />
      <HtmlLang locale={locale as Locale} />
      <SiteHeader locale={locale as Locale} dict={dict} />
      <main className="site-main">{children}</main>
      <SiteFooter locale={locale as Locale} dict={dict} />
      <CookieConsent locale={locale as Locale} dict={dict} />
    </>
  );
}
