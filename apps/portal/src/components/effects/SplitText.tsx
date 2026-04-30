import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/cn';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  splitType?: 'chars' | 'words';
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

export default function SplitText({
  text,
  className,
  delay = 0,
  stagger = 40,
  duration = 600,
  splitType = 'words',
  as: Tag = 'span',
}: SplitTextProps) {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const tokens =
    splitType === 'chars' ? Array.from(text) : text.split(/(\s+)/);

  return (
    <Tag ref={ref as never} className={cn('inline-block', className)}>
      {tokens.map((token, idx) => {
        if (/^\s+$/.test(token)) {
          return <span key={idx}>{token}</span>;
        }
        return (
          <span
            key={idx}
            className="inline-block"
            style={{
              transform: mounted ? 'translateY(0)' : 'translateY(0.6em)',
              opacity: mounted ? 1 : 0,
              filter: mounted ? 'blur(0)' : 'blur(6px)',
              transition: `transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${idx * stagger}ms, opacity ${duration}ms ease-out ${idx * stagger}ms, filter ${duration}ms ease-out ${idx * stagger}ms`,
              willChange: 'transform, opacity, filter',
            }}
          >
            {token}
          </span>
        );
      })}
    </Tag>
  );
}
