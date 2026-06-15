import Link from "next/link";
import {
  BadgeCheck,
  Clock,
  Globe,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import { getCategory } from "@/lib/directoryCategories";
import {
  getDirectoryCity,
  tierBadge,
  type DirectoryBusiness,
} from "@/lib/directory";
import BusinessContactButtons from "@/components/directory/BusinessContactButtons";

const BASE_URL = "https://mobiz.mu";

export default function BusinessProfile({
  business,
}: {
  business: DirectoryBusiness;
}) {
  const category = getCategory(business.category);
  const city = business.city ? getDirectoryCity(business.city) : undefined;
  const { showVerified, showFeatured } = tierBadge(business);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description || undefined,
    url: `${BASE_URL}/directory/business/${business.slug}`,
    telephone: business.phone || business.whatsapp || undefined,
    email: business.email || undefined,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address || undefined,
      addressLocality: city?.name || business.city || undefined,
      addressRegion: city?.region || undefined,
      addressCountry: "MU",
    },
    aggregateRating:
      business.rating && business.rating > 0
        ? {
            "@type": "AggregateRating",
            ratingValue: business.rating,
            reviewCount: business.review_count || 0,
          }
        : undefined,
  };

  return (
    <main className="bg-white text-[#071226]">
      <section className="relative overflow-hidden bg-[#071226] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.2),transparent_38%)]" />
        <div className="relative mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <nav
            aria-label="Breadcrumb"
            className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-white/55"
          >
            <Link href="/directory" className="hover:text-white">
              Directory
            </Link>
            <span aria-hidden>/</span>
            {category ? (
              <>
                <Link
                  href={`/directory/category/${category.slug}`}
                  className="hover:text-white"
                >
                  {category.label}
                </Link>
                <span aria-hidden>/</span>
              </>
            ) : null}
            <span className="text-[#f3d77a]">{business.name}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2">
            {showVerified ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/40 bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
                <BadgeCheck className="h-3.5 w-3.5" />
                Verified Business
              </span>
            ) : null}
            {showFeatured ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-[#f3d77a]/30 bg-[#f3d77a]/10 px-3 py-1 text-xs font-bold text-[#f3d77a]">
                <Star className="h-3.5 w-3.5" />
                Featured
              </span>
            ) : null}
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            {business.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-white/75">
            {category ? (
              <Link
                href={`/directory/category/${category.slug}`}
                className="font-semibold text-[#f3d77a] hover:underline"
              >
                {category.label}
              </Link>
            ) : null}
            {city ? (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4" />
                {city.name}, {city.region}
              </span>
            ) : null}
            {business.rating && business.rating > 0 ? (
              <span className="inline-flex items-center gap-1.5 text-amber-300">
                <Star className="h-4 w-4 fill-current" />
                {business.rating.toFixed(1)} ({business.review_count || 0})
              </span>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="text-xl font-bold">About</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-slate-700">
              {business.description || "No description provided yet."}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {business.address ? (
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a98221]" />
                  <span className="text-slate-700">{business.address}</span>
                </div>
              ) : null}
              {business.opening_hours ? (
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                  <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#a98221]" />
                  <span className="text-slate-700">{business.opening_hours}</span>
                </div>
              ) : null}
              {business.website ? (
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-[#a98221]" />
                  <a
                    href={business.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="truncate text-[#071226] hover:underline"
                  >
                    {business.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              ) : null}
              {business.email ? (
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#a98221]" />
                  <a
                    href={`mailto:${business.email}`}
                    className="truncate text-[#071226] hover:underline"
                  >
                    {business.email}
                  </a>
                </div>
              ) : null}
            </div>
          </div>

          <aside className="h-fit rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
            <h2 className="text-base font-bold">Contact this business</h2>
            <div className="mt-4">
              <BusinessContactButtons
                businessName={business.name}
                phone={business.phone}
                whatsapp={business.whatsapp || business.phone}
              />
            </div>

            <div className="mt-5 border-t border-slate-200 pt-4 text-xs leading-6 text-slate-500">
              Is this your business?{" "}
              <Link href="/directory/submit" className="font-semibold text-[#071226] hover:underline">
                Claim or update your listing
              </Link>
              .
            </div>
          </aside>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {category ? (
            <Link
              href={`/directory/category/${category.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#071226] hover:bg-[#071226] hover:text-white"
            >
              More {category.label} in Mauritius
            </Link>
          ) : null}
          {city ? (
            <Link
              href={`/directory/city/${city.slug}`}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#071226] hover:bg-[#071226] hover:text-white"
            >
              Businesses in {city.name}
            </Link>
          ) : null}
          <Link
            href="/directory"
            className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-[#071226] hover:bg-[#071226] hover:text-white"
          >
            Browse all categories
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </main>
  );
}
