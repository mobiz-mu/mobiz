/**
 * Centralised AI configuration for the Mobiz.mu assistant.
 *
 * Everything the chat route needs to talk to the provider lives here so the
 * model / limits can change without touching the UI or the route logic.
 *
 * The provider is OpenAI's Responses API, called server-side with a plain fetch
 * (no SDK dependency shipped anywhere). The key is read from the server-only
 * `OPENAI_API_KEY` env var — never `NEXT_PUBLIC_*`.
 *
 * No tools are declared, so the model cannot web-search. Every answer comes from
 * the grounded system prompt, which is built from the site's own service and
 * package data. That is deliberate: it keeps answers correct about Mobiz, fast,
 * and cheap.
 */

export const AI_CONFIG = {
  /** OpenAI Responses endpoint (server-to-server only). */
  endpoint: "https://api.openai.com/v1/responses",
  /** Verified available on this account before selection. Overridable via env. */
  model: process.env.OPENAI_MODEL?.trim() || "gpt-5.4-mini",
  /*
   * Reasoning off.
   *
   * Checked against the model rather than assumed: gpt-5.4-mini rejects
   * `minimal` and accepts none | low | medium | high | xhigh. Measured on the
   * live API, `none` spends 0 reasoning tokens where `medium` spent 95 for the
   * same question, and answered ~2x faster. Pricing, package, service and
   * contact questions are lookups against the grounded prompt, not problems that
   * need deliberation, so deep reasoning buys latency and nothing else.
   */
  reasoningEffort: "none",
  /** Short, practical answers — this is a support widget, not an essay. */
  verbosity: "low",
  /** Customer support, not long-form generation — keep output tight. */
  maxOutputTokens: 500,
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
