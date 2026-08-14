import {
  BarChart3,
  Barcode,
  Bot,
  FileText,
  Globe2,
  Search,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { BrowserMockup, DashboardPanel, FloatingPanel, MiniBars } from "./Mockups";
import { ACCENTS } from "@/lib/accents";
import type { ServiceDivisionId } from "@/lib/navigation";
import { cn } from "@/lib/utils";

/*
 * Each division gets its own visual world, built from the same primitives so
 * they read as one family:
 *
 *   Websites    → browser frame + mobile companion
 *   Marketing   → search result + campaign metrics
 *   Accounting  → VAT / invoice / cash position dashboard
 *   Inventory   → barcode, SKU rows and stock alerts
 *   Business    → connected workflow with an AI node
 *
 * All CSS and SVG. Server components — zero JavaScript. The numbers shown are
 * interface furniture, marked aria-hidden, and never presented as Mobiz results.
 */

function Chip({ children, hex }: { children: React.ReactNode; hex: string }) {
  return (
    <span
      className="rounded-md px-2 py-1 font-mono text-[9px] uppercase tracking-wider"
      style={{ border: `1px solid ${hex}55`, color: `${hex}ee`, background: `${hex}14` }}
    >
      {children}
    </span>
  );
}

function WebsiteVisual() {
  const { hex } = ACCENTS.blue;
  return (
    <div className="perspective relative">
      <FloatingPanel tilt="left" float="c">
        <BrowserMockup url="mobiz.mu" accent="blue">
          <div className="space-y-3 p-5">
            <div className="h-2.5 w-2/5 rounded-full" style={{ background: hex }} />
            <div className="h-2 w-4/5 rounded-full bg-white/12" />
            <div className="h-2 w-3/5 rounded-full bg-white/8" />
            <div className="grid grid-cols-3 gap-2 pt-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="rounded-md border border-line bg-surface-1 p-2.5">
                  <div className="mb-2 h-6 w-6 rounded" style={{ background: `${hex}40` }} />
                  <div className="h-1.5 w-full rounded-full bg-white/10" />
                </div>
              ))}
            </div>
          </div>
        </BrowserMockup>
      </FloatingPanel>

      {/* Mobile companion, overlapping the browser corner for depth */}
      <FloatingPanel
        float="a"
        className="absolute -bottom-8 -right-2 w-24 sm:w-28"
      >
        <div className="overflow-hidden rounded-2xl border-4 border-ink-400 bg-ink-900 shadow-panel">
          <div className="space-y-2 p-2.5" style={{ aspectRatio: "9/16" }}>
            <div className="h-1.5 w-3/4 rounded-full" style={{ background: hex }} />
            <div className="h-1 w-full rounded-full bg-white/10" />
            <div className="h-8 rounded" style={{ background: `${hex}30` }} />
            <div className="h-1 w-2/3 rounded-full bg-white/10" />
            <div
              className="mt-2 rounded-md py-1.5 text-center font-mono text-[6px] font-bold text-[#04240f]"
              style={{ background: "var(--color-whatsapp)" }}
            >
              WHATSAPP
            </div>
          </div>
        </div>
      </FloatingPanel>
    </div>
  );
}

function MarketingVisual() {
  const { hex } = ACCENTS.yellow;
  return (
    <div className="space-y-4">
      <DashboardPanel title="Search visibility" status="Tracking" accent="yellow">
        <div className="space-y-2.5">
          {["website design mauritius", "seo services mauritius", "accounting mauritius"].map(
            (term, i) => (
              <div
                key={term}
                className="flex items-center gap-3 rounded-md border border-line bg-surface-1 px-3 py-2"
              >
                <Search aria-hidden className="size-3 shrink-0 text-text-faint" />
                <span className="min-w-0 flex-1 truncate font-mono text-[10px] text-text-muted">
                  {term}
                </span>
                <span
                  aria-hidden
                  className="size-1.5 shrink-0 rounded-full"
                  style={{ background: i === 0 ? hex : `${hex}55` }}
                />
              </div>
            ),
          )}
        </div>
      </DashboardPanel>

      <FloatingPanel tilt="right">
        <DashboardPanel title="Campaign activity" accent="yellow">
          <MiniBars values={[28, 42, 35, 58, 49, 71, 84]} accent="yellow" />
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Chip hex={hex}>Google Ads</Chip>
            <Chip hex={hex}>Meta</Chip>
            <Chip hex={hex}>Organic</Chip>
          </div>
        </DashboardPanel>
      </FloatingPanel>
    </div>
  );
}

