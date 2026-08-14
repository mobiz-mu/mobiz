import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { BreadcrumbItem } from "@/lib/breadcrumbs";
import { cn } from "@/lib/utils";

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

/**
 * Visible breadcrumb trail. Pair with `buildBreadcrumbSchema` on the same page
 * so the markup and the structured data describe the same hierarchy.
 *
 * The current page is marked `aria-current` and is not a link.
 */
export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("min-w-0", className)}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-text-muted">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link
                  href={item.href}
                  // Comfortable hit area: breadcrumbs are navigation, not inline prose.
                  className="inline-flex min-h-11 items-center rounded-xs transition-colors hover:text-text-primary"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="inline-flex min-h-11 items-center text-text-secondary"
                >
                  {item.label}
                </span>
              )}
              {!isLast ? (
                <ChevronRight aria-hidden className="size-3 shrink-0 text-text-faint" />
              ) : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
