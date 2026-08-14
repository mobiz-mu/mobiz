"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUp, Bot, X } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { SUGGESTED_QUESTIONS } from "@/lib/ai/suggested-questions";
import { ACCENTS } from "@/lib/accents";
import { generalEscalationUrl, buildEscalationUrl } from "@/lib/ai/whatsapp-escalation";
import type { ChatApiResponse, ChatMessage } from "@/lib/ai/types";
import { cn } from "@/lib/utils";

type AIChatPanelProps = {
  onClose: () => void;
};

type Status = "idle" | "sending" | "error";

/**
 * The assistant conversation surface.
 *
 * Designed as part of Mobiz rather than a bolted-on widget: same dark surfaces,
 * same red accent, same card language. On phones it fills the screen as a
 * bottom sheet; on desktop it is an anchored panel.
 *
 * Accessibility: it is a real dialog with a focus trap, Escape to close, focus
 * restored to the launcher on exit, and replies announced through a polite live
 * region so screen-reader users hear the answer arrive.
 *
 * Every failure path — disabled, rate limited, timeout, provider error — ends
 * with a working WhatsApp handoff rather than a dead end.
 */
export function AIChatPanel({ onClose }: AIChatPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const logRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const reduced = useReducedMotion();

  /* Focus trap, Escape, scroll lock, focus restore. */
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    inputRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables?.length) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (!first || !last) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [onClose]);

  /* Keep the newest turn in view. */
  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, status]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || status === "sending") return;

    const next: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(next);
    setInput("");
    setStatus("sending");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      const data = (await response.json()) as ChatApiResponse;

      if (data.ok) {
        setMessages([...next, { role: "assistant", content: data.reply }]);
        setStatus("idle");
      } else {
        setErrorMessage(data.message);
        setStatus("error");
      }
    } catch {
      setErrorMessage(
        "Could not reach the assistant. Please check your connection, or continue on WhatsApp.",
      );
      setStatus("error");
    }
  }

  /* Hand the last question over to a person, with context. */
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user");
  const escalationUrl = lastUserMessage
    ? buildEscalationUrl({ question: lastUserMessage.content })
    : generalEscalationUrl();

  return (
    <motion.div
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed z-50 flex flex-col border border-line bg-ink-800 shadow-menu",
        // Mobile: near-full-screen bottom sheet
        "inset-x-0 bottom-0 top-16 rounded-t-2xl",
        // Desktop: anchored panel
        "sm:inset-auto sm:bottom-24 sm:right-5 sm:top-auto sm:h-[600px] sm:max-h-[calc(100vh-8rem)] sm:w-[400px] sm:rounded-2xl",
      )}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-line-faint px-4 py-3.5">
        <span
          aria-hidden
          className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-linear-[135deg,var(--color-brand),var(--color-brand-deep)]"
        >
          <Bot className="size-4.5 text-white" />
        </span>
        <span className="min-w-0 flex-1">
          <span id={titleId} className="block text-sm font-bold text-text-primary">
            Mobiz Assistant
          </span>
          <span className="flex items-center gap-1.5">
            <span aria-hidden className="status-pulse size-1.5 rounded-full bg-[color:var(--color-whatsapp)]" />
            <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
              AI · Ask anything about Mobiz
            </span>
          </span>
        </span>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close assistant"
          className="flex size-9 shrink-0 items-center justify-center rounded-lg text-text-muted transition-colors hover:bg-white/5 hover:text-text-primary"
        >
          <X aria-hidden className="size-4" />
        </button>
      </div>

      {/* Conversation */}
      <div ref={logRef} className="flex-1 overflow-y-auto overscroll-contain px-4 py-4">
        {messages.length === 0 ? (
          <div>
            <p className="text-sm leading-relaxed text-text-secondary">
              Hi — I can answer questions about what Mobiz does, our services and our
              monthly packages. What would you like to know?
            </p>
            <p className="mb-3 mt-6 font-mono text-[9px] uppercase tracking-widest text-text-faint">
              Popular questions
            </p>
            <ul className="flex flex-wrap gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <li key={q.id}>
                  <button
                    type="button"
                    onClick={() => void send(q.prompt)}
                    className="rounded-lg border px-3 py-2 text-xs font-medium text-text-body transition-colors hover:bg-white/5"
                    style={{ borderColor: `${ACCENTS[q.accent].hex}55` }}
                  >
                    {q.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="space-y-4" aria-live="polite" aria-atomic="false">
            {messages.map((message, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed",
                  message.role === "user"
                    ? "ml-auto bg-brand text-white"
                    : "border border-line bg-surface-1 text-text-body",
                )}
              >
                <span className="sr-only">
                  {message.role === "user" ? "You said:" : "Assistant replied:"}
                </span>
                <span className="whitespace-pre-wrap">{message.content}</span>
              </div>
            ))}

            {status === "sending" ? (
              <div className="flex items-center gap-1.5 px-1" aria-label="Assistant is typing">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="status-pulse size-1.5 rounded-full bg-text-muted"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            ) : null}
          </div>
        )}

        {status === "error" && errorMessage ? (
          <div
            role="alert"
            className="mt-4 rounded-lg border border-line-brand bg-brand/8 px-3.5 py-3"
          >
            <p className="text-xs leading-relaxed text-text-body">{errorMessage}</p>
          </div>
        ) : null}
      </div>

      {/* Composer + escalation */}
      <div className="border-t border-line-faint p-3">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void send(input);
          }}
          className="flex items-end gap-2"
        >
          <label htmlFor="ai-input" className="sr-only">
            Ask the Mobiz assistant a question
          </label>
          <textarea
            id="ai-input"
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                void send(input);
              }
            }}
            placeholder="Ask a question…"
            maxLength={1200}
            className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-line bg-surface-1 px-3.5 py-3 text-sm text-text-primary placeholder:text-text-faint focus-visible:outline-2 focus-visible:outline-brand-mid"
          />
          <button
            type="submit"
            disabled={!input.trim() || status === "sending"}
            aria-label="Send question"
            className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-linear-[135deg,var(--color-brand),var(--color-brand-deep)] text-white transition-opacity disabled:pointer-events-none disabled:opacity-40"
          >
            <ArrowUp aria-hidden className="size-4" />
          </button>
        </form>

        <a
          href={escalationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[rgba(37,211,102,0.25)] bg-[rgba(37,211,102,0.08)] px-3 py-2.5 text-xs font-semibold text-text-primary transition-colors hover:bg-[rgba(37,211,102,0.14)]"
        >
          <WhatsAppIcon size={14} className="text-[color:var(--color-whatsapp)]" />
          Talk to a person on WhatsApp
        </a>
      </div>
    </motion.div>
  );
}

export default AIChatPanel;
