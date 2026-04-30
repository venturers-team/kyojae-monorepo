import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Aurora from "./Aurora";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border" style={{ background: "#050509" }}>
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#3b82f6", "#22d3ee", "#a855f7"]}
          amplitude={1.3}
          blend={0.55}
        />
      </div>
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-8 px-6 py-24 md:py-32 lg:px-10">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-sm font-medium text-white/90">
          The Lean Startup · Eric Ries · 한국 사례 학습판
        </span>
        <h1
          className="text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl"
          style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
        >
          에릭 리스의 린 스타트업,
          <br className="hidden sm:block" />
          <span style={{
            background: "linear-gradient(90deg, #7dd3fc, #a78bfa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            한국에서 다시 배우기
          </span>
        </h1>
        <p
          className="max-w-3xl text-base leading-relaxed text-white/80 md:text-lg"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,0.6)" }}
        >
          『The Lean Startup』(2011) 원저자 <strong className="font-semibold text-white">에릭 리스(Eric Ries)</strong>가
          정립한 다섯 가지 핵심 개념 — 검증된 학습(Validated Learning),
          최소 기능 제품(MVP), 구축-측정-학습(Build-Measure-Learn) 루프,
          혁신 회계(Innovation Accounting), 피벗(Pivot) — 을 토스(Toss)·
          당근마켓·배달의민족 같은 한국 사례로 풀어쓴 인터랙티브 교재.
          개념의 구조는 원저 그대로 유지하되, 예시는 &ldquo;지금 내 폰 속 앱&rdquo;으로
          바꿔 한국 학생의 거리감을 제거한다.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/chapters/build-measure-learn"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-slate-900 transition hover:bg-slate-100"
            style={{ boxShadow: "0 8px 30px rgba(255,255,255,0.2)" }}
          >
            첫 챕터: Build-Measure-Learn 시작하기
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#concepts"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 backdrop-blur px-6 py-3 text-base font-medium text-white/90 transition hover:bg-white/10"
          >
            5개 핵심 개념 미리보기
          </Link>
        </div>
      </div>
    </section>
  );
}
