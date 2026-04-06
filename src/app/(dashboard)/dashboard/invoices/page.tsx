"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import StatusSelect from "@/components/dashboard/StatusSelect";
import {
  EditableLineItem,
  calculateBalance,
  calculateGrandTotal,
  calculateLineTotal,
  calculateSubtotal,
} from "@/lib/document-utils";

type Customer = {
  id: string;
  company_name: string | null;
  contact_name: string | null;
};

type Invoice = {
  id: string;
  invoice_number: string;
  customer_id: string | null;
  issue_date: string;
  due_date: string | null;
  status: string;
  discount_amount: number;
  tax_amount: number;
  amount_paid: number;
  notes: string | null;
  payment_instructions: string | null;
  subtotal?: number;
  total_amount?: number;
  balance_due?: number;
};

const emptyItem = (): EditableLineItem => ({
  title: "",
  description: "",
  quantity: 1,
  unit_price: 0,
  line_total: 0,
  sort_order: 0,
});

const initialForm = {
  id: "",
  invoice_number: "",
  customer_id: "",
  issue_date: new Date().toISOString().slice(0, 10),
  due_date: "",
  status: "draft",
  discount_amount: 0,
  tax_amount: 0,
  amount_paid: 0,
  notes: "",
  payment_instructions: "",
};

