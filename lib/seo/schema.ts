import { siteUrl } from "@/lib/i18n/config";
import type { Locale } from "@/lib/i18n/config";

export const ORGANIZATION_ID = `${siteUrl}/#organization`;
export const WEBSITE_ID = `${siteUrl}/#website`;

export function organizationPublisher() {
  return { "@id": ORGANIZATION_ID };
}

export function absoluteImageUrl(image: string): string {
  return image.startsWith("http") ? image : `${siteUrl}${image}`;
}

export function pageUrl(locale: Locale, path = ""): string {
  return `${siteUrl}/${locale}${path}`;
}
