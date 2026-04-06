import StatCard from "@/components/dashboard/StatCard";

const topPages = [
  { page: "/", views: "4,280" },
  { page: "/services", views: "2,940" },
  { page: "/contact", views: "1,210" },
  { page: "/blog", views: "980" },
];

const events = [
  { event: "WhatsApp Clicks", total: "214" },
  { event: "Contact Form Opens", total: "168" },
  { event: "Quote Requests", total: "73" },
  { event: "Domain Searches", total: "54" },
];

export default function AnalyticsPage() {
  return (
    <main className="space-y-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Visits" value="12,480" change="+18.4% this month" />
        <StatCard title="Unique Visitors" value="8,952" change="+11.7% this month" />
        <StatCard title="Avg. Session" value="3m 24s" change="Strong engagement" />
        <StatCard title="Conversion Events" value="509" change="+9.2% this month" />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Traffic Overview
          </div>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#071226]">
            Website performance summary
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            This section will later connect to real analytics data from tracked page views, CTA clicks, WhatsApp clicks, quote requests, and domain searches.
          </p>

          <div className="mt-6 rounded-[24px] border border-dashed border-slate-300 bg-slate-50 px-5 py-16 text-center text-sm text-slate-500">
            Chart area placeholder for visits, sources, and conversion trends
          </div>
        </div>

        <div className="rounded-[28px] bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] p-6 text-white shadow-[0_20px_60px_rgba(7,18,38,0.14)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f3d77a]">
            Device Split
          </div>
          <div className="mt-5 grid gap-3">
            {[
              "Mobile — 68%",
              "Desktop — 27%",
              "Tablet — 5%",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-medium text-white"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">Top Pages</h3>
          <div className="mt-5 space-y-3">
            {topPages.map((item) => (
              <div
                key={item.page}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm"
              >
                <span className="font-medium text-slate-700">{item.page}</span>
                <span className="font-semibold text-[#071226]">{item.views}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">Tracked Events</h3>
          <div className="mt-5 space-y-3">
            {events.map((item) => (
              <div
                key={item.event}
                className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm"
              >
                <span className="font-medium text-slate-700">{item.event}</span>
                <span className="font-semibold text-[#071226]">{item.total}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}