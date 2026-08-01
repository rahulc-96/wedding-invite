import { mapUrl } from '../data/wedding';
import { Reveal } from './Reveal';

export function Venue() {
  const share = async () => {
    const data = { title: 'Rahul & Supriya', text: 'Join us on 11–12 Nov 2026 in Bangalore', url: location.href };
    try {
      if (navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(location.href);
      }
    } catch {
      // user cancelled share or clipboard denied — nothing to do
    }
  };

  return (
    <section id="venue" style={{ scrollMarginTop: 0, padding: '64px 26px 60px', background: '#efe3d2' }}>
      <Reveal style={{ textAlign: 'center' }}>
        <p style={{ margin: 0, fontSize: 11, letterSpacing: '.4em', textTransform: 'uppercase', color: '#8a6a44' }}>
          Venue
        </p>
        <h2 style={{ margin: '8px 0 4px', fontSize: 24, letterSpacing: '.2em', textTransform: 'uppercase', color: '#7a1c2e' }}>
          Farmhouse Collective
        </h2>
        <p style={{ margin: 0, fontSize: 15, letterSpacing: '.28em', textTransform: 'uppercase', color: '#6d5a45' }}>
          Bangalore
        </p>
      </Reveal>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 22 }}>
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener"
          style={{
            minHeight: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#7a1c2e',
            color: '#f7eee1',
            fontSize: 11,
            letterSpacing: '.24em',
            textTransform: 'uppercase',
          }}
        >
          Open in maps
        </a>
        <button
          type="button"
          onClick={share}
          style={{
            minHeight: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '1px solid #c2a26a',
            background: 'none',
            color: '#8a6a44',
            fontSize: 11,
            letterSpacing: '.24em',
            textTransform: 'uppercase',
            cursor: 'pointer',
          }}
        >
          Share invite
        </button>
      </div>
      <p
        style={{
          margin: '14px 0 0',
          fontSize: 14,
          lineHeight: 1.7,
          color: '#6d5a45',
          textAlign: 'center',
          textWrap: 'balance',
        }}
      >
        Please feel free to reach out to us if you need any assistance with transportation or directions.
      </p>
    </section>
  );
}
