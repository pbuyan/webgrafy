# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # start dev server at localhost:3000
pnpm build        # production build
pnpm lint         # run ESLint (next/core-web-vitals + typescript rules)
pnpm test         # run Vitest (single pass)
pnpm test:watch   # run Vitest in watch mode
```

Use `pnpm` exclusively — not npm or yarn.

TypeScript checking is done via the build (`pnpm build`) — there is no standalone `tsc` script.

Tests live alongside source files as `*.test.ts` / `*.test.tsx`. Import from `vitest` explicitly (`import { describe, expect, it } from "vitest"`). The setup file (`vitest.setup.ts`) extends Vitest's `expect` with `@testing-library/jest-dom` matchers. Server Components and Next.js internals are not testable in jsdom — test pure logic and client components only.

## Architecture

This is a Next.js 16 App Router site for a bilingual (EN/FR) design agency. The package manager is **pnpm**.

### Locale routing

All user-facing pages live under `app/[locale]/`. Request interception lives in **`proxy.ts`** — in Next.js 16 the `proxy.ts` convention (exporting a `proxy` function) replaced `middleware.ts`/`middleware`, so this file is picked up automatically; do **not** rename it back to `middleware.ts`. It redirects bare paths (e.g. `/services`) to `/{defaultLocale}/services`. The `[locale]/layout.tsx` calls `isValidLocale()` and calls `notFound()` for unknown locales.

Supported locales are defined once in `lib/i18n/config.ts`:
```ts
export const locales = ["en", "fr"] as const;
export const defaultLocale: Locale = "en";
```

### Dictionary system

All copy — headings, labels, form strings, structured data (services, projects, testimonials, FAQs, packages) — lives in `lib/i18n/dictionaries.ts` as typed TypeScript objects, **not JSON files**. The `SiteDictionary` type in `lib/i18n/types.ts` is the source of truth for the shape of content. To add or change any text, edit the `en` and `fr` dictionary objects in that file.

Every page is an async Server Component that receives `params: Promise<{ locale: Locale }>` and calls `getDictionary(locale)` at the top:
```ts
const { locale } = await params;
const dict = await getDictionary(locale);
```

### Layout layers

| File | Role |
|---|---|
| `app/layout.tsx` | Root HTML shell — sets Google Fonts CSS variables (`--font-display` Cormorant Garamond, `--font-sans` Inter), `<html lang>` defaults to `en` |
| `app/[locale]/layout.tsx` | Locale shell — validates locale, generates `<Metadata>`, renders `SiteHeader`, `SiteFooter`, `CursorFollower`, wraps pages in `<main class="site-main">` |
| `components/html-lang.tsx` | Client component that updates `document.documentElement.lang` reactively when locale changes |

### Header theming

`SiteHeader` (`components/site-header.tsx`) is a client component with two visual behaviours:

1. **Hide-on-scroll-down / reveal-on-scroll-up** using `requestAnimationFrame` and a `concealed` state; sets `--header-offset` CSS variable accordingly so `main.site-main` padding tracks it.
2. **Dark ↔ Light mode on the home page**: reads the `data-header-theme="dark|light"` attribute on whichever section is currently beneath the header using `elementsFromPoint`. Add `data-header-theme="dark"` or `data-header-theme="light"` to any section on the home page to control header appearance as the user scrolls.

### Design tokens

Tailwind v4 with all custom tokens declared in the `@theme {}` block in `app/globals.css`. Config is in `postcss.config.mjs` — there is no `tailwind.config.js`. Palette groups:

- **brand** — `brand`, `brand-light` (warm beige)
- **pitch** — near-black for footer/contact/mobile nav
- **surface** scale — warm off-whites (`surface`, `surface-warm`, `surface-pale`, `surface-strip`, `surface-muted`)
- **ink** scale — `ink` through `ink-subtle` (darkest → most muted)
- **stroke** — border colors
- **tint** — project card background tints

Use `cn()` from `lib/utils.ts` (wraps `clsx` + `tailwind-merge`) for conditional class composition.

### Component conventions

- **Server components** by default; add `"use client"` only when hooks or browser APIs are needed.
- **Button variants** are managed with `class-variance-authority` in `components/ui/button.tsx`. Use `buttonVariants({ variant, size })` when a non-`<button>` element (e.g. `<Link>`) needs button styling; use the `<Button>` component otherwise. Variants: `primary`, `secondary`, `dark`, `outline`.
- **`shadcn/ui` style config** is in `components.json` (new-york style, no CSS variables, icon library: lucide). New shadcn components can be added with `pnpm dlx shadcn@latest add <component>`.
- All links between locale pages are prefixed with `/${locale}/...` — never hardcode `/en/` or `/fr/`.

### TypeScript

- Strict mode is enabled. No implicit `any`. JavaScript files are not allowed (`allowJs: false`).
- Use path alias `@/` for all imports from the project root (set in `tsconfig.json`).

### API routes

`app/api/contact/route.ts` — POST endpoint for the contact form. Validates fields server-side, escapes user input into the notification email, drops submissions that fill the `website` honeypot, and rate limits (5 requests/min per IP) via `lib/rate-limit.ts`. **Email delivery is wired up via Resend** (`RESEND_API_KEY` + `CONTACT_EMAIL`); the sending domain in the `from` address must be verified in Resend before going live. The rate limiter (`isRateLimited`) uses **Upstash Redis** when `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN` are set (shared across serverless instances) and falls back to an in-memory `Map` otherwise; if Upstash is unreachable it fails open to the in-memory limiter so an outage never blocks legitimate submissions.

### Environment variables

Copy `env.example` to `.env.local`. Variables:
```
NEXT_PUBLIC_BASE_URL=https://www.webgrafy.com   # absolute URLs: metadata, sitemap, robots, hreflang
RESEND_API_KEY=re_...                            # contact form email delivery
CONTACT_EMAIL=info@webgrafy.com                  # recipient of contact form submissions
UPSTASH_REDIS_REST_URL=...                       # optional: shared contact-form rate limiting
UPSTASH_REDIS_REST_TOKEN=...                     # optional: shared contact-form rate limiting
```
`NEXT_PUBLIC_BASE_URL` is the single source of truth for the site origin via `siteUrl` in `lib/i18n/config.ts` (used by `lib/i18n/metadata.ts`, `app/sitemap.ts`, `app/robots.ts`, and the locale layout's `metadataBase`). The Upstash variables are optional — see the API routes section for the rate-limiter fallback behaviour.

### SEO & structured data

Per-page metadata (title, description, canonical, `hreflang`) is built with `buildMetadata()` / `localeAlternates()` in `lib/i18n/metadata.ts`. Schema.org JSON-LD is emitted via the `JsonLd` component (`components/structured-data.tsx`): an `Organization` graph in the locale layout and a `FAQPage` graph on the FAQ page. `sameAs` (social profiles) and `telephone` are intentionally omitted until real values replace the current placeholders.
