import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { OrbitScene } from "@/components/visual/OrbitScene";
import { TechBackground } from "@/components/visual/TechBackground";
import { HERO_ORBIT_ITEMS } from "@/lib/orbit-items";

/*
 * The approved hero.
 *
 * Server component. The entire first screen — headline, copy, CTAs, orbit — is
 * in the initial HTML, and every entrance is a CSS keyframe. Nothing above the
 * fold waits for hydration, so the H1 is painted and measurable for LCP on the
 * first frame and is fully present for crawlers with JavaScript disabled.
 *
 * The staggered delays below are presentation only; each line is already in the
 * document at its final position when the animation is suppressed.
 */

/*
 * Headline stagger. Kept deliberately tight: these lines are the LCP element,
 * and `.enter-mask` holds each one out of view for the length of its delay, so
 * every extra 100ms here is 100ms added to Largest Contentful Paint.
 */
const HEADLINE = [
  { text: "BUILD", delay: "0s", brand: false },
  { text: "MARKET", delay: "0.05s", brand: true },
  { text: "MANAGE", delay: "0.1s", brand: false },
  { text: "GROW", delay: "0.15s", brand: true },
];

const SERVICE_TAGS = [
  { label: "Website", accent: "blue" },
  { label: "Marketing", accent: "yellow" },
  { label: "Accounting", accent: "green" },
  { label: "Software", accent: "red" },
  { label: "AI", accent: "red" },
] as const;

function HeroCopy() {
  return (
    <div className="mx-auto max-w-[540px] lg:mx-0">
      <p
        className="enter-up mb-8 inline-flex items-center gap-2.5 rounded-full border border-line-strong bg-white/3 px-3 py-1.5"
        style={{ animationDelay: "0.1s" }}
      >
        <span aria-hidden className="status-pulse size-1.5 rounded-full bg-brand" />
        <span className="font-mono text-[10px] font-semibold uppercase tracking-widest text-text-muted">
          Digital Business Solutions / Mauritius
        </span>
      </p>

      {/*
       * Sized against viewport HEIGHT as well as width. Scaling on width alone
       * pushed the primary CTA below the fold on a 1280x720 laptop — the
       * headline filled the screen and the conversion action was never seen.
       */}
      <h1
        className="mb-7 font-bold leading-[0.88] tracking-tight"
        style={{ fontSize: "clamp(3.25rem, min(8.5vw, 12.5vh), 7.5rem)" }}
      >
        {HEADLINE.map((line) => (
          <span key={line.text} className="block overflow-hidden">
            <span
              className="enter-mask block"
              style={{
                animationDelay: line.delay,
                color: line.brand ? "var(--color-brand)" : "var(--color-text-primary)",
              }}
            >
              {line.text}
            </span>
          </span>
        ))}
      </h1>

      <p
        className="enter-up mb-8 max-w-[460px] text-lg font-medium leading-relaxed text-text-secondary sm:text-xl"
        style={{ animationDelay: "0.3s" }}
      >
        We help Mauritian businesses get more clients and run their business better.
      </p>

      <div
        className="enter-up mb-9 flex flex-wrap gap-3"
        style={{ animationDelay: "0.38s" }}
      >
        <ButtonLink href="/services" size="lg" withArrow>
          Explore our solutions
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary" size="lg" withArrow>
          Talk to Mobiz
        </ButtonLink>
      </div>

      <ul
        className="enter-up flex flex-wrap gap-2.5"
        style={{ animationDelay: "0.46s" }}
      >
        {SERVICE_TAGS.map((tag) => (
          <li key={tag.label}>
            <Badge accent={tag.accent}>{tag.label}</Badge>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-ink-950">
      <TechBackground variant="full" />

      <div className="relative pt-[68px]">
        <div className="flex flex-col lg:grid lg:min-h-[calc(100vh-68px)] lg:grid-cols-2">
          <div className="relative z-10 px-5 pb-10 pt-[10vh] sm:px-8 lg:flex lg:flex-col lg:justify-center lg:px-8 lg:py-[8vh] xl:px-16">
            <HeroCopy />
          </div>

          {/*
           * One orbit for every breakpoint. `compact` thins the ring below `lg`
           * via CSS rather than rendering a second scene — that previously
           * duplicated the DOM and preloaded the centre figure twice.
           *
           * No `priority`: the LCP element here is the H1, and preloading a
           * large decorative PNG competes with it.
           */}
          <div className="flex items-center justify-center px-4 pb-14 lg:py-[68px] lg:pr-6">
            <div
              className="enter-scale w-[min(440px,92vw)] lg:w-[min(640px,48vw)]"
              style={{ animationDelay: "0.5s" }}
            >
              <OrbitScene
                items={HERO_ORBIT_ITEMS}
                centreImage="/images/hero/orbit-figure.png"
                centreAlt=""
                compact
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Hero;
