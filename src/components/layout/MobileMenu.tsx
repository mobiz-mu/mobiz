"use client";

import Image from "next/image";
import Link from "next/link";
import {
  mainNavLinks,
  serviceMenuGroups,
} from "@/lib/navigation";
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
import { useEffect, useState } from "react";
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
    <div className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-[#d9b85f]/50 bg-[linear-gradient(180deg,rgba(255,230,160,0.28)_0%,rgba(201,149,33,0.16)_52%,rgba(255,227,150,0.08)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.55),inset_0_-6px_10px_rgba(120,78,4,0.14),0_10px_20px_rgba(0,0,0,0.18),0_0_18px_rgba(217,184,95,0.10)]">
      <span className="pointer-events-none absolute inset-[1px] rounded-[14px] bg-[radial-gradient(circle_at_28%_24%,rgba(255,255,255,0.72),rgba(255,255,255,0.14)_34%,transparent_58%)]" />
      <Icon className="relative z-10 h-[18px] w-[18px] text-[#f4d77a] drop-shadow-[0_1px_1px_rgba(87,55,0,0.58)]" />
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
  "Mauritius Website Design",
  "SEO Mauritius",
  "Digital Marketing",
  "Accounting Services",
  "Tax Filing",
  "Business Registration",
  "Branding Mauritius",
  "Professional Websites",
  "Logistics Solutions",
  "MoBiz.mu Mauritius",
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

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      setServicesOpen(true);
    }
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const serviceItems = serviceMenuGroups
    .flatMap((group) => group.items.map((item) => ({ ...item, group: group.title })))
    .slice(0, 6);

  const marqueeItems = [...mobileKeywords, ...mobileKeywords];

  return (
    <div
      className={cn(
        "fixed inset-0 z-[90] bg-[rgba(4,10,24,0.56)] backdrop-blur-[8px] transition-all duration-300 lg:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      )}
      aria-hidden={!open}
    >
      <div
        className={cn(
          "absolute right-0 top-0 h-full w-full max-w-[430px] overflow-hidden bg-[linear-gradient(180deg,#071226_0%,#0a1733_35%,#0d1c3e_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,215,122,0.10),transparent_22%),radial-gradient(circle_at_15%_18%,rgba(78,125,255,0.10),transparent_24%),radial-gradient(circle_at_85%_30%,rgba(69,120,255,0.08),transparent_24%)]" />

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-5">
          <Link href="/" onClick={onClose} className="flex items-center">
            <div className="relative h-11 w-[72px]">
              <Image
                src="/images/logos/mobiz-mu-logo.png"
                alt="MoBiz.mu logo - premium business solutions in Mauritius"
                fill
                sizes="72px"
                className="object-contain object-left"
              />
            </div>
          </Link>

          <button
            type="button"
            aria-label="Close mobile menu"
            onClick={onClose}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/12 bg-white/8 text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] transition duration-300 hover:bg-white/12 active:scale-[0.98]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="relative z-10 h-[calc(100%-76px)] overflow-y-auto px-4 py-4 sm:px-5">
          <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.04)_100%)] shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-[14px]">
            <div className="flex items-center gap-2 border-b border-white/8 px-3 py-3">
              <div className="flex items-center gap-2">
                {socialLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit MoBiz.mu on ${item.name}`}
                      className="group relative flex h-9 w-9 items-center justify-center rounded-full border border-[#d7b55b]/85 bg-white/[0.06] shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_8px_18px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-[1px] hover:border-[#f3d77a] hover:bg-white/[0.10]"
                      style={{ animationDelay: `${index * 0.25}s` }}
                    >
                      <Icon className="h-[15px] w-[15px] text-[#f3d77a]" />
                    </Link>
                  );
                })}
              </div>

              <div className="relative min-w-0 flex-1 overflow-hidden">
                <div className="flex w-max items-center animate-[mobiz-mobile-marquee_26s_linear_infinite]">
                  {marqueeItems.map((item, index) => (
                    <div key={`${item}-${index}`} className="flex shrink-0 items-center">
                      <span className="whitespace-nowrap px-2 text-[10px] font-medium tracking-[0.05em] text-white/88">
                        {item}
                      </span>
                      <span className="text-[10px] text-[#e7c96b]">✦</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="px-3 py-3">
              <button
                type="button"
                onClick={() => setServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between gap-3 rounded-[18px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.06)_100%)] px-4 py-3.5 text-left text-white shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition duration-300 hover:bg-white/10 active:scale-[0.995]"
              >
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3d77a]">
                    Explore Services
                  </div>
                  <div className="mt-1 text-[15px] font-semibold">
                    Executive service categories
                  </div>
                </div>

                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform duration-300",
                    servicesOpen && "rotate-180"
                  )}
                />
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  servicesOpen ? "max-h-[1400px] opacity-100" : "max-h-0 opacity-0"
                )}
              >
                <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        href={item.href}
                        onClick={onClose}
                        className="group relative min-w-0 overflow-hidden rounded-[22px] border border-[#2f4679]/78 bg-[linear-gradient(180deg,rgba(8,18,44,0.96)_0%,rgba(10,24,58,0.98)_52%,rgba(7,16,38,1)_100%)] px-3.5 py-3.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),inset_0_-12px_18px_rgba(0,0,0,0.16),0_14px_28px_rgba(7,18,38,0.18)] transition-all duration-300 hover:border-[#d9b85f]/65 hover:shadow-[0_18px_34px_rgba(7,18,38,0.24),0_0_18px_rgba(217,184,95,0.10)] active:scale-[0.995]"
                      >
                        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.10),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(217,184,95,0.08),transparent_28%)]" />

                        <div className="relative z-10 flex items-start gap-3">
                          <MobileServiceIcon Icon={Icon} />

                          <div className="min-w-0 flex-1">
                            <div className="flex items-start justify-between gap-2">
                              <div className="text-[13.5px] font-semibold leading-5 text-white">
                                {item.title}
                              </div>
                              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-[#d7b55b]" />
                            </div>

                            <div className="mt-1.5 text-[11px] leading-5 text-white/72">
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

          <div className="mt-4 space-y-2.5">
            {mainNavLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={onClose}
                className="block rounded-[18px] border border-white/10 bg-white/[0.06] px-4 py-3.5 text-[15px] font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.10)] transition duration-300 hover:bg-white/[0.09] active:scale-[0.995]"
              >
                {item.title}
              </Link>
            ))}
          </div>

          <Link
            href={quoteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#f1b17d] bg-[linear-gradient(180deg,#ef4444_0%,#d92121_52%,#ac1117_100%)] px-5 py-3.5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(185,28,28,0.24),inset_0_2px_0_rgba(255,255,255,0.24),inset_0_-5px_10px_rgba(94,8,11,0.18)] transition duration-300 hover:-translate-y-0.5 active:scale-[0.995]"
          >
            <span>Get A Quote</span>
            <ArrowRight className="h-4 w-4 text-[#ffd56b] transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>

          <div className="mt-5 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07)_0%,rgba(255,255,255,0.04)_100%)] p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.14)]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#f3d77a]">
              MoBiz.mu
            </div>

            <div className="mt-2 text-[16px] font-semibold leading-snug">
              Premium websites, SEO, accounting, logistics and business support.
            </div>

            <p className="mt-2.5 text-[13px] leading-6 text-white/76">
              Built for stronger presentation, better conversions and executive credibility across Mauritius.
            </p>

            <Link
              href="/contact"
              onClick={onClose}
              className="mt-4 inline-flex rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-[#071226]"
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
            .animate-\\[mobiz-mobile-marquee_26s_linear_infinite\\] {
              animation: none !important;
              transform: translate3d(0, 0, 0) !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
}