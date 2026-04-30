import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Chapter } from "@/lib/chapters";

type ConceptCardProps = {
  chapter: Chapter;
};

export default function ConceptCard({ chapter }: ConceptCardProps) {
  return (
    <Link
      href={`/chapters/${chapter.slug}`}
      className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-accent hover:shadow-lg md:p-7"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold tracking-tight text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700">
            Chapter {chapter.order}
          </span>
          <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-accent" />
        </div>
        <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">
          원저: Eric Ries
        </p>
        <h3 className="text-xl font-semibold leading-snug text-slate-900 md:text-2xl">
          {chapter.title}
        </h3>
        <p className="text-sm font-medium text-accent md:text-base">
          {chapter.concept}
        </p>
        <p className="text-sm leading-relaxed text-slate-600 md:text-base">
          {chapter.description}
        </p>
      </div>
      <div className="mt-6 rounded-xl border border-dashed border-slate-200 bg-slate-50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          한국 관통 사례 — 토스
        </p>
        <p className="mt-1 text-sm font-medium text-slate-800">
          {chapter.tossPoint}
        </p>
      </div>
    </Link>
  );
}
