"use client";

import { useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import StatusSelect from "@/components/dashboard/StatusSelect";
import StatCard from "@/components/dashboard/StatCard";

type Lead = {
  id: string;
  full_name: string;
  company_name: string | null;
  email: string;
  phone: string | null;
  service: string;
  message: string;
  status: string;
  created_at: string;
};

function formatDate(value: string) {
  return new Date(value).toLocaleString("en-MU", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function getStatusCount(leads: Lead[], status: string) {
  return leads.filter((lead) => lead.status === status).length;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  async function loadLeads() {
    setLoading(true);

    const { data, error } = await supabaseBrowser
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) {
      setLeads((data as Lead[]) || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    void loadLeads();
  }, []);

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const query = search.trim().toLowerCase();

      const matchesSearch =
        !query ||
        lead.full_name.toLowerCase().includes(query) ||
        (lead.company_name || "").toLowerCase().includes(query) ||
        lead.email.toLowerCase().includes(query) ||
        (lead.phone || "").toLowerCase().includes(query);

      const matchesService =
        serviceFilter === "all" ? true : lead.service === serviceFilter;

      const matchesStatus =
        statusFilter === "all" ? true : lead.status === statusFilter;

      return matchesSearch && matchesService && matchesStatus;
    });
  }, [leads, search, serviceFilter, statusFilter]);

  const services = Array.from(new Set(leads.map((lead) => lead.service))).sort();

  return (
    <main className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Leads" value={String(leads.length)} />
        <StatCard title="New Leads" value={String(getStatusCount(leads, "new"))} tone="gold" />
        <StatCard title="Qualified" value={String(getStatusCount(leads, "qualified"))} />
        <StatCard title="Won Leads" value={String(getStatusCount(leads, "won"))} tone="navy" />
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-6">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Lead Management
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
              Website inquiries and quote requests
            </h2>
            <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-600">
              Monitor contact form submissions, review business inquiries, and update lead status in one organized space.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, company, email, phone"
              className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
            />

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
            >
              <option value="all">All services</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#0d1b3d]"
            >
              <option value="all">All statuses</option>
              <option value="new">New</option>
              <option value="contacted">Contacted</option>
              <option value="qualified">Qualified</option>
              <option value="won">Won</option>
              <option value="lost">Lost</option>
            </select>
          </div>
        </div>

        <div className="mt-6 hidden overflow-x-auto lg:block">
          <table className="w-full min-w-[1200px] border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-xs uppercase tracking-[0.14em] text-slate-500">
                <th className="px-4">Lead</th>
                <th className="px-4">Company</th>
                <th className="px-4">Service</th>
                <th className="px-4">Contact</th>
                <th className="px-4">Message</th>
                <th className="px-4">Created</th>
                <th className="px-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id} className="bg-slate-50">
                  <td className="rounded-l-2xl px-4 py-4">
                    <div className="font-semibold text-[#071226]">{lead.full_name}</div>
                    <div className="mt-1 text-xs text-slate-500">{lead.email}</div>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-700">
                    {lead.company_name || "—"}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-700">
                    {lead.service}
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-700">
                    <div>{lead.email}</div>
                    <div className="mt-1 text-xs text-slate-500">{lead.phone || "—"}</div>
                  </td>

                  <td className="max-w-[280px] px-4 py-4 text-sm text-slate-700">
                    <div className="line-clamp-2">{lead.message || "—"}</div>
                  </td>

                  <td className="px-4 py-4 text-sm text-slate-700">
                    {formatDate(lead.created_at)}
                  </td>

                  <td className="rounded-r-2xl px-4 py-4">
                    <StatusSelect
                      table="leads"
                      id={lead.id}
                      value={lead.status}
                      options={["new", "contacted", "qualified", "won", "lost"]}
                      onDone={loadLeads}
                    />
                  </td>
                </tr>
              ))}

              {!filtered.length && !loading ? (
                <tr>
                  <td colSpan={7} className="px-4 py-10 text-center text-sm text-slate-500">
                    No matching leads found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-4 lg:hidden">
          {filtered.map((lead) => (
            <div
              key={lead.id}
              className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-base font-semibold text-[#071226]">
                    {lead.full_name}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{lead.email}</div>
                </div>

                <div className="min-w-[120px]">
                  <StatusSelect
                    table="leads"
                    id={lead.id}
                    value={lead.status}
                    options={["new", "contacted", "qualified", "won", "lost"]}
                    onDone={loadLeads}
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-2 text-sm text-slate-700">
                <div>
                  <span className="font-medium text-[#071226]">Company:</span>{" "}
                  {lead.company_name || "—"}
                </div>
                <div>
                  <span className="font-medium text-[#071226]">Service:</span>{" "}
                  {lead.service}
                </div>
                <div>
                  <span className="font-medium text-[#071226]">Phone:</span>{" "}
                  {lead.phone || "—"}
                </div>
                <div>
                  <span className="font-medium text-[#071226]">Created:</span>{" "}
                  {formatDate(lead.created_at)}
                </div>
                <div>
                  <span className="font-medium text-[#071226]">Message:</span>{" "}
                  <span className="text-slate-600">{lead.message || "—"}</span>
                </div>
              </div>
            </div>
          ))}

          {!filtered.length && !loading ? (
            <div className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-8 text-center text-sm text-slate-500">
              No matching leads found.
            </div>
          ) : null}
        </div>

        {loading ? (
          <div className="mt-6 text-sm text-slate-500">Loading leads...</div>
        ) : null}
      </section>
    </main>
  );
}