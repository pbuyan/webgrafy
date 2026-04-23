"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
}: {
  locale: Locale;
  labels: { en: string; fr: string };
}) {
  const pathname = usePathname();
  const normalized = stripLocale(pathname, locale);

  return (
    <div className="flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-white/75">
      {locales.map((item, index) => {
        const href = `/${item}${normalized === "/" ? "" : normalized}`;
        const active = item === locale;

        return (
          <div key={item} className="flex items-center gap-1">
            {index > 0 ? <span>/</span> : null}
            <Link href={href} className={active ? "text-white" : "hover:text-white"}>
              {labels[item]}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
