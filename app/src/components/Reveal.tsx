import type { CSSProperties, ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  style?: CSSProperties;
  duration?: string;
}

export function Reveal({ children, style, duration = '.9s' }: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(18px)',
        transition: `opacity ${duration} ease, transform ${duration} ease`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
