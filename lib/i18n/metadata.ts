import type { Metadata } from "next";
import { defaultLocale, locales, siteUrl, type Locale } from "@/lib/i18n/config";

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
 * Per-page metadata helper. Sets title/description and the canonical +
 * hreflang alternates. Intentionally omits `openGraph` so the locale
 * layout's Open Graph defaults (image, locale) are preserved — Next.js
 * does not deep-merge nested metadata objects across segments.
 */
export function buildMetadata({
  locale,
  path = "",
  title,
  description,
}: {
  locale: Locale;
  path?: string;
  title?: string;
  description?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: localeAlternates(locale, path),
  };
}
