import { Search } from 'lucide-react';
import type { FilterState } from '../../types/course';
import { cn } from '../../lib/cn';

type ChipOption<V extends string> = { value: V; label: string };

interface FilterBarProps {
  value: FilterState;
  onChange: (next: FilterState) => void;
  totalCount?: number;
  matchedCount?: number;
}

const typeOptions: ChipOption<FilterState['type']>[] = [
  { value: 'all', label: '전체' },
  { value: 'textbook', label: '웹 교재' },
  { value: 'tool', label: '웹 도구' },
];

const difficultyOptions: ChipOption<FilterState['difficulty']>[] = [
  { value: 'all', label: '전체' },
  { value: 'beginner', label: '입문' },
  { value: 'intermediate', label: '중급' },
];

const statusOptions: ChipOption<FilterState['status']>[] = [
  { value: 'all', label: '전체' },
  { value: 'available', label: '이용 가능' },
  { value: 'coming-soon', label: '준비 중' },
];

function Chip<V extends string>({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'rounded-full border px-3 py-1 text-xs font-medium transition',
        active
          ? 'border-indigo-300 bg-indigo-100 text-indigo-700 dark:border-indigo-500/60 dark:bg-indigo-500/20 dark:text-indigo-200'
          : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800',
      )}
    >
      {label}
    </button>
  );
}

export default function FilterBar({
  value,
  onChange,
  totalCount,
  matchedCount,
}: FilterBarProps) {
  const patch = (partial: Partial<FilterState>) => onChange({ ...value, ...partial });

  return (
    <section
      aria-label="교재 필터"
      className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-900"
    >
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        <label className="flex w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800 md:max-w-xs">
          <Search className="h-4 w-4 text-slate-400" aria-hidden="true" />
          <span className="sr-only">키워드 검색</span>
          <input
            type="search"
            value={value.keyword}
            onChange={(event) => patch({ keyword: event.target.value })}
            placeholder="제목, 태그로 검색"
            className="w-full bg-transparent outline-none placeholder:text-slate-400 dark:text-slate-100"
          />
        </label>

        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 md:ml-auto">
          <label className="inline-flex items-center gap-1">
            정렬
            <select
              value={value.sortBy}
              onChange={(event) =>
                patch({ sortBy: event.target.value as FilterState['sortBy'] })
              }
              className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
            >
              <option value="recommended">추천순</option>
              <option value="difficulty">난이도순</option>
              <option value="newest">최신순</option>
            </select>
          </label>
          {typeof matchedCount === 'number' && typeof totalCount === 'number' && (
            <span>
              {matchedCount} / {totalCount}개 표시
            </span>
          )}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            유형
          </p>
          <div className="flex flex-wrap gap-2">
            {typeOptions.map((option) => (
              <Chip
                key={option.value}
                active={value.type === option.value}
                label={option.label}
                onClick={() => patch({ type: option.value })}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            난이도
          </p>
          <div className="flex flex-wrap gap-2">
            {difficultyOptions.map((option) => (
              <Chip
                key={option.value}
                active={value.difficulty === option.value}
                label={option.label}
                onClick={() => patch({ difficulty: option.value })}
              />
            ))}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            상태
          </p>
          <div className="flex flex-wrap gap-2">
            {statusOptions.map((option) => (
              <Chip
                key={option.value}
                active={value.status === option.value}
                label={option.label}
                onClick={() => patch({ status: option.value })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
