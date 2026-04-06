"use client";

import { supabaseBrowser } from "@/lib/supabase-client";
import { useState } from "react";

type ReorderButtonsProps = {
  table: "hero_banners" | "testimonials" | "portfolio_items";
  id: string;
  currentOrder: number;
  onDone?: () => Promise<void> | void;
};

export default function ReorderButtons({
  table,
  id,
  currentOrder,
  onDone,
}: ReorderButtonsProps) {
  const [loading, setLoading] = useState(false);

  async function move(delta: -1 | 1) {
    setLoading(true);
    try {
      const nextOrder = Math.max(0, currentOrder + delta);

      const { data: swapItem, error: swapError } = await supabaseBrowser
        .from(table)
        .select("id, sort_order")
        .eq("sort_order", nextOrder)
        .maybeSingle();

      if (swapError) {
        alert(swapError.message);
        return;
      }

      if (swapItem?.id) {
        const { error: firstError } = await supabaseBrowser
          .from(table)
          .update({ sort_order: currentOrder })
          .eq("id", swapItem.id);

        if (firstError) {
          alert(firstError.message);
          return;
        }
      }

      const { error } = await supabaseBrowser
        .from(table)
        .update({ sort_order: nextOrder })
        .eq("id", id);

      if (error) {
        alert(error.message);
        return;
      }

      if (onDone) await onDone();
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex gap-2">
      <button
        type="button"
        disabled={loading || currentOrder <= 0}
        onClick={() => move(-1)}
        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
      >
        ↑
      </button>
      <button
        type="button"
        disabled={loading}
        onClick={() => move(1)}
        className="rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700"
      >
        ↓
      </button>
    </div>
  );
}