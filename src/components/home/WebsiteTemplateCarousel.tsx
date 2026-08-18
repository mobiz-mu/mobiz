"use client";

import * as React from "react";
import Image from "next/image";

/* -------------------------------------------------------------------------- */
/* TYPES                                                                      */
/* -------------------------------------------------------------------------- */

type TemplateSlide = {
  image: string;
  alt: string;
  width: number;
  height: number;
};

interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

/* -------------------------------------------------------------------------- */
/* TEMPLATE DATA                                                              */
/* -------------------------------------------------------------------------- */

/*
 * IMPORTANT:
 *
 * We deliberately DO NOT use `fill` or a forced CSS aspect ratio.
 *
 * Every image keeps its own natural width/height ratio.
 *
 * The values below are used by Next/Image to calculate the intrinsic
 * aspect ratio. If all of your optimized WebP files are 736x1034,
 * these values are already correct.
 *
 * If some source files have different dimensions, replace width/height
 * for those individual entries with their real dimensions.
 */

const slides: TemplateSlide[] = [
  {
    image: "/images/galleries/mobiz-template1.webp",
    alt: "Mobiz website design template 1",
    width: 1000,
    height: 1333,
  },
  {
    image: "/images/galleries/mobiz-template2.webp",
    alt: "Mobiz website design template 2",
    width: 960,
    height: 1440,
  },
  {
    image: "/images/galleries/mobiz-template3.webp",
    alt: "Mobiz website design template 3",
    width: 736,
    height: 1307,
  },
  {
    image: "/images/galleries/mobiz-template4.webp",
    alt: "Mobiz website design template 4",
    width: 736,
    height: 1307,
  },
  {
    image: "/images/galleries/mobiz-template5.webp",
    alt: "Mobiz website design template 5",
    width: 600,
    height: 900,
  },
  {
    image: "/images/galleries/mobiz-template6.webp",
    alt: "Mobiz website design template 6",
    width: 1000,
    height: 1500,
  },
  {
    image: "/images/galleries/mobiz-template7.webp",
    alt: "Mobiz website design template 7",
    width: 736,
    height: 1317,
  },
  {
    image: "/images/galleries/mobiz-template8.webp",
    alt: "Mobiz website design template 8",
    width: 735,
    height: 1059,
  },
  {
    image: "/images/galleries/mobiz-template9.webp",
    alt: "Mobiz website design template 9",
    width: 832,
    height: 1472,
  },
  {
    image: "/images/galleries/mobiz-template10.webp",
    alt: "Mobiz website design template 10",
    width: 877,
    height: 1559,
  },
  {
    image: "/images/galleries/mobiz-template11.webp",
    alt: "Mobiz website design template 11",
    width: 736,
    height: 1104,
  },
  {
    image: "/images/galleries/mobiz-template12.webp",
    alt: "Mobiz website design template 12",
    width: 736,
    height: 1104,
  },
  {
    image: "/images/galleries/mobiz-template13.webp",
    alt: "Mobiz website design template 13",
    width: 736,
    height: 1104,
  },
  {
    image: "/images/galleries/mobiz-template14.webp",
    alt: "Mobiz website design template 14",
    width: 736,
    height: 1308,
  },
  {
    image: "/images/galleries/mobiz-template15.webp",
    alt: "Mobiz website design template 15",
    width: 736,
    height: 1308,
  },
  {
    image: "/images/galleries/mobiz-template16.webp",
    alt: "Mobiz website design template 16",
    width: 736,
    height: 1104,
  },
  {
    image: "/images/galleries/mobiz-template17.webp",
    alt: "Mobiz website design template 17",
    width: 736,
    height: 1104,
  },
  {
    image: "/images/galleries/mobiz-template18.webp",
    alt: "Mobiz website design template 18",
    width: 1000,
    height: 1700,
  },
  {
    image: "/images/galleries/mobiz-template19.webp",
    alt: "Mobiz website design template 19",
    width: 1000,
    height: 1973,
  },
  {
    image: "/images/galleries/mobiz-template20.webp",
    alt: "Mobiz website design template 20",
    width: 735,
    height: 1096,
  },
  {
    image: "/images/galleries/mobiz-template21.webp",
    alt: "Mobiz website design template 21",
    width: 736,
    height: 1472,
  },
  {
    image: "/images/galleries/mobiz-template22.webp",
    alt: "Mobiz website design template 22",
    width: 736,
    height: 1104,
  },
  {
    image: "/images/galleries/mobiz-template23.webp",
    alt: "Mobiz website design template 23",
    width: 1000,
    height: 1700,
  },
];


