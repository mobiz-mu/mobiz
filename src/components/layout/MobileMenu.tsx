"use client";

import Image from "next/image";
import Link from "next/link";
import { mainNavLinks, serviceMenuGroups } from "@/lib/navigation";
import {
  ChevronDown,
  X,
  ArrowUpRight,
  Facebook,
  Instagram,
  Linkedin,
  Music2,
  ArrowRight,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

function MobileServiceIcon({
  Icon,
}: {
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-[15px] border border-[#d9b85f]/40 bg-[linear-gradient(180deg,rgba(255,230,160,0.22)_0%,rgba(201,149,33,0.12)_52%,rgba(255,227,150,0.05)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_8px_18px_rgba(0,0,0,0.16)]">
      <span className="pointer-events-none absolute inset-[1px] rounded-[13px] bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.60),rgba(255,255,255,0.12)_34%,transparent_58%)]" />
      <Icon className="relative z-10 h-[16px] w-[16px] text-[#f4d77a] drop-shadow-[0_1px_1px_rgba(87,55,0,0.45)]" />
    </div>
  );
}

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/mobiz.mu/",
    icon: Facebook,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@mobiz.mu",
    icon: Music2,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/mobiz.mu/",
    icon: Instagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/mobiz-mu/",
    icon: Linkedin,
  },
];

const mobileKeywords = [
  "Website Design Mauritius",
  "SEO Mauritius",
  "Digital Marketing",
  "Accounting Services",
  "Tax Filing",
  "Business Registration",
  "Branding Mauritius",
  "Professional Websites",
  "Logistics Solutions",
  "MoBiz.mu",
];

const quoteMessage = `Hello MoBiz.mu, I would like to request a quotation.

Please keep the service you want and delete the others:

- Website Design & Development
- Digital Marketing
- Accounting & Tax Services
- Logistics & Delivery
- Business Plans & Branding
- CV / Cover Letter / LinkedIn

Selected service:
Business name:
Full name:
Phone number:
Project details:`;

