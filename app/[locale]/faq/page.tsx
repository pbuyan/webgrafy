import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { ContactBlock } from "@/components/ui/contact-block";
import { FaqList } from "@/components/ui/faq-list";
import { JsonLd } from "@/components/structured-data";
import { PageIntro } from "@/components/ui/page-intro";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { buildMetadata } from "@/lib/i18n/metadata";
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
    path: "/faq",
    title: dict.pages.faq.title,
    description: dict.pages.faq.text,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  const f = dict.pages.faq;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: f.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <PageIntro eyebrow={f.eyebrow} title={f.title} text={f.text} />

      <section className="border-b border-stroke bg-white py-20">
        <Container>
          <FaqList faqs={f.faqs} />
        </Container>
      </section>

      <ContactBlock id="contact" locale={locale} dict={dict} />
    </>
  );
}
