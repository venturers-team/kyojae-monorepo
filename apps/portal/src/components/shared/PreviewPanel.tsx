import { X, ExternalLink } from 'lucide-react';
import type { CourseData } from '../../types/course';
import { cn } from '../../lib/cn';
import {
  difficultyLabel,
  statusLabel,
  typeLabel,
} from '../../lib/course-utils';
import BadgeGroup from './BadgeGroup';

interface PreviewPanelProps {
  course: CourseData | null;
  open: boolean;
  onClose: () => void;
}

export default function PreviewPanel({ course, open, onClose }: PreviewPanelProps) {
  if (!course) return null;

  return (
    <div
      className={cn(
        'pointer-events-none fixed inset-0 z-50 transition-opacity duration-300',
        open ? 'pointer-events-auto opacity-100' : 'opacity-0',
      )}
      role="dialog"
      aria-modal="true"
      aria-label={`${course.title} 미리보기`}
    >
      <div
        className={cn(
          'absolute inset-0 bg-slate-900/40 transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0',
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={cn(
          'absolute right-0 top-0 flex h-full w-full max-w-md flex-col gap-5 overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ease-out dark:bg-slate-900',
          open ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        <header className="flex items-start justify-between gap-3">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: course.color }}
            >
              {typeLabel[course.type]}
            </p>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
              {course.title}
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              {course.subtitle}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-200 bg-white p-2 text-slate-600 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
            aria-label="미리보기 닫기"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </header>

        <BadgeGroup
          items={[
            { label: typeLabel[course.type], tone: 'primary' },
            { label: difficultyLabel[course.difficulty], tone: 'neutral' },
            {
              label: statusLabel[course.status],
              tone: course.status === 'available' ? 'success' : 'warning',
            },
            { label: `${course.estimatedHours}시간`, tone: 'neutral' },
          ]}
        />

        <section aria-label="목차 요약">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            목차 미리보기
          </h3>
          <ul className="mt-2 space-y-2">
            {course.outline.slice(0, 4).map((section) => (
              <li
                key={section.title}
                className="rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700 dark:bg-slate-800"
              >
                <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                  {section.title}
                </p>
                {section.description && (
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {section.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>

        <footer className="mt-auto flex flex-col gap-2">
          <a
            href={`/explore/${course.id}`}
            className="inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: course.color }}
          >
            상세 페이지 열기
          </a>
          {course.externalUrl && course.status === 'available' && (
            <a
              href={course.externalUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex w-full items-center justify-center gap-1 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              외부 링크로 바로 시작
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          )}
        </footer>
      </aside>
    </div>
  );
}
