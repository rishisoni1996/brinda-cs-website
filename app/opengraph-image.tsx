import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

export const alt = siteConfig.brand.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
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
          background: "#1a2a52",
          color: "#fafaf7",
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#c9a961",
            fontFamily: "Helvetica, Arial, sans-serif",
            fontWeight: 500,
          }}
        >
          Brinda Soni & Associates
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 500,
              maxWidth: 980,
            }}
          >
            {siteConfig.brand.tagline}
          </div>
          <div
            style={{
              marginTop: 28,
              height: 3,
              width: 96,
              background: "#c9a961",
              display: "flex",
            }}
          />
          <div
            style={{
              marginTop: 36,
              fontSize: 30,
              lineHeight: 1.3,
              maxWidth: 920,
              color: "rgba(250, 250, 247, 0.85)",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 400,
            }}
          >
            Practicing Company Secretaries · Ahmedabad
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "rgba(250, 250, 247, 0.7)",
            fontFamily: "Helvetica, Arial, sans-serif",
          }}
        >
          <span>{siteConfig.contact.email}</span>
          <span>bsaadvisors.in</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
