import Link from "next/link";
import { BadgeCheck, MapPin, Phone, Star } from "lucide-react";
import { getCategory } from "@/lib/directoryCategories";
import { getDirectoryCity, tierBadge, type DirectoryBusiness } from "@/lib/directory";

export default function BusinessCard({
  business,
}: {
  business: DirectoryBusiness;
}) {
  const category = getCategory(business.category);
  const city = business.city ? getDirectoryCity(business.city) : undefined;
  const { showVerified, showFeatured } = tierBadge(business);

  return (
    <Link
      href={`/directory/business/${business.slug}`}
      className="group flex h-full flex-col rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(15,23,42,0.10)]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-[#071226]">
            {business.name}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[#a98221]">
            {category?.label || business.category}
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-1.5">
          {showVerified ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
              <BadgeCheck className="h-3.5 w-3.5" />
              Verified
            </span>
          ) : null}
          {showFeatured ? (
            <span className="inline-flex items-center gap-1 rounded-full border border-[#ead9a8] bg-[#fff8e8] px-2 py-0.5 text-[11px] font-bold text-[#8b6a18]">
              <Star className="h-3.5 w-3.5" />
              Featured
            </span>
          ) : null}
        </div>
      </div>

      {business.description ? (
        <p className="mt-3 line-clamp-2 flex-1 text-sm leading-6 text-slate-600">
          {business.description}
        </p>
      ) : (
        <div className="flex-1" />
      )}

      <div className="mt-4 flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
        {city ? (
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5" />
            {city.name}
          </span>
        ) : null}
        {business.phone ? (
          <span className="inline-flex items-center gap-1">
            <Phone className="h-3.5 w-3.5" />
            {business.phone}
          </span>
        ) : null}
        {business.rating && business.rating > 0 ? (
          <span className="inline-flex items-center gap-1 text-amber-600">
            <Star className="h-3.5 w-3.5 fill-current" />
            {business.rating.toFixed(1)}
          </span>
        ) : null}
      </div>

      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#071226] transition group-hover:text-[#a98221]">
        View profile →
      </span>
    </Link>
  );
}
