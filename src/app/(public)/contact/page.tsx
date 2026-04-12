import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";
import {
  CONTACT_AREA_SERVED,
  CONTACT_EMAIL,
  CONTACT_PHONE_RAW,
} from "@/lib/contact-data";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Contact MoBiz.mu | Premium Website, Marketing, Accounting & Business Support in Mauritius",
  description:
    "Contact MoBiz.mu for premium website design, digital marketing, accounting support, logistics solutions, branding, and executive business services in Mauritius.",
  keywords: [
    "Contact MoBiz.mu",
    "MoBiz.mu Mauritius",
    "Website Design Mauritius contact",
    "Digital Marketing Mauritius contact",
    "Accounting Mauritius contact",
    "Branding Mauritius contact",
    "Business Services Mauritius",
    "Logistics Mauritius contact",
    "WhatsApp business Mauritius",
  ],
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Contact MoBiz.mu | Premium Business Support in Mauritius",
    description:
      "Speak with MoBiz.mu about premium websites, marketing, accounting, branding, logistics, and business growth support in Mauritius.",
    url: `${siteUrl}/contact`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact MoBiz.mu | Premium Business Support in Mauritius",
    description:
      "Contact MoBiz.mu for premium websites, digital marketing, accounting, logistics, branding, and business growth support.",
  },
};

function ContactJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact MoBiz.mu",
    url: `${siteUrl}/contact`,
    description:
      "Contact MoBiz.mu for premium website design, digital marketing, accounting support, logistics solutions, branding, and executive business services in Mauritius.",
    mainEntity: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
      email: CONTACT_EMAIL,
      telephone: `+${CONTACT_PHONE_RAW}`,
      areaServed: CONTACT_AREA_SERVED,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function ContactPage() {
  return (
    <>
      <ContactJsonLd />
      <ContactPageClient />
    </>
  );
}
