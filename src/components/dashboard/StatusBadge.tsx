import { cn } from "@/lib/utils";

type Tone = "neutral" | "blue" | "amber" | "green" | "red" | "violet";

const TONES: Record<Tone, string> = {
  neutral: "border-slate-200 bg-slate-50 text-slate-600",
  blue: "border-blue-200 bg-blue-50 text-blue-700",
  amber: "border-amber-200 bg-amber-50 text-amber-700",
  green: "border-emerald-200 bg-emerald-50 text-emerald-700",
  red: "border-red-200 bg-red-50 text-red-700",
  violet: "border-violet-200 bg-violet-50 text-violet-700",
};

// Maps common status values across leads, invoices, quotations, proposals.
const STATUS_TONES: Record<string, Tone> = {
  // leads
  new: "blue",
  contacted: "amber",
  qualified: "violet",
  won: "green",
  lost: "red",
  // documents / invoices
  draft: "neutral",
  sent: "blue",
  pending: "amber",
  approved: "green",
  paid: "green",
  unpaid: "amber",
  overdue: "red",
  cancelled: "red",
  rejected: "red",
};

function toTone(status: string): Tone {
  return STATUS_TONES[status.toLowerCase()] ?? "neutral";
}

function label(status: string) {
  return status.replace(/[_-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function StatusBadge({
  status,
  tone,
  className,
}: {
  status: string;
  tone?: Tone;
  className?: string;
}) {
  const resolved = tone ?? toTone(status);
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-semibold capitalize",
        TONES[resolved],
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-70" />
      {label(status)}
    </span>
  );
}
