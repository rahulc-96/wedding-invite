import invitationArt from '../assets/textless-page-2.png';
import { Reveal } from './Reveal';

export function Invitation() {
  return (
    <section id="invitation" style={{ scrollMarginTop: 0, background: '#f3e7d5' }}>
      <Reveal duration="1.1s" style={{ position: 'relative', width: '100%', containerType: 'inline-size' }}>
        <img
          src={invitationArt}
          alt="Invitation"
          width={1024}
          height={1536}
          style={{ display: 'block', width: '100%', height: 'auto', aspectRatio: '1024 / 1536' }}
        />
        <div
          style={{
            position: 'absolute',
            left: '22%',
            right: '22%',
            top: '21%',
            textAlign: 'center',
            color: '#7a1c2e',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '3cqw',
              lineHeight: 1.5,
              color: '#8a6a44',
            }}
          >
            With the Blessings of
          </p>
          <p
            style={{
              margin: '.6cqw 0 0',
              fontSize: '2.8cqw',
              letterSpacing: '.2em',
              textTransform: 'uppercase',
            }}
          >
            Almighty &amp; Elders
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2cqw',
              margin: '1.4cqw 0 0',
            }}
          >
            <span style={{ height: 1, width: '7cqw', background: '#c2a26a' }} />
            <span style={{ color: '#b08a4a', fontSize: '2.6cqw' }}>&#10087;</span>
            <span style={{ height: 1, width: '7cqw', background: '#c2a26a' }} />
          </div>
          <p
            style={{
              margin: '1.4cqw 0 0',
              fontSize: '2.6cqw',
              lineHeight: 1.6,
              letterSpacing: '.1em',
              textTransform: 'uppercase',
              color: '#8a6a44',
              textWrap: 'balance' as const,
            }}
          >
            We warmly invite you to join us in celebrating and blessing the union of
          </p>
          <h2
            style={{
              margin: '2cqw 0 0',
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: '6.2cqw',
              lineHeight: 1.2,
            }}
          >
            Supriya
          </h2>
          <p
            style={{
              margin: '.8cqw 0 0',
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '2.6cqw',
              lineHeight: 1.5,
              color: '#8a6a44',
            }}
          >
            D/o Mr. Subodh Sahai and Mrs. Priti Sahai
            <br />
            Grand D/o Late Mr. C.G. Sahai and Late Mrs. K.D. Khare*
          </p>
          <p
            style={{
              margin: '1.6cqw 0',
              fontFamily: "'Great Vibes', cursive",
              fontSize: '4.4cqw',
              color: '#b08a4a',
            }}
          >
            &amp;
          </p>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: '6.2cqw',
              lineHeight: 1.2,
            }}
          >
            Rahul
          </h2>
          <p
            style={{
              margin: '.8cqw 0 0',
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '2.6cqw',
              lineHeight: 1.5,
              color: '#8a6a44',
              textWrap: 'balance' as const,
            }}
          >
            S/o Dr. Chandrain Ashoka Rao and Mrs. Chandrain Anitha Rao
          </p>
        </div>
      </Reveal>
    </section>
  );
}
