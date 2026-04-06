import StatCard from "@/components/dashboard/StatCard";
import OverviewChartsClient from "@/components/dashboard/charts/OverviewChartsClient";
import {
  getDashboardChartData,
  getDashboardKpis,
  getRecentActivity,
} from "@/lib/dashboard-data";

function formatMoney(value: number) {
  return `Rs ${value.toLocaleString("en-MU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export default async function DashboardOverviewPage() {
  const kpis = await getDashboardKpis();
  const activity = await getRecentActivity();
  const chartData = await getDashboardChartData();

  return (
    <main className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Leads" value={String(kpis.leadsCount)} />
        <StatCard title="Subscribers" value={String(kpis.subscribersCount)} />
        <StatCard title="Quotations" value={String(kpis.quotationsCount)} />
        <StatCard title="Invoices" value={String(kpis.invoicesCount)} />
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Proposals" value={String(kpis.proposalsCount)} />
        <StatCard title="Published Posts" value={String(kpis.publishedPostsCount)} />
        <StatCard title="Active Banners" value={String(kpis.activeBannersCount)} />
        <StatCard title="Unpaid Total" value={formatMoney(kpis.unpaidInvoicesTotal)} />
      </section>

      <OverviewChartsClient data={chartData} />

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Business Snapshot
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#071226]">
            Real platform overview
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
            This dashboard is now connected to real Supabase records for leads, subscribers, quotations, invoices, proposals, banners, and published blog content.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              `Total leads captured: ${kpis.leadsCount}`,
              `Total subscribers: ${kpis.subscribersCount}`,
              `Total quotations created: ${kpis.quotationsCount}`,
              `Outstanding invoice amount: ${formatMoney(kpis.unpaidInvoicesTotal)}`,
            ].map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] p-6 text-white shadow-[0_20px_60px_rgba(7,18,38,0.14)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d77a]">
            Recent Activity
          </div>

          <div className="mt-5 space-y-3">
            {activity.length ? (
              activity.map((item, index) => (
                <div
                  key={`${item.type}-${item.label}-${index}`}
                  className="rounded-[18px] border border-white/10 bg-white/10 px-4 py-3"
                >
                  <div className="text-sm font-semibold text-white">
                    {item.type}: {item.label}
                  </div>
                  <div className="mt-1 text-xs text-white/70">
                    {new Date(item.created_at).toLocaleString()}
                  </div>
                </div>
              ))
            ) : (
              <div className="rounded-[18px] border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/75">
                No recent activity yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}