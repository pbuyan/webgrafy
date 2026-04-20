"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/routes";
import { getNavLinks, getPath } from "@/lib/routes";
import { isActiveNavLink } from "@/lib/nav";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { LanguageSwitch } from "@/components/layout/LanguageSwitch";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/utils";

export function SiteHeader({
  locale,
  messages
}: {
  locale: Locale;
  messages: Record<string, any>;
}) {
  const pathname = usePathname();
  const nav = getNavLinks(locale);
  const t = messages.nav;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href={getPath("home", locale)} className="font-extrabold tracking-tight">
            Webgrafy
          </Link>

          <nav className="hidden md:flex items-center gap-2 text-sm">
            {nav.map((item) => {
              const active = isActiveNavLink({ pathname, href: item.href, locale });
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 transition-colors",
                    active
                      ? "text-foreground bg-muted font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {t[item.key]}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <LanguageSwitch locale={locale} />
          </div>

          <Button asChild className="hidden md:inline-flex">
            <Link href={getPath("contact", locale)}>{t.ctaAudit}</Link>
          </Button>

          <div className="md:hidden">
            <MobileNav
              locale={locale}
              labels={{
                menu: t.menu,
                home: t.home,
                services: t.services,
                pricing: t.pricing,
                work: t.work,
                about: t.about,
                contact: t.contact,
                ctaAudit: t.ctaAudit,
                switchLang: locale === "en" ? "FR" : "EN"
              }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
}
