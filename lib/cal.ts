/**
 * Normalize the `NEXT_PUBLIC_CALCOM_LINK` value for Cal.com's embed.
 *
 * Cal.com's embed expects `calLink` as a bare `handle/event` slug and an
 * optional `calOrigin` (useful for self-hosted instances). Accepts either a
 * full URL (https://cal.com/webgrafy/discovery) or a bare slug
 * (webgrafy/discovery).
 */
export function parseCalLink(raw: string): { calLink: string; calOrigin?: string } {
  const trimmed = raw.trim();
  if (/^https?:\/\//i.test(trimmed)) {
    try {
      const url = new URL(trimmed);
      return { calLink: url.pathname.replace(/^\/+/, ""), calOrigin: url.origin };
    } catch {
      /* fall through and treat the value as a bare handle/slug */
    }
  }
  return { calLink: trimmed.replace(/^\/+/, "") };
}
