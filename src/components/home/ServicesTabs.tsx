"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

import { ACCENTS } from "@/lib/accents";
import { cn } from "@/lib/utils";
import { SERVICES, ServiceIcon3D, TopWave, BottomWave } from "./services-tabs-shared";

/* -------------------------------------------------------------------------- */
/* SERVICES TABS                                                              */
/* -------------------------------------------------------------------------- */

export function ServicesTabs() {
  const [activeId, setActiveId] =
    useState(SERVICES[0]!.id);

  const active =
    SERVICES.find(
      (service) =>
        service.id === activeId,
    ) ?? SERVICES[0]!;

  const accent =
    ACCENTS[active.accent];

  function onTabKeyDown(
    event: React.KeyboardEvent,
  ) {
    const index =
      SERVICES.findIndex(
        (service) =>
          service.id === activeId,
      );

    let next = index;

    if (event.key === "ArrowRight") {
      next =
        (index + 1) %
        SERVICES.length;
    } else if (
      event.key === "ArrowLeft"
    ) {
      next =
        (index -
          1 +
          SERVICES.length) %
        SERVICES.length;
    } else if (
      event.key === "Home"
    ) {
      next = 0;
    } else if (
      event.key === "End"
    ) {
      next =
        SERVICES.length - 1;
    } else {
      return;
    }

    event.preventDefault();

    const target =
      SERVICES[next]!;

    setActiveId(target.id);

    document
      .getElementById(
        `svc-tab-${target.id}`,
      )
      ?.focus();
  }

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="services-white-break relative isolate bg-[#F8F8F6]"
    >
      <TopWave />
      <BottomWave />

      {/* very subtle texture only — NO section container */}
      <span
        aria-hidden
        className="services-white-grid"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-22 xl:px-16">
        {/* HEADER */}
        <div className="mb-9 max-w-[950px] sm:mb-11 lg:mb-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-brand" />

            <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-brand">
              Six business solutions
            </p>
          </div>

          <h2
            id="services-heading"
            className="font-black leading-[0.94] tracking-[-0.045em] text-[#08090B]"
            style={{
              fontSize:
                "clamp(2.45rem,5vw,4.8rem)",
            }}
          >
            Everything your business needs,
            <br className="hidden sm:block" />{" "}
            <span className="text-brand">
              connected through Mobiz.
            </span>
          </h2>

          <p className="mt-5 max-w-[690px] text-[15px] font-medium leading-7 text-[#5F6168] sm:text-base">
            From getting your business
            online and found, to managing
            your finances, stock and daily
            operations — Mobiz brings the
            essential systems together in
            one connected business
            ecosystem.
          </p>
        </div>

        {/* TABS */}
        <div
          role="tablist"
          aria-label="Mobiz business solutions"
          onKeyDown={onTabKeyDown}
          className="services-tabs-scroll mb-9 flex gap-2 overflow-x-auto pb-2 lg:mb-12"
        >
          {SERVICES.map((service) => {
            const selected =
              service.id === activeId;

            const color =
              ACCENTS[service.accent];

            return (
              <button
                key={service.id}
                id={`svc-tab-${service.id}`}
                role="tab"
                type="button"
                tabIndex={
                  selected ? 0 : -1
                }
                aria-selected={selected}
                aria-controls={`svc-panel-${service.id}`}
                onClick={() =>
                  setActiveId(service.id)
                }
                className={cn(
                  "group relative flex min-h-12 shrink-0 items-center gap-2.5 overflow-hidden rounded-xl border px-4 py-2.5 text-sm font-bold transition-[transform,border-color,color,background-color,box-shadow] duration-300",
                  selected
                    ? "border-transparent text-white shadow-[0_12px_28px_rgba(0,0,0,0.13)]"
                    : "border-black/[0.09] bg-white/60 text-[#505158] hover:-translate-y-0.5 hover:border-black/20 hover:bg-white hover:text-black",
                )}
                style={
                  selected
                    ? {
                        background: `linear-gradient(135deg, ${color.hex}, ${color.hex}D8)`,
                      }
                    : undefined
                }
              >
                <span
                  className={cn(
                    "font-mono text-[9px] font-black",
                    selected
                      ? "text-white/70"
                      : "text-black/30",
                  )}
                >
                  {service.num}
                </span>

                {service.shortLabel}
              </button>
            );
          })}
        </div>

        {/* ACTIVE SERVICE — NO OUTER CARD */}
        <div
          id={`svc-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`svc-tab-${active.id}`}
          className="relative"
        >
          <div
            key={active.id}
            className="service-tab-enter grid items-center gap-9 lg:grid-cols-2 lg:gap-14 xl:gap-20"
          >
            {/* LEFT — EXACTLY HALF */}
            <div className="flex min-h-[470px] flex-col justify-center lg:min-h-[560px]">
              <div className="mb-7 flex items-center gap-4">
                <ServiceIcon3D
                  Icon={active.icon}
                  accent={active.accent}
                />

                <div>
                  <p
                    className="font-mono text-[9px] font-black uppercase tracking-[0.18em]"
                    style={{
                      color:
                        accent.hex,
                    }}
                  >
                    Mobiz solution{" "}
                    {active.num}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-black/40">
                    Built for Mauritius
                  </p>
                </div>
              </div>

              <h3 className="mb-5 max-w-[620px] text-3xl font-black leading-[1.02] tracking-[-0.04em] text-[#090A0C] sm:text-4xl lg:text-[2.8rem] xl:text-[3.2rem]">
                {active.label}
              </h3>

              <p className="mb-7 max-w-[590px] text-[15px] font-medium leading-7 text-[#5D5F66] sm:text-base">
                {active.description}
              </p>

              <div className="mb-7 flex flex-wrap gap-2">
                {active.tags.map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-black/[0.08] bg-black/[0.025] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-black/55"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>

              <ul className="mb-9 grid gap-3 sm:grid-cols-2">
                {active.highlights.map(
                  (highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3"
                    >
                      <span
                        aria-hidden
                        className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                        style={{
                          color:
                            accent.hex,
                          background: `${accent.hex}12`,
                        }}
                      >
                        <Check className="size-3" />
                      </span>

                      <span className="text-sm font-semibold leading-6 text-[#34353A]">
                        {highlight}
                      </span>
                    </li>
                  ),
                )}
              </ul>

              <Link
                href={active.href}
                className="group inline-flex min-h-12 w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(0,0,0,0.13)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.16)]"
                style={{
                  background: `linear-gradient(135deg, ${accent.hex}, ${accent.hex}D8)`,
                }}
              >
                Explore{" "}
                {active.shortLabel}

                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* RIGHT — EXACTLY HALF */}
            <div className="service-visual-enter relative flex min-h-[470px] items-center justify-center lg:min-h-[560px]">
              {/* ambient shadow only, not container */}
              <span
                aria-hidden
                className="service-image-ambient"
                style={
                  {
                    "--service-image-accent":
                      accent.hex,
                  } as React.CSSProperties
                }
              />

              <div className="service-image-shell relative w-full max-w-[590px]">
                <Image
                  src={active.image}
                  alt={active.imageAlt}
                  width={938}
                  height={938}
                  quality={75}
                  loading="lazy"
                  sizes="(max-width: 1023px) 92vw, (max-width: 1439px) 46vw, 590px"
                  className="service-tab-image block aspect-square h-auto w-full rounded-[30px] object-contain"
                />

                {/* very subtle premium edge */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-black/[0.07]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesTabs;