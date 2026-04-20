"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/routes";
import { getPageKeyFromPath, getPath } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function LanguageSwitch({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const pageKey = getPageKeyFromPath(pathname);
  const otherLocale: Locale = locale === "en" ? "fr" : "en";

  return (
    <div className="flex items-center gap-1">
      <Button
        asChild
        variant="ghost"
        size="sm"
        className={cn("px-2", locale === "en" && "font-semibold")}
        aria-current={locale === "en" ? "page" : undefined}
      >
        <Link href={getPath(pageKey, "en")}>EN</Link>
      </Button>
      <span className="text-muted-foreground">|</span>
      <Button
        asChild
        variant="ghost"
        size="sm"
        className={cn("px-2", locale === "fr" && "font-semibold")}
        aria-current={locale === "fr" ? "page" : undefined}
      >
        <Link href={getPath(pageKey, otherLocale)}>FR</Link>
      </Button>
    </div>
  );
}
