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

function validateCustomerPayload(payload: CustomerPayload) {
  const type = payload.customer_type?.trim().toLowerCase();

  if (!type || !["business", "individual"].includes(type)) {
    return {
      valid: false,
      message: "customer_type must be either 'business' or 'individual'.",
    };
  }

  return { valid: true as const };
}

export async function GET() {
  const { data, error } = await supabaseServer
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json(
      { ok: false, message: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    ok: true,
    customers: data || [],
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CustomerPayload;

    const validation = validateCustomerPayload(body);
    if (!validation.valid) {
      return NextResponse.json(
        { ok: false, message: validation.message },
        { status: 400 }
      );
    }

    const payload = {
      customer_type: body.customer_type!.trim().toLowerCase(),
      company_name: normalizeText(body.company_name),
      contact_name: normalizeText(body.contact_name),
      email: normalizeText(body.email)?.toLowerCase() || null,
      phone: normalizeText(body.phone),
      billing_address: normalizeText(body.billing_address),
      brn: normalizeText(body.brn),
      vat_number: normalizeText(body.vat_number),
    };

    const { data, error } = await supabaseServer
      .from("customers")
      .insert(payload)
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