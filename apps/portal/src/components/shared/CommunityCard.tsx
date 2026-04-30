import { useRef, type CSSProperties } from 'react';
import {
  Smartphone,
  Sparkles,
  Users,
  Calendar,
  ArrowRight,
  Award,
  Rocket,
  TrendingUp,
  Flag,
  type LucideIcon,
} from 'lucide-react';
import type { CommunityData, CommunityHighlight } from '../../types/community';
import { communityTypeLabel } from '../../types/community';
import { cn } from '../../lib/cn';

const iconMap: Record<string, LucideIcon> = {
  Smartphone,
  Sparkles,
};

const highlightIcon: Record<NonNullable<CommunityHighlight['kind']>, LucideIcon> = {
  award: Award,
  launch: Rocket,
  funding: TrendingUp,
  milestone: Flag,
};

interface CommunityCardProps {
  community: CommunityData;
  compact?: boolean;
}

export default function CommunityCard({ community, compact = false }: CommunityCardProps) {
  const Icon = iconMap[community.icon] ?? Users;
  const ref = useRef<HTMLElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`);
  };

  const spotStyle: CSSProperties = {
    background: `radial-gradient(320px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${community.color}20, transparent 65%)`,
  };

  return (
    <article
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        'group/comm relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 ease-out',
        'motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl',
      )}
    >
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1"
        style={{ background: `linear-gradient(90deg, ${community.color}, ${community.color}66)` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/comm:opacity-100"
        style={spotStyle}
      />

      <div className="relative flex items-start gap-4">
        <span
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ring-black/5"
          style={{ backgroundColor: `${community.color}15`, color: community.color }}
        >
          <Icon className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
            {communityTypeLabel[community.type]}
            {community.founded ? ` · Since ${community.founded}` : ''}
          </p>
          <h3 className="mt-0.5 text-xl font-bold text-slate-900">
            {community.name}
            <span className="ml-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
              {community.nameEn}
            </span>
          </h3>
          <p className="mt-1 text-sm font-medium" style={{ color: community.color }}>
            {community.tagline}
          </p>
        </div>
      </div>

      <p className="relative mt-4 text-sm text-slate-600">{community.summary}</p>

      <p className="relative mt-3 rounded-xl border border-slate-100 bg-slate-50/70 px-3 py-2 text-xs text-slate-600">
        <span className="font-semibold text-slate-700">포지셔닝 ·</span> {community.positioning}
      </p>

      <dl className="relative mt-4 grid grid-cols-2 gap-3 text-xs">
        {community.memberCount && (
          <div className="rounded-lg border border-slate-100 bg-white px-3 py-2">
            <dt className="flex items-center gap-1 text-slate-400">
              <Users className="h-3 w-3" /> 활동 인원
            </dt>
            <dd className="mt-0.5 text-sm font-semibold text-slate-900">{community.memberCount}명</dd>
          </div>
        )}
        {community.cadence && (
          <div className="rounded-lg border border-slate-100 bg-white px-3 py-2">
            <dt className="flex items-center gap-1 text-slate-400">
              <Calendar className="h-3 w-3" /> 운영 주기
            </dt>
            <dd className="mt-0.5 text-sm font-semibold text-slate-900">{community.cadence}</dd>
          </div>
        )}
      </dl>

      {!compact && community.highlights.length > 0 && (
        <div className="relative mt-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">주요 성과</p>
          <ul className="mt-2 space-y-2">
            {community.highlights.slice(0, 3).map((h, i) => {
              const HIcon = h.kind ? highlightIcon[h.kind] : Flag;
              return (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <span
                    className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md"
                    style={{ backgroundColor: `${community.color}15`, color: community.color }}
                  >
                    <HIcon className="h-3 w-3" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-slate-800">
                      <span className="mr-1 text-slate-400">{h.year}</span>
                      {h.title}
                    </p>
                    <p className="mt-0.5 line-clamp-2 text-slate-500">{h.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {!compact && (
        <div className="relative mt-5 flex flex-wrap gap-1.5">
          {community.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="inline-flex rounded-md bg-slate-50 px-2 py-0.5 text-[11px] text-slate-500"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      <a
        href={`/community#${community.id}`}
        className="relative mt-5 inline-flex w-max items-center gap-1 text-sm font-semibold transition"
        style={{ color: community.color }}
      >
        성과 더 보기
        <ArrowRight className="h-4 w-4 transition-transform group-hover/comm:translate-x-0.5" aria-hidden="true" />
      </a>
    </article>
  );
}
