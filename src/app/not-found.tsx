import Link from "next/link";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,123,147,0.06),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(17,155,126,0.06),transparent_24%)]" />
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d9c27c] to-transparent" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9a8] bg-[#fffdf7] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
            <Search className="h-3.5 w-3.5" />
            Page Not Found
          </div>

          <h1
            className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            This page could not be found.
          </h1>

          <p
            className="mx-auto mt-4 max-w-2xl text-[15px] leading-8 text-slate-600 sm:text-[16px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            The page you are looking for may have been moved, removed, or the
            link may be incorrect. Explore MoBiz.mu for premium website design,
            digital marketing, accounting, logistics, branding, and business
            solutions in Mauritius.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#d9c27c] bg-[#071226] px-6 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.12)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <Home className="h-4 w-4" />
              Back to Homepage
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-[#071226] shadow-[0_10px_24px_rgba(7,18,38,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d9c27c]"
            >
              Contact MoBiz.mu
              <ArrowRight className="h-4 w-4 text-[#caa43f] transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}