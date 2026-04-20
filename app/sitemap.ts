import type { MetadataRoute } from "next";
import { ROUTES, toAbsolute } from "@/lib/routes";

type ChangeFreq = "daily" | "weekly" | "monthly";

const PRIORITY: Record<keyof typeof ROUTES, number> = {
  home: 1.0,
  services: 0.9,
  pricing: 0.8,
  work: 0.7,
  about: 0.6,
  contact: 0.8,
  faq: 0.5
};

const FREQ: Record<keyof typeof ROUTES, ChangeFreq> = {
  home: "weekly",
  services: "weekly",
  pricing: "weekly",
  work: "monthly",
  about: "monthly",
  contact: "weekly",
  faq: "monthly"
};

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  (Object.keys(ROUTES) as Array<keyof typeof ROUTES>).forEach((key) => {
    const { en, fr } = ROUTES[key];

    entries.push({
      url: toAbsolute(en),
      lastModified: now,
      changeFrequency: FREQ[key],
      priority: PRIORITY[key]
    });

    entries.push({
      url: toAbsolute(fr),
      lastModified: now,
      changeFrequency: FREQ[key],
      priority: PRIORITY[key]
    });
  });

  return entries;
}
