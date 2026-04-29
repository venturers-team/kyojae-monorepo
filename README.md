# kyojae-monorepo

조성배 교수님과 함께 만든 **4개 교재 프로젝트**를 단일 monorepo로 통합한 저장소.
pnpm workspaces + Vercel multi-project + rewrites 구조.

## 구조

```
kyojae-monorepo/
├── apps/
│   ├── portal/          # 루트 도메인 — 카드형 진입점
│   ├── paperclip/       # PaperClip 스타터킷 교재
│   ├── lean-startup/    # 린 스타트업 교재 (AI 채팅 예정)
│   └── psst/            # PSST 사업계획서 도구 교재
├── packages/            # 공용 UI·config (예정)
├── docs/                # PARA 구조의 프로젝트 문서
├── pnpm-workspace.yaml
└── package.json
```

## 4개 앱

| 앱 | 프레임워크 | 비고 |
|---|---|---|
| `portal` | Astro 6 + React Islands | 4개 교재 카드형 허브, 루트 도메인 |
| `paperclip` | Astro 6 + Starlight | 스타터킷 형태의 교재 |
| `lean-startup` | Next.js 16 + Tailwind v4 | 에릭 리스 방법론, AI 채팅 예정 |
| `psst` | Astro 6 + Three.js | 인터랙티브 사업계획서 도구 |

## 개발 명령어

```bash
# 모든 앱 의존성 설치
pnpm install

# 모든 앱 빌드
pnpm build

# 모든 앱 dev 병렬 실행
pnpm dev

# 단일 앱 작업
pnpm --filter portal dev
pnpm --filter paperclip build
pnpm --filter lean-startup dev
pnpm --filter psst build
```

## 요구 환경

- Node.js ≥ 20
- pnpm 10.x (`packageManager` 필드로 고정)

## 배포

각 앱은 별도 Vercel 프로젝트에 연결되며, `portal/vercel.json`의 rewrites로 루트 도메인에서 subpath(`/paperclip`·`/lean-startup`·`/psst`)로 라우팅된다.

## 문서

- `docs/1-Projects/마이그레이션-계획.md` — 전체 작업 계획 (Phase 0~7)
- `docs/1-Projects/진행-로그.md` — phase·task별 진행 상황
- `docs/3-Resources/` — 기술 결정·PoC 결과 등 참조 자료
- `docs/5-Archives/` — 폐기·종결된 결정 기록
- `CLAUDE.md` — Claude Code 작업 가이드
