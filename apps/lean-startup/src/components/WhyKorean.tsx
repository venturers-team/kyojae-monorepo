export default function WhyKorean() {
  return (
    <section className="border-t border-border bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          이 교재가 다루는 방식
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          한국 사례로 다시 쓰는 이유
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16">
          <div className="space-y-6 text-base leading-relaxed text-slate-700 md:text-lg">
            <p>
              에릭 리스의 『The Lean Startup』은 스타트업 방법론의 현대적
              표준을 세운 책이다. Build-Measure-Learn 루프, 검증된 학습,
              MVP, 혁신 회계, 피벗 — 이 다섯 개 개념은 출간 이후 15년이
              지난 지금도 실리콘밸리·서울·도쿄 어디에서나 동일하게 통용된다.
              이 교재는 그 개념 구조를 한 글자도 바꾸지 않는다.
            </p>
            <p>
              다만 한 가지 문제가 있다. 원서가 관통 사례로 사용하는
              IMVU(아바타 메신저), Zappos(미국 신발 쇼핑몰), Grockit(미국
              교육 스타트업)은 한국 학생에게 이름조차 낯설다. 개념을
              이해하기 전에 사례를 먼저 학습해야 하는 이중 부담이 생긴다.
              그 결과 학생은 "린 스타트업이 좋은 책이라는데 와닿지 않는다"는
              말을 반복한다.
            </p>
            <p>
              이 교재는 그 거리감만 제거한다. 에릭 리스의 다섯 개념을
              <strong className="font-semibold text-slate-900">
                {" "}토스(Toss)·당근마켓·배달의민족{" "}
              </strong>
              같이 한국 20대가 매일 쓰는 서비스의 의사결정 순간으로 다시
              풀어쓴다. 토스의 8번 실패와 9번째 성공, 카카오톡 링크 MVP,
              송금 완료율 기반 BML 루프, 금융 슈퍼앱 피벗이 차례로 등장한다.
            </p>
            <p>
              결과적으로 학생은 두 가지를 동시에 얻는다. 첫째, 에릭 리스의
              방법론을 원전에 충실하게 학습한다. 둘째, 그 방법론이 자기
              주변 한국 시장에서 어떻게 작동했는지 구체적인 의사결정
              타임라인으로 추적한다.
            </p>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                개념 출처
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                Eric Ries, <em>The Lean Startup</em> (Crown Business, 2011).
                다섯 개념의 정의·구조·용어는 모두 원저자에게 귀속된다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                한국 사례 출처
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                토스 PO SESSION 강연, 이승건 대표 인터뷰, 당근마켓·배달의민족
                공개 IR 자료 등 1차 자료 기반.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                사용 방식
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-700">
                각 챕터는 "에릭 리스의 정의 → 한국 사례 분석 → 의사결정
                질문"의 3단 구조로 진행된다.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
