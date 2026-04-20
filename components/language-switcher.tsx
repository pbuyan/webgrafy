import Link from "next/link";
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
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const normalized = stripLocale(pathname, locale);

  return (
    <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#6f675d]">
      {locales.map((item) => {
        const href = `/${item}${normalized === "/" ? "" : normalized}`;
        const active = item === locale;

        return (
          <Link
            key={item}
            href={href}
            className={`rounded-full px-2 py-1 transition ${active ? "bg-black text-white" : "hover:text-[#111111]"}`}
          >
            {item}
          </Link>
        );
      })}
    </div>
  );
}
