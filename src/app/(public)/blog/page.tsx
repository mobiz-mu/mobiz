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
import { blogPosts } from "@/lib/blog";
import { getArticleBody } from "@/lib/blog-articles";

export const metadata: Metadata = buildMetadata({
  title: "Blog & Insights | Business and Digital Advice for Mauritius | MoBiz.mu",
  description:
    "Practical articles on website design, digital marketing, SEO, accounting, inventory and business systems for companies operating in Mauritius.",
  path: "/blog",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Blog" }];

/**
 * Blog listing.
 *
 * Editorial treatment: the newest post leads at full width, the rest follow in a
 * three-up grid. Motion is restrained here and quieter still inside articles.
 */
export default function BlogPage() {
  const [lead, ...rest] = blogPosts;
  if (!lead) return null;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Practical thinking for Mauritian businesses"
        subtitle="Articles on presentation, marketing, accounting and the systems that make a business easier to run."
        breadcrumbs={breadcrumbs}
        background="calm"
      />

      <Section spacing="default" className="bg-ink-950">
        <Container>
          <Link
            href={lead.href}
            className="group grid overflow-hidden rounded-2xl border border-line bg-surface-0 transition-colors hover:border-line-brand lg:grid-cols-[1.2fr_1fr]"
          >
            <SmartImage
              src={lead.imageSrc}
              alt=""
              width={1200}
              height={750}
              rounded="none"
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="transition-transform duration-700 group-hover:scale-[1.03]"
            />
            <div className="flex flex-col justify-center gap-4 p-7 sm:p-10">
              <span className="font-mono text-[10px] uppercase tracking-widest text-brand">
                {lead.category} · {getArticleBody(lead.slug).readTime}
              </span>
              <h2 className="text-2xl font-bold leading-tight tracking-tight text-text-primary sm:text-3xl">
                {lead.title}
              </h2>
              <p className="text-sm leading-relaxed text-text-secondary sm:text-base">
                {lead.excerpt}
              </p>
              <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-text-primary">
                Read article
                <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          <StaggerGroup as="ul" className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <StaggerItem key={post.slug} as="li" direction="up">
                <Link href={post.href} className="group flex h-full flex-col">
                  <SmartImage
                    src={post.imageSrc}
                    alt=""
                    width={800}
                    height={500}
                    rounded="lg"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="mt-5 font-mono text-[9px] uppercase tracking-widest text-brand">
                    {post.category} · {getArticleBody(post.slug).readTime}
                  </span>
                  <h2 className="mt-2.5 text-lg font-bold leading-snug text-text-primary transition-colors group-hover:text-brand-mid">
                    {post.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-secondary">
                    {post.excerpt}
                  </p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      <CTASection
        title="Want this applied to your business?"
        description="We can look at where your business stands online and tell you honestly what would make the biggest difference."
        whatsappMessage="Hello Mobiz, I was reading your blog and would like to discuss my business."
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
