"use client";

import Link from "next/link";
import { dashboardNav } from "@/lib/dashboard-nav";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function DashboardSidebar({
  mobile = false,
  onNavigate,
}: {
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "shrink-0 bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] text-white",
        mobile ? "w-full" : "hidden h-screen w-[280px] border-r border-white/10 lg:block"
      )}
    >
      <div className="flex h-full flex-col">
        <div className="border-b border-white/10 px-6 py-6">
          <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f3d77a]">
            MoBiz.mu
          </div>
          <div className="mt-2 text-2xl font-semibold tracking-tight">Dashboard</div>
          <p className="mt-2 text-sm leading-6 text-white/70">
            Manage your website, documents, content, analytics, and users.
          </p>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-5">
          {dashboardNav.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.title}
                href={item.href}
                onClick={onNavigate}
                className={cn(
                  "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                  active
                    ? "bg-white text-[#071226] shadow-[0_12px_30px_rgba(255,255,255,0.14)]"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                )}
              >
                <Icon className="h-4.5 w-4.5" />
                {item.title}
              </Link>
            );
          })}
        </nav>

        <div className="px-4 pb-5">
          <div className="rounded-[24px] border border-white/10 bg-white/10 p-4">
            <div className="text-sm font-semibold">MoBiz Executive Suite</div>
            <p className="mt-2 text-sm leading-6 text-white/70">
              Analytics, content, quotations, invoices, and proposals in one place.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}