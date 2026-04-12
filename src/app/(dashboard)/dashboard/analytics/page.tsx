import StatCard from "@/components/dashboard/StatCard";
import AnalyticsOverviewCharts from "@/components/dashboard/charts/AnalyticsOverviewCharts";
import { getAnalyticsOverview } from "@/lib/analytics";

export default async function AnalyticsPage() {
  const analytics = await getAnalyticsOverview();

  return (
    <main className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Visits"
          value={analytics.totalVisits.toLocaleString("en-MU")}
          change="Tracked from live events"
        />
        <StatCard
          title="Unique Visitors"
          value={analytics.uniqueVisitors.toLocaleString("en-MU")}
          change="Live session count"
        />
        <StatCard
          title="Avg. Session"
          value={analytics.avgSession}
          change="Calculated from real sessions"
        />
        <StatCard
          title="Conversion Events"
          value={analytics.conversionEvents.toLocaleString("en-MU")}
          change="WhatsApp, contact, quote and more"
          tone="navy"
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Traffic Overview
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#071226]">
            Live website performance
          </h2>

          <p className="mt-3 text-sm leading-7 text-slate-600">
            This chart shows live tracked visits and conversion events over the last 14 days.
          </p>

          <div className="mt-6">
            <AnalyticsOverviewCharts data={analytics.trafficTrend} />
          </div>
        </div>

        <div className="rounded-[28px] bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] p-6 text-white shadow-[0_20px_60px_rgba(7,18,38,0.14)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d77a]">
            Device Split
          </div>

          <div className="mt-5 grid gap-3">
            {analytics.deviceSplit.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4"
              >
                <div className="flex items-center justify-between gap-4 text-sm font-medium text-white">
                  <span>{item.label}</span>
                  <span>{item.value}%</span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[#f3d77a]"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">Top Pages</h3>

          <div className="mt-5 space-y-3">
            {analytics.topPages.length ? (
              analytics.topPages.map((item) => (
                <div
                  key={item.page}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm"
                >
                  <span className="font-medium text-slate-700">{item.page}</span>
                  <span className="font-semibold text-[#071226]">
                    {item.views.toLocaleString("en-MU")}
                  </span>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-500">
                No tracked page views yet.
              </div>
            )}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">Tracked Events</h3>

          <div className="mt-5 space-y-3">
            {analytics.events.length ? (
              analytics.events.map((item) => (
                <div
                  key={item.event}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm"
                >
                  <span className="font-medium text-slate-700">{item.event}</span>
                  <span className="font-semibold text-[#071226]">
                    {item.total.toLocaleString("en-MU")}
                  </span>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-500">
                No tracked events yet.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}