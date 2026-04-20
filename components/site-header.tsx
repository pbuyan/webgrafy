import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

export function SiteHeader({
  locale,
  pathname,
  dict,
}: {
  locale: Locale;
  pathname: string;
  dict: SiteDictionary;
}) {
  const navItems = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.work, href: `/${locale}/work` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-[#d9d0c5] bg-[#f3eee7]/90 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-5 gap-4">
        <Link href={`/${locale}`} className="text-lg font-semibold uppercase tracking-[0.28em] text-[#111111]">
          {dict.meta.siteName}
        </Link>

        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.18em] text-[#6f675d] md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-[#111111]">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} pathname={pathname} />
          <Link href={`/${locale}/contact`}>
            <Button size="sm">{dict.nav.bookCall}</Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}
