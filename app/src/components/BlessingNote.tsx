import { Reveal } from './Reveal';

export function BlessingNote() {
  return (
    <section style={{ padding: '46px 34px 54px', background: '#f7eee1', textAlign: 'center' }}>
      <Reveal>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.9, color: '#6d5a45', textWrap: 'pretty' as const }}>
          Awaiting your presence to bless their union and to make this day unforgettable
        </p>
        <p
          style={{
            margin: '22px 0 0',
            fontSize: 11,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            color: '#8a6a44',
          }}
        >
          With Best Compliments
        </p>
        <p
          style={{
            margin: '10px 0 0',
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 18,
            lineHeight: 1.7,
            color: '#7a1c2e',
          }}
        >
          Sidharth &amp; Akanksha
          <br />
          Keeva &amp; Sharvil
          <br />
          &amp; whole
          <br />
          Sahai Family
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '20px 0 0' }}>
          <span style={{ height: 1, width: 52, background: '#c2a26a' }} />
          <span style={{ color: '#b08a4a' }}>&#10087;</span>
          <span style={{ height: 1, width: 52, background: '#c2a26a' }} />
        </div>
      </Reveal>
    </section>
  );
}
