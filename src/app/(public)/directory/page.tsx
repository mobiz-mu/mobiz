import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Search as SearchIcon } from "lucide-react";
import DirectoryFilters from "@/components/directory/DirectoryFilters";
import BusinessCard from "@/components/directory/BusinessCard";
import EmptyState from "@/components/dashboard/EmptyState";
import { directoryCategories } from "@/lib/directoryCategories";
import {
  getApprovedBusinesses,
  getCategoryCounts,
  getDirectoryCity,
} from "@/lib/directory";

const BASE_URL = "https://mobiz.mu";

export const metadata: Metadata = {
  title: "MoBiz Business Directory Mauritius | Find Local Businesses",
  description:
    "Discover trusted local businesses across Mauritius — electricians, plumbers, accountants, restaurants, hotels and more. List your business free on the MoBiz directory.",
  alternates: { canonical: `${BASE_URL}/directory` },
  openGraph: {
    title: "MoBiz Business Directory Mauritius",
    description:
      "Find trusted local businesses across Mauritius, or list your own for free.",
    url: `${BASE_URL}/directory`,
    siteName: "MoBiz.mu",
    type: "website",
  },
};

type SearchParams = { q?: string; city?: string };

export default async function DirectoryIndexPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { q, city } = await searchParams;
  const isFiltering = Boolean(q || city);

  const [results, counts] = await Promise.all([
    isFiltering
      ? getApprovedBusinesses({ search: q, city, limit: 60 })
      : Promise.resolve([]),
    getCategoryCounts(),
  ]);

  const cityName = city ? getDirectoryCity(city)?.name : undefined;

  return (
    <main className="bg-white text-[#071226]">
      <section className="relative overflow-hidden bg-[#071226] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.2),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_38%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="inline-flex rounded-full border border-[#f3d77a]/30 bg-[#f3d77a]/10 px-4 py-2 text-sm font-semibold text-[#f3d77a]">
            MoBiz Business Directory
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Find trusted local businesses in Mauritius
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Search by service and city, or browse categories below. Run a
            business? List it free.
          </p>

          <div className="mt-8 max-w-3xl">
            <Suspense fallback={null}>
              <DirectoryFilters basePath="/directory" />
            </Suspense>
          </div>

          <div className="mt-4">
            <Link
              href="/directory/submit"
              className="inline-flex items-center justify-center rounded-full bg-[#f3d77a] px-6 py-3 text-sm font-bold text-[#071226] transition hover:bg-white"
            >
              Add your business — free
            </Link>
          </div>
        </div>
      </section>

      {isFiltering ? (
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">
            {results.length} result{results.length === 1 ? "" : "s"}
            {q ? ` for “${q}”` : ""}
            {cityName ? ` in ${cityName}` : ""}
          </h2>

          {results.length ? (
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          ) : (
            <div className="mt-6">
              <EmptyState
                icon={SearchIcon}
                title="No businesses found"
                description="Try a different search or city. New listings are added regularly."
                action={
                  <Link
                    href="/directory"
                    className="rounded-full bg-[#071226] px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    Clear filters
                  </Link>
                }
              />
            </div>
          )}
        </section>
      ) : (
        <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Browse by category
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {directoryCategories.map((category) => {
              const Icon = category.icon;
              const count = counts[category.slug] || 0;
              return (
                <Link
                  key={category.slug}
                  href={`/directory/category/${category.slug}`}
                  className="group flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#071226]/5 text-[#0d1b3d] transition group-hover:bg-[#071226] group-hover:text-[#f3d77a]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-[#071226]">
                      {category.label}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-500">
                      {category.blurb}
                    </p>
                    <p className="mt-2 text-xs font-semibold text-[#a98221]">
                      {count} listed
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}
    </main>
  );
}
