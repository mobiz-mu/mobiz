import { Anton } from "next/font/google";

/**
 * Display face for the homepage.
 *
 * Declared HERE, not in the root layout, and that placement is the whole point.
 * Per the Next font docs: a font called in the root layout "is preloaded on all
 * routes", whereas one called in a page module is preloaded only on the routes
 * that render it.
 *
 * Measured before the move: Anton's latin subset (11KB) was preloaded AND
 * downloaded on every route while `document.fonts` never reported it loaded and
 * zero elements were styled with it on /services, /about, /blog or /contact —
 * the textbook "preloaded but not used" case. Anton is used only by the homepage
 * H1 and the trust counters, so only the homepage should pay for it.
 *
 * Scoping alone was NOT enough, and the measurement is why `preload` is off.
 * Every page links home from the logo, so Next prefetches the homepage route and
 * its font preload travels with it — Chrome then reports
 * "9e9f04e3c37952ab...woff2 was preloaded but not used" on /services, /about,
 * /blog and /contact, and each of those routes really did download 11KB it never
 * used. With `preload: false` no preload tag is emitted anywhere, so the warning
 * cannot occur and non-homepage routes fetch zero Anton bytes.
 *
 * What this costs on the homepage: the @font-face still lives in a
 * render-blocking stylesheet, so the browser discovers and fetches Anton during
 * CSS parse — only marginally later than a preload in the same <head>. With
 * `display: swap` the H1 text (this page's LCP element) paints immediately
 * either way, and it cannot shift: the headline's height measures an identical
 * 470.56px under Anton, Anton Fallback, Arial and system-ui, because
 * `.hero-headline__row` is `white-space: nowrap` and the line-height is unitless.
 * The only effect is that the display face may arrive a beat after first paint
 * on a cold load.
 */
export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
  preload: false,
});
