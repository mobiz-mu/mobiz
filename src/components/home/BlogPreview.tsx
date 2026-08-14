import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SmartImage } from "@/components/ui/SmartImage";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { blogPosts } from "@/lib/blog";

/**
 * Latest insights.
 *
 * Editorial treatment — image, category, title, excerpt — with restrained
 * motion, matching how the blog itself behaves.
 */
export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <Section deferPaint spacing="default" className="bg-ink-950" aria-labelledby="insights-heading">
      <Container className="relative">
        <div className="mb-11 flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="insights-heading"
              eyebrow="Insights"
              title="Practical thinking for Mauritian businesses."
              className="mb-0"
            />
          </Reveal>
          <Reveal direction="right">
            <ButtonLink href="/blog" variant="secondary" withArrow>
              Read the blog
            </ButtonLink>
          </Reveal>
        </div>

        <StaggerGroup as="ul" className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <StaggerItem key={post.slug} as="li" direction="up">
              <Link href={post.href} className="group flex h-full flex-col">
                <SmartImage
                  src={post.imageSrc}
                  alt=""
                  width={800}
                  height={500}
                  rounded="lg"
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <span className="mt-5 font-mono text-[9px] uppercase tracking-widest text-brand-bright">
                  {post.category}
                </span>
                <h3 className="mt-2.5 text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-brand-mid">
                  {post.title}
                </h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-secondary">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-text-muted transition-colors group-hover:text-text-primary">
                  Read article
                  <ArrowUpRight aria-hidden className="size-3.5" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Container>
    </Section>
  );
}

export default BlogPreview;
