"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ProjectItem = {
  title: string;
  category: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const projects: ProjectItem[] = [
  {
    title: "Luxury Corporate Website Experience",
    category: "Website Design Mauritius",
    description:
      "Premium multi-device website presentation designed for stronger authority, cleaner user experience, and a more executive digital brand presence in Mauritius.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/porfolio.png",
    imageAlt:
      "Luxury corporate website portfolio project across desktop laptop mobile and tablet for MoBiz.mu in Mauritius",
  },
  {
    title: "Modern E-Commerce Storefront",
    category: "E-Commerce Website Mauritius",
    description:
      "A polished online shopping experience built for stronger product presentation, cleaner browsing, and premium conversion-focused design.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/ecommerce.png",
    imageAlt:
      "Premium e-commerce website portfolio project in Mauritius showing a clean online store and modern shopping interface",
  },
  {
    title: "Executive Accounting Workflow",
    category: "Accounting Services Mauritius",
    description:
      "Professional accounting and finance support positioned with trust, structure, and clarity for businesses that need a more reliable operational image.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/accounting.png",
    imageAlt:
      "Professional accounting and finance portfolio image for Mauritius showing premium office workflow invoicing and business support",
  },
  {
    title: "Digital Growth Strategy Session",
    category: "Digital Marketing Mauritius",
    description:
      "Strategic campaign planning, digital growth consulting, and premium team collaboration tailored for businesses in Mauritius and the Indian Ocean region.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/digital-marketing.png",
    imageAlt:
      "Premium digital marketing strategy portfolio project in Mauritius with campaign planning and business growth collaboration",
  },
  {
    title: "Logistics & Delivery Operations",
    category: "Logistics Solutions Mauritius",
    description:
      "Real-world logistics and delivery coordination presented with a professional service-first approach for smoother customer and business operations.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/logistics.png",
    imageAlt:
      "Professional logistics and delivery portfolio image in Mauritius showing parcel handling and customer service operations",
  },
  {
    title: "Branding & Business Consulting",
    category: "Branding Mauritius",
    description:
      "Business planning, branding direction, and strategic consulting assets shaped to help companies in Mauritius present themselves with more confidence.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/branding.png",
    imageAlt:
      "Premium branding and business consulting portfolio image in Mauritius showing strategy documents and brand planning session",
  },
];

function chunkProjects(items: ProjectItem[], size: number) {
  const chunks: ProjectItem[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

function PortfolioCard({
  project,
  className,
}: {
  project: ProjectItem;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e2e8f0] bg-white shadow-[0_14px_34px_rgba(7,18,38,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_22px_48px_rgba(7,18,38,0.10)]",
        className
      )}
    >
      <div className="relative h-[220px] w-full overflow-hidden bg-slate-50 sm:h-[240px] xl:h-[230px]">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          priority={false}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.025]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="inline-flex w-fit rounded-full border border-[#e8d9b1] bg-[#fffdf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]">
          {project.category}
        </div>

        <h3 className="mt-4 min-h-[3.25rem] text-balance text-[1.35rem] font-semibold tracking-tight text-[#071226] sm:text-[1.45rem]">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
          {project.description}
        </p>

        <Link
          href={project.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition hover:text-[#8b6a18]"
          aria-label={`View portfolio project: ${project.title}`}
        >
          View Project
          <ArrowRight className="h-4 w-4 text-[#c9a648] transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

function MobileArrows({
  onPrev,
  onNext,
  disabledPrev,
  disabledNext,
}: {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
}) {
  const base =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300";
  return (
    <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
      <button
        type="button"
        onClick={onPrev}
        disabled={disabledPrev}
        aria-label="Previous portfolio slide"
        className={cn(
          base,
          disabledPrev
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
            : "border-[#d9c27c] bg-[#071226] text-[#f3d77a] shadow-[0_12px_22px_rgba(7,18,38,0.14)] hover:-translate-y-0.5"
        )}
      >
        <ArrowLeft className="h-4.5 w-4.5" />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={disabledNext}
        aria-label="Next portfolio slide"
        className={cn(
          base,
          disabledNext
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
            : "border-[#d9c27c] bg-[#071226] text-[#f3d77a] shadow-[0_12px_22px_rgba(7,18,38,0.14)] hover:-translate-y-0.5"
        )}
      >
        <ArrowRight className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}

export default function PortfolioPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const mobileSlides = useMemo(() => chunkProjects(projects, 2), []);

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

  const goPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () =>
    setActiveIndex((prev) => Math.min(prev + 1, mobileSlides.length - 1));

  return (
    <section
      ref={sectionRef}
      id="portfolio-preview"
      aria-labelledby="portfolio-preview-heading"
      className="w-full bg-white py-7 sm:py-8 lg:py-10"
    >
      <Container className="max-w-[1400px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="portfolio-preview-heading"
            className={cn(
              "text-balance text-3xl font-semibold tracking-tight text-[#071226] transition-all duration-700 sm:text-4xl lg:text-[3rem] lg:leading-[1.04]",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Our Portfolio
          </h2>

          <p
            className={cn(
              "mx-auto mt-4 max-w-3xl text-pretty text-[14px] leading-7 text-slate-600 transition-all duration-700 delay-100 sm:text-[15px] lg:text-[16px]",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Explore selected MoBiz.mu portfolio work across premium website design, e-commerce, digital marketing, accounting support, logistics solutions, and branding services for businesses in Mauritius and the Indian Ocean region.
          </p>
        </div>

        <div className="mt-8 hidden grid-cols-1 gap-5 md:grid md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "h-full transition-all duration-700",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <PortfolioCard project={project} className="h-full" />
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {mobileSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full shrink-0">
                  <div className="grid grid-cols-1 gap-4">
                    {slide.map((project, index) => (
                      <div
                        key={project.title}
                        className={cn(
                          "transition-all duration-700",
                          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        )}
                        style={{ transitionDelay: `${index * 90}ms` }}
                      >
                        <PortfolioCard project={project} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <MobileArrows
            onPrev={goPrev}
            onNext={goNext}
            disabledPrev={activeIndex === 0}
            disabledNext={activeIndex === mobileSlides.length - 1}
          />
        </div>

        <div
          className={cn(
            "mt-7 flex justify-center transition-all duration-700 delay-150",
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-[#d9c27c] bg-[#071226] px-5 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.12)] transition-all duration-300 hover:-translate-y-0.5"
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4 text-[#f3d77a] transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}