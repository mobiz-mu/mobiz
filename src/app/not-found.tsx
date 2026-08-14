import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { serviceDivisions } from "@/lib/navigation";
import { ACCENTS } from "@/lib/accents";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Page not found | MoBiz.mu" },
  robots: { index: false, follow: true },
};

/**
 * 404.
 *
 * Deliberately light — a broken orbit rendered as static SVG, no Data Highway,
 * no scroll animation. Someone who has hit a dead end needs a route out, not a
 * showcase.
 *
 * This also catches every unknown root URL, because `[cityServiceSlug]` sets
 * `dynamicParams = false`. An invalid SEO slug lands here rather than rendering
 * a plausible-looking page.
 */
export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="relative flex min-h-[80vh] items-center bg-ink-950">
        <span aria-hidden className="absolute inset-0 tech-grid" />
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2"
          style={{
            background: "radial-gradient(ellipse, rgba(192,24,34,0.16), transparent 70%)",
          }}
        />

        <Container className="relative py-20">
          <div className="mx-auto max-w-2xl text-center">
            {/* Broken orbit — the ring is dashed and one node has come loose. */}
            <svg
              viewBox="0 0 200 200"
              className="mx-auto mb-9 h-36 w-36"
              aria-hidden
              role="presentation"
            >
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
                strokeDasharray="10 14"
              />
              <circle
                cx="100"
                cy="100"
                r="46"
                fill="none"
                stroke="rgba(192,24,34,0.3)"
                strokeWidth="1"
                strokeDasharray="4 10"
              />
              <circle cx="170" cy="100" r="4" fill={ACCENTS.red.hex} />
              <circle cx="100" cy="30" r="3" fill="rgba(255,255,255,0.25)" />
              {/* the detached one */}
              <circle cx="46" cy="152" r="3.5" fill={ACCENTS.blue.hex} opacity="0.7" />
              <text
                x="100"
                y="108"
                textAnchor="middle"
                fill="rgba(255,255,255,0.9)"
                fontSize="30"
                fontWeight="700"
                fontFamily="var(--font-sans), sans-serif"
              >
                404
              </text>
            </svg>

            <h1 className="mb-5 text-[clamp(1.875rem,4vw,3rem)] font-bold leading-tight tracking-tight text-text-primary">
              This page has drifted out of orbit.
            </h1>
            <p className="mx-auto mb-9 max-w-lg text-base leading-relaxed text-text-secondary">
              The page you were looking for doesn&apos;t exist or has moved. Here is the
              way back.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink href="/" size="lg" withArrow>
                Back to home
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" size="lg" withArrow>
                Browse services
              </ButtonLink>
              <ButtonLink
                href={whatsappUrl("Hello Mobiz, I could not find what I was looking for on your website.")}
                variant="whatsapp"
                size="lg"
                external
              >
                <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
                Ask on WhatsApp
              </ButtonLink>
            </div>

            <ul className="mt-12 flex flex-wrap justify-center gap-2">
              {serviceDivisions.map((division) => (
                <li key={division.id}>
                  <Link
                    href={division.href}
                    className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-line px-4 py-2.5 text-xs font-medium text-text-body transition-colors hover:border-line-strong hover:text-text-primary"
                  >
                    <span
                      aria-hidden
                      className="size-1.5 shrink-0 rounded-full"
                      style={{ background: ACCENTS[division.accent].hex }}
                    />
                    {division.shortLabel}
                    <ArrowRight aria-hidden className="size-3 text-text-faint" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
