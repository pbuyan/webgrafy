---
name: verify
description: Run the webgrafy dev server and verify a change works correctly in the browser. Use after implementing any UI or routing change.
---

Start the dev server with `pnpm dev` (localhost:3000) if it is not already running.

When verifying changes:

1. Check both locales: `/en` and `/fr`. Any page change must work in both.
2. For route changes, confirm the locale prefix is present — bare `/` should redirect to `/en`.
3. For component or style changes, check on at least one mobile viewport width (375px) and desktop (1280px).
4. Report what you observed (what rendered, any console errors) rather than just "it works".

If `pnpm dev` fails to start, run `pnpm lint` first — it often surfaces a TypeScript or import error that is blocking compilation.
