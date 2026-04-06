"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

type ServiceItem = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  keywords: string[];
  bullets: string[];
  eyebrow: string;
};

const services: ServiceItem[] = [
  {
    eyebrow: "Mauritius Digital Solutions",
    title: "Website Design & Development",
    description:
      "Premium website design in Mauritius for businesses that want to look established, executive, and trustworthy. We create luxury business websites, landing pages, e-commerce websites, and conversion-focused digital experiences for companies across Mauritius, Rodrigues, Réunion, and the wider Indian Ocean region.",
    href: "/services/website-design",
    imageSrc: "/images/services/websites.png",
    imageAlt:
      "Premium website design and development service image for MoBiz.mu in Mauritius showing a luxury digital business presentation",
    keywords: [
      "Website Design Mauritius",
      "Luxury Business Website",
      "E-commerce Development",
    ],
    bullets: [
      "Corporate websites, landing pages, and premium online presentation",
      "Mobile-first structure with stronger user experience and conversion flow",
      "SEO-ready layout and performance-focused development",
    ],
  },
  {
    eyebrow: "Mauritius Marketing Services",
    title: "Digital Marketing",
    description:
      "Executive digital marketing services in Mauritius built to increase visibility, leads, and business growth. From SEO in Mauritius to Meta Ads, Google Ads, and content strategy, MoBiz.mu helps businesses across Mauritius, Rodrigues, and Réunion reach the right audience with a stronger premium brand presence.",
    href: "/services/digital-marketing",
    imageSrc: "/images/services/digital-marketing.png",
    imageAlt:
      "Premium digital marketing service image for MoBiz.mu in Mauritius showing online growth, social media, and campaign strategy visuals",
    keywords: [
      "Digital Marketing Mauritius",
      "SEO Mauritius",
      "Meta Ads & Google Ads",
    ],
    bullets: [
      "SEO, search visibility, and content-led online growth",
      "Meta Ads and Google Ads campaign support",
      "Premium brand positioning with lead generation strategy",
    ],
  },
  {
    eyebrow: "Mauritius Accounting Services",
    title: "Accounting & Tax Returns",
    description:
      "Professional accounting services in Mauritius for startups, SMEs, and established companies that need reliable finance support and business compliance. We assist with bookkeeping, VAT, payroll, statutory filing, and tax returns with a polished, dependable, and business-focused approach.",
    href: "/services/accounting-tax-returns",
    imageSrc: "/images/services/accounting.png",
    imageAlt:
      "Premium accounting and tax services image for MoBiz.mu in Mauritius showing professional finance and business compliance support",
    keywords: [
      "Accounting Services Mauritius",
      "Tax Returns Mauritius",
      "Bookkeeping & VAT",
    ],
    bullets: [
      "Bookkeeping, VAT, payroll, and statutory filing support",
      "Tax returns and structured business compliance",
      "Reliable financial organization for growing businesses",
    ],
  },
  {
    eyebrow: "Mauritius Logistics Solutions",
    title: "Logistics Solutions",
    description:
      "Premium logistics support in Mauritius for businesses that need smoother import and export coordination, sourcing support, and operational structure. MoBiz.mu helps companies manage logistics processes with more clarity, stronger business support, and dependable day-to-day execution.",
    href: "/services/logistics",
    imageSrc: "/images/services/logistics.png",
    imageAlt:
      "Premium logistics solutions image for MoBiz.mu in Mauritius showing import export, delivery, and operational business support",
    keywords: [
      "Logistics Mauritius",
      "Import Export Support",
      "Business Delivery Coordination",
    ],
    bullets: [
      "Import and export setup with operational support",
      "Procurement, sourcing, and logistics coordination",
      "Business-friendly solutions for smoother daily operations",
    ],
  },
  {
    eyebrow: "Mauritius Branding Solutions",
    title: "Branding & Business Solutions",
    description:
      "High-end branding and business solutions in Mauritius for companies that want to present themselves like serious market leaders. We create brand kits, business plans, decks, proposals, CV services, and launch-ready assets designed for Mauritius and the wider Indian Ocean market.",
    href: "/services/branding-business-solutions",
    imageSrc: "/images/services/branding.png",
    imageAlt:
      "Premium branding and business solutions image for MoBiz.mu in Mauritius showing brand development, presentations, and business launch assets",
    keywords: [
      "Branding Mauritius",
      "Business Plans & Decks",
      "Professional Brand Assets",
    ],
    bullets: [
      "Brand kits, proposals, and investor or pitch presentations",
      "Business plans, CV services, and polished launch assets",
      "Premium positioning for stronger trust and presentation",
    ],
  },
];

