# 교재개발 monorepo — Claude 작업 가이드

## 프로젝트 개요

조성배 교수님과 함께 만든 4개 교재 프로젝트(PaperClip 스타터킷·린 스타트업·PSST 사업계획서 도구·교재 포털)를 단일 monorepo로 통합한 저장소. 2026-04-29 교수님 Zoom 미팅에서 채택 결정된 후 작업 시작.

채택 아키텍처: **옵션 A — pnpm workspaces + Vercel multi-project + rewrites**. 자세한 배경·90개 atomic task·위험 분석은 `docs/1-Projects/마이그레이션-계획.md` 참조.

```
교재개발-monorepo/
├── apps/                # 각 교재가 워크스페이스로
│   ├── portal/          # Astro — 루트 도메인
│   ├── paperclip/       # Astro
│   ├── lean-startup/    # Next.js (AI 채팅)
│   └── psst/            # Astro + Three.js
├── packages/            # 공용 UI·config (Phase 8에서 추출)
├── docs/                # 본 프로젝트 전용 PARA 보관소 (아래 규칙 참조)
├── pnpm-workspace.yaml
├── package.json
└── CLAUDE.md            # 본 파일
```

---

## docs/ — PARA 보관소

`docs/`는 본 monorepo 한정 지식 저장소다. PARA(Projects·Areas·Resources·Archives) 구조를 차용하되, **이 monorepo에 한정된 결정·기록·자료만** 담는다. 본 repo는 외부 시스템·개인 노트와 독립된 자립 프로젝트로 운영한다.

### 폴더 구조

```
docs/
├── 1-Projects/   # 활성 이니셔티브 (마이그레이션, 신규 앱 추가 등 마감/목표가 있는 작업)
├── 2-Areas/      # 지속 책임 영역 (배포 운영, 의존성 관리, 보안, 성능)
├── 3-Resources/  # 참조 자료 (Vercel 설정 패턴, 프레임워크 결정 근거, 외부 문서 링크)
├── 5-Archives/   # 완료/중단된 작업 (예: 폐기된 옵션, 종결된 마이그레이션)
```

`0-Inbox/`, `4-Someday/`는 필요 시점에 생성. 빈 폴더 만들지 않음.

### 작업 진행 시 규칙 (STRICT)

- **결정·합의·검증된 정보가 발생하면 즉시 docs/ 안 적절한 폴더에 atomic note로 기록.** "나중에 정리"는 금지. 합의 시점에 바로 만든다.
- **활성 작업의 진행 흔적은 `1-Projects/[작업명]/진행-로그.md`에 phase·날짜별로 추가.** 계획 문서(예: `마이그레이션-계획.md`) 자체는 큰 방향 변경 시에만 갱신, 일상 진행은 별도 로그 파일.
- **작업 종료·종결 시 `5-Archives/`로 이동.** 폐기된 결정·옵션도 archive에 보존(같은 실수 반복 방지).
- **모든 문서 한국어**, 기술 용어는 원어 병기 (`Korean(English)`).
- **Mermaid 다이어그램 권장** — 복잡한 흐름·아키텍처 설명 시 텍스트 아트 대신 Mermaid 사용.
- **파일명 규칙** — `YYYY-MM-DD_[주제].md` (날짜 기반) 또는 짧은 명사 슬러그 (예: `vercel-rewrite-패턴.md`).

### docs/ 메타 — 이 폴더 자체에 대한 안내

- 본 폴더는 monorepo 코드와 함께 git에 포함된다 (외부 공개돼도 무방한 내용만).
- 비밀 정보(API 키·토큰·개인정보 등) 절대 기록 금지.
- 절대경로 사용 시 사용자명·외부 시스템 경로 노출 주의 — repo 상대경로 또는 `~/...` 사용 권장.
- 외부 시스템(개인 노트·Notion 등) 동기화 작업은 본 repo 범위 밖 — task·phase에 등록하지 않는다.

---

## 코드 작업 규칙

### Git
- **main 브랜치 직접 commit·push** — 솔로 dev 흐름. feature branch + PR 의례는 사용 안 함
- 사용자 명시 요청 없이는 commit 만들지 않음
- 커밋 메시지: 영문 동사 시작 권장 (Conventional Commits 스타일 부드럽게)
- 푸시는 사용자 명시 요청 시에만 (또는 본 가이드 흐름상 commit 후 자연스러운 push)

### 단계 진입 게이트 (build + Playwright QA)
**매 단계 commit·push 전 다음 두 가지 모두 통과 필수.** 통과 못 하면 다음 단계 진입 금지.

1. `pnpm --filter <app> build` — exit 0
2. Playwright e2e smoke test — 콘솔 에러 0, 메인 페이지 200, 핵심 인터랙션 검증

build만으로는 hydration 오류·런타임 에러·시각적 회귀를 못 잡으므로 e2e가 회귀 차단의 핵심. monorepo 루트에 Playwright 단일 설치, 각 앱별 `apps/<name>/tests/e2e/`에 spec. paperclip 4-A retroactive QA에서 첫 셋업 후 portal·psst·lean-startup 복제.

### Vercel 작업
- 4개 Vercel 프로젝트(`team_gB3qTz6Zjg6Gg5hkBONDrhsM`)는 monorepo `Root Directory` 설정으로 재구성 예정
- 자동 배포는 push 트리거. 사용자 모르게 production deploy 트리거하지 않기.

### 코드 스타일
- 기존 앱은 각자의 프레임워크 컨벤션 유지 (Astro·Next.js)
- 공용 패키지(`packages/`)는 TypeScript + tsconfig 상속
- 의존성 통일은 Phase 6(`docs/1-Projects/마이그레이션-계획.md` #71-76)에서 일괄 처리

---

## 시작 지점

새 세션 시작 시 다음 파일을 먼저 읽는다.
1. `docs/1-Projects/마이그레이션-계획.md` — 전체 작업 계획
2. `docs/1-Projects/진행-로그.md` (존재 시) — 가장 최근 진행 상황
3. 본 CLAUDE.md — 작업 규칙

진행-로그에서 현재 phase·task를 확인 후 다음 task로 진입.
