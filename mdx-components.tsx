import type { MDXComponents } from "mdx/types";
import { mdxProseComponents } from "@/lib/blog/mdx-prose";

export function useMDXComponents(): MDXComponents {
  return mdxProseComponents;
}
