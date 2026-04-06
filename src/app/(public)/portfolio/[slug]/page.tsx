import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { getPublishedPortfolioItems } from "@/lib/content";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Globe,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

type PortfolioItem = {
  id: string;
  slug: string;
  title: string;
  description?: string | null;
  category?: string | null;
  featured_image_url?: string | null;
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

function categoryLabel(value?: string | null) {
  return value?.trim() || "Project";
}

function projectDescription(value?: string | null) {
  return (
    value?.trim() ||
    "A premium MoBiz.mu project shaped around stronger business presentation, clearer communication, and a more executive digital experience."
  );
}

function buildProjectSections(project: PortfolioItem) {
  const category = categoryLabel(project.category);

  return {
    overview: `This ${category.toLowerCase()} project reflects the kind of premium business presentation MoBiz.mu aims to bring to every engagement. The focus is not only on visual style, but also on trust, structure, clarity, and how the overall experience supports stronger business growth.`,
    challenge:
      "Many businesses struggle with presentation that feels generic, inconsistent, or not aligned with the level of professionalism they want to project. A weaker digital presence can reduce trust, create confusion, and make it harder for visitors to convert into leads.",
    solution: `For this project, the goal was to create a more polished and executive result through cleaner visual hierarchy, stronger content presentation, more strategic structure, and a more premium user experience. This helps the brand feel more established and more aligned with modern expectations.`,
    outcome:
      "The final direction supports stronger credibility, better communication, improved market positioning, and a more confident business presence that is easier for visitors to trust and understand.",
  };
}

function PortfolioItemJsonLd({ project }: { project: PortfolioItem }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    url: `${siteUrl}/portfolio/${project.slug}`,
    image: project.featured_image_url || undefined,
    description: projectDescription(project.description),
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

export async function generateStaticParams() {
  const rawProjects = await getPublishedPortfolioItems();
  const projects = (rawProjects ?? []) as PortfolioItem[];

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const rawProjects = await getPublishedPortfolioItems();
  const projects = (rawProjects ?? []) as PortfolioItem[];
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Portfolio Project | MoBiz.mu",
      description: "Selected premium portfolio work by MoBiz.mu.",
    };
  }

  return {
    title: `${project.title} | Portfolio | MoBiz.mu`,
    description: projectDescription(project.description),
    alternates: {
      canonical: `${siteUrl}/portfolio/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | MoBiz.mu Portfolio`,
      description: projectDescription(project.description),
      url: `${siteUrl}/portfolio/${project.slug}`,
      siteName: "MoBiz.mu",
      type: "article",
      images: project.featured_image_url
        ? [{ url: project.featured_image_url }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | MoBiz.mu Portfolio`,
      description: projectDescription(project.description),
    },
  };
}

export default async function PortfolioProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const rawProjects = await getPublishedPortfolioItems();
  const projects = (rawProjects ?? []) as PortfolioItem[];
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const relatedProjects = projects
    .filter((item) => item.slug !== project.slug)
    .slice(0, 3);

  const sections = buildProjectSections(project);

  return (
    <>
      <PortfolioItemJsonLd project={project} />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_20%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.13),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="mb-6">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition-colors duration-300 hover:text-[#8b6a18]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </div>

            <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr]">
              <div className="max-w-3xl">
                <div className="inline-flex rounded-full border border-[#ead8a1] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18]">
                  {categoryLabel(project.category)}
                </div>

                <h1
                  className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  {project.title}
                </h1>

                <p className="mt-5 max-w-2xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  {projectDescription(project.description)}
                </p>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {[
                    categoryLabel(project.category),
                    "Premium Presentation",
                    "Mobile Friendly",
                    "Business-Focused",
                    "SEO Conscious",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[11px] font-medium text-[#1d2d49] shadow-[0_8px_20px_rgba(7,18,38,0.04)] sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_34px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Request Similar Project
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[30px] border border-[#e4eaf2] bg-white shadow-[0_22px_54px_rgba(7,18,38,0.08)]">
                <div className="relative aspect-[16/11] bg-[#f6f8fc]">
                  <SmartImage
                    src={project.featured_image_url}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-black/0 to-transparent" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Premium Look",
                  text: "This project reflects a cleaner and more executive level of visual and business presentation.",
                  icon: Sparkles,
                },
                {
                  title: "Stronger Clarity",
                  text: "The structure is intended to communicate value more clearly and reduce friction for the visitor.",
                  icon: Globe,
                },
                {
                  title: "Better Trust",
                  text: "A more polished experience can improve credibility and make a business feel more established.",
                  icon: BadgeCheck,
                },
                {
                  title: "Growth Intent",
                  text: "The direction is shaped to support brand confidence, conversion, and long-term business growth.",
                  icon: TrendingUp,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-[#e6ebf2] bg-white p-5 shadow-[0_16px_38px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2
                      className="mt-4 text-lg font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              {[
                {
                  title: "Project Overview",
                  text: sections.overview,
                },
                {
                  title: "The Challenge",
                  text: sections.challenge,
                },
                {
                  title: "Our Direction",
                  text: sections.solution,
                },
                {
                  title: "Expected Outcome",
                  text: sections.outcome,
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-[28px] border border-[#e6ebf2] bg-white p-6 shadow-[0_16px_38px_rgba(7,18,38,0.05)] sm:p-7"
                >
                  <h2
                    className="text-2xl font-semibold tracking-tight text-[#071226]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.title}
                  </h2>
                  <p className="mt-4 text-[15px] leading-8 text-[#44556f]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-6 text-white shadow-[0_26px_60px_rgba(7,18,38,0.18)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Why It Matters
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.8rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Stronger Presentation Creates Stronger Business Perception
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  In many cases, the difference between average and premium
                  perception comes from how a business presents itself visually,
                  structurally, and strategically. This project reflects that same
                  principle: better presentation helps businesses feel more
                  trustworthy, more serious, and more ready for growth.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Improves brand confidence",
                    "Supports stronger inquiry intent",
                    "Creates a more polished first impression",
                    "Helps align design with business ambition",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#f3d77a]" />
                      <p className="text-sm leading-7 text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  {
                    title: "Website Design",
                    href: "/services/website-design",
                    icon: Globe,
                  },
                  {
                    title: "Digital Marketing",
                    href: "/services/digital-marketing",
                    icon: Search,
                  },
                  {
                    title: "Branding Solutions",
                    href: "/services/branding-business-solutions",
                    icon: Sparkles,
                  },
                  {
                    title: "Business Support",
                    href: "/services/accounting-tax-returns",
                    icon: BriefcaseBusiness,
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="group rounded-2xl border border-white/10 bg-white/8 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/12"
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#f3d77a]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                      <div className="mt-2 inline-flex items-center gap-1 text-sm text-white/74 group-hover:text-[#f3d77a]">
                        Explore
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        {relatedProjects.length > 0 ? (
          <section className="py-10 sm:py-12 lg:py-14">
            <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-4xl text-center">
                <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  Related Portfolio Projects
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Explore More Selected Work
                </h2>
              </div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedProjects.map((item) => (
                  <article
                    key={item.id}
                    className="group overflow-hidden rounded-[28px] border border-[#e4eaf2] bg-white shadow-[0_18px_44px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(7,18,38,0.09)]"
                  >
                    <Link href={`/portfolio/${item.slug}`} className="block">
                      <div className="relative h-56 bg-[#f6f8fc]">
                        <SmartImage
                          src={item.featured_image_url}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>

                      <div className="p-6">
                        <div className="inline-flex rounded-full border border-[#ead8a1] bg-[#fff9ea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18]">
                          {categoryLabel(item.category)}
                        </div>

                        <h3
                          className="mt-4 text-xl font-semibold tracking-tight text-[#071226]"
                          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                        >
                          {item.title}
                        </h3>

                        <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                          {projectDescription(item.description)}
                        </p>

                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition-colors duration-300 group-hover:text-[#8b6a18]">
                          View Project
                          <ArrowRight className="h-4 w-4 text-[#c9a648] transition-transform duration-300 group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <section className="py-14 sm:py-16 lg:py-18">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-7 text-center shadow-[0_20px_46px_rgba(7,18,38,0.05)] sm:p-9 lg:p-12">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Want Similar Results?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Create a Project That Elevates Your Business
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  If you want your business to look more premium, more trusted, and
                  more growth-ready online, MoBiz.mu can help you build a cleaner,
                  stronger, and more executive digital experience.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_32px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/portfolio"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Back to Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}