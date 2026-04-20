import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { Button } from "@/components/ui/button";
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
    title: dict.pages.services.eyebrow,
    description: dict.pages.services.text,
    alternates: { canonical: `/${locale}/services` },
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(locale);

  return (
    <>
      <PageIntro
        eyebrow={dict.pages.services.eyebrow}
        title={dict.pages.services.title}
        text={dict.pages.services.text}
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {dict.services.map((service, index) => (
              <div key={service.title} className="rounded-[2.2rem] border border-[#d9d0c5] bg-white/60 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                <div className="mb-8 flex items-center justify-between border-b border-[#d9d0c5] pb-4 text-[11px] uppercase tracking-[0.18em] text-[#7d7468]">
                  <span>{service.index}</span>
                  <span>{service.title}</span>
                </div>
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                  <div className={`h-32 rounded-[1.5rem] border border-[#d9d0c5] ${index % 2 === 0 ? "bg-[#f0e9df]" : "bg-white"}`} />
                  <div>
                    <h3 className="text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#544c43]">{service.description}</p>
                    <ul className="mt-6 space-y-2 text-sm text-[#6e665d]">
                      {service.items.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href={`/${locale}/contact`}><Button>{dict.pages.services.cta}</Button></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
