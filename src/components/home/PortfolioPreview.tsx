import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { portfolioItems } from "@/lib/portfolio";

/**
 * Selected work.
 *
 * A bento layout — the first project runs full width on desktop, the rest sit in
 * a three-up row — so this doesn't read as another identical card grid.
 *
 * Descriptions come from the real portfolio data. No invented metrics, no
 * fabricated outcomes.
 */
export function PortfolioPreview() {
  const [lead, ...rest] = portfolioItems.slice(0, 4);
  if (!lead) return null;

  return (
    <Section spacing="flagship" className="bg-ink-950" aria-labelledby="work-heading">
      <span aria-hidden className="absolute inset-0 tech-grid-fine" />

      <Container className="relative">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="work-heading"
              eyebrow="Selected work"
              title="Projects built for real Mauritian businesses."
              className="mb-0"
            />
          </Reveal>
          <Reveal direction="right">
            <ButtonLink href="/portfolio" variant="secondary" withArrow>
              View full portfolio
            </ButtonLink>
          </Reveal>
        </div>

        {/* Lead project */}
        <Reveal direction="scale">
          <Link
            href={`/portfolio/${lead.slug}`}
            className="group relative grid overflow-hidden rounded-2xl border border-line bg-surface-0 transition-colors hover:border-line-brand lg:grid-cols-[1.3fr_1fr]"
          >
            <SmartImage
              src={lead.image}
              alt=""
              width={1200}
              height={750}
              rounded="none"
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
                {lead.category}
              </span>
              <h3 className="text-2xl font-bold leading-tight tracking-tight text-text-primary sm:text-3xl">
                {lead.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                {lead.shortDescription}
              </p>
              <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                View project
                <ArrowUpRight
                  aria-hidden
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </Link>
        </Reveal>

        {/* Supporting row */}
        <StaggerGroup className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" as="ul">
          {rest.map((project) => (
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
                <div className="flex flex-1 flex-col gap-2.5 p-5">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-text-muted">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold leading-snug text-text-primary">
                    {project.title}
                  </h3>
                  <p className="line-clamp-3 text-xs leading-relaxed text-text-secondary">
                    {project.shortDescription}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}

export default PortfolioPreview;
