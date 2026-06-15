import Link from "next/link";
import {
  Building2,
  Calculator,
  Megaphone,
  Monitor,
  ReceiptText,
  Search,
  ShoppingBag,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

type SearchItem = {
  title: string;
  description: string;
  href: string;
  Icon: LucideIcon;
  iconClass: string;
};

const items: SearchItem[] = [
  {
    title: "Website Design Mauritius",
    description: "Premium websites built to generate enquiries.",
    href: "/website-design-mauritius",
    Icon: Monitor,
    iconClass:
      "from-[#ef4444] via-[#dc2626] to-[#991b1b] shadow-[0_14px_28px_rgba(220,38,38,0.26)]",
  },
  {
    title: "Ecommerce Website Mauritius",
    description: "Online stores, catalogues and ordering systems.",
    href: "/ecommerce-website-mauritius",
    Icon: ShoppingBag,
    iconClass:
      "from-[#f97316] via-[#fb923c] to-[#c2410c] shadow-[0_14px_28px_rgba(249,115,22,0.24)]",
  },
  {
    title: "Digital Marketing Mauritius",
    description: "Visibility, campaigns and business growth.",
    href: "/digital-marketing-mauritius",
    Icon: Megaphone,
    iconClass:
      "from-[#3b82f6] via-[#2563eb] to-[#1e3a8a] shadow-[0_14px_28px_rgba(37,99,235,0.24)]",
  },
  {
    title: "Accounting Services Mauritius",
    description: "Bookkeeping, payroll and business finance support.",
    href: "/accounting-services-mauritius",
    Icon: Calculator,
    iconClass:
      "from-[#facc15] via-[#eab308] to-[#b45309] shadow-[0_14px_28px_rgba(234,179,8,0.22)]",
  },
  {
    title: "Company Registration Mauritius",
    description: "Start your company professionally and faster.",
    href: "/company-registration-mauritius",
    Icon: Building2,
    iconClass:
      "from-[#22c55e] via-[#16a34a] to-[#166534] shadow-[0_14px_28px_rgba(34,197,94,0.22)]",
  },
  {
    title: "VAT Filing Mauritius",
    description: "VAT return preparation and filing support.",
    href: "/vat-filing-mauritius",
    Icon: ReceiptText,
    iconClass:
      "from-[#8b5cf6] via-[#7c3aed] to-[#5b21b6] shadow-[0_14px_28px_rgba(124,58,237,0.22)]",
  },
  {
    title: "SEO Services Mauritius",
    description: "Improve Google visibility and local ranking.",
    href: "/seo-services-mauritius",
    Icon: Search,
    iconClass:
      "from-[#06b6d4] via-[#0891b2] to-[#155e75] shadow-[0_14px_28px_rgba(8,145,178,0.22)]",
  },
];

export default function MauritiusSearches() {
  return (
    <section
      id="mauritius-searches"
      aria-labelledby="mauritius-searches-heading"
      className="w-full bg-white py-8 sm:py-9 lg:py-10"
    >
      <Container className="max-w-[1520px]">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#d92121] sm:text-[11px]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Most Searched Services
          </div>

          <h2
            id="mauritius-searches-heading"
            className="mt-2 text-balance text-2xl font-bold tracking-tight text-[#071f5f] sm:text-3xl lg:text-[2.35rem] lg:leading-[1.08]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Popular services for businesses in Mauritius
          </h2>

          <p
            className="mx-auto mt-3 max-w-3xl text-pretty text-[13px] leading-6 text-slate-600 sm:text-[14px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Find the right MoBiz.mu service for your business, from websites and e-commerce to accounting, VAT filing, company registration, SEO and digital marketing.
          </p>
        </div>

        <div className="-mx-4 mt-6 overflow-x-auto px-4 pb-2 sm:mx-0 sm:overflow-visible sm:px-0 lg:mt-7">
          <div className="flex snap-x gap-3 sm:grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {items.map((item) => {
              const Icon = item.Icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group relative flex min-h-[150px] w-[78vw] max-w-[310px] shrink-0 snap-start flex-col overflow-hidden rounded-[22px] border border-[#e7edf7] bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-4 shadow-[0_16px_38px_rgba(7,18,38,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_rgba(7,18,38,0.12)] sm:w-auto sm:max-w-none"
                  aria-label={item.title}
                >
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#071f5f]/[0.04] transition duration-300 group-hover:scale-125" />

                  <div
                    className={cn(
                      "relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br text-white transition duration-300 group-hover:rotate-3 group-hover:scale-105",
                      item.iconClass
                    )}
                  >
                    <span className="pointer-events-none absolute inset-[1px] rounded-[15px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_42%)]" />
                    <Icon className="relative z-10 h-5 w-5" />
                  </div>

                  <h3
                    className="mt-3 text-[15px] font-bold leading-snug tracking-tight text-[#071f5f]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.title}
                  </h3>

                  <p
                    className="mt-2 text-[12.5px] leading-5 text-slate-600"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {item.description}
                  </p>

                  <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[12px] font-bold text-[#d92121] transition duration-300 group-hover:text-[#071f5f]">
                    View service
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
