import { Check, Minus } from "lucide-react";
import { COMPARISON_GROUPS, MONTHLY_PACKAGES } from "@/lib/monthly-packages";

/**
 * Package comparison table.
 *
 * A real `<table>` with proper scopes and a caption, so it is navigable by
 * screen reader rather than being a grid of divs. It scrolls inside its own
 * container on narrow screens so the page body never scrolls sideways, and the
 * feature column stays stuck to the left edge while you scroll across.
 *
 * Booleans render as an icon plus visually-hidden text — never colour or shape
 * alone.
 */
export function PackageComparison() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-line">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="sr-only">
          Feature comparison across the Starter, Business and Premium Growth monthly
          packages
        </caption>
        <thead>
          <tr className="border-b border-line bg-surface-1">
            <th
              scope="col"
              className="sticky left-0 z-10 bg-surface-1 px-5 py-4 text-xs font-semibold uppercase tracking-wider text-text-muted"
            >
              Feature
            </th>
            {MONTHLY_PACKAGES.map((pkg) => (
              <th
                key={pkg.id}
                scope="col"
                className="px-5 py-4 text-sm font-bold text-text-primary"
              >
                {pkg.name}
                <span className="mt-0.5 block text-xs font-medium text-text-muted">
                  {pkg.priceLabel}
                </span>
              </th>
            ))}
          </tr>
        </thead>

        {COMPARISON_GROUPS.map((group) => (
          <tbody key={group.title}>
            <tr className="border-b border-line-faint bg-ink-900">
              <th
                scope="colgroup"
                colSpan={MONTHLY_PACKAGES.length + 1}
                className="px-5 py-3 font-mono text-[10px] uppercase tracking-widest text-brand-bright"
              >
                {group.title}
              </th>
            </tr>
            {group.rows.map((row) => (
              <tr key={row.label} className="border-b border-line-faint last:border-0">
                <th
                  scope="row"
                  className="sticky left-0 z-10 bg-ink-950 px-5 py-3.5 text-sm font-normal text-text-body"
                >
                  {row.label}
                </th>
                {MONTHLY_PACKAGES.map((pkg) => {
                  const value = row.values[pkg.id];
                  return (
                    <td key={pkg.id} className="px-5 py-3.5 text-sm text-text-secondary">
                      {typeof value === "boolean" ? (
                        value ? (
                          <>
                            <Check aria-hidden className="size-4 text-[color:var(--color-accent-green)]" />
                            <span className="sr-only">Included</span>
                          </>
                        ) : (
                          <>
                            <Minus aria-hidden className="size-4 text-text-faint" />
                            <span className="sr-only">Not included</span>
                          </>
                        )
                      ) : (
                        value
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default PackageComparison;
