import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { ArrowRight, Globe, Sparkles } from "lucide-react";

const siteUrl = "https://mobiz.mu";

type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  liveUrl?: string;
  previewLabel?: string;
  showVisitWebsite?: boolean;
};

const portfolioProjects: PortfolioProject[] = [
  {
    slug: "dan-and-shi-pest-control-ltd",
    title: "Dan & Shi Pest Control Ltd",
    category: "Business Website",
    shortDescription:
      "A premium bilingual pest control website built for stronger trust, local visibility, and easier WhatsApp-led conversions in Mauritius.",
    fullDescription:
      "This project was designed for a Mauritian pest control company serving homes and businesses across the island. The website presents service clarity, bilingual accessibility, stronger local trust, and a more professional online presence for urgent inquiries and quote requests.",
    image: "/images/portfolio/dan-and-shi-cover.jpg",
    liveUrl: "https://www.danandshi.com/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
  },
  {
    slug: "himalay-rental-tours",
    title: "Himalay Rental Tours",
    category: "Tourism Website",
    shortDescription:
      "A tourism and booking-focused website for rentals, excursions, lagoon trips, and WhatsApp-based holiday planning in Mauritius.",
    fullDescription:
      "Built for a local Mauritius tour operator, this project brings together rentals, excursions, boat trips, and booking convenience into one stronger digital experience. The direction emphasizes quick navigation, tourism trust, and WhatsApp-first conversion.",
    image: "/images/portfolio/himalay-rental-tours-cover.jpg",
    liveUrl: "https://www.himalayrentaltours.mu/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
  },
  {
    slug: "atelier-de-mea",
    title: "Atelier de Mea",
    category: "E-Commerce Website",
    shortDescription:
      "A premium handmade fashion and accessories e-commerce experience built to elevate brand image, product discovery, and mobile shopping.",
    fullDescription:
      "This e-commerce project was developed for a Mauritian handmade fashion brand, with a stronger luxury presentation, cleaner shopping experience, better storytelling, and improved product visibility for accessories and handmade collections.",
    image: "/images/portfolio/atelier-de-mea-cover.jpg",
    liveUrl: "https://www.atelierdemea.com/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
  },
  {
    slug: "multiimaint-ltd",
    title: "Multiimaint Ltd",
    category: "Corporate Website",
    shortDescription:
      "A corporate digital presentation designed to support facility, maintenance, and service-business credibility with a cleaner executive image.",
    fullDescription:
      "This project was positioned as a stronger corporate website for service-led operations, helping the company present a more polished, trustworthy, and structured business profile online.",
    image: "/images/portfolio/multiimaint-cover.jpg",
    liveUrl: "https://www.multiimaint.mu/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
  },
  {
    slug: "travel-holiday-mauritius",
    title: "Travel Holiday Mauritius",
    category: "Tourism Website",
    shortDescription:
      "A conversion-focused travel website for airport transfers, island tours, local experiences, and direct WhatsApp booking in Mauritius.",
    fullDescription:
      "This website was built to present a local Mauritian travel and transfer service in a more premium and reliable way. The project supports trust-building, tourism SEO, and faster direct booking through mobile-friendly content and WhatsApp conversion paths.",
    image: "/images/portfolio/travel-holiday-mauritius-cover.jpg",
    liveUrl: "https://travelholidaymauritius.com/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
  },
  {
    slug: "ks-contracting-accounting-saas",
    title: "KS Contracting Ltd Accounting SaaS",
    category: "Custom SaaS Platform",
    shortDescription:
      "A tailored accounting and operations software interface designed for document workflows, invoicing, quotations, and professional business control.",
    fullDescription:
      "This portfolio project highlights a custom SaaS accounting platform created for business operations, with a focus on quotations, invoices, document workflows, admin controls, and premium dashboard usability. Public SaaS access is intentionally not displayed.",
    image: "/images/portfolio/ks-contracting-cover.jpg",
    showVisitWebsite: false,
  },
  {
    slug: "ram-pottery-hub-saas",
    title: "Ram Pottery Hub SaaS",
    category: "Custom SaaS Platform",
    shortDescription:
      "A tailored software environment developed to support accounting-style workflows and business operations in a structured digital interface.",
    fullDescription:
      "This case study presents a custom SaaS-style software solution built around operational workflows and cleaner admin control. Public SaaS links are intentionally excluded while still showcasing the digital execution quality.",
    image: "/images/portfolio/ram-pottery-hub-cover.jpg",
    showVisitWebsite: false,
  },
  {
    slug: "ram-pottery-ecommerce",
    title: "Ram Pottery Ltd",
    category: "E-Commerce Website",
    shortDescription:
      "A mobile-friendly pottery e-commerce website designed to present handcrafted products more professionally and support online product discovery.",
    fullDescription:
      "This public e-commerce project was built to showcase handcrafted pottery in a more premium way, combining product visibility, branding consistency, and a smoother customer-facing shopping experience.",
    image: "/images/portfolio/ram-pottery-cover.jpg",
    liveUrl: "https://www.rampottery.mu/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
  },
];

