import { cn } from '../../lib/cn';

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
  disabled?: boolean;
}

export default function ShinyText({ text, className, speed = 4, disabled = false }: ShinyTextProps) {
  return (
    <span
      className={cn('inline-block bg-clip-text text-transparent', className)}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(148,163,184,0.55) 0%, rgba(255,255,255,1) 45%, rgba(148,163,184,0.55) 100%)',
        backgroundSize: '200% 100%',
        animation: disabled ? 'none' : `shiny-slide ${speed}s linear infinite`,
      }}
    >
      {text}
      <style>{`
        @keyframes shiny-slide {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </span>
  );
}
