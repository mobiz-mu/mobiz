import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function QuotationDetailPage({ params }: Props) {
  const { id } = await params;

  const { data: quotation } = await supabaseServer
    .from("quotations")
    .select("*")
    .eq("id", id)
    .single();

  if (!quotation) notFound();

  const { data: items } = await supabaseServer
    .from("quotation_items")
    .select("*")
    .eq("quotation_id", id)
    .order("sort_order", { ascending: true });

  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Quotation Detail
            </div>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#071226]">
              {quotation.quotation_number}
            </h1>
            <div className="mt-3 text-sm text-slate-600">
              Status: {quotation.status} • Issue Date: {quotation.issue_date}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/dashboard/quotations"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
            >
              Back
            </Link>
          </div>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-semibold text-[#071226]">Line Items</h2>
        <div className="mt-4 space-y-3">
          {(items || []).map((item) => (
            <div key={item.id} className="rounded-2xl bg-slate-50 p-4">
              <div className="font-semibold text-[#071226]">{item.title}</div>
              <div className="text-sm text-slate-600">{item.description || "—"}</div>
              <div className="mt-2 text-sm text-slate-700">
                Qty: {item.quantity} • Unit: Rs {Number(item.unit_price).toFixed(2)} • Total: Rs {Number(item.line_total).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}