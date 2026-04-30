import type { BookData } from '../types/book';

export const books: BookData[] = [
  {
    id: 'lean-startup',
    title: '린 스타트업',
    titleEn: 'The Lean Startup',
    author: '에릭 리스',
    authorEn: 'Eric Ries',
    year: 2011,
    publisher: '인사이트',
    category: 'lean-startup',
    summary:
      '가설-실험-측정의 순환으로 불확실성 속에서 제품을 만드는 방법을 정립한 스타트업 교과서. 검증된 학습(validated learning)과 피벗 개념이 대표.',
    recommendation:
      '창업 수업의 출발점. 교재 『린 스타트업』과 가장 직접적으로 연결되며, 가설이 없는 실행은 왜 낭비인지를 한 학기 동안 반복해 체득하게 됩니다.',
    tags: ['MVP', '피벗', '검증된학습', '가설'],
    difficulty: 'beginner',
    relatedCourseIds: ['lean-startup'],
  },
  {
    id: 'sprint',
    title: '스프린트',
    titleEn: 'Sprint',
    author: '제이크 냅',
    authorEn: 'Jake Knapp',
    year: 2016,
    publisher: '김영사',
    category: 'design',
    summary:
      'Google Ventures가 정립한 5일짜리 디자인 스프린트 방법론. 문제 정의 → 스케치 → 결정 → 프로토타입 → 테스트를 1주 안에 끝내는 실전 매뉴얼.',
    recommendation:
      '팀 단위 실행 훈련용. 교재 『디자인 스프린트』의 핵심 배경서이며, 아이디어를 두고 회의만 반복하지 않도록 타임박스 사고를 습관화해 줍니다.',
    tags: ['디자인스프린트', '팀워크', '프로토타입', 'GV'],
    difficulty: 'intermediate',
    relatedCourseIds: ['design-sprint'],
  },
  {
    id: 'zero-to-one',
    title: '제로 투 원',
    titleEn: 'Zero to One',
    author: '피터 틸',
    authorEn: 'Peter Thiel',
    year: 2014,
    publisher: '한국경제신문',
    category: 'strategy',
    summary:
      '경쟁이 아닌 독점으로 0→1을 만든다는 관점. 역설적 질문(다들 동의하는데 사실이 아닌 것은?)과 기술·시장 접근의 뼈대를 제시.',
    recommendation:
      '린 스타트업이 "어떻게"라면 이 책은 "무엇을 만들 것인가"에 대한 답입니다. 사업계획서 수업 전에 읽으면 문제 정의의 깊이가 달라집니다.',
    tags: ['독점', '차별화', '사업전략', '비전'],
    difficulty: 'intermediate',
    relatedCourseIds: ['psst'],
  },
  {
    id: 'pretotype',
    title: '아이디어 불패의 법칙',
    titleEn: 'The Right It',
    author: '알베르토 사보이아',
    authorEn: 'Alberto Savoia',
    year: 2019,
    publisher: '인플루엔셜',
    category: 'lean-startup',
    summary:
      '구글의 혁신 전문가가 제시하는 프리토타이핑(pretotyping). 만들 가치가 있는지 만들기 전에 검증하는 여덟 가지 도구(Fake Door, Pinocchio 등).',
    recommendation:
      'MVP를 만들기 전 "이걸 만들어도 되는가?"를 묻는 사고를 길러줍니다. PaperClip과 린 스타트업을 동시에 설명할 때 공통 참조점으로 자주 씁니다.',
    tags: ['프리토타입', 'Fake Door', 'YODA', '시장검증'],
    difficulty: 'beginner',
    relatedCourseIds: ['lean-startup', 'paperclip'],
  },
  {
    id: 'inspired',
    title: '인스파이어드',
    titleEn: 'Inspired',
    author: '마티 케이건',
    authorEn: 'Marty Cagan',
    year: 2017,
    publisher: '제이펍',
    category: 'product',
    summary:
      'Silicon Valley Product Group 창립자가 정리한 현대적 PM 역할론. 제품 발견(discovery)과 제품 전달(delivery)의 분리, Dual-Track Agile 중심.',
    recommendation:
      'PM/기획자 지망 학생의 필독서. PSST 도구로 사업계획서를 작성하기 전에 "좋은 제품이 무엇인가"의 기준을 세우는 데 도움이 됩니다.',
    tags: ['PM', '프로덕트디스커버리', 'Dual-Track', '팀구조'],
    difficulty: 'intermediate',
    relatedCourseIds: ['psst', 'design-sprint'],
  },
  {
    id: 'hooked',
    title: '훅',
    titleEn: 'Hooked',
    author: '니르 이얄',
    authorEn: 'Nir Eyal',
    year: 2014,
    publisher: '유엑스리뷰',
    category: 'product',
    summary:
      '습관을 만드는 제품 설계의 4단계 프레임워크(Trigger-Action-Variable Reward-Investment). 행동 디자인 관점에서 retention을 해부.',
    recommendation:
      'MVP가 작동한 다음 단계, "왜 사용자는 다시 돌아오는가"에 답합니다. Retention 지표를 어떻게 설계할지 학생들이 고민하기 시작할 때 자주 권합니다.',
    tags: ['훅모델', 'Retention', '행동디자인', 'UX'],
    difficulty: 'beginner',
    relatedCourseIds: ['lean-startup'],
  },
  {
    id: 'crossing-the-chasm',
    title: '캐즘 마케팅',
    titleEn: 'Crossing the Chasm',
    author: '제프리 무어',
    authorEn: 'Geoffrey A. Moore',
    year: 1991,
    publisher: '세종서적',
    category: 'strategy',
    summary:
      '얼리어답터와 초기 다수 사용자 사이의 단절(캐즘)을 건너는 세분 시장 전략. 기술 제품이 정체되는 구간을 구조적으로 설명.',
    recommendation:
      '스타트업이 "고객은 많은데 왜 안 커질까"를 만나는 순간이 있습니다. Scale-up 섹션(PSST)에서 이 책의 세그먼트 전략을 자주 인용합니다.',
    tags: ['캐즘', 'Go-to-Market', '세분시장', '확장'],
    difficulty: 'advanced',
    relatedCourseIds: ['psst'],
  },
  {
    id: 'ai-engineering',
    title: 'AI 엔지니어링',
    titleEn: 'AI Engineering',
    author: '칩 후옌',
    authorEn: 'Chip Huyen',
    year: 2025,
    publisher: '한빛미디어',
    category: 'ai',
    summary:
      'LLM 시대의 AI 제품 개발 실무를 체계화. 평가·프롬프트·RAG·파인튜닝·운영 전반을 PM/엔지니어 관점에서 안내.',
    recommendation:
      '바이브 코딩과 AI 에이전트(PaperClip)를 넘어 "프로덕션에 AI를 띄우려면" 단계로 진입한 학생에게 권합니다. 최신 AI 제품 설계의 공통 언어.',
    tags: ['LLM', 'RAG', 'AI제품', 'MLOps'],
    difficulty: 'advanced',
    relatedCourseIds: ['paperclip', 'vibe-coding'],
  },
];

export const getBookById = (id: string): BookData | undefined =>
  books.find((b) => b.id === id);
