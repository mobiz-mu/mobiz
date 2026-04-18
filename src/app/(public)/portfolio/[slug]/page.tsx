import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { portfolioItems, type PortfolioProject } from "@/lib/portfolio";
import { ArrowLeft, ArrowRight, Globe, Sparkles } from "lucide-react";

const siteUrl = "https://mobiz.mu";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return portfolioItems.map((project) => ({
     slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Portfolio Project | MoBiz.mu",
      description: "Selected premium project by MoBiz.mu.",
    };
  }

  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: `${siteUrl}/portfolio/${project.slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: project.seoTitle,
      description: project.seoDescription,
      url: `${siteUrl}/portfolio/${project.slug}`,
      siteName: "MoBiz.mu",
      type: "article",
      images: [{ url: `${siteUrl}${project.image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.seoDescription,
    },
  };
}

function PortfolioItemJsonLd({ project }: { project: PortfolioProject }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${siteUrl}/portfolio/${project.slug}`,
    image: `${siteUrl}${project.image}`,
    description: project.fullDescription,
    creator: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = portfolioItems.find((item) => item.slug === slug);

  if (!project) notFound();

  const relatedProjects = portfolioItems
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  return (
    <>
      <PortfolioItemJsonLd project={project} />

      <main className="bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_20%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mb-4">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition-colors duration-300 hover:text-[#8b6a18]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </div>

            <div className="grid items-center gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-[#ead8a1] bg-[#fff9ea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]">
                  {project.category}
                </div>

                <h1
                  className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.5rem] lg:text-[3rem] lg:leading-[1.05]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  {project.title}
                </h1>

                <p className="mt-4 max-w-2xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  {project.fullDescription}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.16)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Request Similar Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  {project.showVisitWebsite && project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                    >
                      <Globe className="mr-2 h-4 w-4" />
                      {project.previewLabel || "Visit Website"}
                    </a>
                  ) : null}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[28px] border border-[#e4eaf2] bg-white shadow-[0_18px_40px_rgba(7,18,38,0.07)]">
                <div className="relative aspect-[16/11] bg-[#f6f8fc]">
                  <SmartImage
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 lg:grid-cols-2">
              {[
                { title: "Project Overview", text: project.overview },
                { title: "The Challenge", text: project.challenge },
                { title: "Our Direction", text: project.solution },
                { title: "Expected Outcome", text: project.outcome },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)] sm:p-6"
                >
                  <h2
                    className="text-[1.35rem] font-semibold tracking-tight text-[#071226] sm:text-[1.5rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        {relatedProjects.length > 0 ? (
          <section className="py-6 sm:py-8 lg:py-10">
            <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Related Projects
                  </div>

                  <h2
                    className="mt-3 text-[1.8rem] font-semibold tracking-tight text-[#071226] sm:text-[2.2rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    Explore More Selected Work
                  </h2>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {relatedProjects.map((item, index) => (
                  <article
                    key={item.slug}
                    className="overflow-hidden rounded-[24px] border border-[#e4eaf2] bg-white shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                  >
                    <Link href={`/portfolio/${item.slug}`} className="block">
                      <div className="relative h-56 bg-[#f6f8fc]">
                        <SmartImage
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 33vw"
                          priority={index === 0}
                        />
                      </div>

                      <div className="p-5">
                        <div className="inline-flex rounded-full border border-[#ead8a1] bg-[#fff9ea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18]">
                          {item.category}
                        </div>

                        <h3
                          className="mt-3 text-[1.2rem] font-semibold tracking-tight text-[#071226]"
                          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                          {item.shortDescription}
                        </p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        ) : null}
      </main>
    </>
  );
}