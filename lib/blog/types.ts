import { z } from "zod";
import type { Locale } from "@/lib/i18n/config";

export const blogFrontmatterSchema = z.object({
  title: z.string().min(1),
  excerpt: z.string().min(1),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  author: z.string().optional(),
  image: z.string().optional(),
  tags: z.array(z.string()).default([]),
  featured: z.boolean().default(false),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;

export type BlogPostMeta = BlogFrontmatter & {
  slug: string;
  locale: Locale;
};
