import { PackagePlus, TriangleAlert } from "lucide-react";

import { ParallaxLayer, ParallaxScene } from "../ParallaxScene";
import { ACCENTS } from "@/lib/accents";

import "./scenes.css";

/**
 * Warehousing & Inventory.
 *
 * A stock list as an operations person reads it: SKU, product, quantity against
 * its reorder point, and the one line that needs action today. The KPI strip
 * carries the numbers a stock count produces, and the foreground shows the two
 * events that actually interrupt a day — a low-stock trigger and an inbound
 * delivery.
 *
 * Composed as a wide table rather than a card grid, so it reads differently
 * from Accounting while using the same panel, depth and lighting system.
 */

const KPIS = [
  { label: "Items in stock", value: "428" },
  { label: "Low stock", value: "12" },
  { label: "Stock value", value: "Rs 284,500" },
  { label: "Incoming", value: "+36" },
];

const ROWS = [
  { sku: "SKU-1048", name: "Ceramic Bowl", qty: 124, reorder: 40, pct: 88, low: false },
  { sku: "SKU-2084", name: "Packaging Box", qty: 18, reorder: 60, pct: 16, low: true },
  { sku: "SKU-3012", name: "Mug Set", qty: 86, reorder: 30, pct: 64, low: false },
  { sku: "SKU-4127", name: "Gift Sleeve", qty: 210, reorder: 50, pct: 94, low: false },
];

export function InventoryScene() {
  const accent = ACCENTS.emerald;

  return (
    <ParallaxScene
      accent={accent.hex}
      className="scene scene--inventory"
      label="A stock list showing SKUs, quantities and a low-stock alert, with inventory totals"
    >
      <ParallaxLayer depth="back">
        <div className="scene-orbit" />
      </ParallaxLayer>

      <ParallaxLayer depth="main">
        <div className="ps-panel inv-panel">
          <div className="inv-panel__head">
            <span>
              <span className="inv-panel__title">Stock on hand</span>
              <span className="inv-panel__meta">Warehouse A · counted 06 Aug</span>
            </span>
            <span className="inv-sync">
              <i className="ps-chip__dot ps-anim inv-sync__dot" />
              Synced
            </span>
          </div>

          <div className="inv-kpis">
            {KPIS.map((k) => (
              <span key={k.label} className="inv-kpi">
                <span className="ps-label">{k.label}</span>
                <span className="ps-value">{k.value}</span>
              </span>
            ))}
          </div>

          <div className="inv-table">
            <div className="inv-row inv-row--head">
              <span>SKU</span>
              <span>Product</span>
              <span>Qty</span>
              <span>Stock level</span>
            </div>

            {ROWS.map((r) => (
              <div
                key={r.sku}
                className={`inv-row${r.low ? " inv-row--low" : ""}`}
              >
                <span className="inv-row__sku">{r.sku}</span>
                <span className="inv-row__name">{r.name}</span>
                <span className="inv-row__qty">
                  {r.qty}
                  <i>/{r.reorder}</i>
                </span>
                <span className="inv-row__level">
                  <span className="inv-meter">
                    <span
                      className="inv-meter__fill ps-anim"
                      style={{ width: `${r.pct}%` }}
                    />
                  </span>
                  {r.low ? <em className="inv-row__tag">Low</em> : null}
                </span>
              </div>
            ))}
          </div>
        </div>
      </ParallaxLayer>

      {/* ── inbound delivery, upper-left ── */}
      <ParallaxLayer depth="lift">
        <div className="ps-panel inv-inbound">
          <span className="inv-inbound__icon">
            <PackagePlus aria-hidden />
          </span>
          <span>
            <span className="ps-label">Incoming delivery</span>
            <span className="inv-inbound__value">36 units</span>
            <span className="inv-inbound__meta">Packaging Box · ETA 09 Aug</span>
          </span>
        </div>
      </ParallaxLayer>

      {/* ── the alert that matters today ── */}
      <ParallaxLayer depth="front">
        <div className="ps-panel inv-alert ps-toast ps-anim">
          <span className="inv-alert__icon">
            <TriangleAlert aria-hidden />
          </span>
          <span>
            <span className="inv-alert__title">Low stock · SKU-2084</span>
            <span className="inv-alert__meta">18 units left · reorder at 60</span>
          </span>
        </div>
      </ParallaxLayer>
    </ParallaxScene>
  );
}

export default InventoryScene;
