import { useEffect, useRef, useState } from 'react';
import { supabase } from '../lib/supabase';
import { events } from '../data/wedding';
import { Reveal } from './Reveal';

type Attending = '' | 'yes' | 'no';

interface RsvpProps {
  guestQuery: string;
}

export function Rsvp({ guestQuery }: RsvpProps) {
  const [attending, setAttending] = useState<Attending>('');
  const [name, setName] = useState('');
  const [guests, setGuests] = useState('1');
  const [note, setNote] = useState('');
  const [attendingEvents, setAttendingEvents] = useState<string[]>(events.map((e) => e.id));
  const [err, setErr] = useState('');
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const sentRef = useRef<HTMLDivElement | null>(null);

  const yes = attending === 'yes';
  const no = attending === 'no';

  useEffect(() => {
    if (sent) sentRef.current?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }, [sent]);

  const toggleEvent = (id: string) => {
    setAttendingEvents((prev) => (prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]));
  };

  const submit = async () => {
    if (!attending) return setErr('Please let us know if you can make it.');
    if (name.trim().length < 2) return setErr('Please add your name.');

    setSubmitting(true);
    setErr('');
    const { error } = await supabase.from('rsvps').insert({
      attending,
      name: name.trim(),
      guests: Number(guests),
      note,
      guest_query: guestQuery || null,
      attending_events: attending === 'yes' ? attendingEvents : [],
    });
    setSubmitting(false);

    if (error) {
      setErr('Something went wrong sending your RSVP. Please try again.');
      return;
    }
    setSent(true);
  };

  return (
    <section id="rsvp" style={{ scrollMarginTop: 0, padding: '66px 26px 74px', background: '#f7eee1' }}>
      <Reveal style={{ textAlign: 'center', marginBottom: 26 }}>
        <p style={{ margin: 0, fontSize: 11, letterSpacing: '.4em', textTransform: 'uppercase', color: '#8a6a44' }}>
          RSVP by 10 Oct 2026
        </p>
        <h2 style={{ margin: '8px 0 0', fontFamily: "'Great Vibes', cursive", fontWeight: 400, fontSize: 40, color: '#7a1c2e' }}>
          Will you join us?
        </h2>
      </Reveal>

      {sent ? (
        <div
          ref={sentRef}
          style={{ border: '1px solid #ddc9a8', background: '#fdf8ef', padding: '34px 24px', textAlign: 'center' }}
        >
          <p style={{ margin: 0, fontSize: 22, color: '#7a1c2e' }}>{no ? 'We will miss you' : 'You are on the list'}</p>
          <p style={{ margin: '10px 0 0', fontSize: 16, lineHeight: 1.7, color: '#6d5a45', textWrap: 'balance' }}>
            {no
              ? `Thank you for letting us know, ${name || 'friend'}. We will raise a glass to you.`
              : `Thank you, ${name || 'friend'}. ${guests} seat(s) reserved. See you in November.`}
          </p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            <button
              type="button"
              onClick={() => {
                setAttending('yes');
                setErr('');
              }}
              style={{
                minHeight: 56,
                border: '1px solid #7a1c2e',
                background: yes ? '#7a1c2e' : 'transparent',
                color: yes ? '#f7eee1' : '#7a1c2e',
                fontSize: 12,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Happily yes
            </button>
            <button
              type="button"
              onClick={() => {
                setAttending('no');
                setErr('');
              }}
              style={{
                minHeight: 56,
                border: '1px solid #c2a26a',
                background: no ? '#8a6a44' : 'transparent',
                color: no ? '#f7eee1' : '#8a6a44',
                fontSize: 12,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                cursor: 'pointer',
              }}
            >
              Regretfully no
            </button>
          </div>

          {yes && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '.24em',
                  textTransform: 'uppercase',
                  color: '#8a6a44',
                }}
              >
                Which celebrations will you join?
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {events.map((event) => (
                  <label
                    key={event.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 10,
                      border: '1px solid #ddc9a8',
                      background: '#fdf8ef',
                      padding: '12px 14px',
                      fontSize: 16,
                      color: '#4a3a2e',
                      cursor: 'pointer',
                    }}
                  >
                    <input
                      type="checkbox"
                      checked={attendingEvents.includes(event.id)}
                      onChange={() => toggleEvent(event.id)}
                      style={{ width: 18, height: 18, accentColor: '#7a1c2e' }}
                    />
                    {event.title}
                    <span style={{ color: '#8a6a44', fontSize: 13 }}>&middot; {event.date}</span>
                  </label>
                ))}
              </div>
              <div
                style={{
                  borderLeft: '3px solid #7a1c2e',
                  background: '#f7ecd8',
                  padding: '12px 14px',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 600,
                    fontSize: 16,
                    lineHeight: 1.6,
                    color: '#5c3d1f',
                    textWrap: 'balance',
                  }}
                >
                  Please note, 11&ndash;12 Nov 2026 fall on a Wednesday and Thursday &mdash; both working days. Do
                  plan your leave accordingly!
                </p>
              </div>
            </div>
          )}

          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              fontSize: 11,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              color: '#8a6a44',
            }}
          >
            Your name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full name"
              style={{
                minHeight: 48,
                border: '1px solid #ddc9a8',
                background: '#fdf8ef',
                padding: '0 14px',
                fontSize: 17,
                color: '#4a3a2e',
                letterSpacing: 'normal',
                textTransform: 'none',
              }}
            />
          </label>

          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              fontSize: 11,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              color: '#8a6a44',
            }}
          >
            Guests
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              style={{
                minHeight: 48,
                border: '1px solid #ddc9a8',
                background: '#fdf8ef',
                padding: '0 12px',
                fontSize: 17,
                color: '#4a3a2e',
                letterSpacing: 'normal',
                textTransform: 'none',
              }}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5+</option>
            </select>
          </label>

          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              fontSize: 11,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              color: '#8a6a44',
            }}
          >
            A note for the couple
            <textarea
              rows={3}
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Optional"
              style={{
                border: '1px solid #ddc9a8',
                background: '#fdf8ef',
                padding: '12px 14px',
                fontSize: 17,
                color: '#4a3a2e',
                letterSpacing: 'normal',
                textTransform: 'none',
                resize: 'vertical',
              }}
            />
          </label>

          {err && <p style={{ margin: 0, fontSize: 14, color: '#a53a4a' }}>{err}</p>}

          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            style={{
              minHeight: 56,
              border: '1px solid #7a1c2e',
              background: '#7a1c2e',
              color: '#f7eee1',
              fontSize: 12,
              letterSpacing: '.3em',
              textTransform: 'uppercase',
              cursor: submitting ? 'default' : 'pointer',
              opacity: submitting ? 0.7 : 1,
            }}
          >
            {submitting ? 'Sending…' : 'Send RSVP'}
          </button>
        </div>
      )}
    </section>
  );
}
