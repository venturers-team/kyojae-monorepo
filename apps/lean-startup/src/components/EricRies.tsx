import { BookOpen, Check, ExternalLink } from "lucide-react";

export default function EricRies() {
  return (
    <section className="border-t border-border bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-accent">
          About the Author
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
          이 방법론을 만든 사람
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[260px_1fr] lg:gap-14">
          <div className="flex flex-col items-center gap-4 lg:items-start">
            <img
              src="/eric-ries.png"
              alt="Eric Ries — 『The Lean Startup』 저자"
              className="h-48 w-48 rounded-full border border-slate-200 object-cover shadow-md"
            />
            <p className="text-center text-xs leading-relaxed text-slate-500 lg:text-left">
              사진 출처: leanstartup.co (2023)
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
                저자
              </p>
              <h3 className="mt-1 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
                Eric Ries
              </h3>
              <p className="mt-1 text-lg font-medium text-accent">
                에릭 리스
              </p>
            </div>

            <p className="text-base leading-relaxed text-slate-700 md:text-lg">
              『The Lean Startup』(2011) 저자.{" "}
              『Running Lean』 공동 저자 애쉬 모리아(Ash Maurya)와 함께
              스타트업 방법론의 현대적 기초를 세운 실리콘밸리 창업가이자
              저술가. 도요타 생산 시스템(Toyota Production System)의
              린(Lean) 사고를 소프트웨어 스타트업 맥락에 이식한 것이
              그의 가장 큰 공헌이다.
            </p>

            <p className="text-sm font-medium leading-relaxed text-slate-600 md:text-base">
              실리콘밸리의 IMVU를 창업해 실패를 겪으며 도출한 방법론입니다.
            </p>

            <blockquote className="relative rounded-r-2xl border-l-4 border-accent bg-accent/5 py-5 pl-6 pr-5">
              <p className="text-base font-medium leading-relaxed text-slate-800 md:text-lg">
                &ldquo;스타트업의 근본 활동은 아이디어를 제품으로 만들고,
                사용자 반응을 측정하고, 피벗할지 지속할지 학습하는 것이다.&rdquo;
              </p>
              <footer className="mt-3 text-sm font-semibold text-accent">
                — 에릭 리스, 『린 스타트업』
              </footer>
            </blockquote>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                주요 공로
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <li className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                    strokeWidth={2.5}
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Build-Measure-Learn 루프
                    </strong>{" "}
                    창안 — 스타트업의 핵심 활동을 학습으로 재정의
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                    strokeWidth={2.5}
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Minimum Viable Product(MVP)
                    </strong>{" "}
                    개념 대중화
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                    strokeWidth={2.5}
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      혁신 회계(Innovation Accounting)
                    </strong>{" "}
                    프레임워크 제시
                  </span>
                </li>
                <li className="flex items-start gap-2 text-sm leading-relaxed text-slate-700">
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent"
                    strokeWidth={2.5}
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      IMVU 공동 창업자
                    </strong>
                    , Long-Term Stock Exchange(LTSE) 설립자
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-start gap-3">
                <BookOpen
                  className="mt-1 h-6 w-6 flex-shrink-0 text-accent"
                  strokeWidth={1.8}
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    The Lean Startup (2011)
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    국내 번역서:{" "}
                    <em>린 스타트업</em> (이창수·송우일 옮김, 인사이트, 2012)
                  </p>
                </div>
              </div>
              <a
                href="http://theleanstartup.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-xs font-medium text-slate-700 transition hover:border-slate-900 hover:text-slate-900"
              >
                원서 공식 사이트
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
