"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { chapters } from "@/lib/chapters";
import { cn } from "@/lib/utils";

type Heading = {
  id: string;
  text: string;
  level: 2 | 3;
};

type SidebarProps = {
  currentSlug: string;
};

export default function Sidebar({ currentSlug }: SidebarProps) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  const currentChapter = useMemo(
    () => chapters.find((c) => c.slug === currentSlug),
    [currentSlug]
  );

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const nodes = article.querySelectorAll<HTMLElement>("h2, h3");
    const collected: Heading[] = [];

    nodes.forEach((node, idx) => {
      const text = node.textContent?.trim() ?? "";
      if (!text) return;
      if (!node.id) {
        node.id = `section-${idx}-${text
          .toLowerCase()
          .replace(/[^a-z0-9가-힣]+/g, "-")
          .replace(/^-|-$/g, "")}`;
      }
      collected.push({
        id: node.id,
        text,
        level: node.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(collected);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              (a.target as HTMLElement).offsetTop -
              (b.target as HTMLElement).offsetTop
          );
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [currentSlug]);

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 flex-shrink-0 overflow-y-auto border-r border-border bg-white px-5 py-8 lg:block">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          현재 챕터
        </p>
        {currentChapter ? (
          <p className="mt-2 text-sm font-semibold leading-snug text-slate-900">
            Chapter {currentChapter.order}. {currentChapter.title}
          </p>
        ) : null}
      </div>

      {headings.length > 0 ? (
        <nav className="mt-6 border-t border-border pt-5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
            이 페이지 목차
          </p>
          <ul className="space-y-1">
            {headings.map((heading) => {
              const active = heading.id === activeId;
              return (
                <li key={heading.id}>
                  <a
                    href={`#${heading.id}`}
                    className={cn(
                      "block border-l-2 py-1.5 text-sm leading-snug transition",
                      heading.level === 3 ? "pl-6" : "pl-3",
                      active
                        ? "border-emerald-500 font-semibold text-emerald-700"
                        : "border-transparent text-slate-600 hover:border-slate-300 hover:text-slate-900"
                    )}
                  >
                    {heading.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      ) : null}

      <nav className="mt-8 border-t border-border pt-5">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
          전체 챕터
        </p>
        <ul className="space-y-1">
          {chapters.map((chapter) => {
            const active = chapter.slug === currentSlug;
            return (
              <li key={chapter.slug}>
                <Link
                  href={`/chapters/${chapter.slug}`}
                  className={cn(
                    "flex items-start gap-2 rounded-md px-2 py-2 text-sm leading-snug transition",
                    active
                      ? "bg-emerald-50 font-semibold text-emerald-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  )}
                >
                  <span
                    className={cn(
                      "mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
                      active
                        ? "bg-emerald-500 text-white"
                        : "bg-slate-100 text-slate-500"
                    )}
                  >
                    {chapter.order}
                  </span>
                  <span className="truncate">{chapter.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
