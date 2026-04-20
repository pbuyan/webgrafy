export const locales = ["en", "fr"] as const;
export type Locale = (typeof locales)[number];

export async function getMessages(locale: Locale) {
  const mod = await import(`@/content/i18n/${locale}.json`);
  return mod.default as Record<string, any>;
}
