# M5 — Business Directory MVP

A complete, build-clean directory: public browse/search, SEO category & city
pages, business profiles with schema, a public submission form, and an admin
approval workflow in the dashboard.

## IMPORTANT — run the schema first

This sandbox has no DB access, so the table is delivered as SQL you run yourself.
**Before deploying the code**, run `directory-schema.sql` in your Supabase SQL
editor. It creates `directory_businesses`, indexes, RLS policies, and two demo
rows (delete those after testing).

Until the table exists, every directory query is written defensively to return
empty results — pages render their empty states instead of crashing.

## Architecture (reuse-first, matches your existing patterns)

- **Public reads** → server components using `supabaseServer` (service role), so
  they work regardless of RLS.
- **Submission** → `POST /api/directory` using `supabaseServer` (mirrors
  `/api/leads`); inserts `status = 'pending'`.
- **Admin approve/reject** → dashboard page mirroring the leads page
  (`supabaseBrowser` + the existing `StatusSelect`, with `directory_businesses`
  added to its table union).
- **Categories** = static taxonomy (18, fixed). **Cities** = the same 9 from the
  M2 local-SEO engine (single source of truth).
- **Tracking** → profile contact buttons fire `whatsapp_click` / `phone_click`
  and submissions fire `lead_form_submit` via the M3 tracker, so directory
  activity flows into the M4 dashboard KPIs automatically.

## Routes added

Public (all inside `(public)` → full header/footer/WhatsApp):
- `/directory` — hero, search + city filter, category grid with live counts,
  results mode when filtering.
- `/directory/category/[category]` — SEO page per category (18 static slugs,
  `dynamicParams=false`), BreadcrumbList schema, filters, related categories.
- `/directory/city/[city]` — SEO page per city (9 static slugs).
- `/directory/business/[slug]` — profile (approved only) with **LocalBusiness**
  schema, tracked WhatsApp/Call buttons, verified/featured badges.
- `/directory/submit` — public submission form + listing-tier pricing.

API:
- `POST /api/directory` — validate + insert pending submission.

Dashboard:
- `/dashboard/directory` — approve/reject (StatusSelect), toggle
  featured/verified, set tier; KPI cards; search + status filter; mobile cards.
- Added "Directory" to the dashboard sidebar nav.

## New files

Libs: `lib/directoryCategories.ts`, `lib/directory.ts`.
API: `app/api/directory/route.ts`.
Components: `components/directory/BusinessCard.tsx`, `DirectoryFilters.tsx`,
`SubmitForm.tsx`, `BusinessProfile.tsx`, `BusinessContactButtons.tsx`.
Pages: the 5 public routes + `dashboard/directory/page.tsx`.

## Modified files

- `components/dashboard/StatusSelect.tsx` — added `directory_businesses` to the
  `table` union (one line).
- `lib/dashboard-nav.ts` — added the Directory nav item.
- `app/sitemap.ts` — now async; adds `/directory`, `/directory/submit`, the 18
  category pages, the 9 city pages, and approved business profiles (the latter
  via a try/catch DB read that returns `[]` if the DB is unavailable at build).

## Listing tiers (as briefed)

Free (basic), Premium (Rs 300/mo), Featured (Rs 600/mo), Verified (Rs 1,000/mo).
For the MVP these are stored on the row (`tier`, `featured`, `verified`) and set
by an admin; the public side renders the badges and orders featured first.
Payment/self-serve upgrades are a deliberate later step (ties into M6 billing).

## Validation

- `tsc --noEmit`: clean (exit 0).
- ESLint on every file I authored/modified: clean (exit 0). The one
  `set-state-in-effect` hit on the admin page's mount-fetch (the same pattern your
  leads page uses) is handled with an explicit, commented `eslint-disable-next-line`.
- I could not run queries against a live DB here, so query **shapes** were
  verified against the schema and the SELECT/INSERT column lists were checked for
  consistency; please smoke-test against your Supabase after running the SQL.

## How to test

1. Run `directory-schema.sql` in Supabase (keeps 2 demo rows).
2. `npm run build && npm start`.
3. Visit `/directory` → see categories with counts and the 2 demo businesses via
   search/city filter. Open a category and a city page.
4. Open a business profile → WhatsApp/Call buttons (tracked), LocalBusiness JSON-LD.
5. `/directory/submit` → submit a test business → success message; it inserts as
   **pending**.
6. `/dashboard/directory` → the pending submission appears; set status to
   **approved**, toggle Featured/Verified, change tier → it then shows publicly.
7. Delete the demo rows when done.

## SEO checklist

- After deploy, confirm `/sitemap.xml` lists `/directory`, the 18
  `/directory/category/*` and 9 `/directory/city/*` URLs, then resubmit in Search
  Console. Approved business URLs appear automatically once the DB is reachable
  at build/runtime.
- Each category/city page has unique title + canonical; profiles emit
  LocalBusiness schema.

## Deploy

Run the SQL, copy `mobiz-m5/src/...` into your repo (13 new, 3 modified), then:

```
npm run build
git add -A
git commit -m "M5: business directory MVP (browse, SEO pages, submit, admin approval)"
git push
```

## Deliberately deferred (so MVP stays lean & safe)

- Reviews/ratings are display-only fields for now (no review submission/moderation).
- Photo uploads: the schema has a `photos` array; the submit form collects core
  details first. Wire image upload (Supabase Storage) in a follow-up.
- Self-serve tier payments belong with the M6/M7 billing work.
