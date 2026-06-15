import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { BlogCallout } from "@/components/blog/blog-callout";
import { BlogCTA } from "@/components/blog/blog-cta";
import { createBlogMdxComponents } from "@/lib/blog/mdx-prose";
import type { Locale } from "@/lib/i18n/config";
import type { BlogFrontmatter } from "@/lib/blog/types";

export async function compileBlogPost(locale: Locale, source: string) {
  const components = createBlogMdxComponents(locale, {
    BlogCallout,
    BlogCTA: () => <BlogCTA locale={locale} />,
  });

  return compileMDX<BlogFrontmatter>({
    source,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
      },
    },
  });
}
