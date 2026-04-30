import type { PathwayData } from '../types/pathway';

export const pathways: PathwayData[] = [
  {
    id: 'founder',
    persona: '첫 스타트업을 시작하려는 학생',
    icon: 'Rocket',
    description:
      '아이디어는 있지만 어디서부터 시작해야 할지 막막한 창업 초보자를 위한 경로입니다. 가설 수립과 검증부터 사업계획서 작성까지 창업의 뼈대를 세웁니다.',
    steps: [
      {
        courseId: 'lean-startup',
        reason: '가설 수립과 검증의 기본기를 먼저 갖추기 위해',
        estimatedMinutes: 10 * 60,
      },
      {
        courseId: 'paperclip',
        reason: 'AI 에이전트로 초기 실행 체계를 최소 비용으로 구축하기 위해',
        estimatedMinutes: 12 * 60,
      },
      {
        courseId: 'psst',
        reason: '검증된 아이디어를 사업계획서로 정리해 투자·평가를 준비하기 위해',
        estimatedMinutes: 6 * 60,
      },
      {
        courseId: 'design-sprint',
        reason: '팀 단위로 빠르게 프로토타입을 만들어 학습 주기를 가속하기 위해',
        estimatedMinutes: 5 * 60,
      },
    ],
  },
  {
    id: 'vibe-coder',
    persona: '바이브 코딩에 올인하려는 개발자',
    icon: 'Code2',
    description:
      'AI 도구를 적극 활용해 아이디어를 빠르게 제품으로 만드는 실전형 개발자를 위한 경로입니다. 풀스택 기초부터 바이브 코딩, AI 에이전트 운영까지 이어집니다.',
    steps: [
      {
        courseId: 'vibe-coding',
        reason: '먼저 바이브 코딩의 철학과 흐름을 익혀 개발 사고방식을 전환하기 위해',
        estimatedMinutes: 8 * 60,
      },
      {
        courseId: 'paperclip',
        reason: '만든 제품을 AI 에이전트 기반으로 운영·확장하는 구조를 배우기 위해',
        estimatedMinutes: 12 * 60,
      },
      {
        courseId: 'rise',
        reason: 'Firebase로 안정적인 백엔드와 배포 파이프라인을 완성하기 위해',
        estimatedMinutes: 8 * 60,
      },
    ],
  },
  {
    id: 'pm',
    persona: 'PM/기획 지망생',
    icon: 'FileText',
    description:
      '제품 기획과 팀 운영을 전문성 있게 수행하고 싶은 학생을 위한 경로입니다. 스프린트 기반 협업, 린 방법론, 그리고 사업계획서 작성 역량까지 기획자의 필수 역량을 쌓습니다.',
    steps: [
      {
        courseId: 'design-sprint',
        reason: 'PM의 핵심 역량인 팀 촉진과 스프린트 운영을 먼저 경험하기 위해',
        estimatedMinutes: 5 * 60,
      },
      {
        courseId: 'lean-startup',
        reason: '제품 의사결정의 근거가 되는 가설 수립·검증 방법론을 익히기 위해',
        estimatedMinutes: 10 * 60,
      },
      {
        courseId: 'psst',
        reason: '기획한 제품을 공식 문서로 정리해 이해관계자를 설득하기 위해',
        estimatedMinutes: 6 * 60,
      },
    ],
  },
];

export const getPathwayById = (id: string): PathwayData | undefined =>
  pathways.find((pathway) => pathway.id === id);
