import { describe, expect, it } from "vitest";
import { getAllPosts, getAllPostParams, getPostSlugs } from "@/lib/blog/posts";

describe("blog posts", () => {
  it("returns posts sorted by publishedAt descending", () => {
    const posts = getAllPosts("en");
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]?.slug).toBe("best-marketing-materials");

    for (let i = 1; i < posts.length; i++) {
      expect(posts[i - 1]!.publishedAt >= posts[i]!.publishedAt).toBe(true);
    }
  });

  it("requires both locales for every slug", () => {
    const slugs = getPostSlugs();
    const params = getAllPostParams();

    expect(slugs.length).toBeGreaterThan(0);
    expect(params).toHaveLength(slugs.length * 2);
    expect(params).toEqual(
      expect.arrayContaining([
        { locale: "en", slug: "design-trends-2026" },
        { locale: "fr", slug: "design-trends-2026" },
      ]),
    );
  });
});
