-- Run this in the Supabase SQL editor for your project
-- (https://supabase.com/dashboard/project/_/sql/new)
--
-- Adds the "which celebrations are you attending" checkbox data to an
-- already-existing public.rsvps table. Safe to run more than once.

alter table public.rsvps
  add column if not exists attending_events text[] not null default '{}'::text[];
