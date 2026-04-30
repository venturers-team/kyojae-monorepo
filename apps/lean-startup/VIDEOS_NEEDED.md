# VIDEOS_NEEDED — 린 스타트업 교재 영상 체크리스트

각 챕터에 삽입된 `<VideoEmbed id="..." />` 컴포넌트의 `id`에 맞춰 YouTube `videoId`를 채워 넣으면 된다. 아래 표에서 `videoId` 칸이 비어 있는 항목은 기본적으로 TODO 플레이스홀더로 표시된다.

## 현재 상태 요약 (2026-04-13 갱신)

- 전체 자리: 11개 (마무리/실전 예시 자리 2개 삭제됨 — `validated-learning-3-outro`, `bml-3-outro`)
- 채워진 자리: 6개 (validated-learning-1-intro, validated-learning-2-toss-case, mvp-1-intro, mvp-2-toss-case, mvp-3-types, bml-2-toss-case)
- 비워진 자리: 5개 (아래 "비워진 자리 추천 영상" 표 참조)

모든 videoId는 YouTube oembed API로 실제 존재를 검증했다(`https://www.youtube.com/oembed?url=...&format=json`).

> **삭제 정책 (2026-04-13)**: 각 챕터의 "마무리 / 적용 연습 / 실전 예시" 섹션은 영상 대신 텍스트 체크리스트로 대체했다. 인트로·사례 분석 자리의 영상만 유지한다.

## 사용 방법

1. 아래 표의 "추천 검색 키워드 / 후보 URL" 컬럼을 참고해 YouTube에서 적합한 영상을 찾는다.
2. URL에서 `watch?v=` 뒤의 문자열이 `videoId`다. 예: `https://www.youtube.com/watch?v=Tmj1HEFnKpE` → `Tmj1HEFnKpE`.
3. 해당 챕터 `src/app/chapters/<slug>/page.tsx`에서 `id="..."`가 일치하는 `<VideoEmbed />`에 `videoId="..."`를 추가한다.
4. (선택) `title`, `channel`, `duration`, `description` 값을 실제 영상에 맞게 갱신한다.

## 변수명 매핑 규칙

- `id`는 `<slug>-<순번>-<용도>` 형식으로 고유하게 부여한다. 예: `mvp-1-intro`, `pivot-2-toss-case`.
- 한 챕터 내에서 `id`가 중복되지 않도록 주의.

---

## 채워진 자리 (6개)

| id | videoId | 제목 | 채널 |
|----|---------|------|------|
| `validated-learning-1-intro` | `uPhHPO98M84` | [EP11_토스_이승건_1] 1000만 명이 쓰는 간편 송금 앱 토스 창업부터 지금까지 | EO Korea |
| `validated-learning-2-toss-case` | `Tmj1HEFnKpE` | 토스는 이렇게 시작했습니다 \| PO SESSION | 토스 (Toss) |
| `mvp-1-intro` | `5dnprXF_t-A` | 제 2화 \| 린스타트업과 MVP TEST (1부) | 서울&종로창업카페 |
| `mvp-2-toss-case` | `GZv6NwaEIxU` | 6년간 8번의 실패를 겪은 토스 이승건 대표가 말하는 리얼 창업 현실 | 아산나눔재단 |
| `mvp-3-types` | `7QmCUDHpNzE` | DropBox Demo (Drew Houston의 2007년 MVP 영상) | theragax (아카이브) |
| `bml-2-toss-case` | `tcrr2QiXt9M` | 토스 리더가 말하는 PO가 꼭 알아야할 개념 \| PO SESSION | 토스 (Toss) |

---

## 비워진 자리 추천 영상 (5개)

아래 5자리는 확실한 videoId를 찾지 못해 비웠다. 수동 검색 시 다음 후보를 우선 확인할 것.

> **삭제됨**: `validated-learning-3-outro` (마무리 실전 예시), `bml-3-outro` (마무리 실전 설계) — 2026-04-13 텍스트 체크리스트로 교체.

### `bml-1-intro`
- **용도**: BML 루프 순환 구조를 직관적으로 이해
- **추천 1**: Eric Ries의 Stanford eCorner "Evangelizing for the Lean Startup" 영상 YouTube 업로드 버전 (영상 자체는 stvp.stanford.edu에 존재하나 YouTube에 있는 경우 자막 권장)
- **추천 2**: 아산나눔재단·EO Korea의 "애자일 스프린트" 관련 한국어 강연
- **추천 3**: 토스피드 YouTube의 프로세스 소개 영상

### `ia-1-intro`
- **용도**: 허수 지표 vs 실질 지표 함정 체감
- **추천 1**: "Vanity Metrics vs Actionable Metrics" 키워드의 한국어 번역본 (핵클·AB180 블로그 컨퍼런스 영상 검색)
- **추천 2**: 토스 SLASH 컨퍼런스의 "지표 설계" 관련 영상

### `ia-2-cohort`
- **용도**: 코호트 분석으로 평균의 착시를 분해
- **추천 1**: Amplitude / Mixpanel 한국 공식 채널의 튜토리얼
- **추천 2**: AB180 공식 유튜브 "리텐션 분석" 한국어 웨비나
- **추천 3**: 핵클(Hackle) 공식 유튜브의 코호트 튜토리얼

### `pivot-1-toss-case`
- **용도**: 간편송금 → 금융 슈퍼앱 전환 의사결정
- **추천 1**: 토스 공식 유튜브의 피벗 관련 PO SESSION 후속편 (2022 PO SESSION 시리즈 중 2~5편 중 선택)
- **추천 2**: EO Korea "토스 이승건 EP11_2 또는 EP11_3" 후속편이 존재한다면 그것
- **추천 3**: 아산나눔재단 유튜브의 "토스 확장 전략" 영상

