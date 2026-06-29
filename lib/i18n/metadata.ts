import type { Metadata } from "next";
import { defaultLocale, locales, siteUrl, type Locale } from "@/lib/i18n/config";

/** Default social share image (1200×630). Resolved against `metadataBase`. */
const DEFAULT_OG_IMAGE = "/images/og-cover.jpg";
const DEFAULT_OG_WIDTH = 1200;
const DEFAULT_OG_HEIGHT = 630;
const META_DESCRIPTION_MAX = 160;

function toOgLocale(locale: Locale): string {
  return locale === "fr" ? "fr_CA" : "en_CA";
}

function alternateOgLocale(locale: Locale): string {
  return locale === "fr" ? "en_CA" : "fr_CA";
}

/**
 * Trim copy to ~160 chars at a word boundary for meta descriptions.
 * Uses explicit `metaDescription` when provided.
 */
export function resolveMetaDescription(
  metaDescription?: string,
  fallbackText?: string,
): string | undefined {
  const source = metaDescription?.trim() || fallbackText?.trim();
  if (!source) return undefined;
  if (source.length <= META_DESCRIPTION_MAX) return source;

  const truncated = source.slice(0, META_DESCRIPTION_MAX - 1);
  const lastSpace = truncated.lastIndexOf(" ");
  if (lastSpace > META_DESCRIPTION_MAX * 0.6) {
    return `${truncated.slice(0, lastSpace).trimEnd()}…`;
  }
  return `${truncated.trimEnd()}…`;
}

/**
 * hreflang map for a locale-agnostic path (used by HTML metadata and sitemap).
 */
export function localeAlternatesMap(path = ""): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const l of locales) {
    languages[l] = `${siteUrl}/${l}${path}`;
  }
  languages["x-default"] = `${siteUrl}/${defaultLocale}${path}`;
  return languages;
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
  return {
    canonical: `${siteUrl}/${locale}${path}`,
    languages: localeAlternatesMap(path),
  };
}

function buildOgImages(image?: string) {
  const src = image ?? DEFAULT_OG_IMAGE;
  return [
    {
      url: src,
      width: DEFAULT_OG_WIDTH,
      height: DEFAULT_OG_HEIGHT,
      alt: "Webgrafy",
    },
  ];
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
  rssFeedUrl,
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
  rssFeedUrl?: string;
}): Metadata {
  const url = `${siteUrl}/${locale}${path}`;
  const images = buildOgImages(image);
  const cardTitle = title ?? siteName;

  return {
    title,
    description,
    alternates: {
      ...localeAlternates(locale, path),
      ...(rssFeedUrl
        ? { types: { "application/rss+xml": rssFeedUrl } }
        : {}),
    },
    openGraph: {
      title: cardTitle,
      description,
      siteName,
      url,
      type,
      locale: toOgLocale(locale),
      alternateLocale: [alternateOgLocale(locale)],
      images,
      ...(type === "article" ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: cardTitle,
      description,
      images: images.map((img) => img.url),
    },
  };
}
