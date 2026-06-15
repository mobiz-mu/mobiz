"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  Globe2,
  Megaphone,
  Palette,
  ReceiptText,
  Settings2,
  Truck,
} from "lucide-react";
import { cn } from "@/lib/utils";

type MegaMenuProps = {
  open: boolean;
  onClose: () => void;
};

const categories = [
  {
    title: "Website Design & Development",
    href: "/services/website-design",
    icon: Globe2,
    color:
      "bg-[linear-gradient(180deg,#ef4444_0%,#b91c1c_100%)] shadow-[0_8px_18px_rgba(185,28,28,0.22)]",
  },
  {
    title: "Digital Marketing & SEO",
    href: "/services/digital-marketing",
    icon: Megaphone,
    color:
      "bg-[linear-gradient(180deg,#3b82f6_0%,#1d4ed8_100%)] shadow-[0_8px_18px_rgba(29,78,216,0.22)]",
  },
  {
    title: "Accounting & Tax Services",
    href: "/services/accounting-tax-returns",
    icon: ReceiptText,
    color:
      "bg-[linear-gradient(180deg,#facc15_0%,#d97706_100%)] shadow-[0_8px_18px_rgba(217,119,6,0.22)]",
  },
  {
    title: "Business Software & Automation",
    href: "/web-application-development-mauritius",
    icon: Settings2,
    color:
      "bg-[linear-gradient(180deg,#22c55e_0%,#15803d_100%)] shadow-[0_8px_18px_rgba(21,128,61,0.22)]",
  },
  {
    title: "Mauritius Business Solutions",
    href: "/mauritius-services",
    icon: Building2,
    color:
      "bg-[linear-gradient(180deg,#fb923c_0%,#ea580c_100%)] shadow-[0_8px_18px_rgba(234,88,12,0.22)]",
  },
  {
    title: "Logistics & Import/Export Support",
    href: "/services/logistics",
    icon: Truck,
    color:
      "bg-[linear-gradient(180deg,#8b5cf6_0%,#6d28d9_100%)] shadow-[0_8px_18px_rgba(109,40,217,0.22)]",
  },
  {
    title: "Branding & Business Solutions",
    href: "/services/branding-business-solutions",
    icon: Palette,
    color:
      "bg-[linear-gradient(180deg,#ec4899_0%,#be185d_100%)] shadow-[0_8px_18px_rgba(190,24,93,0.22)]",
  },
];

export default function MegaMenu({ open, onClose }: MegaMenuProps) {
  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-[90] hidden w-[365px] -translate-x-1/2 pt-3 lg:block",
        "transition-all duration-300 ease-out",
        open
          ? "visible translate-y-0 opacity-100"
          : "pointer-events-none invisible translate-y-2 opacity-0"
      )}
      aria-label="Services dropdown menu"
    >
      <div className="absolute inset-x-0 top-0 h-3" />

      <div className="relative overflow-hidden rounded-[18px] border border-slate-200 bg-white p-2.5 shadow-[0_24px_64px_rgba(7,18,38,0.18)]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-500" />

        <div className="space-y-1.5 pt-1">
          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-3 rounded-[14px] px-2.5 py-2.5 text-[#071226] transition duration-300 hover:bg-slate-50 hover:shadow-[0_10px_22px_rgba(7,18,38,0.06)]"
              >
                <span
                  className={cn(
                    "relative flex h-8 w-8 shrink-0 items-center justify-center rounded-xl",
                    item.color
                  )}
                >
                  <span className="pointer-events-none absolute inset-[1px] rounded-[11px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_42%)]" />
                  <Icon className="relative z-10 h-[14px] w-[14px] text-white" />
                </span>

                <span className="min-w-0 flex-1 truncate text-[13px] font-semibold">
                  {item.title}
                </span>

                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-slate-300 transition duration-300 group-hover:text-[#d92121]" />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

