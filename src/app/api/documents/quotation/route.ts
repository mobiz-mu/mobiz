import { NextResponse } from "next/server";
import { buildQuotationHtml } from "@/lib/pdf";
import type { QuotationDoc } from "@/types/documents";

export async function POST(req: Request) {
  const doc = (await req.json()) as QuotationDoc;
  const html = buildQuotationHtml(doc);

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}