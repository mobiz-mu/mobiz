import { FileCheck2, Sparkles } from "lucide-react";

import { ParallaxLayer, ParallaxScene } from "../ParallaxScene";
import { ACCENTS } from "@/lib/accents";

import "./scenes.css";

/**
 * Business Solutions.
 *
 * Built around what this division actually sells, not a generic roadmap: the
 * copy is company registration and the paperwork with it, business plans and
 * financial forecasts written to be read by lenders, pitch decks and brand
 * documents, and automation applied where it removes manual work.
 *
 * So the scene is the deliverable itself — a bound business plan open at the
 * forecast, with the registration cleared and the automation note beside it.
 * Deliberately document-led rather than another dashboard, so it does not
 * repeat Accounting or Inventory.
 */

/* Monthly revenue projection; break-even lands where the line crosses month 7. */
const FORECAST = [14, 22, 30, 41, 52, 61, 74, 82, 90, 96, 104, 118];
const BREAK_EVEN_INDEX = 6;

export function BusinessScene() {
  const accent = ACCENTS.red;

  return (
    <ParallaxScene
      accent={accent.hex}
      className="scene scene--business"
      label="A business plan document open at a twelve-month revenue forecast, with company registration complete"
    >
      <ParallaxLayer depth="back">
        <div className="scene-orbit" />
      </ParallaxLayer>

      {/* the bound document sitting behind, giving the scene physical depth */}
      <ParallaxLayer depth="back">
        <div className="ps-panel biz-backsheet" />
      </ParallaxLayer>

      <ParallaxLayer depth="main">
        <div className="ps-panel biz-doc">
          <div className="biz-doc__head">
            <span>
              <span className="biz-doc__kicker">Business plan · 2026</span>
              <span className="biz-doc__title">12-Month Growth Plan</span>
            </span>
            <span className="biz-doc__badge">Lender ready</span>
          </div>

          <div className="biz-stats">
            <span className="biz-stat">
              <span className="ps-label">Revenue target</span>
              <span className="ps-value">Rs 2.4M</span>
            </span>
            <span className="biz-stat">
              <span className="ps-label">Break-even</span>
              <span className="ps-value">Month 7</span>
            </span>
            <span className="biz-stat">
              <span className="ps-label">Milestones</span>
              <span className="ps-value">
                4<i className="biz-stat__of">/6</i>
              </span>
            </span>
          </div>

          <div className="biz-chart">
            <span className="biz-chart__cap">Revenue forecast</span>

            <div className="biz-chart__plot ps-anim">
              {FORECAST.map((h, i) => (
                <span
                  key={h + "-" + i}
                  className={`ps-bar biz-bar${i === BREAK_EVEN_INDEX ? " biz-bar--mark" : ""}`}
                  style={{ height: `${h * 0.8}%`, animationDelay: `${i * 0.06}s` }}
                />
              ))}
            </div>

            <span className="biz-chart__axis">
              <i>M1</i>
              <i className="biz-chart__break">Break-even M7</i>
              <i>M12</i>
            </span>
          </div>

          <div className="biz-readiness">
            <span className="biz-readiness__head">
              <i>Market readiness</i>
              <b>82%</b>
            </span>
            <span className="biz-readiness__track">
              <span className="biz-readiness__fill ps-anim" />
            </span>
          </div>
        </div>
      </ParallaxLayer>

      {/* ── registration cleared ── */}
      <ParallaxLayer depth="lift">
        <div className="ps-panel biz-reg">
          <span className="biz-reg__icon">
            <FileCheck2 aria-hidden />
          </span>
          <span>
            <span className="ps-label">Company registration</span>
            <span className="biz-reg__value">Complete</span>
            <span className="biz-reg__meta">Registrar of Companies · Mauritius</span>
          </span>
        </div>
      </ParallaxLayer>

      {/* ── the automation note ── */}
      <ParallaxLayer depth="front">
        <div className="scene-chip biz-chip--auto ps-chip">
          <Sparkles aria-hidden className="scene-chip__i" />
          Automation · 14 hrs/month saved
        </div>
      </ParallaxLayer>
    </ParallaxScene>
  );
}

export default BusinessScene;
