import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { ACCENTS } from "@/lib/accents";
import { SERVICES, ServiceIcon3D, TopWave, BottomWave } from "./services-tabs-shared";

/**
 * Server-rendered resting state of `ServicesTabs`.
 *
 * Shows the section exactly as it looks with the first service selected and
 * no interaction yet — real heading, real tab labels, the full first panel
 * (icon, description, tags, checklist, CTA, image). `ServicesTabsIsland`
 * swaps this for the fully interactive `ServicesTabs` once the section is
 * near the viewport; until then, a visitor (or a crawler) sees the complete
 * first division, not a placeholder.
 *
 * The tab buttons are rendered but inert (no `onClick`) — clicking one before
 * hydration does nothing, same as any not-yet-hydrated control on any site,
 * and is what lets the rest of the section ship with zero client JS up front.
 */
export function ServicesTabsPoster() {
  const active = SERVICES[0]!;
  const accent = ACCENTS[active.accent];

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="services-white-break relative isolate bg-[#F8F8F6]"
    >
      <TopWave />
      <BottomWave />

      <span aria-hidden className="services-white-grid" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-8 sm:py-18 lg:px-12 lg:py-22 xl:px-16">
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
            style={{ fontSize: "clamp(2.45rem,5vw,4.8rem)" }}
          >
            Everything your business needs,
            <br className="hidden sm:block" />{" "}
            <span className="text-brand">connected through Mobiz.</span>
          </h2>

          <p className="mt-5 max-w-[690px] text-[15px] font-medium leading-7 text-[#5F6168] sm:text-base">
            From getting your business online and found, to managing your
            finances, stock and daily operations — Mobiz brings the essential
            systems together in one connected business ecosystem.
          </p>
        </div>

        {/* Inert tab strip — real labels, real markup, no handlers yet. */}
        <div
          role="tablist"
          aria-label="Mobiz business solutions"
          className="services-tabs-scroll mb-9 flex gap-2 overflow-x-auto pb-2 lg:mb-12"
        >
          {SERVICES.map((service, i) => {
            const selected = i === 0;
            const color = ACCENTS[service.accent];

            return (
              <span
                key={service.id}
                id={`svc-tab-${service.id}`}
                role="tab"
                tabIndex={selected ? 0 : -1}
                aria-selected={selected}
                aria-controls={`svc-panel-${service.id}`}
                className="group relative flex min-h-12 shrink-0 items-center gap-2.5 overflow-hidden rounded-xl border px-4 py-2.5 text-sm font-bold"
                style={
                  selected
                    ? {
                        borderColor: "transparent",
                        color: "#fff",
                        boxShadow: "0 12px 28px rgba(0,0,0,0.13)",
                        background: `linear-gradient(135deg, ${color.hex}, ${color.hex}D8)`,
                      }
                    : {
                        borderColor: "rgba(0,0,0,0.09)",
                        background: "rgba(255,255,255,0.6)",
                        color: "#505158",
                      }
                }
              >
                <span
                  className="font-mono text-[9px] font-black"
                  style={{ color: selected ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.3)" }}
                >
                  {service.num}
                </span>
                {service.shortLabel}
              </span>
            );
          })}
        </div>

        <div
          id={`svc-panel-${active.id}`}
          role="tabpanel"
          aria-labelledby={`svc-tab-${active.id}`}
          className="relative"
        >
          <div className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14 xl:gap-20">
            <div className="flex min-h-[470px] flex-col justify-center lg:min-h-[560px]">
              <div className="mb-7 flex items-center gap-4">
                <ServiceIcon3D Icon={active.icon} accent={active.accent} />
                <div>
                  <p
                    className="font-mono text-[9px] font-black uppercase tracking-[0.18em]"
                    style={{ color: accent.hex }}
                  >
                    Mobiz solution {active.num}
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
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-black/[0.08] bg-black/[0.025] px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.1em] text-black/55"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <ul className="mb-9 grid gap-3 sm:grid-cols-2">
                {active.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full"
                      style={{ color: accent.hex, background: `${accent.hex}12` }}
                    >
                      <Check className="size-3" />
                    </span>
                    <span className="text-sm font-semibold leading-6 text-[#34353A]">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={active.href}
                className="group inline-flex min-h-12 w-fit items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(0,0,0,0.13)] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(0,0,0,0.16)]"
                style={{ background: `linear-gradient(135deg, ${accent.hex}, ${accent.hex}D8)` }}
              >
                Explore {active.shortLabel}
                <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="service-visual-enter relative flex min-h-[470px] items-center justify-center lg:min-h-[560px]">
              <span
                aria-hidden
                className="service-image-ambient"
                style={{ "--service-image-accent": accent.hex } as React.CSSProperties}
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
                <span aria-hidden className="pointer-events-none absolute inset-0 rounded-[30px] ring-1 ring-black/[0.07]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesTabsPoster;
