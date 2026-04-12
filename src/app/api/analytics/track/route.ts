import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

type AnalyticsPayload = {
  event_name?: string;
  page_path?: string;
  session_id?: string;
  visitor_id?: string;
  device_type?: string;
  metadata?: Record<string, unknown>;
};

function getDeviceType(userAgent: string) {
  const ua = userAgent.toLowerCase();

  if (ua.includes("ipad") || ua.includes("tablet")) return "tablet";
  if (ua.includes("mobi") || ua.includes("android") || ua.includes("iphone")) return "mobile";
  return "desktop";
}

export async function GET() {
  const { count, error } = await supabaseServer
    .from("analytics_events")
    .select("*", { count: "exact", head: true });

  if (error) {
    return NextResponse.json(
      { ok: false, message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    route: "analytics-track",
    totalEvents: count || 0,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as AnalyticsPayload;

    const headers = request.headers;
    const forwardedFor = headers.get("x-forwarded-for");
    const userAgent = headers.get("user-agent") || "";

    const event_name =
      typeof body.event_name === "string" && body.event_name.trim()
        ? body.event_name.trim()
        : "page_view";

    const page_path =
      typeof body.page_path === "string" && body.page_path.trim()
        ? body.page_path.trim()
        : "/";

    const session_id =
      typeof body.session_id === "string" && body.session_id.trim()
        ? body.session_id.trim()
        : null;

    const visitor_id =
      typeof body.visitor_id === "string" && body.visitor_id.trim()
        ? body.visitor_id.trim()
        : null;

    const device_type =
      typeof body.device_type === "string" && body.device_type.trim()
        ? body.device_type.trim().toLowerCase()
        : getDeviceType(userAgent);

    const metadata =
      body.metadata && typeof body.metadata === "object" ? body.metadata : {};

    const payload = {
      event_name,
      page_path,
      session_id,
      visitor_id,
      device_type,
      metadata: {
        ...metadata,
        user_agent: userAgent,
        ip_hint: forwardedFor || null,
      },
    };

    const { data, error } = await supabaseServer
      .from("analytics_events")
      .insert(payload)
      .select("id, event_name, page_path, created_at")
      .single();

    if (error) {
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      route: "analytics-track",
      result: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Invalid analytics payload",
      },
      { status: 400 }
    );
  }
}