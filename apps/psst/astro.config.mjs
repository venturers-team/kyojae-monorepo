// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://psst-textbook.vercel.app',
	integrations: [
		react(),
		starlight({
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			customCss: ['./src/styles/landing.css'],
			logo: {
				src: './src/assets/logo.svg',
				replacesTitle: false,
			},
			title: 'PSST 사업계획서 가이드',
			description: '백지 앞에서 막히지 않게 — Problem → Solution → Scale-up → Team 네 단계로 사업계획서를 완성하세요.',
			defaultLocale: 'root',
			locales: {
				root: {
					label: '한국어',
					lang: 'ko',
				},
			},
			head: [
				{
					tag: 'script',
					attrs: { type: 'module' },
					content: `
import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
function extractSource(pre) {
  const lines = pre.querySelectorAll('.ec-line .code');
  if (lines.length > 0) {
    return Array.from(lines).map((l) => l.textContent).join('\\n');
  }
  const code = pre.querySelector('code') || pre;
  return code.textContent;
}
function setupScrollHints() {
  document.querySelectorAll('.mermaid-host').forEach((host) => {
    if (host.dataset.scrollSetup) return;
    host.dataset.scrollSetup = '1';
    const scroller = host.querySelector('.mermaid');
    if (!scroller) return;
    function update() {
      const hasOverflow = scroller.scrollWidth > scroller.clientWidth + 2;
      const atEnd = !hasOverflow || scroller.scrollLeft + scroller.clientWidth >= scroller.scrollWidth - 4;
      host.dataset.overflow = hasOverflow ? 'true' : 'false';
      host.dataset.atEnd = atEnd ? 'true' : 'false';
    }
    scroller.addEventListener('scroll', update, { passive: true });
    new ResizeObserver(update).observe(scroller);
    requestAnimationFrame(() => requestAnimationFrame(update));
  });
}
function initMermaid() {
  const blocks = document.querySelectorAll('pre[data-language="mermaid"], pre > code.language-mermaid');
  blocks.forEach((el) => {
    const pre = el.tagName === 'PRE' ? el : el.parentElement;
    if (!pre || pre.dataset.mermaidProcessed) return;
    const source = extractSource(pre);
    const wrapper = document.createElement('div');
    wrapper.className = 'mermaid';
    wrapper.textContent = source;
    wrapper.setAttribute('tabindex', '0');
    const host = document.createElement('div');
    host.className = 'mermaid-host';
    host.appendChild(wrapper);
    pre.replaceWith(host);
  });
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: { htmlLabels: true, useMaxWidth: false },
    sequence: { useMaxWidth: false },
    gantt: { useMaxWidth: false },
    xyChart: { useMaxWidth: false },
    quadrantChart: { useMaxWidth: false },
    timeline: { useMaxWidth: false },
    mindmap: { useMaxWidth: false },
    pie: { useMaxWidth: false },
    er: { useMaxWidth: false },
    journey: { useMaxWidth: false },
    gitGraph: { useMaxWidth: false },
    requirement: { useMaxWidth: false },
    sankey: { useMaxWidth: false },
    c4: { useMaxWidth: false },
    class: { useMaxWidth: false },
    state: { useMaxWidth: false },
    packet: { useMaxWidth: false },
    architecture: { useMaxWidth: false },
  });
  mermaid.run({ querySelector: '.mermaid' });
  setTimeout(setupScrollHints, 350);
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initMermaid);
else initMermaid();
document.addEventListener('astro:page-load', initMermaid);
`,
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/svg+xml',
						href: '/favicon.svg',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						href: '/favicon.svg',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:title',
						content: 'PSST 사업계획서 가이드',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: '백지 앞에서 막히지 않게 — Problem → Solution → Scale-up → Team 네 단계로 사업계획서를 완성하세요.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:url',
						content: 'https://psst-textbook.vercel.app',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:title',
						content: 'PSST 사업계획서 가이드',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content: '백지 앞에서 막히지 않게 — Problem → Solution → Scale-up → Team 네 단계로 사업계획서를 완성하세요.',
					},
				},
			],
			sidebar: [
				{
					label: '들어가며',
					link: '/',
				},
				{
					label: 'Ch0. PSST 개요',
					slug: 'foundation',
				},
				{
					label: 'Ch0.5. 두 갈래 길',
					slug: 'positioning',
				},
				{
					label: 'Part 1 · Problem',
					items: [
						{ label: 'Ch1. 문제 정의', slug: 'problem' },
					],
				},
				{
					label: 'Part 2 · Solution',
					items: [
						{ label: 'Ch2. 솔루션 설계', slug: 'solution' },
					],
				},
				{
					label: 'Part 3 · Scale-up',
					items: [
						{ label: 'Ch3. 확장 전략', slug: 'scale-up' },
					],
				},
				{
					label: 'Part 4 · Team',
					items: [
						{ label: 'Ch4. 팀 구성', slug: 'team' },
					],
				},
				{
					label: 'Part 5 · 통합',
					items: [
						{ label: 'Ch5. 핵심 메시지', slug: 'message' },
						{ label: 'Ch6. 인포그래픽', slug: 'visual' },
						{ label: 'Ch7. 스토리·발표', slug: 'narrative' },
					],
				},
				{
					label: '관통 사례',
					slug: 'case-study',
				},
				{
					label: '부록',
					items: [
						{ label: 'A. 프레임워크 비교', slug: 'appendix/frameworks' },
						{ label: 'B. 용어집', slug: 'appendix/glossary' },
						{ label: 'C. 도구·템플릿', slug: 'appendix/templates' },
						{ label: 'D. 정부지원 체크리스트', slug: 'appendix/gov-guide' },
					],
				},
			],
		}),
	],
});
