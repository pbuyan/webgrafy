"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const pathname = usePathname();
  const navItems = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.work, href: `/${locale}/work` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#080808]/85 text-white backdrop-blur-xl">
      <Container className="flex items-center justify-between gap-4 py-5">
        <Link href={`/${locale}`} className="text-3xl font-semibold tracking-[-0.04em] text-[#f3eee7]">
          {dict.meta.siteName}
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className={active ? "border-b border-white pb-1 text-white" : "hover:text-white"}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher locale={locale} labels={dict.nav.langShort} />
          <Link href={`/${locale}/contact`}>
            <Button variant="primary" size="sm" className="rounded-none">
              {dict.nav.bookCall}
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
}
