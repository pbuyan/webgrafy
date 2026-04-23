import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HtmlLang } from "@/components/html-lang";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { defaultLocale, isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dict = await getDictionary(validLocale);

  return {
    metadataBase: new URL("https://www.webgrafy.com"),
    title: {
      default: dict.meta.siteName,
      template: `%s | ${dict.meta.siteName}`,
    },
    description: dict.meta.siteDescription,
    openGraph: {
      title: dict.meta.siteName,
      description: dict.meta.siteDescription,
      type: "website",
      locale: validLocale === "fr" ? "fr_CA" : "en_CA",
      images: ["/images/og-cover.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.siteName,
      description: dict.meta.siteDescription,
      images: ["/images/og-cover.jpg"],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  const dict = await getDictionary(locale as Locale);

  return (
    <>
      <HtmlLang locale={locale as Locale} />
      <SiteHeader locale={locale as Locale} dict={dict} />
      <main className="site-main">{children}</main>
      <SiteFooter locale={locale as Locale} dict={dict} />
    </>
  );
}
