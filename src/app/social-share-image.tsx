import { ImageResponse } from "next/og";

export const alt = "MoBiz.mu — Premium Business Growth in Mauritius";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function SocialShareImage() {
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
            "linear-gradient(135deg, #071226 0%, #0b5c7a 38%, #119b7e 72%, #14a44d 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -70,
            right: -40,
            width: 300,
            height: 300,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -110,
            left: -60,
            width: 300,
            height: 300,
            borderRadius: 9999,
            background: "rgba(255,255,255,0.07)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 88,
            right: 120,
            width: 170,
            height: 170,
            borderRadius: 9999,
            background: "rgba(243,215,122,0.12)",
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "0 80px auto 80px",
            height: 2,
            background:
              "linear-gradient(90deg, transparent, rgba(243,215,122,0.95), transparent)",
          }}
        />

        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: "64px 80px",
            flexDirection: "column",
            justifyContent: "center",
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
              fontSize: 76,
              lineHeight: 1.04,
              fontWeight: 800,
              maxWidth: 930,
              marginBottom: 24,
            }}
          >
            Premium Business Growth in Mauritius
          </div>

          <div
            style={{
              fontSize: 31,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.88)",
              maxWidth: 980,
              marginBottom: 34,
            }}
          >
            Websites • Marketing • Accounting • Logistics • Branding • Business Solutions
          </div>

          <div
            style={{
              display: "flex",
              gap: 14,
              flexWrap: "wrap",
            }}
          >
            {[
              "Executive Websites",
              "SEO Mauritius",
              "Digital Marketing",
              "Accounting Support",
              "Business Branding",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "12px 18px",
                  borderRadius: 9999,
                  background: "rgba(255,255,255,0.12)",
                  border: "1px solid rgba(255,255,255,0.16)",
                  fontSize: 22,
                  color: "rgba(255,255,255,0.95)",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

