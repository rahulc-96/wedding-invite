-- Run this in the Supabase SQL editor for your project
-- (https://supabase.com/dashboard/project/_/sql/new)

create table if not exists public.rsvps (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  attending text not null check (attending in ('yes', 'no')),
  name text not null,
  guests smallint not null default 1,
  note text default '',
  guest_query text,
  attending_events text[] not null default '{}'::text[]
);

alter table public.rsvps enable row level security;

-- Allow anyone using the site's anon key to submit an RSVP.
create policy "Anyone can submit an RSVP"
  on public.rsvps
  for insert
  to anon
  with check (true);

-- No select/update/delete policy is created for the anon role, so
-- submitted RSVPs cannot be read back or edited from the client —
-- only from the Supabase dashboard or with the service role key.