function PremiumServiceButton({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.18),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(7,18,38,0.22),0_0_0_1px_rgba(243,215,122,0.08)_inset] active:translate-y-0",
        className
      )}
      aria-label={`Explore ${typeof children === "string" ? children : "service"}`}
    >
      <span className="pointer-events-none absolute inset-[1px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.00)_100%)]" />
      <span className="relative z-10 inline-flex items-center">
        {children}
      </span>
    </Link>
  );
}

export default function ServicesPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="core-services"
      aria-labelledby="core-services-heading"
      className="w-full scroll-mt-24 bg-white py-7 sm:py-8 lg:py-10"
    >
      <Container className="max-w-[1400px]">
        <div className="mx-auto max-w-5xl text-center">
          <h2
            id="core-services-heading"
            className={cn(
              "text-balance text-3xl font-semibold tracking-tight text-[#071226] transition-all duration-700 sm:text-4xl lg:text-[3.4rem] lg:leading-[1.04]",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Our Core Services
          </h2>

          <p
            className={cn(
              "mx-auto mt-4 max-w-4xl text-pretty text-[14px] leading-7 text-[#31425f] transition-all duration-700 delay-100 sm:text-[15px] lg:text-[16px]",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            MoBiz.mu brings together premium business services for Mauritius, Rodrigues, Réunion, and the wider Indian Ocean region — from luxury website design and digital marketing to accounting, logistics, and branding solutions built for serious business growth.
          </p>
        </div>

        <div className="mt-9 space-y-8 sm:mt-10 sm:space-y-10 lg:mt-12 lg:space-y-12">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <article
                key={service.title}
                className={cn(
                  "grid items-stretch gap-5 lg:grid-cols-2 lg:gap-8 xl:gap-10",
                  visible ? "opacity-100" : "opacity-0"
                )}
                style={{ transitionDelay: `${index * 120}ms` }}
              >
                <div
                  className={cn(
                    "transition-all duration-700",
                    visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                    isReversed ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="relative overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_14px_30px_rgba(7,18,38,0.05)]">
                    <div className="relative aspect-[4/3] w-full bg-white p-2 sm:p-3">
                      <Image
                        src={service.imageSrc}
                        alt={service.imageAlt}
                        width={1600}
                        height={1200}
                        priority={index < 2}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/5" />
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/[0.03] to-transparent" />
                  </div>
                </div>

                <div
                  className={cn(
                    "flex h-full min-h-[250px] flex-col justify-center transition-all duration-700 sm:min-h-[320px] lg:min-h-[390px]",
                    visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                    isReversed ? "lg:order-1" : "lg:order-2"
                  )}
                  style={{ transitionDelay: `${120 + index * 120}ms` }}
                >
                  <div
                    className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#8b6a18] sm:text-[11px]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {service.eyebrow}
                  </div>

                  <h3
                    className="mt-3 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.2rem] lg:text-[2.45rem] lg:leading-[1.06]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="mt-4 text-[14px] leading-7 text-slate-600 sm:text-[15px] lg:text-[15.5px]"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {service.description}
                  </p>

                  <div className="mt-5 grid gap-2.5">
                    {service.bullets.map((bullet) => (
                      <div key={bullet} className="flex items-start gap-3">
                        <div className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#071226] text-[#f3d77a] shadow-[0_10px_20px_rgba(7,18,38,0.12)]">
                          <Sparkles className="h-3.5 w-3.5" />
                        </div>
                        <div
                          className="text-sm leading-6 text-slate-700"
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {bullet}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.keywords.map((keyword) => (
                      <span
                        key={keyword}
                        className="rounded-full border border-[#d7dee9] bg-[#f8fafc] px-3 py-1.5 text-[11px] font-medium text-[#071226] sm:text-xs"
                        style={{ fontFamily: '"Poppins", sans-serif' }}
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6">
                    <PremiumServiceButton href={service.href} className="min-w-[185px]">
                      Explore Service
                      <ArrowRight className="ml-2 h-4 w-4 text-[#f3d77a] transition-transform duration-300 group-hover:translate-x-0.5" />
                    </PremiumServiceButton>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}