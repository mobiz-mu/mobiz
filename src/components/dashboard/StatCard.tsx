import { cn } from "@/lib/utils";

type StatCardProps = {
  title: string;
  value: string;
  change?: string;
  className?: string;
};

export default function StatCard({
  title,
  value,
  change,
  className,
}: StatCardProps) {
  return (
    <div
      className={cn(
        "rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)]",
        className
      )}
    >
      <div className="text-sm font-medium text-slate-500">{title}</div>
      <div className="mt-3 text-3xl font-semibold tracking-tight text-[#071226]">
        {value}
      </div>
      {change ? <div className="mt-2 text-sm text-emerald-600">{change}</div> : null}
    </div>
  );
}