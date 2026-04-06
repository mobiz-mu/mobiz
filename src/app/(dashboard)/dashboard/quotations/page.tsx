"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import StatusSelect from "@/components/dashboard/StatusSelect";
import {
  EditableLineItem,
  calculateGrandTotal,
  calculateLineTotal,
  calculateSubtotal,
} from "@/lib/document-utils";

type Customer = {
  id: string;
  company_name: string | null;
  contact_name: string | null;
};

type Quotation = {
  id: string;
  quotation_number: string;
  customer_id: string | null;
  issue_date: string;
  expiry_date: string | null;
  status: string;
  discount_amount: number;
  tax_amount: number;
  notes: string | null;
  terms: string | null;
  subtotal?: number;
  total_amount?: number;
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
  quotation_number: "",
  customer_id: "",
  issue_date: new Date().toISOString().slice(0, 10),
  expiry_date: "",
  status: "draft",
  discount_amount: 0,
  tax_amount: 0,
  notes: "",
  terms: "",
};

export default function QuotationsPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [quotations, setQuotations] = useState<Quotation[]>([]);
  const [form, setForm] = useState(initialForm);
  const [items, setItems] = useState<EditableLineItem[]>([emptyItem()]);
  const [loading, setLoading] = useState(false);

  const subtotal = useMemo(() => calculateSubtotal(items), [items]);
  const totalAmount = useMemo(
    () => calculateGrandTotal(subtotal, form.discount_amount, form.tax_amount),
    [subtotal, form.discount_amount, form.tax_amount]
  );

  async function loadCustomers() {
    const { data } = await supabaseBrowser
      .from("customers")
      .select("id, company_name, contact_name")
      .order("created_at", { ascending: false });

    setCustomers((data as Customer[]) || []);
  }

  async function previewQuotationPdf(item: Quotation) {
    const { data: customer } = item.customer_id
      ? await supabaseBrowser
          .from("customers")
          .select("*")
          .eq("id", item.customer_id)
          .single()
      : { data: null };

    const { data: quotationItems } = await supabaseBrowser
      .from("quotation_items")
      .select("*")
      .eq("quotation_id", item.id)
      .order("sort_order", { ascending: true });

    const res = await fetch("/api/documents/quotation/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quotationNumber: item.quotation_number,
        issueDate: item.issue_date,
        expiryDate: item.expiry_date || undefined,
        customer: {
          companyName: customer?.company_name || "",
          contactName: customer?.contact_name || "",
          email: customer?.email || "",
          phone: customer?.phone || "",
          billingAddress: customer?.billing_address || "",
        },
        items: (quotationItems || []).map((line) => ({
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
        notes: item.notes || "",
        terms: item.terms || "",
      }),
    });

    const blob = await res.blob();
    const url = window.URL.createObjectURL(blob);
    window.open(url, "_blank");
  }

  async function loadQuotations() {
    const { data } = await supabaseBrowser
      .from("quotations")
      .select("*")
      .order("created_at", { ascending: false });

    setQuotations((data as Quotation[]) || []);
  }

  useEffect(() => {
    void loadCustomers();
    void loadQuotations();
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
        quotation_number: form.quotation_number,
        customer_id: form.customer_id || null,
        issue_date: form.issue_date,
        expiry_date: form.expiry_date || null,
        status: form.status,
        discount_amount: Number(form.discount_amount || 0),
        tax_amount: Number(form.tax_amount || 0),
        subtotal,
        total_amount: totalAmount,
        notes: form.notes || null,
        terms: form.terms || null,
      };

      let quotationId = form.id;

      if (form.id) {
        await supabaseBrowser
          .from("quotations")
          .update(payload)
          .eq("id", form.id);

        await supabaseBrowser
          .from("quotation_items")
          .delete()
          .eq("quotation_id", form.id);
      } else {
        const { data } = await supabaseBrowser
          .from("quotations")
          .insert(payload)
          .select()
          .single();

        quotationId = data?.id as string;
      }

      if (quotationId && items.length) {
        await supabaseBrowser.from("quotation_items").insert(
          items.map((item, index) => ({
            quotation_id: quotationId,
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
      await loadQuotations();
    } finally {
      setLoading(false);
    }
  }

  async function editQuotation(item: Quotation) {
    setForm({
      id: item.id,
      quotation_number: item.quotation_number,
      customer_id: item.customer_id || "",
      issue_date: item.issue_date,
      expiry_date: item.expiry_date || "",
      status: item.status,
      discount_amount: Number(item.discount_amount || 0),
      tax_amount: Number(item.tax_amount || 0),
      notes: item.notes || "",
      terms: item.terms || "",
    });

    const { data } = await supabaseBrowser
      .from("quotation_items")
      .select("*")
      .eq("quotation_id", item.id)
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

  async function convertToInvoice(quotationId: string) {
    const { data: quotation } = await supabaseBrowser
      .from("quotations")
      .select("*")
      .eq("id", quotationId)
      .single();

    const { data: quoteItems } = await supabaseBrowser
      .from("quotation_items")
      .select("*")
      .eq("quotation_id", quotationId)
      .order("sort_order", { ascending: true });

    if (!quotation) return;

    const invoiceNumber = `INV-${Date.now()}`;

    const { data: invoice } = await supabaseBrowser
      .from("invoices")
      .insert({
        invoice_number: invoiceNumber,
        customer_id: quotation.customer_id,
        quotation_id: quotation.id,
        issue_date: new Date().toISOString().slice(0, 10),
        due_date: quotation.expiry_date,
        status: "draft",
        currency: "MUR",
        subtotal: quotation.subtotal,
        discount_amount: quotation.discount_amount,
        tax_amount: quotation.tax_amount,
        total_amount: quotation.total_amount,
        amount_paid: 0,
        balance_due: quotation.total_amount,
        notes: quotation.notes,
        payment_instructions: null,
      })
      .select()
      .single();

    if (invoice?.id && quoteItems?.length) {
      await supabaseBrowser.from("invoice_items").insert(
        quoteItems.map((item) => ({
          invoice_id: invoice.id,
          title: item.title,
          description: item.description,
          quantity: item.quantity,
          unit_price: item.unit_price,
          line_total: item.line_total,
          sort_order: item.sort_order,
        }))
      );
    }

    await supabaseBrowser
      .from("quotations")
      .update({ status: "converted" })
      .eq("id", quotationId);

    await loadQuotations();
    alert("Quotation converted to invoice.");
  }

  return (
    <main className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Quotations
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Create and edit quotations
          </h2>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.quotation_number}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    quotation_number: e.target.value,
                  }))
                }
                placeholder="Quotation number"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
                required
              />

              <select
                value={form.customer_id}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    customer_id: e.target.value,
                  }))
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
                  setForm((p) => ({
                    ...p,
                    issue_date: e.target.value,
                  }))
                }
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />

              <input
                type="date"
                value={form.expiry_date}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    expiry_date: e.target.value,
                  }))
                }
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />

              <select
                value={form.status}
                onChange={(e) =>
                  setForm((p) => ({
                    ...p,
                    status: e.target.value,
                  }))
                }
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              >
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="approved">Approved</option>
                <option value="converted">Converted</option>
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
                        updateItem(index, {
                          quantity: Number(e.target.value),
                        })
                      }
                      placeholder="Qty"
                      className="h-11 rounded-xl border border-slate-200 px-4 text-sm"
                    />

                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={item.unit_price}
                      onChange={(e) =>
                        updateItem(index, {
                          unit_price: Number(e.target.value),
                        })
                      }
                      placeholder="Unit price"
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

            <div className="grid gap-4 md:grid-cols-2">
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
                placeholder="Discount amount"
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
                placeholder="Tax amount"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
            </div>

            <textarea
              value={form.notes}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  notes: e.target.value,
                }))
              }
              placeholder="Notes"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <textarea
              value={form.terms}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  terms: e.target.value,
                }))
              }
              placeholder="Terms"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
              <div>Subtotal: Rs {subtotal.toFixed(2)}</div>
              <div>
                Discount: Rs {Number(form.discount_amount).toFixed(2)}
              </div>
              <div>Tax: Rs {Number(form.tax_amount).toFixed(2)}</div>
              <div className="mt-2 text-base font-semibold text-[#071226]">
                Total: Rs {totalAmount.toFixed(2)}
              </div>
            </div>

            <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white">
              {loading
                ? "Saving..."
                : form.id
                ? "Update Quotation"
                : "Create Quotation"}
            </button>
          </form>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">
            Existing Quotations
          </h3>

          <div className="mt-5 space-y-4">
            {quotations.map((item) => (
              <div
                key={item.id}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-lg font-semibold text-[#071226]">
                  {item.quotation_number}
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Issue Date: {item.issue_date}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <StatusSelect
                    table="quotations"
                    id={item.id}
                    value={item.status}
                    options={["draft", "sent", "approved", "converted"]}
                    onDone={loadQuotations}
                  />

                  <button
                    type="button"
                    onClick={() => previewQuotationPdf(item)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    PDF Preview
                  </button>

                  <a
                    href={`/dashboard/quotations/${item.id}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    Open
                  </a>

                  <button
                    type="button"
                    onClick={() => editQuotation(item)}
                    className="rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white"
                  >
                    Edit
                  </button>

                  <button
                    type="button"
                    onClick={() => convertToInvoice(item.id)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    Convert to Invoice
                  </button>
                </div>
              </div>
            ))}

            {!quotations.length ? (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
                No quotations yet.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}