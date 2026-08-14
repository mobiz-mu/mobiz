import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./Container";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export type InternalLink = {
  title: string;
  href: string;
  description?: string;
};

type InternalLinksProps = {
  title?: string;
  eyebrow?: string;
  links: InternalLink[];
  className?: string;
};

/**
 * Contextual internal linking between related pages.
 *
 * Present on every SEO and service page: it is how link equity moves between
 * the national, industry and city pages, and it is genuinely useful navigation
 * rather than a footer link dump.
 */
export function InternalLinks({
  title = "Related solutions",
  eyebrow = "Explore more",
  links,
  className,
}: InternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <Section spacing="default" className={cn("border-t border-line-faint", className)}>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link, index) => (
            <li key={link.href}>
              <Reveal delay={Math.min(index, 5) * 0.05}>
                <Link
                  href={link.href}
                  className="group flex h-full items-start justify-between gap-4 rounded-md border border-line bg-surface-0 p-5 transition-colors hover:border-line-brand hover:bg-surface-1"
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-text-primary">
                      {link.title}
                    </span>
                    {link.description ? (
                      <span className="mt-1.5 block text-xs leading-relaxed text-text-muted">
                        {link.description}
                      </span>
                    ) : null}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 shrink-0 text-text-faint transition-colors group-hover:text-brand-mid"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default InternalLinks;
