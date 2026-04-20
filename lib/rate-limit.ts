type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

export async function checkRateLimit(args: {
  key: string;
  limit: number;
  windowSeconds: number;
}): Promise<{ ok: boolean; remaining: number; resetAt: number }> {
  const now = Date.now();
  const windowMs = args.windowSeconds * 1000;

  const current = buckets.get(args.key);
  if (!current || current.resetAt <= now) {
    const resetAt = now + windowMs;
    buckets.set(args.key, { count: 1, resetAt });
    return { ok: true, remaining: args.limit - 1, resetAt };
  }

  if (current.count >= args.limit) {
    return { ok: false, remaining: 0, resetAt: current.resetAt };
  }

  current.count += 1;
  buckets.set(args.key, current);
  return { ok: true, remaining: args.limit - current.count, resetAt: current.resetAt };
}
