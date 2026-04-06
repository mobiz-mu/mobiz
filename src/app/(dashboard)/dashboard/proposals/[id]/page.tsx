import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function ProposalDetailPage({ params }: Props) {
  const { id } = await params;

  const { data: proposal } = await supabaseServer
    .from("proposals")
    .select("*")
    .eq("id", id)
    .single();

  if (!proposal) notFound();

  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Proposal Detail
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#071226]">
              {proposal.proposal_number}
            </h1>
            <div className="mt-3 text-sm text-slate-600">
              Status: {proposal.status} • Title: {proposal.title}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/dashboard/proposals"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              Back
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-6">
        {[
          ["Executive Summary", proposal.executive_summary],
          ["Scope of Work", proposal.scope_of_work],
          ["Deliverables", proposal.deliverables],
          ["Timeline", proposal.timeline],
          ["Pricing", proposal.pricing],
          ["Terms", proposal.terms],
        ].map(([label, value]) => (
          <div key={label} className="rounded-[28px] border border-slate-200 bg-white p-6">
            <h2 className="text-xl font-semibold text-[#071226]">{label}</h2>
            <div className="mt-3 whitespace-pre-wrap text-sm leading-7 text-slate-600">
              {value || "—"}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}