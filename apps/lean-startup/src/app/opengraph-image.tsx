import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "린 스타트업 인터랙티브 교재 — 토스로 배우는 실험의 과학";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #065f46 0%, #047857 40%, #059669 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "88px",
              height: "88px",
              borderRadius: "24px",
              background: "rgba(255,255,255,0.14)",
              border: "2px solid rgba(255,255,255,0.3)",
              fontSize: "36px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            LS
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <span
              style={{
                fontSize: "20px",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "#a7f3d0",
              }}
            >
              Lean Startup Textbook
            </span>
            <span style={{ fontSize: "24px", color: "#d1fae5" }}>
              한동대학교 조성배 교수 연구실
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "96px",
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
            }}
          >
            린 스타트업
            <br />
            인터랙티브 교재
          </h1>
          <p
            style={{
              fontSize: "32px",
              lineHeight: 1.4,
              color: "#d1fae5",
              margin: 0,
              maxWidth: "820px",
            }}
          >
            Build · Measure · Learn — 토스로 배우는 실험의 과학
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
          }}
        >
          {[
            "검증된 학습",
            "MVP",
            "BML 루프",
            "혁신 회계",
            "피벗",
          ].map((label) => (
            <span
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "12px 24px",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.14)",
                border: "1px solid rgba(255,255,255,0.3)",
                fontSize: "24px",
                color: "#ffffff",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
