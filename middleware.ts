import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { INTERNAL_FR_REWRITES } from "@/lib/routes";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/icons") ||
    pathname.match(/\.(png|jpg|jpeg|webp|svg|ico|css|js|map|txt|xml)$/)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url);
  }

  const rewriteTo = INTERNAL_FR_REWRITES[pathname];
  if (rewriteTo) {
    const url = req.nextUrl.clone();
    url.pathname = rewriteTo;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api).*)"],
};
