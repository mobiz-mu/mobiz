"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

type DashboardShellProps = {
  children: React.ReactNode;
  mobile?: boolean;
  onNavigate?: () => void;
};

function formatPageTitle(pathname: string) {
  const clean = pathname
    .replace("/dashboard", "")
    .split("/")
    .filter(Boolean)
    .map((segment) =>
      segment
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
    );

  if (clean.length === 0) return "Overview";
  return clean.join(" / ");
}

export default function DashboardShell({
  children,
  mobile = false,
  onNavigate,
}: DashboardShellProps) {
  const pathname = usePathname();
  const pageTitle = formatPageTitle(pathname);

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-[#071226]">
      <DashboardSidebar mobile={mobile} onNavigate={onNavigate} />

      <div className="min-w-0 lg:ml-[290px]">
        <header className="sticky top-0 z-30 border-b border-slate-200/80 bg-white/92 backdrop-blur-xl">
          <div className="flex min-h-[76px] items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="min-w-0">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                MoBiz.mu Admin
              </div>
              <h1 className="mt-1 truncate text-[1.45rem] font-semibold tracking-tight text-[#071226] sm:text-[1.6rem]">
                {pageTitle}
              </h1>
            </div>

            <div className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-[0_8px_24px_rgba(15,23,42,0.05)] md:flex">
              Live Dashboard
            </div>
          </div>
        </header>

        <main className="px-4 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          {children}
        </main>

        <footer className="border-t border-slate-200 bg-white px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-1 text-center sm:text-left">
            <p className="text-sm font-medium text-slate-700">
              © 2026 MoBiz.mu Dashboard
            </p>
            <p className="text-xs text-slate-500">
              Executive business control panel for operations, leads, finance, and growth.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}