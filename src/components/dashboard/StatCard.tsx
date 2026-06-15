import type { ComponentType } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  hint?: string;
  className?: string;
  tone?: "default" | "navy" | "gold";
  icon?: ComponentType<{ className?: string }>;
  href?: string;
};

export default function StatCard({
  title,
  value,
  change,
  hint,
  className,
  tone = "default",
  icon: Icon,
  href,
}: StatCardProps) {
  const card = (
    <div
      className={cn(
        "group relative h-full overflow-hidden rounded-[24px] border p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition-all duration-200",
        href && "hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(15,23,42,0.10)]",
        tone === "default" && "border-slate-200 bg-white",
        tone === "navy" &&
          "border-[#0f2347] bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] text-white shadow-[0_18px_40px_rgba(7,18,38,0.16)]",
        tone === "gold" &&
          "border-[#ead9a8] bg-[linear-gradient(180deg,#fffdf7_0%,#fff8e8_100%)]",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f3d77a]/70 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-20 w-20 rounded-full bg-[#f3d77a]/10 blur-3xl" />

      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "text-sm font-medium",
            tone === "navy" ? "text-white/70" : "text-slate-500"
          )}
        >
          {title}
        </div>

        {Icon ? (
          <div
            className={cn(
              "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl",
              tone === "navy"
                ? "bg-white/10 text-[#f3d77a]"
                : "bg-[#071226]/5 text-[#0d1b3d]"
            )}
          >
            <Icon className="h-4 w-4" />
          </div>
        ) : null}
      </div>

      <div
        className={cn(
          "mt-3 text-3xl font-semibold tracking-tight",
          tone === "navy" ? "text-white" : "text-[#071226]"
        )}
      >
        {value}
      </div>

      {change ? (
        <div
          className={cn(
            "mt-2 text-sm font-medium",
            tone === "navy" ? "text-[#f3d77a]" : "text-emerald-600"
          )}
        >
          {change}
        </div>
      ) : null}

      {hint ? (
        <div
          className={cn(
            "mt-1 text-xs",
            tone === "navy" ? "text-white/55" : "text-slate-400"
          )}
        >
          {hint}
        </div>
      ) : null}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
