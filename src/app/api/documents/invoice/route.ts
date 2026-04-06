import { NextResponse } from "next/server";
import { buildInvoiceHtml } from "@/lib/pdf";
import type { InvoiceDoc } from "@/types/documents";

export async function POST(req: Request) {
  const doc = (await req.json()) as InvoiceDoc;
  const html = buildInvoiceHtml(doc);

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}