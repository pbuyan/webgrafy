import { Cormorant_Garamond, Inter } from "next/font/google";
import { defaultLocale } from "@/lib/i18n/config";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      className={`${display.variable} ${sans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#f3eee7] text-[#111111] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
