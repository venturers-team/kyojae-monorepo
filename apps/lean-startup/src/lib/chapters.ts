export type Chapter = {
  slug: string;
  order: number;
  title: string;
  concept: string;
  tossPoint: string;
  description: string;
  question: string;
};

export const chapters: Chapter[] = [
  {
    slug: "validated-learning",
    order: 1,
    title: "검증된 학습(Validated Learning)",
    concept: "창업은 계획의 실행이 아니라 가설의 실험이다",
    tossPoint: "공인인증서 없는 간편송금이라는 핵심 가설 분해",
    description:
      "막연한 아이디어를 반증 가능한(Falsifiable) 가설로 재정의하고, 가장 위험한 가정부터 순차적으로 검증하는 사고 체계를 다룬다. 토스의 초기 가설 3분해(기술·규제·고객)가 대표 사례다.",
    question: "어떤 가설을 가장 먼저 검증해야 하는가?",
  },
  {
    slug: "mvp",
    order: 2,
    title: "최소 기능 제품(MVP)",
    concept: "MVP의 목적은 판매가 아니라 학습이다",
    tossPoint: "카카오톡 링크로 수요를 검증한 개발 0줄 MVP",
    description:
      "MVP는 완성도 낮은 제품이 아니라 가장 적은 노력으로 가장 큰 학습을 얻는 도구다. 랜딩 페이지형·마법사형·컨시어지형 등 7가지 유형을 소개하고, 토스의 카카오톡 링크 실험을 통해 '제품 없는 MVP'의 힘을 보인다.",
    question: "MVP의 최솟값은 어디까지 가능한가?",
  },
  {
    slug: "build-measure-learn",
    order: 3,
    title: "구축-측정-학습(Build-Measure-Learn) 루프",
    concept: "루프를 얼마나 빠르게 돌리는가가 생존을 결정한다",
    tossPoint: "2주 단위의 고속 BML 루프와 작은 배치 크기 원칙",
    description:
      "BML 루프는 단순한 순서가 아니라 '먼저 배울 것을 결정 → 측정 설계 → 구축'의 역방향 사고다. 토스의 2주 루프와 송금 완료율 기반 우선순위 결정이 루프 가속화의 실증적 사례다.",
    question: "루프 한 바퀴를 얼마나 짧게 만들 수 있는가?",
  },
  {
    slug: "innovation-accounting",
    order: 4,
    title: "혁신 회계(Innovation Accounting)",
    concept: "허수 지표가 아닌 행동으로 이어지는 지표를 추적하라",
    tossPoint: "송금 완료율·NPS·코호트 리텐션 지표 체계",
    description:
      "혁신 회계는 스타트업이 진전을 정의하고 측정하는 회계 체계다. 가입자 수, 다운로드 수 같은 허수 지표(Vanity Metrics)와 실질 지표(Actionable Metrics)를 구분하고, 코호트 분석으로 진짜 성장을 판독하는 방법을 다룬다.",
    question: "성공을 어떤 숫자로 정의할 것인가?",
  },
  {
    slug: "pivot",
    order: 5,
    title: "피벗(Pivot)",
    concept: "피벗은 실패가 아니라 학습 기반의 전략적 방향 전환이다",
    tossPoint: "간편송금 단일 기능에서 금융 슈퍼앱으로의 줌아웃 피벗",
    description:
      "피벗 8가지 유형(줌인·줌아웃·고객 세그먼트·고객 니즈·플랫폼·비즈니스 아키텍처·가치 획득·성장 엔진·채널·기술)을 소개하고, 토스가 데이터 신호에 기반해 줌아웃 피벗을 결정한 순간을 분석한다.",
    question: "언제, 어떤 데이터 신호를 보고 피벗해야 하는가?",
  },
];

export function getChapterBySlug(slug: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function getAdjacentChapters(slug: string): {
  prev: Chapter | null;
  next: Chapter | null;
} {
  const index = chapters.findIndex((chapter) => chapter.slug === slug);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}
