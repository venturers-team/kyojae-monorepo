export const siteMeta = {
  title: '조성배 교수의 창업·AI 교육 허브',
  shortTitle: 'Cho Sungbae Hub',
  ogTitle: '조성배 교수의 창업·AI 교육 허브 — 교재·추천 도서·커뮤니티',
  description:
    '한동대학교 조성배 교수가 운영하는 창업·AI 교육 허브. 직접 개발한 6개 교재와 도구, 학생에게 추천하는 도서, 교수가 이끄는 동아리·학회(SODA·Venturers)의 성과를 한곳에서 확인할 수 있습니다.',
  ogImage: '/og-image.svg',
  professorName: '조성배',
  professorNameEn: 'Sungbae Cho',
  professorTitle: '한동대학교 전산전자공학부 교수',
  institution: '한동대학교',
  institutionEn: 'Handong Global Univ.',
  institutionDept: '전산전자공학부',
  institutionDeptEn: 'School of Computer Science & Electrical Engineering',
  contactEmail: 'sbcho@handong.edu',
  copyrightYear: 2026,
  tagline: '교재로 배우고 · 책으로 깊이를 더하고 · 커뮤니티에서 실행한다',
  brandPalette: ['#4f46e5', '#3b82f6', '#22d3ee'],
  nav: [
    { label: '교재', enLabel: 'Textbooks', href: '/explore' },
    { label: '추천 도서', enLabel: 'Books', href: '/books' },
    { label: '커뮤니티', enLabel: 'Community', href: '/community' },
    { label: '학습 경로', enLabel: 'Pathways', href: '/pathways' },
    { label: '소개', enLabel: 'About', href: '/about' },
  ],
  hero: {
    title: '교재·도서·커뮤니티가 이어지는 창업·AI 학습 허브',
    subtitle:
      '한동대 조성배 교수가 수업에서 쓰는 교재 6종, 학생에게 권하는 책, 교수가 이끄는 동아리(SODA)·창업학회(Venturers)의 성과까지 한 흐름으로 연결됩니다.',
    primaryCta: { label: '교재 둘러보기', href: '/explore' },
    secondaryCta: { label: '내게 맞는 경로 찾기', href: '/pathways' },
  },
} as const;

export type SiteMeta = typeof siteMeta;
