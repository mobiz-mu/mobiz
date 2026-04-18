import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const runtime = "nodejs";

export const alt = "MoBiz.mu — Premium Business Growth in Mauritius";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

async function getImageDataUri(relativePath: string) {
  const filePath = path.join(process.cwd(), "public", relativePath);
  const buffer = await readFile(filePath);
  const base64 = buffer.toString("base64");
  const ext = path.extname(relativePath).toLowerCase();

  const mimeType =
    ext === ".webp"
      ? "image/webp"
      : ext === ".png"
      ? "image/png"
      : ext === ".jpg" || ext === ".jpeg"
      ? "image/jpeg"
      : "application/octet-stream";

  return `data:${mimeType};base64,${base64}`;
}

export default async function SocialShareImage() {
  const posterSrc = await getImageDataUri("images/hero/popup-video-poster.webp");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #071226 0%, #0b1f46 34%, #0b5c7a 68%, #119b7e 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top right, rgba(243,215,122,0.10), transparent 24%), radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 28%)",
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
              "linear-gradient(90deg, transparent, rgba(243,215,122,0.95), transparent)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: -70,
            top: -40,
            width: 260,
            height: 260,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.08)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: -80,
            bottom: -90,
            width: 260,
            height: 260,
            borderRadius: 9999,
            background: "rgba(243,215,122,0.10)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "56px 64px",
            gap: 40,
          }}
        >
          <div
            style={{
              width: "58%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignSelf: "flex-start",
                padding: "12px 22px",
                borderRadius: 9999,
                border: "1px solid rgba(243,215,122,0.45)",
                background: "rgba(255,255,255,0.10)",
                color: "#f3d77a",
                fontSize: 23,
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
                display: "flex",
                fontSize: 72,
                lineHeight: 1.02,
                fontWeight: 800,
                maxWidth: 620,
                marginBottom: 24,
              }}
            >
              Premium Business Growth in Mauritius
            </div>

            <div
              style={{
                display: "flex",
                fontSize: 29,
                lineHeight: 1.35,
                color: "rgba(255,255,255,0.88)",
                maxWidth: 620,
                marginBottom: 30,
              }}
            >
              Websites • Marketing • Accounting • Logistics • Branding • Business Solutions
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
                maxWidth: 640,
              }}
            >
              {[
                "Executive Websites",
                "SEO Mauritius",
                "Digital Marketing",
                "Accounting Support",
                "Branding Solutions",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "11px 18px",
                    borderRadius: 9999,
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.16)",
                    color: "rgba(255,255,255,0.96)",
                    fontSize: 20,
                    fontWeight: 600,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div
            style={{
              width: "42%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 24,
                borderRadius: 34,
                background: "rgba(243,215,122,0.12)",
                filter: "blur(26px)",
              }}
            />

            <div
              style={{
                display: "flex",
                position: "relative",
                width: "100%",
                height: "100%",
                maxHeight: 520,
                borderRadius: 34,
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.18)",
                boxShadow:
                  "0 24px 60px rgba(3,10,24,0.34), inset 0 1px 0 rgba(255,255,255,0.18)",
                background: "#091326",
              }}
            >
              <img
                src={posterSrc}
                alt="MoBiz.mu premium business preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.03) 24%, rgba(0,0,0,0.10) 100%)",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  top: 18,
                  left: 18,
                  width: 140,
                  height: 1.5,
                  background:
                    "linear-gradient(90deg, rgba(243,215,122,0.9), rgba(243,215,122,0.05))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}