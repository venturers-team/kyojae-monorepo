import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/Hero";
import EricRies from "@/components/EricRies";
import WhyKorean from "@/components/WhyKorean";
import ConceptCard from "@/components/ConceptCard";
import { chapters } from "@/lib/chapters";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />

      <EricRies />

      <WhyKorean />

      <section className="border-t border-border bg-slate-50">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            개념이 주인공, 토스는 증거
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
            에릭 리스의 프레임워크를 한국 맥락에서 어떻게 보여줄까요. 이
            교재는 토스의 타임라인을 따라가며 다섯 개념이 실제로 어떻게
            작동했는지를 읽어 냅니다. 주인공은 개념이고, 토스는 그 개념이
            현실에서 숨 쉬는 증거입니다.
          </p>
        </div>
      </section>

      <section
        id="concepts"
        className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10"
      >
        <header className="mb-12 flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            5개 핵심 개념 · Eric Ries 원저
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            린 스타트업을 관통하는 다섯 개의 렌즈
          </h2>
          <p className="max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            에릭 리스가 『The Lean Startup』에서 정의한 다섯 가지 개념을
            그대로 따른다. 각 챕터는 원저자의 정의와 &ldquo;왜 필요한가&rdquo;를
            먼저 설명한 뒤, 한국 관통 사례인 토스의 의사결정 순간으로 개념을
            구체화한다.
          </p>
        </header>

        <figure className="mb-12">
          <img
            src="/infographics/5-concepts-loop.png"
            alt="린 스타트업의 5개 핵심 개념이 한 바퀴 도는 학습 엔진 다이어그램"
            className="w-full rounded-2xl shadow-xl"
          />
          <figcaption className="mt-3 text-center text-sm text-slate-500">
            다섯 개념이 한 바퀴 돌며 학습 엔진을 형성한다.
          </figcaption>
        </figure>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {chapters.map((chapter) => (
            <ConceptCard key={chapter.slug} chapter={chapter} />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent">
            한국 관통 사례
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
            관통 사례: 토스(Toss)
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-600 md:text-base">
            에릭 리스의 다섯 개념을 한 회사의 타임라인으로 추적하기 위해
            토스를 관통 사례로 선택했다. 이승건 대표가 PO SESSION 강연에서
            린 스타트업 방법론을 이름으로 직접 언급했고, 8번의 실패와
            카카오톡 링크 MVP, 금융 슈퍼앱 피벗까지 다섯 개념이 모두
            한 회사 안에서 관찰 가능하다는 점이 결정적이었다.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14">
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-slate-900">
                토스가 증명하는 것
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                Eric Ries의 원서가 IMVU라는 미국 아바타 메신저 사례를
                관통 렌즈로 사용하듯, 이 교재는 토스 하나의 타임라인을
                다섯 개념을 추적하는 단일 렌즈로 사용한다. 한국 20대
                대학생이라면 전원이 이미 토스 사용자라는 학습 진입 장벽
                제거 효과가 있다.
              </p>
            </div>
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li className="rounded-xl border border-border bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  1차 자료
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">
                  창업자가 직접 &ldquo;린 스타트업&rdquo;을 호명했다.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  이승건 대표가 린 스타트업을 이름으로 직접 언급한 PO SESSION
                  강연 영상 인용.
                </p>
              </li>
              <li className="rounded-xl border border-border bg-slate-50 p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  의사결정 추적
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-slate-900">
                  결과가 아니라 결정의 순간을 되묻는다.
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">
                  각 챕터는 &ldquo;이 시점에 당신이라면 어떤 결정을
                  했을까&rdquo;라는 질문으로 참여를 유도한다.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                지금 시작하기
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                첫 챕터: Build-Measure-Learn 루프
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                에릭 리스가 가장 먼저 설명하는 핵심 루프부터 시작한다.
                "먼저 배울 것을 결정하고, 그것을 측정하기 위해 만든다"는
                역방향 사고가 어떻게 토스의 2주 단위 의사결정으로
                구체화되는지 살펴본다.
              </p>
            </div>
            <Link
              href="/chapters/build-measure-learn"
              className="inline-flex flex-shrink-0 items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-base font-medium text-white transition hover:bg-slate-700"
            >
              첫 챕터 시작하기
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-slate-900 text-slate-300">
        <div className="mx-auto w-full max-w-6xl px-6 py-10 lg:px-10">
          <p className="text-sm">
            한동대학교 조성배 교수 연구실 / 교재 개발 프로젝트 — 린 스타트업
            인터랙티브 교재
          </p>
          <p className="mt-2 text-xs text-slate-500">
            방법론 원저: Eric Ries, <em>The Lean Startup</em> (Crown Business,
            2011). 본 교재는 교육 목적으로 제작되었으며, 토스 등 한국 사례는
            공개된 강연과 인터뷰에 기반합니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