### `pivot-2-danggn`
- **용도**: 당근마켓 줌아웃 피벗 이해
- **추천 1**: EO Korea 당근마켓 김용현·김재현 인터뷰 영상
- **추천 2**: 당근 공식 유튜브(`@daangn`)의 "CEO 메시지" 혹은 "창업 스토리" 시리즈
- **추천 3**: tvN·세바시 계열 김용현 대표 강연

---

## 전체 영상 자리 매핑 (총 11개)

### Chapter 1. 검증된 학습 (validated-learning) — 2개

| id | 위치 | 용도 | 상태 |
|----|------|------|------|
| `validated-learning-1-intro` | 인트로 직후 | 가설 중심 사고로의 전환을 직관적으로 이해 | 채움(`uPhHPO98M84`) |
| `validated-learning-2-toss-case` | 토스 사례 분석 중 | 토스의 초기 가설 3분해(기술·규제·고객) 체감 | 채움(`Tmj1HEFnKpE`) |
| ~~`validated-learning-3-outro`~~ | ~~마무리 요약 근처~~ | ~~반증 가능한 가설 설계 실전 예시~~ | 삭제됨(2026-04-13) |

### Chapter 2. MVP (mvp) — 3개

| id | 위치 | 용도 | 상태 |
|----|------|------|------|
| `mvp-1-intro` | 인트로 직후 | MVP 오해 교정, "학습 장치"로서의 MVP | 채움(`5dnprXF_t-A`) |
| `mvp-2-toss-case` | 토스 카카오톡 링크 실험 분석 중 | 개발 0줄 MVP의 실전적 힘 | 채움(`GZv6NwaEIxU`) |
| `mvp-3-types` | MVP 7유형 소개 근처 | Dropbox 영상 MVP의 고전 사례 | 채움(`7QmCUDHpNzE`) |

### Chapter 3. Build-Measure-Learn (build-measure-learn) — 2개

| id | 위치 | 용도 | 상태 |
|----|------|------|------|
| `bml-1-intro` | 인트로 직후 | BML 루프 순환 구조 직관 이해 | 비움 |
| `bml-2-toss-case` | 토스 2주 루프 사례 중 | 짧은 배치 크기 원칙 + Carrying Capacity | 채움(`tcrr2QiXt9M`) |
| ~~`bml-3-outro`~~ | ~~마무리 적용 연습 근처~~ | ~~나만의 2주 루프 설계 가이드~~ | 삭제됨(2026-04-13) |

### Chapter 4. 혁신 회계 (innovation-accounting) — 2개

| id | 위치 | 용도 | 상태 |
|----|------|------|------|
| `ia-1-intro` | 허수 지표 vs 실질 지표 설명 중 | 허수 지표의 구조적 상승 함정 체감 | 비움 |
| `ia-2-cohort` | 코호트 분석 섹션 중 | 코호트로 평균의 착시를 분해 | 비움 |

### Chapter 5. 피벗 (pivot) — 2개

| id | 위치 | 용도 | 상태 |
|----|------|------|------|
| `pivot-1-toss-case` | 토스 줌아웃 피벗 분석 중 | 간편송금 → 금융 슈퍼앱 전환 의사결정 | 비움 |
| `pivot-2-danggn` | 당근마켓 줌아웃 참고 섹션 | 지역 기반 피벗 사례로 확장 이해 | 비움 |

---

## 실존 유명 강연 후보 (참고용)

아래는 위 후보 검색 시 실제로 존재한다고 알려진 한국어 강연들이다. 각 id의 videoId를 채울 때 실제 영상 확인 후 반영하면 된다.

- 토스(Toss) 공식 YouTube의 **PO SESSION** 시리즈 — 이승건 대표의 린 스타트업/가설 검증 강연
  - "토스는 이렇게 시작했습니다" (`Tmj1HEFnKpE`, 사용됨)
  - "토스 리더가 말하는 PO가 꼭 알아야할 개념" CC 편 (`tcrr2QiXt9M`, 사용됨)
- EO 채널의 **이승건 인터뷰** 시리즈 — 비바리퍼블리카 창업 및 피벗 스토리
  - EP11 토스 이승건 1편 (`uPhHPO98M84`, 사용됨)
- EO 채널의 **김봉진·김재현·김용현(당근마켓) 인터뷰** — 당근마켓 창업/피벗 사례 (videoId 추가 확인 필요)
- 서울&종로창업카페 유튜브 채널 — MVP, 린 스타트업 관련 한국어 강의 (`5dnprXF_t-A` 등)
- 아산나눔재단 유튜브 채널 — "6년간 8번의 실패를 겪은 토스 이승건" (`GZv6NwaEIxU`, 사용됨)
- K-스타트업(창업진흥원) 유튜브 채널 — 린 스타트업 공식 교육 모듈
- 토스피드·토스 SLASH — 프로덕트 실험/지표 관련 실무 강연
- AB180 / Amplitude / Mixpanel 한국 공식 채널 — 코호트 분석·리텐션 튜토리얼

---

## 채움 예시 (validated-learning-2-toss-case)

`src/app/chapters/validated-learning/page.tsx`에서 이미 이렇게 채워져 있다:

```tsx
<VideoEmbed
  id="validated-learning-2-toss-case"
  position="토스 사례 분석"
  purpose="초기 가설 3분해 이해"
  videoId="Tmj1HEFnKpE"
  title="토스는 이렇게 시작했습니다 | PO SESSION"
  channel="토스 (Toss)"
  duration="약 25분"
  description="이승건 대표가 린 스타트업 방법론을 직접 언급하며 토스의 초기 가설 검증 과정을 설명하는 강연."
/>
```

`videoId`만 추가/교체하면 YouTube iframe으로 자동 전환된다.
