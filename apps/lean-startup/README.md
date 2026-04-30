# 린 스타트업 인터랙티브 교재 — 토스로 배우는 실험의 과학

Eric Ries의 린 스타트업(Lean Startup) 방법론을 한국 대학생이 직접 소화할 수 있도록 설계된 웹 기반 인터랙티브 교재다. 원서에서 IMVU가 담당하던 관통 사례의 역할을 **토스(Toss) / 비바리퍼블리카**로 대체했다. 이승건 대표의 8번 실패에서 9번째 성공까지, 카카오톡 링크 MVP, 2주 BML 루프, 혁신 회계 지표 선택, 줌아웃 피벗까지를 하나의 타임라인으로 추적한다.

## 프로젝트 목적

- 린 스타트업의 5개 핵심 개념 — 검증된 학습(Validated Learning), 최소 기능 제품(MVP), Build-Measure-Learn 루프, 혁신 회계(Innovation Accounting), 피벗(Pivot) — 을 한국 학생에게 낯설지 않은 사례로 전달한다.
- 텍스트 위주 교과서의 한계를 넘어, 웹의 인터랙션·영상·시각 요소로 개념을 체화시키는 교재 플랫폼을 구축한다.
- 조성배 교수 연구실 교재 개발 프로젝트의 일환으로, 향후 AI 튜터링·문답 인터랙션 등으로 확장 가능한 기반을 마련한다.

## 기술 스택

- **Next.js 16** (App Router, Turbopack, Server Components)
- **TypeScript**
- **Tailwind CSS v4** (CSS-first 구성, `@import "tailwindcss"`)
- **next/font + Noto Sans KR** (Pretendard 대체 한글 본문 폰트)
- **lucide-react** (아이콘), **clsx + tailwind-merge** (클래스 유틸)
- **framer-motion**, **zustand** (인터랙션·상태 관리용으로 사전 설치)
- **ai + @ai-sdk/anthropic** (향후 AI 튜터링 연동 대비 사전 설치)
- 배포 타겟: **Vercel**

## 실행 방법

```bash
# 1. 개발 서버 실행
npm run dev

# 2. 프로덕션 빌드 검증
npm run build

# 3. 프로덕션 서버 실행
npm run start

# 4. 린트
npm run lint
```

기본 포트는 `http://localhost:3000`. 챕터별 경로는 아래와 같다.

```
/                                       # 랜딩 페이지
/chapters/validated-learning             # 1장. 검증된 학습
/chapters/mvp                            # 2장. 최소 기능 제품
/chapters/build-measure-learn            # 3장. BML 루프
/chapters/innovation-accounting          # 4장. 혁신 회계
/chapters/pivot                          # 5장. 피벗
```

## 디렉토리 구조

```
lean-startup/
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # 전역 레이아웃 (Noto Sans KR, 한글 최적화)
│   │   ├── page.tsx                    # 랜딩 페이지 (Hero + 5개 ConceptCard)
│   │   ├── globals.css                 # Tailwind v4 CSS-first 설정 + 한글 타이포 규칙
│   │   └── chapters/
│   │       ├── validated-learning/page.tsx
│   │       ├── mvp/page.tsx
│   │       ├── build-measure-learn/page.tsx
│   │       ├── innovation-accounting/page.tsx
│   │       └── pivot/page.tsx
│   ├── components/
│   │   ├── Hero.tsx                    # 랜딩 Hero 섹션
│   │   ├── ConceptCard.tsx             # 개념 카드 (챕터 진입점)
│   │   ├── ChapterNav.tsx              # 이전/다음 챕터 내비게이션
│   │   └── VideoPlaceholder.tsx        # YouTube 임베드 자리 표시 컴포넌트
│   └── lib/
│       ├── chapters.ts                 # 챕터 메타데이터 (slug, order, 토스 사례 포인트)
│       └── utils.ts                    # cn() 유틸 (clsx + tailwind-merge)
├── public/
├── package.json
└── README.md
```

## 콘텐츠 설계 원칙

1. **관통 사례는 토스 단일**. 다른 국내 기업(당근마켓 등)은 보조 사례로만 사용한다.
2. **개념 정의 → "왜 필요한가" → 토스 사례 적용 → 적용 연습**의 4단 구조를 모든 챕터에서 유지.
3. **1차 자료 우선**. 이승건 대표의 공개 강연(PO SESSION 등)을 영상 임베드 1순위로 사용.
4. **허수 지표 경계**. 혁신 회계 챕터에서 특히, 가입자 수·다운로드 수 같은 허수 지표를 명시적으로 배제하는 방법을 학습자가 체득하게 한다.

## Vault 설계 문서 참조

본 교재의 구조·사례·영상 선정은 Obsidian Vault의 설계 노트를 기반으로 한다. 콘텐츠 확장 시 아래 문서를 1차 자료로 삼는다.

- `Vault/1-Projects/교재개발/02-린-스타트업/목차-초안.md` — 전체 목차 및 섹션별 비주얼·참여 유도 설계
- `Vault/1-Projects/교재개발/02-린-스타트업/관통-사례-확정.md` — 토스 선정 근거, 후보 비교 분석
- `Vault/1-Projects/교재개발/02-린-스타트업/관통-사례-콘텐츠-초안.md` — 섹션별 토스 사례 본문 초안
- `Vault/1-Projects/교재개발/02-린-스타트업/유튜브-영상-탐색.md` — 한국어 영상 임베드 후보 목록

## 다음 단계

- `VideoEmbed` 컴포넌트 실구현 (YouTube IFrame API) 및 `VideoPlaceholder` 치환
- `0장 — 들어가며`(8번 실패 스토리) 전용 페이지 추가
- 인터랙티브 요소 — 가설 변환 튜토리얼, MVP 유형 선택 미니게임, 코호트 분석 시뮬레이터
- `ai + @ai-sdk/anthropic` 기반 AI 튜터링(가설 피드백) 라우트 핸들러 추가
- Vercel 프로덕션 배포 및 교수·학생 테스트 피드백 루프 구축
