"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { mainNavLinks, serviceMenuGroups } from "@/lib/navigation";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

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

const consultationMessage = `Hello MoBiz.mu, I would like to book a free consultation.

Business name:
Full name:
Phone number:
Service needed:
Message:`;

const consultationHref = `https://wa.me/23055068119?text=${encodeURIComponent(
  consultationMessage
)}`;

function MobileServiceIcon({
  Icon,
}: {
  Icon: ComponentType<{ className?: string }>;
}) {
  return (
    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-[13px] bg-[linear-gradient(180deg,#ff8a1f_0%,#f97316_100%)] shadow-[0_10px_22px_rgba(249,115,22,0.18)]">
      <span className="pointer-events-none absolute inset-[1px] rounded-[12px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_42%)]" />
      <Icon className="relative z-10 h-[15px] w-[15px] text-white" />
    </div>
  );
}

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(true);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
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
        className="absolute right-0 top-0 h-full w-full max-w-[430px] overflow-hidden bg-[linear-gradient(180deg,#071226_0%,#0a1733_44%,#0c1a38_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,215,122,0.08),transparent_20%),radial-gradient(circle_at_14%_18%,rgba(78,125,255,0.08),transparent_22%),radial-gradient(circle_at_86%_28%,rgba(34,197,94,0.07),transparent_22%)]" />

        {/* Mobile announcement bar */}
        <div className="relative z-10 flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
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
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/12 bg-white/[0.07] text-white transition duration-300 hover:bg-white/[0.12] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
                >
                  <Icon className="h-[14px] w-[14px]" />
                </Link>
              );
            })}
          </div>

          <Link
            href={consultationHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-300/40 bg-[linear-gradient(180deg,#22c55e_0%,#16a34a_100%)] px-3.5 py-2 text-[11.5px] font-semibold text-white shadow-[0_12px_24px_rgba(22,163,74,0.24)] transition duration-300 hover:-translate-y-0.5"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            <span>Consultation</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="relative z-10 flex items-center justify-between border-b border-white/10 px-4 py-3.5">
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
          >
            <div className="relative h-11 w-[74px]">
              <Image
                src="/images/logos/mobiz-mu-logo.png"
                alt="MoBiz.mu logo"
                fill
                sizes="74px"
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
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="relative z-10 h-[calc(100%-122px)] overflow-y-auto px-4 py-4">
          <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.05] shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-[14px]">
            <button
              type="button"
              onClick={() => setServicesOpen((prev) => !prev)}
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-panel"
              className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-white transition duration-300 hover:bg-white/[0.06] active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
            >
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f3d77a]">
                  Services
                </div>
                <div className="mt-0.5 text-[15px] font-semibold">
                  Explore MoBiz.mu services
                </div>
              </div>

              <ChevronDown
                className={cn(
                  "h-4 w-4 shrink-0 transition-transform duration-300",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>

            <div
              id="mobile-services-panel"
              className={cn(
                "overflow-hidden border-t border-white/10 transition-all duration-300",
                servicesOpen ? "max-h-[1800px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="space-y-4 px-3 py-3">
                {serviceMenuGroups.map((group) => {
                  const Icon = group.items[0]?.icon;

                  return (
                    <div key={group.title} className="rounded-[18px] border border-white/10 bg-[#071226]/55 p-3">
                      <div className="mb-2.5 flex items-center gap-2.5">
                        {Icon ? <MobileServiceIcon Icon={Icon} /> : null}
                        <div className="text-[13px] font-semibold leading-snug text-white">
                          {group.title}
                        </div>
                      </div>

                      <div className="space-y-1">
                        {group.items.map((item) => (
                          <Link
                            key={item.title}
                            href={item.href}
                            onClick={onClose}
                            className="group flex items-center justify-between gap-3 rounded-xl px-2 py-2 text-[12.5px] font-medium text-white/82 transition duration-300 hover:bg-white/[0.07] hover:text-white active:scale-[0.995] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#071226]"
                          >
                            <span>{item.title}</span>
                            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[#d7b55b] opacity-70 transition duration-300 group-hover:opacity-100" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
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
        </div>
      </div>
    </div>
  );
}
