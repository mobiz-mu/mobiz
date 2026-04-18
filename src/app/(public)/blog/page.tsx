import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { blogPosts, type BlogPost } from "@/lib/blog";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Globe,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title: "Blog | Premium Business Insights for Mauritius | MoBiz.mu",
  description:
    "Explore the MoBiz.mu blog for premium business insights in Mauritius across website design, SEO, digital marketing, accounting, logistics, branding, WhatsApp conversion, and business growth systems.",
  keywords: [
    "MoBiz.mu blog",
    "Business blog Mauritius",
    "Website design Mauritius blog",
    "SEO Mauritius blog",
    "Digital marketing Mauritius blog",
    "Accounting Mauritius blog",
    "Branding Mauritius blog",
    "Logistics Mauritius blog",
    "WhatsApp conversion Mauritius",
  ],
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MoBiz.mu Blog | Premium Business Insights for Mauritius",
    description:
      "Read premium business insights for Mauritius across websites, SEO, marketing, branding, accounting, logistics, and growth systems.",
    url: `${siteUrl}/blog`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoBiz.mu Blog | Premium Business Insights for Mauritius",
    description:
      "Explore premium articles on websites, marketing, SEO, branding, logistics, and business growth in Mauritius.",
  },
};

function BlogJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "MoBiz.mu Blog",
    url: `${siteUrl}/blog`,
    description:
      "Premium business insights for Mauritius across website design, digital marketing, SEO, accounting, logistics, branding, WhatsApp conversion, and growth systems.",
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteUrl}${post.href}`,
      image: `${siteUrl}${post.imageSrc}`,
      description: post.excerpt,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function BlogCard({
  post,
  priority = false,
}: {
  post: BlogPost;
  priority?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e5eaf2] bg-white shadow-[0_12px_28px_rgba(7,18,38,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(7,18,38,0.08)]">
      <Link href={post.href} className="block">
        <div className="relative h-[210px] w-full overflow-hidden bg-slate-50 sm:h-[220px]">
          <Image
            src={post.imageSrc}
            alt={post.imageAlt}
            fill
            priority={priority}
            sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div
          className="inline-flex w-fit rounded-full border border-[#ead9a8] bg-[#fffdf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18]"
          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
        >
          {post.category}
        </div>

        <h2
          className="mt-4 text-balance text-[1.16rem] font-semibold tracking-tight text-[#071226] sm:text-[1.28rem]"
          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
        >
          {post.title}
        </h2>

        <p
          className="mt-3 flex-1 text-[14px] leading-7 text-slate-600"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          {post.excerpt}
        </p>

        <Link
          href={post.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition hover:text-[#8b6a18]"
          aria-label={`Read article: ${post.title}`}
        >
          Read Article
          <ArrowRight className="h-4 w-4 text-[#caa43f] transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export default function BlogPage() {
  const featured = blogPosts[0];
  const restPosts = blogPosts.slice(1);

  return (
    <>
      <BlogJsonLd />

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <BookOpen className="h-3.5 w-3.5" />
                MoBiz.mu Blog
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Business Insights for Mauritius
              </h1>

              <p
                className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Explore premium business insights for Mauritius across website design,
                SEO, digital marketing, accounting, logistics, branding, WhatsApp
                conversion, and scalable business growth systems.
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
                {[
                  "Website Design Mauritius",
                  "SEO Mauritius",
                  "Digital Marketing Mauritius",
                  "Branding Mauritius",
                  "Accounting Mauritius",
                  "Business Growth Mauritius",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[11px] font-medium text-[#1d2d49] shadow-[0_8px_20px_rgba(7,18,38,0.04)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Premium Insights",
                  text: "Articles are written to reflect a more executive business standard and stronger market relevance.",
                  icon: Sparkles,
                },
                {
                  title: "Mauritius-Focused",
                  text: "The blog is shaped around local business needs, visibility priorities, and buyer expectations in Mauritius.",
                  icon: Globe,
                },
                {
                  title: "SEO Conscious",
                  text: "Topics are designed to support stronger search relevance, authority, and internal linking depth.",
                  icon: Search,
                },
                {
                  title: "Growth Oriented",
                  text: "Every article aims to help businesses improve trust, visibility, communication, and long-term performance.",
                  icon: TrendingUp,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2
                      className="mt-4 text-[1.1rem] font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-4 sm:py-6 lg:py-8">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-5 overflow-hidden rounded-[30px] border border-[#e5eaf2] bg-white p-5 shadow-[0_18px_40px_rgba(7,18,38,0.06)] sm:p-6 lg:grid-cols-[1.02fr_0.98fr] lg:p-8">
              <div>
                <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  Featured Article
                </div>

                <h2
                  className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.7rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  {featured.title}
                </h2>

                <p
                  className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {featured.excerpt}
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div
                    className="inline-flex rounded-full border border-[#ead9a8] bg-[#fffdf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {featured.category}
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={featured.href}
                    className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Read Featured Article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/contact"
                    className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Work With MoBiz.mu
                  </Link>
                </div>
              </div>

              <Link
                href={featured.href}
                className="group relative block overflow-hidden rounded-[24px] border border-[#e5eaf2] bg-slate-50"
              >
                <div className="relative aspect-[16/11] w-full">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
                </div>
              </Link>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                Latest Articles
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Explore More Premium Articles
              </h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {restPosts.map((post, index) => (
                <BlogCard key={post.slug} post={post} priority={index < 2} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-5 text-white shadow-[0_22px_52px_rgba(7,18,38,0.16)] sm:p-7 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
                <div>
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-[11px]">
                    Why This Blog Matters
                  </div>

                  <h2
                    className="mt-4 text-balance text-[1.8rem] font-semibold tracking-tight sm:text-[2.2rem] lg:text-[2.7rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    Better Content Helps Build Better Trust and Better Search Visibility
                  </h2>

                  <p className="mt-4 text-[14px] leading-7 text-white/78 sm:text-[15px]">
                    A premium blog does more than publish articles. It helps a
                    business build authority, improve SEO depth, educate clients,
                    strengthen internal linking, and show that the company
                    understands the market it serves.
                  </p>

                  <div className="mt-5 grid gap-3">
                    {[
                      "Supports search visibility and authority",
                      "Helps potential clients understand service value",
                      "Creates stronger internal linking across pages",
                      "Builds trust through premium, relevant content",
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
                    "Website Design Insights",
                    "SEO & Visibility",
                    "Digital Marketing",
                    "Branding & Authority",
                    "Accounting & Operations",
                    "Business Growth Systems",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/84"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-6 text-center shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                  Need Help With Your Business?
                </div>

                <h2
                  className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.4rem] lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Turn Insight into Action
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  If you want your business to look more premium, rank more
                  strongly, convert better, or operate with more structure,
                  MoBiz.mu can help you turn the right ideas into stronger
                  execution.
                </p>

                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
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