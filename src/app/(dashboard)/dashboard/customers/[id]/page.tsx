import Link from "next/link";
import { supabaseServer } from "@/lib/supabase-server";
import { notFound } from "next/navigation";

type CustomerDetailPageProps = {
  params: Promise<{ id: string }>;
};

function formatMoney(value: number) {
  return `Rs ${value.toLocaleString("en-MU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function formatDate(value?: string | null) {
  if (!value) return "—";
  return new Date(value).toLocaleDateString("en-MU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

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

  const [quotationsRes, invoicesRes] = await Promise.all([
    supabaseServer
      .from("quotations")
      .select("id, quotation_number, status, total_amount, created_at")
      .eq("customer_id", id)
      .order("created_at", { ascending: false }),

    supabaseServer
      .from("invoices")
      .select("id, invoice_number, status, total_amount, balance_due, created_at")
      .eq("customer_id", id)
      .order("created_at", { ascending: false }),
  ]);

  const quotations = quotationsRes.data || [];
  const invoices = invoicesRes.data || [];

  const totalQuoted = quotations.reduce(
    (sum, item) => sum + Number(item.total_amount || 0),
    0
  );

  const totalInvoiced = invoices.reduce(
    (sum, item) => sum + Number(item.total_amount || 0),
    0
  );

  const totalOutstanding = invoices.reduce(
    (sum, item) => sum + Number(item.balance_due || 0),
    0
  );

  const paidInvoices = invoices.filter(
    (item) => Number(item.balance_due || 0) <= 0
  ).length;

  return (
    <main className="space-y-6">
      <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
        <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Customer Detail
            </div>

            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-[#071226]">
              {customer.company_name || customer.contact_name || "Customer"}
            </h1>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              View customer identity, contact details, document history, BRN, VAT information, and commercial totals from one executive workspace.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <Link
              href="/dashboard/customers"
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Back
            </Link>

            <Link
              href={`/dashboard/customers?edit=${customer.id}`}
              className="rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#0d1b3d]"
            >
              Edit Customer
            </Link>

            <button
              type="button"
              className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700 transition hover:bg-red-100"
              onClick={() => {
                if (typeof window !== "undefined") {
                  const confirmed = window.confirm(
                    `Are you sure you want to delete "${customer.company_name || customer.contact_name || "this customer"}"?`
                  );
                  if (!confirmed) return;

                  fetch(`/api/customers/${customer.id}`, {
                    method: "DELETE",
                  }).then(async (res) => {
                    const json = await res.json();
                    if (!json.ok) {
                      alert(json.message || "Unable to delete customer.");
                      return;
                    }
                    window.location.href = "/dashboard/customers";
                  });
                }
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-medium text-slate-500">Quoted Value</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
            {formatMoney(totalQuoted)}
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-medium text-slate-500">Invoiced Value</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
            {formatMoney(totalInvoiced)}
          </div>
        </div>

        <div className="rounded-[24px] border border-[#ead9a8] bg-[linear-gradient(180deg,#fffdf7_0%,#fff8e8_100%)] p-5 shadow-[0_12px_32px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-medium text-slate-500">Outstanding Balance</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
            {formatMoney(totalOutstanding)}
          </div>
        </div>

        <div className="rounded-[24px] border border-slate-200 bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] p-5 text-white shadow-[0_12px_32px_rgba(7,18,38,0.18)]">
          <div className="text-sm font-medium text-white/70">Paid Invoices</div>
          <div className="mt-3 text-3xl font-semibold tracking-tight">
            {paidInvoices}
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-6">
          <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
            <h2 className="text-xl font-semibold text-[#071226]">Customer Information</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-[#071226]">Identity</div>
                <div className="mt-3 space-y-2">
                  <div><strong>Type:</strong> {customer.customer_type || "—"}</div>
                  <div><strong>Company:</strong> {customer.company_name || "—"}</div>
                  <div><strong>Contact:</strong> {customer.contact_name || "—"}</div>
                </div>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-semibold text-[#071226]">Business Details</div>
                <div className="mt-3 space-y-2">
                  <div><strong>BRN:</strong> {customer.brn || "—"}</div>
                  <div><strong>VAT Number:</strong> {customer.vat_number || "—"}</div>
                  <div><strong>Created:</strong> {formatDate(customer.created_at)}</div>
                </div>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 sm:col-span-2">
                <div className="font-semibold text-[#071226]">Contact Details</div>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  <div><strong>Email:</strong> {customer.email || "—"}</div>
                  <div><strong>Phone:</strong> {customer.phone || "—"}</div>
                  <div className="sm:col-span-2">
                    <strong>Address:</strong> {customer.billing_address || "—"}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
            <h2 className="text-xl font-semibold text-[#071226]">Document Summary</h2>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Total Quotations</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-[#071226]">
                  {quotations.length}
                </div>
              </div>

              <div className="rounded-[22px] border border-slate-200 bg-slate-50 p-4">
                <div className="text-sm text-slate-500">Total Invoices</div>
                <div className="mt-2 text-3xl font-semibold tracking-tight text-[#071226]">
                  {invoices.length}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-[#071226]">Quotation History</h2>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                {quotations.length} records
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {quotations.length ? (
                quotations.map((item) => (
                  <Link
                    key={item.id}
                    href={`/dashboard/quotations/${item.id}`}
                    className="block rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="font-semibold text-[#071226]">
                          {item.quotation_number}
                        </div>
                        <div className="mt-1 text-sm text-slate-600">
                          Status: {item.status}
                        </div>
                      </div>

                      <div className="text-sm text-slate-600 sm:text-right">
                        <div>{formatMoney(Number(item.total_amount || 0))}</div>
                        <div className="mt-1 text-xs text-slate-500">
                          {formatDate(item.created_at)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
                  No quotations found.
                </div>
              )}
            </div>
          </section>

          <section className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-[#071226]">Invoice History</h2>
              <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600">
                {invoices.length} records
              </span>
            </div>

            <div className="mt-5 space-y-3">
              {invoices.length ? (
                invoices.map((item) => (
                  <Link
                    key={item.id}
                    href={`/dashboard/invoices/${item.id}`}
                    className="block rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:bg-white hover:shadow-[0_10px_24px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <div className="font-semibold text-[#071226]">
                          {item.invoice_number}
                        </div>
                        <div className="mt-1 text-sm text-slate-600">
                          Status: {item.status}
                        </div>
                      </div>

                      <div className="text-sm text-slate-600 sm:text-right">
                        <div>{formatMoney(Number(item.total_amount || 0))}</div>
                        <div className="mt-1 text-xs text-slate-500">
                          Balance: {formatMoney(Number(item.balance_due || 0))}
                        </div>
                        <div className="mt-1 text-xs text-slate-500">
                          {formatDate(item.created_at)}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 px-4 py-8 text-center text-sm text-slate-500">
                  No invoices found.
                </div>
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}