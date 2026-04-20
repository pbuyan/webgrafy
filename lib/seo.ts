import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { seoEn } from "@/content/seo/en";
import { seoFr } from "@/content/seo/fr";
import { BASE_URL, ROUTES } from "@/lib/routes";

export type PageKey = keyof typeof ROUTES;

export function getSeo(locale: Locale, page: PageKey) {
  return (locale === "fr" ? seoFr : seoEn)[page];
}

export function buildMetadata(args: { locale: Locale; page: PageKey; path: string }): Metadata {
  const { locale, page, path } = args;
  const seo = getSeo(locale, page);

  const url = `${BASE_URL}${path}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: url,
      languages: {
        en: `${BASE_URL}${ROUTES[page].en}`,
        fr: `${BASE_URL}${ROUTES[page].fr}`
      }
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url,
      siteName: "Webgrafy",
      locale: locale === "fr" ? "fr_CA" : "en_CA",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description
    }
  };
}
