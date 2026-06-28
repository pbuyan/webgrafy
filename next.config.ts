import type { NextConfig } from "next";

// Content Security Policy.
//
// `'unsafe-inline'` is required for scripts and styles because the site is
// statically prerendered (SSG), so per-request nonces aren't possible. Next.js
// emits inline bootstrap/RSC scripts, `next/font` and Tailwind emit inline
// styles, and components set inline `style` attributes (CSS variables). All
// scripts, fonts, XHR/beacons (contact API + Vercel analytics/insights on
// Vercel) are same-origin, so everything else stays locked to `'self'`.
// `data:` covers `next/image` blur placeholders.
//
// To monitor before enforcing, change the header key below to
// `Content-Security-Policy-Report-Only`.
//
// `'unsafe-eval'` is added in development only — Turbopack/React Refresh use
// `eval` for HMR; production stays strict.
const isDev = process.env.NODE_ENV !== "production";
const scriptSrc = ["'self'", "'unsafe-inline'", isDev ? "'unsafe-eval'" : ""]
  .filter(Boolean)
  .join(" ");

const contentSecurityPolicy = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "img-src 'self' data:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  `script-src ${scriptSrc}`,
  "connect-src 'self'",
  "upgrade-insecure-requests",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
