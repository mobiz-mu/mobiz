import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Globe,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  slug: string;
};

const posts: BlogPost[] = [
  {
    title: "How Mauritian businesses can look more premium online",
    excerpt:
      "A stronger online presence in Mauritius starts with better website presentation, cleaner branding, and a more executive digital image.",
    href: "/blog/how-mauritian-businesses-can-look-more-premium-online",
    slug: "how-mauritian-businesses-can-look-more-premium-online",
    category: "Premium Presence",
    imageSrc: "/images/blog/premium-online-presence-mauritius.png",
    imageAlt:
      "Premium online presence blog image showing an executive workspace for a Mauritius business",
  },
  {
    title: "Why website design in Mauritius now needs a higher standard",
    excerpt:
      "Modern website design in Mauritius should be mobile-first, premium in presentation, and structured to build trust and convert better.",
    href: "/blog/why-website-design-in-mauritius-now-needs-a-higher-standard",
    slug: "why-website-design-in-mauritius-now-needs-a-higher-standard",
    category: "Website Design",
    imageSrc: "/images/blog/website-design-mauritius.png",
    imageAlt:
      "Website design blog image showing premium business website layouts for the Mauritius market",
  },
  {
    title: "Digital marketing in Mauritius: what businesses should focus on first",
    excerpt:
      "From SEO in Mauritius to Meta Ads and Google Ads, the right digital marketing priorities can increase visibility and lead quality.",
    href: "/blog/digital-marketing-in-mauritius-what-businesses-should-focus-on-first",
    slug: "digital-marketing-in-mauritius-what-businesses-should-focus-on-first",
    category: "Digital Marketing",
    imageSrc: "/images/blog/digital-marketing-mauritius.png",
    imageAlt:
      "Digital marketing blog image showing executive strategy discussion and campaign planning",
  },
  {
    title: "Accounting and tax support that gives businesses more clarity",
    excerpt:
      "Professional bookkeeping, VAT, payroll, and tax returns help Mauritian companies stay compliant while operating with more confidence.",
    href: "/blog/accounting-and-tax-support-that-gives-businesses-more-clarity",
    slug: "accounting-and-tax-support-that-gives-businesses-more-clarity",
    category: "Accounting & Tax",
    imageSrc: "/images/blog/accounting-tax-mauritius.png",
    imageAlt:
      "Accounting and tax blog image showing a premium finance and compliance workspace",
  },
  {
    title: "Why logistics solutions matter for smoother business operations",
    excerpt:
      "Businesses in Mauritius benefit from stronger logistics support, cleaner delivery coordination, and more reliable import and export structure.",
    href: "/blog/why-logistics-solutions-matter-for-smoother-business-operations",
    slug: "why-logistics-solutions-matter-for-smoother-business-operations",
    category: "Logistics",
    imageSrc: "/images/blog/logistics-solutions-mauritius.png",
    imageAlt:
      "Logistics blog image showing delivery coordination and business operations support",
  },
  {
    title: "Branding and business solutions that make companies look established",
    excerpt:
      "Professional brand assets, proposals, decks, and business plans help businesses in Mauritius present themselves with more authority.",
    href: "/blog/branding-and-business-solutions-that-make-companies-look-established",
    slug: "branding-and-business-solutions-that-make-companies-look-established",
    category: "Branding",
    imageSrc: "/images/blog/branding-business-solutions-mauritius.png",
    imageAlt:
      "Branding and business solutions blog image showing premium planning and consulting materials",
  },
  {
    title: "Why WhatsApp-ready conversion matters for the Mauritius market",
    excerpt:
      "Mobile-first user journeys and WhatsApp-friendly contact flows can improve response speed, trust, and local conversion performance.",
    href: "/blog/why-whatsapp-ready-conversion-matters-for-the-mauritius-market",
    slug: "why-whatsapp-ready-conversion-matters-for-the-mauritius-market",
    category: "Conversion",
    imageSrc: "/images/blog/whatsapp-conversion-mauritius.png",
    imageAlt:
      "WhatsApp conversion blog image showing mobile-first communication for a Mauritius business",
  },
  {
    title: "Business growth becomes easier when systems work together",
    excerpt:
      "When websites, marketing, accounting, quotations, and operational processes work together, growth becomes more manageable and more scalable.",
    href: "/blog/business-growth-becomes-easier-when-systems-work-together",
    slug: "business-growth-becomes-easier-when-systems-work-together",
    category: "Business Growth",
    imageSrc: "/images/blog/business-growth-systems-mauritius.png",
    imageAlt:
      "Business growth systems blog image showing reports analytics and executive operations planning",
  },
];

