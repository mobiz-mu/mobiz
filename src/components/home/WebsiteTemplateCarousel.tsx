"use client";

import * as React from "react";

import {
  SSR_CONFIG,
  TemplateCard,
  getCarouselConfig,
  slides,
  transformFor,
} from "./website-template-carousel-shared";

/* The spring the snap used to run: stiffness 190, damping 28, mass 0.9. */
const SPRING_STIFFNESS = 190;
const SPRING_DAMPING = 28;
const SPRING_MASS = 0.9;

/* A fixed integration step keeps the spring stable at any frame rate. */
const SPRING_STEP = 1 / 120;

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
