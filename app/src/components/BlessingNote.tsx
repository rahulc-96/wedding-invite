import { Reveal } from './Reveal';

export function BlessingNote() {
  return (
    <section style={{ padding: '46px 34px 54px', background: '#7a1c2e', textAlign: 'center' }}>
      <Reveal>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.9, color: '#f0dcc4', textWrap: 'pretty' as const }}>
          Awaiting your presence to bless their union and to make this day unforgettable
        </p>
        <p
          style={{
            margin: '22px 0 0',
            fontSize: 11,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            color: '#e2bd94',
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
            color: '#f7eee1',
          }}
        >
          Sidharth &amp; Akanksha
          <br />
          Keeva &amp; Sharvil
          <br />
          &amp; the whole
          <br />
          Sahai Family
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '20px 0 0' }}>
          <span style={{ height: 1, width: 52, background: '#e2bd94' }} />
          <span style={{ color: '#e2bd94' }}>&#10087;</span>
          <span style={{ height: 1, width: 52, background: '#e2bd94' }} />
        </div>
      </Reveal>
    </section>
  );
}
