"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
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

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    const timer = window.setTimeout(() => {
      setMobileOpen(false);
      setServicesOpen(false);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  const isServicesActive =
    pathname.startsWith("/services") ||
    pathname.includes("website") ||
    pathname.includes("marketing") ||
    pathname.includes("accounting") ||
    pathname.includes("software") ||
    pathname.includes("seo");

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
            "relative border-b border-white/45 bg-white/68 shadow-[0_12px_34px_rgba(7,18,38,0.06)] backdrop-blur-2xl transition-all duration-300 supports-[backdrop-filter]:bg-white/58",
            scrolled &&
              "border-white/55 bg-white/78 shadow-[0_20px_58px_rgba(7,18,38,0.13)] supports-[backdrop-filter]:bg-white/68"
          )}
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.52)_42%,rgba(255,255,255,0.82)_100%)]" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(90deg,transparent,rgba(217,33,33,0.30),rgba(248,215,90,0.42),rgba(19,163,127,0.26),transparent)]" />
          <div className="pointer-events-none absolute -left-20 -top-24 h-44 w-44 rounded-full bg-[#d92121]/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -top-20 h-44 w-44 rounded-full bg-[#13a37f]/10 blur-3xl" />

          <Container className="relative z-10">
            {/* Mobile / Tablet */}
            <div className="flex h-[68px] items-center justify-between gap-3 sm:h-[74px] lg:hidden">
              <Link
                href="/"
                aria-label="Go to MoBiz.mu homepage"
                className="flex shrink-0 items-center"
              >
                <div className="relative h-[52px] w-[52px] rounded-full bg-white/30 p-1 shadow-[0_12px_30px_rgba(7,18,38,0.10)] ring-1 ring-white/50 sm:h-[58px] sm:w-[58px]">
                  <Image
                    src="/images/logos/mobiz-mu-logo.png"
                    alt="MoBiz.mu logo"
                    fill
                    sizes="(max-width: 640px) 52px, 58px"
                    className="object-contain object-left p-1"
                    priority
                  />
                </div>
              </Link>

              <button
                type="button"
                aria-label="Open mobile menu"
                aria-expanded={mobileOpen}
                aria-controls="mobiz-mobile-menu"
                onClick={() => setMobileOpen(true)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/60 bg-white/55 text-[#071226] shadow-[0_14px_30px_rgba(7,18,38,0.12),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition duration-300 hover:border-white hover:bg-white/80 active:scale-[0.98]"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>

            {/* Desktop */}
            <div className="hidden lg:grid lg:min-h-[84px] lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:items-center lg:gap-6 xl:min-h-[88px]">
              <Link
                href="/"
                aria-label="Go to MoBiz.mu homepage"
                className="flex shrink-0 items-center justify-self-start"
              >
                <div className="relative h-[68px] w-[68px] rounded-full bg-white/32 p-1.5 shadow-[0_16px_38px_rgba(7,18,38,0.10)] ring-1 ring-white/60 transition duration-300 hover:scale-[1.02] xl:h-[74px] xl:w-[74px] 2xl:h-[78px] 2xl:w-[78px]">
                  <Image
                    src="/images/logos/mobiz-mu-logo.png"
                    alt="MoBiz.mu logo"
                    fill
                    sizes="78px"
                    className="object-contain object-left p-1"
                    priority
                  />
                </div>
              </Link>

              <nav
                aria-label="Primary"
                className="flex min-w-0 items-center justify-center"
              >
                <div className="flex items-center justify-center gap-x-1 rounded-full border border-white/58 bg-white/42 px-3 py-2 shadow-[0_16px_38px_rgba(7,18,38,0.08),inset_0_1px_0_rgba(255,255,255,0.72)] backdrop-blur-2xl xl:gap-x-1.5 xl:px-4">
                  <div
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      type="button"
                      aria-haspopup="menu"
                      aria-expanded={servicesOpen}
                      aria-controls={servicesMenuId}
                      onFocus={() => setServicesOpen(true)}
                      onClick={() => setServicesOpen((prev) => !prev)}
                      className={cn(
                        "group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-bold tracking-[0.01em] transition duration-300 xl:px-3.5 xl:text-[13.5px]",
                        isServicesActive || servicesOpen
                          ? "bg-white text-[#071226] shadow-[0_8px_18px_rgba(7,18,38,0.08)]"
                          : "text-[#071226]/78 hover:bg-white/72 hover:text-[#071226]"
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

                    <div id={servicesMenuId}>
                      <MegaMenu
                        open={servicesOpen}
                        onClose={() => setServicesOpen(false)}
                      />
                    </div>
                  </div>

                  {navLinks.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      className={cn(
                        "relative whitespace-nowrap rounded-full px-3 py-2 text-[13px] font-bold tracking-[0.01em] transition duration-300 xl:px-3.5 xl:text-[13.5px]",
                        item.active
                          ? "bg-white text-[#071226] shadow-[0_8px_18px_rgba(7,18,38,0.08)]"
                          : "text-[#071226]/76 hover:bg-white/72 hover:text-[#071226]"
                      )}
                    >
                      <span>{item.title}</span>
                      {item.active ? (
                        <span className="absolute inset-x-4 -bottom-0.5 h-[2px] rounded-full bg-[#d92121]" />
                      ) : null}
                    </Link>
                  ))}
                </div>
              </nav>

              <Link
                href={quoteHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get a quote on WhatsApp from MoBiz.mu"
                className="group relative inline-flex shrink-0 items-center justify-self-end gap-1.5 overflow-hidden rounded-full border border-[#f8d75a]/55 bg-[linear-gradient(180deg,#ef4444_0%,#d92121_52%,#ac1117_100%)] px-4 py-2.5 text-[11.5px] font-black text-white shadow-[0_16px_34px_rgba(185,28,28,0.28),inset_0_1px_0_rgba(255,255,255,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(185,28,28,0.34),inset_0_1px_0_rgba(255,255,255,0.22)] xl:px-5 xl:text-[12px]"
              >
                <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.24)_0%,rgba(255,255,255,0.04)_45%,rgba(255,255,255,0.00)_100%)]" />
                <span className="relative z-10">Get A Quote</span>
                <ArrowRight className="relative z-10 h-3.5 w-3.5 text-[#ffd56b] transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
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

