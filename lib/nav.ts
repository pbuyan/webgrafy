import { getPageKeyFromPath, getPath } from "@/lib/routes";
import type { Locale } from "@/lib/routes";

export function isActiveNavLink(args: { pathname: string; href: string; locale: Locale }) {
  const { pathname, href, locale } = args;
  const currentKey = getPageKeyFromPath(pathname);
  const hrefKey = getPageKeyFromPath(href);
  return currentKey === hrefKey && href === getPath(currentKey, locale);
}
