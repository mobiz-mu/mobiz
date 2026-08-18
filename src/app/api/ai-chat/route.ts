import { NextResponse } from "next/server";
import { AI_CONFIG, isAiEnabled } from "@/lib/ai/config";
import { chatRequestSchema } from "@/lib/ai/chat-schema";
import { checkRateLimit } from "@/lib/ai/rate-limit";
import { buildSystemPrompt } from "@/lib/ai/system-prompt";
import type { ChatApiResponse } from "@/lib/ai/types";

/**
 * Mobiz.mu AI assistant endpoint.
 *
 * Talks to OpenAI's Responses API with reasoning disabled, because these are
 * lookup questions against a grounded prompt rather than problems needing
 * deliberation — measured at roughly half the latency of `medium` effort.
 *
 * Server-only by construction: the provider key is read from `OPENAI_API_KEY`
 * (never `NEXT_PUBLIC_*`) and neither the key nor the system prompt is ever
 * included in a response. If the key is absent the route returns a clean
 * `disabled` result — it does not throw, so the site builds and runs normally
 * and the UI falls back to WhatsApp.
 */

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

function json(body: ChatApiResponse, status: number) {
  return NextResponse.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

/** Best-effort client identity for rate limiting behind a proxy. */
function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first || request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request): Promise<Response> {
  if (!isAiEnabled()) {
    return json(
      {
        ok: false,
        error: "disabled",
        message:
          "The assistant is not available right now. You can reach the Mobiz team directly on WhatsApp.",
      },
      503,
    );
  }

  const limit = checkRateLimit(clientKey(request));
  if (!limit.allowed) {
    return json(
      {
        ok: false,
        error: "rate_limited",
        message: `That's a lot of questions at once. Please wait ${limit.retryAfterSeconds}s, or continue on WhatsApp.`,
      },
      429,
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json(
      { ok: false, error: "invalid", message: "That request could not be read." },
      400,
    );
  }

  const parsed = chatRequestSchema.safeParse(payload);
  if (!parsed.success) {
    return json(
      {
        ok: false,
        error: "invalid",
        message: "Please shorten your message and try again.",
      },
      400,
    );
  }

  // Forward only recent turns, and cap total characters, so a long conversation
  // can't inflate cost or latency without bound.
  let budget = AI_CONFIG.maxForwardedChars;
  const recent = parsed.data.messages
    .slice(-AI_CONFIG.keepRecentMessages)
    .reverse()
    .filter((m) => {
      budget -= m.content.length;
      return budget >= 0;
    })
    .reverse();

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), AI_CONFIG.requestTimeoutMs);

  try {
    const response = await fetch(AI_CONFIG.endpoint, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: AI_CONFIG.model,
        /*
         * Responses API shape: the grounded prompt goes in `instructions`, the
         * bounded conversation goes in `input` as roles. No `tools` key, so the
         * model has no web search — every answer is drawn from the site's own
         * service and package data.
         */
        instructions: buildSystemPrompt(),
        input: recent.map((m) => ({ role: m.role, content: m.content })),
        max_output_tokens: AI_CONFIG.maxOutputTokens,
        reasoning: { effort: AI_CONFIG.reasoningEffort },
        text: { verbosity: AI_CONFIG.verbosity },
        /* Customer conversations are not retained on the provider side. */
        store: false,
      }),
    });

    if (!response.ok) {
      // Deliberately not surfacing the provider's body — it can echo request
      // content and internal detail back to the browser.
      return json(
        {
          ok: false,
          error: "provider_error",
          message:
            "The assistant could not answer just now. Please try again, or continue on WhatsApp.",
        },
        502,
      );
    }

    /*
     * The Responses API returns an `output` array of typed items rather than
     * `choices`. `output_text` is the convenience aggregate; the walk below is
     * the fallback for when only the structured form is present.
     */
    const data = (await response.json()) as {
      output_text?: string;
      output?: { type?: string; content?: { type?: string; text?: string }[] }[];
    };

    const reply = (
      data.output_text ??
      (data.output ?? [])
        .filter((item) => item.type === "message")
        .flatMap((item) => item.content ?? [])
        .filter((part) => part.type === "output_text")
        .map((part) => part.text ?? "")
        .join("")
    ).trim();

    if (!reply) {
      return json(
        {
          ok: false,
          error: "provider_error",
          message:
            "The assistant did not return an answer. Please try again, or continue on WhatsApp.",
        },
        502,
      );
    }

    return json({ ok: true, reply }, 200);
  } catch (error) {
    const aborted = error instanceof Error && error.name === "AbortError";
    return json(
      {
        ok: false,
        error: aborted ? "timeout" : "provider_error",
        message: aborted
          ? "That took too long. Please try again, or continue on WhatsApp."
          : "The assistant is unavailable right now. You can reach the Mobiz team on WhatsApp.",
      },
      aborted ? 504 : 502,
    );
  } finally {
    clearTimeout(timeout);
  }
}
