"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type ChartPoint = {
  month: string;
  leads: number;
  quotations: number;
  invoices: number;
  revenue: number;
};

type OverviewChartsProps = {
  data: ChartPoint[];
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-MU", {
    style: "currency",
    currency: "MUR",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function ChartCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] p-5 shadow-[0_18px_44px_rgba(15,23,42,0.06)] sm:p-6">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f3d77a]/80 to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[#f3d77a]/10 blur-3xl" />

      <div className="relative z-10">
        <div className="inline-flex rounded-full border border-[#ead9a8] bg-[#fffdf7] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18]">
          Dashboard Insight
        </div>

        <h3
          className="mt-4 text-xl font-semibold tracking-tight text-[#071226] sm:text-[1.35rem]"
          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
        >
          {title}
        </h3>

        <p className="mt-2 text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 w-full min-w-0 overflow-hidden rounded-[22px]">
          {children}
        </div>
      </div>
    </section>
  );
}

export default function OverviewCharts({ data }: OverviewChartsProps) {
  const safeData =
    data?.length > 0
      ? data
      : [
          {
            month: "No data",
            leads: 0,
            quotations: 0,
            invoices: 0,
            revenue: 0,
          },
        ];

  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <ChartCard
        title="Business Activity"
        description="Track lead generation, quotation activity, and invoice creation across recent months."
      >
        <ResponsiveContainer width="100%" height={320}>
          <BarChart
            data={safeData}
            margin={{ top: 8, right: 8, left: -12, bottom: 4 }}
            barGap={8}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              allowDecimals={false}
            />
            <Tooltip
              cursor={{ fill: "rgba(148, 163, 184, 0.08)" }}
              contentStyle={{
                borderRadius: 16,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
              }}
            />
            <Legend wrapperStyle={{ paddingTop: 12 }} />
            <Bar
              dataKey="leads"
              name="Leads"
              fill="#0f172a"
              radius={[8, 8, 0, 0]}
              maxBarSize={34}
            />
            <Bar
              dataKey="quotations"
              name="Quotations"
              fill="#c89b2b"
              radius={[8, 8, 0, 0]}
              maxBarSize={34}
            />
            <Bar
              dataKey="invoices"
              name="Invoices"
              fill="#475569"
              radius={[8, 8, 0, 0]}
              maxBarSize={34}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Invoice Revenue"
        description="Monitor revenue trend over time and keep an eye on monthly business performance."
      >
        <ResponsiveContainer width="100%" height={320}>
          <LineChart
            data={safeData}
            margin={{ top: 8, right: 8, left: -4, bottom: 4 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tick={{ fill: "#64748b", fontSize: 12 }}
              tickFormatter={(value) => `Rs ${value}`}
            />
            <Tooltip
              formatter={(value) => formatMoney(Number(value))}
              cursor={{ stroke: "#c89b2b", strokeOpacity: 0.3 }}
              contentStyle={{
                borderRadius: 16,
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
              }}
            />
            <Legend wrapperStyle={{ paddingTop: 12 }} />
            <Line
              type="monotone"
              dataKey="revenue"
              name="Revenue"
              stroke="#c89b2b"
              strokeWidth={3}
              dot={{ r: 4, fill: "#c89b2b", strokeWidth: 0 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>
    </div>
  );
}