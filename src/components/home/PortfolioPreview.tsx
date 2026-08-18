"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Project = {
  image: string;
  name: string;
  description: string;
  href: string;
};

const PROJECTS: Project[] = [
  {
    image:
      "/images/portfolio/projects/Travel-Holiday-Mauritius.webp",
    name: "Travel Holiday Mauritius",
    description:
      "A modern tourism website designed to showcase Mauritius experiences, present services clearly and make trip enquiries simple for visitors.",
    href: "/portfolio/travel-holiday-mauritius",
  },
  {
    image:
      "/images/portfolio/projects/atelierdemea.webp",
    name: "Atelier de Méa",
    description:
      "A refined digital experience built around the brand’s creative identity, with an elegant presentation of its products, services and visual world.",
    href: "/portfolio/atelier-de-mea",
  },
  {
    image:
      "/images/portfolio/projects/bluewavesaas.webp",
    name: "BlueWave Technologies",
    description:
      "A modern technology website presenting digital services, software products and connected business solutions through a strong corporate experience.",
    href: "/portfolio",
  },
  {
    image:
      "/images/portfolio/projects/danandshi.webp",
    name: "Dan & Shi Pest Control Ltd",
    description:
      "A professional service website designed to explain pest-control solutions clearly, strengthen online visibility and make customer enquiries easier.",
    href: "/portfolio/dan-and-shi-pest-control-ltd",
  },
  {
    image:
      "/images/portfolio/projects/gpwccu.webp",
    name: "GPWCCU",
    description:
      "A structured digital platform focused on presenting the organisation, its services and essential information through a clear and accessible experience.",
    href: "/portfolio",
  },
  {
    image:
      "/images/portfolio/projects/heavenseedsacademy.webp",
    name: "Heaven's Seed School",
    description:
      "An education-focused website created to communicate the school’s identity, programmes and information to parents through a welcoming digital experience.",
    href: "/portfolio",
  },
  {
    image:
      "/images/portfolio/projects/himalay-rental-tours.webp",
    name: "Himalay Rental Tours",
    description:
      "A tourism and vehicle-rental website designed to showcase services, destinations and rental options for visitors exploring Mauritius.",
    href: "/portfolio/himalay-rental-tours",
  },
  {
    image:
      "/images/portfolio/projects/kscontracting.webp",
    name: "KS Contracting Ltd",
    description:
      "A professional digital project combining strong company presentation with structured tools designed around real business operations.",
    href: "/portfolio/ks-contracting-accounting-saas",
  },
  {
    image:
      "/images/portfolio/projects/moris-ai.webp",
    name: "Moris AI",
    description:
      "An AI-focused digital product built around practical automation, intelligent technology and accessible AI solutions for the Mauritius market.",
    href: "/portfolio",
  },
  {
    image:
      "/images/portfolio/projects/multiimaint.webp",
    name: "MultiiMaint Ltd",
    description:
      "A professional service website created to present maintenance solutions clearly and help customers discover and enquire about available services.",
    href: "/portfolio/multiimaint-ltd",
  },
  {
    image:
      "/images/portfolio/projects/rampotteryhub-com.webp",
    name: "Ram Pottery Hub",
    description:
      "A custom business-management platform supporting customers, invoices, stock, payments, reporting and the company’s day-to-day operational workflows.",
    href: "/portfolio/ram-pottery-hub-saas",
  },
  {
    image:
      "/images/portfolio/projects/rampottery-mu.webp",
    name: "Ram Pottery Ltd",
    description:
      "A modern e-commerce and business website created to showcase products online and give customers a better way to discover the Ram Pottery brand.",
    href: "/portfolio/ram-pottery-ecommerce",
  },
];

