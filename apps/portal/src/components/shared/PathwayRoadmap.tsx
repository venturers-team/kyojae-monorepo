import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import type { CourseData } from '../../types/course';
import type { PathwayData } from '../../types/pathway';
import { cn } from '../../lib/cn';
import { useLocalStorage, useVisitedCourses } from '../../hooks/useLocalStorage';

interface PathwayRoadmapProps {
  pathways: PathwayData[];
  courses: CourseData[];
  initialPathwayId?: string;
}

const ACTIVE_KEY = 'portal_active_pathway';

export default function PathwayRoadmap({
  pathways,
  courses,
  initialPathwayId,
}: PathwayRoadmapProps) {
  const [storedId, setStoredId] = useLocalStorage<string | null>(
    ACTIVE_KEY,
    initialPathwayId ?? pathways[0]?.id ?? null,
  );
  const [visited] = useVisitedCourses();
  const [activeId, setActiveId] = useState<string | null>(
    initialPathwayId ?? storedId ?? pathways[0]?.id ?? null,
  );

  const handleSelect = (id: string) => {
    setActiveId(id);
    setStoredId(id);
  };

  const active = pathways.find((pathway) => pathway.id === activeId) ?? pathways[0];

  const courseById = (id: string) => courses.find((course) => course.id === id);

  return (
    <section className="flex flex-col gap-6">
      <div className="grid gap-3 md:grid-cols-3">
        {pathways.map((pathway) => {
          const selected = pathway.id === active?.id;
          return (
            <button
              key={pathway.id}
              type="button"
              onClick={() => handleSelect(pathway.id)}
              aria-pressed={selected}
              className={cn(
                'rounded-2xl border p-5 text-left transition',
                selected
                  ? 'border-indigo-400 bg-indigo-50 shadow-sm dark:border-indigo-400/60 dark:bg-indigo-500/10'
                  : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800',
              )}
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-300">
                {pathway.id}
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">
                {pathway.persona}
              </p>
              <p className="mt-2 line-clamp-3 text-sm text-slate-500 dark:text-slate-400">
                {pathway.description}
              </p>
            </button>
          );
        })}
      </div>

      {active && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                {active.persona} 경로
              </h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {active.description}
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-200">
              총 {active.steps.length}단계
            </span>
          </div>

          <ol className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
            {active.steps.map((step, index) => {
              const course = courseById(step.courseId);
              const isVisited = course ? visited.includes(course.id) : false;
              const isLast = index === active.steps.length - 1;
              return (
                <li
                  key={step.courseId}
                  className="flex flex-1 items-stretch gap-3"
                >
                  <div className="relative flex flex-1 flex-col rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900">
                    <span
                      className="absolute -top-3 left-5 inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: course?.color ?? '#475569' }}
                    >
                      {index + 1}
                    </span>
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-base font-semibold text-slate-900 dark:text-slate-100">
                        {course?.title ?? step.courseId}
                      </p>
                      {isVisited ? (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                          <Check className="h-3 w-3" aria-hidden="true" /> 방문
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-400">
                          미방문
                        </span>
                      )}
                    </div>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                      {step.reason}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>예상 {Math.round(step.estimatedMinutes / 60)}시간</span>
                      {course && (
                        <a
                          href={`/explore/${course.id}`}
                          className="inline-flex items-center gap-1 font-semibold"
                          style={{ color: course.color }}
                        >
                          자세히 보기
                          <ArrowRight className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </div>
                  </div>
                  {!isLast && (
                    <span className="hidden flex-none items-center self-center lg:inline-flex">
                      <ArrowRight className="h-5 w-5 text-slate-400" aria-hidden="true" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </section>
  );
}
