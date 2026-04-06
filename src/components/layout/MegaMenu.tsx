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
    <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px] border border-[#d9b85f]/50 bg-[linear-gradient(180deg,rgba(255,230,160,0.28)_0%,rgba(201,149,33,0.16)_52%,rgba(255,227,150,0.08)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-6px_10px_rgba(120,78,4,0.14),0_10px_20px_rgba(0,0,0,0.22),0_0_18px_rgba(217,184,95,0.12)]">
      <span className="pointer-events-none absolute inset-[1px] rounded-[16px] bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.72),rgba(255,255,255,0.14)_34%,transparent_58%)]" />
      <Icon className="relative z-10 h-[19px] w-[19px] text-[#f4d77a] drop-shadow-[0_1px_1px_rgba(87,55,0,0.58)]" />
    </div>
  );
}

function getKeywordDescription(title: string) {
  const map: Record<string, string> = {
    "Website Design & Development":
      "website design Mauritius, business website, web development",
    "Digital Marketing":
      "digital marketing Mauritius, social media marketing, SEO services",
    "Accounting & Tax Services":
      "accounting services Mauritius, tax return, bookkeeping",
    "Logistics & Delivery":
      "delivery service Mauritius, logistics solutions, courier support",
    "Business Plans & Branding":
      "business plan Mauritius, branding services, logo design",
    "CV / Cover Letter / LinkedIn":
      "CV writing Mauritius, cover letter help, LinkedIn profile",
  };

  return (
    map[title] ||
    "professional services Mauritius, business solutions, executive support"
  );
}

export default function MegaMenu({ open, onClose }: MegaMenuProps) {
  const items = serviceMenuGroups
    .flatMap((group) =>
      group.items.map((item) => ({
        ...item,
        group: group.title,
      }))
    )
    .slice(0, 6);

  return (
    <div
      className={cn(
        "absolute inset-x-0 top-[calc(100%+12px)] z-[90] hidden origin-top transition-all duration-300 ease-out lg:block",
        open
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-3 opacity-0"
      )}
      aria-label="Services mega menu"
      onMouseLeave={onClose}
    >
      <div className="relative overflow-hidden rounded-[30px] border border-[#e7ebf2] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(248,250,255,0.94)_100%)] p-4 shadow-[0_32px_90px_rgba(7,18,38,0.18)] backdrop-blur-[16px]">
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f4d77a]/70 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,215,122,0.10),transparent_24%),radial-gradient(circle_at_15%_20%,rgba(78,125,255,0.06),transparent_22%),radial-gradient(circle_at_85%_30%,rgba(69,120,255,0.07),transparent_24%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.55),transparent_35%)]" />

        <div className="relative z-10 mb-3 flex items-center justify-between gap-4 px-1">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#b68a1e]">
              Premium Services
            </div>
            <div className="mt-1 text-[19px] font-semibold tracking-tight text-[#071226]">
              Explore MoBiz.mu luxury business solutions
            </div>
          </div>

          <Link
            href="/services"
            onClick={onClose}
            className="hidden rounded-full border border-[#dde3ed] bg-white px-4 py-2 text-sm font-semibold text-[#071226] transition duration-300 hover:border-[#d9b85f]/45 hover:bg-[#fffdf7] xl:inline-flex"
          >
            View all services
          </Link>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                aria-label={`Open ${item.title} service page`}
                className="group relative min-w-0 overflow-hidden rounded-[24px] border border-[#2f4679]/78 bg-[linear-gradient(180deg,rgba(8,18,44,0.94)_0%,rgba(10,24,58,0.97)_52%,rgba(7,16,38,0.99)_100%)] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-12px_18px_rgba(0,0,0,0.18),0_14px_28px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d9b85f]/65 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-12px_18px_rgba(0,0,0,0.18),0_18px_34px_rgba(7,18,38,0.24),0_0_24px_rgba(217,184,95,0.10)]"
                style={
                  {
                    transitionDelay: open ? `${index * 24}ms` : "0ms",
                  } as CSSProperties
                }
              >
                <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,184,95,0.08),transparent_28%)]" />
                <span className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-[#f4d77a]/55 to-transparent" />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start gap-3">
                    <ServiceIcon Icon={Icon} />

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <span className="line-clamp-2 text-[15px] font-semibold leading-[1.35] tracking-[0.01em] text-white xl:text-[15.5px]">
                          {item.title}
                        </span>

                        <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[#d7b55b] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>

                      <p className="mt-2 line-clamp-2 text-[12px] leading-5 text-white/72 xl:text-[12.5px]">
                        {getKeywordDescription(item.title)}
                      </p>
                    </div>
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