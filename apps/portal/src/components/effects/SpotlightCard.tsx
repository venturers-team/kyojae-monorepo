import { useRef, type CSSProperties, type ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  radius?: number;
}

export default function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(99, 102, 241, 0.18)',
  radius = 320,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  const style: CSSProperties = {
    background: `radial-gradient(${radius}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spotlightColor}, transparent 60%)`,
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn('group/spot relative overflow-hidden', className)}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={style}
      />
      <div className="relative">{children}</div>
    </div>
  );
}
