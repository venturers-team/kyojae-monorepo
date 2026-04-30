import { PlayCircle } from "lucide-react";

type VideoPlaceholderProps = {
  title: string;
  channel?: string;
  duration?: string;
  description?: string;
  videoId?: string;
};

export default function VideoPlaceholder({
  title,
  channel,
  duration,
  description,
  videoId,
}: VideoPlaceholderProps) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-border bg-slate-900 text-white shadow-sm">
      <div className="relative flex aspect-video w-full flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-black">
        <PlayCircle className="h-16 w-16 text-white/80" aria-hidden="true" />
        <p className="mt-4 px-6 text-center text-sm font-medium text-white/70">
          YouTube 임베드 영역 (VideoEmbed 컴포넌트 연결 예정)
        </p>
        {videoId ? (
          <p className="mt-1 text-xs text-white/40">videoId: {videoId}</p>
        ) : null}
      </div>
      <figcaption className="border-t border-white/10 bg-slate-950/60 px-6 py-4 text-sm">
        <p className="font-semibold text-white">{title}</p>
        {(channel || duration) && (
          <p className="mt-1 text-xs text-white/60">
            {channel}
            {channel && duration ? " · " : ""}
            {duration}
          </p>
        )}
        {description ? (
          <p className="mt-2 text-xs leading-relaxed text-white/70">
            {description}
          </p>
        ) : null}
      </figcaption>
    </figure>
  );
}
