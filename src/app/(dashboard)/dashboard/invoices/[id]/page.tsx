"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
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

type Invoice = {
  id: string;
  invoice_number: string;
  customer_id: string | null;
  quotation_id: string | null;
  issue_date: string | null;
  due_date: string | null;
  status: string;
  bank_account_key: string | null;
  notes: string | null;
  terms: string | null;
  sub_total: number;
  discount_percent: number;
  discount_amount: number;
  total_amount: number;
  balance_due: number;
  whatsapp_phone: string | null;
};

type InvoiceItem = {
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

export default function InvoiceDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const [invoice, setInvoice] = useState<Invoice | null>(null);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [items, setItems] = useState<InvoiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [working, setWorking] = useState(false);

  async function loadData() {
    setLoading(true);

    const { data: invoiceData } = await supabaseBrowser
      .from("invoices")
      .select("*")
      .eq("id", id)
      .single();

    if (!invoiceData) {
      setLoading(false);
      return;
    }

    setInvoice(invoiceData as Invoice);

    const [{ data: customerData }, { data: itemsData }] = await Promise.all([
      invoiceData.customer_id
        ? supabaseBrowser.from("customers").select("*").eq("id", invoiceData.customer_id).single()
        : Promise.resolve({ data: null }),
      supabaseBrowser
        .from("invoice_items")
        .select("*")
        .eq("invoice_id", id)
        .order("sort_order", { ascending: true }),
    ]);

    setCustomer((customerData as Customer) || null);
    setItems(
      ((itemsData as InvoiceItem[]) || []).map((item) => ({
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
    if (!invoice?.bank_account_key) return BANK_ACCOUNTS.personal_mcb;
    return (
      BANK_ACCOUNTS[invoice.bank_account_key as keyof typeof BANK_ACCOUNTS] ||
      BANK_ACCOUNTS.personal_mcb
    );
  }, [invoice]);

  async function markPaid() {
    if (!invoice) return;

    setWorking(true);
    try {
      const res = await fetch(`/api/invoices/${invoice.id}/mark-paid`, {
        method: "POST",
      });
      const json = await res.json();

      if (!json.ok) {
        alert(json.message || "Unable to mark invoice as paid.");
        return;
      }

      await loadData();
    } finally {
      setWorking(false);
    }
  }

  async function sendWhatsApp() {
    if (!invoice) return;

    const res = await fetch(`/api/invoices/${invoice.id}/whatsapp`);
    const json = await res.json();

    if (!json.ok) {
      alert(json.message || "Unable to create WhatsApp link.");
      return;
    }

    window.open(json.whatsappUrl, "_blank");
  }

  if (loading) {
    return <main className="p-6 text-sm text-slate-500">Loading invoice...</main>;
  }

  if (!invoice) {
    return <main className="p-6 text-sm text-slate-500">Invoice not found.</main>;
  }

  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Invoice Detail
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#071226]">
              {invoice.invoice_number}
            </h1>
            <div className="mt-3 text-sm text-slate-600">
              Status: {invoice.status} • Issue Date: {invoice.issue_date || "—"} • Due Date:{" "}
              {invoice.due_date || "—"}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <StatusSelect
              table="invoices"
              id={invoice.id}
              value={invoice.status}
              options={["draft", "sent", "partial", "paid", "overdue"]}
              onDone={loadData}
            />

            <Link
              href={`/dashboard/invoices/${invoice.id}/print`}
              target="_blank"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              Print / PDF
            </Link>

            <button
              type="button"
              onClick={sendWhatsApp}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              Send WhatsApp
            </button>

            <button
              type="button"
              onClick={markPaid}
              disabled={working || invoice.status === "paid"}
              className="rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {working ? "Working..." : "Mark Paid"}
            </button>

            <Link
              href="/dashboard/invoices"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
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
            {money(invoice.sub_total)}
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
          <div className="text-sm text-slate-500">Discount</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
            {money(invoice.discount_amount)}
          </div>
        </div>

        <div className="rounded-[24px] border border-[#ead9a8] bg-[linear-gradient(180deg,#fffdf7_0%,#fff8e8_100%)] p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
          <div className="text-sm text-slate-500">Outstanding</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
            {money(invoice.balance_due)}
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] p-5 text-white shadow-[0_12px_32px_rgba(7,18,38,0.18)]">
          <div className="text-sm text-white/70">Total</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight">
            {money(invoice.total_amount)}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h2 className="text-xl font-semibold text-[#071226]">Invoice Items</h2>

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
                No invoice items found.
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
                {invoice.notes || "No notes added."}
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 whitespace-pre-wrap">
                {invoice.terms || "No terms added."}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}