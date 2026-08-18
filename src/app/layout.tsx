import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  OG_IMAGE_ALT,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
} from "@/lib/site";

/*
 * Self-hosted through next/font: no render-blocking request to fonts.googleapis.com,
 * and `display: swap` keeps text paintable before the face arrives.
 *
 * No `weight` array on purpose. Space Grotesk ships a variable `wght` axis (300-700)
 * covering every weight this site paints (400/500/600/700).
 *
 * Measured, so it isn't re-"optimised" later on a false premise: listing static weights
 * emits the SAME three .woff2 files (one per unicode-range subset) with the same hashes
 * — it does not download more bytes. The only difference is the CSS, which drops from
 * 12 @font-face declarations (4 weights x 3 subsets) to 3. Byte cost is identical.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,

  title: {
    default:
      "Website Design, Marketing & Accounting Mauritius | MoBiz.mu",
    template: "%s | MoBiz.mu",
  },

  description:
    "MoBiz.mu helps Mauritius businesses grow with premium website design, ecommerce development, digital marketing, SEO, accounting, tax filing, company registration, warehousing and business solutions.",

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "business",

  alternates: { canonical: SITE_URL },

  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "MoBiz.mu | Premium Website Design, Accounting & Business Solutions in Mauritius",
    description:
      "Premium websites, ecommerce, digital marketing, SEO, accounting, tax support, warehousing and business solutions for ambitious businesses in Mauritius.",
    images: [
      {
        url: OG_IMAGE_URL,
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        alt: OG_IMAGE_ALT,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "MoBiz.mu | Website Design, Accounting & Business Solutions in Mauritius",
    description:
      "Premium websites, digital marketing, SEO, accounting, tax support, warehousing and business solutions for Mauritius businesses.",
    images: [OG_IMAGE_URL],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
  colorScheme: "dark",
};

/*
 * Site-wide graph only. Page-level schema (Service, Article, FAQPage,
 * BreadcrumbList) is emitted by the page that owns those facts.
 *
 * No AggregateRating anywhere — Mobiz has no verified review corpus to describe.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/icon.png`,
      image: OG_IMAGE_URL,
      email: CONTACT_EMAIL,
      telephone: CONTACT_PHONE_DISPLAY,
      sameAs: SOCIAL_LINKS.map((s) => s.href),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={spaceGrotesk.variable}
    >
      <body>
        {children}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
