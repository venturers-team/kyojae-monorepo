import { useMemo, useState } from 'react';
import type { CourseData, FilterState } from '../../types/course';
import { DEFAULT_FILTER_STATE } from '../../types/course';
import CourseCard from './CourseCard';
import FilterBar from './FilterBar';
import PreviewPanel from './PreviewPanel';
import { filterCourses } from '../../lib/course-utils';
import { useSessionStorage, useVisitedCourses } from '../../hooks/useLocalStorage';

interface CourseCardGridProps {
  courses: CourseData[];
  showFilter?: boolean;
  showPreview?: boolean;
  gridClassName?: string;
  initialFilter?: Partial<FilterState>;
  filterStorageKey?: string;
}

export default function CourseCardGrid({
  courses,
  showFilter = false,
  showPreview = false,
  gridClassName,
  initialFilter,
  filterStorageKey = 'portal_filter_state',
}: CourseCardGridProps) {
  const [filter, setFilter] = useSessionStorage<FilterState>(filterStorageKey, {
    ...DEFAULT_FILTER_STATE,
    ...initialFilter,
  });
  const [visited] = useVisitedCourses();
  const [previewCourse, setPreviewCourse] = useState<CourseData | null>(null);
  const [previewOpen, setPreviewOpen] = useState(false);

  const filteredCourses = useMemo(
    () => filterCourses(courses, filter),
    [courses, filter],
  );

  const handlePreview = (course: CourseData) => {
    setPreviewCourse(course);
    setPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setPreviewOpen(false);
  };

  return (
    <div className="flex flex-col gap-6">
      {showFilter && (
        <FilterBar
          value={filter}
          onChange={setFilter}
          totalCount={courses.length}
          matchedCount={filteredCourses.length}
        />
      )}

      {filteredCourses.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
          조건에 맞는 교재가 없습니다. 필터를 조정해 주세요.
        </div>
      ) : (
        <div
          className={
            gridClassName ??
            'grid gap-5 sm:grid-cols-2 lg:grid-cols-3'
          }
        >
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              visited={visited.includes(course.id)}
              onPreview={showPreview ? handlePreview : undefined}
            />
          ))}
        </div>
      )}

      {showPreview && (
        <PreviewPanel
          course={previewCourse}
          open={previewOpen}
          onClose={handleClosePreview}
        />
      )}
    </div>
  );
}
