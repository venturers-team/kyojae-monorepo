import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  display: "swap",
});

const siteUrl = "https://lean-startup-5nb0akiyy-gimjungwooks-projects.vercel.app";
const siteName = "린 스타트업 교재 | 에릭 리스 방법론";
const siteDescription =
  "『The Lean Startup』 원저자 에릭 리스(Eric Ries)의 5가지 핵심 개념 — 검증된 학습, MVP, Build-Measure-Learn 루프, 혁신 회계, 피벗 — 을 토스·당근·배민 같은 한국 사례로 풀어쓴 인터랙티브 교재.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — 한국 사례로 다시 배우기`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "한동대학교 조성배 교수 연구실" }],
  keywords: [
    "에릭 리스",
    "Eric Ries",
    "린 스타트업",
    "Lean Startup",
    "The Lean Startup",
    "토스",
    "Toss",
    "MVP",
    "Minimum Viable Product",
    "BML",
    "Build-Measure-Learn",
    "Validated Learning",
    "검증된 학습",
    "혁신 회계",
    "Innovation Accounting",
    "피벗",
    "Pivot",
    "스타트업 교육",
    "창업 교재",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName,
    title: `${siteName} — 한국 사례로 다시 배우기`,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${siteName} 커버 이미지`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — 한국 사례로 다시 배우기`,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.svg", type: "image/svg+xml" },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
