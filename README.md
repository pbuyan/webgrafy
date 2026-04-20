# Webgrafy (Next.js + TS + Tailwind)

## Setup
```bash
npm install
npm run dev
```

## Bilingual routes
- English: `/en/...`
- French: `/fr/...` with pretty slugs:
  - `/fr/tarifs` → internal `/fr/pricing`
  - `/fr/realisations` → internal `/fr/work`
  - `/fr/a-propos` → internal `/fr/about`

## Contact leads (Supabase)
Create table `public.leads` in Supabase (SQL in docs/chat) and set env vars:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`

