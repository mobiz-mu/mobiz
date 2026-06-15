"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";
import { directoryCities } from "@/lib/directory";

export default function DirectoryFilters({
  basePath,
}: {
  basePath: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [term, setTerm] = useState(searchParams.get("q") || "");
  const city = searchParams.get("city") || "";

  function pushParams(next: { q?: string; city?: string }) {
    const params = new URLSearchParams(searchParams.toString());

    if (next.q !== undefined) {
      if (next.q) params.set("q", next.q);
      else params.delete("q");
    }
    if (next.city !== undefined) {
      if (next.city) params.set("city", next.city);
      else params.delete("city");
    }

    const query = params.toString();
    router.push(query ? `${basePath || pathname}?${query}` : basePath || pathname);
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <form
        className="relative flex-1"
        onSubmit={(e) => {
          e.preventDefault();
          pushParams({ q: term.trim() });
        }}
      >
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search businesses..."
          aria-label="Search businesses"
          className="h-12 w-full rounded-full border border-slate-200 bg-white pl-11 pr-4 text-sm text-[#071226] outline-none transition focus:border-[#d4af37]"
        />
      </form>

      <select
        value={city}
        onChange={(e) => pushParams({ city: e.target.value })}
        aria-label="Filter by city"
        className="h-12 rounded-full border border-slate-200 bg-white px-5 text-sm font-medium text-[#071226] outline-none transition focus:border-[#d4af37]"
      >
        <option value="">All cities</option>
        {directoryCities.map((c) => (
          <option key={c.slug} value={c.slug}>
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}
