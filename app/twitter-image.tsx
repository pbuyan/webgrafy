import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 675 };
export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "white"
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>Webgrafy</div>
        <div style={{ marginTop: 18, fontSize: 34, fontWeight: 600 }}>
          Beauty & Wellness Booking Growth (Montreal)
        </div>
        <div style={{ marginTop: 26, fontSize: 24, opacity: 0.75 }}>
          Google Maps visibility • Reviews • Conversion pages
        </div>
      </div>
    ),
    size
  );
}
