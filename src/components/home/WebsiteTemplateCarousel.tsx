"use client";

import * as React from "react";
import Image from "next/image";
import {
  animate,
  motion,
  type MotionValue,
  type PanInfo,
  useMotionValue,
  useTransform,
} from "motion/react";

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
/* CARD                                                                       */
/* -------------------------------------------------------------------------- */

function TemplateCard({
  slide,
  index,
  total,
  progress,
  config,
}: {
  slide: TemplateSlide;
  index: number;
  total: number;
  progress: MotionValue<number>;
  config: CarouselConfig;
}) {
  const offset = useTransform(progress, (value) => {
    let diff = (index - value) % total;

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    return diff;
  });

  const x = useTransform(
    offset,
    (value) => value * config.xMultiplier,
  );

  const y = useTransform(
    offset,
    (value) => Math.abs(value) * config.yMultiplier,
  );

  const rotate = useTransform(offset, (value) => {
    if (Math.abs(value) < 0.05) {
      return 0;
    }

    return value * config.rotationMultiplier;
  });

  const scale = useTransform(
    offset,
    (value) =>
      Math.max(
        0.68,
        1 - Math.abs(value) * config.scaleReduction,
      ),
  );

  const opacity = useTransform(
    offset,
    [-4, -3, -2, -1, 0, 1, 2, 3, 4],
    [0, 0.05, 0.28, 0.68, 1, 0.68, 0.28, 0.05, 0],
  );

  const zIndex = useTransform(
    offset,
    (value) =>
      Math.round(
        100 - Math.abs(value) * 10,
      ),
  );

  return (
    <motion.figure
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
        zIndex,
      }}
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
    </motion.figure>
  );
}

/* -------------------------------------------------------------------------- */
/* CAROUSEL                                                                   */
/* -------------------------------------------------------------------------- */

export function WebsiteTemplateCarousel() {
  const progress = useMotionValue(0);

  const startProgress = React.useRef(0);

  const [windowWidth, setWindowWidth] =
    React.useState(1280);

  const total = slides.length;

  React.useEffect(() => {
    const updateWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    updateWidth();

    window.addEventListener(
      "resize",
      updateWidth,
      {
        passive: true,
      },
    );

    return () => {
      window.removeEventListener(
        "resize",
        updateWidth,
      );
    };
  }, []);

  const config = React.useMemo(
    () => getCarouselConfig(windowWidth),
    [windowWidth],
  );

  function handleDragStart() {
    startProgress.current =
      progress.get();
  }

  function handleDragEnd(
    _:
      | MouseEvent
      | TouchEvent
      | PointerEvent,
    info: PanInfo,
  ) {
    const dragDistance =
      info.offset.x;

    const velocity =
      info.velocity.x;

    const distanceShift =
      -dragDistance /
      config.distanceDivisor;

    const velocityShift =
      -velocity /
      config.velocityDivisor;

    let shift = Math.round(
      distanceShift +
        velocityShift,
    );

    shift = Math.max(
      -3,
      Math.min(3, shift),
    );

    /*
     * Make deliberate small swipes move
     * at least one template.
     */
    if (
      shift === 0 &&
      Math.abs(dragDistance) > 42
    ) {
      shift =
        dragDistance < 0
          ? 1
          : -1;
    }

    const target =
      Math.round(
        startProgress.current,
      ) + shift;

    animate(
      progress,
      target,
      {
        type: "spring",
        stiffness: 190,
        damping: 28,
        mass: 0.9,
      },
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
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          dragElastic={0}
          dragMomentum={false}
          onDragStart={
            handleDragStart
          }
          onDrag={(_, info) => {
            const delta =
              -info.delta.x /
              config.sensitivity;

            progress.set(
              progress.get() +
                delta,
            );
          }}
          onDragEnd={
            handleDragEnd
          }
          aria-label="Drag to browse website templates"
          role="region"
          className="absolute inset-0 z-[200] cursor-grab touch-pan-y active:cursor-grabbing"
        />

        {slides.map(
          (slide, index) => (
            <TemplateCard
              key={slide.image}
              slide={slide}
              index={index}
              total={total}
              progress={progress}
              config={config}
            />
          ),
        )}
      </div>
    </section>
  );
}

export default WebsiteTemplateCarousel;