import { Reveal } from './Reveal';

export function BlessingNote() {
  return (
    <section style={{ padding: '46px 34px 54px', background: '#f7eee1', textAlign: 'center' }}>
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, margin: '0 0 20px' }}>
          <span style={{ height: 1, width: 52, background: '#c2a26a' }} />
          <span style={{ color: '#b08a4a' }}>&#10087;</span>
          <span style={{ height: 1, width: 52, background: '#c2a26a' }} />
        </div>
        <p style={{ margin: 0, fontSize: 18, lineHeight: 1.9, color: '#6d5a45', textWrap: 'pretty' as const }}>
          Your gracious presence and blessings will add immense joy to this auspicious occasion as our two families
          come together in celebration of love, tradition, and togetherness.
        </p>
      </Reveal>
    </section>
  );
}
