import type { Metadata } from "next";
import dynamic from "next/dynamic";
import "./home.css";
import { Hero } from "@/components/home/Hero";
import { TrustedBy } from "@/components/home/TrustedBy";
import { anton } from "@/components/home/fonts";
import { Challenges } from "@/components/home/Challenges";
import { ServiceSpotlight } from "@/components/home/ServiceSpotlight";
import { PricingPreview } from "@/components/home/PricingPreview";
import { AssistanceSection } from "@/components/home/AssistanceSection";
import { WhyMobiz } from "@/components/home/WhyMobiz";
import { CTASection } from "@/components/ui/CTASection";
import { ServicesTabsIsland } from "@/components/home/ServicesTabsIsland";
import { WebsiteTemplateCarouselIsland } from "@/components/home/WebsiteTemplateCarouselIsland";
import { BlogPreviewIsland } from "@/components/home/BlogPreviewIsland";
import { MauritiusCoverage } from "@/components/home/MauritiusCoverage";
import { SITE_URL } from "@/lib/site";

/*
 * Below-fold sections.
 *
 * `ServicesTabsIsland`, `WebsiteTemplateCarouselIsland` and `BlogPreviewIsland`
 * are plain imports (not `next/dynamic`): each is a tiny client component that
 * server-renders a static "poster" — the real, finished section markup — and
 * only dynamically imports its fully interactive version once the section is
 * near the viewport. That means the interactive JS chunk is never requested
 * during initial page load at all, which a `next/dynamic(ssr:true)` wrapper
 * alone cannot achieve (it moves the component to its own chunk, but React
 * still hydrates it in the initial pass, so the chunk is still fetched up
 * front). See each Island's own file for the per-component reasoning.
 *
 * `MauritiusCoverage` is a plain server component — its only interactive
 * piece (the pageflip review book) is isolated inside `ReviewBookIsland`,
 * which applies the same near-viewport gate. Everything else in that section
 * (heading, stars, CTA) ships as static HTML with no client JS of its own.
 *
 * `PortfolioPreview` still uses `next/dynamic` with `ssr: true` (the default —
 * stated explicitly so the choice reads as deliberate): it renders real
 * markup into the server HTML, so SEO content and no-JS visitors are
 * unaffected, but this is a *chunking* boundary, not a hydration-timing one.
 * Its 3D coverflow measures real rendered card width via `ResizeObserver` and
 * feeds that through a per-breakpoint power-function transform — reproducing
 * that exactly in static CSS (without JS) would need four breakpoint-specific
 * copies of all 12 project cards, which risks the frozen portfolio appearance
 * for a component that already stopped competing with the hero's JS via
 * chunk-splitting. Left as-is rather than shipped as an unverified "deferral".
 *
 * What the chunk split fixes for the still-`next/dynamic` component: it was
 * plain-imported, so Turbopack bundled it into the SAME chunk as the
 * above-fold HeroGlobe (measured at 111.5KB raw) — the browser could not
 * fetch/parse HeroGlobe's hydration code without also fetching and parsing a
 * carousel nobody has scrolled to yet. It now gets its own chunk boundary, so
 * the above-fold path no longer waits on it.
 */
const PortfolioPreview = dynamic(
  () => import("@/components/home/PortfolioPreview"),
);

export const metadata: Metadata = {
  // `absolute` opts out of the root "%s | MoBiz.mu" template, which would
  // otherwise append the brand to a title that already carries it.
  title: {
    absolute:
      "Website Design, Marketing & Accounting Mauritius | MoBiz.mu",
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
 * Server component throughout. The five below-fold interactive sections
 * (services tabs, template carousel, portfolio, coverage/book, blog) are each
 * their own dynamic client boundary — see the imports above — so their JS
 * loads as separate chunks instead of alongside the above-fold hero.
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
      <ServicesTabsIsland />
      <WebsiteTemplateCarouselIsland />
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
      <BlogPreviewIsland />

      <CTASection
        title="Let's build something that works."
        description="Tell us what your business needs. We will come back with a clear, honest recommendation — and a straight answer on what it takes."
        whatsappMessage="Hello Mobiz, I would like to discuss a project for my business."
      />
    </>
  );
}
