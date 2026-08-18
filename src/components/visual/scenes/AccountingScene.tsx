import { BadgeCheck, Wallet } from "lucide-react";

import { ParallaxLayer, ParallaxScene } from "../ParallaxScene";
import { ACCENTS } from "@/lib/accents";

import "./scenes.css";

/**
 * Accounting & Tax Returns.
 *
 * A real invoice mid-cycle: line items, the VAT 15% split a Mauritian business
 * actually files, and a PAID status. Around it, the two things a client asks
 * about between filings — where cash sits this month, and whether VAT is clear.
 *
 * Figures are interface furniture and marked decorative; they illustrate the
 * shape of a ledger, not Mobiz revenue.
 */

const LINES = [
  { desc: "Website design & build", qty: "1", amount: "11,200.00" },
  { desc: "Hosting & maintenance", qty: "12", amount: "3,600.00" },
  { desc: "Content migration", qty: "1", amount: "1,243.48" },
];

/* Six months of net cash position — dips mid-year, recovers. */
const CASH = [46, 58, 41, 63, 72, 88];

export function AccountingScene() {
  const accent = ACCENTS.green;

  return (
    <ParallaxScene
      accent={accent.hex}
      className="scene scene--accounting"
      label="An invoice showing VAT at 15 percent and a paid status, beside a cashflow summary"
    >
      <ParallaxLayer depth="back">
        <div className="scene-orbit" />
      </ParallaxLayer>

      {/* ── the invoice ── */}
      <ParallaxLayer depth="main">
        <div className="ps-panel acc-invoice">
          <div className="acc-invoice__head">
            <span>
              <span className="acc-invoice__no">INV-2048</span>
              <span className="acc-invoice__meta">Issued 04 Aug · Due 18 Aug</span>
            </span>
            <span className="acc-status">Paid</span>
          </div>

          <div className="acc-lines">
            <div className="acc-lines__head">
              <span>Description</span>
              <span>Qty</span>
              <span>Amount (Rs)</span>
            </div>
            {LINES.map((l) => (
              <div key={l.desc} className="acc-line">
                <span className="acc-line__desc">{l.desc}</span>
                <span className="acc-line__qty">{l.qty}</span>
                <span className="acc-line__amt">{l.amount}</span>
              </div>
            ))}
          </div>

          <div className="acc-totals">
            <span className="acc-total">
              <i>Subtotal</i>
              <b>Rs 16,043.48</b>
            </span>
            <span className="acc-total">
              <i>VAT 15%</i>
              <b>Rs 2,406.52</b>
            </span>
            <span className="acc-total acc-total--grand">
              <i>Total due</i>
              <b>Rs 18,450.00</b>
            </span>
          </div>
        </div>
      </ParallaxLayer>

      {/* ── cash position, lower-left ── */}
      <ParallaxLayer depth="lift">
        <div className="ps-panel acc-cash">
          <span className="ps-label">Cash position</span>
          <span className="acc-cash__value">Rs 412,880</span>

          <div className="acc-cash__plot ps-anim">
            {CASH.map((h, i) => (
              <span
                key={h + "-" + i}
                className="ps-bar acc-cash__bar"
                style={{ height: `${h}%`, animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>

          <span className="acc-cash__foot">
            <i>Outstanding</i>
            <b>Rs 47,300</b>
          </span>
        </div>
      </ParallaxLayer>

      {/* ── foreground status ── */}
      <ParallaxLayer depth="front">
        <div className="scene-chip acc-chip--vat ps-chip">
          <BadgeCheck aria-hidden className="scene-chip__i" />
          VAT Q3 · filed
        </div>

        <div className="ps-panel acc-toast ps-toast ps-anim">
          <span className="acc-toast__icon">
            <Wallet aria-hidden />
          </span>
          <span>
            <span className="acc-toast__title">Payment received</span>
            <span className="acc-toast__meta">Rs 18,450.00 · Juice transfer</span>
          </span>
        </div>
      </ParallaxLayer>
    </ParallaxScene>
  );
}

export default AccountingScene;
