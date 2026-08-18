import Image from "next/image";

/**
 * Shared between `WebsiteTemplateCarouselPoster` (server, static geometry)
 * and `WebsiteTemplateCarousel` (client, drag + real breakpoint geometry) so
 * the slide data and pure transform math exist in exactly one place.
 */

export type TemplateSlide = {
  image: string;
  alt: string;
  width: number;
  height: number;
};

export interface CarouselConfig {
  distanceDivisor: number;
  velocityDivisor: number;
  sensitivity: number;
  xMultiplier: number;
  yMultiplier: number;
  rotationMultiplier: number;
  scaleReduction: number;
}

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

export const slides: TemplateSlide[] = [
  { image: "/images/galleries/mobiz-template1.webp", alt: "Mobiz website design template 1", width: 1000, height: 1333 },
  { image: "/images/galleries/mobiz-template2.webp", alt: "Mobiz website design template 2", width: 960, height: 1440 },
  { image: "/images/galleries/mobiz-template3.webp", alt: "Mobiz website design template 3", width: 736, height: 1307 },
  { image: "/images/galleries/mobiz-template4.webp", alt: "Mobiz website design template 4", width: 736, height: 1307 },
  { image: "/images/galleries/mobiz-template5.webp", alt: "Mobiz website design template 5", width: 600, height: 900 },
  { image: "/images/galleries/mobiz-template6.webp", alt: "Mobiz website design template 6", width: 1000, height: 1500 },
  { image: "/images/galleries/mobiz-template7.webp", alt: "Mobiz website design template 7", width: 736, height: 1317 },
  { image: "/images/galleries/mobiz-template8.webp", alt: "Mobiz website design template 8", width: 735, height: 1059 },
  { image: "/images/galleries/mobiz-template9.webp", alt: "Mobiz website design template 9", width: 832, height: 1472 },
  { image: "/images/galleries/mobiz-template10.webp", alt: "Mobiz website design template 10", width: 877, height: 1559 },
  { image: "/images/galleries/mobiz-template11.webp", alt: "Mobiz website design template 11", width: 736, height: 1104 },
  { image: "/images/galleries/mobiz-template12.webp", alt: "Mobiz website design template 12", width: 736, height: 1104 },
  { image: "/images/galleries/mobiz-template13.webp", alt: "Mobiz website design template 13", width: 736, height: 1104 },
  { image: "/images/galleries/mobiz-template14.webp", alt: "Mobiz website design template 14", width: 736, height: 1308 },
  { image: "/images/galleries/mobiz-template15.webp", alt: "Mobiz website design template 15", width: 736, height: 1308 },
  { image: "/images/galleries/mobiz-template16.webp", alt: "Mobiz website design template 16", width: 736, height: 1104 },
  { image: "/images/galleries/mobiz-template17.webp", alt: "Mobiz website design template 17", width: 736, height: 1104 },
  { image: "/images/galleries/mobiz-template18.webp", alt: "Mobiz website design template 18", width: 1000, height: 1700 },
  { image: "/images/galleries/mobiz-template19.webp", alt: "Mobiz website design template 19", width: 1000, height: 1973 },
  { image: "/images/galleries/mobiz-template20.webp", alt: "Mobiz website design template 20", width: 735, height: 1096 },
  { image: "/images/galleries/mobiz-template21.webp", alt: "Mobiz website design template 21", width: 736, height: 1472 },
  { image: "/images/galleries/mobiz-template22.webp", alt: "Mobiz website design template 22", width: 736, height: 1104 },
  { image: "/images/galleries/mobiz-template23.webp", alt: "Mobiz website design template 23", width: 1000, height: 1700 },
];

/* -------------------------------------------------------------------------- */
/* RESPONSIVE CAROUSEL CONFIGURATION                                          */
/* -------------------------------------------------------------------------- */

export function getCarouselConfig(width: number): CarouselConfig {
  if (width < 390) {
    return { distanceDivisor: 90, velocityDivisor: 560, sensitivity: 145, xMultiplier: 72, yMultiplier: 12, rotationMultiplier: 4.5, scaleReduction: 0.05 };
  }
  if (width < 640) {
    return { distanceDivisor: 110, velocityDivisor: 620, sensitivity: 165, xMultiplier: 94, yMultiplier: 16, rotationMultiplier: 5.5, scaleReduction: 0.055 };
  }
  if (width < 1024) {
    return { distanceDivisor: 150, velocityDivisor: 720, sensitivity: 205, xMultiplier: 145, yMultiplier: 24, rotationMultiplier: 7, scaleReduction: 0.068 };
  }
  if (width < 1440) {
    return { distanceDivisor: 185, velocityDivisor: 820, sensitivity: 235, xMultiplier: 190, yMultiplier: 30, rotationMultiplier: 8.5, scaleReduction: 0.08 };
  }
  return { distanceDivisor: 200, velocityDivisor: 900, sensitivity: 250, xMultiplier: 220, yMultiplier: 34, rotationMultiplier: 9, scaleReduction: 0.085 };
}

/* The width the server renders at, before the real breakpoint is known. */
export const SSR_CONFIG = getCarouselConfig(1280);

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

const OPACITY_STOPS = [0, 0.05, 0.28, 0.68, 1, 0.68, 0.28, 0.05, 0] as const;

/* Piecewise-linear, matching the motion keyframe map over [-4 .. 4]. */
export function opacityFor(offset: number): number {
  const t = Math.min(4, Math.max(-4, offset)) + 4;
  const i = Math.min(7, Math.floor(t));
  const a = OPACITY_STOPS[i] ?? 0;
  const b = OPACITY_STOPS[i + 1] ?? 0;
  return a + (b - a) * (t - i);
}

export type CardTransform = {
  transform: string;
  opacity: number;
  zIndex: number;
};

export function transformFor(
  index: number,
  progress: number,
  total: number,
  config: CarouselConfig,
): CardTransform {
  let diff = (index - progress) % total;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;

  const distance = Math.abs(diff);
  const x = diff * config.xMultiplier;
  const y = distance * config.yMultiplier;
  const rotate = distance < 0.05 ? 0 : diff * config.rotationMultiplier;
  const scale = Math.max(0.68, 1 - distance * config.scaleReduction);

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

export function TemplateCard({
  slide,
  initial,
  register,
}: {
  slide: TemplateSlide;
  initial: CardTransform;
  register?: (node: HTMLElement | null) => void;
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
      <span aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-br from-white/[0.055] via-transparent to-black/[0.08]" />

      {/* Mobiz red upper edge */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/90 to-transparent" />

      {/* Very subtle bottom depth */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[12%] bg-linear-to-t from-black/20 to-transparent" />
    </figure>
  );
}