export default function InvoicesPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [form, setForm] = useState(initialForm);
  const [items, setItems] = useState<EditableLineItem[]>([emptyItem()]);
  const [loading, setLoading] = useState(false);

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);
  const totalAmount = useMemo(
    () => calculateGrandTotal(subtotal, form.discount_amount, form.tax_amount),
    [subtotal, form.discount_amount, form.tax_amount]
  );
  const balanceDue = useMemo(
    () => calculateBalance(totalAmount, form.amount_paid),
    [totalAmount, form.amount_paid]
  );

  async function loadCustomers() {
    const { data } = await supabaseBrowser
      .from("customers")
      .select("id, company_name, contact_name")
      .order("created_at", { ascending: false });

    setCustomers((data as Customer[]) || []);
  }

  async function loadInvoices() {
    const { data } = await supabaseBrowser
      .from("invoices")
      .select("*")
      .order("created_at", { ascending: false });

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
        next.line_total = calculateLineTotal(next.quantity, next.unit_price);
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
    setLoading(true);

    try {
      const payload = {
        invoice_number: form.invoice_number,
        customer_id: form.customer_id || null,
        issue_date: form.issue_date,
        due_date: form.due_date || null,
        status: form.status,
        discount_amount: Number(form.discount_amount || 0),
        tax_amount: Number(form.tax_amount || 0),
        subtotal,
        total_amount: totalAmount,
        amount_paid: Number(form.amount_paid || 0),
        balance_due: balanceDue,
        notes: form.notes || null,
        payment_instructions: form.payment_instructions || null,
      };

      let invoiceId = form.id;

      if (form.id) {
        await supabaseBrowser.from("invoices").update(payload).eq("id", form.id);
        await supabaseBrowser.from("invoice_items").delete().eq("invoice_id", form.id);
      } else {
        const { data } = await supabaseBrowser
          .from("invoices")
          .insert(payload)
          .select()
          .single();

        invoiceId = data?.id as string;
      }

      if (invoiceId && items.length) {
        await supabaseBrowser.from("invoice_items").insert(
          items.map((item, index) => ({
            invoice_id: invoiceId,
            title: item.title,
            description: item.description || null,
            quantity: item.quantity,
            unit_price: item.unit_price,
            line_total: calculateLineTotal(item.quantity, item.unit_price),
            sort_order: index,
          }))
        );
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
      invoice_number: item.invoice_number,
      customer_id: item.customer_id || "",
      issue_date: item.issue_date,
      due_date: item.due_date || "",
      status: item.status,
      discount_amount: Number(item.discount_amount || 0),
      tax_amount: Number(item.tax_amount || 0),
      amount_paid: Number(item.amount_paid || 0),
      notes: item.notes || "",
      payment_instructions: item.payment_instructions || "",
    });

    const { data } = await supabaseBrowser
      .from("invoice_items")
      .select("*")
      .eq("invoice_id", item.id)
      .order("sort_order", { ascending: true });

    setItems(
      (data as EditableLineItem[])?.map((row, index) => ({
        ...row,
        sort_order: index,
        quantity: Number(row.quantity),
        unit_price: Number(row.unit_price),
        line_total: Number(row.line_total),
      })) || [emptyItem()]
    );
  }

  async function previewInvoicePdf(item: Invoice) {
    const { data: customer } = item.customer_id
      ? await supabaseBrowser
          .from("customers")
          .select("*")
          .eq("id", item.customer_id)
          .single()
      : { data: null };

    const { data: invoiceItems } = await supabaseBrowser
      .from("invoice_items")
      .select("*")
      .eq("invoice_id", item.id)
      .order("sort_order", { ascending: true });

    const res = await fetch("/api/documents/invoice/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        invoiceNumber: item.invoice_number,
        issueDate: item.issue_date,
        dueDate: item.due_date || undefined,
        customer: {
          companyName: customer?.company_name || "",
          contactName: customer?.contact_name || "",
          email: customer?.email || "",
          phone: customer?.phone || "",
          billingAddress: customer?.billing_address || "",
        },
        items: (invoiceItems || []).map((line) => ({
          title: line.title,
          description: line.description || "",
          quantity: Number(line.quantity),
          unitPrice: Number(line.unit_price),
          lineTotal: Number(line.line_total),
        })),
        subtotal: Number(item.subtotal || 0),
        discountAmount: Number(item.discount_amount || 0),
        taxAmount: Number(item.tax_amount || 0),
        totalAmount: Number(item.total_amount || 0),
        amountPaid: Number(item.amount_paid || 0),
        balanceDue: Number(item.balance_due || 0),
        notes: item.notes || "",
        paymentInstructions: item.payment_instructions || "",
      }),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  return (
    <main className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Invoices
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Create and edit invoices
          </h2>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.invoice_number}
                onChange={(e) =>
                  setForm((p) => ({ ...p, invoice_number: e.target.value }))
                }
                placeholder="Invoice number"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
                required
              />
              <select
                value={form.customer_id}
                onChange={(e) =>
                  setForm((p) => ({ ...p, customer_id: e.target.value }))
                }
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              >
                <option value="">Select customer</option>
                {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.company_name ||
                      customer.contact_name ||
                      "Unnamed Customer"}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <input
                type="date"
                value={form.issue_date}
                onChange={(e) =>
                  setForm((p) => ({ ...p, issue_date: e.target.value }))
                }
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <input
                type="date"
                value={form.due_date}
                onChange={(e) =>
                  setForm((p) => ({ ...p, due_date: e.target.value }))
                }
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <select
                value={form.status}
                onChange={(e) =>
                  setForm((p) => ({ ...p, status: e.target.value }))
                }
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              >
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="paid">Paid</option>
                <option value="partial">Partial</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>

            <div className="space-y-3">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 p-4"
                >
                  <div className="grid gap-3 md:grid-cols-2">
                    <input
                      value={item.title}
                      onChange={(e) =>
                        updateItem(index, { title: e.target.value })
                      }
                      placeholder="Item title"
                      className="h-11 rounded-xl border border-slate-200 px-4 text-sm"
                      required
                    />
                    <input
                      value={item.description || ""}
                      onChange={(e) =>
                        updateItem(index, { description: e.target.value })
                      }
                      placeholder="Description"
                      className="h-11 rounded-xl border border-slate-200 px-4 text-sm"
                    />
                  </div>

                  <div className="mt-3 grid gap-3 md:grid-cols-3">
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.quantity}
                      onChange={(e) =>
                        updateItem(index, { quantity: Number(e.target.value) })
                      }
                      className="h-11 rounded-xl border border-slate-200 px-4 text-sm"
                    />
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.unit_price}
                      onChange={(e) =>
                        updateItem(index, { unit_price: Number(e.target.value) })
                      }
                      className="h-11 rounded-xl border border-slate-200 px-4 text-sm"
                    />
                    <div className="flex h-11 items-center rounded-xl border border-slate-200 px-4 text-sm font-medium text-slate-700">
                      Line Total: Rs {item.line_total.toFixed(2)}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => removeItem(index)}
                    className="mt-3 text-sm font-medium text-red-600"
                  >
                    Remove item
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={addItem}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700"
              >
                Add Line Item
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <input
                type="number"
                step="0.01"
                value={form.discount_amount}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    discount_amount: Number(e.target.value),
                  }))
                }
                placeholder="Discount"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <input
                type="number"
                step="0.01"
                value={form.tax_amount}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    tax_amount: Number(e.target.value),
                  }))
                }
                placeholder="Tax"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <input
                type="number"
                step="0.01"
                value={form.amount_paid}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    amount_paid: Number(e.target.value),
                  }))
                }
                placeholder="Amount paid"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
            </div>

            <textarea
              value={form.notes}
              onChange={(e) =>
                setForm((p) => ({ ...p, notes: e.target.value }))
              }
              placeholder="Notes"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <textarea
              value={form.payment_instructions}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  payment_instructions: e.target.value,
                }))
              }
              placeholder="Payment instructions"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div>Subtotal: Rs {subtotal.toFixed(2)}</div>
              <div>Discount: Rs {Number(form.discount_amount).toFixed(2)}</div>
              <div>Tax: Rs {Number(form.tax_amount).toFixed(2)}</div>
              <div>Total: Rs {totalAmount.toFixed(2)}</div>
              <div>Paid: Rs {Number(form.amount_paid).toFixed(2)}</div>
              <div className="mt-2 text-base font-semibold text-[#071226]">
                Balance Due: Rs {balanceDue.toFixed(2)}
              </div>
            </div>

            <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white">
              {loading
                ? "Saving..."
                : form.id
                ? "Update Invoice"
                : "Create Invoice"}
            </button>
          </form>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">
            Existing Invoices
          </h3>

          <div className="mt-5 space-y-4">
            {invoices.map((item) => (
              <div
                key={item.id}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-lg font-semibold text-[#071226]">
                  {item.invoice_number}
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Issue Date: {item.issue_date}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <StatusSelect
                    table="invoices"
                    id={item.id}
                    value={item.status}
                    options={["draft", "sent", "partial", "paid", "overdue"]}
                    onDone={loadInvoices}
                  />

                  <button
                    type="button"
                    onClick={() => editInvoice(item)}
                    className="rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white"
                  >
                    Edit
                  </button>

                  <a
                    href={`/dashboard/invoices/${item.id}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    Open
                  </a>

                  <button
                    type="button"
                    onClick={() => previewInvoicePdf(item)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    PDF Preview
                  </button>
                </div>
              </div>
            ))}

            {!invoices.length ? (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
                No invoices yet.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}