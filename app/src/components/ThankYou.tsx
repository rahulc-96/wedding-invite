import { Reveal } from './Reveal';

export function ThankYou() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '90px 30px 130px',
        textAlign: 'center',
        background: '#7a1c2e',
        color: '#f7eee1',
        overflow: 'hidden',
      }}
    >
      <Reveal duration="1s">
        <span style={{ display: 'inline-block', fontSize: 22, color: '#e2bd94', animation: 'softGlow 4s ease-in-out infinite' }}>
          &#10087;
        </span>
        <h2 style={{ margin: '14px 0 0', fontFamily: "'Great Vibes', cursive", fontWeight: 400, fontSize: 46 }}>
          Thank you
        </h2>
        <p style={{ margin: '14px 0 0', fontSize: 17, lineHeight: 1.8, color: '#f0dcc4' }}>
          for being part of our story.
          <br />
          We cannot wait to celebrate with you.
        </p>
        <p style={{ margin: '26px 0 0', fontSize: 11, letterSpacing: '.36em', textTransform: 'uppercase', color: '#e2bd94' }}>
          Rahul &amp; Supriya &middot; Nov 2026
        </p>
      </Reveal>
    </section>
  );
}
