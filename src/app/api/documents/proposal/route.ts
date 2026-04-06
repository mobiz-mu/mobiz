import { NextResponse } from "next/server";
import { buildProposalHtml } from "@/lib/pdf";
import type { ProposalDoc } from "@/types/documents";

export async function POST(req: Request) {
  const doc = (await req.json()) as ProposalDoc;
  const html = buildProposalHtml(doc);

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}