const quoteHref = `https://wa.me/23055068119?text=${encodeURIComponent(quoteMessage)}`;

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
      "Business plans, branding and identity design.",
    "CV / Cover Letter / LinkedIn":
      "CV writing, cover letters and LinkedIn profile upgrade.",
  };

  return (
    map[title] ||
    "Professional business solutions designed for growth in Mauritius."
  );
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(true);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      setServicesOpen(true);
      return;
    }

    closeButtonRef.current?.focus();
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const serviceItems = useMemo(() => {
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

    return items;
  }, []);

  const marqueeItems = useMemo(
    () => [...mobileKeywords, ...mobileKeywords],
    []
  );

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-[rgba(4,10,24,0.58)] backdrop-blur-[8px] lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      onClick={onClose}
    >
      <div
        className="absolute right-0 top-0 h-full w-full max-w-[420px] overflow-hidden bg-[linear-gradient(180deg,#071226_0%,#0a1733_42%,#0c1a38_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.35)] sm:max-w-[440px]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,215,122,0.08),transparent_20%),radial-gradient(circle_at_14%_18%,rgba(78,125,255,0.08),transparent_22%),radial-gradient(circle_at_86%_28%,rgba(69,120,255,0.06),transparent_22%)]" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-4 py-3.5 sm:px-5">
          <Link href="/" onClick={onClose} className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226] rounded-md">
            <div className="relative h-10 w-[68px] sm:h-11 sm:w-[72px]">
              <Image
                src="/images/logos/mobiz-mu-logo.png"
                alt="MoBiz.mu logo - premium business solutions in Mauritius"
                fill
                sizes="72px"
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close mobile menu"
            onClick={onClose}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition duration-300 hover:bg-white/12 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
          >
            <X className="h-4.5 w-4.5" />
          </button>
        </div>

        <div className="relative z-10 h-[calc(100%-70px)] overflow-y-auto px-4 py-4 sm:px-5 sm:py-5">
          <div className="overflow-hidden rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.04)_100%)] shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-[14px]">
            <div className="flex items-center gap-2 border-b border-white/8 px-3 py-3">
              <div className="flex items-center gap-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit MoBiz.mu on ${item.name}`}
                      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-[#d7b55b]/80 bg-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_18px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-[1px] hover:border-[#f3d77a] hover:bg-white/[0.09] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
                    >
                      <Icon className="h-[14px] w-[14px] text-[#f3d77a]" />
                    </Link>
                  );
                })}
              </div>

              <div className="relative min-w-0 flex-1 overflow-hidden">
                <div className="flex w-max items-center animate-[mobiz-mobile-marquee_24s_linear_infinite]">
                  {marqueeItems.map((item, index) => (
                    <div key={`${item}-${index}`} className="flex shrink-0 items-center">
                      <span className="whitespace-nowrap px-2 text-[9.5px] font-medium tracking-[0.05em] text-white/84">
                        {item}
                      </span>
                      <span className="text-[9px] text-[#e7c96b]">✦</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-3 py-3">
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                aria-expanded={servicesOpen}
                aria-controls="mobile-services-panel"
                className="flex w-full items-center justify-between gap-3 rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.05)_100%)] px-4 py-3 text-left text-white shadow-[0_10px_22px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-white/10 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
              >
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f3d77a]">
                    Services
                  </div>
                  <div className="mt-0.5 text-[14px] font-semibold">
                    Explore categories
                  </div>
                </div>

                <ChevronDown
                  className={cn(
                    "h-4.5 w-4.5 shrink-0 transition-transform duration-300",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                id="mobile-services-panel"
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  servicesOpen ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="grid grid-cols-1 gap-2.5 pt-3 sm:grid-cols-2">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={onClose}
                        className="group relative min-w-0 overflow-hidden rounded-[20px] border border-[#2f4679]/74 bg-[linear-gradient(180deg,rgba(8,18,44,0.96)_0%,rgba(10,24,58,0.98)_52%,rgba(7,16,38,1)_100%)] px-3.5 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-10px_16px_rgba(0,0,0,0.14),0_12px_24px_rgba(7,18,38,0.16)] transition-all duration-300 hover:border-[#d9b85f]/58 hover:shadow-[0_16px_28px_rgba(7,18,38,0.20),0_0_18px_rgba(217,184,95,0.08)] active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
                      >
                        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(217,184,95,0.06),transparent_26%)]" />

                        <div className="relative z-10 flex items-start gap-3">
                          <MobileServiceIcon Icon={Icon} />

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className="text-[13px] font-semibold leading-5 text-white">
                                {item.title}
                              </div>
                              <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#d7b55b]" />
                            </div>

                            <div className="mt-1 text-[10.8px] leading-[1.55] text-white/78">
                              {getKeywordDescription(item.title)}
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            {mainNavLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="block rounded-[16px] border border-white/10 bg-white/[0.05] px-4 py-3 text-[14px] font-semibold text-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] transition duration-300 hover:bg-white/[0.08] active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Link
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#f1b17d] bg-[linear-gradient(180deg,#ef4444_0%,#d92121_52%,#ac1117_100%)] px-5 py-3.5 text-[13px] font-semibold text-white shadow-[0_16px_30px_rgba(185,28,28,0.22),inset_0_2px_0_rgba(255,255,255,0.20)] transition duration-300 hover:-translate-y-0.5 active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
          >
            <span>Get A Quote</span>
            <ArrowRight className="h-4 w-4 text-[#ffd56b] transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <div className="mt-4 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.035)_100%)] p-4 text-white shadow-[0_18px_44px_rgba(0,0,0,0.12)]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f3d77a]">
              MoBiz.mu
            </div>

            <div className="mt-2 text-[15px] font-semibold leading-snug text-white">
              Premium websites, SEO, accounting, logistics and business support.
            </div>

            <p className="mt-2 text-[12.5px] leading-5 text-white/80">
              Built for stronger presentation, better conversions and executive credibility across Mauritius.
            </p>

            <Link
              href="/contact"
              onClick={onClose}
              className="mt-3 inline-flex rounded-full bg-white px-4 py-2.5 text-[12.5px] font-semibold text-[#071226] transition duration-300 hover:bg-[#f8fafc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
            >
              Contact us
            </Link>
          </div>
        </div>

        <style>{`
          @keyframes mobiz-mobile-marquee {
            0% {
              transform: translate3d(0, 0, 0);
            }
            100% {
              transform: translate3d(-50%, 0, 0);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-\\[mobiz-mobile-marquee_24s_linear_infinite\\] {
              animation: none !important;
              transform: translate3d(0, 0, 0) !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}