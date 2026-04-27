"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

type SiteHeaderBarProps = { locale: Locale; dict: SiteDictionary; pathname: string };

function SiteHeaderBar({ locale, dict, pathname }: SiteHeaderBarProps) {
  const isHome = pathname === `/${locale}` || pathname === `/${locale}/`;
  const [homeHeaderTheme, setHomeHeaderTheme] = useState<"dark" | "light">("dark");
  /** Hidden while scrolling down the document; shown near top or when scrolling up. */
  const [concealed, setConcealed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);
  const isDarkHeader = menuOpen || (isHome && homeHeaderTheme === "dark");
  const langTone = isDarkHeader ? ("onDark" as const) : ("onLight" as const);

  useLayoutEffect(() => {
    document.documentElement.style.setProperty("--header-offset", concealed ? "0px" : "var(--site-header-height)");
    return () => {
      document.documentElement.style.removeProperty("--header-offset");
    };
  }, [concealed]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        const topThreshold = 12;
        const scrollSlop = 6;

        if (y < topThreshold) {
          setConcealed(false);
        } else if (delta > scrollSlop) {
          setConcealed(true);
        } else if (delta < -scrollSlop) {
          setConcealed(false);
        }

        lastScrollY.current = y;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!isHome) return;

    let frame = 0;
    const syncHeaderTheme = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const headerHeight = headerRef.current?.getBoundingClientRect().height ?? 0;
        const probeY = Math.max(0, Math.round(headerHeight + 1));
        const elements = document.elementsFromPoint(window.innerWidth / 2, probeY);
        const probe = elements.find((el) => !headerRef.current?.contains(el)) ?? null;
        const sectionTheme = probe?.closest("[data-header-theme]")?.getAttribute("data-header-theme");
        setHomeHeaderTheme(sectionTheme === "light" ? "light" : "dark");
      });
    };

    syncHeaderTheme();
    window.addEventListener("scroll", syncHeaderTheme, { passive: true });
    window.addEventListener("resize", syncHeaderTheme);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", syncHeaderTheme);
      window.removeEventListener("resize", syncHeaderTheme);
    };
  }, [isHome]);

  const navItems = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.work, href: `/${locale}/work` },
    { label: dict.nav.about, href: `/${locale}/about` },
  ];

  return (
    <>
      <header
        ref={headerRef}
        {...(concealed ? { inert: true } : {})}
        className={cn(
          "fixed inset-x-0 top-0 z-30 border-b bg-transparent transition-transform duration-300 ease-out will-change-transform",
          concealed ? "pointer-events-none -translate-y-full" : "translate-y-0",
          isHome ? "border-white/10 text-white" : "border-stroke/80 text-ink-strong",
        )}
      >
        <Container className="flex items-center justify-between gap-4 py-4">
          <Link
            href={`/${locale}`}
            onClick={() => setMenuOpen(false)}
            className={cn("text-3xl font-semibold tracking-[-0.04em]", isHome ? "text-surface" : "text-ink-strong")}
          >
            {dict.meta.siteName}
          </Link>

          <nav
            className={cn(
              "hidden items-center gap-8 text-sm md:flex",
              isDarkHeader ? "text-white/80" : "text-ink-base",
            )}
          >
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    active
                      ? cn("border-b pb-1", isDarkHeader ? "border-white text-white" : "border-ink-strong text-ink-strong")
                      : isDarkHeader
                        ? "hover:text-white"
                        : "hover:text-ink-strong", 'uppercase',
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher locale={locale} labels={dict.nav.langShort} tone={langTone} />
            <Link href={`/${locale}/about#contact-block`} className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
              >
                {dict.nav.contact}
              </Button>
            </Link>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className={cn(
                "flex h-9 w-9 items-center justify-center md:hidden",
                isHome ? "text-white" : "text-ink-strong",
              )}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </Container>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-20 flex flex-col bg-pitch pt-(--site-header-height) md:hidden">
          <nav className="flex flex-col gap-1 px-6 py-8">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "border-b border-white/10 py-5 text-2xl font-semibold tracking-[-0.03em] text-white transition-opacity",
                    active ? "opacity-100" : "opacity-55 hover:opacity-100",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="px-6">
            <Link href={`/${locale}/about#contact-block`} onClick={() => setMenuOpen(false)}>
              <Button variant="outline" className="w-full rounded-none">
                {dict.nav.contact}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export function SiteHeader(props: { locale: Locale; dict: SiteDictionary }) {
  const pathname = usePathname();
  return <SiteHeaderBar key={pathname} pathname={pathname} {...props} />;
}
