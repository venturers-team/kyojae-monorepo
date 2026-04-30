import { AlertCircle, PlayCircle } from "lucide-react";

export type VideoEmbedProps = {
  /** 고유 식별자 — VIDEOS_NEEDED.md 체크리스트에서 이 id로 영상 자리를 참조한다 */
  id: string;
  /** 삽입 위치 라벨 (예: "인트로", "토스 사례 분석", "마무리 요약") */
  position: string;
  /** 이 영상의 학습 용도 (예: "BML 루프 직관적 이해") */
  purpose: string;
  /** YouTube videoId. 있으면 iframe, 없으면 TODO 플레이스홀더 표시 */
  videoId?: string;
  /** 제목. videoId가 있을 때는 캡션에, 없을 때는 안내 박스에 쓰인다 */
  title: string;
  /** 선택: 채널명 (캡션 노출용) */
  channel?: string;
  /** 선택: 재생 시간 (캡션 노출용) */
  duration?: string;
  /** 선택: 캡션 보조 설명 */
  description?: string;
};

export default function VideoEmbed({
  id,
  position,
  purpose,
  videoId,
  title,
  channel,
  duration,
  description,
}: VideoEmbedProps) {
  if (videoId) {
    return (
      <figure
        id={`video-${id}`}
        className="my-10 overflow-hidden rounded-2xl border border-gray-300 bg-white shadow-sm"
      >
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        </div>
        <figcaption className="border-t border-gray-300 bg-white px-6 py-5 text-sm">
          <p className="text-base font-semibold text-gray-950">{title}</p>
          {(channel || duration) && (
            <p className="mt-1.5 text-xs font-medium text-gray-700">
              {channel}
              {channel && duration ? " · " : ""}
              {duration}
            </p>
          )}
          <p className="mt-2 inline-block rounded-md border border-blue-200 bg-blue-50 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-blue-700">
            {position} · {purpose}
          </p>
          {description ? (
            <p className="mt-3 text-sm leading-relaxed text-gray-800">
              {description}
            </p>
          ) : null}
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      id={`video-${id}`}
      className="my-10 overflow-hidden rounded-2xl border-2 border-dashed border-gray-400 bg-white"
    >
      <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 bg-gray-50 px-6 py-10 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-950">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" />
          TODO · 영상 필요
        </span>
        <PlayCircle
          className="h-12 w-12 text-gray-500"
          aria-hidden="true"
        />
        <p className="max-w-xl text-sm font-semibold text-gray-950">
          이 자리에 <strong className="text-gray-950">{position}</strong> 영상이 필요합니다 —{" "}
          {purpose}
        </p>
        <p className="text-xs font-medium text-gray-700">
          영상 ID:{" "}
          <code className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-[11px] font-mono text-gray-950">
            {id}
          </code>{" "}
          · 체크리스트는{" "}
          <code className="rounded border border-gray-300 bg-white px-1.5 py-0.5 text-[11px] font-mono text-gray-950">
            VIDEOS_NEEDED.md
          </code>{" "}
          참조
        </p>
      </div>
      <figcaption className="border-t border-gray-300 bg-white px-6 py-5 text-sm">
        <p className="text-base font-semibold text-gray-950">{title}</p>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-gray-800">
            {description}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
