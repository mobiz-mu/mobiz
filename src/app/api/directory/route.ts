import { NextResponse } from "next/server";
import {
  createBusinessSubmission,
  validateBusinessSubmission,
  type BusinessSubmissionInput,
} from "@/lib/directory";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<BusinessSubmissionInput>;
    const validation = validateBusinessSubmission(body);

    if (!validation.valid) {
      return NextResponse.json(
        { ok: false, message: validation.message },
        { status: 400 }
      );
    }

    const saved = await createBusinessSubmission(body as BusinessSubmissionInput);

    return NextResponse.json({
      ok: true,
      message:
        "Your business has been submitted and will appear after review.",
      data: saved,
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "Could not submit your business. Please try again." },
      { status: 400 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, message: "Directory endpoint ready." });
}
