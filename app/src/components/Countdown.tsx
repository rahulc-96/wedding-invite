import { useCountdown } from '../hooks/useCountdown';
import { WEDDING_DATETIME } from '../data/wedding';

const UNIT_STYLE = { border: '1px solid #ddc9a8', padding: '14px 4px' };
const LABEL_STYLE = {
  fontSize: 10,
  letterSpacing: '.24em',
  textTransform: 'uppercase' as const,
  color: '#8a6a44',
  marginTop: 6,
};

export function Countdown() {
  const cd = useCountdown(WEDDING_DATETIME);

  return (
    <section
      style={{
        padding: '58px 30px',
        background: '#f7eee1',
        color: '#7a1c2e',
        textAlign: 'center',
      }}
    >
      <p style={{ margin: '0 0 22px', fontSize: 12, letterSpacing: '.4em', textTransform: 'uppercase', color: '#8a6a44' }}>
        Wedding in
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 10, maxWidth: 420, margin: '0 auto' }}>
        <div style={UNIT_STYLE}>
          <div style={{ fontSize: 30, lineHeight: 1 }}>{cd.d}</div>
          <div style={LABEL_STYLE}>Days</div>
        </div>
        <div style={UNIT_STYLE}>
          <div style={{ fontSize: 30, lineHeight: 1 }}>{cd.h}</div>
          <div style={LABEL_STYLE}>Hrs</div>
        </div>
        <div style={UNIT_STYLE}>
          <div style={{ fontSize: 30, lineHeight: 1 }}>{cd.m}</div>
          <div style={LABEL_STYLE}>Min</div>
        </div>
        <div style={UNIT_STYLE}>
          <div style={{ fontSize: 30, lineHeight: 1 }}>{cd.s}</div>
          <div style={LABEL_STYLE}>Sec</div>
        </div>
      </div>
    </section>
  );
}
