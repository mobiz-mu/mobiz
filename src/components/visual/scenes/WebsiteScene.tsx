import { Gauge, Search, Smartphone } from "lucide-react";

import { ParallaxLayer, ParallaxScene } from "../ParallaxScene";
import { ACCENTS } from "@/lib/accents";

import "./scenes.css";

/**
 * Website Design & Development.
 *
 * A real client site mid-delivery: a browser holding an actual Mobiz-style page
 * (nav, hero, CTA, feature row), a phone breaking the browser's right edge with
 * the mobile build and a WhatsApp enquiry button, and the two scores an agency
 * would actually hand over.
 *
 * The composition is deliberately off-centre — browser left and high, phone
 * right and low, one chip above-left and one below-right — because a perfectly
 * centred panel reads as a template.
 */
export function WebsiteScene() {
  const accent = ACCENTS.blue;

  return (
    <ParallaxScene
      accent={accent.hex}
      className="scene scene--website"
      label="A Mobiz website project shown in a browser and on mobile, with performance and SEO scores"
    >
      <ParallaxLayer depth="back">
        <div className="scene-orbit" />
      </ParallaxLayer>

      {/* ── browser: the delivered site ── */}
      <ParallaxLayer depth="main">
        <div className="ps-panel site-browser">
          <div className="site-browser__bar">
            <span className="site-dot site-dot--r" />
            <span className="site-dot site-dot--y" />
            <span className="site-dot site-dot--g" />
            <span className="site-browser__url">
              <span className="site-browser__lock" />
              mobiz.mu
            </span>
          </div>

          <div className="site-browser__body">
            {/* the site's own header */}
            <div className="site-nav">
              <span className="site-nav__brand">mobiz</span>
              <span className="site-nav__links">
                <i>Services</i>
                <i>Portfolio</i>
                <i>About</i>
              </span>
              <span className="site-nav__cta">Talk to Mobiz</span>
            </div>

            {/* hero */}
            <div className="site-hero">
              <span className="site-hero__eyebrow">MAURITIUS</span>
              <span className="site-hero__h1" />
              <span className="site-hero__h1 site-hero__h1--short" />
              <span className="site-hero__sub" />
              <span className="site-hero__sub site-hero__sub--short" />
              <span className="site-hero__btn">Get started</span>
            </div>

            {/* feature row */}
            <div className="site-cards">
              {["Design", "Build", "Grow"].map((t) => (
                <span key={t} className="site-card">
                  <span className="site-card__icon" />
                  <span className="site-card__title">{t}</span>
                  <span className="site-card__line" />
                </span>
              ))}
            </div>

            {/* build progress — the only thing that pulses */}
            <div className="site-progress ps-anim">
              <span className="site-progress__sweep" />
            </div>
          </div>

          {/* a cursor moving between interface elements */}
          <span className="site-cursor ps-anim" />
        </div>
      </ParallaxLayer>

      {/* ── phone: same site, mobile build ── */}
      <ParallaxLayer depth="lift">
        <div className="site-phone">
          <span className="site-phone__notch" />
          <div className="site-phone__screen">
            <span className="site-phone__nav">
              <span className="site-phone__brand">mobiz</span>
              <span className="site-phone__burger" />
            </span>
            <span className="site-phone__h" />
            <span className="site-phone__h site-phone__h--short" />
            <span className="site-phone__img" />
            <span className="site-phone__row" />
            <span className="site-phone__row site-phone__row--short" />
            <span className="site-phone__wa">WhatsApp enquiry</span>
          </div>
        </div>
      </ParallaxLayer>

      {/* ── foreground: the handover metrics ── */}
      <ParallaxLayer depth="front">
        <div className="scene-chip scene-chip--tl ps-panel site-score">
          <Gauge aria-hidden className="site-score__icon" />
          <span>
            <span className="ps-label">Performance</span>
            <span className="ps-value">
              98<i className="site-score__unit">/100</i>
            </span>
          </span>
        </div>

        <div className="scene-chip scene-chip--bl ps-chip">
          <Smartphone aria-hidden className="scene-chip__i" />
          Mobile-first
        </div>

        <div className="scene-chip scene-chip--br ps-panel site-score">
          <Search aria-hidden className="site-score__icon" />
          <span>
            <span className="ps-label">SEO</span>
            <span className="ps-value">
              100<i className="site-score__unit">/100</i>
            </span>
          </span>
        </div>
      </ParallaxLayer>
    </ParallaxScene>
  );
}

export default WebsiteScene;
