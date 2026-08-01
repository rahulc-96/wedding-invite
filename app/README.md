# Rahul & Supriya — Wedding Invite

Mobile-first single-scroll wedding invitation, built with React + TypeScript + Vite.
This is the production implementation of the `Wedding Invite.dc.html` design exported
from Claude Design (see `../README.md`, `../chats/`, `../project/` for the source design
and the design conversation it came from).

Sections: cover with an "Open Invitation" gate, typeset invitation over the couple's
artwork, blessing note, countdown to the wedding, expandable Haldi / Sangeet / Wedding
event cards with "Add to calendar" (.ics), venue with a Google Maps link and share
button, an RSVP form backed by Supabase, a thank-you close, and a sticky bottom nav.
Visiting with `?guest=Name` in the URL greets that guest by name on the cover.

## Setup

```bash
npm install
```

Copy `.env.example` to `.env.local` and fill in your Supabase project's URL and anon
(public) key:

```bash
cp .env.example .env.local
```

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-public-key
```

Then, in the Supabase SQL editor for that project, run `supabase/rsvps.sql` to create
the `rsvps` table and its row-level-security policy (anonymous inserts allowed, no
read/update/delete from the client).

## Develop

```bash
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/` — deploy it to any static host (Vercel, Netlify,
Cloudflare Pages, etc.). No server component is needed; RSVP submissions go straight
from the browser to Supabase via `@supabase/supabase-js`.
