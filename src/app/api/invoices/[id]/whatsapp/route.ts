import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const { data: invoice } = await supabaseServer
    .from("invoices")
    .select("id, invoice_number, total_amount, whatsapp_phone")
    .eq("id", id)
    .single();

  if (!invoice) {
    return NextResponse.json({ ok: false, message: "Invoice not found." }, { status: 404 });
  }

  const phone = invoice.whatsapp_phone;
  if (!phone) {
    return NextResponse.json(
      { ok: false, message: "No WhatsApp phone is set on this invoice." },
      { status: 400 }
    );
  }

  const origin = request.nextUrl.origin;
  const printUrl = `${origin}/dashboard/invoices/${invoice.id}/print`;

  const message = `Hello, please find your invoice ${invoice.invoice_number} from MoBiz.mu.\nTotal: Rs ${Number(
    invoice.total_amount || 0
  ).toLocaleString("en-MU")}\nView / Print: ${printUrl}`;

  const whatsappUrl = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(
    message
  )}`;

  return NextResponse.json({
    ok: true,
    whatsappUrl,
  });
}