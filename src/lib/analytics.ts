import { supabaseServer } from "@/lib/supabase-server";

export type AnalyticsOverview = {
  totalVisits: number;
  uniqueVisitors: number;
  avgSession: string;
  conversionEvents: number;
  topPages: { page: string; views: number }[];
  events: { event: string; total: number }[];
  trafficTrend: { label: string; visits: number; conversions: number }[];
  deviceSplit: { label: string; value: number }[];
};

type AnalyticsEventRow = {
  id?: string | number;
  created_at?: string | null;
  event_name?: string | null;
  event?: string | null;
  type?: string | null;
  page_path?: string | null;
  pathname?: string | null;
  path?: string | null;
  url?: string | null;
  session_id?: string | null;
  visitor_id?: string | null;
  device_type?: string | null;
  metadata?: Record<string, unknown> | null;
};

function getEventName(row: AnalyticsEventRow) {
  return (
    row.event_name ||
    row.event ||
    row.type ||
    (typeof row.metadata?.event_name === "string" ? row.metadata.event_name : null) ||
    "unknown"
  );
}

function getPagePath(row: AnalyticsEventRow) {
  const raw =
    row.page_path ||
    row.pathname ||
    row.path ||
    (typeof row.metadata?.page_path === "string" ? row.metadata.page_path : null) ||
    (typeof row.metadata?.pathname === "string" ? row.metadata.pathname : null) ||
    row.url ||
    "/";

  if (!raw) return "/";

  try {
    if (raw.startsWith("http://") || raw.startsWith("https://")) {
      const url = new URL(raw);
      return url.pathname || "/";
    }
  } catch {
    // Ignore parsing issues and use the raw value below.
  }

  return raw.startsWith("/") ? raw : `/${raw}`;
}

function getSessionId(row: AnalyticsEventRow) {
  return (
    row.session_id ||
    row.visitor_id ||
    (typeof row.metadata?.session_id === "string" ? row.metadata.session_id : null) ||
    (typeof row.metadata?.visitor_id === "string" ? row.metadata.visitor_id : null) ||
    String(row.id ?? Math.random())
  );
}

function getDeviceType(row: AnalyticsEventRow) {
  const direct =
    row.device_type ||
    (typeof row.metadata?.device_type === "string" ? row.metadata.device_type : null) ||
    (typeof row.metadata?.device === "string" ? row.metadata.device : null);

  if (direct) {
    const value = direct.toLowerCase();
    if (value.includes("mobile")) return "Mobile";
    if (value.includes("tablet")) return "Tablet";
    if (value.includes("desktop")) return "Desktop";
  }

  const ua =
    typeof row.metadata?.user_agent === "string"
      ? row.metadata.user_agent.toLowerCase()
      : "";

  if (ua.includes("ipad") || ua.includes("tablet")) return "Tablet";
  if (ua.includes("mobi") || ua.includes("android") || ua.includes("iphone")) {
    return "Mobile";
  }
  return "Desktop";
}

function isPageView(row: AnalyticsEventRow) {
  const eventName = getEventName(row).toLowerCase();
  return (
    eventName.includes("page_view") ||
    eventName === "pageview" ||
    eventName === "view"
  );
}

function isConversion(row: AnalyticsEventRow) {
  const eventName = getEventName(row).toLowerCase();

  return [
    "whatsapp",
    "quote",
    "lead",
    "contact",
    "domain",
    "newsletter",
    "submit",
    "click_call",
    "cta",
  ].some((key) => eventName.includes(key));
}

