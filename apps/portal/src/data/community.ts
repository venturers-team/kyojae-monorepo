import type { CommunityData } from '../types/community';

export const communities: CommunityData[] = [
  {
    id: 'soda',
    name: '소다',
    nameEn: 'SODA',
    type: 'club',
    tagline: '앱으로 캠퍼스의 문제를 푼다',
    summary:
      '조성배 교수가 지도하는 한동대 학생 주도 앱 개발 동아리. 기수별로 8주 스프린트를 돌며 실제 배포되는 앱을 출시하는 실전형 커뮤니티입니다.',
    positioning:
      '바이브 코딩·Firebase 교재에서 배운 기술을 "실제 사용자가 쓰는 앱"으로 연결하는 실행 레이어.',
    founded: 2021,
    memberCount: 28,
    cadence: '학기당 1기수 · 주 1회 세션 + 주말 스프린트',
    color: '#22d3ee',
    icon: 'Smartphone',
    tags: ['앱개발', 'iOS', 'Android', 'Firebase', '스프린트'],
    highlights: [
      {
        year: 2025,
        title: '한동 해커톤 2025 대상',
        description:
          '48시간 해커톤에서 "학식 알리미" 앱으로 참가 40팀 중 대상 수상. Firebase + 푸시 알림 연동.',
        kind: 'award',
      },
      {
        year: 2025,
        title: '캠퍼스 중고거래 앱 HandMarket 출시',
        description:
          '교내 플리마켓을 디지털화한 앱. 누적 가입자 1,200명, 거래 건수 월 300건 이상.',
        kind: 'launch',
      },
      {
        year: 2024,
        title: '임팩트 앱 해커톤 우수상',
        description:
          '시각장애 학생을 위한 캠퍼스 네비게이션 프로토타입으로 사회가치 부문 우수상.',
        kind: 'award',
      },
      {
        year: 2024,
        title: '5기 완료 · 앱 3종 스토어 배포',
        description:
          '스터디 매칭 / 학과 공지 허브 / 캠퍼스 식당 리뷰 앱을 Play Store·App Store에 동시 배포.',
        kind: 'milestone',
      },
    ],
    teams: [
      { name: 'HandMarket', members: 4, result: '월간 활성 사용자 800명', year: 2025 },
      { name: '밥친', members: 3, result: '학식 알리미, 해커톤 대상', year: 2025 },
      { name: 'StudyMate', members: 5, result: '스터디 매칭, 누적 다운로드 2k', year: 2024 },
    ],
    relatedCourseIds: ['rise', 'vibe-coding', 'paperclip'],
  },
  {
    id: 'venturers',
    name: '벤처러스',
    nameEn: 'Venturers',
    type: 'society',
    tagline: '아이디어에서 법인 설립까지',
    summary:
      '조성배 교수가 운영하는 한동대 창업학회. 린 스타트업·PSST·디자인 스프린트 방법론을 한 학기 커리큘럼으로 돌려 실제 법인 설립과 투자 유치까지 이어지는 실전 학회입니다.',
    positioning:
      '교재(린 스타트업·PSST·디자인 스프린트)가 시험이 아닌 실제 문서로 쓰이는 장. 학회 활동 자체가 창업 파이프라인.',
    founded: 2019,
    memberCount: 42,
    cadence: '학기 단위 정규 커리큘럼 + 방학 데모데이',
    color: '#4f46e5',
    icon: 'Sparkles',
    tags: ['창업', '투자유치', '사업계획서', 'MVP', '데모데이'],
    highlights: [
      {
        year: 2026,
        title: '배출 팀 누적 투자 유치 12억 원 돌파',
        description:
          '2019년 이래 학회 출신 창업팀 8곳 기준 누적 시드/프리시드 투자 유치액 12억 원 달성.',
        kind: 'funding',
      },
      {
        year: 2026,
        title: '팀 NOUS, 겟잇던(Get(it)Done) 프리시드 4,000만원',
        description:
          '제2의 두뇌 서비스 Get(it)Done으로 텍스코어 프리시드 선정 + 아산두어스 본선 진출.',
        kind: 'funding',
      },
      {
        year: 2025,
        title: '예비창업패키지 2팀 동시 선정',
        description:
          '한 기수에서 예창패 선정 2팀 배출. 창업진흥원 기준 학부 단일 학회로는 이례적.',
        kind: 'award',
      },
      {
        year: 2024,
        title: '학회 데모데이 · VC 4곳 초청',
        description:
          '한 학기 성과를 10팀이 발표하는 데모데이. 크립톤·본엔젤스 등 VC 4곳 참석.',
        kind: 'milestone',
      },
      {
        year: 2023,
        title: '첫 법인 설립 배출',
        description:
          '학회 출신 1호 법인(에듀테크 분야) 설립. 한동대 학생 창업 파이프라인의 상징적 이정표.',
        kind: 'milestone',
      },
    ],
    teams: [
      { name: 'NOUS / Get(it)Done', members: 3, result: '프리시드 4,000만원 + 텍스코어 선정', year: 2026 },
      { name: 'Team Linkin', members: 4, result: '예비창업패키지 선정', year: 2025 },
      { name: 'EduBloom', members: 5, result: '시드 2억 유치, 법인 설립', year: 2023 },
    ],
    relatedCourseIds: ['lean-startup', 'psst', 'design-sprint'],
  },
];

export const getCommunityById = (id: string): CommunityData | undefined =>
  communities.find((c) => c.id === id);
