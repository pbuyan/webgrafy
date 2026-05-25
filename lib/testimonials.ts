import type { TestimonialItem } from "@/lib/i18n/types";

export const HOME_TESTIMONIAL_LIMIT = 6;

/** Testimonials shown on the home page carousel (featured first, then fill to limit). */
export function getHomeTestimonials(
  testimonials: TestimonialItem[],
  limit = HOME_TESTIMONIAL_LIMIT,
): TestimonialItem[] {
  const featured = testimonials.filter((item) => item.featured);

  if (featured.length >= limit) {
    return featured.slice(0, limit);
  }

  if (featured.length > 0) {
    const rest = testimonials.filter((item) => !item.featured);
    return [...featured, ...rest].slice(0, limit);
  }

  return testimonials.slice(0, limit);
}

export function chunkTestimonials<T>(items: T[], size: number): T[][] {
  if (size < 1) return [items];

  const pages: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    pages.push(items.slice(i, i + size));
  }
  return pages;
}
