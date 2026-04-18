import { ImageResponse } from "next/og";
import { renderMoBizOgTemplate } from "@/lib/og-template";

export const runtime = "nodejs";

export const alt = "MoBiz.mu — Premium Business Solutions in Mauritius";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    await renderMoBizOgTemplate({
      title: "Premium Business Solutions in Mauritius",
      subtitle: "Websites • Marketing • Accounting • Logistics • Branding",
      badge: "MoBiz.mu",
      pills: [
        "Executive Websites",
        "SEO Mauritius",
        "Digital Marketing",
        "Accounting Support",
        "Branding Solutions",
      ],
    }),
    {
      ...size,
    }
  );
}