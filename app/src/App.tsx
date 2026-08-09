import { useMemo, useState } from 'react';
import { Petals } from './components/Petals';
import { Cover } from './components/Cover';
import { Invitation } from './components/Invitation';
import { BlessingNote } from './components/BlessingNote';
import { Countdown } from './components/Countdown';
import { Events } from './components/Events';
import { Venue } from './components/Venue';
import { Rsvp } from './components/Rsvp';
import { ThankYou } from './components/ThankYou';
import { BottomNav } from './components/BottomNav';
import { MusicToggle } from './components/MusicToggle';
import { useBackgroundMusic, MUSIC_LOOP_END_SECONDS } from './hooks/useBackgroundMusic';

const SHOW_PETALS = true;
const SHOW_COUNTDOWN = true;

function App() {
  const [opened, setOpened] = useState(false);
  const { audioRef, muted, start: startMusic, toggleMute } = useBackgroundMusic();

  const guest = useMemo(() => {
    try {
      return new URLSearchParams(location.search).get('guest')?.slice(0, 28) ?? '';
    } catch {
      return '';
    }
  }, []);

  const openInvitation = () => {
    startMusic();
    setOpened(true);
    setTimeout(() => {
      const el = document.getElementById('invitation');
      if (el) window.scrollTo({ top: el.offsetTop - 40, behavior: 'smooth' });
    }, 120);
  };

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 520,
        background: '#f7eee1',
        boxShadow: '0 0 60px rgba(90,60,30,.18)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {SHOW_PETALS && <Petals />}

      <audio ref={audioRef} src="/audio/background-music.mp3" loop={MUSIC_LOOP_END_SECONDS == null} preload="auto" />

      <Cover guest={guest} onOpen={openInvitation} />

      {opened && (
        <div>
          <Invitation />
          <BlessingNote />
          {SHOW_COUNTDOWN && <Countdown />}
          <Events />
          <Venue />
          <Rsvp guestQuery={guest} />
          <ThankYou />
          <BottomNav />
          <MusicToggle muted={muted} onToggle={toggleMute} />
        </div>
      )}
    </div>
  );
}

export default App;
