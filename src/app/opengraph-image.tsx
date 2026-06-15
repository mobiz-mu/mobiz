import { ImageResponse } from "next/og";

export const alt = "MoBiz.mu - Premium Business Services in Mauritius";

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
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #071226 0%, #0b2b63 48%, #d92121 100%)",
          padding: "64px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: "42px",
            background: "rgba(255,255,255,0.94)",
            padding: "64px",
            boxShadow: "0 28px 80px rgba(0,0,0,0.24)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              color: "#d92121",
              fontSize: "34px",
              fontWeight: 800,
              letterSpacing: "-0.02em",
            }}
          >
            MoBiz.mu
          </div>

          <div
            style={{
              marginTop: "34px",
              color: "#071226",
              fontSize: "68px",
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.055em",
              maxWidth: "920px",
            }}
          >
            Premium Business Services for Mauritius
          </div>

          <div
            style={{
              marginTop: "28px",
              color: "#31425f",
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: 1.35,
              maxWidth: "880px",
            }}
          >
            Websites, Digital Marketing, Accounting, Software, Branding and Logistics Support.
          </div>

          <div
            style={{
              marginTop: "42px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            {["Website Design", "SEO", "Accounting", "Business Software"].map(
              (item) => (
                <div
                  key={item}
                  style={{
                    borderRadius: "999px",
                    background: "#071226",
                    color: "#ffffff",
                    padding: "14px 22px",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

