import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

const baseUrl = "https://www.webgrafy.com";
const pages = ["", "/services", "/work", "/about", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    pages.map((page) => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: page === "" ? "weekly" : "monthly",
      priority: page === "" ? 1 : 0.8,
    }))
  );
}
