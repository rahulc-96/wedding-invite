import { useState } from 'react';
import { events } from '../data/wedding';
import { Reveal } from './Reveal';
import { prefersAppleCalendar } from '../lib/calendar';

function splitEventDate(date: string) {
  const match = /^(\D+?)\s*(\d+)\s+(\d+)$/.exec(date.trim());
  if (!match) return { month: date, day: '', year: '', weekday: '' };
  const [, month, day, year] = match;
  const parsed = new Date(date);
  const weekday = Number.isNaN(parsed.getTime()) ? '' : parsed.toLocaleDateString('en-US', { weekday: 'short' });
  return { month, day, year, weekday };
}

function EventCard({ event, defaultOpen = false }: { event: (typeof events)[number]; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const calendarHref = prefersAppleCalendar() ? event.icsHref : event.googleHref;
  const { month, day, year, weekday } = splitEventDate(event.date);

  return (
    <Reveal style={{ border: '1px solid #ddc9a8', background: '#fdf8ef' }}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        style={{
          width: '100%',
          minHeight: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
          padding: '18px 20px',
          background: 'none',
          border: 0,
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span>
          <span
            style={{
              display: 'block',
              fontSize: 15,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: '#5c3d1f',
              fontWeight: 600,
            }}
          >
            {weekday && `${weekday}, `}
            {month}{' '}
            <span style={{ fontSize: 22, fontWeight: 700, color: '#7a1c2e', letterSpacing: 'normal' }}>{day}</span>{' '}
            {year}
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 23,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: '#7a1c2e',
              marginTop: 4,
            }}
          >
            {event.title}
          </span>
          <span
            style={{
              display: 'block',
              fontSize: 13,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: '#6d5a45',
              marginTop: 3,
            }}
          >
            {event.time}
          </span>
        </span>
        <span style={{ color: '#b08a4a', fontSize: 20 }}>{open ? '–' : '+'}</span>
      </button>
      {open && (
        <div style={{ padding: '0 20px 20px', borderTop: '1px solid #eadfc9' }}>
          <p style={{ margin: '14px 0 0', fontSize: 16, lineHeight: 1.7 }}>{event.description}</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '6px 14px', marginTop: 14, fontSize: 14 }}>
            <span style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8a6a44', paddingTop: 3 }}>
              Dress
            </span>
            <span>{event.dress}</span>
            <span style={{ fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: '#8a6a44', paddingTop: 3 }}>
              Where
            </span>
            <span>{event.where}</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 16 }}>
            <a
              href={calendarHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                minHeight: 44,
                display: 'flex',
                alignItems: 'center',
                padding: '0 16px',
                border: '1px solid #7a1c2e',
                fontSize: 11,
                letterSpacing: '.22em',
                textTransform: 'uppercase',
              }}
            >
              Add to calendar
            </a>
          </div>
        </div>
      )}
    </Reveal>
  );
}

export function Events() {
  return (
    <section id="events" style={{ scrollMarginTop: 0, padding: '70px 26px 60px', background: '#f7eee1' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: 34 }}>
        <p style={{ margin: 0, fontSize: 11, letterSpacing: '.4em', textTransform: 'uppercase', color: '#8a6a44' }}>
          Celebrations
        </p>
        <h2 style={{ margin: '8px 0 0', fontFamily: "'Great Vibes', cursive", fontWeight: 400, fontSize: 40, color: '#7a1c2e' }}>
          Two Days of Joy
        </h2>
      </Reveal>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
