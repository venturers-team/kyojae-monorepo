import { useEffect, useRef } from 'react';

interface ThreadsProps {
  colors?: string[];
  lineCount?: number;
  amplitude?: number;
  speed?: number;
  thickness?: number;
  opacity?: number;
  className?: string;
}

export default function Threads({
  colors = ['#4f46e5', '#3b82f6', '#22d3ee', '#6366f1', '#0ea5e9'],
  lineCount = 14,
  amplitude = 0.12,
  speed = 0.0018,
  thickness = 1.6,
  opacity = 0.55,
  className,
}: ThreadsProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const tRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const lines = Array.from({ length: lineCount }, (_, i) => ({
      color: colors[i % colors.length],
      baseY: 0.12 + (i / Math.max(lineCount - 1, 1)) * 0.76,
      freq: 0.9 + (i % 5) * 0.22,
      phase: Math.random() * Math.PI * 2,
      ampMult: 0.6 + ((i * 37) % 100) / 100,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      lines.forEach((ln) => {
        ctx.beginPath();
        const yBase = ln.baseY * height;
        const segments = 80;
        for (let s = 0; s <= segments; s++) {
          const x = (s / segments) * width;
          const k = (s / segments) * Math.PI * 2 * ln.freq;
          const y =
            yBase +
            Math.sin(k + tRef.current + ln.phase) * amplitude * height * ln.ampMult +
            Math.sin(k * 0.5 + tRef.current * 0.6) * amplitude * height * 0.25;
          if (s === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = ln.color;
        ctx.lineWidth = thickness;
        ctx.globalAlpha = opacity;
        ctx.shadowColor = ln.color;
        ctx.shadowBlur = 12;
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      ctx.shadowBlur = 0;
    };

    const tick = () => {
      tRef.current += speed * 60;
      draw();
      rafRef.current = requestAnimationFrame(tick);
    };

    resize();
    tick();
    window.addEventListener('resize', resize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [colors, lineCount, amplitude, speed, thickness, opacity]);

  return <canvas ref={canvasRef} className={className} />;
}
