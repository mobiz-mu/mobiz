"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

import { Logo } from "./Logo";
import { ServicesMenu } from "./ServicesMenu";
import { MobileMenu } from "./MobileMenu";
import { HoverPrefetchLink } from "@/components/ui/HoverPrefetchLink";
import { mainNavLinks } from "@/lib/navigation";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname() ?? "/";

  const [menuPath, setMenuPath] = useState(pathname);

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <a
        href="#main-content"
        className="
          sr-only
          rounded-lg
          bg-brand
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          focus:not-sr-only
          focus:fixed
          focus:left-4
          focus:top-4
          focus:z-[100]
        "
      >
        Skip to main content
      </a>

      <header
        role="banner"
        className={cn(
          `
          fixed
          inset-x-0
          top-0
          z-50
          w-full

          border-b

          transition-[background-color,border-color,box-shadow,backdrop-filter]
          duration-300
          `,
          scrolled
            ? `
              border-white/[0.08]
              bg-[#050505]/92
              shadow-[0_12px_50px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
              backdrop-saturate-150
            `
            : `
              border-transparent
              bg-transparent
            `,
        )}
      >
        {/* FULL-WIDTH ADAPTIVE HEADER */}
        <div
          className="
            flex
            h-[68px]
            w-full
            items-center

            gap-3

            px-4

            sm:px-6

            md:px-8

            lg:px-10

            xl:px-14

            2xl:px-[5vw]
          "
        >
          {/* LOGO */}
          <div className="flex shrink-0 items-center">
            <Logo priority />
          </div>

          {/* DESKTOP NAV */}
          <nav
            aria-label="Primary"
            className="
              hidden
              min-w-0
              flex-1
              items-center
              justify-center

              gap-0.5

              xl:flex

              2xl:gap-1
            "
          >
            <ServicesMenu activePath={pathname} />

            {mainNavLinks.map((link) => {
              const active =
                pathname === link.href ||
                pathname.startsWith(`${link.href}/`);

              return (
                <HoverPrefetchLink
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    `
                    relative
                    flex
                    min-h-11
                    items-center

                    rounded-lg

                    px-2.5

                    text-[13px]
                    font-semibold

                    transition-colors
                    duration-200

                    2xl:px-3.5
                    2xl:text-sm
                    `,
                    active
                      ? "text-white"
                      : "text-white/[0.78] hover:text-white",
                  )}
                >
                  {link.title}

                  {active ? (
                    <span
                      aria-hidden
                      className="
                        absolute
                        inset-x-3
                        -bottom-[1px]
                        h-px

                        bg-gradient-to-r
                        from-transparent
                        via-brand
                        to-transparent

                        shadow-[0_0_8px_rgba(192,24,34,0.75)]
                      "
                    />
                  ) : null}
                </HoverPrefetchLink>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div
            className="
              ml-auto
              flex
              shrink-0
              items-center

              gap-2

              xl:ml-0

              2xl:gap-3
            "
          >
            <HoverPrefetchLink
              href="/contact"
              className="
                group

                hidden

                min-h-11
                items-center

                gap-2

                rounded-xl

                bg-linear-[135deg,var(--color-brand),var(--color-brand-deep)]

                px-4
                py-2.5

                text-[13px]
                font-semibold
                text-white

                shadow-cta

                transition-[transform,box-shadow]
                duration-200

                hover:-translate-y-0.5
                hover:shadow-cta-hover

                sm:flex

                lg:px-5

                2xl:px-6
                2xl:text-sm
              "
            >
              <span className="whitespace-nowrap">
                Talk to Mobiz
              </span>

              <ArrowRight
                aria-hidden
                className="
                  size-3.5
                  transition-transform
                  duration-200

                  group-hover:translate-x-0.5
                "
              />
            </HoverPrefetchLink>

            {/* TABLET / MOBILE MENU */}
            <button
              type="button"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              onClick={() => {
                setMenuOpen((open) => !open);
              }}
              className="
                flex
                size-11
                shrink-0
                flex-col
                items-center
                justify-center

                gap-[5px]

                rounded-xl

                border
                border-white/[0.08]

                bg-white/[0.025]

                transition-colors

                hover:bg-white/[0.06]

                xl:hidden
              "
            >
              <span
                aria-hidden
                className={cn(
                  `
                  block
                  h-px
                  w-5

                  origin-center

                  rounded-full
                  bg-white

                  transition-transform
                  duration-200
                  `,
                  menuOpen &&
                    "translate-y-[6px] rotate-45",
                )}
              />

              <span
                aria-hidden
                className={cn(
                  `
                  block
                  h-px
                  w-5

                  rounded-full
                  bg-white

                  transition-opacity
                  duration-200
                  `,
                  menuOpen && "opacity-0",
                )}
              />

              <span
                aria-hidden
                className={cn(
                  `
                  block
                  h-px
                  w-5

                  origin-center

                  rounded-full
                  bg-white

                  transition-transform
                  duration-200
                  `,
                  menuOpen &&
                    "-translate-y-[6px] -rotate-45",
                )}
              />
            </button>
          </div>
        </div>

        {/* subtle red tech scan */}
        <div
          aria-hidden
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            h-px
            overflow-hidden
          "
        >
          <span className="header-scan-line" />
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