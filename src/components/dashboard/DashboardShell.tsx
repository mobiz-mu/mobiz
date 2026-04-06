"use client";

import * as React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";

type DashboardShellProps = {
  children: React.ReactNode;
  mobile?: boolean;
  onNavigate?: () => void;
};

export default function DashboardShell({
  children,
  mobile = false,
  onNavigate,
}: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[#f7f9fc] text-[#071226] lg:flex">
      <DashboardSidebar mobile={mobile} onNavigate={onNavigate} />

      <div className="min-w-0 flex-1">
        {children}
      </div>
    </div>
  );
}