import { supabaseServer } from "@/lib/supabase-server";

export async function getDashboardKpis() {
  const [
    leadsRes,
    subscribersRes,
    quotationsRes,
    invoicesRes,
  ] = await Promise.all([
    supabaseServer.from("leads").select("*", { count: "exact", head: true }),
    supabaseServer.from("newsletter_subscribers").select("*", { count: "exact", head: true }),
    supabaseServer.from("quotations").select("*", { count: "exact", head: true }),
    supabaseServer.from("invoices").select("*", { count: "exact", head: true }),
  ]);

  const [unpaidInvoices, paidInvoices] = await Promise.all([
    supabaseServer
      .from("invoices")
      .select("balance_due")
      .gt("balance_due", 0),

    supabaseServer
      .from("invoices")
      .select("total_amount")
      .lte("balance_due", 0),
  ]);

  const unpaidTotal =
    unpaidInvoices.data?.reduce(
      (sum, row) => sum + Number(row.balance_due || 0),
      0
    ) || 0;

  const collectionsTotal =
    paidInvoices.data?.reduce(
      (sum, row) => sum + Number(row.total_amount || 0),
      0
    ) || 0;

  return {
    leadsCount: leadsRes.count || 0,
    subscribersCount: subscribersRes.count || 0,
    quotationsCount: quotationsRes.count || 0,
    invoicesCount: invoicesRes.count || 0,
    customersCount: leadsRes.count || 0,
    unpaidInvoicesTotal: unpaidTotal,
    collectionsTotal,
  };
}

export async function getRecentActivity() {
  const [leads, quotations, invoices] = await Promise.all([
    supabaseServer
      .from("leads")
      .select("id, full_name, created_at")
      .order("created_at", { ascending: false })
      .limit(4),

    supabaseServer
      .from("quotations")
      .select("id, quotation_number, created_at")
      .order("created_at", { ascending: false })
      .limit(4),

    supabaseServer
      .from("invoices")
      .select("id, invoice_number, created_at")
      .order("created_at", { ascending: false })
      .limit(4),
  ]);

  const merged = [
    ...(leads.data || []).map((item) => ({
      type: "Lead",
      label: item.full_name,
      created_at: item.created_at,
    })),
    ...(quotations.data || []).map((item) => ({
      type: "Quotation",
      label: item.quotation_number,
      created_at: item.created_at,
    })),
    ...(invoices.data || []).map((item) => ({
      type: "Invoice",
      label: item.invoice_number,
      created_at: item.created_at,
    })),
  ];

  return merged
    .sort(
      (a, b) =>
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    )
    .slice(0, 8);
}

function monthKey(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "2-digit",
  });
}

export async function getDashboardChartData() {
  const [leadsRes, quotationsRes, invoicesRes] = await Promise.all([
    supabaseServer
      .from("leads")
      .select("created_at")
      .order("created_at", { ascending: true }),

    supabaseServer
      .from("quotations")
      .select("created_at, total_amount")
      .order("created_at", { ascending: true }),

    supabaseServer
      .from("invoices")
      .select("created_at, total_amount")
      .order("created_at", { ascending: true }),
  ]);

  const map = new Map<
    string,
    {
      month: string;
      leads: number;
      quotations: number;
      invoices: number;
      revenue: number;
    }
  >();

  for (const row of leadsRes.data || []) {
    const key = monthKey(row.created_at);
    if (!map.has(key)) {
      map.set(key, {
        month: key,
        leads: 0,
        quotations: 0,
        invoices: 0,
        revenue: 0,
      });
    }
    map.get(key)!.leads += 1;
  }

  for (const row of quotationsRes.data || []) {
    const key = monthKey(row.created_at);
    if (!map.has(key)) {
      map.set(key, {
        month: key,
        leads: 0,
        quotations: 0,
        invoices: 0,
        revenue: 0,
      });
    }
    map.get(key)!.quotations += 1;
  }

  for (const row of invoicesRes.data || []) {
    const key = monthKey(row.created_at);
    if (!map.has(key)) {
      map.set(key, {
        month: key,
        leads: 0,
        quotations: 0,
        invoices: 0,
        revenue: 0,
      });
    }
    map.get(key)!.invoices += 1;
    map.get(key)!.revenue += Number(row.total_amount || 0);
  }

  return Array.from(map.values()).slice(-8);
}