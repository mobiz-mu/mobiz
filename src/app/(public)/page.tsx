import BlogPreview from "@/components/home/BlogPreview";
import CTASection from "@/components/home/CTASection";
import LeadMagnetCTA from "@/components/lead/LeadMagnetCTA";
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
import CompaniesWeWorkWith from "@/components/home/CompaniesWeWorkWith";
import MauritiusSearches from "@/components/home/MauritiusSearches";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <HomepageVideoPopup />
      <DomainAvailabilitySection />
      <CompaniesWeWorkWith />
      <PortfolioPreview />
      <WhyUs />
      <Testimonials />
      <MauritiusServices />
      <MauritiusSearches />
      <BlogPreview />
      <NewsletterSection />
      <MauritiusBusinessNews />
      <LeadMagnetCTA />
      <CTASection />
    </main>
  );
}