export function PortfolioPreview() {
  const count = PROJECTS.length;

  const frameRef =
    React.useRef<HTMLDivElement>(null);

  const cardRefs =
    React.useRef<(HTMLDivElement | null)[]>([]);

  const positionRef = React.useRef(0);
  const targetRef = React.useRef(0);
  const widthRef = React.useRef(0);

  const rafRef =
    React.useRef<number | null>(null);

  const dragRef = React.useRef<{
    id: number;
    x: number;
    position: number;
    velocity: number;
    time: number;
  } | null>(null);

  const [selected, setSelected] =
    React.useState(0);

  const indexAt = React.useCallback(
    (position: number) =>
      ((Math.round(position) % count) +
        count) %
      count,
    [count],
  );

  const paint = React.useCallback(() => {
    const cardWidth = widthRef.current;

    if (!cardWidth) return;

    const viewport = window.innerWidth;

    let gap = -0.1;
    let rotate = 38;
    let depth = 0.48;
    let falloff = 0.6;
    let fade = 0.11;

    if (viewport < 430) {
      gap = -0.32;
      rotate = 20;
      depth = 0.22;
      falloff = 0.7;
      fade = 0.22;
    } else if (viewport < 640) {
      gap = -0.28;
      rotate = 24;
      depth = 0.26;
      falloff = 0.67;
      fade = 0.18;
    } else if (viewport < 1024) {
      gap = -0.19;
      rotate = 30;
      depth = 0.36;
      falloff = 0.63;
      fade = 0.14;
    }

    const pitch = cardWidth * (1 + gap);
    const position = positionRef.current;

    cardRefs.current.forEach(
      (card, index) => {
        if (!card) return;

        let offset = index - position;

        offset =
          ((offset % count) + count) %
          count;

        if (offset > count / 2) {
          offset -= count;
        }

        const distance = Math.abs(offset);

        const ramp = Math.pow(
          distance,
          falloff,
        );

        const tilt =
          Math.min(
            rotate * ramp,
            70,
          ) * Math.sign(offset);

        const scale =
          distance < 0.2
            ? 1
            : Math.max(
                0.78,
                1 -
                  distance * 0.05,
              );

        card.style.transform =
          `translateX(calc(-50% + ${
            offset * pitch
          }px)) ` +
          `translateZ(${
            -depth *
            cardWidth *
            ramp
          }px) ` +
          `rotateY(${-tilt}deg) ` +
          `scale(${scale})`;

        const edge = Math.min(
          1,
          Math.max(
            0,
            count / 2 - distance,
          ),
        );

        card.style.opacity =
          String(
            Math.max(
              0,
              1 - fade * distance,
            ) * edge,
          );

        card.style.zIndex =
          String(
            100 -
              Math.round(distance),
          );

        card.dataset.active =
          distance < 0.5
            ? "true"
            : "false";
      },
    );
  }, [count]);

  const settle = React.useCallback(
    (target: number) => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(
          rafRef.current,
        );
      }

      targetRef.current = target;

      setSelected(
        indexAt(target),
      );

      const step = () => {
        const remaining =
          target -
          positionRef.current;

        if (
          Math.abs(remaining) <
          0.0004
        ) {
          positionRef.current =
            target;

          paint();

          rafRef.current = null;

          return;
        }

        positionRef.current +=
          remaining * 0.18;

        paint();

        rafRef.current =
          requestAnimationFrame(
            step,
          );
      };

      rafRef.current =
        requestAnimationFrame(step);
    },
    [indexAt, paint],
  );

  const goBy = React.useCallback(
    (amount: number) => {
      settle(
        Math.round(
          targetRef.current,
        ) + amount,
      );
    },
    [settle],
  );

  function onPointerDown(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    if (rafRef.current !== null) {
      cancelAnimationFrame(
        rafRef.current,
      );

      rafRef.current = null;
    }

    event.currentTarget.setPointerCapture(
      event.pointerId,
    );

    targetRef.current =
      positionRef.current;

    dragRef.current = {
      id: event.pointerId,
      x: event.clientX,
      position:
        positionRef.current,
      velocity: 0,
      time: performance.now(),
    };
  }

  function onPointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    const drag = dragRef.current;

    if (
      !drag ||
      drag.id !== event.pointerId
    ) {
      return;
    }

    const width = widthRef.current;

    if (!width) return;

    const viewport =
      window.innerWidth;

    const gap =
      viewport < 430
        ? -0.32
        : viewport < 640
          ? -0.28
          : viewport < 1024
            ? -0.19
            : -0.1;

    const pitch =
      width * (1 + gap);

    const now =
      performance.now();

    const previous =
      positionRef.current;

    positionRef.current =
      drag.position -
      (event.clientX -
        drag.x) /
        pitch;

    drag.velocity =
      ((positionRef.current -
        previous) /
        Math.max(
          now - drag.time,
          1,
        )) *
      1000;

    drag.time = now;

    const index =
      indexAt(
        positionRef.current,
      );

    if (index !== selected) {
      setSelected(index);
    }

    paint();
  }

  function endDrag(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    const drag = dragRef.current;

    if (
      !drag ||
      drag.id !== event.pointerId
    ) {
      return;
    }

    dragRef.current = null;

    const carried = Math.max(
      -1.7,
      Math.min(
        1.7,
        drag.velocity * 0.13,
      ),
    );

    settle(
      Math.round(
        positionRef.current +
          carried,
      ),
    );
  }

  React.useLayoutEffect(() => {
    const frame = frameRef.current;

    if (!frame) return;

    const measure = () => {
      const first =
        cardRefs.current[0];

      if (!first) return;

      widthRef.current =
        first.offsetWidth;

      paint();
    };

    measure();

    const observer =
      new ResizeObserver(measure);

    observer.observe(frame);

    return () =>
      observer.disconnect();
  }, [paint]);

  React.useEffect(
    () => () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(
          rafRef.current,
        );
      }
    },
    [],
  );

  const active =
    PROJECTS[selected]!;

  return (
    <section
      aria-labelledby="portfolio-heading"
      className="portfolio-showcase relative isolate overflow-hidden bg-[#F8F8F6]"
    >
      {/* BLACK TOP DIAGONAL */}
      <div
        aria-hidden
        className="portfolio-black-cut portfolio-black-cut--top"
      />

      <span
        aria-hidden
        className="portfolio-light-grid"
      />

      <div className="relative z-10 pb-8 pt-5 sm:pb-10 sm:pt-6 lg:pb-11 lg:pt-7">
        <h2
          id="portfolio-heading"
          className="sr-only"
        >
          Selected Mobiz projects
        </h2>

        {/* 3D COVERFLOW */}
        <div className="relative">
          <div
            ref={frameRef}
            tabIndex={0}
            role="region"
            aria-roledescription="carousel"
            aria-label="Selected Mobiz projects"
            onPointerDown={
              onPointerDown
            }
            onPointerMove={
              onPointerMove
            }
            onPointerUp={endDrag}
            onPointerCancel={
              endDrag
            }
            onKeyDown={(event) => {
              if (
                event.key ===
                "ArrowLeft"
              ) {
                event.preventDefault();
                goBy(-1);
              }

              if (
                event.key ===
                "ArrowRight"
              ) {
                event.preventDefault();
                goBy(1);
              }
            }}
            className="cursor-grab overflow-hidden outline-none focus-visible:ring-2 focus-visible:ring-brand active:cursor-grabbing"
            style={{
              perspective:
                "clamp(800px,75vw,1500px)",
              touchAction: "pan-y",
            }}
          >
            {/*
             * Major change:
             *
             * Much tighter track.
             * The bottom of the laptops now sits
             * close to the project caption.
             */}
            <div className="portfolio-coverflow-track relative mx-auto h-[285px] select-none min-[430px]:h-[315px] sm:h-[375px] md:h-[425px] lg:h-[475px] xl:h-[510px] 2xl:h-[535px]">
              {PROJECTS.map(
                (
                  project,
                  index,
                ) => (
                  <div
                    key={
                      project.image
                    }
                    ref={(node) => {
                      cardRefs.current[
                        index
                      ] = node;
                    }}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${
                      index + 1
                    } of ${count}: ${
                      project.name
                    }`}
                    className="portfolio-project absolute left-1/2 top-[46%] flex -translate-y-1/2 items-center justify-center will-change-transform"
                  >
                    <div className="relative size-full">
                      <Image
                        src={
                          project.image
                        }
                        alt={`${project.name} project preview`}
                        fill
                        quality={75}
                        draggable={
                          false
                        }
                        loading="lazy"
                        sizes="(max-width: 429px) 82vw, (max-width: 639px) 76vw, (max-width: 1023px) 60vw, (max-width: 1439px) 45vw, 610px"
                        className="portfolio-project-image select-none object-contain object-center"
                      />

                      {/*
                       * Glass reflection directly
                       * below every project laptop.
                       */}
                      <span
                        aria-hidden
                        className="portfolio-glass-shadow"
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous project"
            onClick={() =>
              goBy(-1)
            }
            className="portfolio-nav portfolio-nav--left"
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={() =>
              goBy(1)
            }
            className="portfolio-nav portfolio-nav--right"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        {/* PROJECT COPY */}
        <div
          key={selected}
          className="portfolio-caption mx-auto -mt-1 max-w-[700px] px-5 text-center sm:mt-0 sm:px-8"
        >
          <h3 className="text-[1.7rem] font-black leading-[1.02] tracking-[-0.04em] text-brand sm:text-3xl lg:text-[2.4rem]">
            {active.name}
          </h3>

          <p className="mx-auto mt-2.5 max-w-[620px] text-[13px] font-medium leading-6 text-[#5D5F65] sm:text-sm lg:text-[15px]">
            {active.description}
          </p>

          <Link
            href={active.href}
            className="group mt-3.5 inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-[12px] font-bold text-white shadow-[0_10px_26px_rgba(192,24,34,0.22)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#A3131C] hover:shadow-[0_14px_30px_rgba(192,24,34,0.30)]"
          >
            View project

            <ArrowUpRight
              aria-hidden
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>

      {/* BLACK BOTTOM DIAGONAL */}
      <div
        aria-hidden
        className="portfolio-black-cut portfolio-black-cut--bottom"
      />
    </section>
  );
}

export default PortfolioPreview;