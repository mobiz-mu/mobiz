import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import Hero from "@/components/home/Hero";
import MauritiusServices from "@/components/home/MauritiusServices";
import NewsletterSection from "@/components/home/NewsletterSection";
import DomainAvailabilitySection from "@/components/home/DomainAvailabilitySection";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import ServicesPreview from "@/components/home/ServicesPreview";
import MauritiusBusinessNews from "@/components/home/MauritiusBusinessNews";
import Testimonials from "@/components/home/Testimonials";
import TrustBar from "@/components/home/TrustBar";
import WhyUs from "@/components/home/WhyUs";
import HomepageVideoPopup from "@/components/home/HomepageVideoPopup";
import SeoInternalLinks from "@/components/seo/SeoInternalLinks";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <HomepageVideoPopup />
      <DomainAvailabilitySection />
      <PortfolioPreview />
      <WhyUs />
      <Testimonials />
      <MauritiusServices />

      <SeoInternalLinks
        eyebrow="Most Searched Services"
        title="Popular services for businesses in Mauritius"
        description="Find the right MoBiz.mu service for your business, from premium websites and ecommerce stores to accounting, VAT filing, company registration, SEO and digital marketing."
        links={[
          {
            title: "Website Design Mauritius",
            description:
              "Professional websites designed to help Mauritius businesses look premium and generate enquiries.",
            href: "/website-design-mauritius",
          },
          {
            title: "Ecommerce Website Mauritius",
            description:
              "Online stores, catalogues and WhatsApp ordering systems for product-based businesses.",
            href: "/ecommerce-website-mauritius",
          },
          {
            title: "Digital Marketing Mauritius",
            description:
              "Marketing support to increase your online visibility and attract more clients.",
            href: "/digital-marketing-mauritius",
          },
          {
            title: "Accounting Services Mauritius",
            description:
              "Bookkeeping, tax support, payroll and accounting solutions for businesses.",
            href: "/accounting-services-mauritius",
          },
          {
            title: "Company Registration Mauritius",
            description:
              "Support to register your business and start professionally in Mauritius.",
            href: "/company-registration-mauritius",
          },
          {
            title: "VAT Filing Mauritius",
            description:
              "VAT computation, VAT return preparation and filing support for eligible Mauritius businesses.",
            href: "/vat-filing-mauritius",
          },
          {
            title: "SEO Services Mauritius",
            description:
              "Improve your Google visibility with technical SEO, local SEO and keyword pages.",
            href: "/seo-services-mauritius",
          },
        ]}
      />

      <BlogPreview />
      <NewsletterSection />
      <MauritiusBusinessNews />
      <CTASection />
    </main>
  );
}