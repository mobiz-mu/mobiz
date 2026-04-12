import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

export async function POST(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const { data: quotation, error: quotationError } = await supabaseServer
    .from("quotations")
    .select("*")
    .eq("id", id)
    .single();

  if (quotationError || !quotation) {
    return NextResponse.json({ ok: false, message: "Quotation not found." }, { status: 404 });
  }

  if (quotation.status !== "approved") {
    return NextResponse.json(
      { ok: false, message: "Only approved quotations can be converted to invoices." },
      { status: 400 }
    );
  }

  const { data: existingInvoice } = await supabaseServer
    .from("invoices")
    .select("id, invoice_number")
    .eq("quotation_id", id)
    .maybeSingle();

  if (existingInvoice) {
    return NextResponse.json({
      ok: true,
      invoice: existingInvoice,
      message: "Invoice already exists for this quotation.",
    });
  }

  const { data: items } = await supabaseServer
    .from("quotation_items")
    .select("*")
    .eq("quotation_id", id)
    .order("sort_order", { ascending: true });

  const { data: invoice, error: invoiceError } = await supabaseServer
    .from("invoices")
    .insert({
      customer_id: quotation.customer_id,
      quotation_id: quotation.id,
      status: "unpaid",
      issue_date: new Date().toISOString().slice(0, 10),
      bank_account_key: quotation.bank_account_key,
      notes: quotation.notes,
      terms: quotation.terms,
      sub_total: quotation.sub_total,
      discount_percent: quotation.discount_percent,
      discount_amount: quotation.discount_amount,
      total_amount: quotation.total_amount,
      balance_due: quotation.total_amount,
      whatsapp_phone: quotation.whatsapp_phone,
    })
    .select("*")
    .single();

  if (invoiceError || !invoice) {
    return NextResponse.json({ ok: false, message: invoiceError?.message || "Invoice creation failed." }, { status: 500 });
  }

  if (items?.length) {
    const invoiceItems = items.map((item) => ({
      invoice_id: invoice.id,
      sort_order: item.sort_order || 0,
      description: item.description,
      unit_price: item.unit_price,
      qty: item.qty,
      amount: item.amount,
    }));

    const { error: itemError } = await supabaseServer.from("invoice_items").insert(invoiceItems);

    if (itemError) {
      return NextResponse.json({ ok: false, message: itemError.message }, { status: 500 });
    }
  }

  await supabaseServer
    .from("quotations")
    .update({ converted_invoice_id: invoice.id })
    .eq("id", quotation.id);

  return NextResponse.json({ ok: true, invoice });
}