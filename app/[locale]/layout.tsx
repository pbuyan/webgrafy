import "@/styles/globals.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { getMessages, locales, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL("https://webgrafy.com"),
  title: {
    default: "Webgrafy",
    template: "%s"
  }
};

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <SiteHeader locale={locale} messages={messages} />
        <main className="min-h-[calc(100vh-64px)]">{children}</main>
        <SiteFooter locale={locale} messages={messages} />
      </body>
    </html>
  );
}
