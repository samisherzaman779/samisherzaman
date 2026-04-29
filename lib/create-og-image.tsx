// # lib/create-og-image.tsx — Shared OG / Twitter card (1200×630)
import { ImageResponse } from "next/og";

export const ogImageSize = { width: 1200, height: 630 };

export function createPortfolioOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #1e1b4b 0%, #581c87 42%, #be185d 100%)",
          paddingLeft: 80,
          paddingRight: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 16,
              background: "linear-gradient(135deg, #6366f1, #a855f7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            SS
          </div>
          <span
            style={{
              fontSize: 26,
              color: "rgba(255,255,255,0.92)",
              fontWeight: 600,
            }}
          >
            Sami Sherzaman
          </span>
        </div>
        <div
          style={{
            fontSize: 54,
            fontWeight: 800,
            color: "white",
            lineHeight: 1.08,
            maxWidth: 960,
          }}
        >
          Full-Stack & AI Developer
        </div>
        <div
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.88)",
            marginTop: 28,
          }}
        >
          Next.js · React · TypeScript · SaaS · AI Integration
        </div>
      </div>
    ),
    {
      ...ogImageSize,
    }
  );
}
