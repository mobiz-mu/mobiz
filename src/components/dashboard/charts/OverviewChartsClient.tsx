"use client";

import OverviewCharts from "@/components/dashboard/charts/OverviewCharts";

type ChartPoint = {
  month: string;
  leads: number;
  quotations: number;
  invoices: number;
  revenue: number;
};

export default function OverviewChartsClient({
  data,
}: {
  data: ChartPoint[];
}) {
  return <OverviewCharts data={data} />;
}