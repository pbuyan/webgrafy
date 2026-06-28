# Webgrafy

Luxury/editorial digital agency website built with Next.js 16, React, TypeScript, Tailwind CSS v4, and locale-based routing for English and French.

## Getting started

```bash
pnpm install
cp env.example .env.local   # then fill in values (see Contact form below)
pnpm dev
```

Open http://localhost:3000 — the proxy redirects `/` to `/en`.

## Locales

- `/en`
- `/fr`

## Contact form

Submissions post to `/api/contact` and are delivered via [Resend](https://resend.com) to `info@webgrafy.com` (override with `CONTACT_EMAIL`).

### 1. Resend account and domain

1. Create an account at [resend.com](https://resend.com).
2. Add and verify **contact.webgrafy.com** under Domains (add the SPF, DKIM, and optional DMARC DNS records Resend provides).
3. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).

The API sends from `noreply@contact.webgrafy.com` by default (override with `RESEND_FROM_EMAIL`); the domain in the `from` address must show as verified before production sends succeed.

### 2. Environment variables

Copy `env.example` to `.env.local` for local development. Required:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key for sending notification emails |
| `RESEND_FROM_EMAIL` | Sender address (defaults to `Webgrafy Contact <noreply@contact.webgrafy.com>`); its domain must be verified in Resend |
| `CONTACT_EMAIL` | Recipient inbox (defaults to `info@webgrafy.com` if unset) |

Optional (recommended on Vercel/serverless):

| Variable | Purpose |
|----------|---------|
| `UPSTASH_REDIS_REST_URL` | Shared rate limiting across instances |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash auth token |
| `ERROR_WEBHOOK_URL` | Forwards server + client errors to a webhook (Slack/Discord/custom) |

Set the same variables in your hosting provider (e.g. Vercel → Project → Settings → Environment Variables).

## Error monitoring

Errors are always logged as structured JSON to stderr (captured by Vercel runtime logs / log drains). Set `ERROR_WEBHOOK_URL` to also forward a compact summary to an incoming webhook for alerting.

- **Server errors** (e.g. contact API, Resend failures) are reported via `lib/report-error.ts`.
- **Client errors** are caught by `app/[locale]/error.tsx` and `app/global-error.tsx`, which POST to `app/api/log-error/route.ts` (rate-limited) — keeping the webhook URL server-side only.

### 3. Verify locally

1. Add a real `RESEND_API_KEY` to `.env.local`.
2. Run `pnpm dev` and open `/en/contact`.
3. Submit the form and confirm the email arrives at `info@webgrafy.com` with a working Reply-To to the submitter.
