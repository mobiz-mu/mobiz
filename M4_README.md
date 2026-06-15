# M4 — Dashboard Enterprise Polish

Polish that propagates across the whole admin area, plus two correctness fixes —
done as a safe, contained slice rather than a rewrite of working CRUD pages.

## What I analysed first

- `(dashboard)/dashboard/layout.tsx` → `DashboardShell` → `DashboardSidebar`.
- `StatCard`, the overview page, and `lib/dashboard-data.ts` (the KPI queries).
- Confirmed: a real `customers` table exists; `analytics_events` is populated by
  the M3 tracker; a `LogoutButton` component already existed but was not used.

## Real gaps found and fixed

1. **No mobile navigation in the dashboard.** The sidebar was `hidden lg:block`
   and the shell header had no menu trigger — on phones there was no way to move
   between sections. Added a proper mobile drawer.
2. **`customersCount` was wrong** — it returned the *leads* count. Now queries
   the real `customers` table.
3. **No logout in the UI.** Added `LogoutButton` to the sidebar and mobile drawer.
4. **M3 conversion events weren't surfaced.** WhatsApp/phone/quote/form events now
   appear as KPIs.

## New files

- `src/components/dashboard/DashboardMobileNav.tsx` — hamburger + slide-in drawer
  with the full nav + logout; closes on link tap / overlay / Esc-style X; locks
  body scroll while open.
- `src/components/dashboard/StatusBadge.tsx` — reusable coloured status pill with
  sensible defaults for lead/invoice/quotation statuses (ready for the document
  list pages).
- `src/components/dashboard/EmptyState.tsx` — reusable empty state (icon, title,
  description, optional action).
- `src/components/dashboard/Skeleton.tsx` — `Skeleton`, `StatCardsSkeleton`,
  `TableSkeleton` loading primitives.

## Modified files

- `src/components/dashboard/StatCard.tsx` — **backward compatible** upgrade: new
  optional `icon`, `hint`, and `href` props (cards can now show an icon and link
  to their section). All existing `<StatCard title value tone change />` calls
  keep working unchanged.
- `src/components/dashboard/DashboardShell.tsx` — header now includes the mobile
  menu trigger and a clearer "Live Dashboard" status chip.
- `src/components/dashboard/DashboardSidebar.tsx` — added a signed-in footer with
  logout.
- `src/lib/dashboard-data.ts` — fixed `customersCount`; added `newLeadsCount`,
  `pendingInvoicesCount`, `paidInvoicesCount`; new `getConversionKpis()` reading
  `analytics_events` for `whatsapp_click`, `phone_click`, `quote_click`,
  `lead_form_submit` (resilient — returns 0 when empty).
- `src/app/(dashboard)/dashboard/page.tsx` — overview now has icon-rich, clickable
  KPI cards: a primary row (leads/new/customers/quotations/invoices) and a
  **conversion row** (WhatsApp clicks, phone clicks, quote requests, form
  submissions), plus finance cards with paid/pending hints.
- `src/app/(dashboard)/dashboard/leads/page.tsx` — uses the new `EmptyState` for
  the empty results and `TableSkeleton` for the loading state.

## Validation

- `tsc --noEmit`: clean (exit 0).
- ESLint on every file I authored/modified: clean (exit 0).
- The one remaining ESLint warning in `leads/page.tsx` (`void loadLeads()` in a
  `useEffect`) is **pre-existing** (present in your original upload) and unrelated
  to M4; Next 16 does not run ESLint during `next build`. Left untouched.

## How to verify

1. `npm run build`, then open `/dashboard` on desktop and on a narrow viewport.
   - Desktop: same layout, richer KPI cards (now clickable), logout in sidebar.
   - Mobile: tap the menu icon (top-left) → drawer slides in with full nav +
     logout; tapping a link navigates and closes it.
2. The overview's conversion KPIs reflect the events your M3 forms and buttons
   fire (WhatsApp/phone/quote/form). They will read 0 until events accumulate.
3. `/dashboard/leads` shows skeleton rows while loading and a friendly empty state
   when filters match nothing.

## Notes / ready-to-use follow-ups (not in this slice)

- `StatusBadge` is ready to drop into the Quotations / Invoices / Proposals list
  pages for read-only status columns (those pages were left untouched here to
  avoid risk).
- `getConversionKpis()` currently counts all-time; a 30-day window can be added
  later if you want period-over-period deltas.

## Apply & deploy

Copy `mobiz-m4/src/...` over your repo (4 new, 6 modified), then:

```
npm run build
git add -A
git commit -m "M4: dashboard enterprise polish (mobile nav, KPIs, states)"
git push
```

No env-var or DB schema changes required.
