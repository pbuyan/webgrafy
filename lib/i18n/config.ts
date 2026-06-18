export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/**
 * Canonical site origin. Single source of truth for absolute URLs
 * (metadata, sitemap, robots, hreflang). Trailing slash is stripped so
 * callers can safely append paths.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://www.webgrafy.com"
).replace(/\/+$/, "");

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
