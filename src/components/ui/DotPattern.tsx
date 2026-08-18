import { cn } from "@/lib/utils";

/**
 * A subtle dotted field, used as a background layer behind editorial content.
 *
 * Deliberately a plain server component: no `useId`, because hooks cannot run in
 * a Server Component and this only ever renders once per page — a constant
 * pattern id is correct and keeps the whole trust section server-rendered.
 *
 * The mask is what makes it usable as a design layer rather than wallpaper: the
 * dots fade out toward the edges, so the pattern supports the statement instead
 * of drawing a visible rectangle around it.
 */
export function DotPattern({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      focusable="false"
      className={cn("dot-pattern", className)}
    >
      <defs>
        <pattern
          id="mobiz-dot-pattern"
          width="22"
          height="22"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle cx="1.4" cy="1.4" r="1.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#mobiz-dot-pattern)" />
    </svg>
  );
}

export default DotPattern;
