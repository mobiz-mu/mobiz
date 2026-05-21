import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins, Quicksand } from "next/font/google";

const BASE_URL = "https://mobiz.mu";

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
  metadataBase: new URL(BASE_URL),
  applicationName: "MoBiz.mu",

  title: {
    default:
      "MoBiz.mu | Website Design, Accounting & Business Solutions in Mauritius",
    template: "%s | MoBiz.mu",
  },

  description:
    "MoBiz.mu helps Mauritius businesses grow with premium website design, ecommerce development, digital marketing, SEO, accounting, tax filing, company registration, logistics, branding and business consulting services.",

  keywords: [
    "MoBiz.mu",
    "MoBiz Mauritius",
    "Website Design Mauritius",
    "Web Design Mauritius",
    "Website Development Mauritius",
    "Ecommerce Website Mauritius",
    "Business Website Mauritius",
    "Digital Marketing Mauritius",
    "SEO Mauritius",
    "Google Ads Mauritius",
    "Social Media Marketing Mauritius",
    "Accounting Services Mauritius",
    "Tax Returns Mauritius",
    "VAT Filing Mauritius",
    "Bookkeeping Mauritius",
    "Company Registration Mauritius",
    "Payroll Services Mauritius",
    "Logistics Mauritius",
    "Branding Mauritius",
    "Business Consulting Mauritius",
    "Business Solutions Mauritius",
    "Mauritius Business Services",
  ],

  authors: [{ name: "MoBiz.mu", url: BASE_URL }],
  creator: "MoBiz.mu",
  publisher: "MoBiz.mu",
  category: "business",

  alternates: {
    canonical: BASE_URL,
  },

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
    url: BASE_URL,
    siteName: "MoBiz.mu",
    title:
      "MoBiz.mu | Premium Website Design, Accounting & Business Solutions in Mauritius",
    description:
      "Premium websites, ecommerce development, digital marketing, SEO, accounting, tax support, logistics, branding and business solutions for ambitious businesses in Mauritius.",
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
    title:
      "MoBiz.mu | Website Design, Accounting & Business Solutions in Mauritius",
    description:
      "Premium websites, digital marketing, SEO, accounting, tax support, logistics, branding and business solutions for Mauritius businesses.",
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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "MoBiz.mu",
      url: BASE_URL,
      logo: `${BASE_URL}/icon.png`,
      email: "support@mobiz.mu",
      telephone: "+230 55068119",
      sameAs: [],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "MoBiz.mu",
      url: BASE_URL,
      image: `${BASE_URL}/opengraph-image`,
      email: "support@mobiz.mu",
      telephone: "+230 55068119",
      priceRange: "Rs 1,000 - Rs 48,000",
      areaServed: [
        {
          "@type": "Country",
          name: "Mauritius",
        },
        {
          "@type": "Place",
          name: "Rodrigues",
        },
        {
          "@type": "Place",
          name: "Réunion",
        },
      ],
      serviceType: [
        "Website Design Mauritius",
        "Website Development Mauritius",
        "Ecommerce Website Development",
        "Digital Marketing Mauritius",
        "SEO Services Mauritius",
        "Accounting Services Mauritius",
        "VAT Filing Mauritius",
        "Tax Filing Mauritius",
        "Company Registration Mauritius",
        "Payroll Services Mauritius",
        "Business Consulting Mauritius",
        "Branding Services Mauritius",
        "Logistics Support Mauritius",
      ],
      parentOrganization: {
        "@id": `${BASE_URL}/#organization`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "MoBiz.mu",
      publisher: {
        "@id": `${BASE_URL}/#organization`,
      },
      inLanguage: "en",
    },
  ],
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
      <body>
        {children}

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}