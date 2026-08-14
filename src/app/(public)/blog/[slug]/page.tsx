import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SmartImage } from "@/components/ui/SmartImage";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTASection } from "@/components/ui/CTASection";
import { TechBackground } from "@/components/visual/TechBackground";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { blogPosts } from "@/lib/blog";
import { getArticleBody } from "@/lib/blog-articles";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return buildMetadata({
    title: `${post.title} | MoBiz.mu`,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    article: { modifiedTime: post.updatedAt },
  });
}

/**
 * Blog article.
 *
 * The calmest page on the site by design: `calm` background (fine grid only, no
 * Data Highway), a 720px reading measure, no scroll animation behind the text,
 * and generous line height. Everything Tech Orbit is confined to the header
 * strip and the closing CTA.
 *
 * `datePublished` is omitted from the Article schema — the source data only
 * carries `updatedAt`, and inventing a publish date would be fabricating a fact.
 */
export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const body = getArticleBody(post.slug);
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `${SITE_URL}${post.imageSrc}`,
    url: `${SITE_URL}/blog/${post.slug}`,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@id": `${SITE_URL}/#organization` },
    ...(post.updatedAt ? { dateModified: post.updatedAt } : {}),
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <header className="relative overflow-hidden border-b border-line-faint bg-ink-950">
        <TechBackground variant="calm" />
        <Container size="prose" className="relative pb-12 pt-[calc(68px+2.5rem)]">
          <Breadcrumbs items={breadcrumbs} className="mb-8" />
          <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-brand">
            {post.category} · {body.readTime}
          </p>
          <h1 className="enter-lcp text-[clamp(1.875rem,4.2vw,3rem)] font-bold leading-[1.08] tracking-tight text-text-primary text-balance">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-text-secondary text-pretty">
            {body.intro}
          </p>
          {post.updatedAt ? (
            <p className="mt-6 font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Updated{" "}
              <time dateTime={post.updatedAt}>
                {new Date(post.updatedAt).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                })}
              </time>
            </p>
          ) : null}
        </Container>
      </header>

      <Section spacing="calm" className="bg-ink-950">
        <Container size="prose">
          <SmartImage
            src={post.imageSrc}
            alt={post.imageAlt}
            width={1200}
            height={675}
            rounded="lg"
            priority
            sizes="(min-width: 768px) 720px, 100vw"
          />

          <div className="mt-12 space-y-10">
            {body.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-xl font-bold leading-snug tracking-tight text-text-primary sm:text-2xl">
                  {section.title}
                </h2>
                <div className="space-y-4">
                  {section.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-[1.75] text-text-secondary text-pretty"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.bullets?.length ? (
                  <ul className="mt-5 space-y-2.5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span
                          aria-hidden
                          className="mt-2 size-1.5 shrink-0 rounded-full bg-brand"
                        />
                        <span className="text-base leading-relaxed text-text-body">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </Section>

      {related.length ? (
        <Section spacing="calm" className="border-t border-line-faint bg-ink-900">
          <Container>
            <h2 className="mb-8 font-mono text-[10px] uppercase tracking-widest text-text-muted">
              Related reading
            </h2>
            <ul className="grid gap-6 sm:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link href={item.href} className="group flex h-full flex-col">
                    <SmartImage
                      src={item.imageSrc}
                      alt=""
                      width={800}
                      height={500}
                      rounded="lg"
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                    <span className="mt-4 font-mono text-[9px] uppercase tracking-widest text-brand">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-base font-bold leading-snug text-text-primary transition-colors group-hover:text-brand-mid">
                      {item.title}
                    </h3>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CTASection
        title="Want help applying this?"
        description="Tell us where your business is now and we will give you a straight view of what would make the most difference."
        whatsappMessage={`Hello Mobiz, I read your article "${post.title}" and would like to discuss my business.`}
      />

      <JsonLd data={articleSchema} />
      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
