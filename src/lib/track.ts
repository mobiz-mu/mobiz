// MoBiz.mu — lightweight client-side conversion tracking.
//
// Fire-and-forget wrapper around the existing POST /api/analytics/track
// endpoint (which writes to the `analytics_events` table). It never throws and
// never blocks UI. Uses navigator.sendBeacon when available so events fired
// right before a navigation (e.g. opening WhatsApp) still reach the server.

export const TrackEvents = {
  leadFormView: "lead_form_view",
  leadFormSubmit: "lead_form_submit",
  whatsappClick: "whatsapp_click",
  phoneClick: "phone_click",
  quoteClick: "quote_click",
} as const;

export type TrackEventName =
  | (typeof TrackEvents)[keyof typeof TrackEvents]
  | (string & {});

function readId(storage: Storage | undefined, key: string): string | undefined {
  if (!storage) return undefined;
  try {
    let value = storage.getItem(key);
    if (!value) {
      value =
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
      storage.setItem(key, value);
    }
    return value;
  } catch {
    return undefined;
  }
}

export function track(
  eventName: TrackEventName,
  metadata: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;

  try {
    const visitor_id = readId(window.localStorage, "mobiz_vid");
    const session_id = readId(window.sessionStorage, "mobiz_sid");
    const page_path = window.location?.pathname || "/";

    const body = JSON.stringify({
      event_name: eventName,
      page_path,
      visitor_id,
      session_id,
      metadata: { ...metadata, page_url: window.location?.href },
    });

    const url = "/api/analytics/track";

    if (typeof navigator !== "undefined" && "sendBeacon" in navigator) {
      const blob = new Blob([body], { type: "application/json" });
      navigator.sendBeacon(url, blob);
      return;
    }

    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    });
  } catch {
    // Tracking must never break the user experience.
  }
}
