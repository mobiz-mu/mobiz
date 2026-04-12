"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { supabaseBrowser } from "@/lib/supabase-client";
import { BANK_ACCOUNTS } from "@/lib/document-config";
import StatusSelect from "@/components/dashboard/StatusSelect";

type Customer = {
  id: string;
  company_name: string | null;
  contact_name: string | null;
  email: string | null;
  phone: string | null;
  billing_address: string | null;
  brn: string | null;
  vat_number: string | null;
};

type Quotation = {
  id: string;
  quotation_number: string;
  customer_id: string | null;
  issue_date: string | null;
  expiry_date: string | null;
  status: string;
  bank_account_key: string | null;
  notes: string | null;
  terms: string | null;
  sub_total: number;
  discount_percent: number;
  discount_amount: number;
  total_amount: number;
  converted_invoice_id: string | null;
};

type QuotationItem = {
  id: string;
  description: string;
  unit_price: number;
  qty: number;
  amount: number;
  sort_order: number;
};

function money(value: number) {
  return `Rs ${Number(value || 0).toLocaleString("en-MU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default function QuotationDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const id = params.id;

  const [quotation, setQuotation] = useState<Quotation | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [items, setItems] = useState<QuotationItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState(false);

  async function loadData() {
    setLoading(true);

    const { data: quotationData } = await supabaseBrowser
      .from("quotations")
      .select("*")
      .eq("id", id)
      .single();

    if (!quotationData) {
      setLoading(false);
      return;
    }

    setQuotation(quotationData as Quotation);

    const [{ data: customerData }, { data: itemsData }] = await Promise.all([
      quotationData.customer_id
        ? supabaseBrowser
            .from("customers")
            .select("*")
            .eq("id", quotationData.customer_id)
            .single()
        : Promise.resolve({ data: null }),
      supabaseBrowser
        .from("quotation_items")
        .select("*")
        .eq("quotation_id", id)
        .order("sort_order", { ascending: true }),
    ]);

    setCustomer((customerData as Customer) || null);
    setItems(
      ((itemsData as QuotationItem[]) || []).map((item) => ({
        ...item,
        unit_price: Number(item.unit_price || 0),
        qty: Number(item.qty || 0),
        amount: Number(item.amount || 0),
      }))
    );

    setLoading(false);
  }

  useEffect(() => {
    void loadData();
  }, [id]);

  const bank = useMemo(() => {
    if (!quotation?.bank_account_key) return BANK_ACCOUNTS.personal_mcb;
    return (
      BANK_ACCOUNTS[quotation.bank_account_key as keyof typeof BANK_ACCOUNTS] ||
      BANK_ACCOUNTS.personal_mcb
    );
  }, [quotation]);

  async function approveQuotation() {
    if (!quotation) return;

    setWorking(true);
    try {
      const res = await fetch(`/api/quotations/${quotation.id}/approve`, {
        method: "POST",
      });

      const json = await res.json();
      if (!json.ok) {
        alert(json.message || "Unable to approve quotation.");
        return;
      }

      await loadData();
    } finally {
      setWorking(false);
    }
  }

  async function convertToInvoice() {
    if (!quotation) return;

    setWorking(true);
    try {
      const res = await fetch(`/api/quotations/${quotation.id}/convert`, {
        method: "POST",
      });

      const json = await res.json();
      if (!json.ok) {
        alert(json.message || "Unable to convert quotation.");
        return;
      }

      if (json.invoice?.id) {
        router.push(`/dashboard/invoices/${json.invoice.id}`);
        return;
      }

      await loadData();
    } finally {
      setWorking(false);
    }
  }

  if (loading) {
    return <main className="p-6 text-sm text-slate-500">Loading quotation...</main>;
  }

  if (!quotation) {
    return <main className="p-6 text-sm text-slate-500">Quotation not found.</main>;
  }

  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Quotation Detail
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#071226]">
              {quotation.quotation_number}
            </h1>
            <div className="mt-3 text-sm text-slate-600">
              Status: {quotation.status} • Issue Date: {quotation.issue_date || "—"} • Expiry Date:{" "}
              {quotation.expiry_date || "—"}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatusSelect
              table="quotations"
              id={quotation.id}
              value={quotation.status}
              options={["draft", "sent", "approved", "converted"]}
              onDone={loadData}
            />

            <Link
              href={`/dashboard/quotations/${quotation.id}/print`}
              target="_blank"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Print / PDF
            </Link>

            <button
              type="button"
              onClick={approveQuotation}
              disabled={working || quotation.status === "approved" || quotation.status === "converted"}
              className="rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0d1b3d] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {working ? "Working..." : "Approve"}
            </button>

            <button
              type="button"
              onClick={convertToInvoice}
              disabled={working || quotation.status !== "approved"}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
            >
              Convert to Invoice
            </button>

            <Link
              href="/dashboard/quotations"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Back
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
          <div className="text-sm text-slate-500">Sub Total</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
            {money(quotation.sub_total)}
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
          <div className="text-sm text-slate-500">Discount</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
            {money(quotation.discount_amount)}
          </div>
        </div>

        <div className="rounded-[24px] border border-[#ead9a8] bg-[linear-gradient(180deg,#fffdf7_0%,#fff8e8_100%)] p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
          <div className="text-sm text-slate-500">Discount %</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
            {Number(quotation.discount_percent || 0).toFixed(2)}%
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] p-5 text-white shadow-[0_12px_32px_rgba(7,18,38,0.18)]">
          <div className="text-sm text-white/70">Total</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight">
            {money(quotation.total_amount)}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-semibold text-[#071226]">Quotation Items</h2>

          <div className="mt-5 space-y-3">
            {items.length ? (
              items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[22px] border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="text-base font-semibold text-[#071226]">
                    {item.description}
                  </div>
                  <div className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-3">
                    <div>Unit Price: {money(item.unit_price)}</div>
                    <div>Qty: {Number(item.qty).toLocaleString("en-MU")}</div>
                    <div>Amount: {money(item.amount)}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
                No quotation items found.
              </div>
            )}
          </div>
        </div>

        <div className="space-y-6">
          <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            <h2 className="text-xl font-semibold text-[#071226]">Customer</h2>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div><strong>Name:</strong> {customer?.company_name || customer?.contact_name || "—"}</div>
              <div><strong>Contact:</strong> {customer?.contact_name || "—"}</div>
              <div><strong>Email:</strong> {customer?.email || "—"}</div>
              <div><strong>Phone:</strong> {customer?.phone || "—"}</div>
              <div><strong>Address:</strong> {customer?.billing_address || "—"}</div>
              <div><strong>BRN:</strong> {customer?.brn || "—"}</div>
              <div><strong>VAT:</strong> {customer?.vat_number || "—"}</div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            <h2 className="text-xl font-semibold text-[#071226]">Bank Account</h2>

            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <div><strong>Bank:</strong> {bank.bankName}</div>
              <div><strong>Account Name:</strong> {bank.accountName}</div>
              <div><strong>Account Number:</strong> {bank.accountNumber}</div>
            </div>
          </section>

          <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
            <h2 className="text-xl font-semibold text-[#071226]">Notes & Terms</h2>

            <div className="mt-4 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 whitespace-pre-wrap">
                {quotation.notes || "No notes added."}
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 whitespace-pre-wrap">
                {quotation.terms || "No terms added."}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}