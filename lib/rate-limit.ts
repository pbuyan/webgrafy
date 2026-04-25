// In-memory rate limiter. Works for single-instance Node.js deployments.
// For serverless/edge (Vercel, Cloudflare), replace with a Redis-backed solution
// such as @upstash/ratelimit.
const store = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string, limit = 5, windowMs = 60_000): boolean {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + windowMs });
    return false;
  }

  if (entry.count >= limit) return true;

  entry.count++;
  return false;
}
