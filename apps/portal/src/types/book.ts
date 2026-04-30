export type BookCategory =
  | 'lean-startup'
  | 'product'
  | 'strategy'
  | 'ai'
  | 'leadership'
  | 'design';

export interface BookData {
  id: string;
  title: string;
  titleEn?: string;
  author: string;
  authorEn?: string;
  year?: number;
  publisher?: string;
  category: BookCategory;
  cover?: string;
  summary: string;
  recommendation: string;
  tags: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  purchaseUrl?: string;
  relatedCourseIds?: string[];
}

export const categoryLabel: Record<BookCategory, string> = {
  'lean-startup': '린 스타트업',
  product: '제품·PM',
  strategy: '전략·경영',
  ai: 'AI·기술',
  leadership: '리더십·조직',
  design: '디자인·UX',
};

export const bookDifficultyLabel: Record<BookData['difficulty'], string> = {
  beginner: '입문',
  intermediate: '중급',
  advanced: '심화',
};
