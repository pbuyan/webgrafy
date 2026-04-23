import Link from "next/link";
import { Container } from "@/components/ui/container";
import { PageIntro } from "@/components/ui/page-intro";
import { ServiceCard } from "@/components/ui/service-card";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/lib/i18n/dictionaries";
import type { Locale } from "@/lib/i18n/config";

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
              <ServiceCard
                key={service.title}
                service={service}
                index={index}
                label={dict.common.serviceLabel}
                exploreLabel={dict.common.exploreService}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link href={`/${locale}/contact`}>
              <Button variant="dark">{dict.pages.services.cta}</Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
