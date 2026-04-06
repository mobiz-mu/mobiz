"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import StatusSelect from "@/components/dashboard/StatusSelect";

type Customer = {
  id: string;
  company_name: string | null;
  contact_name: string | null;
};

type Proposal = {
  id: string;
  proposal_number: string;
  customer_id: string | null;
  title: string;
  status: string;
  issue_date: string;
  expiry_date: string | null;
  executive_summary: string | null;
  scope_of_work: string | null;
  deliverables: string | null;
  timeline: string | null;
  pricing: string | null;
  terms: string | null;
};

const initialForm = {
  id: "",
  proposal_number: "",
  customer_id: "",
  title: "",
  status: "draft",
  issue_date: new Date().toISOString().slice(0, 10),
  expiry_date: "",
  executive_summary: "",
  scope_of_work: "",
  deliverables: "",
  timeline: "",
  pricing: "",
  terms: "",
};

export default function ProposalsPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [items, setItems] = useState<Proposal[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  async function loadCustomers() {
    const { data } = await supabaseBrowser
      .from("customers")
      .select("id, company_name, contact_name")
      .order("created_at", { ascending: false });

    setCustomers((data as Customer[]) || []);
  }

  async function loadProposals() {
    const { data } = await supabaseBrowser
      .from("proposals")
      .select("*")
      .order("created_at", { ascending: false });

    setItems((data as Proposal[]) || []);
  }

  useEffect(() => {
    void loadCustomers();
    void loadProposals();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        proposal_number: form.proposal_number,
        customer_id: form.customer_id || null,
        title: form.title,
        status: form.status,
        issue_date: form.issue_date,
        expiry_date: form.expiry_date || null,
        executive_summary: form.executive_summary || null,
        scope_of_work: form.scope_of_work || null,
        deliverables: form.deliverables || null,
        timeline: form.timeline || null,
        pricing: form.pricing || null,
        terms: form.terms || null,
      };

      if (form.id) {
        await supabaseBrowser.from("proposals").update(payload).eq("id", form.id);
      } else {
        await supabaseBrowser.from("proposals").insert(payload);
      }

      setForm(initialForm);
      await loadProposals();
    } finally {
      setLoading(false);
    }
  }

  function editItem(item: Proposal) {
    setForm({
      id: item.id,
      proposal_number: item.proposal_number,
      customer_id: item.customer_id || "",
      title: item.title,
      status: item.status,
      issue_date: item.issue_date,
      expiry_date: item.expiry_date || "",
      executive_summary: item.executive_summary || "",
      scope_of_work: item.scope_of_work || "",
      deliverables: item.deliverables || "",
      timeline: item.timeline || "",
      pricing: item.pricing || "",
      terms: item.terms || "",
    });
  }

  async function previewProposalPdf(item: Proposal) {
    const { data: customer } = item.customer_id
      ? await supabaseBrowser
          .from("customers")
          .select("*")
          .eq("id", item.customer_id)
          .single()
      : { data: null };

    const res = await fetch("/api/documents/proposal/pdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        proposalNumber: item.proposal_number,
        issueDate: item.issue_date,
        title: item.title,
        customer: {
          companyName: customer?.company_name || "",
          contactName: customer?.contact_name || "",
          email: customer?.email || "",
          phone: customer?.phone || "",
          billingAddress: customer?.billing_address || "",
        },
        executiveSummary: item.executive_summary || "",
        scopeOfWork: item.scope_of_work || "",
        deliverables: item.deliverables || "",
        timeline: item.timeline || "",
        pricing: item.pricing || "",
        terms: item.terms || "",
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
            Proposals
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Create and edit proposals
          </h2>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.proposal_number}
                onChange={(e) =>
                  setForm((p) => ({ ...p, proposal_number: e.target.value }))
                }
                placeholder="Proposal number"
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

            <input
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              placeholder="Proposal title"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              required
            />

            <div className="grid gap-4 md:grid-cols-3">
              <select
                value={form.status}
                onChange={(e) => setForm((p) => ({ ...p, status: e.target.value }))}
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              >
                <option value="draft">Draft</option>
                <option value="sent">Sent</option>
                <option value="approved">Approved</option>
              </select>
              <input
                type="date"
                value={form.issue_date}
                onChange={(e) => setForm((p) => ({ ...p, issue_date: e.target.value }))}
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <input
                type="date"
                value={form.expiry_date}
                onChange={(e) => setForm((p) => ({ ...p, expiry_date: e.target.value }))}
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
            </div>

            <textarea
              value={form.executive_summary}
              onChange={(e) =>
                setForm((p) => ({ ...p, executive_summary: e.target.value }))
              }
              placeholder="Executive summary"
              rows={4}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />
            <textarea
              value={form.scope_of_work}
              onChange={(e) =>
                setForm((p) => ({ ...p, scope_of_work: e.target.value }))
              }
              placeholder="Scope of work"
              rows={4}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />
            <textarea
              value={form.deliverables}
              onChange={(e) =>
                setForm((p) => ({ ...p, deliverables: e.target.value }))
              }
              placeholder="Deliverables"
              rows={4}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />
            <textarea
              value={form.timeline}
              onChange={(e) => setForm((p) => ({ ...p, timeline: e.target.value }))}
              placeholder="Timeline"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />
            <textarea
              value={form.pricing}
              onChange={(e) => setForm((p) => ({ ...p, pricing: e.target.value }))}
              placeholder="Pricing"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />
            <textarea
              value={form.terms}
              onChange={(e) => setForm((p) => ({ ...p, terms: e.target.value }))}
              placeholder="Terms"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white">
              {loading ? "Saving..." : form.id ? "Update Proposal" : "Create Proposal"}
            </button>
          </form>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">Existing Proposals</h3>

          <div className="mt-5 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
              >
                <div className="text-lg font-semibold text-[#071226]">
                  {item.proposal_number}
                </div>
                <div className="mt-2 text-sm text-slate-600">{item.title}</div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <StatusSelect
                    table="proposals"
                    id={item.id}
                    value={item.status}
                    options={["draft", "sent", "approved"]}
                    onDone={loadProposals}
                  />

                  <button
                    type="button"
                    onClick={() => editItem(item)}
                    className="rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white"
                  >
                    Edit
                  </button>

                  <a
                    href={`/dashboard/proposals/${item.id}`}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    Open
                  </a>

                  <button
                    type="button"
                    onClick={() => previewProposalPdf(item)}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                  >
                    PDF Preview
                  </button>
                </div>
              </div>
            ))}

            {!items.length ? (
              <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
                No proposals yet.
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}