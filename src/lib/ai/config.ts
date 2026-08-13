/**
 * Centralised AI configuration for the Mobiz.mu assistant.
 *
 * Everything the chat route needs to talk to the provider lives here so the
 * model / limits can change without touching the UI or the route logic.
 *
 * The provider is OpenAI's Chat Completions API, called server-side with a
 * plain fetch (no SDK dependency shipped anywhere). The key is read from the
 * server-only `OPENAI_API_KEY` env var — never `NEXT_PUBLIC_*`.
 */

export const AI_CONFIG = {
  /** OpenAI Chat Completions endpoint (server-to-server only). */
  endpoint: "https://api.openai.com/v1/chat/completions",
  /** Fast, low-cost model with strong EN/FR. Overridable via env. */
  model: process.env.OPENAI_MODEL?.trim() || "gpt-4o-mini",
  /** Customer support, not long-form generation — keep output tight. */
  maxOutputTokens: 500,
  /** Low temperature for stable, on-script answers. */
  temperature: 0.3,
  /** Per-message character cap (defence + cost control). */
  maxMessageChars: 1200,
  /** Max messages accepted in one request body. */
  maxHistoryMessages: 16,
  /** How many recent turns are actually forwarded to the model. */
  keepRecentMessages: 10,
  /** Rough combined-history character ceiling forwarded to the model. */
  maxForwardedChars: 8000,
  /** Server-side timeout for the provider call (ms). */
  requestTimeoutMs: 20000,
  /** Simple per-IP rate limit. */
  rateLimit: { windowMs: 60_000, maxRequests: 12 },
} as const;

/** True only when a server-side key is present. Never leaks the value. */
export function isAiEnabled(): boolean {
  return Boolean(process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY.trim());
}
