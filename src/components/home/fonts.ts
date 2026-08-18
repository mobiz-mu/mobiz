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
 * Scoping alone is not the end of it, and `preload: true` is a deliberate
 * trade rather than a free win.
 *
 * Every page links home from the logo, so Next prefetches `/` from all ~96 other
 * routes and the homepage's Anton preload ends up in those documents. Anton is
 * never painted there, so Chrome logs
 * "9e9f04e3c37952ab...woff2 was preloaded using link preload but not used" and
 * each of those routes fetches an 11KB face it does not use.
 *
 * That warning is real and reproducible — it just needs the right conditions.
 * It does NOT appear on a plain load-and-leave: land on /about, /why-us or
 * /monthly-packages, scroll so the links prefetch, and dwell ~20s with the cache
 * disabled, and it fires every time. An earlier pass here concluded it "no
 * longer reproduces" purely because that pass navigated away too quickly; that
 * conclusion was wrong. Measured both ways on the same build:
 *
 *   preload: false -> zero font warnings, zero Anton bytes on inner routes,
 *                     homepage desktop CLS 0.0295 (one shift, attributed by
 *                     Lighthouse to "Web font loaded" on this file)
 *   preload: true  -> Anton warning + 11KB on inner routes,
 *                     homepage desktop CLS 0.0000 with zero recorded shifts
 *
 * We keep `true`. Anton is genuinely the hero face on `/` — four above-the-fold
 * elements are painted in it, starting with the H1 — and holding a Core Web
 * Vital at zero on the site's main landing page is worth 11KB and a console
 * warning on secondary routes. Revisit only if Anton stops being above-fold.
 *
 * Rejected fix: `prefetch={false}` on the logo link. Tried and measured — the
 * homepage is still prefetched (the `?_rsc=` request for `/` still fires) and
 * the warning was unchanged, so it cost navigation UX for nothing and was
 * reverted.
 *
 * The headline cannot shift vertically either way: `.hero-headline__row` is
 * `white-space: nowrap` with a unitless line-height, so the row measures an
 * identical 470.56px under Anton, Anton Fallback, Arial and system-ui. The shift
 * preloading removes is horizontal — the condensed face narrows the copy column,
 * which moved the flex sibling beside it.
 */
export const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
  display: "swap",
  preload: true,
});
