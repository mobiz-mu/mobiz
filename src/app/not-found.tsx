import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { ButtonLink } from "@/components/ui/Button";

import "./not-found.css";

export const metadata: Metadata = {
  title: { absolute: "Page not found | MoBiz.mu" },
  robots: { index: false, follow: true },
};

/**
 * 404 — a single-viewport recovery screen.
 *
 * Reuses `SiteHeader` (and with it the existing mobile menu) rather than
 * building a second navigation: the header is `fixed`, so it costs no layout
 * height and the page can still be exactly one screen tall. There is
 * deliberately no footer — a footer is what would make this scroll.
 *
 * Server component, zero client JavaScript of its own. The decorative visual is
 * inline SVG animated with CSS transforms; the digits scale through `clamp()`
 * against `min(vw, vh)` rather than a measured ref, so there is no resize
 * listener and no hydration boundary.
 *
 * This also catches every unknown root URL, because `[cityServiceSlug]` sets
 * `dynamicParams = false`. An invalid SEO slug lands here rather than rendering
 * a plausible-looking page.
 */
export default function NotFound() {
  return (
    <>
      <SiteHeader />

      <main id="main-content" className="nf">
        <span aria-hidden className="nf__ambient" />

        {/*
          Decorative only. The accessible heading is the <h1> below — a screen
          reader should hear the sentence, not the digits.
        */}
        <span aria-hidden className="nf__digits">
          404
        </span>

        <div className="nf__stage">
          <span aria-hidden className="nf__portal" />

          {/*
            A Mobiz core with its orbit broken: two rings still turning, and one
            route that runs in from the edge and stops short of the centre. Same
            visual language as the homepage globe, deliberately much simpler.
          */}
          <svg
            aria-hidden
            className="nf__core"
            viewBox="0 0 240 240"
            fill="none"
            focusable="false"
          >
            <defs>
              <radialGradient id="nf-core" cx="38%" cy="32%" r="72%">
                <stop offset="0%" stopColor="#5c0f19" />
                <stop offset="58%" stopColor="#26070c" />
                <stop offset="100%" stopColor="#0a0305" />
              </radialGradient>
              <linearGradient id="nf-route" x1="0" y1="1" x2="1" y2="0">
                <stop offset="0%" stopColor="#ef2b33" stopOpacity="0" />
                <stop offset="55%" stopColor="#ef2b33" stopOpacity="0.75" />
                <stop offset="100%" stopColor="#ff6b74" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* outer ring + its nodes, turning slowly */}
            <g className="nf-spin-slow">
              <circle
                cx="120"
                cy="120"
                r="104"
                stroke="rgba(255,255,255,0.09)"
                strokeWidth="1"
                strokeDasharray="3 11"
              />
              <circle cx="224" cy="120" r="3.5" fill="#ef2b33" opacity="0.85" />
              <circle cx="120" cy="16" r="2.5" fill="rgba(255,255,255,0.35)" />
              <circle cx="47" cy="193" r="2.5" fill="rgba(255,255,255,0.22)" />
            </g>

            {/* inner ring, counter-turning so the two never sync */}
            <g className="nf-spin-rev">
              <circle
                cx="120"
                cy="120"
                r="74"
                stroke="rgba(226,40,52,0.28)"
                strokeWidth="1"
                strokeDasharray="6 10"
              />
              <circle cx="120" cy="46" r="3" fill="#ff6b74" opacity="0.8" />
              <circle cx="46" cy="120" r="2.2" fill="rgba(255,255,255,0.28)" />
            </g>

            {/* the severed route: comes in, then stops */}
            <path
              d="M6 214 L54 166 L84 166"
              stroke="url(#nf-route)"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
            <circle className="nf-pulse" cx="88" cy="166" r="3.2" fill="#ff6b74" />

            {/* core */}
            <circle cx="120" cy="120" r="42" fill="url(#nf-core)" />
            <circle
              cx="120"
              cy="120"
              r="42"
              stroke="rgba(255,106,116,0.5)"
              strokeWidth="1.25"
            />
            <circle
              cx="120"
              cy="120"
              r="42"
              stroke="rgba(255,106,116,0.14)"
              strokeWidth="10"
            />
          </svg>
        </div>

        <div className="nf__copy">
          <p className="nf__eyebrow">Route not found</p>

          <h1 className="nf__title">Oops — this page went off route.</h1>

          <p className="nf__lead">
            The page you&apos;re looking for may have moved, changed or no longer
            exists.
          </p>

          <div className="nf__actions">
            <ButtonLink href="/" size="lg">
              <ArrowLeft aria-hidden className="size-4 shrink-0" />
              Back to Home
            </ButtonLink>

            <ButtonLink
              href="/services"
              variant="secondary"
              size="lg"
              className="nf__actions--secondary"
            >
              Explore our solutions
              <ArrowRight aria-hidden className="size-4 shrink-0" />
            </ButtonLink>
          </div>
        </div>
      </main>
    </>
  );
}
