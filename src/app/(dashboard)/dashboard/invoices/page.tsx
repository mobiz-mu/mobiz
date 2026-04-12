"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import StatusSelect from "@/components/dashboard/StatusSelect";

type EditableLineItem = {
  id?: string;
  description: string;
  unit_price: number;
  qty: number;
  amount: number;
  sort_order: number;
};

type Customer = {
  id: string;
  company_name: string | null;
  contact_name: string | null;
};

type Invoice = {
  id: string;
  invoice_number: string;
  customer_id: string | null;
  issue_date: string | null;
  status: string;
  bank_account_key: string | null;
  notes: string | null;
  terms: string | null;
  sub_total: number;
  discount_percent: number;
  discount_amount: number;
  total_amount: number;
  balance_due: number;
};

const emptyItem = (): EditableLineItem => ({
  description: "",
  unit_price: 0,
  qty: 1,
  amount: 0,
  sort_order: 0,
});

const initialForm = {
  id: "",
  customer_id: "",
  issue_date: new Date().toISOString().slice(0, 10),
  status: "draft",
  bank_account_key: "personal_mcb",
  notes: "",
  terms: "In case of cancellation, no refund will be applicable.\nFull payment required.",
  discount_percent: 0,
};

function calculateLineTotal(qty: number, unitPrice: number) {
  return Number(qty || 0) * Number(unitPrice || 0);
}

function calculateSubTotal(items: EditableLineItem[]) {
  return items.reduce((sum, item) => sum + calculateLineTotal(item.qty, item.unit_price), 0);
}

function calculateDiscountAmount(subTotal: number, discountPercent: number) {
  return (subTotal * Number(discountPercent || 0)) / 100;
}

function calculateGrandTotal(subTotal: number, discountAmount: number) {
  return Math.max(0, subTotal - discountAmount);
}

