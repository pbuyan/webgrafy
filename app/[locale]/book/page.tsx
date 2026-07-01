import type { Metadata } from "next";
import Link from "next/link";
import { CalEmbed } from "@/components/cal-embed";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata, resolveMetaDescription } from "@/lib/i18n/metadata";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return buildMetadata({
    locale,
    siteName: dict.meta.siteName,
    path: "/book",
    title: dict.pages.book.title,
    description: resolveMetaDescription(
      dict.pages.book.metaDescription,
      dict.pages.book.text,
    ),
  });
}

export default async function BookPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const b = dict.pages.book;
  const calLink = process.env.NEXT_PUBLIC_CALCOM_LINK;

  return (
    <>
      <PageIntro eyebrow={b.eyebrow} title={b.title} text={b.text} />
      <section className="py-16 lg:py-20">
        <Container>
          {calLink ? (
            <CalEmbed link={calLink} />
          ) : (
            <div className="mx-auto max-w-xl rounded-[1.6rem] border border-stroke bg-surface-warm p-10 text-center">
              <p className="text-lg leading-8 text-ink-base">{b.fallbackText}</p>
              <Link href={`/${locale}/about#contact`} className="mt-8 inline-block">
                <Button variant="dark">{b.fallbackCta}</Button>
              </Link>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
