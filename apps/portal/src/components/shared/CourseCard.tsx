import { useRef, type CSSProperties } from 'react';
import {
  BookOpen,
  Paperclip,
  Rocket,
  Zap,
  FileText,
  Flame,
  Code2,
  Check,
  ArrowRight,
  Clock,
  Hourglass,
  type LucideIcon,
} from 'lucide-react';
import type { CourseData } from '../../types/course';
import { cn } from '../../lib/cn';
import {
  difficultyLabel,
  statusLabel,
  typeLabel,
} from '../../lib/course-utils';
import BadgeGroup from './BadgeGroup';

const iconMap: Record<string, LucideIcon> = {
  Paperclip,
  Rocket,
  Zap,
  FileText,
  Flame,
  Code2,
};

interface CourseCardProps {
  course: CourseData;
  visited?: boolean;
  onPreview?: (course: CourseData) => void;
  onSelect?: (course: CourseData) => void;
  href?: string;
}

export default function CourseCard({
  course,
  visited = false,
  onPreview,
  onSelect,
  href,
}: CourseCardProps) {
  const Icon = iconMap[course.icon] ?? BookOpen;
  const isAvailable = course.status === 'available';
  const detailHref = href ?? `/explore/${course.id}`;
  const articleRef = useRef<HTMLElement>(null);

  const handleClickCard = () => {
    if (onSelect) {
      onSelect(course);
    } else if (typeof window !== 'undefined') {
      window.location.href = detailHref;
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = articleRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  const spotStyle: CSSProperties = {
    background: `radial-gradient(260px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${course.color}18, transparent 65%)`,
  };

  return (
    <article
      ref={articleRef}
      onMouseMove={handleMouseMove}
      className={cn(
        'group/card relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white',
        'transition-all duration-200 ease-out motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl',
        'focus-within:-translate-y-1 focus-within:shadow-xl',
        'dark:border-slate-700 dark:bg-slate-900',
        !isAvailable && 'ring-1 ring-amber-100 dark:ring-amber-500/20',
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1.5"
        style={{ backgroundColor: course.color }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
        style={spotStyle}
      />

      {visited && (
        <span
          className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200"
          aria-label="방문한 교재"
        >
          <Check className="h-3 w-3" aria-hidden="true" /> 방문 완료
        </span>
      )}

      {!isAvailable && (
        <div className="relative flex items-center gap-1.5 border-b border-amber-100 bg-amber-50/80 px-6 py-1.5 pl-7 text-xs font-medium text-amber-800 dark:border-amber-500/20 dark:bg-amber-500/10 dark:text-amber-200">
          <Hourglass className="h-3 w-3" aria-hidden="true" />
          공개 준비 중 — 목차는 먼저 살펴볼 수 있어요
        </div>
      )}

      <div className="relative flex flex-1 flex-col gap-4 p-6 pl-7">
        <div className="flex items-start gap-3">
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 ring-black/5 transition-transform duration-200 group-hover/card:scale-110"
            style={{ backgroundColor: `${course.color}15`, color: course.color }}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-slate-900 dark:text-slate-100">
              {course.title}
            </h3>
            <p className="mt-0.5 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
              {course.subtitle}
            </p>
          </div>
        </div>

        <BadgeGroup
          items={[
            { label: typeLabel[course.type], tone: 'primary' },
            { label: difficultyLabel[course.difficulty], tone: 'neutral' },
            {
              label: statusLabel[course.status],
              tone: isAvailable ? 'success' : 'warning',
            },
          ]}
        />

        <div className="flex flex-wrap gap-1.5">
          {course.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-md bg-slate-50 px-2 py-0.5 text-xs text-slate-500 dark:bg-slate-800 dark:text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {course.estimatedHours}시간 예상
          </span>
          <div className="flex items-center gap-2">
            {onPreview && (
              <button
                type="button"
                onClick={() => onPreview(course)}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
              >
                미리보기
              </button>
            )}
            <button
              type="button"
              onClick={handleClickCard}
              className={cn(
                'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold text-white transition',
                isAvailable ? 'hover:opacity-90' : 'opacity-80',
              )}
              style={{ backgroundColor: course.color }}
            >
              {isAvailable ? '시작하기' : '목차 살펴보기'}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/card:translate-x-0.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
