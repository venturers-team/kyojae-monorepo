import Link from "next/link";
import { ArrowLeft, ArrowRight, Home } from "lucide-react";
import { getAdjacentChapters } from "@/lib/chapters";

type ChapterNavProps = {
  slug: string;
};

export default function ChapterNav({ slug }: ChapterNavProps) {
  const { prev, next } = getAdjacentChapters(slug);

  return (
    <nav className="mt-16 border-t border-border pt-10">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
        {prev ? (
          <Link
            href={`/chapters/${prev.slug}`}
            className="group flex flex-1 items-start gap-3 rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          >
            <ArrowLeft className="mt-1 h-5 w-5 text-slate-400 transition group-hover:text-accent" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                이전 챕터
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {prev.title}
              </p>
            </div>
          </Link>
        ) : (
          <Link
            href="/"
            className="group flex flex-1 items-start gap-3 rounded-2xl border border-border bg-white p-5 transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          >
            <Home className="mt-1 h-5 w-5 text-slate-400 transition group-hover:text-accent" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                홈으로
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                랜딩 페이지로 돌아가기
              </p>
            </div>
          </Link>
        )}

        {next ? (
          <Link
            href={`/chapters/${next.slug}`}
            className="group flex flex-1 items-start justify-end gap-3 rounded-2xl border border-border bg-white p-5 text-right transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                다음 챕터
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                {next.title}
              </p>
            </div>
            <ArrowRight className="mt-1 h-5 w-5 text-slate-400 transition group-hover:text-accent" />
          </Link>
        ) : (
          <Link
            href="/"
            className="group flex flex-1 items-start justify-end gap-3 rounded-2xl border border-border bg-white p-5 text-right transition hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                학습 종료
              </p>
              <p className="mt-1 text-base font-semibold text-slate-900">
                전체 목차로 돌아가기
              </p>
            </div>
            <Home className="mt-1 h-5 w-5 text-slate-400 transition group-hover:text-accent" />
          </Link>
        )}
      </div>
    </nav>
  );
}
