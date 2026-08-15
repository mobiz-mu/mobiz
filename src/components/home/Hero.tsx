import type { CSSProperties } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { OrbitScene } from "@/components/visual/OrbitScene";
import { TechBackground } from "@/components/visual/TechBackground";
import { HERO_ORBIT_ITEMS } from "@/lib/orbit-items";

import "@/components/visual/orbit-scene.css";

const HEADLINE = [
  { text: "BUILD", delay: "0s", brand: false },
  { text: "MARKET", delay: "0.055s", brand: true },
  { text: "MANAGE", delay: "0.11s", brand: false },
  { text: "GROW", delay: "0.165s", brand: true },
] as const;

const SERVICE_TAGS = [
  { label: "SOFTWARE", color: "#ef2b33" },
  { label: "WEBSITE", color: "#2563eb" },
  { label: "MARKETING", color: "#eab308" },
  { label: "ACCOUNTING", color: "#22c55e" },
  { label: "AI SOLUTIONS", color: "#ef2b33" },
] as const;

function MauritiusFlag() {
  return (
    <span className="hero-mu-flag" aria-hidden="true">
      <span className="hero-mu-flag__stripe hero-mu-flag__stripe--red" />
      <span className="hero-mu-flag__stripe hero-mu-flag__stripe--blue" />
      <span className="hero-mu-flag__stripe hero-mu-flag__stripe--yellow" />
      <span className="hero-mu-flag__stripe hero-mu-flag__stripe--green" />
    </span>
  );
}

function HeroCopy() {
  return (
    <div className="hero-copy mx-auto w-full max-w-[590px] lg:mx-0">
      {/* Mauritius identity — no pill/container */}
      <div className="hero-kicker">
        <MauritiusFlag />

        <span className="hero-kicker__text">
          Mauritius Business Solutions
        </span>

        <span aria-hidden className="hero-kicker__line" />
      </div>

      {/* Aggressive headline */}
      <h1
        className="hero-headline"
        aria-label="Build. Market. Manage. Grow."
      >
        {HEADLINE.map((line) => (
          <span key={line.text} className="hero-headline__row">
            <span
              className={[
                "hero-headline__word",
                line.brand
                  ? "hero-headline__word--brand"
                  : "hero-headline__word--light",
              ].join(" ")}
              style={
                {
                  "--hero-delay": line.delay,
                } as CSSProperties
              }
            >
              {line.text}
              <span aria-hidden className="hero-headline__dot">
                .
              </span>
            </span>
          </span>
        ))}
      </h1>

      {/* Reworked supporting copy */}
      <div className="hero-support">
        <p className="hero-support__lead">
          Build a stronger business presence. Reach more customers.
          Run your operations with smarter digital systems.
        </p>

        <p className="hero-support__body">
          Mobiz brings websites, digital marketing, accounting support,
          business software and AI automation into one connected ecosystem
          built for Mauritian businesses.
        </p>
      </div>

      {/* CTAs */}
      <div className="hero-actions">
        <ButtonLink href="/services" size="lg" withArrow>
          Explore our solutions
        </ButtonLink>

        <ButtonLink
          href="/contact"
          variant="secondary"
          size="lg"
          withArrow
        >
          Talk to Mobiz
        </ButtonLink>
      </div>

      {/* Service labels — NO cards / NO pills */}
      <ul
        className="hero-service-list"
        aria-label="Mobiz service areas"
      >
        {SERVICE_TAGS.map((tag, index) => (
          <li
            key={tag.label}
            className="hero-service-item"
            style={
              {
                "--service-color": tag.color,
                "--service-delay": `${0.42 + index * 0.055}s`,
              } as CSSProperties
            }
          >
            <span>{tag.label}</span>
            <span aria-hidden className="hero-service-item__line" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="hero-premium relative isolate overflow-hidden bg-ink-950"
    >
      <TechBackground variant="full" />

      {/* Stronger global cyber/data layer */}
      <div aria-hidden className="hero-data-field">
        <span className="hero-data-streak hero-data-streak--1" />
        <span className="hero-data-streak hero-data-streak--2" />
        <span className="hero-data-streak hero-data-streak--3" />
        <span className="hero-data-streak hero-data-streak--4" />
        <span className="hero-data-streak hero-data-streak--5" />
        <span className="hero-data-streak hero-data-streak--6" />
        <span className="hero-data-streak hero-data-streak--7" />
        <span className="hero-data-streak hero-data-streak--8" />
      </div>

      {/* Right-edge data highway */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[48%] lg:block"
      >
        <div className="absolute inset-0 bg-gradient-to-l from-brand/[0.10] via-brand/[0.025] to-transparent" />

        <div className="hero-data-lane hero-data-lane-1" />
        <div className="hero-data-lane hero-data-lane-2" />
        <div className="hero-data-lane hero-data-lane-3" />
        <div className="hero-data-lane hero-data-lane-4" />
        <div className="hero-data-lane hero-data-lane-5" />
        <div className="hero-data-lane hero-data-lane-6" />
      </div>

      {/* Red atmospheric centre glow */}
      <div
        aria-hidden
        className="hero-orbit-glow pointer-events-none absolute right-[-4%] top-[4%] hidden aspect-square w-[62vw] rounded-full lg:block"
      />

      <div className="relative pt-[68px]">
        <div
          className="
            flex min-h-[calc(100svh-68px)] flex-col
            lg:grid
            lg:grid-cols-[0.88fr_1.12fr]
          "
        >
          {/* LEFT */}
          <div
            className="
              relative z-20
              px-5 pb-8 pt-10
              sm:px-8 sm:pt-12
              lg:flex lg:flex-col lg:justify-center
              lg:px-8 lg:py-8
              xl:px-16
              2xl:px-[5vw]
            "
          >
            <div className="lg:-translate-y-5 xl:-translate-y-7">
              <HeroCopy />
            </div>
          </div>

          {/* RIGHT */}
          <div
            className="
              relative z-10
              flex min-h-[430px] items-center justify-center
              px-1 pb-10
              sm:min-h-[510px] sm:px-4
              md:min-h-[580px]
              lg:min-h-0 lg:px-0 lg:pb-0 lg:pr-4
              xl:pr-6
            "
          >
            <div
              className="
                enter-scale
                relative
                w-[min(620px,97vw)]
                sm:w-[min(650px,94vw)]
                lg:w-[min(720px,56vw)]
                xl:w-[min(760px,55vw)]
              "
              style={{ animationDelay: "0.25s" }}
            >
              <OrbitScene
                items={HERO_ORBIT_ITEMS}
                centreImage="/images/hero/orbit-lady.webp"
                centreAlt=""
                duration={38}
                compact
                animate
                eagerCentreImage
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom cinematic fade */}
      <div
        aria-hidden
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0 z-[9]
          h-20
          bg-gradient-to-t from-ink-950 to-transparent
          lg:h-28
        "
      />
    </section>
  );
}

export default Hero;