function AccountingVisual() {
  const { hex } = ACCENTS.green;
  return (
    <div className="space-y-4">
      <DashboardPanel title="VAT return" status="Q3 ready" accent="green">
        <div className="grid grid-cols-3 gap-2.5">
          {["Sales", "Purchases", "Net VAT"].map((label) => (
            <div key={label} className="rounded-md border border-line bg-surface-1 p-2.5">
              <p className="font-mono text-[8px] uppercase tracking-wider text-text-faint">
                {label}
              </p>
              <div aria-hidden className="mt-2 h-2 w-full rounded-full bg-white/10" />
              <div
                aria-hidden
                className="mt-1.5 h-2 w-2/3 rounded-full"
                style={{ background: `${hex}55` }}
              />
            </div>
          ))}
        </div>
      </DashboardPanel>

      <FloatingPanel tilt="left" float="b">
        <DashboardPanel title="Invoices" accent="green">
          <ul className="space-y-2">
            {["Paid", "Awaiting payment", "Draft"].map((state, i) => (
              <li
                key={state}
                className="flex items-center gap-3 rounded-md border border-line bg-surface-1 px-3 py-2"
              >
                <FileText aria-hidden className="size-3 shrink-0 text-text-faint" />
                <span className="flex-1 text-[11px] text-text-muted">{state}</span>
                <span
                  aria-hidden
                  className="size-1.5 rounded-full"
                  style={{ background: i === 0 ? hex : `${hex}45` }}
                />
              </li>
            ))}
          </ul>
        </DashboardPanel>
      </FloatingPanel>
    </div>
  );
}

function InventoryVisual() {
  const { hex, onDark } = ACCENTS.emerald;
  return (
    <div className="space-y-4">
      <DashboardPanel title="Stock control" status="Live" accent="emerald">
        <div className="mb-3 flex items-center gap-3 rounded-md border border-line bg-surface-1 px-3 py-3">
          <Barcode aria-hidden className="size-5 shrink-0" style={{ color: onDark }} />
          <span aria-hidden className="flex h-7 flex-1 items-end gap-[2px]">
            {[3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 2, 1].map((w, i) => (
              <span
                key={i}
                className="h-full bg-white/70"
                style={{ width: w, opacity: 0.35 + (w / 3) * 0.5 }}
              />
            ))}
          </span>
        </div>

        <ul className="space-y-2">
          {[
            { sku: "SKU-1042", state: "In stock" },
            { sku: "SKU-2287", state: "Low stock" },
            { sku: "SKU-3391", state: "In stock" },
          ].map((row, i) => (
            <li
              key={row.sku}
              className="flex items-center gap-3 rounded-md border border-line bg-surface-1 px-3 py-2"
            >
              <span className="font-mono text-[10px] text-text-muted">{row.sku}</span>
              <span className="flex-1" />
              <span
                className="rounded px-1.5 py-0.5 font-mono text-[8px] uppercase tracking-wider"
                style={{
                  color: i === 1 ? ACCENTS.yellow.hex : hex,
                  background: `${i === 1 ? ACCENTS.yellow.hex : hex}18`,
                }}
              >
                {row.state}
              </span>
            </li>
          ))}
        </ul>
      </DashboardPanel>
    </div>
  );
}

function BusinessVisual() {
  const { hex, onDark } = ACCENTS.red;
  const nodes = [
    { icon: FileText, label: "Business plan" },
    { icon: Workflow, label: "Workflow" },
    { icon: Bot, label: "AI automation" },
    { icon: BarChart3, label: "Reporting" },
  ];

  return (
    <DashboardPanel title="Connected systems" status="Automated" accent="red">
      <div className="relative">
        {/* Connector spine */}
        <span
          aria-hidden
          className="absolute left-[19px] top-4 bottom-4 w-px"
          style={{ background: `linear-gradient(180deg, ${hex}, ${hex}22)` }}
        />
        <ul className="space-y-3">
          {nodes.map((node, i) => (
            <li key={node.label} className="relative flex items-center gap-4">
              <span
                className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-lg border"
                style={{
                  borderColor: `${hex}55`,
                  background: i === 2 ? `${hex}22` : "var(--color-surface-1)",
                }}
              >
                <node.icon aria-hidden className="size-4" style={{ color: onDark }} />
              </span>
              <span className="min-w-0 flex-1 rounded-md border border-line bg-surface-1 px-3 py-2.5">
                <span className="block text-[11px] font-semibold text-text-body">
                  {node.label}
                </span>
                <span aria-hidden className="mt-1.5 block h-1 w-2/3 rounded-full bg-white/10" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </DashboardPanel>
  );
}

const VISUALS: Record<ServiceDivisionId, () => React.ReactElement> = {
  "website-design-development": WebsiteVisual,
  "digital-marketing": MarketingVisual,
  "accounting-tax-returns": AccountingVisual,
  "warehousing-inventory": InventoryVisual,
  "business-solutions": BusinessVisual,
};

export function ServiceVisual({
  division,
  className,
}: {
  division: ServiceDivisionId;
  className?: string;
}) {
  const Visual = VISUALS[division];
  return (
    <div className={cn("relative", className)} aria-hidden>
      <Visual />
    </div>
  );
}

/** Icon lookup used where a division needs a glyph outside the nav data. */
export const DIVISION_GLYPH: Record<ServiceDivisionId, typeof Globe2> = {
  "website-design-development": Globe2,
  "digital-marketing": TrendingUp,
  "accounting-tax-returns": FileText,
  "warehousing-inventory": Barcode,
  "business-solutions": Workflow,
};

export default ServiceVisual;
