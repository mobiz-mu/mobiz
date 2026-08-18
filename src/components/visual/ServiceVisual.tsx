import {
  Barcode,
  FileText,
  Globe2,
  TrendingUp,
  Workflow,
} from "lucide-react";
import { AccountingScene } from "./scenes/AccountingScene";
import { BusinessScene } from "./scenes/BusinessScene";
import { InventoryScene } from "./scenes/InventoryScene";
import { MarketingScene } from "./scenes/MarketingScene";
import { WebsiteScene } from "./scenes/WebsiteScene";
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
 * Each scene is server-rendered markup; the only JavaScript is the one shared
 * `ParallaxScene` island that all five reuse. The numbers shown are interface
 * furniture, marked aria-hidden, and never presented as Mobiz results.
 */

/*
 * Every division now uses the parallax scene system: full product scenes with
 * their own mobile composition, so unlike the legacy illustrations they render
 * at every width.
 */
const SCENES: Record<ServiceDivisionId, () => React.JSX.Element> = {
  "website-design-development": WebsiteScene,
  "digital-marketing": MarketingScene,
  "accounting-tax-returns": AccountingScene,
  "warehousing-inventory": InventoryScene,
  "business-solutions": BusinessScene,
};

export function ServiceVisual({
  division,
  className,
}: {
  division: ServiceDivisionId;
  className?: string;
}) {
  const Scene = SCENES[division];

  /*
   * SCENES covers every division, but `noUncheckedIndexedAccess` cannot see that
   * through an index read — the guard is for the compiler, not a real case.
   */
  if (!Scene) {
    return null;
  }

  /*
   * Shown on phones too. The scene recomposes below 520px — browser back, phone
   * forward, chips repositioned — rather than shrinking the desktop artwork, and
   * swaps pointer parallax for a slow autonomous drift.
   */
  return (
    <div className={cn("relative mx-auto w-[92%] md:w-[96%]", className)}>
      <Scene />
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
