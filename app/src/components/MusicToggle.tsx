interface MusicToggleProps {
  muted: boolean;
  onToggle: () => void;
}

export function MusicToggle({ muted, onToggle }: MusicToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={muted ? 'Unmute background music' : 'Mute background music'}
      style={{
        position: 'fixed',
        bottom: 92,
        right: 18,
        zIndex: 55,
        width: 46,
        height: 46,
        borderRadius: '50%',
        border: '1px solid #c2a26a',
        background: 'rgba(247,238,225,.94)',
        backdropFilter: 'blur(8px)',
        boxShadow: '0 6px 16px rgba(90,60,30,.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        animation: muted ? 'none' : 'gentleFloat 3.4s ease-in-out infinite',
      }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="6.5" cy="18" rx="3" ry="2.2" transform="rotate(-12 6.5 18)" fill="#7a1c2e" opacity={muted ? 0.4 : 1} />
        <ellipse cx="16" cy="16" rx="3" ry="2.2" transform="rotate(-12 16 16)" fill="#7a1c2e" opacity={muted ? 0.4 : 1} />
        <path d="M9.3 17.2 V5.5 L18.8 3 V14.8" stroke="#7a1c2e" strokeWidth="1.4" fill="none" opacity={muted ? 0.4 : 1} />
        <path d="M9.3 5.5 L18.8 3 V6.2 L9.3 8.7 Z" fill="#7a1c2e" opacity={muted ? 0.4 : 1} />
        {muted && <line x1="3.5" y1="20.5" x2="20.5" y2="3.5" stroke="#7a1c2e" strokeWidth="1.6" strokeLinecap="round" />}
      </svg>
    </button>
  );
}
