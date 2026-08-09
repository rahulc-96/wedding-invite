import { Reveal } from './Reveal';
import invitationDownload from '../assets/invitation-download.jpg';

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
          Supriya &amp; Rahul &middot; Nov 2026
        </p>
        <a
          href={invitationDownload}
          download="Supriya-Rahul-Invitation.jpg"
          style={{
            marginTop: 26,
            minHeight: 44,
            display: 'inline-flex',
            alignItems: 'center',
            padding: '0 20px',
            border: '1px solid #e2bd94',
            color: '#f7eee1',
            fontSize: 11,
            letterSpacing: '.24em',
            textTransform: 'uppercase',
          }}
        >
          Download Invitation
        </a>
      </Reveal>
    </section>
  );
}
