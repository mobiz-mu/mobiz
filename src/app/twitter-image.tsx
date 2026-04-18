import { ImageResponse } from "next/og";
import { renderMoBizOgTemplate } from "@/lib/og-template";

export const runtime = "nodejs";

export const alt = "MoBiz.mu — Luxury Business Solutions for Mauritius";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function TwitterImage() {
  return new ImageResponse(
    await renderMoBizOgTemplate({
      title: "Luxury Business Solutions for Mauritius",
      subtitle:
        "Premium websites, marketing, accounting, logistics, branding, and business support.",
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
