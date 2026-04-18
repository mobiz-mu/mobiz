"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  FileText,
  Globe,
  Megaphone,
  Menu,
  ReceiptText,
  Truck,
} from "lucide-react";
import { useEffect, useId, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "@/components/ui/Container";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileMenu";
import { mainNavLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

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

const promoItems = [
  { text: "Websites from Rs 8,000", icon: Globe },
  { text: "Marketing from Rs 6,000", icon: Megaphone },
  { text: "Accounting from Rs 3,500", icon: ReceiptText },
  { text: "Delivery Mauritius", icon: Truck },
  { text: "Business Plans from Rs 2,000", icon: BriefcaseBusiness },
  { text: "Resume from Rs 999", icon: FileText },
];

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", updatePreference);
      return () => mediaQuery.removeEventListener("change", updatePreference);
    }

    mediaQuery.addListener(updatePreference);
    return () => mediaQuery.removeListener(updatePreference);
  }, []);

  return prefersReducedMotion;
}

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [promoIndex, setPromoIndex] = useState(0);

  const prefersReducedMotion = usePrefersReducedMotion();
  const servicesMenuId = useId();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = window.setInterval(() => {
      setPromoIndex((prev) => (prev + 1) % promoItems.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  const activePromo = promoItems[promoIndex];
  const PromoIcon = activePromo.icon;
  const isServicesActive = pathname.startsWith("/services");

  const navLinks = useMemo(
    () =>
      mainNavLinks.map((item) => {
        const active =
          item.href === "/"
            ? pathname === item.href
            : pathname === item.href || pathname.startsWith(`${item.href}/`);

        return { ...item, active };
      }),
    [pathname]
  );

  return (
    <>
      <header className="sticky top-0 z-[70]">
        <div
          className={cn(
            "border-b border-slate-200/75 bg-white/94 backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "shadow-[0_18px_48px_rgba(7,18,38,0.08)]"
              : "shadow-[0_8px_22px_rgba(7,18,38,0.04)]"
          )}
        >
          <Container className="relative">
            <div
              className="relative"
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/* Mobile / Tablet */}
              <div className="flex h-[72px] items-center gap-2.5 sm:h-[78px] sm:gap-3 lg:hidden">
                <Link
                  href="/"
                  aria-label="Go to MoBiz.mu homepage"
                  className="flex shrink-0 items-center"
                >
                  <div className="relative h-[50px] w-[50px] sm:h-[56px] sm:w-[56px]">
                    <Image
                      src="/images/logos/mobiz-mu-logo.png"
                      alt="MoBiz.mu logo"
                      fill
                      sizes="(max-width: 640px) 50px, 56px"
                      className="object-contain object-center"
                      priority
                    />
                  </div>
                </Link>

                <div
                  className="relative flex h-[38px] min-w-0 flex-1 items-center overflow-hidden rounded-full border border-[#d7aa2e] bg-[linear-gradient(180deg,#ffd86a_0%,#f6be3b_52%,#df9f14_100%)] px-2.5 shadow-[0_10px_22px_rgba(201,138,14,0.15),inset_0_1px_0_rgba(255,255,255,0.26)] sm:h-[40px] sm:px-3"
                  aria-live="polite"
                >
                  <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_42%,rgba(255,255,255,0.02)_100%)]" />

                  <div className="relative z-10 flex min-w-0 items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/24 text-[#071226]"
                    >
                      <PromoIcon className="h-[12.5px] w-[12.5px] text-black sm:h-[13px] sm:w-[13px]" />
                    </span>

                    <span className="truncate text-[10px] font-semibold tracking-[0.01em] text-[#071226] sm:text-[10.5px]">
                      {activePromo.text}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Open mobile menu"
                  aria-expanded={mobileOpen}
                  aria-controls="mobiz-mobile-menu"
                  onClick={() => setMobileOpen(true)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.08)] transition duration-300 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] sm:h-11 sm:w-11"
                >
                  <Menu className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                </button>
              </div>

              {/* Desktop */}
              <div className="hidden lg:flex lg:min-h-[84px] lg:items-center lg:justify-between lg:gap-6 xl:min-h-[88px] xl:gap-8">
                <div className="flex shrink-0 items-center gap-4 xl:gap-5">
                  <Link
                    href="/"
                    aria-label="Go to MoBiz.mu homepage"
                    className="flex shrink-0 items-center"
                  >
                    <div className="relative h-[68px] w-[68px] xl:h-[74px] xl:w-[74px] 2xl:h-[78px] 2xl:w-[78px]">
                      <Image
                        src="/images/logos/mobiz-mu-logo.png"
                        alt="MoBiz.mu logo"
                        fill
                        sizes="78px"
                        className="object-contain object-center"
                        priority
                      />
                    </div>
                  </Link>

                  <div
                    className="relative hidden h-[40px] w-[214px] shrink-0 items-center overflow-hidden rounded-full border border-[#d7aa2e] bg-[linear-gradient(180deg,#ffd86a_0%,#f6be3b_52%,#df9f14_100%)] px-3 shadow-[0_10px_20px_rgba(201,138,14,0.14),inset_0_1px_0_rgba(255,255,255,0.24)] xl:flex xl:w-[226px] 2xl:w-[238px]"
                    aria-live="polite"
                  >
                    <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.05)_55%,rgba(255,255,255,0.00)_100%)]" />

                    <div className="relative z-10 flex min-w-0 items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-6.5 w-6.5 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/22 text-[#071226]"
                      >
                        <PromoIcon className="h-[13px] w-[13px] text-black" />
                      </span>

                      <span className="truncate text-[10.5px] font-semibold tracking-[0.01em] text-[#071226] 2xl:text-[11px]">
                        {activePromo.text}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex min-w-0 flex-1 items-center justify-end gap-6 xl:gap-8">
                  <nav
                    aria-label="Primary"
                    className="flex min-w-0 flex-wrap items-center justify-end gap-x-5 gap-y-2 xl:gap-x-6 2xl:gap-x-7"
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      aria-controls={servicesMenuId}
                      onMouseEnter={() => setServicesOpen(true)}
                      onFocus={() => setServicesOpen(true)}
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className={cn(
                        "inline-flex items-center gap-1.5 whitespace-nowrap bg-transparent px-0 py-2 text-[12.5px] font-semibold tracking-[0.01em] transition duration-300 xl:text-[13px]",
                        isServicesActive || servicesOpen
                          ? "text-[#071226]"
                          : "text-[#071226]/88 hover:text-[#071226]"
                      )}
                    >
                      <span>Services</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-300",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {navLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        aria-current={item.active ? "page" : undefined}
                        className={cn(
                          "whitespace-nowrap bg-transparent px-0 py-2 text-[12.5px] font-semibold tracking-[0.01em] transition duration-300 xl:text-[13px]",
                          item.active
                            ? "text-[#071226]"
                            : "text-[#071226]/88 hover:text-[#071226]"
                        )}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </nav>

                  <div className="shrink-0">
                    <Link
                      href={quoteHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Get a quote on WhatsApp from MoBiz.mu"
                      className="group relative inline-flex shrink-0 items-center gap-1.5 overflow-hidden rounded-full border border-[#f1b17d] bg-[linear-gradient(180deg,#ef4444_0%,#d92121_52%,#ac1117_100%)] px-3.5 py-2.5 text-[10.8px] font-semibold text-white shadow-[0_12px_24px_rgba(185,28,28,0.20),inset_0_1px_0_rgba(255,255,255,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(185,28,28,0.24),inset_0_1px_0_rgba(255,255,255,0.18)] xl:px-4 xl:text-[11.2px]"
                    >
                      <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.16)_0%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.00)_100%)]" />
                      <span className="relative z-10">Get A Quote</span>
                      <ArrowRight className="relative z-10 h-3.5 w-3.5 text-[#ffd56b] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>

              <div id={servicesMenuId}>
                <MegaMenu
                  open={servicesOpen}
                  onClose={() => setServicesOpen(false)}
                />
              </div>
            </div>
          </Container>
        </div>
      </header>

      <div id="mobiz-mobile-menu">
        <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      </div>
    </>
  );
}