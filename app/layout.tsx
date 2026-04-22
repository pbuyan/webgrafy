import "./globals.css";
import { defaultLocale, isValidLocale } from "@/lib/i18n/config";
import { headers } from "next/headers";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") ?? "";
  const firstSegment = pathname.split("/").filter(Boolean)[0];
  const lang =
    firstSegment && isValidLocale(firstSegment) ? firstSegment : defaultLocale;

  return (
    <html lang={lang}>
      <body className="min-h-screen bg-[#f3eee7] text-[#111111] antialiased">
        {children}
      </body>
    </html>
  );
}
