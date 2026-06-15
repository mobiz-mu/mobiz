"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { dashboardNav } from "@/lib/dashboard-nav";
import LogoutButton from "@/components/dashboard/LogoutButton";
import { cn } from "@/lib/utils";

export default function DashboardMobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open dashboard menu"
        className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50 lg:hidden"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open ? (
        <div className="fixed inset-0 z-[80] lg:hidden">
          <div
            className="absolute inset-0 bg-[#071226]/55 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />

          <aside className="absolute left-0 top-0 flex h-full w-[84%] max-w-[320px] flex-col bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] text-white shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f3d77a]">
                  MoBiz.mu
                </div>
                <div className="mt-1 text-xl font-semibold tracking-tight">
                  Dashboard
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 space-y-1.5 overflow-y-auto px-3 py-4">
              {dashboardNav.map((item) => {
                const Icon = item.icon;
                const active =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium transition-all duration-200",
                      active
                        ? "bg-white text-[#071226]"
                        : "text-white/78 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                );
              })}
            </nav>

            <div className="border-t border-white/10 px-5 py-4">
              <LogoutButton />
            </div>
          </aside>
        </div>
      ) : null}
    </>
  );
}
