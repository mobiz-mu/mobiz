import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ACCENTS, type AccentId } from "@/lib/accents";

type BadgeProps = {
  children: ReactNode;
  accent?: AccentId;
  /**
   * `tag`  — technical monospace chip (service categories, tech labels)
   * `soft` — quieter pill for metadata (dates, reading time, categories)
   */
  variant?: "tag" | "soft";
  className?: string;
};

/**
 * Small labels. `tag` is the treatment used on the homepage hero, so service
 * categories read the same everywhere they appear.
 */
export function Badge({
  children,
  accent = "red",
  variant = "tag",
  className,
}: BadgeProps) {
  const { hex } = ACCENTS[accent];

  if (variant === "soft") {
    return (
      <span
        className={cn(
          "inline-flex items-center rounded-md border border-line px-2.5 py-1 text-xs font-medium text-text-muted",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-[0.12em]",
        className,
      )}
      style={{
        border: `1.5px solid ${hex}70`,
        color: `${hex}EE`,
        background: `${hex}18`,
      }}
    >
      {children}
    </span>
  );
}

export default Badge;
