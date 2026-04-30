import type { CourseData, FilterState } from '../types/course';

export const typeLabel: Record<CourseData['type'], string> = {
  textbook: '웹 교재',
  tool: '웹 도구',
};

export const difficultyLabel: Record<CourseData['difficulty'], string> = {
  beginner: '입문',
  intermediate: '중급',
};

export const statusLabel: Record<CourseData['status'], string> = {
  available: '이용 가능',
  'coming-soon': '준비 중',
};

export function filterCourses(
  courses: CourseData[],
  filter: FilterState,
): CourseData[] {
  const keyword = filter.keyword.trim().toLowerCase();
  let list = courses.filter((course) => {
    if (filter.type !== 'all' && course.type !== filter.type) return false;
    if (filter.difficulty !== 'all' && course.difficulty !== filter.difficulty) return false;
    if (filter.status !== 'all' && course.status !== filter.status) return false;
    if (keyword) {
      const haystack = [
        course.title,
        course.subtitle,
        ...course.tags,
      ]
        .join(' ')
        .toLowerCase();
      if (!haystack.includes(keyword)) return false;
    }
    return true;
  });

  if (filter.sortBy === 'difficulty') {
    const order: Record<CourseData['difficulty'], number> = { beginner: 0, intermediate: 1 };
    list = [...list].sort((a, b) => order[a.difficulty] - order[b.difficulty]);
  } else if (filter.sortBy === 'newest') {
    const statusOrder: Record<CourseData['status'], number> = { 'coming-soon': 0, available: 1 };
    list = [...list].sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
  }
  return list;
}