type PageProps = {
  params: Promise<{ slug: string }>;
};

function buildArticle(post: BlogPost) {
  const articles: Record<
    string,
    {
      intro: string;
      sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
      readTime: string;
    }
  > = {
    "how-mauritian-businesses-can-look-more-premium-online": {
      readTime: "5 min read",
      intro:
        "Many businesses in Mauritius have strong services but still appear average online. In many cases, the issue is not the service itself, but the way the business is presented digitally. A more premium online presence helps create trust faster, build stronger credibility, and improve how clients perceive the company from the very first interaction.",
      sections: [
        {
          title: "Why premium presentation matters",
          paragraphs: [
            "When a website, brand image, or digital presence feels outdated, cluttered, or inconsistent, it can reduce trust even before a potential client makes contact. In contrast, a cleaner and more premium presence helps the business feel more serious, more established, and more reliable.",
            "In Mauritius, where competition is growing and clients increasingly compare businesses online first, the visual and structural quality of a company’s digital presence can have a major influence on perception.",
          ],
        },
        {
          title: "What makes a business look more premium online",
          paragraphs: [
            "A premium online presence is usually built through better website design, stronger content hierarchy, more consistent branding, improved imagery, mobile-friendly execution, and clearer messaging. It is not only about luxury visuals. It is also about clarity, confidence, and the feeling that the business is operating at a higher standard.",
          ],
          bullets: [
            "Cleaner and more executive website layout",
            "Better brand consistency",
            "More premium service presentation",
            "Stronger mobile responsiveness",
            "Sharper trust signals and calls to action",
          ],
        },
        {
          title: "How MoBiz.mu approaches this",
          paragraphs: [
            "At MoBiz.mu, the goal is not to make businesses look flashy for no reason. The goal is to help them look more trustworthy, more premium, and more aligned with serious business growth. That is why design, structure, content, and conversion thinking are all treated together.",
          ],
        },
      ],
    },
    "why-website-design-in-mauritius-now-needs-a-higher-standard": {
      readTime: "5 min read",
      intro:
        "Website design in Mauritius can no longer be treated as a simple online placeholder. Businesses now need websites that create trust, support SEO, feel premium on mobile, and guide visitors more clearly toward action.",
      sections: [
        {
          title: "The market expectation has changed",
          paragraphs: [
            "More people are making their first judgment of a business through its website. If the experience feels slow, generic, weak on mobile, or visually outdated, trust can drop quickly.",
            "A higher standard is no longer a luxury. It is becoming the baseline for businesses that want to appear more credible and competitive.",
          ],
        },
        {
          title: "What a higher standard means",
          paragraphs: [
            "A better website standard means more than visual polish. It includes mobile responsiveness, premium layout quality, clear service architecture, stronger SEO foundations, better copywriting, and more thoughtful conversion paths.",
          ],
          bullets: [
            "Mobile-first user experience",
            "Cleaner premium interface design",
            "Better content hierarchy",
            "Stronger local SEO readiness",
            "Trust-building layout and messaging",
          ],
        },
        {
          title: "Why it matters for Mauritius businesses",
          paragraphs: [
            "In Mauritius, many businesses still compete with websites that do not fully reflect their quality. A more premium website can become a strong differentiator and help the brand look more serious, more modern, and more growth-ready.",
          ],
        },
      ],
    },
    "digital-marketing-in-mauritius-what-businesses-should-focus-on-first": {
      readTime: "6 min read",
      intro:
        "Digital marketing can feel overwhelming when businesses try to do everything at once. In Mauritius, the smartest approach is often to focus first on the channels and foundations that create real visibility and trust.",
      sections: [
        {
          title: "Start with visibility and clarity",
          paragraphs: [
            "Before investing heavily into content volume or paid campaigns, businesses should first make sure their messaging, website, and digital presentation are strong enough to support the traffic they want to attract.",
          ],
        },
        {
          title: "The main priorities",
          paragraphs: [
            "For many businesses, the most important starting points are SEO structure, a premium and mobile-friendly website, clear service presentation, and focused paid campaigns where relevant.",
          ],
          bullets: [
            "SEO foundations and on-page improvements",
            "Clear service messaging",
            "Mobile-ready website experience",
            "Google Ads or Meta Ads where appropriate",
            "Consistent brand-aligned content direction",
          ],
        },
        {
          title: "Build in the right order",
          paragraphs: [
            "A business that improves its website, messaging, and trust signals first often gets more value from later digital marketing efforts. Strong foundations tend to make all later campaigns perform better.",
          ],
        },
      ],
    },
    "accounting-and-tax-support-that-gives-businesses-more-clarity": {
      readTime: "5 min read",
      intro:
        "Accounting and tax support are not only about compliance. They also help businesses become more structured, more confident, and better prepared to make good decisions.",
      sections: [
        {
          title: "Why clarity matters",
          paragraphs: [
            "When records, filing, VAT, payroll, and finance-related documents are better organized, businesses gain more control and more confidence. Without that clarity, operations can feel heavier and more reactive.",
          ],
        },
        {
          title: "Where support makes the biggest difference",
          paragraphs: [
            "For many businesses in Mauritius, accounting support is most valuable when it improves ongoing organization rather than only solving problems at the last minute.",
          ],
          bullets: [
            "Bookkeeping support",
            "VAT assistance",
            "Tax return preparation",
            "Statutory filing support",
            "More organized financial documentation",
          ],
        },
        {
          title: "Business confidence comes from structure",
          paragraphs: [
            "The more structured the financial side of a business becomes, the easier it is to grow with confidence. Clear accounting support does not only reduce friction. It also supports better long-term management.",
          ],
        },
      ],
    },
    "why-logistics-solutions-matter-for-smoother-business-operations": {
      readTime: "5 min read",
      intro:
        "Logistics can quietly shape the overall efficiency of a business. In Mauritius, smoother sourcing, procurement, and operational coordination often make a major difference to daily business performance.",
      sections: [
        {
          title: "Operations need structure",
          paragraphs: [
            "Businesses that depend on products, imports, sourcing, stock movement, or supplier coordination usually benefit when logistics processes become more organized and easier to follow.",
          ],
        },
        {
          title: "Common pressure points",
          paragraphs: [
            "Many operational issues start with weak coordination, unclear sourcing structure, delayed communication, or fragmented process flow.",
          ],
          bullets: [
            "Import and export setup needs",
            "Procurement support",
            "Supplier and sourcing flow",
            "Warehousing coordination",
            "Delivery and movement structure",
          ],
        },
        {
          title: "Why better logistics matters",
          paragraphs: [
            "When operational flow becomes smoother, businesses often gain more reliability, more efficiency, and less friction in day-to-day execution. That creates room for stronger growth and better decision-making.",
          ],
        },
      ],
    },
    "branding-and-business-solutions-that-make-companies-look-established": {
      readTime: "5 min read",
      intro:
        "Branding is often what makes a business feel either ordinary or established. A more premium visual and business presentation can influence trust faster than many companies realize.",
      sections: [
        {
          title: "Branding is more than a logo",
          paragraphs: [
            "A business feels more established when its brand system, proposals, presentations, decks, and communication all work together with consistency and clarity.",
          ],
        },
        {
          title: "Where presentation matters most",
          paragraphs: [
            "Clients and partners often judge a business not only by the offer, but by how professionally it is presented. Branding and business assets create that first layer of confidence.",
          ],
          bullets: [
            "Brand kits and templates",
            "Proposal design",
            "Presentation design",
            "Business plans and pitch decks",
            "Launch materials and premium visual assets",
          ],
        },
        {
          title: "Why this matters in Mauritius",
          paragraphs: [
            "In a market where businesses are increasingly competing for trust and visibility, stronger brand presentation can help a company feel more serious, more premium, and more ready for growth.",
          ],
        },
      ],
    },
    "why-whatsapp-ready-conversion-matters-for-the-mauritius-market": {
      readTime: "4 min read",
      intro:
        "In Mauritius, WhatsApp often plays a central role in how clients inquire, compare, and decide. That is why WhatsApp-ready conversion is not just a convenience. It can be a strategic advantage.",
      sections: [
        {
          title: "Mobile habits shape business conversion",
          paragraphs: [
            "Many users prefer quick contact over long forms or delayed email conversations. Businesses that align with this behavior often feel more accessible and easier to trust.",
          ],
        },
        {
          title: "What WhatsApp-ready conversion means",
          paragraphs: [
            "It means the website, content flow, and calls to action are structured to make inquiry faster and smoother for mobile-first users.",
          ],
          bullets: [
            "Clear WhatsApp call-to-action placement",
            "Faster contact flow",
            "Better mobile friendliness",
            "Reduced friction before inquiry",
            "More local relevance in user journey design",
          ],
        },
        {
          title: "Why it improves trust",
          paragraphs: [
            "When businesses make it easier to reach them in a familiar way, they often feel more responsive and more client-friendly. That can improve both trust and conversion performance.",
          ],
        },
      ],
    },
    "business-growth-becomes-easier-when-systems-work-together": {
      readTime: "5 min read",
      intro:
        "Growth usually becomes more manageable when the business is not relying on disconnected efforts. Stronger systems create stronger consistency, better visibility, and smoother operations.",
      sections: [
        {
          title: "Fragmentation slows growth",
          paragraphs: [
            "When the website, marketing, quotations, finance structure, and operational flow all feel disconnected, the business often works harder than necessary to maintain progress.",
          ],
        },
        {
          title: "What connected systems look like",
          paragraphs: [
            "A stronger business system usually connects digital presentation, lead generation, operational clarity, and internal business processes in a more deliberate way.",
          ],
          bullets: [
            "Website and conversion alignment",
            "Marketing connected to offer clarity",
            "Accounting and business admin structure",
            "Operational support and logistics flow",
            "Clearer long-term business visibility",
          ],
        },
        {
          title: "Why it supports scalability",
          paragraphs: [
            "When systems work together, businesses can make better decisions, reduce friction, and grow with more control. That is often what separates short-term activity from real business progress.",
          ],
        },
      ],
    },
  };

  return (
    articles[post.slug] ?? {
      readTime: "5 min read",
      intro: post.excerpt,
      sections: [
        {
          title: "Overview",
          paragraphs: [
            "This article explores a premium business topic related to Mauritius and explains why stronger structure, presentation, and business thinking matter more than ever.",
          ],
        },
      ],
    }
  );
}

