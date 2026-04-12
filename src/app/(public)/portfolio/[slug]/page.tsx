import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { ArrowLeft, ArrowRight, Globe, Sparkles } from "lucide-react";

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
  overview: string;
  challenge: string;
  solution: string;
  outcome: string;
  seoTitle: string;
  seoDescription: string;
};

const portfolioProjects: PortfolioProject[] = [
  {
    slug: "dan-and-shi-pest-control-ltd",
    title: "Dan & Shi Pest Control Ltd",
    category: "Business Website",
    shortDescription:
      "A premium bilingual pest control website built for stronger trust and local lead generation.",
    fullDescription:
      "A premium bilingual pest control website built for stronger trust, local visibility, and easier WhatsApp-led conversions in Mauritius.",
    image: "/images/portfolio/dan-and-shi-cover.jpg",
    liveUrl: "https://www.danandshi.com/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
    overview:
      "Dan & Shi Pest Control Ltd needed a clearer and more professional digital presence for pest control services in Mauritius. The project focused on stronger trust, easier service discovery, bilingual accessibility, and clearer local positioning.",
    challenge:
      "Service businesses can lose trust quickly when their website looks outdated, unclear, or difficult to navigate on mobile. For a pest control company, visitors often need fast information and quick contact options.",
    solution:
      "We created a cleaner and more executive website structure with service-based presentation, localized trust signals, WhatsApp-led conversion paths, and a stronger bilingual content direction for English and French audiences.",
    outcome:
      "The final website supports stronger credibility, better local SEO foundations, easier mobile browsing, and a more confident first impression for homes and businesses seeking pest control in Mauritius.",
    seoTitle:
      "Dan & Shi Pest Control Ltd Portfolio | Pest Control Website Mauritius | MoBiz.mu",
    seoDescription:
      "See how MoBiz.mu built a premium bilingual pest control website for Dan & Shi Pest Control Ltd in Mauritius with stronger trust, mobile usability, and local visibility.",
  },
  {
    slug: "himalay-rental-tours",
    title: "Himalay Rental Tours",
    category: "Tourism Website",
    shortDescription:
      "A tourism and booking-focused website for rentals, excursions, lagoon trips, and WhatsApp booking in Mauritius.",
    fullDescription:
      "A tourism and booking-focused website for rentals, excursions, lagoon trips, and WhatsApp-based holiday planning in Mauritius.",
    image: "/images/portfolio/himalay-rental-tours-cover.jpg",
    liveUrl: "https://www.himalayrentaltours.mu/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
    overview:
      "Himalay Rental Tours needed a website that could present multiple travel services under one local operator brand, including rentals, excursions, airport transfers, and lagoon trips.",
    challenge:
      "Tourism websites can become confusing when too many services are presented without a clear structure. Mobile visitors also need fast access to booking actions and simple information.",
    solution:
      "We built a more premium tourism layout with clearer navigation, service grouping, local trust positioning, and direct WhatsApp-focused conversion points for holiday planning.",
    outcome:
      "The project created a stronger digital image, clearer service presentation, and a more conversion-friendly structure for Mauritius travellers and holiday bookings.",
    seoTitle:
      "Himalay Rental Tours Portfolio | Tourism Website Mauritius | MoBiz.mu",
    seoDescription:
      "Discover how MoBiz.mu designed a tourism website for Himalay Rental Tours in Mauritius with stronger booking flow, mobile usability, and premium service presentation.",
  },
  {
    slug: "atelier-de-mea",
    title: "Atelier de Mea",
    category: "E-Commerce Website",
    shortDescription:
      "A premium handmade fashion and accessories e-commerce experience with stronger brand image and product discovery.",
    fullDescription:
      "A premium handmade fashion and accessories e-commerce experience built to elevate brand image, product discovery, and mobile shopping.",
    image: "/images/portfolio/atelier-de-mea-cover.jpg",
    liveUrl: "https://www.atelierdemea.com/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
    overview:
      "Atelier de Mea required an online storefront that felt more premium, feminine, and brand-led while still supporting product browsing, category discovery, and a smoother shopping experience.",
    challenge:
      "For handmade product brands, visual identity and trust matter as much as product listings. A weak e-commerce experience can reduce perceived quality and make products feel less premium.",
    solution:
      "We structured the project around stronger category presentation, cleaner shopping hierarchy, luxury-inspired visual tone, and a more polished mobile-first storefront for handcrafted fashion and accessories.",
    outcome:
      "The result is a more elegant e-commerce experience that improves product presentation, supports stronger brand storytelling, and helps the business look more premium online.",
    seoTitle:
      "Atelier de Mea Portfolio | Handmade Fashion E-Commerce Mauritius | MoBiz.mu",
    seoDescription:
      "See how MoBiz.mu created a premium e-commerce website for Atelier de Mea in Mauritius with stronger handmade brand presentation, mobile shopping, and product discovery.",
  },
  {
    slug: "multiimaint-ltd",
    title: "Multiimaint Ltd",
    category: "Corporate Website",
    shortDescription:
      "A cleaner corporate service website built to support a more polished and trustworthy business image.",
    fullDescription:
      "A corporate digital presentation designed to support facility, maintenance, and service-business credibility with a cleaner executive image.",
    image: "/images/portfolio/multiimaint-cover.jpg",
    liveUrl: "https://www.multiimaint.mu/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
    overview:
      "Multiimaint Ltd needed a stronger business-facing website presentation to communicate professionalism, service capability, and trust more clearly online.",
    challenge:
      "For maintenance and operational service companies, presentation often determines first impressions. A weak site can make the company feel less established than it really is.",
    solution:
      "We approached the project as a premium corporate website with clearer structure, stronger visual hierarchy, and more executive positioning for service presentation.",
    outcome:
      "The result supports a more confident digital presence and helps the company present itself in a way that aligns better with serious business expectations.",
    seoTitle:
      "Multiimaint Ltd Portfolio | Corporate Service Website Mauritius | MoBiz.mu",
    seoDescription:
      "Explore how MoBiz.mu created a premium corporate website direction for Multiimaint Ltd with stronger business presentation and cleaner executive structure.",
  },
  {
    slug: "travel-holiday-mauritius",
    title: "Travel Holiday Mauritius",
    category: "Tourism Website",
    shortDescription:
      "A conversion-focused travel website for airport transfers, island tours, and direct WhatsApp booking.",
    fullDescription:
      "A conversion-focused travel website for airport transfers, island tours, local experiences, and direct WhatsApp booking in Mauritius.",
    image: "/images/portfolio/travel-holiday-mauritius-cover.jpg",
    liveUrl: "https://travelholidaymauritius.com/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
    overview:
      "Travel Holiday Mauritius needed a stronger online platform for airport transfers, private tours, local travel experiences, and guest trust-building.",
    challenge:
      "Travel visitors often make decisions quickly on mobile. The website needed to feel trustworthy, easy to understand, and simple to use for direct booking and inquiry.",
    solution:
      "We shaped the website around premium local-tourism presentation, clearer service grouping, trust-focused sections, and stronger mobile-first conversion paths for direct WhatsApp booking.",
    outcome:
      "The final result supports a better first impression, stronger travel credibility, and more efficient visitor flow from browsing to booking.",
    seoTitle:
      "Travel Holiday Mauritius Portfolio | Tourism Website Mauritius | MoBiz.mu",
    seoDescription:
      "See how MoBiz.mu built a premium tourism website for Travel Holiday Mauritius with stronger trust, mobile booking flow, and local travel presentation.",
  },
  {
    slug: "ks-contracting-accounting-saas",
    title: "KS Contracting Ltd Accounting SaaS",
    category: "Custom SaaS Platform",
    shortDescription:
      "A tailored accounting and document workflow software environment built for premium business control.",
    fullDescription:
      "A tailored accounting and operations software interface designed for document workflows, invoicing, quotations, and professional business control.",
    image: "/images/portfolio/ks-contracting-cover.jpg",
    showVisitWebsite: false,
    overview:
      "This project focused on a custom accounting and document workflow environment, built to improve internal operations, quotation and invoice handling, and premium admin usability.",
    challenge:
      "Business software needs more than function alone. Without clean structure and good interface logic, document operations become slow, inconsistent, and harder to trust internally.",
    solution:
      "We approached the SaaS product with a stronger focus on structured workflows, clearer layout, premium UI direction, and better document-based business control.",
    outcome:
      "The platform demonstrates a more executive operational environment with stronger usability, cleaner document handling, and more professional digital workflow presentation.",
    seoTitle:
      "KS Contracting Ltd SaaS Portfolio | Custom Accounting Software | MoBiz.mu",
    seoDescription:
      "Explore how MoBiz.mu built a premium custom accounting SaaS environment for KS Contracting Ltd with stronger document workflows and executive dashboard structure.",
  },
  {
    slug: "ram-pottery-hub-saas",
    title: "Ram Pottery Hub SaaS",
    category: "Custom SaaS Platform",
    shortDescription:
      "A tailored software environment developed to support structured digital operations and cleaner admin control.",
    fullDescription:
      "A tailored software environment developed to support accounting-style workflows and business operations in a structured digital interface.",
    image: "/images/portfolio/ram-pottery-hub-cover.jpg",
    showVisitWebsite: false,
    overview:
      "This project highlights a custom SaaS-style operational environment designed to support structured internal workflows and cleaner admin usability.",
    challenge:
      "Custom software platforms need strong visual clarity and workflow logic to feel reliable and efficient for day-to-day operations.",
    solution:
      "The direction focused on improving dashboard experience, structure, and operational usability while maintaining a more premium business software presentation.",
    outcome:
      "The result supports a stronger internal digital experience and demonstrates MoBiz.mu capability in premium custom SaaS interface execution.",
    seoTitle:
      "Ram Pottery Hub SaaS Portfolio | Custom Software Interface | MoBiz.mu",
    seoDescription:
      "See how MoBiz.mu developed a premium SaaS-style software interface for Ram Pottery Hub with structured workflows and cleaner admin control.",
  },
  {
    slug: "ram-pottery-ecommerce",
    title: "Ram Pottery Ltd",
    category: "E-Commerce Website",
    shortDescription:
      "A handcrafted pottery e-commerce website with stronger product presentation and mobile shopping flow.",
    fullDescription:
      "A mobile-friendly pottery e-commerce website designed to present handcrafted products more professionally and support online product discovery.",
    image: "/images/portfolio/ram-pottery-cover.jpg",
    liveUrl: "https://www.rampottery.mu/",
    previewLabel: "Visit Website",
    showVisitWebsite: true,
    overview:
      "Ram Pottery Ltd needed a stronger customer-facing e-commerce website to present handcrafted pottery products with better visual impact and shopping structure.",
    challenge:
      "Handmade product websites need to balance product clarity, brand storytelling, and trust. If the storefront feels weak, the products often feel less premium.",
    solution:
      "We developed a more polished e-commerce presentation with stronger mobile responsiveness, improved product discovery, and better visual consistency for the brand.",
    outcome:
      "The final website helps the brand present handcrafted products more professionally and supports a smoother customer-facing online shopping experience.",
    seoTitle:
      "Ram Pottery Ltd Portfolio | Pottery E-Commerce Website Mauritius | MoBiz.mu",
    seoDescription:
      "Discover how MoBiz.mu built a premium pottery e-commerce website for Ram Pottery Ltd with stronger product presentation, mobile shopping, and brand consistency.",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Portfolio Project | MoBiz.mu",
      description: "Selected premium project by MoBiz.mu.",
    };
  }

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: `${siteUrl}/portfolio/${project.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `${siteUrl}/portfolio/${project.slug}`,
      siteName: "MoBiz.mu",
      type: "article",
      images: [{ url: `${siteUrl}${project.image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.seoDescription,
    },
  };
}

