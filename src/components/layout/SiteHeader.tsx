"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { ServicesMenu } from "./ServicesMenu";
import { MobileMenu } from "./MobileMenu";
import { mainNavLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/**
 * The single production header, used on every route.
 *
 * Layout is a three-part flex row — logo | nav | CTA — rather than an absolutely
 * centred nav, so the three groups can never overlap each other at an awkward
 * width. The desktop nav appears at `xl` (1280px); between 1024 and 1280 the
 * tablet gets the full-screen menu, which is a deliberate composition rather
 * than a cramped desktop bar.
 *
 * The bar is transparent over the hero and gains a blurred background once
 * scrolled, so it never sits as an opaque slab over the orbit composition.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "/";

  // Adjusting state during render (React's documented pattern) rather than in an
  // effect: a route change — including browser back/forward — dismisses the
  // mobile menu without an extra commit.
  const [menuPath, setMenuPath] = useState(pathname);
  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300",
          scrolled
            ? "border-b border-line bg-ink-950/92 shadow-[0_1px_40px_rgba(0,0,0,0.6)] backdrop-blur-xl backdrop-saturate-150"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[68px] max-w-[1320px] items-center gap-4 px-5 sm:px-8 lg:px-16">
          <Logo priority />

          <nav
            aria-label="Primary"
            className="hidden flex-1 items-center justify-center gap-1 xl:flex"
          >
            <ServicesMenu activePath={pathname} />
            {mainNavLinks.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex min-h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors duration-200",
                    active
                      ? "text-brand-mid"
                      : "text-text-secondary hover:text-text-primary",
                  )}
                >
                  {link.title}
                </Link>
              );
            })}
          </nav>

          <div className="ml-auto flex items-center gap-3 xl:ml-0">
            <Link
              href="/contact"
              className="hidden min-h-11 items-center gap-2 rounded-xl bg-linear-[135deg,var(--color-brand),var(--color-brand-deep)] px-5 py-2.5 text-sm font-semibold text-white shadow-cta transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-cta-hover sm:flex"
            >
              Talk to Mobiz
              <ArrowRight aria-hidden className="size-3.5" />
            </Link>

            <button
              type="button"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-xl xl:hidden"
            >
              <span
                aria-hidden
                className={cn(
                  "block h-px w-5 origin-center rounded-full bg-white transition-transform duration-200",
                  menuOpen && "translate-y-[6px] rotate-45",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "block h-px w-5 rounded-full bg-white transition-opacity duration-200",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                aria-hidden
                className={cn(
                  "block h-px w-5 origin-center rounded-full bg-white transition-transform duration-200",
                  menuOpen && "-translate-y-[6px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activePath={pathname}
      />
    </>
  );
}

export default SiteHeader;
