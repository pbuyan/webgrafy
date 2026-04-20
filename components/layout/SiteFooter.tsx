import Link from "next/link";
import type { Locale } from "@/lib/routes";
import { getNavLinks, getPath } from "@/lib/routes";
import { Container } from "@/components/layout/Container";
import { Separator } from "@/components/ui/separator";

export function SiteFooter({
  locale,
  messages
}: {
  locale: Locale;
  messages: Record<string, any>;
}) {
  const nav = getNavLinks(locale);
  const t = messages.footer;

  return (
    <footer className="border-t">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="font-extrabold tracking-tight text-lg">Webgrafy</div>
            <p className="mt-2 text-sm text-muted-foreground">{t.tagline}</p>
            <p className="mt-3 text-sm text-muted-foreground">{t.area}</p>
          </div>

          <div>
            <div className="text-sm font-semibold">{t.pages}</div>
            <div className="mt-3 grid gap-2 text-sm">
              {nav.map((item) => (
                <Link
                  key={item.key}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {t[item.key]}
                </Link>
              ))}
              <Link href={getPath("faq", locale)} className="text-muted-foreground hover:text-foreground">
                {t.faq}
              </Link>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">{t.contactTitle}</div>
            <p className="mt-3 text-sm text-muted-foreground">{t.contactText}</p>
            <div className="mt-4">
              <Link href={getPath("contact", locale)} className="text-sm font-semibold underline underline-offset-4">
                {t.ctaAudit}
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between text-xs text-muted-foreground">
          <div>{t.copyright.replace("{year}", String(new Date().getFullYear()))}</div>
          <div className="flex gap-4">
            <Link href={getPath("faq", locale)} className="hover:text-foreground">
              {t.faq}
            </Link>
            <Link href="#" className="hover:text-foreground">
              {t.privacy}
            </Link>
            <Link href="#" className="hover:text-foreground">
              {t.terms}
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
