import type { CourseData } from '../types/course';

export const courses: CourseData[] = [
  {
    id: 'paperclip',
    title: 'PaperClip 스타터킷',
    subtitle: '여러 AI 직원을 직접 설정하고 일을 맡겨 보는 AI 에이전트 스타터 키트',
    type: 'textbook',
    difficulty: 'beginner',
    status: 'available',
    estimatedHours: 12,
    color: '#3B82F6',
    icon: 'Paperclip',
    externalUrl: 'https://paperclip-starter.vercel.app',
    outline: [
      {
        title: '01. 셋업',
        description: 'PaperClip 설치 · OpenRouter 연결 · 첫 인스턴스 부팅을 진행합니다.',
        items: ['환경 점검', '무료 API 키 발급', 'onboard 명령'],
      },
      {
        title: '02. 탐색',
        description: 'gstack이라는 AI 회사 내부를 돌아보며 조직도·대시보드·에이전트 구성을 이해합니다.',
        items: ['대시보드 살펴보기', '조직도 읽기', '에이전트 상세 확인'],
      },
      {
        title: '03. 운영',
        description: 'Initiative 한 줄로 시작해 Heartbeat·Task Flow를 관찰하며 실제 운영 사이클을 체험합니다.',
        items: ['목표 설정', 'Run Heartbeat', 'Task 흐름 관찰'],
      },
      {
        title: '04. 관리',
        description: 'Budget과 Governance로 운영의 안전 장치를 마련하고 인젝션 위험을 줄입니다.',
        items: ['Budget 설계', 'Governance 규칙', '프롬프트 인젝션 방어'],
      },
      {
        title: '05. 다음 단계',
        description: '본인의 문제에 맞춘 에이전트 팀으로 PaperClip을 확장합니다.',
        items: ['커스터마이즈', '스킬 만들기', '졸업 후 로드맵'],
      },
    ],
    tags: ['AI', '에이전트', '회사운영', '창업', '기획', 'ClipHub'],
  },
  {
    id: 'lean-startup',
    title: '린 스타트업',
    subtitle: '고객이 진짜 원하는지 빠르게 확인하며 제품을 수정해 가는 창업 방법론',
    type: 'textbook',
    difficulty: 'intermediate',
    status: 'available',
    estimatedHours: 10,
    color: '#10B981',
    icon: 'Rocket',
    externalUrl: 'https://lean-startup-inky.vercel.app',
    outline: [
      {
        title: '01. Validated Learning',
        description: '가설·실험·증거의 삼각형을 토스 초기 3계층 가설 사례로 배웁니다.',
        items: ['반증 가능한 가설 설계', '토스 3계층 분해', '공통 안티 패턴'],
      },
      {
        title: '02. MVP',
        description: '최소 실험 장치의 일곱 가지 유형과 0원 MVP 설계 원칙을 정리합니다.',
        items: ['MVP 유형 일곱 가지', '토스 카카오톡 링크 실험', 'Time-to-Kill'],
      },
      {
        title: '03. Build-Measure-Learn',
        description: '작은 배치 · 2주 루프 · Carrying Capacity로 속도의 원칙을 이해합니다.',
        items: ['작은 배치 사고', '2주 루프 설계', 'Carrying Capacity'],
      },
      {
        title: '04. Innovation Accounting',
        description: '허수 지표를 걸러내고 코호트·예측 가능한 지표로 실험을 운영합니다.',
        items: ['허수 vs 실질 지표', '코호트 해석', 'Actionable 지표 설계'],
      },
      {
        title: '05. Pivot',
        description: '일곱 가지 피벗 유형과 "피벗하지 말아야 할 때"의 판단 기준을 배웁니다.',
        items: ['피벗 유형', '결정의 기준', '지속 vs 피벗'],
      },
    ],
    tags: ['린스타트업', 'MVP', '피벗', 'PMF', '창업', '고객인터뷰'],
  },
  {
    id: 'design-sprint',
    title: '디자인 스프린트',
    subtitle: '팀 4-6명이 실시간으로 함께 문제를 분해하고 해결안을 뽑는 협업 도구',
    type: 'tool',
    difficulty: 'intermediate',
    status: 'available',
    estimatedHours: 5,
    color: '#F59E0B',
    icon: 'Zap',
    externalUrl: 'https://design-sprint-five.vercel.app',
    outline: [
      {
        title: '01. 디자인 스프린트 개념',
        description: 'Google Ventures의 5일 디자인 스프린트를 이해합니다.',
        items: ['디자인 스프린트란', '5일 프로세스 개요', 'AI 지원의 역할'],
      },
      {
        title: '02. 팀 세션 생성과 참여',
        description: '멀티플레이어 보드에서 팀 세션을 만들고 참여합니다.',
        items: ['팀 코드 생성', '역할 분담', '실시간 협업 보드'],
      },
      {
        title: '03. 게임화된 5단계 흐름',
        description: 'Understand → Sketch → Decide → Prototype → Test를 AI 가이드와 함께 진행합니다.',
        items: ['이해와 지도 그리기', '스케치와 아이디어', '결정과 프로토타입'],
      },
      {
        title: '04. 수업·해커톤 활용 사례',
        description: '한동대 수업과 창업 해커톤에서의 실제 활용 사례를 살펴봅니다.',
        items: ['팀프로젝트 적용', '해커톤 워밍업', '피드백 수집 방법'],
      },
    ],
    tags: ['디자인스프린트', 'AI', '게임화', '팀활동', '협업', 'GV'],
  },
  {
    id: 'psst',
    title: 'PSST 도구',
    subtitle: '사업계획서를 문제·해결·확장·팀 4단계로 정리해 주는 작성 도구',
    type: 'tool',
    difficulty: 'intermediate',
    status: 'available',
    estimatedHours: 6,
    color: '#8B5CF6',
    icon: 'FileText',
    externalUrl: 'https://psst-textbook.vercel.app',
    outline: [
      {
        title: '01. PSST 프레임워크 소개',
        description: 'Problem-Solution-Scale-up-Team 구조의 배경과 목적을 이해합니다.',
        items: ['4단계 구성 원리', '국내 사업계획서 양식과의 매핑', 'PSST를 쓰는 이유'],
      },
      {
        title: '02. Problem — 문제 정의',
        description: '사용자 문제를 명확히 구조화하는 작성 패턴을 익힙니다.',
        items: ['문제 진술 작성법', '페르소나 정의', '현상 vs 본질'],
      },
      {
        title: '03. Solution — 솔루션 설계',
        description: '제시하는 솔루션의 논리적 정합성을 검증합니다.',
        items: ['가치 제안', '대체재 대비 우위', '핵심 기능 스펙'],
      },
      {
        title: '04. Scale-up — 성장 전략',
        description: '수익 모델·시장 성장 전략을 설계합니다.',
        items: ['시장 규모 산정', '수익 모델', 'GTM 전략'],
      },
      {
        title: '05. Team — 팀과 실행력',
        description: '실행 가능성을 담보하는 팀 구성을 서술합니다.',
        items: ['핵심 역량', '역할 분담', '로드맵'],
      },
    ],
    tags: ['사업계획서', 'PSST', '창업', '기획', '프레임워크'],
  },
  {
    id: 'rise',
    title: 'RISE — Firebase 교재',
    subtitle: 'Firebase로 서버 운영 없이 웹 앱을 배포해 보는 초보자용 실습 교재',
    type: 'textbook',
    difficulty: 'beginner',
    status: 'available',
    estimatedHours: 8,
    color: '#EF4444',
    icon: 'Flame',
    externalUrl: 'https://rise.handong.ac.kr',
    outline: [
      {
        title: '01. Firebase 개발 환경 준비',
        description: 'Firebase 프로젝트 생성과 기본 설정을 진행합니다.',
        items: ['Firebase 콘솔 가입', '프로젝트 생성', 'SDK 초기화'],
      },
      {
        title: '02. 인증(Authentication)',
        description: '이메일·구글 로그인을 구현해 보안 기초를 익힙니다.',
        items: ['이메일/비밀번호 인증', '소셜 로그인', '보안 규칙 기본'],
      },
      {
        title: '03. Firestore 데이터 모델링',
        description: 'NoSQL 문서형 데이터베이스 설계 원칙을 학습합니다.',
        items: ['Collection vs Document', '쿼리 패턴', '인덱스와 성능'],
      },
      {
        title: '04. Hosting과 배포',
        description: '작성한 웹 앱을 Firebase Hosting으로 배포합니다.',
        items: ['도메인 연결', 'CDN 캐시', 'CI 연동'],
      },
      {
        title: '05. 최종 프로젝트',
        description: '배운 것을 종합해 실제 작동하는 웹 앱을 완성합니다.',
        items: ['요구사항 분석', 'CRUD 구현', '최종 배포'],
      },
    ],
    tags: ['Firebase', '풀스택', '앱개발', '인증', 'Firestore', '입문'],
  },
  {
    id: 'vibe-coding',
    title: 'Vibe코딩',
    subtitle: 'Google AI Studio Build 모드로 아이디어를 코드 없이 웹 앱으로 만드는 법',
    type: 'textbook',
    difficulty: 'beginner',
    status: 'coming-soon',
    estimatedHours: 8,
    color: '#EC4899',
    icon: 'Code2',
    outline: [
      {
        title: '01. 바이브 코딩이란',
        description: '분위기·흐름 기반 개발 방법론의 철학을 이해합니다.',
        items: ['Vibe의 정의', '전통 개발과의 차이', '도구 스택 개요'],
      },
      {
        title: '02. AI 에디터 활용',
        description: 'AI Studio Build 모드에서 시작하는 바이브 코딩 실습을 진행합니다.',
        items: ['프롬프트 작성', '반복 사이클', '코드 리뷰'],
      },
      {
        title: '03. 프로토타입 즉시 배포',
        description: '생각한 즉시 쓸 수 있는 프로토타입을 만드는 흐름을 익힙니다.',
        items: ['요구사항 서술', '미리보기 공유', '피드백 반영'],
      },
      {
        title: '04. 협업과 커뮤니케이션',
        description: '비개발자와 협업하며 바이브 코딩을 운영하는 법을 배웁니다.',
        items: ['제품 소통법', '리뷰 체크리스트', '품질 기준'],
      },
    ],
    tags: ['바이브코딩', 'AI', '프로토타입', 'AIStudio', '개발'],
  },
];

export const getCourseById = (id: string): CourseData | undefined =>
  courses.find((course) => course.id === id);
