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
2. Add and verify **webgrafy.com** under Domains (add the SPF, DKIM, and optional DMARC DNS records Resend provides).
3. Create an API key at [resend.com/api-keys](https://resend.com/api-keys).

The API sends from `noreply@webgrafy.com`; the domain must show as verified before production sends succeed.

### 2. Environment variables

Copy `env.example` to `.env.local` for local development. Required:

| Variable | Purpose |
|----------|---------|
| `RESEND_API_KEY` | Resend API key for sending notification emails |
| `CONTACT_EMAIL` | Recipient inbox (defaults to `info@webgrafy.com` if unset) |

Optional (recommended on Vercel/serverless):

| Variable | Purpose |
|----------|---------|
| `UPSTASH_REDIS_REST_URL` | Shared rate limiting across instances |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash auth token |

Set the same variables in your hosting provider (e.g. Vercel → Project → Settings → Environment Variables).

### 3. Verify locally

1. Add a real `RESEND_API_KEY` to `.env.local`.
2. Run `pnpm dev` and open `/en/contact`.
3. Submit the form and confirm the email arrives at `info@webgrafy.com` with a working Reply-To to the submitter.
