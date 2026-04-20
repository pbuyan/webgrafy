export type Locale = "en" | "fr";

export const BASE_URL = "https://webgrafy.com" as const;

export const ROUTES = {
  home: { en: "/en", fr: "/fr" },
  services: { en: "/en/services", fr: "/fr/services" },
  pricing: { en: "/en/pricing", fr: "/fr/tarifs" },
  work: { en: "/en/work", fr: "/fr/realisations" },
  about: { en: "/en/about", fr: "/fr/a-propos" },
  contact: { en: "/en/contact", fr: "/fr/contact" },
  faq: { en: "/en/faq", fr: "/fr/faq" }
} as const;

export type PageKey = keyof typeof ROUTES;

export const INTERNAL_FR_REWRITES: Record<string, string> = {
  "/fr/tarifs": "/fr/pricing",
  "/fr/realisations": "/fr/work",
  "/fr/a-propos": "/fr/about"
};

export function toAbsolute(path: string) {
  return `${BASE_URL}${path}`;
}

export function getPageKeyFromPath(pathname: string): PageKey {
  const normalized =
    pathname === "/fr/pricing"
      ? "/fr/tarifs"
      : pathname === "/fr/work"
        ? "/fr/realisations"
        : pathname === "/fr/about"
          ? "/fr/a-propos"
          : pathname;

  const entries = Object.entries(ROUTES) as Array<[PageKey, { en: string; fr: string }]>;
  for (const [key, val] of entries) {
    if (normalized === val.en || normalized === val.fr) return key;
  }
  return "home";
}

export function getPath(page: PageKey, locale: Locale): string {
  return ROUTES[page][locale];
}

export function getNavLinks(locale: Locale) {
  return [
    { key: "home" as const, href: ROUTES.home[locale] },
    { key: "services" as const, href: ROUTES.services[locale] },
    { key: "pricing" as const, href: ROUTES.pricing[locale] },
    { key: "work" as const, href: ROUTES.work[locale] },
    { key: "about" as const, href: ROUTES.about[locale] },
    { key: "contact" as const, href: ROUTES.contact[locale] }
  ];
}
