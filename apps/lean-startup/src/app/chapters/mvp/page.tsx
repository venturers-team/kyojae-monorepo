import type { Metadata } from "next";
import ChapterNav from "@/components/ChapterNav";
import VideoEmbed from "@/components/VideoEmbed";
import { getChapterBySlug } from "@/lib/chapters";

const slug = "mvp";
const chapter = getChapterBySlug(slug)!;

export const metadata: Metadata = {
  title: `${chapter.title}`,
  description: chapter.description,
  openGraph: {
    title: `${chapter.title} — 린 스타트업 교재`,
    description: chapter.description,
    type: "article",
  },
};

export default function MvpPage() {
  return (
    <article className="mx-auto w-full max-w-3xl px-6 py-16 lg:px-0">
      <header className="mb-10 border-b border-border pb-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          Chapter {chapter.order} · {chapter.concept}
        </p>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-4xl">
          {chapter.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
          MVP는 "덜 만든 제품"이 아니다. 학습을 최대화하기 위해 의도적으로
          작게 설계된 실험 장치다. 토스의 카카오톡 링크 실험은 이 원칙의
          극단적 실증이다.
        </p>
      </header>

      <div className="prose-korean">
        <VideoEmbed
          id="mvp-1-intro"
          position="인트로"
          purpose="MVP 오해 교정, 학습 장치로서의 MVP"
          videoId="5dnprXF_t-A"
          title="제 2화 | 린스타트업과 MVP TEST (1부)"
          channel="서울&종로창업카페"
          duration="17:53"
          description="김가영 박사의 MVP 개념 강의. 실패를 최소화하고 실패에서 배우는 방법을 소개한다."
        />

        <h2>1. MVP의 오해와 진짜 정의</h2>

        <aside
          role="note"
          className="my-6 rounded-r-md border-l-4 border-amber-500 bg-amber-500/5 px-4 py-3"
        >
          <p className="text-sm font-semibold text-amber-900">
            낯선 용어 먼저 풀어 두기
          </p>
          <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-slate-700">
            <li>
              <strong>MVP</strong> — 완성품의 저품질 버전이 아니라, &ldquo;가설을
              검증하기 위한 최소 장치&rdquo;입니다.
            </li>
            <li>
              <strong>IMVU</strong> — Eric Ries 가 공동 창업한 아바타 기반
              인스턴트 메신저. 린 스타트업 실험이 시작된 회사입니다.
            </li>
            <li>
              <strong>NPS</strong> — Net Promoter Score. &ldquo;주변에 추천할
              의향&rdquo;을 0–10 으로 묻는 대표적 고객 만족 지표입니다.
            </li>
          </ul>
        </aside>

        <p>
          많은 학생들이 MVP(Minimum Viable Product, 최소 기능 제품)를 "퀄리티가
          낮은 초기 제품"으로 오해한다. 이 오해는 치명적이다. MVP의 핵심은
          <em> 완성도</em>가 아니라 <strong>목적</strong>에 있기 때문이다.
          에릭 리스의 정의는 분명하다. "MVP는 팀이 검증된 학습을 최소의 노력
          으로 수집하도록 해 주는 제품의 버전이다." 즉 MVP는 판매를 위한 축소
          제품이 아니라, <strong>학습을 위한 실험 장치</strong>다.
        </p>
        <p>
          이 정의가 실전에서 의미하는 바는 두 가지다. 첫째, MVP는 반드시
          소프트웨어일 필요가 없다. 사람이 손으로 대신 일하는 컨시어지
          (Concierge) 서비스, 아직 존재하지 않는 제품을 영상으로만 보여주는
          드롭박스(Dropbox) 사례, 랜딩 페이지(Landing Page)로 사전 신청만
          받는 방식 모두 유효한 MVP다. 둘째, MVP가 "얼마나 작아도 되는가"의
          기준은 구현 가능성이 아니라 <strong>어떤 가설을 검증하고 싶은가</strong>
          로 결정된다. 검증 목적이 바뀌면 필요한 MVP도 완전히 달라진다.
        </p>

        <h3>직관적으로 배우기 — MVP는 &ldquo;완성품의 축소판&rdquo;이 아니라 &ldquo;실험용 장치&rdquo;</h3>
        <p>
          많은 사람이 MVP를 레고 자동차의 축소 버전쯤으로 상상한다. "4바퀴
          자동차를 목표로 하니, MVP는 바퀴 하나짜리 자전거부터 만들자"는
          식이다. 에릭 리스는 책에서 이 오해를 명확히 지적한다. 바퀴 하나는
          자동차도 자전거도 아니고, 아무도 원하지 않는 <em>부분 제품</em>일
          뿐이다. MVP의 진짜 비유는 과학 실험실의 비커에 가깝다. 특정 가설을
          반박하거나 지지할 데이터를 얻기 위해 <strong>필요한 최소한의 장치</strong>
          를 만드는 것이다. 비커가 예쁠 필요는 없다. 중요한 것은 안에 담긴
          반응이 관측 가능한가이다.
        </p>

        <h3>왜 필요한가 — 학습 단위 비용을 최소화하기 위함이다</h3>
        <p>
          스타트업의 자원은 유한하다. 자금은 몇 개월치이고, 팀의 집중력은 한
          번의 분기에만 집약된다. 이 조건에서 "학습 한 단위를 얻는 데 드는
          비용"을 최소화해야 생존 시간이 길어진다. 6개월 개발한 제품이 틀렸다
          는 것을 아는 것과, 2주 만에 틀렸다는 것을 아는 것 사이에는 학습
          속도에서 12배의 차이가 있다. MVP는 이 12배의 차이를 구조적으로
          만들어 내는 도구다.
        </p>
        <p>
          실리콘밸리 용어로 이를 <strong>Time-to-Kill</strong>이라고 부른다.
          "이 아이디어를 죽여도 되는지 판단할 때까지의 시간". 잘못된 아이디어를
          1년이 아니라 2주 만에 죽일 수 있다면, 같은 자금으로 26번의 실험을
          돌릴 수 있다. 그중 하나만 성공해도 스타트업은 살아남는다. MVP는 이
          Time-to-Kill을 단축하는 유일한 실전 도구다.
        </p>

        <h2>2. MVP의 7가지 유형</h2>
        <p>
          학습 목적에 따라 MVP의 형태가 바뀐다는 원칙을 구체 사례로 풀어 보자.
          실무에서 자주 쓰이는 MVP 유형은 다음 일곱이다.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>
            <strong>랜딩 페이지형(Landing Page MVP)</strong> — 아직 만들지 않은
            제품의 소개 페이지만 올려 두고, 광고 트래픽을 집행해 "얼마나 많은
            사람이 관심을 보이고 이메일을 남기는가"를 측정한다. 토스의 초기
            페이스북 광고 실험이 여기 해당한다.
          </li>
          <li>
            <strong>영상 MVP(Video MVP)</strong> — 제품의 사용 경험을 영상으로
            먼저 보여준다. 드롭박스(Dropbox)의 3분짜리 데모 영상이 고전적
            사례다. 드류 휴스턴(Drew Houston)은 코드 한 줄도 없이 영상만으로
            사전 대기자를 5천 명에서 7만 5천 명으로 늘렸다.
          </li>
          <li>
            <strong>컨시어지 MVP(Concierge MVP)</strong> — 자동화되어야 할
            서비스를 사람이 직접 손으로 수행한다. 푸드 온 더 테이블(Food on
            the Table)은 초창기 창업자가 직접 슈퍼마켓을 돌며 가족의 식단표를
            손으로 짜 주고, 그 경험이 쌓인 뒤에야 소프트웨어로 옮겼다.
          </li>
          <li>
            <strong>마법사 MVP(Wizard of Oz MVP)</strong> — 겉으로는 자동화
            처럼 보이지만 뒤에서는 사람이 움직인다. 자포스(Zappos) 창업자는
            온라인으로 신발 주문을 받고, 실제로는 동네 매장에서 신발을 사서
            직접 배송했다. 고객은 이커머스로 느꼈지만 뒷단은 수작업이었다.
          </li>
          <li>
            <strong>단일 기능 MVP(Single Feature MVP)</strong> — 전체 제품의
            한 기능만 만들어 출시한다. 토스의 "간편송금 단일 기능"이 여기
            해당한다.
          </li>
          <li>
            <strong>크라우드펀딩 MVP</strong> — 킥스타터·와디즈 등에서 제품
            아이디어만으로 사전 결제를 받는다. 결제는 행동의 최고 강도 신호
            이기 때문에 수요 가설의 가장 강력한 검증이 된다.
          </li>
          <li>
            <strong>PPT/목업 MVP</strong> — 슬라이드와 프로토타입 이미지만으로
            고객 인터뷰를 진행한다. 가장 가벼운 형태이며 B2B 영업 초기에 많이
            쓰인다.
          </li>
        </ul>

        <VideoEmbed
          id="mvp-3-types"
          position="MVP 유형 소개"
          purpose="영상 MVP의 고전 사례 — Drew Houston Dropbox 데모"
          videoId="7QmCUDHpNzE"
          title="DropBox Demo"
          channel="theragax"
          duration="약 4분"
          description="Drew Houston이 Y Combinator 지원용으로 2007년에 만든 Dropbox의 초기 영상 MVP. 실제 제품이 없는 상태에서 영상만으로 대기자 7만 5천 명을 모은 전설적 사례. 업로드는 제3자 아카이브 계정."
        />

        <h2>3. 토스 사례 — 개발 0줄의 카카오톡 링크 실험</h2>
        <p>
          토스가 가장 먼저 만든 MVP는 앱이 아니었다. <strong>카카오톡에서
          링크로 송금을 흉내내는 실험</strong>이었다. 이 과정에서 작성된
          프로덕션 코드는 0줄이다. 이승건 대표 팀이 한 일은 단 세 가지다.
        </p>
        <ol className="list-decimal space-y-2 pl-6 text-slate-700">
          <li>
            페이스북에 "간편송금 서비스가 곧 출시됩니다"라는 게시물을 올린다.
          </li>
          <li>
            관심 있는 사용자가 이메일을 남길 수 있는 사전 신청 폼을 연결한다.
          </li>
          <li>기다리며 반응을 측정한다.</li>
        </ol>
        <p>
          결과는 팀의 기대치를 넘어섰다. 게시 2시간 만에 리트윗 4,000건,
          주말이 지나기 전에 사전 신청자 2,000명이 모였다. 개발자가 한 줄의
          서버 코드도 짜지 않았음에도, "이 가설은 맞을 것 같다"는 확신을
          줄 만큼 강력한 데이터가 축적된 것이다.
        </p>

        <h3>구체 숫자로 본 실험 — 1만 원으로 얻은 0.414% 클릭률</h3>
        <p>
          토스팀이 페이스북 광고에 처음 쓴 예산은 약 <strong>1만 원</strong>이
          었고, 광고는 2일간 집행되었다. 이 광고의 클릭률(CTR)은 0.414%였다.
          일반적인 페이스북 광고의 평균 CTR이 1%에 가까운 것을 감안하면
          절반 수준이다. 그러나 이승건 대표는 이 숫자를 "실패"로 읽지 않았다.
          이유는 세 가지다. 첫째, <em>서비스가 존재하지도 않는 상태</em>에서
          이메일을 남기는 행동은 일반 광고의 단순 클릭보다 행동 강도가 훨씬
          높다. 둘째, 유입된 사람들의 90% 이상이 자발적으로 이메일을 입력했다.
          셋째, 광고 문안이 "공인인증서 없는 송금"이라는 고객의 통증을 직접
          건드렸기에, 가입자의 구성이 명확히 목표 세그먼트와 겹쳤다. 즉 CTR이
          낮아도 <strong>단위 전환의 질이 높은</strong> 실험이었다.
        </p>

        <blockquote>
          MVP의 목적은 완벽한 제품을 만드는 것이 아니다. 가장 적은 노력으로
          가장 큰 학습(Learning)을 얻는 것이다. 토스는 개발 0줄로 고객의
          실제 수요를 검증했다.
        </blockquote>

        <h3>왜 이 실험이 "진짜" 학습이었는가</h3>
        <p>
          단순히 "좋아요" 버튼을 누르는 것과, 이메일 주소를 직접 입력하고 대기
          명단에 올라가는 것 사이에는 결정적인 차이가 있다. 후자는 사용자가
          <strong>작은 비용(개인정보 제공, 기다림)</strong>을 자발적으로 지불
          한 행동이다. 경제학에서 말하는 "스킨 인 더 게임(Skin in the Game)"이
          성립한 셈이다. 이런 종류의 데이터는 "관심 있다"는 응답보다 훨씬 신뢰
          할 수 있는 수요 지표가 된다. 동시에 이 사전 신청자 명단은 금융감독원
          과의 규제 협의에서 "이 정도 수요가 실재한다"는 증빙 자료로도 쓰였다.
          하나의 MVP가 두 가지 가설 검증을 동시에 수행한 것이다.
        </p>

        <VideoEmbed
          id="mvp-2-toss-case"
          position="토스 사례 분석"
          purpose="개발 0줄 MVP의 실전적 힘 — 8번 실패 뒤 도달한 방법론"
          videoId="GZv6NwaEIxU"
          title="6년간 8번의 실패를 겪은 토스 이승건 대표가 말하는 리얼 창업 현실"
          channel="아산나눔재단"
          duration="약 20분"
          description="이승건 대표가 8번의 실패 뒤에 어떻게 '가설 검증 → 최소한의 장치로 실험'하는 방법을 체득했는지를 직접 설명한다. 토스 창업 직전의 사고 전환을 들을 수 있는 회고."
        />

        <h2>4. 추가 사례 — 한국·글로벌 MVP 걸작들</h2>
        <h3>당근마켓 — 판교 반경의 수동 운영 MVP</h3>
        <p>
          당근마켓의 첫 버전은 거창한 기능이 없었다. "판교테크노밸리 회사
          이메일로만 가입 가능"이라는 극단적 제약이 걸려 있었다. 이 제약이
          바로 MVP의 핵심 장치였다. 지역성 + 신원 확인이라는 두 가설을 동시에
          검증하기 위해 일부러 <em>전국 오픈을 하지 않은 것</em>이다. 게다가
          초기에는 김용현·김재현 공동대표가 판교 직장인들에게 직접 "중고품
          사진 찍어 올려 주세요"라고 발품을 팔며 부탁했다. 이런 수동 작업이
          쌓여 "지역 기반 중고거래는 사기 위험이 낮다"는 핵심 가설이
          검증되었고, 그 뒤에야 지역 확장이 시작되었다. MVP는 자동화가 아니라
          학습이 목적이라는 원칙을 보여주는 한국 사례다.
        </p>

        <h3>자포스(Zappos) — 온라인 신발 판매의 마법사 MVP</h3>
        <p>
          닉 스윈먼(Nick Swinmurn)은 "사람들이 신발을 온라인에서 살까?"라는
          질문에 답하기 위해 웹사이트를 먼저 만들고 재고를 확보하지 않았다.
          대신 동네 신발 매장에 가서 신발 사진을 찍고, 사이트에 올려 두었다.
          주문이 들어오면 <em>매장으로 직접 달려가 신발을 사서 배송</em>했다.
          이 MVP는 "수요가 있는가"를 코드 한 줄 없이 검증했다. 검증이
          끝난 뒤에야 자동화와 재고 관리 시스템을 도입했다. 지금의 자포스는
          아마존이 12억 달러에 인수한 이커머스 공룡이지만, 첫 MVP는 창업자가
          손으로 뛰던 마법사 MVP였다.
        </p>

        <h3>인스타그램 — 기능 10개를 버리고 1개만 남긴 단일 기능 MVP</h3>
        <p>
          인스타그램의 전신은 <em>Burbn</em>이라는 앱이었다. 위치 체크인, 친구
          찾기, 게임 포인트, 사진 공유 등 10개 이상의 기능이 뒤섞인 잡탕이
          었다. 창업자 케빈 시스트롬(Kevin Systrom)은 사용자들의 행동 데이터를
          분석하다 한 가지 사실을 깨달았다. 대부분의 사용자가 <strong>사진
          공유 기능 하나만</strong> 반복해서 쓰고 있었다. 다른 기능은 모두
          버리고 "필터가 적용된 사진 공유" 한 가지로 앱을 재구축한 것이
          인스타그램이다. 여기서의 교훈은 MVP가 꼭 "처음부터" 작을 필요는
          없다는 점이다. <em>큰 제품에서 한 기능만 남겨 다시 출시</em>하는 것
          역시 MVP 전략이다.
        </p>

        <h2>5. 적용 연습 — 당신의 아이디어를 "개발 0줄"로 테스트하라</h2>
        <p>
          지금 추진 중인 아이디어가 있다면, 스스로에게 물어보자. "이 서비스의
          핵심 수요를 검증하기 위해, 내가 코드를 한 줄도 쓰지 않고 할 수 있는
          일은 무엇인가?" 대부분의 답은 셋 중 하나다. 랜딩 페이지 + 광고 트래픽,
          소셜 네트워크 게시물 + 사전 신청 폼, 또는 사람이 직접 손으로 서비스를
          제공하는 컨시어지 실험. 이 셋 중 하나를 2주 안에 돌려 보는 것이 다음
          챕터에서 다룰 Build-Measure-Learn 루프의 실질적 출발점이다.
        </p>
        <ol className="list-decimal space-y-2 pl-6 text-slate-700">
          <li>
            내 아이디어의 가장 위험한 가설은 무엇인가? (기술? 규제? 수요?)
          </li>
          <li>
            이 가설을 검증하기 위해 <em>필요한 최소의 장치</em>는 무엇인가?
            랜딩 페이지로 충분한가, 컨시어지가 필요한가, 영상이 효과적일까?
          </li>
          <li>
            MVP 제작에 드는 <strong>실제 시간과 비용</strong>은? 2주·50만 원을
            넘는다면 더 축소할 여지가 있는지 점검하자.
          </li>
          <li>
            성공을 측정할 <em>단 하나</em>의 행동 지표는? (이메일 입력 수,
            결제 수, 재방문 수 등)
          </li>
          <li>
            MVP가 실패로 판별되었을 때 무엇을 학습하게 되는가? 실패가
            학습으로 전환되지 않는 실험은 가치가 없다.
          </li>
        </ol>

        <h2>6. 흔한 실수와 안티 패턴</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-700">
          <li>
            <strong>완성도에 대한 집착</strong> — "이 정도 퀄리티로 내놓으면
            창피하지 않을까?" 라는 걱정은 MVP의 목적을 잘못 이해한 결과다.
            MVP는 브랜드가 아니라 실험이다.
          </li>
          <li>
            <strong>MVP에 너무 많은 기능을 넣는 것</strong> — "이왕 만드는
            김에 이것도 넣자"는 유혹이 MVP를 6개월짜리 개발 프로젝트로 부풀
            린다. 한 기능만 남겨라.
          </li>
          <li>
            <strong>MVP 후 즉시 다음 MVP로 넘어가는 것</strong> — MVP는
            학습이 목적이다. 결과를 분석하지 않고 다음 실험으로 넘어가면
            실험 10번을 해도 배우는 것은 0이다.
          </li>
          <li>
            <strong>MVP를 제품 로드맵의 1단계로 착각</strong> — MVP는 로드맵
            의 축소판이 아니다. 로드맵 전체를 폐기할 수도 있다는 각오가
            있어야 진짜 MVP다.
          </li>
          <li>
            <strong>지인에게만 MVP를 배포</strong> — 지인은 항상 긍정적이다.
            타겟 세그먼트 외부 사람을 대상으로 돌려야 진짜 신호를 얻는다.
          </li>
        </ul>

        <p>
          MVP를 설계했으면 이제 이것을 <strong>몇 주 동안 어떤 리듬으로
          돌릴 것인가</strong>를 정해야 합니다. 다음 챕터 &lsquo;Build-Measure-Learn
          루프&rsquo;에서 MVP를 반복 실험으로 운영하는 법을 다룹니다.
        </p>
      </div>

      <ChapterNav slug={slug} />
    </article>
  );
}
