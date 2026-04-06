"use client";

import { supabaseBrowser } from "@/lib/supabase-client";
import { useState } from "react";

type DeleteButtonProps = {
  table:
    | "hero_banners"
    | "blog_posts"
    | "testimonials"
    | "portfolio_items"
    | "customers"
    | "quotations"
    | "invoices"
    | "proposals";
  id: string;
  label?: string;
  onDone?: () => Promise<void> | void;
};

export default function DeleteButton({
  table,
  id,
  label = "Delete",
  onDone,
}: DeleteButtonProps) {
  const [loading, setLoading] = useState(false);

  async function onDelete() {
    const ok = window.confirm("Are you sure you want to delete this item?");
    if (!ok) return;

    setLoading(true);
    try {
      const { error } = await supabaseBrowser.from(table).delete().eq("id", id);
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
    <button
      type="button"
      onClick={onDelete}
      disabled={loading}
      className="rounded-full border border-red-200 bg-white px-4 py-2 text-sm font-medium text-red-600"
    >
      {loading ? "Deleting..." : label}
    </button>
  );
}