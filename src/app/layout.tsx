import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins, Quicksand } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mobiz.mu"),
  applicationName: "MoBiz.mu",
  title: {
    default: "MoBiz.mu — Premium Business Solutions in Mauritius",
    template: "%s | MoBiz.mu",
  },
  description:
    "MoBiz.mu helps businesses in Mauritius grow with premium website design, digital marketing, accounting, tax support, logistics, branding, and business solutions.",
  keywords: [
    "MoBiz.mu",
    "MoBiz Mauritius",
    "Website Design Mauritius",
    "Web Design Mauritius",
    "Business Website Mauritius",
    "Digital Marketing Mauritius",
    "SEO Mauritius",
    "Accounting Mauritius",
    "Tax Returns Mauritius",
    "Bookkeeping Mauritius",
    "Logistics Mauritius",
    "Branding Mauritius",
    "Business Solutions Mauritius",
    "Website Development Mauritius",
    "Mauritius Business Services",
    "Premium Business Solutions Mauritius",
  ],
  authors: [{ name: "MoBiz.mu", url: "https://mobiz.mu" }],
  creator: "MoBiz.mu",
  publisher: "MoBiz.mu",
  alternates: {
    canonical: "https://mobiz.mu",
  },
  category: "business",
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
  url: "https://mobiz.mu",
  siteName: "MoBiz.mu",
  title: "MoBiz.mu — Luxury Business Solutions for Mauritius",
  description:
    "Premium websites, digital marketing, accounting, logistics, branding, and business solutions for ambitious businesses in Mauritius.",
  images: [
    {
      url: "/opengraph-image",
      width: 1200,
      height: 630,
      alt: "MoBiz.mu premium business solutions in Mauritius",
    },
  ],
},
twitter: {
  card: "summary_large_image",
  title: "MoBiz.mu — Luxury Business Solutions for Mauritius",
  description:
    "Premium websites, digital marketing, accounting, logistics, branding, and business solutions for ambitious businesses in Mauritius.",
  images: ["/twitter-image"],
},
  robots: {
    index: true,
    follow: true,
    nocache: false,
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
  themeColor: "#071226",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${poppins.variable} ${quicksand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}