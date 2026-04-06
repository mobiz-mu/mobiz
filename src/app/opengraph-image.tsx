import { ImageResponse } from "next/og";

export const alt = "MoBiz.mu — Premium Business Solutions in Mauritius";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #071226 0%, #0b5c7a 42%, #119b7e 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -40,
            width: 280,
            height: 280,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -80,
            left: -50,
            width: 260,
            height: 260,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 80,
            right: 80,
            height: 2,
            background:
              "linear-gradient(90deg, transparent, rgba(243,215,122,0.9), transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 80px",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "12px 22px",
              borderRadius: 9999,
              border: "1px solid rgba(243,215,122,0.45)",
              background: "rgba(255,255,255,0.10)",
              color: "#f3d77a",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 28,
            }}
          >
            MoBiz.mu
          </div>

          <div
            style={{
              fontSize: 78,
              lineHeight: 1.05,
              fontWeight: 800,
              maxWidth: 920,
              marginBottom: 24,
            }}
          >
            Premium Business Solutions in Mauritius
          </div>

          <div
            style={{
              fontSize: 32,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 960,
            }}
          >
            Websites • Marketing • Accounting • Logistics • Branding
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