function money(value: number) {
  return `Rs ${Number(value || 0).toLocaleString("en-MU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function getCustomerLabel(customer: Customer) {
  return customer.company_name || customer.contact_name || "Unnamed Customer";
}

function formatDate(value?: string | null) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-MU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function InvoicesPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [form, setForm] = useState(initialForm);
  const [items, setItems] = useState<EditableLineItem[]>([emptyItem()]);
  const [loading, setLoading] = useState(false);

  const subTotal = useMemo(() => calculateSubTotal(items), [items]);
  const discountAmount = useMemo(
    () => calculateDiscountAmount(subTotal, form.discount_percent),
    [subTotal, form.discount_percent]
  );
  const totalAmount = useMemo(
    () => calculateGrandTotal(subTotal, discountAmount),
    [subTotal, discountAmount]
  );

  async function loadCustomers() {
    const { data, error } = await supabaseBrowser
      .from("customers")
      .select("id, company_name, contact_name")
      .order("created_at", { ascending: false });

    if (error) {
      alert(`Unable to load customers: ${error.message}`);
      return;
    }

    setCustomers((data as Customer[]) || []);
  }

  async function loadInvoices() {
    const { data, error } = await supabaseBrowser
      .from("invoices")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(`Unable to load invoices: ${error.message}`);
      return;
    }

    setInvoices((data as Invoice[]) || []);
  }

  useEffect(() => {
    void loadCustomers();
    void loadInvoices();
  }, []);

  function updateItem(index: number, patch: Partial<EditableLineItem>) {
    setItems((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const next = { ...item, ...patch };
        next.amount = calculateLineTotal(next.qty, next.unit_price);
        return next;
      })
    );
  }

  function addItem() {
    setItems((prev) => [...prev, { ...emptyItem(), sort_order: prev.length }]);
  }

  function removeItem(index: number) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!form.customer_id) {
      alert("Please select a customer.");
      return;
    }

    if (!items.length || items.every((item) => !item.description.trim())) {
      alert("Please add at least one line item.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        customer_id: form.customer_id || null,
        issue_date: form.issue_date || null,
        status: form.status,
        bank_account_key: form.bank_account_key,
        notes: form.notes || null,
        terms: form.terms || null,
        sub_total: subTotal,
        discount_percent: Number(form.discount_percent || 0),
        discount_amount: discountAmount,
        total_amount: totalAmount,
        balance_due: form.status === "paid" ? 0 : totalAmount,
      };

      let invoiceId = form.id;

      if (form.id) {
        const { error: updateError } = await supabaseBrowser
          .from("invoices")
          .update(payload)
          .eq("id", form.id);

        if (updateError) {
          alert(`Unable to update invoice: ${updateError.message}`);
          return;
        }

        const { error: deleteItemsError } = await supabaseBrowser
          .from("invoice_items")
          .delete()
          .eq("invoice_id", form.id);

        if (deleteItemsError) {
          alert(`Unable to refresh invoice items: ${deleteItemsError.message}`);
          return;
        }
      } else {
        const { data, error: insertError } = await supabaseBrowser
          .from("invoices")
          .insert(payload)
          .select("*")
          .single();

        if (insertError) {
          alert(`Unable to create invoice: ${insertError.message}`);
          return;
        }

        invoiceId = data?.id as string;
      }

      if (invoiceId && items.length) {
        const { error: itemsError } = await supabaseBrowser.from("invoice_items").insert(
          items
            .filter((item) => item.description.trim())
            .map((item, index) => ({
              invoice_id: invoiceId,
              description: item.description,
              unit_price: Number(item.unit_price || 0),
              qty: Number(item.qty || 0),
              amount: calculateLineTotal(item.qty, item.unit_price),
              sort_order: index,
            }))
        );

        if (itemsError) {
          alert(`Unable to save invoice items: ${itemsError.message}`);
          return;
        }
      }

      setForm(initialForm);
      setItems([emptyItem()]);
      await loadInvoices();
    } finally {
      setLoading(false);
    }
  }

  async function editInvoice(item: Invoice) {
    setForm({
      id: item.id,
      customer_id: item.customer_id || "",
      issue_date: item.issue_date || new Date().toISOString().slice(0, 10),
      status: item.status,
      bank_account_key: item.bank_account_key || "personal_mcb",
      notes: item.notes || "",
      terms: item.terms || "",
      discount_percent: Number(item.discount_percent || 0),
    });

    const { data, error } = await supabaseBrowser
      .from("invoice_items")
      .select("*")
      .eq("invoice_id", item.id)
      .order("sort_order", { ascending: true });

    if (error) {
      alert(`Unable to load invoice items: ${error.message}`);
      return;
    }

    setItems(
      ((data as EditableLineItem[]) || []).map((row, index) => ({
        ...row,
        sort_order: index,
        unit_price: Number(row.unit_price || 0),
        qty: Number(row.qty || 0),
        amount: Number(row.amount || 0),
      }))
    );

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="space-y-5">
      <section className="grid gap-5 xl:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:p-5">
          <div className="flex flex-col gap-1">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
              Invoices
            </div>
            <h2 className="text-[1.6rem] font-semibold tracking-tight text-[#071226]">
              {form.id ? "Edit invoice" : "Create invoice"}
            </h2>
          </div>

          <form onSubmit={onSubmit} className="mt-4 grid gap-3">
            <div className="grid gap-3 md:grid-cols-2">
              <select
                value={form.customer_id}
                onChange={(e) => setForm((p) => ({ ...p, customer_id: e.target.value }))}
                className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d1b3d]"
              >
                <option value="">Select customer</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {getCustomerLabel(customer)}
                  </option>
                ))}
              </select>

              <select
                value={form.bank_account_key}
                onChange={(e) => setForm((p) => ({ ...p, bank_account_key: e.target.value }))}
                className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d1b3d]"
              >
                <option value="personal_mcb">MCB - Mr Thasaraden Cluthan</option>
                <option value="mobiz_mcb">MCB - Mobiz</option>
              </select>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="date"
                value={form.issue_date}
                onChange={(e) => setForm((p) => ({ ...p, issue_date: e.target.value }))}
                className="h-11 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0d1b3d]"
              />

              <select
                value={form.status}
                onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
                className="h-11 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0d1b3d]"
              >
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="partial">Partial</option>
                <option value="paid">Paid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>

            <div className="space-y-2">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-slate-200 bg-slate-50/80 p-3"
                >
                  <textarea
                    value={item.description}
                    onChange={(e) => updateItem(index, { description: e.target.value })}
                    placeholder="Line item description"
                    rows={2}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-[#0d1b3d]"
                    required
                  />

                  <div className="mt-2 grid gap-2 sm:grid-cols-3">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.unit_price}
                      onChange={(e) => updateItem(index, { unit_price: Number(e.target.value) })}
                      placeholder="Unit price"
                      className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d1b3d]"
                    />

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.qty}
                      onChange={(e) => updateItem(index, { qty: Number(e.target.value) })}
                      placeholder="Qty"
                      className="h-10 rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none focus:border-[#0d1b3d]"
                    />

                    <div className="flex h-10 items-center rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-[#071226]">
                      {money(item.amount)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="mt-2 text-sm font-medium text-red-600"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addItem}
                className="rounded-full bg-[#0d1b3d] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#071226]"
              >
                Add Line Item
              </button>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <input
                type="number"
                min="0"
                step="0.01"
                value={form.discount_percent}
                onChange={(e) =>
                  setForm((p) => ({ ...p, discount_percent: Number(e.target.value) }))
                }
                placeholder="Discount %"
                className="h-11 rounded-2xl border border-slate-200 px-4 text-sm outline-none focus:border-[#0d1b3d]"
              />

              <div className="flex h-11 items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium text-slate-700">
                Discount: {money(discountAmount)}
              </div>
            </div>

            <textarea
              value={form.notes}
              onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
              placeholder="Notes"
              rows={2}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0d1b3d]"
            />

            <textarea
              value={form.terms}
              onChange={(e) => setForm((p) => ({ ...p, terms: e.target.value }))}
              placeholder="Terms"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[#0d1b3d]"
            />

            <div className="grid gap-2 rounded-[20px] bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] p-4 text-white sm:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-white/65">Sub Total</div>
                <div className="mt-1 text-lg font-semibold">{money(subTotal)}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-white/65">Discount</div>
                <div className="mt-1 text-lg font-semibold">{money(discountAmount)}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.16em] text-white/65">Total</div>
                <div className="mt-1 text-lg font-semibold">{money(totalAmount)}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="rounded-full bg-[#0d1b3d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#071226]">
                {loading ? "Saving..." : form.id ? "Update Invoice" : "Create Invoice"}
              </button>

              {form.id ? (
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setItems([emptyItem()]);
                  }}
                  className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel Edit
                </button>
              ) : null}
            </div>
          </form>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_18px_44px_rgba(15,23,42,0.05)] sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-[1.35rem] font-semibold tracking-tight text-[#071226]">
              Existing Invoices
            </h3>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
              {invoices.length} records
            </span>
          </div>

          <div className="mt-4 space-y-3">
            {invoices.map((item) => (
              <div
                key={item.id}
                className="rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-4 shadow-[0_8px_20px_rgba(15,23,42,0.04)]"
              >
                <div className="flex flex-col gap-3 xl:flex-row xl:items-center xl:justify-between">
                  <div className="min-w-0">
                    <div className="text-lg font-semibold text-[#071226]">
                      {item.invoice_number}
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate-500">
                      <span>Issue: {formatDate(item.issue_date)}</span>
                      <span>Total: {money(item.total_amount)}</span>
                      <span>Balance: {money(item.balance_due)}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <StatusSelect
                      table="invoices"
                      id={item.id}
                      value={item.status}
                      options={["draft", "sent", "partial", "paid", "overdue"]}
                      onDone={loadInvoices}
                    />

                    <Link
                      href={`/dashboard/invoices/${item.id}`}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      Open
                    </Link>

                    <button
                      type="button"
                      onClick={() => editInvoice(item)}
                      className="rounded-full bg-[#0d1b3d] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#071226]"
                    >
                      Edit
                    </button>

                    <Link
                      href={`/dashboard/invoices/${item.id}/print`}
                      target="_blank"
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      Print
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            {!invoices.length ? (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-10 text-center text-sm text-slate-500">
                No invoices yet.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}