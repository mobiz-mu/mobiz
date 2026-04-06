"use client";

import { useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import StatusSelect from "@/components/dashboard/StatusSelect";

type Lead = {
  id: string;
  full_name: string;
  company_name: string | null;
  email: string;
  phone: string | null;
  service: string;
  status: string;
  created_at: string;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");

  async function loadLeads() {
    const { data } = await supabaseBrowser
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });

    setLeads((data as Lead[]) || []);
  }

  useEffect(() => {
    void loadLeads();
  }, []);

  const filtered = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.full_name.toLowerCase().includes(search.toLowerCase()) ||
        (lead.company_name || "").toLowerCase().includes(search.toLowerCase()) ||
        lead.email.toLowerCase().includes(search.toLowerCase());

      const matchesService =
        serviceFilter === "all" ? true : lead.service === serviceFilter;

      return matchesSearch && matchesService;
    });
  }, [leads, search, serviceFilter]);

  const services = Array.from(new Set(leads.map((lead) => lead.service)));

  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Lead Management
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
              Website inquiries and quote requests
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, company, email"
              className="h-11 rounded-2xl border border-slate-200 px-4 text-sm"
            />

            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="h-11 rounded-2xl border border-slate-200 px-4 text-sm"
            >
              <option value="all">All services</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[980px] border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-500">
                <th className="px-4">Name</th>
                <th className="px-4">Company</th>
                <th className="px-4">Service</th>
                <th className="px-4">Email</th>
                <th className="px-4">Phone</th>
                <th className="px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((lead) => (
                <tr key={lead.id} className="bg-slate-50">
                  <td className="rounded-l-2xl px-4 py-4 font-medium text-[#071226]">
                    {lead.full_name}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">
                    {lead.company_name || "—"}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{lead.service}</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{lead.email}</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{lead.phone || "—"}</td>
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

              {!filtered.length ? (
                <tr>
                  <td colSpan={6} className="px-4 py-8 text-center text-sm text-slate-500">
                    No matching leads found.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}