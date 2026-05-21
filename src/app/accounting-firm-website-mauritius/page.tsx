import type { Metadata } from "next";
import BusinessSeoLandingPage from "@/components/seo/BusinessSeoLandingPage";
import { businessSeoPages } from "@/lib/businessSeoPages";

const page = businessSeoPages["accounting-firm-website-mauritius"];
const canonicalUrl = "https://mobiz.mu/accounting-firm-website-mauritius";

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  keywords: [page.primaryKeyword, ...page.secondaryKeywords],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
    url: canonicalUrl,
    siteName: "MoBiz.mu",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: page.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: page.metaTitle,
    description: page.metaDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AccountingFirmWebsiteMauritiusPage() {
  return <BusinessSeoLandingPage page={page} />;
}
