import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { anton } from "@/components/home/fonts";
import { Challenges } from "@/components/home/Challenges";
import { ServicesTabs } from "@/components/home/ServicesTabs";
import { WebsiteTemplateCarousel } from "@/components/home/WebsiteTemplateCarousel";
import { ServiceSpotlight } from "@/components/home/ServiceSpotlight";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { PricingPreview } from "@/components/home/PricingPreview";
import { AssistanceSection } from "@/components/home/AssistanceSection";
import { WhyMobiz } from "@/components/home/WhyMobiz";
import { MauritiusCoverage } from "@/components/home/MauritiusCoverage";
import { BlogPreview } from "@/components/home/BlogPreview";
import { CTASection } from "@/components/ui/CTASection";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  // `absolute` opts out of the root "%s | MoBiz.mu" template, which would
  // otherwise append the brand to a title that already carries it.
  title: {
    absolute:
      "MoBiz.mu | Website Design, Accounting & Business Solutions in Mauritius",
  },
  description:
    "MoBiz.mu helps Mauritius businesses grow with premium website design, ecommerce, digital marketing, SEO, accounting, VAT filing, warehousing and business solutions.",
  alternates: { canonical: SITE_URL },
};

/**
 * The approved homepage — the master design for the whole site.
 *
 * Composition order tells one story: the problem, the five divisions, each
 * division in depth, proof, price, help, and why Mobiz. The service spotlights
 * alternate sides and surfaces so five consecutive sections read as a sequence
 * rather than a stack.
 *
 * Server component throughout. The only client boundaries are the services tab
 * strip and the scroll-reveal wrappers.
 */
export default function HomePage() {
  return (
    <>
      {/*
        Anton's CSS variable is scoped to the two sections that use it, so the
        font is preloaded on this route only — see src/components/home/fonts.ts.
      */}
      <div className={anton.variable}>
        <Hero />
        <TrustedBy />
      </div>
      <Challenges />
      <ServicesTabs />
      <WebsiteTemplateCarousel />
      <ServiceSpotlight
        division="website-design-development"
        side="right"
        surface="raised"
        points={[
          "Mobile-first design that looks right on the phone people actually use",
          "Built for speed, so pages load properly on Mauritian mobile networks",
          "WhatsApp enquiry built into the flow, not bolted on afterwards",
          "Search structure in place from day one, not retrofitted later",
        ]}
      />
      <ServiceSpotlight
        division="digital-marketing"
        side="left"
        points={[
          "Local SEO so you appear when people search in your area",
          "Google and Meta campaigns aimed at enquiries, not impressions",
          "Content and social that sounds like your business",
          "Monthly reporting in plain language you can act on",
        ]}
      />
      <ServiceSpotlight
        division="accounting-tax-returns"
        side="right"
        surface="raised"
        points={[
          "VAT registration and filing handled to MRA requirements",
          "Payroll processed on schedule, every month",
          "Bookkeeping kept current so you are never reconstructing a year",
          "Reports that show where the business actually stands",
        ]}
      />
      <ServiceSpotlight
        division="warehousing-inventory"
        side="left"
        points={[
          "Barcode and SKU systems that match how your stock moves",
          "Low-stock alerts before a shortage costs you a sale",
          "Supplier and purchase tracking in one place",
          "Stock counts and reporting your team can run themselves",
        ]}
      />
      <ServiceSpotlight
        division="business-solutions"
        side="right"
        surface="raised"
        points={[
          "Company registration and the paperwork that goes with it",
          "Business plans and financial forecasts built to be read by lenders",
          "Pitch decks and brand documents that look established",
          "AI and automation applied where it removes real manual work",
        ]}
      />

      <PortfolioPreview />
      <PricingPreview />
      <AssistanceSection />
      <WhyMobiz />
      <MauritiusCoverage />
      <BlogPreview />

      <CTASection
        title="Let's build something that works."
        description="Tell us what your business needs. We will come back with a clear, honest recommendation — and a straight answer on what it takes."
        whatsappMessage="Hello Mobiz, I would like to discuss a project for my business."
      />
    </>
  );
}
