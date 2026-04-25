"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { locales, type Locale } from "@/lib/i18n/config";

function stripLocale(pathname: string, locale: Locale) {
  if (pathname === `/${locale}`) return "/";
  if (pathname.startsWith(`/${locale}/`)) {
    return pathname.replace(`/${locale}`, "") || "/";
  }
  return pathname;
}

export function LanguageSwitcher({
  locale,
  labels,
  tone = "onDark",
}: {
  locale: Locale;
  labels: { en: string; fr: string };
  tone?: "onDark" | "onLight";
}) {
  const pathname = usePathname();
  const normalized = stripLocale(pathname, locale);
  const isLight = tone === "onLight";

  return (
    <div
      className={cn(
        "flex items-center gap-1 text-xs uppercase tracking-[0.16em]",
        isLight ? "text-ink-base/90" : "text-white/75",
      )}
    >
      {locales.map((item, index) => {
        const href = `/${item}${normalized === "/" ? "" : normalized}`;
        const active = item === locale;

        return (
          <div key={item} className="flex items-center gap-1">
            {index > 0 ? <span>/</span> : null}
            <Link
              href={href}
              className={cn(
                active
                  ? isLight
                    ? "text-ink-strong"
                    : "text-white"
                  : isLight
                    ? "hover:text-ink-strong"
                    : "hover:text-white",
              )}
            >
              {labels[item]}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
