import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

const LIMIT = 5;
const WINDOW_MS = 60_000;
const WINDOW_LABEL = "60 s";

// --- In-memory fallback ---------------------------------------------------
// Works for a single Node.js instance. On serverless/edge each instance has
// its own Map, so this is best-effort only — configure Upstash for shared,
// reliable limiting in production.
const store = new Map<string, { count: number; resetAt: number }>();

export function inMemoryRateLimit(ip: string, limit = LIMIT, windowMs = WINDOW_MS): boolean {
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

// --- Upstash (shared across instances) ------------------------------------
let limiter: Ratelimit | null = null;

function getUpstashLimiter(): Ratelimit | null {
  if (limiter) return limiter;

  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;

  limiter = new Ratelimit({
    redis: new Redis({ url, token }),
    limiter: Ratelimit.slidingWindow(LIMIT, WINDOW_LABEL),
    prefix: "ratelimit:contact",
  });
  return limiter;
}

/**
 * Returns `true` when the request should be blocked (over the limit).
 *
 * Uses Upstash Redis when `UPSTASH_REDIS_REST_URL` / `UPSTASH_REDIS_REST_TOKEN`
 * are set (consistent across serverless instances), otherwise falls back to the
 * in-memory limiter. If Upstash is unreachable we fail open to the in-memory
 * limiter so a Redis outage never blocks legitimate submissions.
 */
export async function isRateLimited(ip: string): Promise<boolean> {
  const upstash = getUpstashLimiter();
  if (!upstash) return inMemoryRateLimit(ip);

  try {
    const { success } = await upstash.limit(ip);
    return !success;
  } catch (error) {
    console.error("Upstash rate limit failed; falling back to in-memory.", error);
    return inMemoryRateLimit(ip);
  }
}
