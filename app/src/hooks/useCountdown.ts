import { useEffect, useState } from 'react';

export interface Countdown {
  d: string;
  h: string;
  m: string;
  s: string;
}

function compute(target: number): Countdown {
  const t = target - Date.now();
  const pad = (n: number) => String(Math.max(0, Math.floor(n))).padStart(2, '0');
  if (t <= 0) return { d: '00', h: '00', m: '00', s: '00' };
  return {
    d: String(Math.floor(t / 864e5)),
    h: pad((t / 36e5) % 24),
    m: pad((t / 6e4) % 60),
    s: pad((t / 1e3) % 60),
  };
}

export function useCountdown(isoTarget: string): Countdown {
  const target = new Date(isoTarget).getTime();
  const [cd, setCd] = useState<Countdown>(() => compute(target));

  useEffect(() => {
    const id = setInterval(() => setCd(compute(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  return cd;
}
