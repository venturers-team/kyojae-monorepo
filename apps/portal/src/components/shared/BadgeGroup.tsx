import { cn } from '../../lib/cn';

export interface BadgeItem {
  label: string;
  tone?: 'neutral' | 'primary' | 'success' | 'warning' | 'brand';
  colorHex?: string;
}

interface BadgeGroupProps {
  items: BadgeItem[];
  className?: string;
}

const toneClass: Record<NonNullable<BadgeItem['tone']>, string> = {
  neutral: 'bg-slate-100 text-slate-700 border-slate-200',
  primary: 'bg-indigo-50 text-indigo-700 border-indigo-200',
  success: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  warning: 'bg-amber-50 text-amber-700 border-amber-200',
  brand: 'bg-white text-slate-800 border-slate-200',
};

export default function BadgeGroup({ items, className }: BadgeGroupProps) {
  return (
    <div className={cn('flex flex-wrap items-center gap-1.5', className)}>
      {items.map((item, index) => {
        const tone = item.tone ?? 'neutral';
        const style = item.colorHex
          ? {
              backgroundColor: `${item.colorHex}15`,
              color: item.colorHex,
              borderColor: `${item.colorHex}40`,
            }
          : undefined;
        return (
          <span
            key={`${item.label}-${index}`}
            className={cn(
              'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium',
              !style && toneClass[tone],
            )}
            style={style}
          >
            {item.label}
          </span>
        );
      })}
    </div>
  );
}
