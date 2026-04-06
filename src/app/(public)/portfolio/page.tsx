import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { getPublishedPortfolioItems } from "@/lib/content";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  ChevronRight,
  Globe,
  LayoutGrid,
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

export const metadata: Metadata = {
  title:
    "Portfolio Mauritius | Premium Website, Branding, Marketing & Business Projects | MoBiz.mu",
  description:
    "Explore the MoBiz.mu portfolio featuring premium website design, e-commerce, branding, digital marketing, accounting support, logistics solutions, and executive business presentation projects in Mauritius.",
  keywords: [
    "Portfolio Mauritius",
    "Website Design Portfolio Mauritius",
    "Digital Marketing Portfolio Mauritius",
    "Branding Portfolio Mauritius",
    "Business Solutions Portfolio Mauritius",
    "E-commerce Portfolio Mauritius",
    "MoBiz.mu Portfolio",
    "Web Design Mauritius Portfolio",
    "Creative Agency Mauritius Portfolio",
  ],
  alternates: {
    canonical: `${siteUrl}/portfolio`,
  },
  openGraph: {
    title: "MoBiz.mu Portfolio | Premium Digital Business Projects",
    description:
      "View selected MoBiz.mu work across premium websites, branding, digital strategy, and business presentation projects in Mauritius.",
    url: `${siteUrl}/portfolio`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoBiz.mu Portfolio | Premium Digital Business Projects",
    description:
      "Selected premium projects across website design, branding, digital marketing, and business solutions in Mauritius.",
  },
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

function PortfolioJsonLd({ projects }: { projects: PortfolioItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MoBiz.mu Portfolio",
    url: `${siteUrl}/portfolio`,
    description:
      "Selected MoBiz.mu portfolio work across website design, branding, digital marketing, accounting support, logistics, and business solutions in Mauritius.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "CreativeWork",
        position: index + 1,
        name: project.title,
        url: `${siteUrl}/portfolio/${project.slug}`,
        image: project.featured_image_url || undefined,
        description: projectDescription(project.description),
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function PortfolioCard({ project }: { project: PortfolioItem }) {
  return (
    <article className="group h-full overflow-hidden rounded-[28px] border border-[#e4eaf2] bg-white shadow-[0_18px_44px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(7,18,38,0.09)]">
      <Link href={`/portfolio/${project.slug}`} className="block h-full">
        <div className="relative h-60 overflow-hidden bg-[#f6f8fc] sm:h-64">
          <SmartImage
            src={project.featured_image_url}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/0 to-transparent" />
        </div>

        <div className="p-6 sm:p-7">
          <div className="inline-flex rounded-full border border-[#ead8a1] bg-[#fff9ea] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]">
            {categoryLabel(project.category)}
          </div>

          <h2
            className="mt-4 text-balance text-[1.45rem] font-semibold tracking-tight text-[#071226] sm:text-[1.6rem]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            {project.title}
          </h2>

          <p className="mt-3 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
            {projectDescription(project.description)}
          </p>

          <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition-colors duration-300 group-hover:text-[#8b6a18]">
            View Case Study
            <ArrowRight className="h-4 w-4 text-[#c9a648] transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </Link>
    </article>
  );
}

export default async function PortfolioPage() {
  const rawProjects = await getPublishedPortfolioItems();
  const projects = (rawProjects ?? []) as PortfolioItem[];

  return (
    <>
      <PortfolioJsonLd projects={projects} />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.13),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <Sparkles className="h-3.5 w-3.5" />
                MoBiz.mu Portfolio
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Selected Premium Concepts and Digital Business Experiences
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-8 text-[#44556f] sm:text-[16px] lg:text-[17px]">
                Explore selected MoBiz.mu portfolio work across premium website
                design, e-commerce, branding, digital marketing, accounting
                support, logistics solutions, and executive business experiences
                designed for stronger trust, clearer communication, and better
                business growth in Mauritius.
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
                {[
                  "Website Design Mauritius",
                  "Digital Marketing Mauritius",
                  "Branding Mauritius",
                  "E-Commerce Mauritius",
                  "Business Solutions Mauritius",
                  "Executive Digital Experiences",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[11px] font-medium text-[#1d2d49] shadow-[0_8px_20px_rgba(7,18,38,0.04)] sm:text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_34px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Start Your Project
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
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Premium Execution",
                  text: "Our portfolio reflects cleaner design, stronger brand presentation, and more executive digital direction.",
                  icon: Sparkles,
                },
                {
                  title: "Mobile Friendly",
                  text: "Projects are shaped with smoother mobile responsiveness and better visual balance across devices.",
                  icon: Globe,
                },
                {
                  title: "SEO Conscious",
                  text: "We think in terms of structure, visibility, internal linking, and stronger content foundations.",
                  icon: Search,
                },
                {
                  title: "Business Focused",
                  text: "Every project is shaped to improve trust, positioning, lead generation, and long-term growth potential.",
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
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Portfolio Highlights
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                A Portfolio Built Around Trust, Quality, and Business Clarity
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                This portfolio is designed not only to show visuals, but to
                demonstrate the standard of presentation, structure, and business
                thinking that MoBiz.mu brings to each project. From premium
                websites to brand-led business materials, we focus on experiences
                that help companies look more polished and perform better.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <PortfolioCard key={project.id} project={project} />
              ))}
            </div>

            {projects.length === 0 ? (
              <div className="mt-10 rounded-[28px] border border-dashed border-[#d6dee9] bg-white p-8 text-center shadow-[0_12px_28px_rgba(7,18,38,0.04)]">
                <h3 className="text-xl font-semibold text-[#071226]">
                  Portfolio items will appear here soon
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-[#4a5b76]">
                  This area is connected to your published portfolio items and is
                  ready to showcase real case studies as they are added.
                </p>
              </div>
            ) : null}
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-6 text-white shadow-[0_26px_60px_rgba(7,18,38,0.18)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Why This Portfolio Matters
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.8rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  More Than Showcase Pieces — These Are Signals of Business Standard
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  A strong portfolio helps visitors understand what quality looks
                  like before they ever contact you. It reinforces trust,
                  communicates your market level, and makes your services feel more
                  proven and more premium. That is why this page is designed to
                  support both visual confidence and conversion intent.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Stronger credibility for new visitors",
                    "Better alignment with premium service positioning",
                    "Internal linking support for service discovery",
                    "More confidence before inquiry or WhatsApp contact",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#f3d77a]" />
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
                    icon: LayoutGrid,
                  },
                  {
                    title: "Digital Marketing",
                    href: "/services/digital-marketing",
                    icon: Search,
                  },
                  {
                    title: "Branding & Business Solutions",
                    href: "/services/branding-business-solutions",
                    icon: Sparkles,
                  },
                  {
                    title: "Accounting & Tax Returns",
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

        <section className="py-14 sm:py-16 lg:py-18">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-7 text-center shadow-[0_20px_46px_rgba(7,18,38,0.05)] sm:p-9 lg:p-12">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Ready for Your Own Project?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Build Something Premium for Your Business
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether you need a website, a stronger brand presentation, better
                  digital visibility, or a more polished business experience,
                  MoBiz.mu can help you shape a solution that feels more executive,
                  more strategic, and more ready for growth.
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
                    href="/services"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Explore Services
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