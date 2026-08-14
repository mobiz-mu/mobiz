import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ACCENTS, type AccentId } from "@/lib/accents";

type EyebrowProps = {
  children: ReactNode;
  accent?: AccentId;
  className?: string;
};

/**
 * The small monospace label above a section title, with a status dot.
 *
 * The dot is decorative — it never carries meaning that isn't in the text
 * beside it, so colour is not the only channel.
 */
export function SectionEyebrow({ children, accent = "red", className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "mb-5 inline-flex items-center gap-2.5 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-text-muted",
        className,
      )}
    >
      <span
        aria-hidden
        className="size-1.5 shrink-0 rounded-full"
        style={{ background: ACCENTS[accent].hex }}
      />
      {children}
    </p>
  );
}

type SectionHeadingProps = {
  title: ReactNode;
  eyebrow?: string;
  description?: ReactNode;
  accent?: AccentId;
  /** `h2` for standard sections; `h1` only on a page's single primary heading. */
  as?: "h1" | "h2" | "h3";
  align?: "left" | "center";
  className?: string;
  id?: string;
};

const HEADING_SIZE = {
  h1: "text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95]",
  h2: "text-[clamp(1.875rem,3.6vw,3rem)] leading-[1.05]",
  h3: "text-[clamp(1.375rem,2.2vw,1.875rem)] leading-[1.15]",
} as const;

/**
 * Section title block. Using this everywhere is what keeps heading size,
 * weight, measure and the eyebrow treatment identical across all 97 routes.
 */
export function SectionHeading({
  title,
  eyebrow,
  description,
  accent = "red",
  as: Tag = "h2",
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <SectionEyebrow accent={accent}>{eyebrow}</SectionEyebrow> : null}
      <Tag
        id={id}
        className={cn(
          "font-bold tracking-tight text-text-primary text-balance",
          HEADING_SIZE[Tag],
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-text-secondary text-pretty sm:text-lg",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeading;
