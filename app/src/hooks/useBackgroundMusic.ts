import { useEffect, useRef, useState } from 'react';

// --- Configure the loop window here (in seconds) ---------------------------
// The track will start playing from MUSIC_LOOP_START_SECONDS. Once playback
// reaches MUSIC_LOOP_END_SECONDS it jumps back to the start and keeps going.
// Set MUSIC_LOOP_END_SECONDS to null to just loop the entire file naturally.
export const MUSIC_LOOP_START_SECONDS = 0;
export const MUSIC_LOOP_END_SECONDS: number | null = 42;
// -----------------------------------------------------------------------

export function useBackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState(false);
  const startedRef = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || MUSIC_LOOP_END_SECONDS == null) return;

    const handleTimeUpdate = () => {
      if (audio.currentTime >= MUSIC_LOOP_END_SECONDS) {
        audio.currentTime = MUSIC_LOOP_START_SECONDS;
        audio.play().catch(() => {});
      }
    };
    audio.addEventListener('timeupdate', handleTimeUpdate);
    return () => audio.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  const start = () => {
    const audio = audioRef.current;
    if (!audio || startedRef.current) return;
    startedRef.current = true;
    audio.currentTime = MUSIC_LOOP_START_SECONDS;
    audio.play().catch(() => {});
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return { audioRef, muted, start, toggleMute };
}
