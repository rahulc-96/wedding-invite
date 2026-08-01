const PETALS = [
  { left: '8%', size: 11, color: '#e8b4b8', opacity: 0.6, duration: 19, delay: 0 },
  { left: '26%', size: 8, color: '#dfa6ac', opacity: 0.5, duration: 26, delay: -6 },
  { left: '47%', size: 12, color: '#f0c9a4', opacity: 0.5, duration: 23, delay: -13 },
  { left: '68%', size: 9, color: '#e8b4b8', opacity: 0.55, duration: 30, delay: -3 },
  { left: '86%', size: 10, color: '#d9bd8a', opacity: 0.45, duration: 21, delay: -17 },
];

export function Petals() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 40,
        maxWidth: 520,
        margin: '0 auto',
      }}
    >
      {PETALS.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: p.left,
            top: 0,
            width: p.size,
            height: p.size,
            borderRadius: '60% 0 60% 0',
            background: p.color,
            opacity: p.opacity,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
