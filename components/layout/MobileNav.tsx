"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/routes";
import { getNavLinks, getPageKeyFromPath, getPath } from "@/lib/routes";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function MobileNav({
  locale,
  labels
}: {
  locale: Locale;
  labels: Record<string, string>;
}) {
  const pathname = usePathname();
  const pageKey = getPageKeyFromPath(pathname);
  const nav = getNavLinks(locale);
  const otherLocale: Locale = locale === "en" ? "fr" : "en";
  const switchTo = getPath(pageKey, otherLocale);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={labels.menu}>
          ☰
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[320px] sm:w-[380px]">
        <SheetHeader>
          <SheetTitle>Webgrafy</SheetTitle>
        </SheetHeader>

        <nav className="mt-6 flex flex-col gap-1">
          {nav.map((item) => (
            <Button asChild key={item.key} variant="ghost" className="justify-start">
              <Link href={item.href}>{labels[item.key]}</Link>
            </Button>
          ))}
        </nav>

        <div className="mt-6">
          <Button asChild className="w-full">
            <Link href={getPath("contact", locale)}>{labels.ctaAudit}</Link>
          </Button>
        </div>

        <div className="mt-4 flex justify-center">
          <Button asChild variant="ghost" size="sm">
            <Link href={switchTo}>{labels.switchLang}</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
