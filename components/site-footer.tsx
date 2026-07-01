import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NewsletterSignup } from "@/components/newsletter-signup";
import type { Locale } from "@/lib/i18n/config";
import type { SiteDictionary } from "@/lib/i18n/types";

type FooterItem = {
  label: string;
  href?: string;
};

function FooterListItem({ item, className }: { item: FooterItem; className?: string }) {
  if (!item.href) {
    return <p>{item.label}</p>;
  }

  return (
    <Link href={item.href} className={className}>
      {item.label}
    </Link>
  );
}

export function SiteFooter({ locale, dict }: { locale: Locale; dict: SiteDictionary }) {
  const navItems = [
    { label: dict.nav.home, href: `/${locale}` },
    { label: dict.nav.services, href: `/${locale}/services` },
    { label: dict.nav.packages, href: `/${locale}/packages` },
    { label: dict.nav.portfolio, href: `/${locale}/portfolio` },
    { label: dict.nav.blog, href: `/${locale}/blog` },
    { label: dict.nav.about, href: `/${locale}/about` },
    { label: dict.nav.bookCall, href: `/${locale}/book` },
  ];

  const serviceItems = dict.services.map((service) => ({
    label: service.title,
    href: `/${locale}/services`,
  }));
  const resourceItems: FooterItem[] = [
    { label: dict.footer.resourcesList[0], href: `/${locale}/blog` },
    { label: dict.footer.resourcesList[1], href: `/${locale}/portfolio` },
    { label: dict.footer.resourcesList[2], href: `/${locale}/faq` },
  ];
  const legalItems: FooterItem[] = [
    { label: dict.footer.legal.privacy, href: `/${locale}/privacy` },
    { label: dict.footer.legal.terms, href: `/${locale}/terms` },
  ];

  return (
    <footer className="bg-pitch text-white">
      <Container className="border-t border-white/10 py-10">
        <NewsletterSignup
          locale={locale}
          dict={dict}
          tone="dark"
          className="max-w-xl border-b border-white/10 pb-10"
        />
        <div className="flex lg:flex-row flex-col gap-10 justify-between pt-10">
          <div>
            <div className="text-3xl font-semibold tracking-[-0.04em] text-surface">{dict.meta.siteName}</div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">{dict.footer.blurb}</p>
          </div>

          <div className="flex md:flex-row flex-col md:gap-24 gap-10">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">{dict.footer.navigation}</div>
              <div className="mt-4 grid gap-2 text-sm text-white/78">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>{item.label}</Link>
                ))}
              </div>
            </div>

            {/* <div>
            <div className="text-xs uppercase tracking-[0.18em] text-white/45">{dict.footer.services}</div>
            <div className="mt-4 grid gap-2 text-sm text-white/78">
              {serviceItems.map((item) => (
                <FooterListItem key={item.label} item={item} className="hover:text-white transition-colors" />
              ))}
            </div>
          </div> */}

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">{dict.footer.resources}</div>
              <div className="mt-4 grid gap-2 text-sm text-white/78">
                {resourceItems.map((item) => (
                  <FooterListItem key={item.label} item={item} className="hover:text-white transition-colors" />
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/45">{dict.footer.contact}</div>
              <div className="mt-4 grid gap-2 text-sm text-white/78">
                <p>{dict.contactBlock.email}</p>
                <p>{dict.contactBlock.location}</p>
              </div>
              <div className="mt-5 flex items-center gap-4 text-white/80">
                <a href="https://www.instagram.com/webgrafy/" target="_blank" rel="noopener noreferrer" aria-label={dict.common.instagram} className="hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61591352091454" target="_blank" rel="noopener noreferrer" aria-label={dict.common.facebook} className="hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>{dict.footer.legal.copyright}</p>
          <div className="flex items-center gap-6">
            {legalItems.map((item) => (
              <FooterListItem key={item.label} item={item} className="hover:text-white/80 transition-colors" />
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
