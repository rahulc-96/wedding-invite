const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#events', label: 'Events' },
  { href: '#venue', label: 'Venue' },
  { href: '#rsvp', label: 'RSVP' },
];

export function BottomNav() {
  return (
    <>
      <div style={{ height: 76 }} />
      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          maxWidth: 520,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4,1fr)',
          background: 'rgba(247,238,225,.94)',
          backdropFilter: 'blur(8px)',
          borderTop: '1px solid #ddc9a8',
        }}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            style={{
              minHeight: 60,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 10,
              letterSpacing: '.24em',
              textTransform: 'uppercase',
              color: '#7a1c2e',
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
