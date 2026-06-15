# MoBiz.mu — Transformation Plan & Phase-4 Slice 1

This document is the "before coding" deliverable: an honest read of the current
codebase, the real risks, a phased plan mapped to your milestones M1–M7, and a
record of the first production-ready slice that ships with it.

---

## 1. What you actually have

This is **not** a small agency site. It is already a substantial platform
(~33,400 lines of TypeScript/TSX, ~100 route files, ~58 components) on a modern
stack:

- **Next.js 16 / React 19**, App Router, React Compiler enabled, Tailwind v4.
- **Supabase** auth + data (`leads`, `newsletter_subscribers`, customers,
  quotations, invoices, etc.), with route protection in `middleware.ts`.
- A **full internal CRM dashboard** under `(dashboard)/`: leads, customers,
  quotations, invoices, proposals, testimonials, portfolio, newsletters,
  analytics, users, settings — with PDF generation and print views.
- A **data-driven SEO engine already in place**: two typed registries —
  `seoLandingPages.ts` (7 core service slugs) and `businessSeoPages.ts`
  (22 niche slugs) — each rendered by a shared component
  (`SeoLandingPage`, `BusinessSeoLandingPage`) and exposed as a top-level route.
  That is exactly the "reusable, data-driven, not duplicated" pattern your brief
  asks for. **The right move is to extend this pattern, not replace it.**
- Blog + portfolio (file-based data in `lib/blog.ts`, `lib/portfolio.ts`),
  `sitemap.ts`, `robots.ts`, OG/Twitter image routes, JSON-LD in the root layout.
- Lead pipeline: `lib/leads.ts` (validate + persist to Supabase) behind
  `/api/leads`. There is also a chatbot, domain-check, and document APIs.

**Branding tokens** (keep these): navy `#071226`, gold `#d4af37` (note the SEO
components use a brighter gold `#f3d77a` inline — see risks), ivory `#f8f6f1`;
fonts Poppins + Quicksand.

## 2. Risks worth knowing before touching anything

1. **National SEO pages have no header/footer.** Routes like
   `/website-design-mauritius` live at `src/app/<slug>/` — *outside* the
   `(public)` group — so they render with **no navigation, no footer links, and
   no floating WhatsApp button**. These are your highest-intent pages and they
   leak conversions and internal-link equity. (The new city pages are placed
   *inside* `(public)` so they don't share this flaw; wrapping the national pages
   the same way is an easy, high-value follow-up.)
2. **Sitemap is hand-maintained.** Every route is typed out manually in
   `sitemap.ts`, so new pages silently go un-indexed unless someone remembers.
   The new city engine self-registers to fix this for its own pages.
3. **Gold inconsistency.** `--mobiz-gold` is `#d4af37` in `globals.css` but the
   SEO components hardcode `#f3d77a`. Pick one before a brand polish pass.
4. **Build needs live services.** A full `next build` here reaches Supabase/
   OpenAI at build time; it can't run in an offline sandbox. Validation in this
   slice was done with `tsc --noEmit` (passes clean) + ESLint (clean) + a runtime
   check of the generated data. Run `npm run build` in your own environment after
   dropping the files in.
5. **Scope realism.** The brief is a multi-week program (12 phases). Shipping it
   as one dump would be the opposite of "a serious platform." It should land as
   reviewable vertical slices, each one type-safe and build-clean. That is how
   the plan below is structured.

## 3. Phased plan (mapped to your M1–M7)

- **M1 — Homepage + nav + trust.** Wrap national SEO pages in `(public)` to
  restore nav/footer (fixes Risk 1). Executive hero rebuild, trust bar with real
  stats, testimonials/case-study cards as reusable components. Unify gold token.
- **M2 — Service + SEO pages + linking.** Extend the existing SEO registries;
  add the **local city pages** (this slice). Add national→city internal links and
  a "Service areas" hub. Convert the manual sitemap to mostly auto-generated.