function PortfolioItemJsonLd({ project }: { project: PortfolioProject }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${siteUrl}/portfolio/${project.slug}`,
    image: `${siteUrl}${project.image}`,
    description: project.fullDescription,
    creator: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioProjects.find((item) => item.slug === slug);

  if (!project) notFound();

  const relatedProjects = portfolioProjects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <PortfolioItemJsonLd project={project} />

      <main className="bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_20%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mb-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition-colors duration-300 hover:text-[#8b6a18]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </div>

            <div className="grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-[#ead8a1] bg-[#fff9ea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]">
                  {project.category}
                </div>

                <h1
                  className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.5rem] lg:text-[3rem] lg:leading-[1.05]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  {project.title}
                </h1>

                <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  {project.fullDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.16)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Request Similar Project
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

              <div className="relative overflow-hidden rounded-[28px] border border-[#e4eaf2] bg-white shadow-[0_18px_40px_rgba(7,18,38,0.07)]">
                <div className="relative aspect-[16/11] bg-[#f6f8fc]">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                { title: "Project Overview", text: project.overview },
                { title: "The Challenge", text: project.challenge },
                { title: "Our Direction", text: project.solution },
                { title: "Expected Outcome", text: project.outcome },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)] sm:p-6"
                >
                  <h2
                    className="text-[1.35rem] font-semibold tracking-tight text-[#071226] sm:text-[1.5rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {relatedProjects.length > 0 ? (
          <section className="py-6 sm:py-8 lg:py-10">
            <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Related Projects
                  </div>

                  <h2
                    className="mt-3 text-[1.8rem] font-semibold tracking-tight text-[#071226] sm:text-[2.2rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    Explore More Selected Work
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {relatedProjects.map((item, index) => (
                  <article
                    key={item.slug}
                    className="overflow-hidden rounded-[24px] border border-[#e4eaf2] bg-white shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                  >
                    <Link href={`/portfolio/${item.slug}`} className="block">
                      <div className="relative h-56 bg-[#f6f8fc]">
                        <SmartImage
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority={index === 0}
                        />
                      </div>

                      <div className="p-5">
                        <div className="inline-flex rounded-full border border-[#ead8a1] bg-[#fff9ea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18]">
                          {item.category}
                        </div>

                        <h3
                          className="mt-3 text-[1.2rem] font-semibold tracking-tight text-[#071226]"
                          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                          {item.shortDescription}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </main>
    </>
  );
}