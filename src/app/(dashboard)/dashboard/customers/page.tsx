"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";

type Customer = {
  id: string;
  customer_type: string;
  company_name: string | null;
  contact_name: string | null;
  email: string | null;
  phone: string | null;
  billing_address: string | null;
};

const initialForm = {
  id: "",
  customer_type: "business",
  company_name: "",
  contact_name: "",
  email: "",
  phone: "",
  billing_address: "",
};

export default function CustomersPage() {
  const [items, setItems] = useState<Customer[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  async function loadCustomers() {
    const { data } = await supabaseBrowser
      .from("customers")
      .select("*")
      .order("created_at", { ascending: false });

    setItems((data as Customer[]) || []);
  }

  useEffect(() => {
    void loadCustomers();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        customer_type: form.customer_type,
        company_name: form.company_name || null,
        contact_name: form.contact_name || null,
        email: form.email || null,
        phone: form.phone || null,
        billing_address: form.billing_address || null,
      };

      if (form.id) {
        await supabaseBrowser.from("customers").update(payload).eq("id", form.id);
      } else {
        await supabaseBrowser.from("customers").insert(payload);
      }

      setForm(initialForm);
      await loadCustomers();
    } finally {
      setLoading(false);
    }
  }

  function editItem(item: Customer) {
    setForm({
      id: item.id,
      customer_type: item.customer_type || "business",
      company_name: item.company_name || "",
      contact_name: item.contact_name || "",
      email: item.email || "",
      phone: item.phone || "",
      billing_address: item.billing_address || "",
    });
  }

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const matchesSearch =
        (item.company_name || "").toLowerCase().includes(search.toLowerCase()) ||
        (item.contact_name || "").toLowerCase().includes(search.toLowerCase()) ||
        (item.email || "").toLowerCase().includes(search.toLowerCase());

      const matchesType =
        typeFilter === "all" ? true : item.customer_type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [items, search, typeFilter]);

  return (
    <main className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Customers
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Create and edit customers
          </h2>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <select
              value={form.customer_type}
              onChange={(e) => setForm((p) => ({ ...p, customer_type: e.target.value }))}
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
            >
              <option value="business">Business</option>
              <option value="individual">Individual</option>
            </select>

            <input
              value={form.company_name}
              onChange={(e) => setForm((p) => ({ ...p, company_name: e.target.value }))}
              placeholder="Company name"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
            />

            <input
              value={form.contact_name}
              onChange={(e) => setForm((p) => ({ ...p, contact_name: e.target.value }))}
              placeholder="Contact name"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="Email"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Phone"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
            </div>

            <textarea
              value={form.billing_address}
              onChange={(e) => setForm((p) => ({ ...p, billing_address: e.target.value }))}
              placeholder="Billing address"
              rows={4}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white">
              {loading ? "Saving..." : form.id ? "Update Customer" : "Create Customer"}
            </button>
          </form>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-xl font-semibold text-[#071226]">Existing Customers</h3>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search customer"
                className="h-11 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="h-11 rounded-2xl border border-slate-200 px-4 text-sm"
              >
                <option value="all">All types</option>
                <option value="business">Business</option>
                <option value="individual">Individual</option>
              </select>
            </div>
          </div>

          <div className="mt-5 space-y-4">
            {filtered.map((item) => (
              <div key={item.id} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-lg font-semibold text-[#071226]">
                  {item.company_name || item.contact_name || "Unnamed Customer"}
                </div>
                <div className="mt-2 text-sm text-slate-600">
                  {item.contact_name || "No contact name"}
                </div>
                <div className="mt-1 text-sm text-slate-500">
                  {item.email || "No email"} {item.phone ? `• ${item.phone}` : ""}
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => editItem(item)}
                    className="rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white"
                  >
                    Edit
                  </button>

                  <a
                    href={`/dashboard/customers/${item.id}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    Open
                  </a>
                </div>
              </div>
            ))}

            {!filtered.length ? (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
                No customers found.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}