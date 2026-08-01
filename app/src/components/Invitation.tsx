import invitationArt from '../assets/textless-page-2.png';
import { Reveal } from './Reveal';

export function Invitation() {
  return (
    <section id="invitation" style={{ scrollMarginTop: 0, background: '#f3e7d5' }}>
      <Reveal duration="1.1s" style={{ position: 'relative', width: '100%', containerType: 'inline-size' }}>
        <img src={invitationArt} alt="Invitation" style={{ display: 'block', width: '100%', height: 'auto' }} />
        <div
          style={{
            position: 'absolute',
            left: '22%',
            right: '22%',
            top: '13%',
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
          <p style={{ margin: '.6cqw 0 0', fontSize: '2.8cqw', letterSpacing: '.2em', textTransform: 'uppercase' }}>
            Almighty and Elders
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2cqw',
              margin: '2.4cqw 0',
            }}
          >
            <span style={{ height: 1, width: '7cqw', background: '#c2a26a' }} />
            <span style={{ color: '#b08a4a', fontSize: '2.6cqw' }}>&#10087;</span>
            <span style={{ height: 1, width: '7cqw', background: '#c2a26a' }} />
          </div>
          <p
            style={{
              margin: 0,
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '3.1cqw',
              lineHeight: 1.45,
              color: '#8a6a44',
            }}
          >
            Chandrain Ashoka Rao
            <br />
            &amp; Chandrain Anitha Rao
          </p>
          <p
            style={{
              margin: '1.6cqw 0 0',
              fontSize: '2.8cqw',
              lineHeight: 1.6,
              letterSpacing: '.04em',
              color: '#6d5a45',
            }}
          >
            cordially invite you to grace
            <br />
            the wedding celebration
            <br />
            of their beloved son
          </p>
          <h2
            style={{
              margin: '2.2cqw 0 0',
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: '6.2cqw',
              lineHeight: 1.2,
            }}
          >
            Rahul Chandrain Rao
          </h2>
          <p style={{ margin: '.6cqw 0', fontStyle: 'italic', fontSize: '3.1cqw', color: '#8a6a44' }}>with</p>
          <h2
            style={{
              margin: 0,
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: '6.2cqw',
              lineHeight: 1.2,
            }}
          >
            Supriya Sahai
          </h2>
          <p style={{ margin: '2cqw 0 0', fontSize: '2.8cqw', letterSpacing: '.04em', color: '#6d5a45' }}>
            cherished daughter of
          </p>
          <p
            style={{
              margin: '.6cqw 0 0',
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '3.1cqw',
              lineHeight: 1.45,
              color: '#8a6a44',
            }}
          >
            Subodh Sahai
            <br />
            &amp; Priti Sahai
          </p>
        </div>
      </Reveal>
    </section>
  );
}
