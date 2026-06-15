"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const services: ServiceItem[] = [
  {
    title: "Website Design & Development",
    description:
      "Premium business websites, landing pages, e-commerce stores, and conversion-focused digital experiences for Mauritius businesses.",
    href: "/services/website-design",
    imageSrc: "/images/services/cards/website-design-development.webp",
    imageAlt:
      "Premium website design and development illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Digital Marketing & SEO",
    description:
      "SEO, social media marketing, Meta Ads, Google visibility, and lead generation strategies to help your business grow online.",
    href: "/services/digital-marketing",
    imageSrc: "/images/services/cards/digital-marketing-seo.webp",
    imageAlt:
      "Digital marketing and SEO illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Accounting & Tax Services",
    description:
      "Professional bookkeeping, VAT support, tax returns, payroll, and financial organization for startups and growing companies.",
    href: "/services/accounting-tax-returns",
    imageSrc: "/images/services/cards/accounting-tax-services.webp",
    imageAlt:
      "Accounting and tax services illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Business Software & Automation",
    description:
      "Custom web apps, CRM systems, booking systems, inventory management, invoice software, and business automation tools.",
    href: "/web-application-development-mauritius",
    imageSrc: "/images/services/cards/business-software-automation.webp",
    imageAlt:
      "Business software and automation illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Logistics & Import/Export Support",
    description:
      "Import, export, sourcing, delivery coordination, and operational support for smoother business movement and supply flow.",
    href: "/services/logistics",
    imageSrc: "/images/services/cards/logistics-import-export.webp",
    imageAlt:
      "Logistics and import export support illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Branding & Business Solutions",
    description:
      "Brand kits, business plans, company profiles, proposals, launch assets, and premium presentation support for serious businesses.",
    href: "/services/branding-business-solutions",
    imageSrc: "/images/services/cards/branding-business-solutions.webp",
    imageAlt:
      "Branding and business solutions illustration for MoBiz.mu Mauritius",
  },
];

export default function ServicesPreview() {
  return (
    <section
      id="core-services"
      aria-labelledby="core-services-heading"
      className="w-full scroll-mt-24 bg-white py-10 sm:py-12 lg:py-16"
    >
      <Container className="max-w-[1520px]">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#ff7a1a]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Premium Business Services
          </div>

          <h2
            id="core-services-heading"
            className="mt-3 text-balance text-3xl font-bold tracking-tight text-[#071f5f] sm:text-4xl lg:text-[3.2rem] lg:leading-[1.05]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Services Built To Grow Your Business
          </h2>

          <p
            className="mx-auto mt-4 max-w-3xl text-pretty text-[14px] leading-7 text-[#31425f] sm:text-[15px] lg:text-[16px]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            MoBiz.mu helps Mauritius businesses look more professional, generate more leads, manage operations better, and build a stronger digital presence.
          </p>
        </div>

        <div className="mt-8 grid gap-7 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-9">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group flex min-h-full flex-col overflow-hidden rounded-[30px] border border-[#e8eef8] bg-[#f6f9ff] p-4 shadow-[0_22px_55px_rgba(7,18,38,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(7,18,38,0.16)]"
            >
              <div className="relative aspect-[1.58/1] w-full overflow-hidden rounded-[22px] bg-[#dfeaff]">
                <Image
                  src={service.imageSrc}
                  alt={service.imageAlt}
                  fill
                  priority={index < 3}
                  loading={index < 3 ? "eager" : "lazy"}
                  fetchPriority={index < 3 ? "high" : "auto"}
                  quality={75}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.025]"
                />
              </div>

              <div className="flex flex-1 flex-col px-1 pb-2 pt-4">
                <h3
                  className="text-[1.28rem] font-bold tracking-tight text-[#071f5f] sm:text-[1.4rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  {service.title}
                </h3>

                <p
                  className="mt-3 min-h-[92px] text-[14px] leading-7 text-[#111827] sm:text-[15px]"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {service.description}
                </p>

                <div className="mt-auto flex justify-center pt-5">
                  <Link
                    href={service.href}
                    className="group/btn inline-flex items-center justify-center rounded-[14px] bg-[linear-gradient(135deg,#ff4b1f_0%,#ff9914_100%)] px-6 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(255,122,24,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(255,122,24,0.36)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff8a1f] focus-visible:ring-offset-2"
                    aria-label={`Read more about ${service.title}`}
                  >
                    Read more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

