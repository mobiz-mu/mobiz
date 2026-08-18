import {
  SSR_CONFIG,
  TemplateCard,
  slides,
  transformFor,
} from "./website-template-carousel-shared";

/**
 * Server-rendered resting state of `WebsiteTemplateCarousel`: the exact same
 * markup, images and geometry the interactive version paints for its very
 * first frame (the `SSR_CONFIG` desktop-width numbers), just without the
 * pointer handlers, ref registration, and resize/breakpoint correction.
 *
 * The interactive version already corrects the breakpoint-specific geometry
 * synchronously via `useLayoutEffect` before its first paint — so swapping
 * from this poster to the real component (once near viewport) reproduces the
 * same "instant, invisible" correction visitors already experience today on
 * every load, just deferred until the section is about to be seen instead of
 * happening at hydration time.
 */
export function WebsiteTemplateCarouselPoster() {
  const total = slides.length;

  return (
    <section
      aria-label="Website design templates"
      className="relative overflow-hidden border-y border-white/[0.05] bg-[#050505] py-5 sm:py-7 lg:py-8"
    >
      {/* Mobiz technical grid */}
      <span aria-hidden className="tech-grid pointer-events-none absolute inset-0 opacity-30" />

      {/* Central red atmosphere */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[80%] w-[90vw] max-w-[1250px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(192,24,34,0.12),transparent_68%)]"
      />

      {/* Bottom cinematic shadow */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[24%] bg-linear-to-t from-black/40 to-transparent" />

      <div className="relative flex h-[350px] w-full items-center justify-center sm:h-[450px] md:h-[500px] lg:h-[560px] xl:h-[590px] 2xl:h-[620px]">
        {/* Inert drag surface — no handlers until the real component mounts. */}
        <div
          aria-label="Drag to browse website templates"
          role="region"
          className="absolute inset-0 z-[200]"
        />

        {slides.map((slide, index) => (
          <TemplateCard
            key={slide.image}
            slide={slide}
            initial={transformFor(index, 0, total, SSR_CONFIG)}
          />
        ))}
      </div>
    </section>
  );
}

export default WebsiteTemplateCarouselPoster;
