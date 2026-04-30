# PSST 사업계획서 가이드

Problem → Solution → Scale-up → Team 네 단계로 사업계획서를 완성하는 웹 교재.

## 프로젝트 목적

예비 창업자·대학 창업경진대회 지원자·정부 지원사업(예비창업패키지·팁스 등) 제출을 앞둔 팀을 대상으로, 백지 상태에서 사업계획서 한 편을 완성할 수 있도록 안내한다. 창업 경험이나 경영 지식은 요구하지 않는다.

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 (http://localhost:4321)
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview
```

## 기술 스택

- **Astro 6 + Starlight 0.38**: 정적 사이트 생성 및 문서 UI 프레임워크
- **MDX**: Markdown에 Mermaid 다이어그램·카드 컴포넌트를 포함할 수 있는 포맷
- **Vercel**: 정적 사이트 배포 (`https://psst-textbook.vercel.app`)
- **한국어 단일 로케일**: `defaultLocale: 'root'`·`lang: 'ko'`

## 교재 구성

| 챕터 | 내용 |
|------|------|
| Ch0. PSST 개요 | 전체 학습 여정의 지도 |
| Ch0.5. 두 갈래 길 | 정부지원 vs 투자 포지셔닝 |
| Ch1. Problem | 문제 정의 · 타겟 세그먼트 · 근거 3단 |
| Ch2. Solution | 솔루션 설계 · 10× 차별화 |
| Ch3. Scale-up | 시장 규모 · GTM · 수익 모델 |
| Ch4. Team | Founder-Market Fit · 역량 매트릭스 |
| Ch5. 핵심 메시지 | 엘리베이터 피치 · 리라이팅 |
| Ch6. 인포그래픽 | 시각화 선택 · 도구 가이드 |
| Ch7. 스토리·발표 | 내러티브 통합 · 피치덱 |
| 관통 사례 | 토스(비바리퍼블리카) 전체 분해 |

## Vault 설계 문서 참조

- `1-Projects/교재개발/교재개발 Hub.md` — 교재개발 통합 허브
- `1-Projects/교재개발/04-사업계획서-PSST/` — PSST 교재 세부 설계 문서

## 집필 규칙

- 모든 페이지는 한국어로 작성한다
- 기술 용어는 `한글(영문)` 형식으로 병기한다
- Mermaid 다이어그램을 활용한다 (텍스트 아트 금지)
- 설명에는 "왜"를 포함한다
