import { describe, expect, it } from "vitest";

import { chunkTestimonials, getHomeTestimonials } from "@/lib/testimonials";
import type { TestimonialItem } from "@/lib/i18n/types";

const items: TestimonialItem[] = [
  { quote: "a", name: "A", role: "Co A" },
  { quote: "b", name: "B", role: "Co B", featured: true },
  { quote: "c", name: "C", role: "Co C" },
  { quote: "d", name: "D", role: "Co D", featured: true },
  { quote: "e", name: "E", role: "Co E" },
  { quote: "f", name: "F", role: "Co F" },
  { quote: "g", name: "G", role: "Co G" },
];

describe("getHomeTestimonials", () => {
  it("returns featured items first up to the limit", () => {
    const result = getHomeTestimonials(items, 4);
    expect(result.map((t) => t.name)).toEqual(["B", "D", "A", "C"]);
  });

  it("falls back to the first N items when none are featured", () => {
    const none = items.map(({ quote, name, role }) => ({ quote, name, role }));
    expect(getHomeTestimonials(none, 3).map((t) => t.name)).toEqual(["A", "B", "C"]);
  });
});

describe("chunkTestimonials", () => {
  it("chunks items into pages", () => {
    expect(chunkTestimonials(["a", "b", "c", "d", "e"], 2)).toEqual([
      ["a", "b"],
      ["c", "d"],
      ["e"],
    ]);
  });
});
