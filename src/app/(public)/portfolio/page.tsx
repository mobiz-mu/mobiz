import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { CTASection } from "@/components/ui/CTASection";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { portfolioItems } from "@/lib/portfolio";

export const metadata: Metadata = buildMetadata({
  title: "Portfolio | Websites and Business Systems in Mauritius | MoBiz.mu",
  description:
    "Selected websites, ecommerce stores and business systems MoBiz.mu has built for companies in Mauritius.",
  path: "/portfolio",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Portfolio" }];

/**
 * Portfolio listing.
 *
 * Image-led and deliberately large — this page's job is to be looked at. Motion
 * is restrained (a single stagger, a slow scale on hover) so the work carries
 * the page rather than the effects.
 *
 * No invented metrics anywhere: every project shows only what the real data
 * records.
 */
export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Selected work"
        title="Projects built for real Mauritian businesses"
        subtitle="Websites, ecommerce stores and internal business systems — built to be used, not just launched."
        breadcrumbs={breadcrumbs}
        primaryCta={{ label: "Start a project", href: "/contact" }}
        whatsappMessage="Hello Mobiz, I saw your portfolio and would like to discuss a project."
      />

      <Section spacing="default" className="bg-ink-950">
        <Container>
          <StaggerGroup as="ul" className="grid gap-6 md:grid-cols-2">
            {portfolioItems.map((project, index) => (
              <StaggerItem
                key={project.slug}
                as="li"
                direction={index % 2 === 0 ? "left" : "right"}
                // Alternating tall/short cells keep this from reading as a plain grid.
                className={index % 3 === 0 ? "md:col-span-2" : undefined}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-0 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-line-brand"
                >
                  <SmartImage
                    src={project.image}
                    alt=""
                    width={1200}
                    height={index % 3 === 0 ? 620 : 780}
                    rounded="none"
                    priority={index === 0}
                    sizes={index % 3 === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                    className="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-brand-bright">
                      {project.category}
                    </span>
                    <h2 className="text-xl font-bold leading-snug tracking-tight text-text-primary sm:text-2xl">
                      {project.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      {project.shortDescription}
                    </p>
                    <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                      View project
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <CTASection
        title="Have a project in mind?"
        description="Tell us what you are trying to build. We will tell you honestly what it takes and what it would cost."
        whatsappMessage="Hello Mobiz, I would like to discuss a project for my business."
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
