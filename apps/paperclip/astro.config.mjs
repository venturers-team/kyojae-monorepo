// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	site: 'https://paperclip-starter-2igraixpm-gimjungwooks-projects.vercel.app',
	integrations: [
		react(),
		starlight({
			components: {
				PageTitle: './src/components/PageTitle.astro',
			},
			customCss: ['./src/styles/landing.css'],
			title: 'PaperClip 스타터킷',
			description: '한 시간이면 여러분만의 AI 회사 한 채가 손에 잡혀요.',
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
function initMermaid() {
  const blocks = document.querySelectorAll('pre[data-language="mermaid"], pre > code.language-mermaid');
  blocks.forEach((el) => {
    const pre = el.tagName === 'PRE' ? el : el.parentElement;
    if (!pre || pre.dataset.mermaidProcessed) return;
    const source = extractSource(pre);
    const wrapper = document.createElement('div');
    wrapper.className = 'mermaid';
    wrapper.textContent = source;
    pre.replaceWith(wrapper);
  });
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    securityLevel: 'loose',
    flowchart: { htmlLabels: true, useMaxWidth: true },
  });
  mermaid.run({ querySelector: '.mermaid' });
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
						content: 'PaperClip 스타터킷',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:description',
						content: '한 시간이면 여러분만의 AI 회사 한 채가 손에 잡혀요. 같이 시작해봐요.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:image',
						content: 'https://paperclip-starter-2igraixpm-gimjungwooks-projects.vercel.app/favicon.svg',
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
						content: 'https://paperclip-starter-2igraixpm-gimjungwooks-projects.vercel.app',
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
						content: 'PaperClip 스타터킷',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:description',
						content: '한 시간이면 여러분만의 AI 회사 한 채가 손에 잡혀요. 같이 시작해봐요.',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:image',
						content: 'https://paperclip-starter-2igraixpm-gimjungwooks-projects.vercel.app/favicon.svg',
					},
				},
			],
			social: [
				{
					icon: 'github',
					label: 'PaperClip GitHub',
					href: 'https://github.com/paperclipai/paperclip',
				},
			],
			sidebar: [
				{
					label: '들어가며',
					link: '/',
				},
				{
					label: '00. Quick Start',
					slug: '00-quick-start',
				},
				{
					label: '01. 시작 준비',
					items: [
						{ label: '01. PaperClip 설치', slug: '01-setup/01-install' },
						{ label: '02. 온보딩 마법사', slug: '01-setup/02-free-api-keys' },
						{ label: '03. 에이전트 확장', slug: '01-setup/03-onboard' },
					],
				},
				{
					label: '02. AI 회사 한 바퀴',
					items: [
						{ label: '01. 대시보드의 네 지표', slug: '02-explore/01-dashboard' },
						{ label: '02. 조직도 읽기', slug: '02-explore/02-org-chart' },
						{ label: '03. 에이전트 한 명의 구조', slug: '02-explore/03-agent-detail' },
					],
				},
				{
					label: '03. 에이전트 움직이기',
					items: [
						{ label: '01. 이니셔티브 설정', slug: '03-operate/01-set-goal' },
						{ label: '02. 첫 실행 — Run Heartbeat', slug: '03-operate/02-run-heartbeat' },
						{ label: '03. 태스크의 흐름 따라가기', slug: '03-operate/03-task-flow' },
					],
				},
				{
					label: '04. 안전장치 설정',
					items: [
						{ label: '01. 예산 한도 설정', slug: '04-manage/01-budget' },
						{ label: '02. 승인 체계 구축', slug: '04-manage/02-governance' },
					],
				},
				{
					label: '05. 다음 단계',
					items: [
						{ label: '01. 다른 템플릿 탐색', slug: '05-next/01-other-templates' },
						{ label: '02. 에이전트 직접 설계', slug: '05-next/02-customize' },
					],
				},
			],
		}),
	],
});