function formatDuration(seconds: number) {
  const safeSeconds = Math.max(0, Math.round(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;
  return `${minutes}m ${String(remainingSeconds).padStart(2, "0")}s`;
}

function formatDayLabel(input: string) {
  return new Date(input).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
}

export async function getAnalyticsOverview(): Promise<AnalyticsOverview> {
  const since = new Date();
  since.setDate(since.getDate() - 30);

  const { data, error } = await supabaseServer
    .from("analytics_events")
    .select("*")
    .gte("created_at", since.toISOString())
    .order("created_at", { ascending: true });

  if (error || !data) {
    return {
      totalVisits: 0,
      uniqueVisitors: 0,
      avgSession: "0m 00s",
      conversionEvents: 0,
      topPages: [],
      events: [],
      trafficTrend: [],
      deviceSplit: [
        { label: "Mobile", value: 0 },
        { label: "Desktop", value: 0 },
        { label: "Tablet", value: 0 },
      ],
    };
  }

  const rows = data as AnalyticsEventRow[];

  const pageViews = rows.filter(isPageView);
  const conversions = rows.filter(isConversion);

  const uniqueVisitors = new Set(rows.map(getSessionId)).size;

  const sessions = new Map<string, number[]>();

  rows.forEach((row) => {
    if (!row.created_at) return;

    const sessionId = getSessionId(row);
    const timestamp = new Date(row.created_at).getTime();

    if (!sessions.has(sessionId)) {
      sessions.set(sessionId, []);
    }

    sessions.get(sessionId)!.push(timestamp);
  });

  const sessionDurations: number[] = [];

  sessions.forEach((timestamps) => {
    const sorted = [...timestamps].sort((a, b) => a - b);

    if (sorted.length <= 1) {
      sessionDurations.push(20);
      return;
    }

    const seconds = Math.min(
      60 * 15,
      Math.round((sorted[sorted.length - 1] - sorted[0]) / 1000)
    );

    sessionDurations.push(seconds);
  });

  const avgSessionSeconds =
    sessionDurations.length > 0
      ? sessionDurations.reduce((sum, value) => sum + value, 0) /
        sessionDurations.length
      : 0;

  const pageMap = new Map<string, number>();

  pageViews.forEach((row) => {
    const page = getPagePath(row);
    pageMap.set(page, (pageMap.get(page) || 0) + 1);
  });

  const topPages = Array.from(pageMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([page, views]) => ({ page, views }));

  const eventMap = new Map<string, number>();

  conversions.forEach((row) => {
    const name = getEventName(row)
      .replace(/[_-]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    eventMap.set(name, (eventMap.get(name) || 0) + 1);
  });

  const events = Array.from(eventMap.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([event, total]) => ({ event, total }));

  const deviceMap = new Map<string, number>();

  rows.forEach((row) => {
    const label = getDeviceType(row);
    deviceMap.set(label, (deviceMap.get(label) || 0) + 1);
  });

  const totalDevices =
    Array.from(deviceMap.values()).reduce((sum, value) => sum + value, 0) || 1;

  const deviceSplit = ["Mobile", "Desktop", "Tablet"].map((label) => ({
    label,
    value: Math.round(((deviceMap.get(label) || 0) / totalDevices) * 100),
  }));

  const trendMap = new Map<
    string,
    { label: string; visits: number; conversions: number }
  >();

  const trendStart = new Date();
  trendStart.setDate(trendStart.getDate() - 13);

  for (let i = 0; i < 14; i += 1) {
    const day = new Date(trendStart);
    day.setDate(trendStart.getDate() + i);

    const key = day.toISOString().slice(0, 10);

    trendMap.set(key, {
      label: formatDayLabel(day.toISOString()),
      visits: 0,
      conversions: 0,
    });
  }

  rows.forEach((row) => {
    if (!row.created_at) return;

    const key = row.created_at.slice(0, 10);
    const current = trendMap.get(key);

    if (!current) return;

    if (isPageView(row)) current.visits += 1;
    if (isConversion(row)) current.conversions += 1;
  });

  return {
    totalVisits: pageViews.length,
    uniqueVisitors,
    avgSession: formatDuration(avgSessionSeconds),
    conversionEvents: conversions.length,
    topPages,
    events,
    trafficTrend: Array.from(trendMap.values()),
    deviceSplit,
  };
}