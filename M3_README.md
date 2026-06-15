# M3 — Lead Magnet Forms + WhatsApp Tracking + Conversion System

## What I analysed first (and reused, not rebuilt)

- **Lead pipeline:** `lib/leads.ts` (validate + persist) behind `POST /api/leads`,
  writing to the Supabase `leads` table. The contact form already uses it. I
  **extended** this — no second lead system.
- **Leads table columns** (from the existing insert): `full_name, company_name,
  email, phone, service, message, source, status, created_at`. There is **no**
  `whatsapp`/`website` column, so I store those extras safely without a migration
  (see below).
- **Analytics:** `POST /api/analytics/track` writes to `analytics_events`. The
  dashboard analytics (`lib/analytics.ts`) already counts events containing
  "whatsapp", "quote", "lead", "submit", "cta" as conversions — so the events I
  fire show up automatically.
- **WhatsApp:** number `23055068119` and `CONTACT_WHATSAPP_URL` live in
  `lib/contact-data.ts` — reused everywhere.
- **Contact form** styling/validation/success pattern in `ContactPageClient.tsx`
  — mirrored for visual consistency.

## How leads are stored (no schema change)

Lead-magnet submissions write to the **same `leads` table** using only existing
columns:
- `source` ← the magnet key: `free_seo_audit`, `free_website_review`, or
  `free_business_consultation`.
- WhatsApp number, website URL and preferred contact are folded into a labelled
  block at the top of `message`, e.g. `[Free SEO Audit request]` so nothing is
  lost and it is visible in the dashboard.

This means inserting an unknown column can never throw, and existing contact /
newsletter flows are untouched.

## New files

- `src/lib/track.ts` — client tracker (uses `sendBeacon` so click-then-navigate
  events still fire; never throws). Events: `lead_form_view`, `lead_form_submit`,
  `whatsapp_click`, `phone_click`, `quote_click`.
- `src/lib/leadMagnets.ts` — data registry for the 3 magnets (copy, benefits,
  trust, FAQs, service + preferred-contact options) and the pre-filled WhatsApp
  URL builder.
- `src/components/lead/LeadMagnetForm.tsx` — shared form: all required fields,
  validation, success + error states; on success it saves the lead, fires
  `lead_form_submit`, then opens WhatsApp with the details pre-filled.
- `src/components/lead/LeadMagnetPage.tsx` — premium navy/gold page template
  (hero, benefits, trust, FAQ + FAQPage schema, internal links) + metadata helper.
- `src/components/lead/LeadMagnetCTA.tsx` — reusable CTA cards linking to the 3
  magnets + "WhatsApp Us Now", with `quote_click` / `whatsapp_click` tracking.
- `src/app/(public)/free-seo-audit/page.tsx`
- `src/app/(public)/free-website-review/page.tsx`
- `src/app/(public)/free-business-consultation/page.tsx`
  (all inside `(public)` → full header/footer/WhatsApp; full metadata + canonical
  + OG + Twitter.)

## Modified files

- `src/lib/leads.ts` — added the `lead_magnet` type to validation + persistence.
  Contact and newsletter flows unchanged.
- `src/components/ui/WhatsAppFloat.tsx` — floating button now fires
  `whatsapp_click` (design unchanged).
- `src/app/(dashboard)/dashboard/leads/page.tsx` — additive **Source** column +
  badge + a "Source" filter (read-only display of the existing `source` column).
  Nothing else changed.
- `src/components/seo/SeoLandingPage.tsx` — renders `<LeadMagnetCTA />` (covers
  Website Design, SEO Services, Digital Marketing + the other core SEO pages).
- `src/app/(public)/page.tsx`, `contact/page.tsx`, `services/page.tsx` — added
  `<LeadMagnetCTA />`.
- `src/app/sitemap.ts` — registered the 3 new pages.

## CTA placement summary

Homepage · Contact · Services · Website Design · SEO Services · Digital Marketing
(via the shared `SeoLandingPage`, which also adds it to ecommerce, accounting,
company-registration and VAT pages) · floating WhatsApp button now tracked.

## Validation done

- `tsc --noEmit`: **clean** (exit 0) after clearing stale `.next` cache.
- ESLint on **all files I authored**: **clean** (exit 0).
- One ESLint warning remains in `dashboard/leads/page.tsx` line ~68
  (`void loadLeads()` inside `useEffect`) — this is **pre-existing** (line 54 in
  your original upload) and unrelated to M3. Next 16 does not run ESLint during
  `next build`, so it does not block the build. Left untouched to respect scope.
- Runtime check: registry returns 3 magnets with unique keys; the WhatsApp URL
  builder produces a valid `wa.me/23055068119?text=...` deep link with details.

## How to test each form

1. Run `npm run build` then `npm start` (or `npm run dev`).
2. Visit `/free-seo-audit`, `/free-website-review`, `/free-business-consultation`.
3. Fill name + email + service (required) and submit.
   - Expect a green success card and a new WhatsApp tab opening with all details
     pre-filled to `wa.me/23055068119`.
4. Try submitting with an invalid email → inline error state, no navigation.
5. On mobile, confirm fields stack, are tappable, and WhatsApp opens the app.

## Where leads appear in the dashboard

`/dashboard/leads`. New submissions show with:
- **Source** badge = "Free SEO Audit" / "Free Website Review" / "Free Consultation".
- The `[... request]` header plus WhatsApp/website/preferred-contact inside the
  **Message** column.
- Use the new **Source** filter to view only lead-magnet leads.
They also feed the **Analytics** dashboard conversion counts automatically.

## To verify tracking

`GET /api/analytics/track` returns the total event count. After submitting a form
and clicking WhatsApp, the count increases (events: `lead_form_view`,
`lead_form_submit`, `whatsapp_click`, `quote_click`).

## Later: GA4 / Meta Pixel (optional, not in M3)

These events already persist server-side. To also send them to GA4 / Meta:
- Add GA4 (`gtag`) and Meta Pixel scripts in `src/app/layout.tsx`.
- In `src/lib/track.ts`, after the `sendBeacon` call, also call
  `window.gtag?.('event', eventName, metadata)` and
  `window.fbq?.('trackCustom', eventName, metadata)`.
- Recommended GA4 event names mirror these: `lead_form_view`, `lead_form_submit`,
  `whatsapp_click`, `phone_click`, `quote_click`. Mark `lead_form_submit` as a
  conversion in GA4 and as a custom conversion in Meta Events Manager.

## Apply & deploy

Copy the files from `mobiz-m3/src/...` into your repo at the same paths
(11 new, 6 modified), then:

```
npm run build
git add -A
git commit -m "M3: lead magnet forms + WhatsApp + conversion tracking"
git push
```

No env-var or DB schema changes are required.
