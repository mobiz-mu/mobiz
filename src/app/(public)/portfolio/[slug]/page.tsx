import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ButtonLink } from "@/components/ui/Button";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { TechBackground } from "@/components/visual/TechBackground";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { portfolioItems } from "@/lib/portfolio";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return portfolioItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);
  if (!project) notFound();

  return buildMetadata({
    title: project.seoTitle ?? `${project.title} | Portfolio | MoBiz.mu`,
    description: project.seoDescription ?? project.shortDescription,
    path: `/portfolio/${project.slug}`,
  });
}

/**
 * Portfolio detail.
 *
 * Project-first: large hero image, then the narrative the real data records —
 * overview, challenge, solution, outcome. Sections are only rendered when the
 * data actually has them, so a project with less recorded detail simply shows
 * less rather than getting filler.
 *
 * The "outcome" text is the client-approved description from the source data.
 * No performance figures are added.
 */
export default async function PortfolioDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = portfolioItems.find((p) => p.slug === slug);
  if (!project) notFound();

  const related = portfolioItems.filter((p) => p.slug !== project.slug).slice(0, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio" },
    { label: project.title },
  ];

  const narrative = [
    { title: "Overview", body: project.overview },
    { title: "The challenge", body: project.challenge },
    { title: "What we did", body: project.solution },
    { title: "The result", body: project.outcome },
  ].filter((block): block is { title: string; body: string } => Boolean(block.body));

  return (
    <>
      <header className="relative overflow-hidden border-b border-line-faint bg-ink-950">
        <TechBackground variant="service" />
        <Container className="relative pb-12 pt-[calc(68px+2.5rem)]">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <div className="max-w-3xl">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
              {project.category}
            </p>
            <h1 className="enter-lcp mb-5 text-[clamp(2rem,4.6vw,3.5rem)] font-bold leading-[1.04] tracking-tight text-text-primary text-balance">
              {project.title}
            </h1>
            <p className="text-lg leading-relaxed text-text-secondary text-pretty">
              {project.fullDescription}
            </p>

            {project.showVisitWebsite && project.liveUrl ? (
              <div className="mt-8">
                <ButtonLink href={project.liveUrl} external>
                  {project.previewLabel ?? "Visit website"}
                  <ExternalLink aria-hidden className="size-4" />
                </ButtonLink>
              </div>
            ) : null}
          </div>
        </Container>
      </header>

      <Section spacing="default" className="bg-ink-950">
        <Container>
          <Reveal direction="scale">
            <SmartImage
              src={project.image}
              alt={`${project.title} — project cover`}
              width={1600}
              height={1000}
              rounded="2xl"
              priority
              sizes="(min-width: 1320px) 1320px, 100vw"
            />
          </Reveal>

          {narrative.length ? (
            <div className="mx-auto mt-14 max-w-[760px] space-y-10">
              {narrative.map((block) => (
                <Reveal key={block.title}>
                  <h2 className="mb-3.5 text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                    {block.title}
                  </h2>
                  <p className="text-base leading-[1.75] text-text-secondary text-pretty">
                    {block.body}
                  </p>
                </Reveal>
              ))}
            </div>
          ) : null}
        </Container>
      </Section>

      {related.length ? (
        <Section spacing="calm" className="border-t border-line-faint bg-ink-900">
          <Container>
            <h2 className="mb-8 font-mono text-[10px] uppercase tracking-widest text-text-muted">
              More work
            </h2>
            <ul className="grid gap-5 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/portfolio/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface-0 transition-[transform,border-color] duration-300 hover:-translate-y-1.5 hover:border-line-brand"
                  >
                    <SmartImage
                      src={item.image}
                      alt=""
                      width={800}
                      height={520}
                      rounded="none"
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="flex flex-1 flex-col gap-2 p-5">
                      <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                        {item.category}
                      </span>
                      <h3 className="text-base font-bold leading-snug text-text-primary">
                        {item.title}
                      </h3>
                      <span className="mt-auto inline-flex items-center gap-1.5 pt-3 text-xs font-semibold text-text-muted transition-colors group-hover:text-text-primary">
                        View project
                        <ArrowUpRight aria-hidden className="size-3.5" />
                      </span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CTASection
        title="Want something like this?"
        description="Tell us what you are trying to build and we will come back with a clear recommendation."
        whatsappMessage={`Hello Mobiz, I saw the ${project.title} project and would like to discuss something similar.`}
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
