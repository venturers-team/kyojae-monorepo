import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animate?: boolean;
}

export default function GradientText({
  children,
  className,
  colors = ['#4f46e5', '#3b82f6', '#22d3ee'],
  animate = true,
}: GradientTextProps) {
  const gradient = `linear-gradient(90deg, ${colors.join(', ')}, ${colors[0]})`;

  return (
    <span
      className={cn('bg-clip-text text-transparent', className)}
      style={{
        backgroundImage: gradient,
        backgroundSize: animate ? '200% 100%' : '100% 100%',
        animation: animate ? 'gradient-slide 6s linear infinite' : 'none',
      }}
    >
      {children}
      <style>{`
        @keyframes gradient-slide {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}</style>
    </span>
  );
}
