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
  { text: "Websites as from Rs 8,000", icon: Globe },
  { text: "Marketing as from Rs 6,000", icon: Megaphone },
  { text: "Accounting as from Rs 3,500", icon: ReceiptText },
  { text: "Delivery Across Mauritius", icon: Truck },
  { text: "Business Plans as from Rs 2,000", icon: BriefcaseBusiness },
  { text: "Resume as from Rs 999", icon: FileText },
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
            "border-b border-slate-200/80 bg-white/96 backdrop-blur-xl transition-all duration-300",
            scrolled
              ? "shadow-[0_18px_50px_rgba(7,18,38,0.08)]"
              : "shadow-[0_8px_24px_rgba(7,18,38,0.04)]"
          )}
        >
          <Container className="relative">
            <div className="relative" onMouseLeave={() => setServicesOpen(false)}>
              <div className="flex h-[76px] items-center gap-2 sm:h-[82px] sm:gap-3 lg:hidden">
                <Link
                  href="/"
                  aria-label="Go to MoBiz.mu homepage"
                  className="flex shrink-0 items-center"
                >
                  <div className="relative h-[54px] w-[54px] sm:h-[60px] sm:w-[60px]">
                    <Image
                      src="/images/logos/mobiz-mu-logo.png"
                      alt="MoBiz.mu logo"
                      fill
                      sizes="(max-width: 640px) 54px, 60px"
                      className="object-contain object-center"
                    />
                  </div>
                </Link>

                <div
                  className="relative flex h-[42px] min-w-0 flex-1 items-center overflow-hidden rounded-full border border-[#d7aa2e] bg-[linear-gradient(180deg,#ffd86a_0%,#f6be3b_52%,#df9f14_100%)] px-2.5 shadow-[0_16px_30px_rgba(201,138,14,0.20),inset_0_2px_0_rgba(255,255,255,0.30),inset_0_-8px_14px_rgba(111,67,2,0.14)] sm:h-[46px] sm:px-3"
                  aria-live="polite"
                >
                  <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.08)_42%,rgba(255,255,255,0.02)_100%)]" />
                  <div className="relative z-10 flex min-w-0 items-center gap-2 sm:gap-2.5">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/28 text-[#071226] shadow-[0_8px_16px_rgba(7,18,38,0.10)] sm:h-8 sm:w-8"
                    >
                      <PromoIcon className="h-[15px] w-[15px] text-black sm:h-[17px] sm:w-[17px]" />
                    </span>

                    <span className="truncate text-[11px] font-semibold tracking-[0.01em] text-[#071226] sm:text-[12px]">
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
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-[#071226] shadow-[0_10px_24px_rgba(7,18,38,0.08)] transition duration-300 hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98] sm:h-12 sm:w-12"
                >
                  <Menu className="h-5 w-5" />
                </button>
              </div>

              <div className="hidden lg:grid lg:h-[92px] lg:grid-cols-[92px_270px_minmax(0,1fr)_124px] lg:items-center lg:gap-3 xl:grid-cols-[96px_290px_minmax(0,1fr)_128px] xl:gap-4 2xl:grid-cols-[102px_310px_minmax(0,1fr)_132px]">
                <div className="flex shrink-0 items-center">
                  <Link
                    href="/"
                    aria-label="Go to MoBiz.mu homepage"
                    className="flex shrink-0 items-center"
                  >
                    <div className="relative h-[74px] w-[74px] xl:h-[76px] xl:w-[76px] 2xl:h-[80px] 2xl:w-[80px]">
                      <Image
                        src="/images/logos/mobiz-mu-logo.png"
                        alt="MoBiz.mu logo"
                        fill
                        sizes="80px"
                        className="object-contain object-center"
                      />
                    </div>
                  </Link>
                </div>

                <div
                  className="relative flex h-[48px] min-w-0 items-center overflow-hidden rounded-full border border-[#d7aa2e] bg-[linear-gradient(180deg,#ffd86a_0%,#f6be3b_52%,#df9f14_100%)] px-3 shadow-[0_15px_28px_rgba(201,138,14,0.18),inset_0_2px_0_rgba(255,255,255,0.28),inset_0_-8px_14px_rgba(111,67,2,0.12)] xl:h-[50px] xl:px-3.5"
                  aria-live="polite"
                >
                  <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.08)_42%,rgba(255,255,255,0.02)_100%)]" />
                  <span className="pointer-events-none absolute left-4 top-1.5 h-7 w-16 rounded-full bg-white/20 blur-xl" />
                  <span className="pointer-events-none absolute bottom-1 right-4 h-7 w-14 rounded-full bg-[#a86800]/12 blur-xl" />

                  <div className="relative z-10 flex min-w-0 items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white/28 text-[#071226] shadow-[0_8px_16px_rgba(7,18,38,0.10)]"
                    >
                      <PromoIcon className="h-[17px] w-[17px] text-black" />
                    </span>

                    <span className="truncate text-[12px] font-semibold tracking-[0.01em] text-[#071226] xl:text-[13px] 2xl:text-[13.5px]">
                      {activePromo.text}
                    </span>
                  </div>
                </div>

                <div className="min-w-0">
                  <nav
                    aria-label="Primary"
                    className="relative flex w-full min-w-0 overflow-hidden rounded-full border border-[#c8d1df]/45 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-1.5 py-1.5 shadow-[0_18px_40px_rgba(2,8,20,0.16),0_0_0_1px_rgba(255,255,255,0.75)_inset]"
                  >
                    <span className="pointer-events-none absolute inset-[1px] rounded-full border border-white/80" />
                    <span className="pointer-events-none absolute left-6 top-1 h-10 w-24 rounded-full bg-white/80 blur-xl" />
                    <span className="pointer-events-none absolute right-6 bottom-1 h-10 w-24 rounded-full bg-slate-100/80 blur-xl" />

                    <div className="relative z-10 flex w-full min-w-0 flex-nowrap items-center gap-0.5">
                      <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={servicesOpen}
                        aria-controls={servicesMenuId}
                        onMouseEnter={() => setServicesOpen(true)}
                        onFocus={() => setServicesOpen(true)}
                        onClick={() => setServicesOpen((prev) => !prev)}
                        className={cn(
                          "inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full px-3 py-2.5 text-[12.5px] font-semibold tracking-[0.01em] transition duration-300 xl:text-[13px] 2xl:text-[13.5px]",
                          isServicesActive || servicesOpen
                            ? "bg-[#071226] text-white shadow-[0_12px_24px_rgba(7,18,38,0.14)]"
                            : "text-[#071226] hover:bg-slate-100"
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
                            "shrink-0 whitespace-nowrap rounded-full px-2 py-2.5 text-[12.5px] font-semibold tracking-[0.01em] transition duration-300 xl:px-2.5 xl:text-[13px] 2xl:px-3 2xl:text-[13.5px]",
                            item.active
                              ? "bg-slate-100 text-[#071226]"
                              : "text-[#071226] hover:bg-slate-100"
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>

                <div className="flex shrink-0 items-center justify-end">
                  <Link
                    href={quoteHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Get a quote on WhatsApp from MoBiz.mu"
                    className="group relative inline-flex shrink-0 items-center gap-1.5 overflow-hidden rounded-full border border-[#f1b17d] bg-[linear-gradient(180deg,#ef4444_0%,#d92121_52%,#ac1117_100%)] px-3 py-2.5 text-[11.5px] font-semibold text-white shadow-[0_16px_30px_rgba(185,28,28,0.22),inset_0_2px_0_rgba(255,255,255,0.22),inset_0_-5px_10px_rgba(94,8,11,0.16)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(185,28,28,0.28),inset_0_2px_0_rgba(255,255,255,0.22),inset_0_-5px_10px_rgba(94,8,11,0.16)] xl:px-3.5 xl:text-[12px]"
                  >
                    <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.03)_40%,rgba(255,255,255,0.00)_100%)]" />
                    <span className="pointer-events-none absolute left-3 top-1 h-5 w-12 rounded-full bg-white/12 blur-lg" />
                    <span className="relative z-10">Get A Quote</span>
                    <ArrowRight className="relative z-10 h-3.5 w-3.5 text-[#ffd56b] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>

              <div id={servicesMenuId}>
                <MegaMenu open={servicesOpen} onClose={() => setServicesOpen(false)} />
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