- **M3 — Forms + WhatsApp capture + tracking.** Extend `lib/leads.ts` for the
  three lead magnets (SEO audit, website review, consultation); add the extra
  fields (WhatsApp number, website URL); WhatsApp redirect with prefilled lead
  details; fire analytics events via the existing `/api/analytics/track`.
- **M4 — Dashboard polish.** Tighten `DashboardShell`/sidebar/tables, empty &
  loading states, status badges, KPI cards; add Directory + Membership nav once
  M5/M6 land.
- **M5 — Directory MVP.** New Supabase tables (`directory_businesses`,
  categories), submission form + admin approval, category/city pages reusing the
  SEO renderer pattern, free/premium/featured/verified tiers.
- **M6 — Membership.** `/business-club` pages + member dashboard; plans wired to
  Supabase; gating via existing auth/middleware.
- **M7 — Analytics & recurring revenue.** MRR/active-members KPIs in the
  dashboard, GA4 + Meta Pixel, conversion events, recurring-revenue reporting.

## 4. What shipped in this slice (Phase 4 — Local SEO)

A complete, data-driven **city × service** landing-page engine. 9 cities × 3
services = **27 new indexable pages**, generated from one registry — zero
duplicated route files.

**New files**
- `src/lib/cityServicePages.ts` — typed registry of cities + service templates +
  generators (`cityServicePages`, `getCityServicePage`, `cityServiceSlugs`,
  `cityServiceSitemapEntries`). Each page gets city-specific copy (region, areas,
  local angle) so content is not thin/duplicate, plus an internal-link mesh
  (sibling services in the same city → national hub → same service in 2 nearby
  cities).
- `src/components/seo/CityServiceLandingPage.tsx` — premium navy/gold renderer
  matching the existing SEO pages, with **BreadcrumbList + Service + LocalBusiness
  (geo + areaServed) + FAQPage** JSON-LD (richer than the national pages).
- `src/app/(public)/[cityServiceSlug]/page.tsx` — one dynamic route with
  `generateStaticParams` (the 27 slugs) and `dynamicParams = false`, so unknown
  paths 404 exactly as before and static routes always win. Placed inside
  `(public)` so these pages get the header, footer, and floating WhatsApp.

**Modified**
- `src/app/sitemap.ts` — one import + one spread; the 27 pages self-register.

**Routes created** (examples): `/website-design-port-louis`,
`/seo-services-grand-baie`, `/accounting-services-curepipe`, … (all 9 cities ×
{website-design, seo-services, accounting-services}).

**Validation:** `tsc --noEmit` clean · ESLint clean · runtime check confirms 27
unique slugs, 135 internal links, 0 broken, 0 collisions with existing routes.

## 5. How to apply & deploy

1. Copy the four files from `mobiz-changes/src/...` into your repo at the same
   paths (three are new; `sitemap.ts` replaces the existing one — diff is just the
   import and the spread).
2. `npm run build` locally to confirm in your real environment.
3. Confirm the WhatsApp number in `cityServicePages.ts` (`WHATSAPP_NUMBER`)
   matches the one used elsewhere (`23055068119`).
4. Deploy as usual (Vercel/your host). No env-var or DB changes needed — these
   pages are fully static.

## 6. Google Search Console checklist (for this slice)

- Confirm `https://mobiz.mu/sitemap.xml` now lists the 27 `/<service>-<city>`
  URLs, then **resubmit the sitemap**.
- Use **URL Inspection → Request indexing** on 3–4 priority pages (e.g.
  `website-design-port-louis`, `seo-services-grand-baie`).
- After a few days, check Performance → filter by the city queries to see
  impressions building.

## 7. Suggested next tasks

1. Wrap the national SEO pages in `(public)` (fixes Risk 1) and add a
   national→city internal-link block + a `/service-areas` hub.
2. Unify the gold token (`#d4af37` vs `#f3d77a`).
3. Begin M3: extend `lib/leads.ts` + `/api/leads` for the three lead magnets and
   wire WhatsApp-redirect-with-details + analytics events.
