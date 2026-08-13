import { AI_CONFIG } from "./config";

/**
 * Lightweight fixed-window rate limiter, keyed by client IP.
 *
 * IMPORTANT LIMITATION: this is an IN-MEMORY, PER-INSTANCE limiter. On a
 * serverless/edge platform (e.g. Vercel) each instance keeps its own map, so a
 * determined attacker hitting many cold instances can exceed the intended
 * global limit. It is a cheap first line of defence against casual spam and
 * accidental rapid-fire requests — NOT a globally reliable limiter. For strict
 * global limits, add a shared store (e.g. Upstash Redis) later; that is
 * intentionally out of scope to avoid a new infrastructure dependency.
 */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export type RateLimitResult = { allowed: boolean; retryAfterSeconds: number };

export function checkRateLimit(key: string): RateLimitResult {
  const now = Date.now();
  const { windowMs, maxRequests } = AI_CONFIG.rateLimit;
  const bucket = buckets.get(key);

  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { allowed: true, retryAfterSeconds: 0 };
  }

  if (bucket.count >= maxRequests) {
    return {
      allowed: false,
      retryAfterSeconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
    };
  }

  bucket.count += 1;
  // Opportunistic cleanup so the map doesn't grow unbounded on a warm instance.
  if (buckets.size > 5000) {
    for (const [k, b] of buckets) if (now >= b.resetAt) buckets.delete(k);
  }
  return { allowed: true, retryAfterSeconds: 0 };
}
