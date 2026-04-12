import { NextRequest, NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";

type CustomerPayload = {
  customer_type?: string;
  company_name?: string | null;
  contact_name?: string | null;
  email?: string | null;
  phone?: string | null;
  billing_address?: string | null;
  brn?: string | null;
  vat_number?: string | null;
};

function normalizeText(value?: string | null) {
  const cleaned = value?.trim();
  return cleaned ? cleaned : null;
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const { data, error } = await supabaseServer
    .from("customers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json(
      { ok: false, message: error.message },
      { status: 404 }
    );
  }

  return NextResponse.json({
    ok: true,
    customer: data,
  });
}

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  try {
    const body = (await request.json()) as CustomerPayload;

    const payload = {
      ...(body.customer_type ? { customer_type: body.customer_type.trim().toLowerCase() } : {}),
      ...(body.company_name !== undefined ? { company_name: normalizeText(body.company_name) } : {}),
      ...(body.contact_name !== undefined ? { contact_name: normalizeText(body.contact_name) } : {}),
      ...(body.email !== undefined ? { email: normalizeText(body.email)?.toLowerCase() || null } : {}),
      ...(body.phone !== undefined ? { phone: normalizeText(body.phone) } : {}),
      ...(body.billing_address !== undefined ? { billing_address: normalizeText(body.billing_address) } : {}),
      ...(body.brn !== undefined ? { brn: normalizeText(body.brn) } : {}),
      ...(body.vat_number !== undefined ? { vat_number: normalizeText(body.vat_number) } : {}),
    };

    const { data, error } = await supabaseServer
      .from("customers")
      .update(payload)
      .eq("id", id)
      .select("*")
      .single();

    if (error) {
      return NextResponse.json(
        { ok: false, message: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      ok: true,
      customer: data,
    });
  } catch (error) {
    return NextResponse.json(
      {
        ok: false,
        message: error instanceof Error ? error.message : "Invalid request body.",
      },
      { status: 400 }
    );
  }
}

export async function DELETE(
  _request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;

  const { error } = await supabaseServer
    .from("customers")
    .delete()
    .eq("id", id);

  if (error) {
    return NextResponse.json(
      { ok: false, message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    deleted: true,
  });
}