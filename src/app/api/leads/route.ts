import { NextResponse } from "next/server";
import { LeadInput, persistLead, validateLeadPayload } from "@/lib/leads";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<LeadInput>;
    const validation = validateLeadPayload(body);

    if (!validation.valid) {
      return NextResponse.json(
        { ok: false, message: validation.message },
        { status: 400 }
      );
    }

    const saved = await persistLead(body as LeadInput);

    return NextResponse.json({
      ok: true,
      message:
        body.type === "newsletter"
          ? "Newsletter subscription received."
          : "Lead inquiry received successfully.",
      data: saved,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request payload." },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    message: "Leads endpoint ready.",
  });
}