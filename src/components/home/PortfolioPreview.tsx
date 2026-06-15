"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

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
    title: "Corporate Website Experience",
    category: "Website Design",
    description:
      "Premium website presentation built for stronger trust, cleaner navigation, and better online credibility.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/cards/website-portfolio.webp",
    imageAlt:
      "Premium 3D vector website portfolio illustration for MoBiz.mu Mauritius",
  },
  {
    title: "E-Commerce Storefront",
    category: "E-Commerce",
    description:
      "Modern online store experience with clean product display, smooth browsing, and conversion-focused structure.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/cards/ecommerce-portfolio.webp",
    imageAlt:
      "Premium 3D vector e-commerce portfolio illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Accounting Workflow",
    category: "Accounting",
    description:
      "Structured finance and business support presentation for companies needing clearer operations and compliance.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/cards/accounting-portfolio.webp",
    imageAlt:
      "Premium 3D vector accounting portfolio illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Digital Growth Strategy",
    category: "Digital Marketing",
    description:
      "Campaign planning, SEO visibility, and online growth support designed for serious business lead generation.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/cards/digital-marketing-portfolio.webp",
    imageAlt:
      "Premium 3D vector digital marketing portfolio illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Logistics Operations",
    category: "Logistics",
    description:
      "Import, export, sourcing, delivery coordination, and operations support for smoother business movement.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/cards/logistics-portfolio.webp",
    imageAlt:
      "Premium 3D vector logistics portfolio illustration for MoBiz.mu Mauritius",
  },
  {
    title: "Branding & Business Assets",
    category: "Branding",
    description:
      "Brand identity, business profiles, proposals, and launch assets designed to make companies look established.",
    href: "/portfolio",
    imageSrc: "/images/portfolio/cards/branding-portfolio.webp",
    imageAlt:
      "Premium 3D vector branding portfolio illustration for MoBiz.mu Mauritius",
  },
];

function PortfolioCard({
  project,
  index,
  visible,
}: {
  project: ProjectItem;
  index: number;
  visible: boolean;
}) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[26px] border border-[#e7edf7] bg-white shadow-[0_18px_45px_rgba(7,18,38,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(7,18,38,0.13)]",
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      )}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d92121] via-[#f8d75a] to-[#13a37f]" />

      <div className="relative m-3 mb-0 aspect-[1.58/1] overflow-hidden rounded-[20px] bg-[#eef5ff]">
        <Image
          src={project.imageSrc}
          alt={project.imageAlt}
          fill
          priority={index < 3}
          loading={index < 3 ? "eager" : "lazy"}
          fetchPriority={index < 3 ? "high" : "auto"}
          quality={75}
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.035]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071226]/8 via-transparent to-white/10" />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-4">
        <div
          className="inline-flex w-fit rounded-full border border-[#e8d9b1] bg-[#fffdf7] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8b6a18]"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          {project.category}
        </div>

        <h3
          className="mt-3 text-[1.25rem] font-bold tracking-tight text-[#071f5f] sm:text-[1.35rem]"
          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
        >
          {project.title}
        </h3>

        <p
          className="mt-2.5 min-h-[78px] text-[13.5px] leading-6 text-slate-600 sm:text-[14px]"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          {project.description}
        </p>

        <Link
          href={project.href}
          className="group/link mt-auto inline-flex w-fit items-center gap-2 rounded-full bg-[#071226] px-4 py-2.5 text-[13px] font-bold text-[#f8d75a] shadow-[0_12px_24px_rgba(7,18,38,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2b63]"
          aria-label={`View portfolio project: ${project.title}`}
        >
          View Project
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export default function PortfolioPreview() {
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
      id="portfolio-preview"
      aria-labelledby="portfolio-preview-heading"
      className="w-full bg-white py-10 sm:py-12 lg:py-14"
    >
      <Container className="max-w-[1520px]">
        <div className="mx-auto max-w-4xl text-center">
          <div
            className={cn(
              "text-[11px] font-bold uppercase tracking-[0.28em] text-[#d92121] transition-all duration-700",
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
            )}
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Selected Work
          </div>

          <h2
            id="portfolio-preview-heading"
            className={cn(
              "mt-3 text-balance text-3xl font-bold tracking-tight text-[#071f5f] transition-all duration-700 sm:text-4xl lg:text-[3rem] lg:leading-[1.05]",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Our Portfolio
          </h2>

          <p
            className={cn(
              "mx-auto mt-4 max-w-3xl text-pretty text-[14px] leading-7 text-slate-600 transition-all duration-700 delay-100 sm:text-[15px]",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            A compact look at the type of premium digital and business solutions MoBiz.mu creates for Mauritius businesses.
          </p>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.title}
              project={project}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        <div
          className={cn(
            "mt-8 flex justify-center transition-all duration-700 delay-150",
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          <Link
            href="/portfolio"
            className="group inline-flex items-center gap-2 rounded-full border border-[#d9c27c] bg-[#071226] px-5 py-3 text-sm font-bold text-[#f8d75a] shadow-[0_14px_28px_rgba(7,18,38,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0b2b63]"
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4 text-[#f8d75a] transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
