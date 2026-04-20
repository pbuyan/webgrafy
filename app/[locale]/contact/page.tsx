import type { Metadata } from "next";
import { ContactBlock } from "@/components/ui/contact-block";
import { PageIntro } from "@/components/ui/page-intro";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return {
    title: dict.pages.contact.eyebrow,
    description: dict.pages.contact.text,
    alternates: { canonical: `/${locale}/contact` },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageIntro
        eyebrow={dict.pages.contact.eyebrow}
        title={dict.pages.contact.title}
        text={dict.pages.contact.text}
      />
      <ContactBlock locale={locale} dict={dict} />
    </>
  );
}
