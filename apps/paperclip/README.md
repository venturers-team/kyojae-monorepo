# PaperClip 스타터킷

PaperClip(AI 에이전트 오케스트레이션 플랫폼)을 처음 사용하는 학생을 위한 순차 진행형 웹 교재다. 설치부터 에이전트 첫 실행, Budget·Governance 설정, 다른 템플릿 시도까지 한 시간 분량의 실습 여정을 5개 섹션으로 정리했다.

## 프로젝트 목적

이 교재의 대상 독자는 "ChatGPT는 써봤지만 여러 AI 에이전트가 협업하는 시스템은 처음"인 학부생·신입 개발자·비개발 직무자다. 프로그래밍 경험이 전무해도 명령어를 복사해 붙여넣고 화면의 변화를 관찰하는 것만으로 PaperClip 위의 gstack AI 회사 한 채를 직접 운영해볼 수 있도록 설계되었다. 교재를 마치면 학생은 실제로 실행되는 gstack 기반 AI 회사를 손에 쥐고, 그것을 확장할 수 있는 기초 어휘를 갖추게 된다.

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

- **Astro 6 + Starlight 0.38**: 정적 사이트 생성 및 문서 UI 프레임워크. TypeScript strict 모드 사용
- **MDX**: Markdown에 Mermaid 다이어그램·카드 컴포넌트를 포함할 수 있는 포맷
- **Cloudflare Pages**: 정적 사이트 배포 대상(후속 작업에서 설정)
- **한국어 단일 로케일**: `defaultLocale: 'root'`·`lang: 'ko'`로 구성해 URL에 언어 접두사가 붙지 않는다

## 사이드바 구조

교재는 5개 섹션, 총 19페이지의 MDX 문서로 구성된다.

| 섹션 | 페이지 수 | 주요 내용 |
|------|--------|---------|
| 소개 (index) | 1 | Splash 레이아웃의 프론트 페이지 |
| 01. 셋업 | 4 | 설치·무료 API 키·onboard·gstack Import |
| 02. 탐색 | 4 | 대시보드·조직도·에이전트 상세 읽기 |
| 03. 운영 | 4 | Initiative 설정·Heartbeat 실행·태스크 흐름 관찰 |
| 04. 관리 | 3 | Budget·Governance |
| 05. 교체 | 3 | 다른 ClipHub 템플릿·직접 커스터마이징 |

## Vault 설계 문서 참조

이 스타터킷의 구조와 콘텐츠는 Obsidian Vault의 다음 설계 문서를 기반으로 작성되었다. 향후 콘텐츠를 확장·수정할 때는 먼저 이 문서들을 확인한다.

- `1-Projects/교재개발/01-PaperClip-스타터킷/셋업-중심-목차-상세설계.md` — 15페이지 집필 명세
- `1-Projects/교재개발/01-PaperClip-스타터킷/ClipHub-템플릿-조사-및-커스텀-설계.md` — gstack 선택 근거, edu-mvp 설계
- `1-Projects/교재개발/01-PaperClip-스타터킷/무료-API-키-셋업-가이드.md` — OpenRouter·OpenCode 무료 API 경로
- `1-Projects/교재개발/01-PaperClip-스타터킷/Paperclip For Startup Hub.md` — 프로젝트 전체 허브

## 디렉터리 구조

```
paperclip-starter/
├── astro.config.mjs              # Starlight 사이드바·로케일 설정
├── src/
│   ├── content.config.ts         # docs 컬렉션 정의
│   └── content/docs/
│       ├── index.mdx             # Splash 프론트 페이지
│       ├── 01-setup/             # 셋업 섹션
│       ├── 02-explore/           # 탐색 섹션
│       ├── 03-operate/           # 운영 섹션
│       ├── 04-manage/            # 관리 섹션
│       └── 05-next/              # 교체 섹션
└── public/                       # 정적 자산
```

## 집필 규칙

- 모든 페이지는 한국어로 작성한다
- 기술 용어는 `한글(영문)` 형식으로 병기한다. 예: `오케스트레이션 플랫폼(Orchestration Platform)`
- 이모지를 본문에 넣지 않는다 (Starlight 아이콘·뱃지는 예외)
- 설명에는 "왜"를 포함한다. 단순한 절차 나열보다 그 절차가 왜 필요한지의 맥락을 먼저 제시한다
- Mermaid 다이어그램을 활용한다. 텍스트 아트나 ASCII 다이어그램은 사용하지 않는다
