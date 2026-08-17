import type { CSSProperties } from "react";
import { Boxes, MapPin, TrendingUp } from "lucide-react";

import { ButtonLink } from "@/components/ui/Button";
import { HeroStage } from "@/components/home/HeroStage";
import { TechBackground } from "@/components/visual/TechBackground";

const HEADLINE = [
  { text: "BUILD", delay: "0s", brand: false },
  { text: "MARKET", delay: "0.055s", brand: true },
  { text: "MANAGE", delay: "0.11s", brand: false },
  { text: "GROW", delay: "0.165s", brand: true },
] as const;

const HERO_PROOF = [
  { label: "All-in-one ecosystem", Icon: Boxes },
  { label: "Local expertise", Icon: MapPin },
  { label: "Results that grow", Icon: TrendingUp },
] as const;

const SERVICE_TAGS = [
  { label: "SOFTWARE", color: "#ef2b33" },
  { label: "WEBSITE", color: "#2563eb" },
  { label: "MARKETING", color: "#eab308" },
  { label: "ACCOUNTING", color: "#22c55e" },
  { label: "AI SOLUTIONS", color: "#ef2b33" },
] as const;

function HeroCopy() {
  return (
    <div className="hero-copy mx-auto w-full max-w-[560px] lg:mx-0">
      {/* Aggressive headline */}
      <h1
        className="hero-headline"
        aria-label="Build Market Manage Grow"
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
            </span>
          </span>
        ))}
      </h1>

      {/*
        One paragraph, not two. The previous lead/body split repeated the same
        idea twice; this states the offer once and keeps the strong opening
        clause carrying the emphasis.
      */}
      <div className="hero-support">
        <p className="hero-support__body">
          <strong className="hero-support__strong">
            Build a stronger business presence and reach more customers.
          </strong>{" "}
          Mobiz brings websites, digital marketing, accounting support, business
          software and AI automation into one connected ecosystem built for
          Mauritian businesses — helping you streamline operations, strengthen
          your brand and scale with confidence.
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
          className="hero-cta--secondary"
        >
          Talk to Mobiz
        </ButtonLink>
      </div>

      {/*
        Three positioning statements, not claims. Nothing here asserts a client
        count, a rating or a result — none of that is established anywhere in the
        source material.
      */}
      <ul className="hero-proof" aria-label="How Mobiz works">
        {HERO_PROOF.map((item, index) => (
          <li
            key={item.label}
            className="hero-proof__item"
            style={{ "--proof-delay": `${0.36 + index * 0.06}s` } as CSSProperties}
          >
            <item.Icon aria-hidden size={14} className="hero-proof__icon" />
            <span>{item.label}</span>
          </li>
        ))}
      </ul>

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
              <HeroStage />
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