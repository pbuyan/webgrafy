"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";
import { getDictionarySync } from "@/lib/i18n/dictionaries";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const params = useParams();
  const rawLocale = Array.isArray(params.locale) ? params.locale[0] : params.locale;
  const locale = rawLocale && isValidLocale(rawLocale) ? rawLocale : defaultLocale;
  const dict = getDictionarySync(locale);

  return (
    <section className="min-h-[70vh] bg-surface">
      <Container className="py-24 lg:py-32">
        <div className="mx-auto max-w-3xl rounded-4xl border border-stroke bg-white p-10 text-center shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          <p className="text-xs uppercase tracking-[0.22em] text-ink-subtle">{dict.errorPage.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-ink-strong sm:text-5xl">
            {dict.errorPage.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-ink-base">{dict.errorPage.text}</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button variant="dark" onClick={reset}>
              {dict.errorPage.retry}
            </Button>
            <Link href={`/${locale}`}>
              <Button variant="outline">{dict.errorPage.cta}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
