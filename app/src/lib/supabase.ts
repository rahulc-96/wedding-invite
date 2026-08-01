import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  console.warn('Supabase env vars are missing — RSVP submission will fail. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.');
}

export const supabase = createClient(url, anonKey);

export interface RsvpRecord {
  attending: 'yes' | 'no';
  name: string;
  guests: number;
  note: string;
  guest_query?: string;
}
