import type { Metadata } from "next";
import { defaultLocale, locales, siteUrl, type Locale } from "@/lib/i18n/config";

/** Default social share image (1200×630). Resolved against `metadataBase`. */
const DEFAULT_OG_IMAGE = "/images/og-cover.jpg";

function toOgLocale(locale: Locale): string {
  return locale === "fr" ? "fr_CA" : "en_CA";
}

/**
 * Build canonical + hreflang alternates for a localized route.
 *
 * `path` is the locale-agnostic path beginning with "/" (use "" for the
 * locale home page, e.g. "/services"). Emits one `languages` entry per
 * supported locale plus an `x-default` pointing at the default locale.
 */
export function localeAlternates(
  locale: Locale,
  path = "",
): NonNullable<Metadata["alternates"]> {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${siteUrl}/${l}${path}`;
  }
  languages["x-default"] = `${siteUrl}/${defaultLocale}${path}`;

  return {
    canonical: `${siteUrl}/${locale}${path}`,
    languages,
  };
}

/**
 * Per-page metadata helper. Sets title/description, canonical + hreflang
 * alternates, and page-specific Open Graph + Twitter cards.
 *
 * Next.js does not deep-merge nested metadata across segments, so a page that
 * sets `openGraph` replaces the locale layout's entirely — this helper emits a
 * complete object (image, locale, url, site name) so nothing is lost. The
 * document `<title>` is left as the raw `title` so the layout's title template
 * still appends the brand; the brand is carried on social cards via
 * `og:site_name`.
 */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
  siteName,
  image,
  type = "website",
  publishedTime,
  authors,
}: {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
  siteName: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
}): Metadata {
  const url = `${siteUrl}/${locale}${path}`;
  const images = [image ?? DEFAULT_OG_IMAGE];
  const cardTitle = title ?? siteName;

  return {
    title,
    description,
    alternates: localeAlternates(locale, path),
    openGraph: {
      title: cardTitle,
      description,
      siteName,
      url,
      type,
      locale: toOgLocale(locale),
      images,
      ...(type === "article" ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: cardTitle,
      description,
      images,
    },
  };
}
