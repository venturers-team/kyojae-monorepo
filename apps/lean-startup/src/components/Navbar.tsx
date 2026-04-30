"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, RotateCcw, X } from "lucide-react";
import { chapters } from "@/lib/chapters";
import { cn } from "@/lib/utils";

function getCurrentChapterOrder(pathname: string): number | null {
  const match = pathname.match(/^\/chapters\/([^/]+)/);
  if (!match) return null;
  const chapter = chapters.find((c) => c.slug === match[1]);
  return chapter ? chapter.order : null;
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const currentOrder = getCurrentChapterOrder(pathname);
  const totalChapters = chapters.length;
  const progressPercent =
    currentOrder !== null ? (currentOrder / totalChapters) * 100 : 0;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5 transition hover:opacity-80"
          aria-label="린 스타트업 교재 홈"
        >
          <span
            className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 shadow-sm ring-1 ring-black/5"
            aria-hidden="true"
          >
            <RotateCcw className="h-4 w-4 text-white" strokeWidth={2.6} />
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-white/10" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[9px] font-medium uppercase tracking-[0.22em] text-slate-500">
              The Lean Startup
            </span>
            <span className="mt-1 text-[15px] font-bold tracking-tight text-slate-900">
              린 스타트업 교재
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          <div className="relative">
            <button
              type="button"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-expanded={dropdownOpen}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-slate-900"
            >
              챕터
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition",
                  dropdownOpen ? "rotate-180" : ""
                )}
                aria-hidden="true"
              />
            </button>
            {dropdownOpen ? (
              <div className="absolute right-0 mt-2 w-80 overflow-hidden rounded-xl border border-border bg-white shadow-lg">
                <ul className="py-2">
                  {chapters.map((chapter) => {
                    const active = currentOrder === chapter.order;
                    return (
                      <li key={chapter.slug}>
                        <Link
                          href={`/chapters/${chapter.slug}`}
                          className={cn(
                            "flex items-start gap-3 px-4 py-3 text-sm transition hover:bg-slate-50",
                            active ? "bg-indigo-50" : ""
                          )}
                        >
                          <span
                            className={cn(
                              "mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                              active
                                ? "bg-gradient-to-br from-indigo-500 to-blue-500 text-white"
                                : "bg-slate-100 text-slate-600"
                            )}
                          >
                            {chapter.order}
                          </span>
                          <span>
                            <span
                              className={cn(
                                "block font-semibold",
                                active ? "text-indigo-700" : "text-slate-900"
                              )}
                            >
                              {chapter.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-slate-500">
                              {chapter.concept}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {currentOrder !== null ? (
            <div className="flex items-center gap-3">
              <div className="text-xs font-medium text-slate-600">
                <span className="text-slate-900 font-semibold">
                  {currentOrder}
                </span>
                <span className="text-slate-400"> / {totalChapters}</span>
              </div>
              <div
                className="h-2 w-32 overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-valuenow={currentOrder}
                aria-valuemin={0}
                aria-valuemax={totalChapters}
                aria-label="학습 진도"
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          ) : (
            <Link
              href="/chapters/validated-learning"
              className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              학습 시작
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="메뉴 열기"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-border bg-white md:hidden">
          {currentOrder !== null ? (
            <div className="px-6 py-3">
              <div className="flex items-center justify-between text-xs font-medium text-slate-600">
                <span>학습 진도</span>
                <span>
                  <span className="text-slate-900 font-semibold">
                    {currentOrder}
                  </span>
                  <span className="text-slate-400"> / {totalChapters}</span>
                </span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          ) : null}

          <ul className="px-2 pb-4">
            {chapters.map((chapter) => {
              const active = currentOrder === chapter.order;
              return (
                <li key={chapter.slug}>
                  <Link
                    href={`/chapters/${chapter.slug}`}
                    className={cn(
                      "flex items-start gap-3 rounded-lg px-4 py-3 text-sm transition hover:bg-slate-50",
                      active ? "bg-indigo-50" : ""
                    )}
                  >
                    <span
                      className={cn(
                        "mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold",
                        active
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-100 text-slate-600"
                      )}
                    >
                      {chapter.order}
                    </span>
                    <span>
                      <span
                        className={cn(
                          "block font-semibold",
                          active ? "text-indigo-700" : "text-slate-900"
                        )}
                      >
                        {chapter.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">
                        {chapter.concept}
                      </span>
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
