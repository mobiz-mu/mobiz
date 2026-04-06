import { chromium } from "playwright";
import { buildProposalHtml } from "@/lib/pdf";
import type { ProposalDoc } from "@/types/documents";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const doc = (await req.json()) as ProposalDoc;
  const html = buildProposalHtml(doc);

  const browser = await chromium.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "12mm",
        right: "10mm",
        bottom: "12mm",
        left: "10mm",
      },
    });

    const pdfBytes = new Uint8Array(pdf);

    return new Response(pdfBytes, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${doc.proposalNumber}.pdf"`,
      },
    });
  } finally {
    await browser.close();
  }
}