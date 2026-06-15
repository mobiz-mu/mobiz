import type { Metadata } from "next";
import SeoLandingPage from "@/components/seo/SeoLandingPage";
import { seoLandingPages } from "@/lib/seoLandingPages";

const page = seoLandingPages["digital-marketing-mauritius"];

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: {
    canonical: `https://mobiz.mu/${page.slug}`,
  },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: `https://mobiz.mu/${page.slug}`,
    siteName: "MoBiz.mu",
    type: "website",
  },
};

export default function DigitalMarketingMauritiusPage() {
  return <SeoLandingPage page={page} />;
}