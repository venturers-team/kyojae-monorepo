import { Color, Mesh, Program, Renderer, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';

const VERT = `#version 300 es
in vec2 position;
out vec2 vUv;
void main() {
  vUv = position * 0.5 + 0.5;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

in vec2 vUv;
out vec4 fragColor;

uniform float uTime;
uniform float uSpeed;
uniform float uScale;
uniform float uNoiseIntensity;
uniform float uRotation;
uniform vec3 uColor;
uniform vec3 uBaseColor;

float noise(vec2 tc) {
  float G = 2.71828182845904523536;
  vec2 r = vec2(23.14069263277926, 2.665144142690225);
  return fract(cos(dot(tc, r) * 12345.6789) * G);
}

void main() {
  float rot = uRotation;
  vec2 tex = vUv - 0.5;
  tex = mat2(cos(rot), -sin(rot), sin(rot), cos(rot)) * tex;
  tex *= uScale;

  float t = uTime * uSpeed;

  float wave = 0.5 + 0.5 * sin(tex.x * 9.0 + t);
  wave += 0.5 * sin(tex.y * 8.0 + t * 1.1);
  wave *= 0.35;

  float w2 = 0.5 + 0.5 * sin((tex.x + tex.y) * 7.0 - t * 0.8);
  w2 *= 0.25;

  float n = noise(tex * 2.5 + t * 0.3);
  float n2 = noise(tex * 6.0 - t * 0.5);

  float silk = clamp(wave + w2 + (n * 0.35 + n2 * 0.15) * uNoiseIntensity, 0.0, 1.0);

  vec3 color = mix(uBaseColor, uColor, silk);

  fragColor = vec4(color, 1.0);
}
`;

interface SilkProps {
  speed?: number;
  scale?: number;
  color?: string;
  baseColor?: string;
  noiseIntensity?: number;
  rotation?: number;
}

export default function Silk({
  speed = 0.4,
  scale = 1.1,
  color = '#4f46e5',
  baseColor = '#ffffff',
  noiseIntensity = 1.0,
  rotation = 0.15,
}: SilkProps) {
  const propsRef = useRef<SilkProps>({ speed, scale, color, baseColor, noiseIntensity, rotation });
  propsRef.current = { speed, scale, color, baseColor, noiseIntensity, rotation };

  const ctnDom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;

    const renderer = new Renderer({ alpha: true, antialias: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    let program: Program | undefined;

    const resize = () => {
      if (!ctn) return;
      const w = ctn.offsetWidth;
      const h = ctn.offsetHeight;
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', resize);

    const geometry = new Triangle(gl);
    if (geometry.attributes.uv) {
      delete (geometry.attributes as Record<string, unknown>).uv;
    }

    const mainColor = new Color(color);
    const baseCol = new Color(baseColor);

    program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uSpeed: { value: speed },
        uScale: { value: scale },
        uNoiseIntensity: { value: noiseIntensity },
        uRotation: { value: rotation },
        uColor: { value: [mainColor.r, mainColor.g, mainColor.b] },
        uBaseColor: { value: [baseCol.r, baseCol.g, baseCol.b] },
      },
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    let animateId = 0;
    const update = (t: number) => {
      animateId = requestAnimationFrame(update);
      if (!program) return;
      const p = propsRef.current;
      program.uniforms.uTime.value = t * 0.001;
      program.uniforms.uSpeed.value = p.speed ?? 0.4;
      program.uniforms.uScale.value = p.scale ?? 1.1;
      program.uniforms.uNoiseIntensity.value = p.noiseIntensity ?? 1.0;
      program.uniforms.uRotation.value = p.rotation ?? 0.15;
      const c = new Color(p.color ?? '#4f46e5');
      const b = new Color(p.baseColor ?? '#ffffff');
      program.uniforms.uColor.value = [c.r, c.g, c.b];
      program.uniforms.uBaseColor.value = [b.r, b.g, b.b];
      renderer.render({ scene: mesh });
    };
    animateId = requestAnimationFrame(update);

    resize();

    return () => {
      cancelAnimationFrame(animateId);
      window.removeEventListener('resize', resize);
      if (ctn && gl.canvas.parentNode === ctn) {
        ctn.removeChild(gl.canvas);
      }
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ctnDom}
      style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}
    />
  );
}
