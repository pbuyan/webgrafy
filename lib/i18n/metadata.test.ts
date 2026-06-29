import { describe, expect, it } from "vitest";
import {
  localeAlternatesMap,
  resolveMetaDescription,
} from "@/lib/i18n/metadata";

describe("resolveMetaDescription", () => {
  it("returns explicit meta description when provided", () => {
    expect(resolveMetaDescription("Short SEO copy.", "Long hero text.")).toBe(
      "Short SEO copy.",
    );
  });

  it("truncates long fallback text at a word boundary", () => {
    const long =
      "At Webgrafy, we help small and medium businesses look professional, attract more customers, and grow both online and offline with branding, websites, print, packaging, and local SEO support for Québec and Canada.";
    const result = resolveMetaDescription(undefined, long);
    expect(result).toBeDefined();
    expect(result!.length).toBeLessThanOrEqual(160);
    expect(result!.endsWith("…")).toBe(true);
  });

  it("returns undefined when no copy is provided", () => {
    expect(resolveMetaDescription()).toBeUndefined();
  });
});

describe("localeAlternatesMap", () => {
  it("builds hreflang URLs for all locales plus x-default", () => {
    expect(localeAlternatesMap("/services")).toEqual({
      en: "https://www.webgrafy.com/en/services",
      fr: "https://www.webgrafy.com/fr/services",
      "x-default": "https://www.webgrafy.com/en/services",
    });
  });

  it("supports the locale home path", () => {
    expect(localeAlternatesMap("")).toEqual({
      en: "https://www.webgrafy.com/en",
      fr: "https://www.webgrafy.com/fr",
      "x-default": "https://www.webgrafy.com/en",
    });
  });
});
