"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { mainNavLinks, secondaryNavLinks, serviceDivisions } from "@/lib/navigation";
import { ACCENTS } from "@/lib/accents";
import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsappUrl, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  activePath: string;
};

/**
 * Full-screen mobile navigation.
 *
 * This is a modal surface, so it behaves like one: focus moves in on open, Tab
 * is trapped inside it, Escape closes, background scroll is locked, and focus
 * returns to the toggle on close. Every row is at least 56px tall for
 * comfortable one-handed use.
 */
export function MobileMenu({ open, onClose, activePath }: MobileMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { body } = document;
    const previousOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    // Move focus into the panel so a screen reader lands inside the dialog.
    const firstLink = panelRef.current?.querySelector<HTMLElement>("a, button");
    firstLink?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

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
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-40 flex flex-col bg-ink-950 pt-[68px] xl:hidden"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-40 w-[500px] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(ellipse,#c01822,transparent)" }}
          />

          <div className="relative flex-1 overflow-y-auto overscroll-contain px-6 py-8">
            <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-text-faint">
              Services
            </p>
            <ul>
              {serviceDivisions.map((division) => (
                <li key={division.id}>
                  <Link
                    href={division.href}
                    onClick={onClose}
                    aria-current={activePath === division.href ? "page" : undefined}
                    className="flex min-h-14 items-center gap-4 border-b border-line-faint py-4"
                  >
                    <span
                      aria-hidden
                      className="w-5 shrink-0 font-mono text-[10px]"
                      style={{ color: ACCENTS[division.accent].hex }}
                    >
                      {division.num}
                    </span>
                    <span className="text-base font-semibold text-text-body">
                      {division.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <p className="mb-4 mt-8 font-mono text-[9px] uppercase tracking-widest text-text-faint">
              Navigation
            </p>
            <ul>
              {[...mainNavLinks, ...secondaryNavLinks].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    aria-current={activePath === link.href ? "page" : undefined}
                    className="flex min-h-14 items-center border-b border-line-faint py-4 text-lg font-bold text-text-body"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sticky action bar — respects the iOS home indicator. */}
          <div
            className="relative space-y-3 border-t border-line px-6 py-6"
            style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
          >
            <a
              href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex min-h-13 items-center justify-center gap-2 rounded-xl border border-[rgba(37,211,102,0.25)] bg-[rgba(37,211,102,0.07)] py-4 text-base font-semibold text-text-primary"
            >
              <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
              Chat on WhatsApp
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="flex min-h-13 items-center justify-center gap-2 rounded-xl bg-linear-[135deg,var(--color-brand),var(--color-brand-deep)] py-4 text-base font-semibold text-white"
            >
              Talk to Mobiz
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default MobileMenu;
