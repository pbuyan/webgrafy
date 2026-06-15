import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxProseComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mt-12 text-4xl font-semibold tracking-[-0.04em] text-ink-strong first:mt-0" {...props} />
  ),
  h2: (props) => (
    <h2 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-ink-strong" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-8 text-xl font-semibold text-ink-strong" {...props} />
  ),
  p: (props) => <p className="mt-4 text-base leading-8 text-ink-base" {...props} />,
  a: (props) => (
    <a className="font-medium text-ink-rich underline decoration-stroke underline-offset-4 hover:text-ink-strong" {...props} />
  ),
  ul: (props) => <ul className="mt-4 list-disc space-y-2 pl-6 text-base leading-8 text-ink-base" {...props} />,
  ol: (props) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-base leading-8 text-ink-base" {...props} />,
  li: (props) => <li {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-6 border-l-2 border-brand pl-5 text-lg leading-8 text-ink-mid italic"
      {...props}
    />
  ),
  pre: (props) => (
    <pre className="mt-6 overflow-x-auto rounded-2xl border border-stroke bg-surface-pale p-5 text-sm leading-7 text-ink-rich" {...props} />
  ),
  code: (props) => {
    const { className, children, ...rest } = props;
    if (className) {
      return <code className={className} {...rest}>{children}</code>;
    }
    return (
      <code className="rounded bg-surface-strip px-1.5 py-0.5 text-sm text-ink-rich" {...rest}>
        {children}
      </code>
    );
  },
  hr: () => <hr className="my-10 border-stroke" />,
  strong: (props) => <strong className="font-semibold text-ink-strong" {...props} />,
  em: (props) => <em className="italic" {...props} />,
};

export function createBlogMdxComponents(
  locale: string,
  extras: MDXComponents,
): MDXComponents {
  return {
    ...mdxProseComponents,
    ...extras,
    Link,
  };
}
