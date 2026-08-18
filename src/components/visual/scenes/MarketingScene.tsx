import { MessageCircle, TrendingUp } from "lucide-react";

import { ParallaxLayer, ParallaxScene } from "../ParallaxScene";
import { ACCENTS } from "@/lib/accents";

import "./scenes.css";

/**
 * Digital Marketing.
 *
 * A campaign dashboard an account manager would actually open: the four numbers
 * that decide whether a campaign is working, a spend-vs-leads chart that draws
 * itself, the channels the budget is split across, and a live enquiry arriving
 * from WhatsApp.
 *
 * Figures are interface furniture and marked decorative — they illustrate the
 * shape of a report, not results Mobiz is claiming.
 */

const KPIS = [
  { label: "Reach", value: "48,320", delta: "+12.4%" },
  { label: "Leads", value: "186", delta: "+31" },
  { label: "Cost / lead", value: "Rs 132", delta: "-18%" },
  { label: "CTR", value: "4.8%", delta: "+0.9" },
];

/* Spend (bars) against leads (line) — the line lags the bars, as it does live. */
const BARS = [38, 52, 44, 63, 58, 76, 71, 88];
const LINE = "M0,74 L34,66 L68,70 L102,52 L136,56 L170,34 L204,38 L238,16";

export function MarketingScene() {
  const accent = ACCENTS.yellow;

  return (
    <ParallaxScene
      accent={accent.hex}
      className="scene scene--marketing"
      label="A campaign performance dashboard showing reach, leads, cost per lead and click-through rate"
    >
      <ParallaxLayer depth="back">
        <div className="scene-orbit" />
      </ParallaxLayer>

      {/* ── the dashboard ── */}
      <ParallaxLayer depth="main">
        <div className="ps-panel mkt-panel">
          <div className="mkt-panel__head">
            <span>
              <span className="mkt-panel__title">Campaign performance</span>
              <span className="mkt-panel__range">Last 30 days · Mauritius</span>
            </span>
            <span className="mkt-live">
              <i className="ps-chip__dot ps-anim mkt-live__dot" />
              LIVE
            </span>
          </div>

          <div className="mkt-kpis">
            {KPIS.map((k) => (
              <span key={k.label} className="mkt-kpi">
                <span className="ps-label">{k.label}</span>
                <span className="ps-value">{k.value}</span>
                <span className="mkt-kpi__delta">{k.delta}</span>
              </span>
            ))}
          </div>

          <div className="mkt-chart">
            <span className="mkt-chart__cap">Spend vs leads</span>

            <div className="mkt-chart__plot">
              <div className="mkt-bars ps-anim">
                {BARS.map((h, i) => (
                  <span
                    key={h + "-" + i}
                    className="ps-bar mkt-bar"
                    style={{ height: `${h}%`, animationDelay: `${i * 0.09}s` }}
                  />
                ))}
              </div>

              <svg
                className="mkt-line ps-anim"
                viewBox="0 0 238 90"
                preserveAspectRatio="none"
                aria-hidden
              >
                <path className="ps-draw-path mkt-line__path" d={LINE} />
              </svg>
            </div>
          </div>

          <div className="mkt-channels">
            <span className="mkt-channel mkt-channel--google">
              <i />
              Google Ads
              <b>Rs 24,800</b>
            </span>
            <span className="mkt-channel mkt-channel--meta">
              <i />
              Meta Ads
              <b>Rs 11,200</b>
            </span>
            <span className="mkt-channel mkt-channel--seo">
              <i />
              SEO
              <b>Organic</b>
            </span>
          </div>
        </div>
      </ParallaxLayer>

      {/* ── search growth, floating above-left ── */}
      <ParallaxLayer depth="lift">
        <div className="ps-panel mkt-visibility">
          <span className="ps-label">Search visibility</span>
          <span className="mkt-visibility__row">
            <TrendingUp aria-hidden className="mkt-visibility__icon" />
            <span className="mkt-visibility__value">+156%</span>
          </span>
          <span className="mkt-visibility__terms">
            <i>website design mauritius</i>
            <i>
              <b>#2</b>
            </i>
          </span>
          <span className="mkt-visibility__terms">
            <i>seo services mauritius</i>
            <i>
              <b>#4</b>
            </i>
          </span>
        </div>
      </ParallaxLayer>

      {/* ── a lead landing, below-right ── */}
      <ParallaxLayer depth="front">
        <div className="ps-panel mkt-toast ps-toast ps-anim">
          <span className="mkt-toast__icon">
            <MessageCircle aria-hidden />
          </span>
          <span>
            <span className="mkt-toast__title">New lead · WhatsApp</span>
            <span className="mkt-toast__meta">Curepipe · Website enquiry</span>
          </span>
        </div>
      </ParallaxLayer>
    </ParallaxScene>
  );
}

export default MarketingScene;