export const metadata: Metadata = {
  title:
    "Portfolio Mauritius | Premium Website Design, E-Commerce & Digital Projects | MoBiz.mu",
  description:
    "Explore selected MoBiz.mu portfolio projects across business websites, e-commerce websites, tourism platforms, and custom digital solutions in Mauritius.",
  keywords: [
    "Portfolio Mauritius",
    "Website Design Portfolio Mauritius",
    "E-Commerce Portfolio Mauritius",
    "Tourism Website Mauritius",
    "Business Website Mauritius",
    "MoBiz.mu Portfolio",
    "Web Design Mauritius",
    "Ecommerce Website Mauritius",
  ],
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MoBiz.mu Portfolio | Premium Mauritius Digital Projects",
    description:
      "Selected MoBiz.mu projects across premium websites, e-commerce, tourism platforms, and custom digital solutions in Mauritius.",
    url: `${siteUrl}/portfolio`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoBiz.mu Portfolio | Premium Mauritius Digital Projects",
    description:
      "Selected MoBiz.mu projects across premium websites, e-commerce, tourism platforms, and custom digital solutions in Mauritius.",
  },
};

function PortfolioJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MoBiz.mu Portfolio",
    url: `${siteUrl}/portfolio`,
    description:
      "Selected MoBiz.mu projects across premium websites, e-commerce, tourism platforms, and custom digital solutions in Mauritius.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: portfolioProjects.map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: project.title,
        url: `${siteUrl}/portfolio/${project.slug}`,
        image: `${siteUrl}${project.image}`,
        description: project.fullDescription,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function PortfolioPage() {
  return (
    <>
      <PortfolioJsonLd />

      <main className="bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_20%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <Sparkles className="h-3.5 w-3.5" />
                MoBiz.mu Portfolio
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Websites, E-Commerce Stores and Digital Business Projects
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                Explore selected MoBiz.mu work across corporate websites, tourism platforms,
                e-commerce experiences, and custom digital solutions built to improve trust,
                visibility, and business presentation in Mauritius.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="space-y-4 sm:space-y-5">
              {portfolioProjects.map((project, index) => (
                <article
                  key={project.slug}
                  className="overflow-hidden rounded-[28px] border border-[#e5eaf2] bg-white shadow-[0_16px_40px_rgba(7,18,38,0.05)]"
                >
                  <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
                    <div className="relative min-h-[220px] bg-[#f6f8fc] sm:min-h-[280px] lg:min-h-full">
                      <SmartImage
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        priority={index < 3}
                      />
                    </div>

                    <div className="flex flex-col justify-center p-5 sm:p-6 lg:p-8">
                      <div className="inline-flex w-fit rounded-full border border-[#ead8a1] bg-[#fff9ea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]">
                        {project.category}
                      </div>

                      <h2
                        className="mt-3 text-balance text-[1.45rem] font-semibold tracking-tight text-[#071226] sm:text-[1.75rem] lg:text-[1.95rem]"
                        style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                      >
                        {project.title}
                      </h2>

                      <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                        {project.fullDescription}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-3">
                        <Link
                          href={`/portfolio/${project.slug}`}
                          className="group inline-flex items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                        >
                          View Case Study
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                        </Link>

                        {project.showVisitWebsite && project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                          >
                            <Globe className="mr-2 h-4 w-4" />
                            {project.previewLabel || "Visit Website"}
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}