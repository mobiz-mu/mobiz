import { supabaseServer } from "@/lib/supabase-server";
import { notFound } from "next/navigation";

type CustomerDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function CustomerDetailPage({
  params,
}: CustomerDetailPageProps) {
  const { id } = await params;

  const { data: customer } = await supabaseServer
    .from("customers")
    .select("*")
    .eq("id", id)
    .single();

  if (!customer) notFound();

  const [quotationsRes, invoicesRes, proposalsRes] = await Promise.all([
    supabaseServer
      .from("quotations")
      .select("id, quotation_number, status, total_amount")
      .eq("customer_id", id)
      .order("created_at", { ascending: false }),
    supabaseServer
      .from("invoices")
      .select("id, invoice_number, status, total_amount, balance_due")
      .eq("customer_id", id)
      .order("created_at", { ascending: false }),
    supabaseServer
      .from("proposals")
      .select("id, proposal_number, status, title")
      .eq("customer_id", id)
      .order("created_at", { ascending: false }),
  ]);

  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
          Customer Detail
        </div>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#071226]">
          {customer.company_name || customer.contact_name || "Customer"}
        </h1>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <div><strong>Contact:</strong> {customer.contact_name || "—"}</div>
            <div><strong>Email:</strong> {customer.email || "—"}</div>
            <div><strong>Phone:</strong> {customer.phone || "—"}</div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
            <div><strong>Type:</strong> {customer.customer_type}</div>
            <div><strong>Address:</strong> {customer.billing_address || "—"}</div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-[#071226]">Quotations</h2>
          <div className="mt-4 space-y-3">
            {(quotationsRes.data || []).map((item) => (
              <div key={item.id} className="rounded-2xl bg-slate-50 p-4 text-sm">
                <div className="font-semibold text-[#071226]">{item.quotation_number}</div>
                <div className="text-slate-600">Status: {item.status}</div>
                <div className="text-slate-600">Total: Rs {Number(item.total_amount || 0).toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-[#071226]">Invoices</h2>
          <div className="mt-4 space-y-3">
            {(invoicesRes.data || []).map((item) => (
              <div key={item.id} className="rounded-2xl bg-slate-50 p-4 text-sm">
                <div className="font-semibold text-[#071226]">{item.invoice_number}</div>
                <div className="text-slate-600">Status: {item.status}</div>
                <div className="text-slate-600">Balance: Rs {Number(item.balance_due || 0).toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-[#071226]">Proposals</h2>
          <div className="mt-4 space-y-3">
            {(proposalsRes.data || []).map((item) => (
              <div key={item.id} className="rounded-2xl bg-slate-50 p-4 text-sm">
                <div className="font-semibold text-[#071226]">{item.proposal_number}</div>
                <div className="text-slate-600">{item.title}</div>
                <div className="text-slate-600">Status: {item.status}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}