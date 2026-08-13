# Supriya & Rahul — Wedding Invite

Mobile-first, single-scroll wedding invitation site built with React, TypeScript, and
Vite. Guests land on a cover page, tap an animated envelope/wax-seal to "open" the
invitation, then scroll through the formal invite, a countdown, event details, venue
info, and an RSVP form backed by Supabase.

This is the production implementation of the `Wedding Invite.dc.html` design exported
from Claude Design — see `../README.md`, `../chats/`, and `../project/` in the repo
root for the original design source and design conversation.

## Features

- **Cover → envelope-open gate.** Tapping the wax seal plays a crack/open animation,
  then reveals the rest of the site and smooth-scrolls to the invitation.
- **Formal invitation card** rendered over the couple's artwork.
- **Countdown** to the wedding date.
- **Event cards** (Haldi / Sangeet / Wedding), expandable on tap, each with an
  "Add to calendar" link that opens Google Calendar or downloads an `.ics` file
  depending on the guest's device.
- **Venue** section with a Google Maps link and native share button.
- **RSVP form**, including which of the three events each guest plans to attend,
  submitted straight to Supabase from the browser.
- **Background music** with a floating mute toggle, starting on the envelope tap so it
  respects browser autoplay rules.
- **Personalised greeting** — visiting with `?guest=Name` in the URL greets that guest
  by name on the cover.

## Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server / build
- [Supabase](https://supabase.com/) (`@supabase/supabase-js`) for RSVP storage
- [oxlint](https://oxc.rs/) for linting
- Plain inline styles throughout — no CSS framework or component library

## Prerequisites

- Node.js 22+ (matches the version CI runs — see `.github/workflows/ci.yml`)
- A [Supabase](https://supabase.com/) project (free tier is enough) for the RSVP form

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the env template and fill in your Supabase project's URL and anon (public) key
   (Project Settings → API in the Supabase dashboard):

   ```bash
   cp .env.example .env.local
   ```

   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-public-key
   ```

   `.env.local` is git-ignored. Without these set, the site still runs but RSVP
   submissions will fail (a warning is logged to the console).

3. Create the `rsvps` table. In the Supabase SQL editor for your project, run:

   ```
   supabase/rsvps.sql
   ```

   This creates the table with row-level security enabled and a policy that allows
   anonymous inserts only — RSVPs can't be read, updated, or deleted from the client,
   only from the Supabase dashboard or with the service role key.

   If you already have an `rsvps` table from before the "which events are you
   attending" checkboxes were added, run `supabase/add-attending-events-column.sql`
   instead (or as well — both are safe to re-run).

4. Add the background music file. The player expects an MP3 at:

   ```
   public/audio/background-music.mp3
   ```

   If it's missing, the site still works — playback just silently fails to start. The
   loop window (which part of the track to play/repeat) is configured at the top of
   `src/hooks/useBackgroundMusic.ts`:

   ```ts
   export const MUSIC_LOOP_START_SECONDS = 0;
   export const MUSIC_LOOP_END_SECONDS: number | null = 42; // null = loop whole file
   ```

## Develop

```bash
npm run dev
```

Starts the Vite dev server (default `http://localhost:5173`) with hot reload.

## Other scripts

```bash
npm run lint      # oxlint
npm run build     # tsc -b && vite build -> dist/
npm run preview   # serve the production build locally
```

CI (`.github/workflows/ci.yml`) runs lint, a type-check, and a full build on every
push/PR to `develop`.

## Deploying

`npm run build` outputs a static site to `dist/` — deploy it to any static host
(Vercel, Netlify, Cloudflare Pages, GitHub Pages, etc.). No server component is
needed; RSVP submissions go straight from the browser to Supabase. Make sure your
host has `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` set as build-time
environment variables, matching `.env.local`.

## Project structure

```
app/
├── public/
│   ├── audio/background-music.mp3   # not committed — see Setup step 4
│   └── favicon.svg
├── src/
│   ├── assets/                      # cover/invitation artwork, downloadable invite image
│   ├── components/                  # one component per section (Cover, Invitation, Events, ...)
│   ├── data/wedding.ts              # event details, wedding date/venue, calendar links
│   ├── hooks/                       # useCountdown, useReveal, useParallax, useBackgroundMusic
│   ├── lib/                         # supabase client, .ics + Google Calendar link builders
│   └── App.tsx                      # section order, top-level state (opened, music)
└── supabase/
    ├── rsvps.sql                    # base table + RLS policy
    └── add-attending-events-column.sql
```

### Swapping content

- **Names, date, venue, event details:** `src/data/wedding.ts`
- **Section order:** the JSX in `src/App.tsx`
- **Artwork:** replace the files under `src/assets/` (keep the same filenames, or
  update the `import` paths in `Cover.tsx` / `Invitation.tsx` — and their `width`/
  `height`/`aspectRatio` if the new image's dimensions differ, to avoid layout shift)
- **Feature flags:** `SHOW_PETALS` and `SHOW_COUNTDOWN` at the top of `App.tsx`
