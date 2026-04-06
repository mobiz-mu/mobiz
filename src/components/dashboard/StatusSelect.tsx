"use client";

import { useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";

type StatusSelectProps = {
  table: "leads" | "quotations" | "invoices" | "proposals";
  id: string;
  value: string;
  options: string[];
  onDone?: () => Promise<void> | void;
};

export default function StatusSelect({
  table,
  id,
  value,
  options,
  onDone,
}: StatusSelectProps) {
  const [status, setStatus] = useState(value);
  const [loading, setLoading] = useState(false);

  async function onChange(nextValue: string) {
    setStatus(nextValue);
    setLoading(true);

    try {
      await supabaseBrowser.from(table).update({ status: nextValue }).eq("id", id);
      if (onDone) await onDone();
    } finally {
      setLoading(false);
    }
  }

  return (
    <select
      value={status}
      onChange={(e) => onChange(e.target.value)}
      disabled={loading}
      className="h-10 rounded-full border border-slate-200 bg-white px-4 text-sm text-slate-700"
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {loading && option === status ? "Saving..." : option}
        </option>
      ))}
    </select>
  );
}