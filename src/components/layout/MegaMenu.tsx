"use client";

import type { ComponentType, CSSProperties } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceMenuGroups } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
};

function ServiceIcon({
  Icon,
}: {
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-[#d9b85f]/40 bg-[linear-gradient(180deg,rgba(255,233,173,0.22)_0%,rgba(201,149,33,0.12)_56%,rgba(255,227,150,0.04)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_8px_18px_rgba(7,18,38,0.18)]">
      <span className="pointer-events-none absolute inset-[1px] rounded-[15px] bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.58),rgba(255,255,255,0.12)_34%,transparent_58%)]" />
      <Icon className="relative z-10 h-[17px] w-[17px] text-[#f4d77a] drop-shadow-[0_1px_1px_rgba(87,55,0,0.45)]" />
    </div>
  );
}

function getKeywordDescription(title: string) {
  const map: Record<string, string> = {
    "Website Design & Development":
      "Luxury websites, e-commerce and business web solutions.",
    "Digital Marketing":
      "SEO, ads and social media growth for Mauritius brands.",
    "Accounting & Tax Services":
      "Bookkeeping, tax returns and accounting support.",
    "Logistics & Delivery":
      "Courier, logistics and delivery support across Mauritius.",
    "Business Plans & Branding":
      "Business plans, branding and professional identity design.",
    "CV / Cover Letter / LinkedIn":
      "CV writing, cover letters and LinkedIn profile upgrade.",
  };

  return (
    map[title] ||
    "Professional business solutions designed for growth in Mauritius."
  );
}

export default function MegaMenu({ open, onClose }: MegaMenuProps) {
  const items: Array<
    (typeof serviceMenuGroups)[number]["items"][number] & { group: string }
  > = [];

  for (const group of serviceMenuGroups) {
    for (const item of group.items) {
      items.push({ ...item, group: group.title });
      if (items.length === 6) break;
    }
    if (items.length === 6) break;
  }

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-[calc(100%+10px)] z-[90] hidden origin-top transition-all duration-300 ease-out lg:block",
        open
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-3 opacity-0"
      )}
      aria-label="Services mega menu"
      onMouseLeave={onClose}
    >
      <div className="relative overflow-hidden rounded-[26px] border border-[#e7ebf2] bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(247,249,253,0.96)_100%)] p-3 shadow-[0_28px_80px_rgba(7,18,38,0.18)] backdrop-blur-[16px] xl:p-4">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f4d77a]/65 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,215,122,0.08),transparent_24%),radial-gradient(circle_at_14%_18%,rgba(78,125,255,0.05),transparent_20%),radial-gradient(circle_at_86%_24%,rgba(69,120,255,0.05),transparent_22%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.48),transparent_34%)]" />

        <div className="relative z-10 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3 xl:gap-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                aria-label={`Open ${item.title} service page`}
                className="group relative min-w-0 overflow-hidden rounded-[22px] border border-[#243a68]/72 bg-[linear-gradient(180deg,rgba(8,18,44,0.95)_0%,rgba(10,24,58,0.98)_52%,rgba(7,16,38,1)_100%)] px-3.5 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-10px_16px_rgba(0,0,0,0.16),0_12px_24px_rgba(7,18,38,0.16)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b85f]/58 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-10px_16px_rgba(0,0,0,0.16),0_18px_34px_rgba(7,18,38,0.22),0_0_24px_rgba(217,184,95,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#071226] focus-visible:ring-offset-2 xl:px-4 xl:py-4"
                style={
                  {
                    transitionDelay: open ? `${index * 22}ms` : "0ms",
                  } as CSSProperties
                }
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,184,95,0.07),transparent_28%)]" />
                <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#f4d77a]/45 to-transparent" />

                <div className="relative z-10 flex items-start gap-3">
                  <ServiceIcon Icon={Icon} />

                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <span className="line-clamp-2 text-[14px] font-semibold leading-[1.35] tracking-[0.01em] text-white xl:text-[14.5px]">
                        {item.title}
                      </span>

                      <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[#d7b55b] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>

                    <p className="mt-1.5 line-clamp-2 text-[11.5px] leading-[1.55] text-white/80 xl:text-[12px]">
                      {getKeywordDescription(item.title)}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}