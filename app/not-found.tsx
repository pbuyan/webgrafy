"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";
import { getDictionarySync } from "@/lib/i18n/dictionaries";

// Client component so it can read the locale from the URL without calling
// `headers()`. Using `headers()` in the root not-found would opt every route
// into dynamic rendering and disable static generation site-wide.
export default function NotFound() {
  const pathname = usePathname() ?? "";
  const segment = pathname.split("/").filter(Boolean)[0] ?? "";
  const locale = isValidLocale(segment) ? segment : defaultLocale;
  const dict = getDictionarySync(locale);

  return (
    <section className="min-h-[70vh] bg-surface">
      <Container className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl rounded-4xl border border-stroke bg-white p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          <p className="text-xs uppercase tracking-[0.22em] text-ink-subtle">{dict.notFound.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ink-strong sm:text-5xl">
            {dict.notFound.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-base">{dict.notFound.text}</p>
          <div className="mt-10 flex justify-center">
            <Link href={`/${locale}`}>
              <Button variant="dark">{dict.notFound.cta}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
