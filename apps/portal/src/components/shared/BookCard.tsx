import { useRef, type CSSProperties } from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import type { BookData } from '../../types/book';
import { bookDifficultyLabel, categoryLabel } from '../../types/book';
import { cn } from '../../lib/cn';

interface BookCardProps {
  book: BookData;
  compact?: boolean;
}

const spineColors = ['#4f46e5', '#3b82f6', '#22d3ee', '#6366f1', '#0ea5e9', '#8b5cf6'];

export default function BookCard({ book, compact = false }: BookCardProps) {
  const ref = useRef<HTMLElement>(null);
  const spineColor = spineColors[Math.abs(book.id.charCodeAt(0)) % spineColors.length];

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  const spotStyle: CSSProperties = {
    background: `radial-gradient(260px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${spineColor}15, transparent 65%)`,
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'group/book relative flex h-full overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-200 ease-out',
        'motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/book:opacity-100"
        style={spotStyle}
      />
      <div
        aria-hidden="true"
        className="relative flex w-16 shrink-0 flex-col items-center justify-center gap-2 overflow-hidden text-center text-white"
        style={{ background: `linear-gradient(160deg, ${spineColor}, ${spineColor}cc)` }}
      >
        <BookOpen className="h-5 w-5 opacity-90" strokeWidth={2.4} />
        <span className="rotate-180 select-none px-1 text-[10px] font-semibold uppercase tracking-[0.22em] [writing-mode:vertical-rl]">
          {book.titleEn ?? book.title}
        </span>
      </div>

      <div className="relative flex min-w-0 flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-500">
              {categoryLabel[book.category]} · {bookDifficultyLabel[book.difficulty]}
            </p>
            <h3 className="mt-1 truncate text-base font-semibold text-slate-900">
              {book.title}
            </h3>
            <p className="text-xs text-slate-500">
              {book.author}
              {book.year ? ` · ${book.year}` : ''}
              {book.publisher ? ` · ${book.publisher}` : ''}
            </p>
          </div>
        </div>

        {!compact && (
          <p className="line-clamp-3 text-sm text-slate-600">
            {book.summary}
          </p>
        )}

        <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 px-3 py-2 text-xs text-slate-700">
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
            교수님 추천 포인트
          </p>
          <p className="line-clamp-3 leading-relaxed">{book.recommendation}</p>
        </div>

        {!compact && (
          <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
            {book.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex rounded-md bg-slate-50 px-2 py-0.5 text-[11px] text-slate-500"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {book.purchaseUrl && (
          <a
            href={book.purchaseUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-max items-center gap-1 text-xs font-semibold text-indigo-600 transition hover:text-indigo-500"
          >
            구입처 열기
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
