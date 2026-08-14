import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import {
  BenefitList,
  FeatureGrid,
  IndustryList,
  ProcessSteps,
  ProseSection,
} from "@/components/page/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { FAQSection } from "@/components/ui/FAQSection";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ServiceVisual } from "@/components/visual/ServiceVisual";
import { JsonLd, buildFaqSchema, buildServiceSchema } from "@/lib/services/schema";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { getServiceDivision } from "@/lib/navigation";
import { portfolioItems } from "@/lib/portfolio";
import type { ServicePageContent } from "@/lib/services/types";

/**
 * Template for the five service pillar pages.
 *
 * These are the top of the hub-and-spoke structure — every SEO landing page
 * breadcrumbs up to one of them — so they carry the fullest treatment: a
 * division-specific 3D visual world in the hero, the overview, categories,
 * process, benefits, industries, real portfolio work, FAQ and related links.
 *
 * All content is the existing production copy from `lib/services/*`. The accent
 * and visual world come from the division record, so each of the five reads as
 * a different story told in the same language.
 */
export function ServicePillarPage({ content }: { content: ServicePageContent }) {
  const division = getServiceDivision(content.divisionId);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: content.breadcrumbLabel },
  ];

  const projects = content.portfolioSlugs
    .map((slug) => portfolioItems.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <PageHero
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        subtitle={content.hero.intro}
        breadcrumbs={breadcrumbs}
        accent={division.accent}
        visual={<ServiceVisual division={content.divisionId} />}
        bullets={content.hero.highlights}
        primaryCta={content.hero.primaryCta}
        whatsappMessage={`Hello Mobiz, I would like to know more about ${division.label}.`}
        background="full"
      />

      <ProseSection
        eyebrow={content.overview.eyebrow}
        title={content.overview.title}
        paragraphs={content.overview.paragraphs}
        surface="raised"
      />

      <FeatureGrid
        eyebrow={content.categories.eyebrow}
        title={content.categories.title}
        features={content.categories.items.map((item) => ({
          title: item.title,
          description: item.description,
        }))}
        accent={division.accent}
      />

      <ProcessSteps
        eyebrow={content.process.eyebrow}
        title={content.process.title}
        steps={content.process.steps.map((step) => ({
          title: step.title,
          description: step.text,
        }))}
        accent={division.accent}
      />

      <BenefitList
        eyebrow={content.benefits.eyebrow}
        title={content.benefits.title}
        benefits={content.benefits.items.map((item) => `${item.title} — ${item.text}`)}
        accent={division.accent}
      />

      <IndustryList
        eyebrow={content.industries.eyebrow}
        title={content.industries.title}
        industries={content.industries.items}
        accent={division.accent}
      />

      {projects.length ? (
        <Section spacing="default" deferPaint className="bg-ink-900">
          <Container>
            <Reveal>
              <SectionHeading
                eyebrow="Selected work"
                title="Projects from this division"
                accent={division.accent}
              />
            </Reveal>
            <StaggerGroup as="ul" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <StaggerItem key={project.slug} as="li" direction="up">
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-0 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-line-brand"
                  >
                    <SmartImage
                      src={project.image}
                      alt=""
                      width={800}
                      height={520}
                      rounded="none"
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                        {project.category}
                      </span>
                      <h3 className="text-base font-bold leading-snug text-text-primary">
                        {project.title}
                      </h3>
                      <p className="line-clamp-3 text-xs leading-relaxed text-text-secondary">
                        {project.shortDescription}
                      </p>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-semibold text-text-muted transition-colors group-hover:text-text-primary">
                        View project
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </Container>
        </Section>
      ) : null}

      <FAQSection faqs={content.faqs} />

      {content.relatedLinks ? (
        <InternalLinks
          title={content.relatedLinks.title}
          eyebrow={content.relatedLinks.subtitle}
          links={content.relatedLinks.links.map((link) => ({
            title: link.label,
            href: link.href,
            description: link.description,
          }))}
        />
      ) : null}

      <CTASection
        title={content.cta.title}
        description={content.cta.text}
        whatsappMessage={`Hello Mobiz, I would like to discuss ${division.label} for my business.`}
      />

      <JsonLd data={buildServiceSchema(content, division.label)} />
      {content.faqs.length ? <JsonLd data={buildFaqSchema(content.faqs)} /> : null}
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}

export default ServicePillarPage;
