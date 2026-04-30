export type CourseStatus = 'available' | 'coming-soon';
export type CourseType = 'textbook' | 'tool';
export type DifficultyLevel = 'beginner' | 'intermediate';

export interface OutlineSection {
  title: string;
  description?: string;
  items?: string[];
}

export interface CourseData {
  id: string;
  title: string;
  subtitle: string;
  type: CourseType;
  difficulty: DifficultyLevel;
  status: CourseStatus;
  estimatedHours: number;
  color: string;
  icon: string;
  externalUrl?: string;
  outline: OutlineSection[];
  screenshots?: string[];
  tags: string[];
}

export interface FilterState {
  type: 'all' | CourseType;
  difficulty: 'all' | DifficultyLevel;
  status: 'all' | CourseStatus;
  keyword: string;
  sortBy: 'recommended' | 'difficulty' | 'newest';
}

export const DEFAULT_FILTER_STATE: FilterState = {
  type: 'all',
  difficulty: 'all',
  status: 'all',
  keyword: '',
  sortBy: 'recommended',
};
