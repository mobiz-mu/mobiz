"use client";

import { Menu } from "lucide-react";

type DashboardHeaderProps = {
  onOpenMenu?: () => void;
};

export default function DashboardHeader({
  onOpenMenu,
}: DashboardHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/90 backdrop-blur">
      <div className="flex min-h-[72px] items-center justify-between gap-4 px-4 sm:px-5 lg:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onOpenMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
            aria-label="Open dashboard menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="min-w-0">
            <h1 className="truncate text-lg font-semibold tracking-tight text-[#071226]">
              Dashboard
            </h1>
            <p className="truncate text-sm text-slate-500">
              Manage your website, content, documents, and operations.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}