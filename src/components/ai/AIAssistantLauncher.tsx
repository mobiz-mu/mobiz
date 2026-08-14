"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Bot } from "lucide-react";

/**
 * The panel is code-split and only requested when the launcher is first
 * pressed, so the assistant contributes nothing to the initial bundle or to
 * Lighthouse's first load.
 */
const AIChatPanel = dynamic(
  () => import("./AIChatPanel").then((m) => m.AIChatPanel),
  { ssr: false },
);

type AIAssistantLauncherProps = {
  /**
   * Whether a provider key is configured, resolved on the server.
   *
   * When false the launcher renders nothing at all and WhatsApp remains the
   * contact path — no broken button, no error state the visitor has to discover.
   */
  enabled: boolean;
};

/**
 * Floating assistant launcher.
 *
 * Sits directly above the WhatsApp action so the two never overlap and both
 * clear the iOS home indicator.
 */
export function AIAssistantLauncher({ enabled }: AIAssistantLauncherProps) {
  const [open, setOpen] = useState(false);

  if (!enabled) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close Mobiz assistant" : "Open Mobiz assistant"}
        className="fixed z-40 flex size-14 items-center justify-center rounded-full border border-line-strong bg-ink-800 shadow-glow-red-sm transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-mid"
        style={{
          right: "max(1.25rem, env(safe-area-inset-right))",
          // Clears the 56px WhatsApp button plus a 12px gap.
          bottom: "calc(max(1.25rem, env(safe-area-inset-bottom)) + 4.25rem)",
        }}
      >
        <Bot aria-hidden className="size-6 text-brand-mid" />
        <span
          aria-hidden
          className="status-pulse absolute right-1 top-1 size-2 rounded-full bg-[color:var(--color-whatsapp)]"
        />
      </button>

      <AnimatePresence>
        {open ? <AIChatPanel onClose={() => setOpen(false)} /> : null}
      </AnimatePresence>
    </>
  );
}

export default AIAssistantLauncher;
