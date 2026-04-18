type OgTemplateProps = {
  title: string;
  subtitle: string;
  badge?: string;
  pills?: string[];
};

export async function renderMoBizOgTemplate({
  title,
  subtitle,
  badge = "MoBiz.mu",
  pills = [],
}: OgTemplateProps) {
  const pill1 = pills[0] ?? "Executive Websites";
  const pill2 = pills[1] ?? "SEO Mauritius";
  const pill3 = pills[2] ?? "Digital Marketing";
  const pill4 = pills[3] ?? "Accounting Support";
  const pill5 = pills[4] ?? "Branding Solutions";

  return (
    <div
      style={{
        width: "1200px",
        height: "630px",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(135deg, #071226 0%, #0b1f46 42%, #0b5c7a 74%, #119b7e 100%)",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "80px",
          width: "1040px",
          height: "2px",
          background: "rgba(243,215,122,0.95)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "-80px",
          top: "-70px",
          width: "260px",
          height: "260px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.08)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "-70px",
          bottom: "-90px",
          width: "240px",
          height: "240px",
          borderRadius: "999px",
          background: "rgba(243,215,122,0.10)",
        }}
      />

      <div
        style={{
          width: "690px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "52px 28px 52px 64px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            padding: "12px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(243,215,122,0.45)",
            background: "rgba(255,255,255,0.10)",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              color: "#f3d77a",
              fontSize: "22px",
              fontWeight: 700,
              letterSpacing: "4px",
              textTransform: "uppercase",
              lineHeight: "1.1",
              display: "flex",
            }}
          >
            {badge}
          </div>
        </div>

        <div
          style={{
            fontSize: "56px",
            lineHeight: "1.04",
            fontWeight: 800,
            marginBottom: "20px",
            maxWidth: "520px",
            display: "flex",
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: "22px",
            lineHeight: "1.38",
            color: "rgba(255,255,255,0.88)",
            marginBottom: "26px",
            maxWidth: "560px",
            display: "flex",
          }}
        >
          {subtitle}
        </div>

        <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
          <div
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.16)",
              fontSize: "17px",
              fontWeight: 600,
              marginRight: "10px",
              display: "flex",
            }}
          >
            {pill1}
          </div>
          <div
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.16)",
              fontSize: "17px",
              fontWeight: 600,
              display: "flex",
            }}
          >
            {pill2}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row", marginBottom: "10px" }}>
          <div
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.16)",
              fontSize: "17px",
              fontWeight: 600,
              marginRight: "10px",
              display: "flex",
            }}
          >
            {pill3}
          </div>
          <div
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.16)",
              fontSize: "17px",
              fontWeight: 600,
              display: "flex",
            }}
          >
            {pill4}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            style={{
              padding: "10px 16px",
              borderRadius: "999px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.16)",
              fontSize: "17px",
              fontWeight: 600,
              display: "flex",
            }}
          >
            {pill5}
          </div>
        </div>
      </div>

      <div
        style={{
          width: "510px",
          height: "630px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "56px 64px 56px 12px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "518px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderRadius: "34px",
            border: "1px solid rgba(255,255,255,0.18)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
            boxShadow: "0 24px 60px rgba(3,10,24,0.30)",
            padding: "28px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              width: "140px",
              height: "2px",
              background: "rgba(243,215,122,0.92)",
              display: "flex",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "18px",
                letterSpacing: "3px",
                textTransform: "uppercase",
                color: "#f3d77a",
                marginBottom: "14px",
                display: "flex",
              }}
            >
              Mauritius
            </div>

            <div
              style={{
                fontSize: "44px",
                lineHeight: "1.08",
                fontWeight: 800,
                marginBottom: "16px",
                display: "flex",
              }}
            >
              Premium Digital Growth
            </div>

            <div
              style={{
                fontSize: "22px",
                lineHeight: "1.4",
                color: "rgba(255,255,255,0.84)",
                display: "flex",
              }}
            >
              Executive presentation, stronger trust, and better visibility for serious businesses.
            </div>
          </div>

          <div
            style={{
              width: "100%",
              height: "120px",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, rgba(243,215,122,0.18) 0%, rgba(255,255,255,0.06) 100%)",
              border: "1px solid rgba(255,255,255,0.14)",
              display: "flex",
            }}
          />
        </div>
      </div>
    </div>
  );
}