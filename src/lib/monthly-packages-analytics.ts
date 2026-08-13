/**
 * Fire-and-forget analytics for the monthly packages page.
 *
 * No new analytics platform is added: the helper forwards to gtag, the GTM
 * dataLayer or Plausible only if one of them is already present on the page.
 * Never pass names, phone numbers, emails or project text in here.
 */

export type PackageAnalyticsEvent =
  | "monthly_packages_view"
  | "package_selected"
  | "addon_selected"
  | "addon_removed"
  | "checkout_started"
  | "package_form_started"
  | "package_form_completed"
  | "package_whatsapp_clicked"
  | "whatsapp_checkout_clicked";

export type SafeEventProps = {
  package_id?: string;
  addon_id?: string;
  addon_count?: number;
  location?: string;
  device?: "mobile" | "desktop";
};

type AnalyticsWindow = Window & {
  gtag?: (command: "event", name: string, params?: Record<string, unknown>) => void;
  dataLayer?: Array<Record<string, unknown>>;
  plausible?: (name: string, options?: { props: Record<string, unknown> }) => void;
};

export function trackPackageEvent(
  event: PackageAnalyticsEvent,
  props: SafeEventProps = {},
): void {
  if (typeof window === "undefined") return;

  const w = window as AnalyticsWindow;
  const payload: SafeEventProps = {
    ...props,
    device: props.device ?? (window.innerWidth < 768 ? "mobile" : "desktop"),
  };

  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", event, payload);
    } else if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ event, ...payload });
    } else if (typeof w.plausible === "function") {
      w.plausible(event, { props: payload as Record<string, unknown> });
    }
  } catch {
    /* analytics must never break the checkout */
  }
}