/* -------------------------------------------------------------------------- */
/* RESPONSIVE CAROUSEL CONFIGURATION                                          */
/* -------------------------------------------------------------------------- */

function getCarouselConfig(width: number): CarouselConfig {
  if (width < 390) {
    return {
      distanceDivisor: 90,
      velocityDivisor: 560,
      sensitivity: 145,
      xMultiplier: 72,
      yMultiplier: 12,
      rotationMultiplier: 4.5,
      scaleReduction: 0.05,
    };
  }

  if (width < 640) {
    return {
      distanceDivisor: 110,
      velocityDivisor: 620,
      sensitivity: 165,
      xMultiplier: 94,
      yMultiplier: 16,
      rotationMultiplier: 5.5,
      scaleReduction: 0.055,
    };
  }

  if (width < 1024) {
    return {
      distanceDivisor: 150,
      velocityDivisor: 720,
      sensitivity: 205,
      xMultiplier: 145,
      yMultiplier: 24,
      rotationMultiplier: 7,
      scaleReduction: 0.068,
    };
  }

  if (width < 1440) {
    return {
      distanceDivisor: 185,
      velocityDivisor: 820,
      sensitivity: 235,
      xMultiplier: 190,
      yMultiplier: 30,
      rotationMultiplier: 8.5,
      scaleReduction: 0.08,
    };
  }

  return {
    distanceDivisor: 200,
    velocityDivisor: 900,
    sensitivity: 250,
    xMultiplier: 220,
    yMultiplier: 34,
    rotationMultiplier: 9,
    scaleReduction: 0.085,
  };
}

/* -------------------------------------------------------------------------- */
/* GEOMETRY                                                                   */
/* -------------------------------------------------------------------------- */

/*
 * The coverflow used to be driven by `motion`: a MotionValue for progress and
 * six `useTransform` derivations per slide. That worked, but it made the
 * animation library the single largest script on the homepage — larger than
 * react-dom — for one component that sits a scroll below the fold.
 *
 * The geometry below is the same arithmetic, extracted into a pure function.
 * A card transform depends only on its distance from the current progress, so
 * one rAF pass can write all of them directly: no library, no React state, and
 * no re-render while dragging.
 */

const OPACITY_STOPS = [
  0, 0.05, 0.28, 0.68, 1, 0.68, 0.28, 0.05,
  0,
] as const;

/* Piecewise-linear, matching the motion keyframe map over [-4 .. 4]. */
function opacityFor(offset: number): number {
  const t =
    Math.min(4, Math.max(-4, offset)) + 4;

  const i = Math.min(7, Math.floor(t));

  const a = OPACITY_STOPS[i] ?? 0;
  const b = OPACITY_STOPS[i + 1] ?? 0;

  return a + (b - a) * (t - i);
}

type CardTransform = {
  transform: string;
  opacity: number;
  zIndex: number;
};

function transformFor(
  index: number,
  progress: number,
  total: number,
  config: CarouselConfig,
): CardTransform {
  let diff = (index - progress) % total;

  if (diff > total / 2) {
    diff -= total;
  }

  if (diff < -total / 2) {
    diff += total;
  }

  const distance = Math.abs(diff);

  const x = diff * config.xMultiplier;
  const y = distance * config.yMultiplier;

  const rotate =
    distance < 0.05
      ? 0
      : diff * config.rotationMultiplier;

  const scale = Math.max(
    0.68,
    1 - distance * config.scaleReduction,
  );

  /*
   * Same component order motion emitted — translate, scale, rotate — so the
   * composited result is identical rather than merely similar.
   */
  return {
    transform:
      `translateX(${x.toFixed(2)}px) translateY(${y.toFixed(2)}px)` +
      ` scale(${scale.toFixed(4)}) rotate(${rotate.toFixed(3)}deg)`,
    opacity: opacityFor(diff),
    zIndex: Math.round(100 - distance * 10),
  };
}

/* -------------------------------------------------------------------------- */
/* CARD                                                                       */
/* -------------------------------------------------------------------------- */