function ArticleJsonLd({ post }: { post: BlogPost }) {
  const article = buildArticle(post);

  const data = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `${siteUrl}${post.imageSrc}`,
    url: `${siteUrl}${post.href}`,
    mainEntityOfPage: `${siteUrl}${post.href}`,
    author: {
      "@type": "Organization",
      name: "MoBiz.mu",
    },
    publisher: {
      "@type": "Organization",
      name: "MoBiz.mu",
      url: siteUrl,
    },
    articleSection: post.category,
    wordCount: article.sections
      .flatMap((s) => s.paragraphs)
      .join(" ")
      .split(/\s+/).length,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article | MoBiz.mu Blog",
      description: "Premium business insights from MoBiz.mu.",
    };
  }

  return {
    title: `${post.title} | MoBiz.mu Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `${siteUrl}${post.href}`,
    },
    openGraph: {
      title: `${post.title} | MoBiz.mu Blog`,
      description: post.excerpt,
      url: `${siteUrl}${post.href}`,
      siteName: "MoBiz.mu",
      type: "article",
      images: [{ url: `${siteUrl}${post.imageSrc}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | MoBiz.mu Blog`,
      description: post.excerpt,
    },
  };
}

export default async function BlogSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);

  if (!post) notFound();

  const article = buildArticle(post);
  const relatedPosts = posts.filter((item) => item.slug !== post.slug).slice(0, 3);

  return (
    <>
      <ArticleJsonLd post={post} />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_20%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.13),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div className="mb-6">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition-colors duration-300 hover:text-[#8b6a18]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </div>

            <div className="mx-auto max-w-5xl text-center">
              <div
                className="inline-flex rounded-full border border-[#ead9a8] bg-[#fffdf7] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                {post.category}
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                {post.title}
              </h1>

              <p
                className="mx-auto mt-5 max-w-4xl text-[15px] leading-8 text-[#44556f] sm:text-[16px] lg:text-[17px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                {post.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#e5eaf2] bg-white px-3 py-1.5">
                  <Clock3 className="h-4 w-4 text-[#c9a648]" />
                  {article.readTime}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#e5eaf2] bg-white px-3 py-1.5">
                  <BookOpen className="h-4 w-4 text-[#c9a648]" />
                  MoBiz.mu Blog
                </span>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-[30px] border border-[#e5eaf2] bg-white shadow-[0_20px_48px_rgba(7,18,38,0.06)]">
              <div className="relative aspect-[16/9] bg-slate-50">
                <Image
                  src={post.imageSrc}
                  alt={post.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-4 sm:py-6 lg:py-8">
          <Container className="max-w-[980px] px-4 sm:px-6 lg:px-8">
            <article className="rounded-[30px] border border-[#e5eaf2] bg-white p-6 shadow-[0_18px_42px_rgba(7,18,38,0.05)] sm:p-8 lg:p-10">
              <div className="prose prose-slate max-w-none prose-p:leading-8 prose-p:text-[15px] prose-p:text-[#44556f] sm:prose-p:text-[16px]">
                <p
                  className="text-[16px] leading-8 text-[#20314d] sm:text-[17px]"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {article.intro}
                </p>

                {article.sections.map((section) => (
                  <section key={section.title} className="mt-8">
                    <h2
                      className="text-2xl font-semibold tracking-tight text-[#071226] sm:text-[2rem]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {section.title}
                    </h2>

                    {section.paragraphs.map((paragraph, index) => (
                      <p
                        key={index}
                        className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]"
                        style={{ fontFamily: '"Poppins", sans-serif' }}
                      >
                        {paragraph}
                      </p>
                    ))}

                    {section.bullets ? (
                      <div className="mt-5 grid gap-3">
                        {section.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-3">
                            <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8b6a18]" />
                            <p
                              className="text-[15px] leading-7 text-[#20314d]"
                              style={{ fontFamily: '"Poppins", sans-serif' }}
                            >
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </section>
                ))}
              </div>
            </article>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[980px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Mauritius Relevance",
                  text: "This article is written with local business context and Mauritius-specific buyer realities in mind.",
                  icon: Globe,
                },
                {
                  title: "SEO-Aware Content",
                  text: "The structure supports authority building, search relevance, and stronger internal linking.",
                  icon: Search,
                },
                {
                  title: "Premium Positioning",
                  text: "The guidance reflects a more executive standard of digital and business presentation.",
                  icon: Sparkles,
                },
                {
                  title: "Growth Thinking",
                  text: "The goal is to support stronger trust, clearer decisions, and better long-term business growth.",
                  icon: TrendingUp,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.04)]"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <h3
                      className="mt-4 text-lg font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {relatedPosts.length > 0 ? (
          <section className="py-10 sm:py-12 lg:py-14">
            <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
              <div className="mb-8 text-center">
                <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  Related Articles
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Continue Reading
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {relatedPosts.map((item) => (
                  <article
                    key={item.slug}
                    className="group flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e5eaf2] bg-white shadow-[0_12px_30px_rgba(7,18,38,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(7,18,38,0.08)]"
                  >
                    <div className="relative h-[220px] w-full overflow-hidden bg-slate-50">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        fill
                        sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div
                        className="inline-flex w-fit rounded-full border border-[#ead9a8] bg-[#fffdf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]"
                        style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                      >
                        {item.category}
                      </div>

                      <h3
                        className="mt-4 text-balance text-[1.18rem] font-semibold tracking-tight text-[#071226] sm:text-[1.3rem]"
                        style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                      >
                        {item.title}
                      </h3>

                      <p className="mt-3 flex-1 text-[14px] leading-7 text-slate-600">
                        {item.excerpt}
                      </p>

                      <Link
                        href={item.href}
                        className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition hover:text-[#8b6a18]"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4 text-[#caa43f] transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
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
                  <BriefcaseBusiness className="h-3.5 w-3.5" />
                  Want Help Applying This?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Build the Right Solution for Your Business
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  If you want help improving your website, visibility, branding,
                  conversion flow, or business structure, MoBiz.mu can help you
                  turn the right strategy into premium execution.
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
                    href="/blog"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Back to Blog
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