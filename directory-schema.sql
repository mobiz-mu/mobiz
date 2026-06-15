-- ============================================================================
-- MoBiz.mu — Business Directory (M5) schema
-- Run this in the Supabase SQL editor BEFORE deploying the M5 code.
-- ============================================================================

create table if not exists public.directory_businesses (
  id            uuid primary key default gen_random_uuid(),
  created_at    timestamptz not null default now(),

  name          text not null,
  slug          text not null unique,
  category      text not null,            -- category slug (see lib/directoryCategories)
  city          text,                     -- city slug (see lib/cityServicePages)
  description   text,
  phone         text,
  whatsapp      text,
  website       text,
  email         text,
  address       text,
  photos        text[] not null default '{}',
  opening_hours text,

  rating        numeric not null default 0,
  review_count  integer not null default 0,

  tier          text not null default 'free'
                  check (tier in ('free','premium','featured','verified')),
  featured      boolean not null default false,
  verified      boolean not null default false,
  status        text not null default 'pending'
                  check (status in ('pending','approved','rejected'))
);

-- Indexes for the public listing queries.
create index if not exists directory_businesses_status_idx
  on public.directory_businesses (status);
create index if not exists directory_businesses_category_idx
  on public.directory_businesses (category);
create index if not exists directory_businesses_city_idx
  on public.directory_businesses (city);
create index if not exists directory_businesses_featured_idx
  on public.directory_businesses (featured);

-- ----------------------------------------------------------------------------
-- Row Level Security
-- ----------------------------------------------------------------------------
-- The public pages read through the SERVICE ROLE (server components / API),
-- which bypasses RLS. These policies cover the browser-key paths:
--   * anonymous visitors may read APPROVED rows only
--   * authenticated admins (dashboard) may read & update everything
-- Public submissions are inserted via the service-role API route, so no
-- public INSERT policy is required.
-- ----------------------------------------------------------------------------

alter table public.directory_businesses enable row level security;

drop policy if exists directory_public_read on public.directory_businesses;
create policy directory_public_read
  on public.directory_businesses
  for select
  using (status = 'approved');

drop policy if exists directory_auth_read on public.directory_businesses;
create policy directory_auth_read
  on public.directory_businesses
  for select
  to authenticated
  using (true);

drop policy if exists directory_auth_update on public.directory_businesses;
create policy directory_auth_update
  on public.directory_businesses
  for update
  to authenticated
  using (true)
  with check (true);

-- ----------------------------------------------------------------------------
-- Optional: a couple of sample approved rows so the pages aren't empty.
-- Delete these after testing.
-- ----------------------------------------------------------------------------
insert into public.directory_businesses
  (name, slug, category, city, description, phone, whatsapp, website, tier, featured, verified, status, rating, review_count)
values
  ('Island Electrical Services', 'island-electrical-services-demo1', 'electricians', 'port-louis',
   'Licensed electricians serving Port Louis and surrounding areas. Installations, repairs and emergency callouts.',
   '+230 5xxxxxxx', '+230 5xxxxxxx', null, 'verified', true, true, 'approved', 4.8, 24),
  ('Coastline Plumbing', 'coastline-plumbing-demo2', 'plumbers', 'grand-baie',
   'Reliable plumbing repairs and installations across the north.',
   '+230 5xxxxxxx', '+230 5xxxxxxx', null, 'featured', true, false, 'approved', 4.6, 11)
on conflict (slug) do nothing;
