"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type TrafficPoint = {
  label: string;
  visits: number;
  conversions: number;
};

export default function AnalyticsOverviewCharts({
  data,
}: {
  data: TrafficPoint[];
}) {
  const safeData =
    data.length > 0
      ? data
      : [{ label: "No data", visits: 0, conversions: 0 }];

  return (
    <div className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50 px-3 py-4 sm:px-4">
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart
          data={safeData}
          margin={{ top: 10, right: 10, left: -10, bottom: 0 }}
        >
          <defs>
            <linearGradient id="visitsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#071226" stopOpacity={0.22} />
              <stop offset="95%" stopColor="#071226" stopOpacity={0.02} />
            </linearGradient>
            <linearGradient id="conversionsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#c89b2b" stopOpacity={0.22} />
              <stop offset="95%" stopColor="#c89b2b" stopOpacity={0.02} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis
            dataKey="label"
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
            contentStyle={{
              borderRadius: 16,
              border: "1px solid #e2e8f0",
              background: "#ffffff",
              boxShadow: "0 18px 40px rgba(15,23,42,0.08)",
            }}
          />
          <Legend wrapperStyle={{ paddingTop: 12 }} />
          <Area
            type="monotone"
            dataKey="visits"
            name="Visits"
            stroke="#071226"
            strokeWidth={2.5}
            fill="url(#visitsFill)"
          />
          <Area
            type="monotone"
            dataKey="conversions"
            name="Conversions"
            stroke="#c89b2b"
            strokeWidth={2.5}
            fill="url(#conversionsFill)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}