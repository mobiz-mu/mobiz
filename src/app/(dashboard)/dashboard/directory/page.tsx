"use client";

import { useEffect, useMemo, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import StatusSelect from "@/components/dashboard/StatusSelect";
import StatCard from "@/components/dashboard/StatCard";
import EmptyState from "@/components/dashboard/EmptyState";
import { TableSkeleton } from "@/components/dashboard/Skeleton";
import { getCategory } from "@/lib/directoryCategories";
import { getDirectoryCity, type DirectoryBusiness } from "@/lib/directory";
import { Store } from "lucide-react";

const TIERS = ["free", "premium", "featured", "verified"] as const;

export default function DashboardDirectoryPage() {
  const [items, setItems] = useState<DirectoryBusiness[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState("all");
  const [search, setSearch] = useState("");

  async function load() {
    setLoading(true);
    const { data } = await supabaseBrowser
      .from("directory_businesses")
      .select("*")
      .order("created_at", { ascending: false });
    setItems((data as DirectoryBusiness[]) || []);
    setLoading(false);
  }

  useEffect(() => {
    // Initial data load on mount (DB sync). setState inside is intentional.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void load();
  }, []);

  async function updateField(
    id: string,
    field: "tier" | "featured" | "verified",
    value: string | boolean
  ) {
    await supabaseBrowser
      .from("directory_businesses")
      .update({ [field]: value })
      .eq("id", id);
    await load();
  }

  const filtered = useMemo(() => {
    return items.filter((b) => {
      const matchesStatus =
        statusFilter === "all" ? true : b.status === statusFilter;
      const term = search.trim().toLowerCase();
      const matchesSearch = !term
        ? true
        : `${b.name} ${b.category} ${b.city ?? ""}`
            .toLowerCase()
            .includes(term);
      return matchesStatus && matchesSearch;
    });
  }, [items, statusFilter, search]);

  const counts = useMemo(
    () => ({
      total: items.length,
      pending: items.filter((b) => b.status === "pending").length,
      approved: items.filter((b) => b.status === "approved").length,
      featured: items.filter((b) => b.featured).length,
    }),
    [items]
  );

  return (
    <main className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Listings" value={String(counts.total)} icon={Store} />
        <StatCard title="Pending Review" value={String(counts.pending)} tone="gold" />
        <StatCard title="Approved" value={String(counts.approved)} />
        <StatCard title="Featured" value={String(counts.featured)} />
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#071226]">
              Directory Listings
            </h2>
            <p className="text-sm text-slate-500">
              Approve, reject and upgrade business submissions.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none focus:border-[#0d1b3d]"
            />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="h-11 rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none focus:border-[#0d1b3d]"
            >
              <option value="all">All statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="mt-6">
            <TableSkeleton rows={5} />
          </div>
        ) : !filtered.length ? (
          <div className="mt-6">
            <EmptyState
              icon={Store}
              title="No listings found"
              description="Business submissions from the public directory form will appear here for review."
            />
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="mt-6 hidden overflow-x-auto lg:block">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <th className="px-4 py-3">Business</th>
                    <th className="px-4">Category / City</th>
                    <th className="px-4">Contact</th>
                    <th className="px-4">Tier</th>
                    <th className="px-4">Flags</th>
                    <th className="px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((b) => (
                    <tr key={b.id} className="align-top">
                      <td className="px-4 py-4">
                        <div className="font-semibold text-[#071226]">
                          {b.name}
                        </div>
                        <a
                          href={`/directory/business/${b.slug}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-slate-500 hover:underline"
                        >
                          /{b.slug}
                        </a>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        <div>{getCategory(b.category)?.label || b.category}</div>
                        <div className="text-xs text-slate-500">
                          {b.city ? getDirectoryCity(b.city)?.name || b.city : "—"}
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        <div>{b.phone || b.whatsapp || "—"}</div>
                        <div className="text-xs text-slate-500">{b.email || ""}</div>
                      </td>
                      <td className="px-4 py-4">
                        <select
                          value={b.tier}
                          onChange={(e) => updateField(b.id, "tier", e.target.value)}
                          className="h-9 rounded-full border border-slate-200 bg-white px-3 text-xs text-slate-700"
                        >
                          {TIERS.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-col gap-1.5 text-xs">
                          <label className="inline-flex items-center gap-1.5">
                            <input
                              type="checkbox"
                              checked={b.featured}
                              onChange={(e) =>
                                updateField(b.id, "featured", e.target.checked)
                              }
                            />
                            Featured
                          </label>
                          <label className="inline-flex items-center gap-1.5">
                            <input
                              type="checkbox"
                              checked={b.verified}
                              onChange={(e) =>
                                updateField(b.id, "verified", e.target.checked)
                              }
                            />
                            Verified
                          </label>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <StatusSelect
                          table="directory_businesses"
                          id={b.id}
                          value={b.status}
                          options={["pending", "approved", "rejected"]}
                          onDone={load}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="mt-6 space-y-3 lg:hidden">
              {filtered.map((b) => (
                <div
                  key={b.id}
                  className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-sm"
                >
                  <div className="font-semibold text-[#071226]">{b.name}</div>
                  <div className="mt-1 text-xs text-slate-500">
                    {getCategory(b.category)?.label || b.category}
                    {b.city ? ` · ${getDirectoryCity(b.city)?.name || b.city}` : ""}
                  </div>
                  <div className="mt-2 text-slate-700">
                    {b.phone || b.whatsapp || "—"}
                  </div>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <StatusSelect
                      table="directory_businesses"
                      id={b.id}
                      value={b.status}
                      options={["pending", "approved", "rejected"]}
                      onDone={load}
                    />
                    <label className="inline-flex items-center gap-1.5 text-xs">
                      <input
                        type="checkbox"
                        checked={b.featured}
                        onChange={(e) =>
                          updateField(b.id, "featured", e.target.checked)
                        }
                      />
                      Featured
                    </label>
                    <label className="inline-flex items-center gap-1.5 text-xs">
                      <input
                        type="checkbox"
                        checked={b.verified}
                        onChange={(e) =>
                          updateField(b.id, "verified", e.target.checked)
                        }
                      />
                      Verified
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </section>
    </main>
  );
}
