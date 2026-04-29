---
created: 2026-04-29
updated: 2026-04-29
type: PoC 결과·기술 메모
관련: 마이그레이션-계획.md Phase 1 (#9-#13), Phase 5 (#62-#64)
---

# lean-startup basePath PoC 결과 (2026-04-29)

## 결론 한 줄

**옵션 A 채택 가능.** Next.js 16 `basePath: '/lean-startup'` 적용 시 **next/link·_next/static 자동 prefix 동작**, 다만 **public/ 자산은 수동 prefix 필수** — 6개 위치 audit 대상 식별됨.

## 검증 환경

- 사본: `/tmp/lean-startup-poc/` (원본 `~/Projects/교재개발/lean-startup/`은 보존)
- 변경: `next.config.ts`에 `basePath: '/lean-startup'` 1줄 추가
- 빌드: `npm run build` (Next.js 16.2.3 + Turbopack), 4.8s 컴파일 + 정적 페이지 10/10 생성
- 빌드 결과: exit 0, 에러 없음

## 자동 prefix 동작 (수정 불필요)

| 대상 | 결과 | 검증 방법 |
|---|---|---|
| `_next/static/...` 프레임워크 청크 | ✅ 50/50 모두 `/lean-startup/_next/static/...`로 prefix | `grep '"/_next/'` 결과 0건, `grep '"/lean-startup/_next/'` 50건 |
| `next/link` 컴포넌트 (`<Link href="/chapters/...">`) | ✅ 모두 `/lean-startup/chapters/...`로 prefix | rendered HTML의 `<a href>` 직접 확인 |
| RSC payload 내 raw href 문자열 | ✅ 클라이언트 hydration 시점에 prefix 적용 (브라우저가 실제 진입하는 URL은 prefix 포함) | RSC 형식이라 `\"$L6\"` 등으로 보이지만 정상 |

## 수동 prefix 필요 (Phase 5 audit 대상)

Next.js 공식 동작상 `basePath`는 **public/ 자산을 자동 prefix하지 않는다**. 아래 6개 위치를 Phase 5 `#63` 작업 시 일괄 치환해야 함.

| 파일 | 라인 | 패턴 |
|---|---|---|
| `src/app/page.tsx` | 53 | `<img src="/infographics/5-concepts-loop.png">` |
| `src/app/chapters/pivot/page.tsx` | 154 | `<img src="/infographics/toss-zoom-out.png">` |
| `src/app/chapters/innovation-accounting/page.tsx` | 97 | `<img src="/infographics/vanity-vs-actionable.png">` |
| `src/app/chapters/build-measure-learn/page.tsx` | 50 | `<img src="/infographics/bml-loop.png">` |
| `src/components/EricRies.tsx` | 17 | `<img src="/eric-ries.png">` |
| `src/app/layout.tsx` | 72 | `icons: { url: "/icon.svg", ... }` (metadata) |

`<img>`는 `next/image`로 마이그 권장이지만, 본 PoC에선 단순히 prefix 추가만 검증 대상. 치환 패턴 후보:

```tsx
// 옵션 1: 환경변수 + 상수
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
<img src={`${BASE}/eric-ries.png`} />

// 옵션 2: next/image 마이그 (basePath 자동 처리)
import Image from 'next/image';
<Image src="/eric-ries.png" ... />  // basePath 자동 적용
```

**권장**: Phase 5 작업 시 `next/image`로 마이그하는 김에 일괄 치환. `next/image`는 basePath를 자동 적용해서 prefix 누락 위험을 영구 제거.

## 별도 함정 (PoC 중 발견)

- **opengraph-image.tsx**: 빌드 로그에 `⚠ Using edge runtime on a page currently disables static generation for that page` 경고. opengraph-image route(`ƒ /opengraph-image`)는 SSR 동적이라 정적 생성 불가. basePath와는 무관, 기존 동작 유지됨.
- **rewrite·SSE 검증 미수행**: 본 PoC는 로컬 build 산출물 검증만. Vercel rewrite 한 홉 추가 시 cache header·streaming 동작은 Phase 4-5에서 production 배포 후 별도 확인 필요. 단 lean-startup의 AI SDK는 현재 미사용이므로 SSE 위험은 향후 AI 추가 시점에 다시 검증 (마이그레이션-계획.md #12 보류).

## 옵션 A 채택 판정

마이그레이션-계획.md Phase 1 task #13 ("PoC 결과 판정"):
- ✅ basePath 통과 → **옵션 A 확정**
- ⚠️ public/ 자산 6개 prefix audit은 Phase 5 #63에 명시 (이미 계획에 포함된 작업)
- 🔜 향후 AI 채팅 추가 시 SSE rewrite 호환성 별도 PoC 필요 (현재 보류)

## 정리

PoC 사본(`/tmp/lean-startup-poc/`)은 검증 종료 후 삭제 가능. 본 노트가 결과 영구 보존본.
