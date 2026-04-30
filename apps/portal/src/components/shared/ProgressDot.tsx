import { cn } from '../../lib/cn';

interface ProgressDotProps {
  visited: boolean;
  label?: string;
  className?: string;
}

export default function ProgressDot({ visited, label, className }: ProgressDotProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 text-xs font-medium',
        visited ? 'text-emerald-600' : 'text-slate-400',
        className,
      )}
      aria-live="polite"
    >
      <span
        className={cn(
          'inline-block h-2.5 w-2.5 rounded-full border',
          visited
            ? 'border-emerald-500 bg-emerald-500'
            : 'border-slate-300 bg-transparent',
        )}
        aria-hidden="true"
      />
      {label && <span>{label}</span>}
    </span>
  );
}
