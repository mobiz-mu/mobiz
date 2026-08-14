"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { serviceDivisions } from "@/lib/navigation";
import { ACCENTS } from "@/lib/accents";
import { cn } from "@/lib/utils";

/**
 * Desktop services mega menu.
 *
 * Opens on hover *and* on click/Enter/Space, closes on Escape or when focus
 * leaves the group. Hover alone is not an accessible trigger, so the button is a
 * real `aria-expanded` control and every item is reachable by Tab — the panel
 * stays mounted in the tab order only while open.
 */
export function ServicesMenu({ activePath }: { activePath: string }) {
  const [open, setOpen] = useState(false);
  const groupRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const reduced = useReducedMotion();

  const isActive = activePath.startsWith("/services");

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        groupRef.current?.querySelector("button")?.focus();
      }
    };
    // Any click outside the group dismisses, matching native menu behaviour.
    const onPointerDown = (e: PointerEvent) => {
      if (!groupRef.current?.contains(e.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={groupRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((o) => !o)}
        className={cn(
          "flex min-h-11 items-center gap-1 rounded-lg px-3 text-sm font-medium transition-colors duration-200",
          isActive || open ? "text-brand-mid" : "text-text-secondary hover:text-text-primary",
        )}
      >
        Services
        <ChevronDown
          aria-hidden
          className={cn(
            "size-3 transition-transform duration-200",
            open && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            id={panelId}
            initial={reduced ? false : { opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: -4 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-50 mt-2 w-[420px] -translate-x-1/2 rounded-xl border border-line bg-ink-700 p-2 shadow-menu"
          >
            <p className="px-3 pb-2 pt-2 font-mono text-[9px] uppercase tracking-widest text-text-faint">
              Business divisions
            </p>
            {serviceDivisions.map((division) => (
              <Link
                key={division.id}
                href={division.href}
                onClick={() => setOpen(false)}
                className="group/mi flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-white/5"
              >
                <span
                  aria-hidden
                  className="w-5 shrink-0 font-mono text-[10px]"
                  style={{ color: ACCENTS[division.accent].onDark }}
                >
                  {division.num}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold leading-tight text-text-body transition-colors group-hover/mi:text-text-primary">
                    {division.label}
                  </span>
                  <span className="mt-0.5 block text-[11px] text-text-muted">
                    {division.tagline}
                  </span>
                </span>
                <ArrowRight
                  aria-hidden
                  className="size-3 shrink-0 text-text-faint transition-colors group-hover/mi:text-brand-mid"
                />
              </Link>
            ))}

            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-between rounded-lg border-t border-line-faint px-3 py-3 text-xs font-semibold text-text-secondary transition-colors hover:text-text-primary"
            >
              View all services
              <ArrowRight aria-hidden className="size-3" />
            </Link>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default ServicesMenu;
