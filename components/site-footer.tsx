import Link from "next/link";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const navItems = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.work, href: `/${locale}/work` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.contact, href: `/${locale}/contact` },
  ];

  return (
    <footer className="border-t border-[#d9d0c5] bg-[#efe8df]">
      <Container className="grid gap-8 py-10 lg:grid-cols-3">
        <div>
          <div className="text-lg font-semibold uppercase tracking-[0.28em]">{dict.meta.siteName}</div>
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#5f564c]">{dict.footer.blurb}</p>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d7468]">{dict.footer.navigation}</div>
          <div className="mt-4 grid gap-3 text-sm text-[#5f564c]">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7d7468]">{dict.footer.contact}</div>
          <div className="mt-4 grid gap-3 text-sm text-[#5f564c]">
            <p>hello@webgrafy.com</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
