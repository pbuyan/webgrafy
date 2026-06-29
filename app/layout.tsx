import { headers } from "next/headers";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";
import { AnalyticsGate } from "@/components/analytics-gate";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const headerLocale = headersList.get("x-locale");
  const locale =
    headerLocale && isValidLocale(headerLocale) ? headerLocale : defaultLocale;

  return (
    <html
      lang={locale}
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-surface text-ink antialiased font-sans">
        {children}
        <AnalyticsGate />
      </body>
    </html>
  );
}
