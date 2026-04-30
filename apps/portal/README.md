# 스타트업 교재 통합 포털 (textbook-portal)

조성배 교수님이 개발한 6개의 스타트업 교재와 도구를 한 곳에서 탐색할 수 있는 통합 진입점 웹사이트입니다. 카드 그리드 탐색, 필터·검색, 그리고 페르소나 기반 학습 경로 추천을 제공합니다.

## 프로젝트 목적

- 흩어져 있던 6개 교재(PaperClip, 린 스타트업, 디자인 스프린트, PSST, RISE, Vibe코딩)를 단일 포털에서 소개
- "무엇부터 공부해야 하나?" 질문을 해결하는 3가지 학습 경로 제공
- 방문 이력을 localStorage에 저장해 학생이 학습 진행 상태를 한눈에 파악

## 기술 스택

- Astro 6 (SSG)
- React 19 (Islands: 상태·이벤트가 필요한 컴포넌트만 클라이언트 하이드레이션)
- Tailwind CSS v4
- TypeScript strict
- lucide-react (아이콘), clsx (클래스 조합)

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:4321)
npm run dev

# 정적 빌드 산출물 생성 (dist/)
npm run build

# 빌드 결과 프리뷰
npm run preview
```

Node.js 22.12.0 이상이 필요합니다.

## 디렉토리 구조

```
src/
├── components/
│   ├── layout/           # Navbar, Footer (Astro)
│   └── shared/           # React Islands — CourseCard, FilterBar, PreviewPanel 등
├── data/
│   ├── courses.ts        # 6개 교재 데이터 (CourseData[])
│   ├── pathways.ts       # 3개 학습 경로 (PathwayData[])
│   └── site.ts           # 사이트 메타 정보
├── hooks/
│   └── useLocalStorage.ts  # localStorage/sessionStorage 훅 + 방문 이력 훅
├── layouts/
│   └── BaseLayout.astro  # 공통 쉘 (head, Navbar, Footer)
├── lib/
│   ├── cn.ts             # clsx 래퍼
│   └── course-utils.ts   # 필터링 유틸, 라벨 매핑
├── pages/
│   ├── index.astro       # 랜딩
│   ├── about.astro       # 소개
│   ├── pathways.astro    # 학습 경로
│   └── explore/
│       ├── index.astro   # 탐색 (필터 + 미리보기 패널)
│       └── [slug].astro  # 교재 상세 (getStaticPaths)
├── styles/
│   └── global.css        # Tailwind v4 + 테마 변수
└── types/
    ├── course.ts
    └── pathway.ts
```

## Islands 전략

- 레이아웃·정적 콘텐츠: Astro 컴포넌트로 서버에서 렌더
- 상태/인터랙션이 필요한 파트만 React 컴포넌트 + `client:load`
  - `CourseCardGrid` (필터링 + 방문 뱃지)
  - `FilterBar` (chip 필터, sessionStorage 연동)
  - `PreviewPanel` (슬라이드인 모달)
  - `PathwayRoadmap` (페르소나 선택 + 경로 표시)

## 주의 — 외부 URL

`src/data/courses.ts`의 각 교재 `externalUrl` 필드는 실제 교재 사이트 배포 시 업데이트가 필요합니다. 현재 RISE만 추정 URL이 기록되어 있으며, 다른 교재는 배포가 완료되는 대로 실제 URL로 교체해야 합니다.

## 주요 디자인 결정

- Primary 컬러: `indigo-600` — WCAG AA 기준 만족
- 각 교재 고유 컬러: 카드 좌측 사이드 바, 히어로 배경, CTA 버튼에 일관 적용
- 반응형 그리드: 모바일 1열 → 태블릿 2열 → 데스크톱 3열
- 다크 모드 지원: `dark:` 변형 클래스 전반 적용
