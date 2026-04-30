import { useEffect, useRef } from 'react';

interface SquaresProps {
  speed?: number;
  squareSize?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  borderColor?: string;
  hoverFillColor?: string;
  className?: string;
}

export default function Squares({
  speed = 0.5,
  squareSize = 40,
  direction = 'diagonal',
  borderColor = 'rgba(148, 163, 184, 0.15)',
  hoverFillColor = 'rgba(99, 102, 241, 0.08)',
  className,
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number | null>(null);
  const offsetRef = useRef({ x: 0, y: 0 });
  const hoverRef = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = window.devicePixelRatio || 1;
      const { width, height } = parent.getBoundingClientRect();
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / squareSize) + 2;
      const rows = Math.ceil(height / squareSize) + 2;
      const offX = offsetRef.current.x % squareSize;
      const offY = offsetRef.current.y % squareSize;

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      for (let i = -1; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          const x = i * squareSize - offX;
          const y = j * squareSize - offY;
          ctx.strokeRect(x, y, squareSize, squareSize);

          if (hoverRef.current) {
            const cx = x + squareSize / 2;
            const cy = y + squareSize / 2;
            const dx = cx - hoverRef.current.x;
            const dy = cy - hoverRef.current.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              ctx.fillStyle = hoverFillColor;
              ctx.globalAlpha = 1 - dist / 140;
              ctx.fillRect(x, y, squareSize, squareSize);
              ctx.globalAlpha = 1;
            }
          }
        }
      }
    };

    const tick = () => {
      switch (direction) {
        case 'right': offsetRef.current.x -= speed; break;
        case 'left': offsetRef.current.x += speed; break;
        case 'down': offsetRef.current.y -= speed; break;
        case 'up': offsetRef.current.y += speed; break;
        default:
          offsetRef.current.x -= speed;
          offsetRef.current.y -= speed;
      }
      draw();
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      hoverRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const handleLeave = () => { hoverRef.current = null; };

    resize();
    tick();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMove);
    canvas.addEventListener('mouseleave', handleLeave);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMove);
      canvas.removeEventListener('mouseleave', handleLeave);
    };
  }, [speed, squareSize, direction, borderColor, hoverFillColor]);

  return <canvas ref={canvasRef} className={className} />;
}
