"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import StatCard from "@/components/dashboard/StatCard";

type Customer = {
  id: string;
  customer_type: string;
  company_name: string | null;
  contact_name: string | null;
  email: string | null;
  phone: string | null;
  billing_address: string | null;
  brn: string | null;
  vat_number: string | null;
  created_at?: string | null;
};

const initialForm = {
  id: "",
  customer_type: "business",
  company_name: "",
  contact_name: "",
  email: "",
  phone: "",
  billing_address: "",
  brn: "",
  vat_number: "",
};

function getCustomerDisplayName(item: Customer) {
  if (item.customer_type === "individual") {
    return item.contact_name || "Unnamed Individual";
  }

  return item.company_name || item.contact_name || "Unnamed Business";
}

function getCustomerSubtitle(item: Customer) {
  if (item.customer_type === "individual") {
    return item.email || item.phone || "Individual customer";
  }

  return item.contact_name || "Business customer";
}

function formatDate(value?: string | null) {
  if (!value) return "—";

  return new Date(value).toLocaleDateString("en-MU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function CustomersPage() {
  const [items, setItems] = useState<Customer[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [listLoading, setListLoading] = useState(true);
  const [deleteLoadingId, setDeleteLoadingId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");

  async function loadCustomers() {
    setListLoading(true);

    const { data, error } = await supabaseBrowser
      .from("customers")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Failed to load customers:", error.message);
      setItems([]);
      setListLoading(false);
      return;
    }

    setItems((data as Customer[]) || []);
    setListLoading(false);
  }

  useEffect(() => {
    void loadCustomers();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (form.customer_type === "business" && !form.company_name.trim()) {
      alert("Please enter the company name for a business customer.");
      return;
    }

    if (form.customer_type === "individual" && !form.contact_name.trim()) {
      alert("Please enter the contact name for an individual customer.");
      return;
    }

    setLoading(true);

    try {
      const payload = {
        customer_type: form.customer_type,
        company_name: form.company_name.trim() || null,
        contact_name: form.contact_name.trim() || null,
        email: form.email.trim() || null,
        phone: form.phone.trim() || null,
        billing_address: form.billing_address.trim() || null,
        brn: form.brn.trim() || null,
        vat_number: form.vat_number.trim() || null,
      };

      if (form.id) {
        const { error } = await supabaseBrowser
          .from("customers")
          .update(payload)
          .eq("id", form.id);

        if (error) {
          alert(`Unable to update customer: ${error.message}`);
          return;
        }
      } else {
        const { error } = await supabaseBrowser
          .from("customers")
          .insert(payload);

        if (error) {
          alert(`Unable to create customer: ${error.message}`);
          return;
        }
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
      brn: item.brn || "",
      vat_number: item.vat_number || "",
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function deleteItem(item: Customer) {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${getCustomerDisplayName(item)}"? This action cannot be undone.`
    );

    if (!confirmed) return;

    setDeleteLoadingId(item.id);

    try {
      const { error } = await supabaseBrowser
        .from("customers")
        .delete()
        .eq("id", item.id);

      if (error) {
        alert(`Unable to delete customer: ${error.message}`);
        return;
      }

      if (form.id === item.id) {
        setForm(initialForm);
      }

      await loadCustomers();
    } finally {
      setDeleteLoadingId(null);
    }
  }

  const filtered = useMemo(() => {
    return items.filter((item) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        (item.company_name || "").toLowerCase().includes(query) ||
        (item.contact_name || "").toLowerCase().includes(query) ||
        (item.email || "").toLowerCase().includes(query) ||
        (item.phone || "").toLowerCase().includes(query) ||
        (item.brn || "").toLowerCase().includes(query) ||
        (item.vat_number || "").toLowerCase().includes(query);

      const matchesType =
        typeFilter === "all" ? true : item.customer_type === typeFilter;

      return matchesSearch && matchesType;
    });
  }, [items, search, typeFilter]);

  const businessCount = items.filter((item) => item.customer_type === "business").length;
  const individualCount = items.filter((item) => item.customer_type === "individual").length;

  return (
    <main className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Customers" value={String(items.length)} />
        <StatCard title="Business" value={String(businessCount)} tone="navy" />
        <StatCard title="Individual" value={String(individualCount)} tone="gold" />
        <StatCard title="Visible Results" value={String(filtered.length)} />
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Customers
          </div>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            {form.id ? "Edit customer" : "Create customer"}
          </h2>

          <p className="mt-2 text-sm leading-7 text-slate-600">
            Add premium customer records with contact details, BRN, VAT number, and billing information.
          </p>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <select
              value={form.customer_type}
              onChange={(e) =>
                setForm((p) => ({ ...p, customer_type: e.target.value }))
              }
              className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
            >
              <option value="business">Business</option>
              <option value="individual">Individual</option>
            </select>

            <input
              value={form.company_name}
              onChange={(e) =>
                setForm((p) => ({ ...p, company_name: e.target.value }))
              }
              placeholder={
                form.customer_type === "business"
                  ? "Company name *"
                  : "Company name (optional)"
              }
              className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
            />

            <input
              value={form.contact_name}
              onChange={(e) =>
                setForm((p) => ({ ...p, contact_name: e.target.value }))
              }
              placeholder={
                form.customer_type === "individual"
                  ? "Contact name *"
                  : "Contact name"
              }
              className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.email}
                onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                placeholder="Email"
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
              />
              <input
                value={form.phone}
                onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                placeholder="Phone"
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.brn}
                onChange={(e) => setForm((p) => ({ ...p, brn: e.target.value }))}
                placeholder="BRN"
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
              />
              <input
                value={form.vat_number}
                onChange={(e) =>
                  setForm((p) => ({ ...p, vat_number: e.target.value }))
                }
                placeholder="VAT Number"
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
              />
            </div>

            <textarea
              value={form.billing_address}
              onChange={(e) =>
                setForm((p) => ({ ...p, billing_address: e.target.value }))
              }
              placeholder="Billing address"
              rows={4}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
            />

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(7,18,38,0.12)] transition hover:bg-[#0d1b3d]">
                {loading ? "Saving..." : form.id ? "Update Customer" : "Create Customer"}
              </button>

              {form.id ? (
                <button
                  type="button"
                  onClick={() => setForm(initialForm)}
                  className="rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Cancel Edit
                </button>
              ) : null}
            </div>
          </form>
        </div>

        <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-[#071226]">
                Existing Customers
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Search, filter, view, edit, and delete customer records.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search customer"
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
              />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
              >
                <option value="all">All types</option>
                <option value="business">Business</option>
                <option value="individual">Individual</option>
              </select>
            </div>
          </div>

          <div className="mt-6 grid gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-[26px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-[0_12px_28px_rgba(15,23,42,0.04)]"
              >
                <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <div className="text-[1.6rem] font-semibold tracking-tight text-[#071226]">
                        {getCustomerDisplayName(item)}
                      </div>

                      <span className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700">
                        {item.customer_type === "business" ? "Business" : "Individual"}
                      </span>
                    </div>

                    <div className="mt-1 text-sm text-slate-600">
                      {getCustomerSubtitle(item)}
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 border border-slate-200/80">
                        <div className="font-medium text-[#071226]">Email</div>
                        <div className="mt-1 break-all">{item.email || "—"}</div>
                      </div>

                      <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 border border-slate-200/80">
                        <div className="font-medium text-[#071226]">Phone</div>
                        <div className="mt-1 break-all">{item.phone || "—"}</div>
                      </div>

                      <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 border border-slate-200/80">
                        <div className="font-medium text-[#071226]">BRN</div>
                        <div className="mt-1">{item.brn || "—"}</div>
                      </div>

                      <div className="rounded-2xl bg-white px-4 py-3 text-sm text-slate-600 border border-slate-200/80">
                        <div className="font-medium text-[#071226]">VAT</div>
                        <div className="mt-1">{item.vat_number || "—"}</div>
                      </div>
                    </div>

                    <div className="mt-4 text-xs text-slate-500">
                      Created: {formatDate(item.created_at)}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 xl:justify-end">
                    <Link
                      href={`/dashboard/customers/${item.id}`}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                    >
                      View
                    </Link>

                    <button
                      type="button"
                      onClick={() => editItem(item)}
                      className="rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0d1b3d]"
                    >
                      Edit
                    </button>

                    <button
                      type="button"
                      onClick={() => deleteItem(item)}
                      disabled={deleteLoadingId === item.id}
                      className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      {deleteLoadingId === item.id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {!filtered.length && !listLoading ? (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-10 text-center text-sm text-slate-500">
                No customers found.
              </div>
            ) : null}

            {listLoading ? (
              <div className="text-sm text-slate-500">Loading customers...</div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}