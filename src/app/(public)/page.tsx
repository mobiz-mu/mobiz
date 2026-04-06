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

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <DomainAvailabilitySection />
      <PortfolioPreview />
      <WhyUs />
      <Testimonials />
      <MauritiusServices />
      <BlogPreview />
      <NewsletterSection />
      <MauritiusBusinessNews />
      <CTASection />
    </main>
  );
}