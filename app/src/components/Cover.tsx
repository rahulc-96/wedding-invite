import coverArt from '../assets/textless-page-1.png';

interface CoverProps {
  guest: string;
  onOpen: () => void;
}

export function Cover({ guest, onOpen }: CoverProps) {
  return (
    <section
      id="home"
      style={{
        background: '#f3e7d5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 6,
          padding: '20px 24px 12px',
          textAlign: 'center',
        }}
      >
        <span style={{ fontSize: 30, lineHeight: 1, color: '#b08a4a' }}>&#2384;</span>
        <span
          style={{
            fontSize: 11,
            letterSpacing: '.34em',
            textTransform: 'uppercase',
            color: '#8a6a44',
          }}
        >
          Om Gsnapataye Namah
        </span>
        {guest && (
          <span
            style={{
              fontSize: 12,
              letterSpacing: '.34em',
              textTransform: 'uppercase',
              color: '#7a1c2e',
            }}
          >
            Welcome, {guest}
          </span>
        )}
      </div>

      <div style={{ position: 'relative', width: '100%', containerType: 'inline-size' }}>
        <img src={coverArt} alt="Rahul and Supriya" style={{ display: 'block', width: '100%', height: 'auto' }} />
        <div
          style={{
            position: 'absolute',
            left: '20%',
            right: '20%',
            top: '16%',
            textAlign: 'center',
            color: '#7a1c2e',
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: '2.5cqw',
              letterSpacing: '.26em',
              textTransform: 'uppercase',
              color: '#8a6a44',
              lineHeight: 1.6,
            }}
          >
            Welcome to the
            <br />
            celebration of
          </p>
          <h1
            style={{
              margin: '1.6cqw 0 0',
              fontFamily: "'Great Vibes', cursive",
              fontWeight: 400,
              fontSize: '7.4cqw',
              lineHeight: 1.2,
              whiteSpace: 'nowrap',
            }}
          >
            Rahul &amp; Supriya
          </h1>
          <p
            style={{
              margin: '1.6cqw 0 0',
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '3cqw',
              lineHeight: 1.5,
              color: '#8a6a44',
            }}
          >
            A celebration of love,
            <br />
            family and new beginnings.
          </p>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.2cqw',
              margin: '2.4cqw 0',
            }}
          >
            <span style={{ height: 1, width: '10cqw', background: '#c2a26a' }} />
            <span style={{ color: '#b08a4a', fontSize: '3cqw' }}>&#10022;</span>
            <span style={{ height: 1, width: '10cqw', background: '#c2a26a' }} />
          </div>
          <p
            style={{
              margin: 0,
              fontSize: '2.6cqw',
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              lineHeight: 1.7,
            }}
          >
            11&ndash;12 November 2026
            <br />
            <span style={{ color: '#6d5a45' }}>
              The Farmhouse Collective
              <br />
              Bangalore
            </span>
          </p>
        </div>
      </div>

      <div
        style={{
          padding: '26px 30px 40px',
          textAlign: 'center',
          background: '#f3e7d5',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        <button
          type="button"
          onClick={onOpen}
          style={{
            border: '1px solid #7a1c2e',
            background: '#7a1c2e',
            color: '#f7eee1',
            fontSize: 13,
            letterSpacing: '.3em',
            textTransform: 'uppercase',
            padding: '16px 30px',
            minHeight: 52,
            borderRadius: 2,
            cursor: 'pointer',
            boxShadow: '0 10px 26px rgba(122,28,46,.22)',
          }}
        >
          Open Invitation
        </button>
        <p
          style={{
            margin: '16px 0 0',
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 17,
            color: '#8a6a44',
          }}
        >
          Begin your journey by scrolling down.
        </p>
      </div>
    </section>
  );
}