function TemplateCard({
  slide,
  initial,
  register,
}: {
  slide: TemplateSlide;
  initial: CardTransform;
  register: (node: HTMLElement | null) => void;
}) {
  return (
    <figure
      ref={register}
      style={initial}
      className="pointer-events-none absolute flex w-auto items-center justify-center overflow-hidden rounded-[18px] border border-white/[0.10] bg-[#0b0b0d] shadow-[0_30px_100px_rgba(0,0,0,0.72)]"
    >
      <Image
        src={slide.image}
        alt={slide.alt}
        width={slide.width}
        height={slide.height}
        quality={75}
        loading="lazy"
        sizes="(max-width: 389px) 52vw, (max-width: 639px) 48vw, (max-width: 1023px) 310px, (max-width: 1439px) 340px, 380px"
        className="block h-auto w-[52vw] max-w-[230px] object-contain sm:w-[48vw] sm:max-w-[280px] md:w-[310px] md:max-w-[310px] lg:w-[340px] lg:max-w-[340px] xl:w-[360px] xl:max-w-[360px] 2xl:w-[380px] 2xl:max-w-[380px]"
      />

      {/* Soft glass highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/[0.055] via-transparent to-black/[0.08]"
      />

      {/* Mobiz red upper edge */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/90 to-transparent"
      />

      {/* Very subtle bottom depth */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[12%] bg-linear-to-t from-black/20 to-transparent"
      />
    </figure>
  );
}

/* -------------------------------------------------------------------------- */
/* CAROUSEL                                                                   */
/* -------------------------------------------------------------------------- */

/* The spring the snap used to run: stiffness 190, damping 28, mass 0.9. */
const SPRING_STIFFNESS = 190;
const SPRING_DAMPING = 28;
const SPRING_MASS = 0.9;

/* A fixed integration step keeps the spring stable at any frame rate. */
const SPRING_STEP = 1 / 120;

/* The width the server renders at, before the real breakpoint is known. */
const SSR_CONFIG = getCarouselConfig(1280);

const useIsomorphicLayoutEffect =
  typeof window === "undefined"
    ? React.useEffect
    : React.useLayoutEffect;

export function WebsiteTemplateCarousel() {
  const total = slides.length;

  const cardsRef = React.useRef<
    (HTMLElement | null)[]
  >([]);

  const progressRef = React.useRef(0);
  const configRef = React.useRef(SSR_CONFIG);

  const frameRef = React.useRef(0);
  const springRef = React.useRef(0);

  const paint = React.useCallback(() => {
    const progress = progressRef.current;
    const config = configRef.current;

    for (
      let i = 0;
      i < cardsRef.current.length;
      i += 1
    ) {
      const node = cardsRef.current[i];

      if (!node) {
        continue;
      }

      const next = transformFor(
        i,
        progress,
        total,
        config,
      );

      node.style.transform = next.transform;
      node.style.opacity = String(next.opacity);
      node.style.zIndex = String(next.zIndex);
    }
  }, [total]);

  /* Coalesce every pointer move within a frame into a single write. */
  const schedule = React.useCallback(() => {
    if (frameRef.current) {
      return;
    }

    frameRef.current =
      window.requestAnimationFrame(() => {
        frameRef.current = 0;
        paint();
      });
  }, [paint]);

  /*
   * The markup ships with the 1280 geometry, so the real breakpoint has to be
   * applied before the browser paints, or the first frame shows desktop
   * spacing on a phone.
   */
  useIsomorphicLayoutEffect(() => {
    const applyWidth = () => {
      configRef.current = getCarouselConfig(
        window.innerWidth,
      );

      paint();
    };

    applyWidth();

    window.addEventListener(
      "resize",
      applyWidth,
      { passive: true },
    );

    return () => {
      window.removeEventListener(
        "resize",
        applyWidth,
      );

      if (frameRef.current) {
        window.cancelAnimationFrame(
          frameRef.current,
        );

        frameRef.current = 0;
      }
    };
  }, [paint]);

  /* ---------------------------------------------------------------------- */
  /* SNAP                                                                   */
  /* ---------------------------------------------------------------------- */

  const stopSpring = React.useCallback(() => {
    if (springRef.current) {
      window.cancelAnimationFrame(
        springRef.current,
      );

      springRef.current = 0;
    }
  }, []);

  const springTo = React.useCallback(
    (target: number, velocity: number) => {
      stopSpring();

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduced) {
        progressRef.current = target;
        paint();

        return;
      }

      let value = progressRef.current;
      let speed = velocity;
      let last = performance.now();

      const tick = (now: number) => {
        /* A backgrounded tab hands back a huge gap; cap it. */
        let remaining = Math.min(
          (now - last) / 1000,
          0.064,
        );

        last = now;

        while (remaining > 0) {
          const step = Math.min(
            remaining,
            SPRING_STEP,
          );

          const force =
            -SPRING_STIFFNESS *
              (value - target) -
            SPRING_DAMPING * speed;

          speed += (force / SPRING_MASS) * step;
          value += speed * step;

          remaining -= step;
        }

        if (
          Math.abs(value - target) < 0.0005 &&
          Math.abs(speed) < 0.01
        ) {
          progressRef.current = target;
          springRef.current = 0;
          paint();

          return;
        }

        progressRef.current = value;
        paint();

        springRef.current =
          window.requestAnimationFrame(tick);
      };

      springRef.current =
        window.requestAnimationFrame(tick);
    },
    [paint, stopSpring],
  );

  React.useEffect(
    () => stopSpring,
    [stopSpring],
  );

  /* ---------------------------------------------------------------------- */
  /* DRAG                                                                   */
  /* ---------------------------------------------------------------------- */

  const drag = React.useRef({
    active: false,
    pointer: -1,
    startX: 0,
    startProgress: 0,
    lastX: 0,
    lastTime: 0,
    velocity: 0,
  });

  function handlePointerDown(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    stopSpring();

    event.currentTarget.setPointerCapture(
      event.pointerId,
    );

    drag.current = {
      active: true,
      pointer: event.pointerId,
      startX: event.clientX,
      startProgress: progressRef.current,
      lastX: event.clientX,
      lastTime: event.timeStamp,
      velocity: 0,
    };
  }

  function handlePointerMove(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    const state = drag.current;

    if (
      !state.active ||
      state.pointer !== event.pointerId
    ) {
      return;
    }

    const deltaX = event.clientX - state.lastX;

    const deltaTime =
      event.timeStamp - state.lastTime;

    progressRef.current +=
      -deltaX / configRef.current.sensitivity;

    if (deltaTime > 0) {
      /* px/s — the same unit motion reported as PanInfo.velocity. */
      state.velocity =
        (deltaX / deltaTime) * 1000;
    }

    state.lastX = event.clientX;
    state.lastTime = event.timeStamp;

    schedule();
  }

  function handlePointerUp(
    event: React.PointerEvent<HTMLDivElement>,
  ) {
    const state = drag.current;

    if (
      !state.active ||
      state.pointer !== event.pointerId
    ) {
      return;
    }

    state.active = false;

    if (
      event.currentTarget.hasPointerCapture(
        event.pointerId,
      )
    ) {
      event.currentTarget.releasePointerCapture(
        event.pointerId,
      );
    }

    const config = configRef.current;

    const dragDistance =
      event.clientX - state.startX;

    const distanceShift =
      -dragDistance / config.distanceDivisor;

    const velocityShift =
      -state.velocity / config.velocityDivisor;

    let shift = Math.round(
      distanceShift + velocityShift,
    );

    shift = Math.max(-3, Math.min(3, shift));

    /*
     * Make deliberate small swipes move
     * at least one template.
     */
    if (
      shift === 0 &&
      Math.abs(dragDistance) > 42
    ) {
      shift = dragDistance < 0 ? 1 : -1;
    }

    const target =
      Math.round(state.startProgress) + shift;

    /* Drag velocity is px/s; the spring runs in slide units. */
    springTo(
      target,
      -state.velocity / config.sensitivity,
    );
  }

  return (
    <section
      aria-label="Website design templates"
      className="relative overflow-hidden border-y border-white/[0.05] bg-[#050505] py-5 sm:py-7 lg:py-8"
    >
      {/* Mobiz technical grid */}
      <span
        aria-hidden
        className="tech-grid pointer-events-none absolute inset-0 opacity-30"
      />

      {/* Central red atmosphere */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[90vw] max-w-[1250px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(192,24,34,0.12),transparent_68%)]"
      />

      {/* Bottom cinematic shadow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-linear-to-t from-black/40 to-transparent"
      />

      <div className="relative flex h-[350px] w-full items-center justify-center sm:h-[450px] md:h-[500px] lg:h-[560px] xl:h-[590px] 2xl:h-[620px]">
        {/* Full carousel drag surface */}
        <div
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          aria-label="Drag to browse website templates"
          role="region"
          className="absolute inset-0 z-[200] cursor-grab touch-pan-y active:cursor-grabbing"
        />

        {slides.map((slide, index) => (
          <TemplateCard
            key={slide.image}
            slide={slide}
            initial={transformFor(
              index,
              0,
              total,
              SSR_CONFIG,
            )}
            register={(node) => {
              cardsRef.current[index] = node;
            }}
          />
        ))}
      </div>
    </section>
  );
}
