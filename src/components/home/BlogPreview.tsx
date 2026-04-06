"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

type BlogPost = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
};

const posts: BlogPost[] = [
  {
    title: "How Mauritian businesses can look more premium online",
    excerpt:
      "A stronger online presence in Mauritius starts with better website presentation, cleaner branding, and a more executive digital image.",
    href: "/blog",
    category: "Premium Presence",
    imageSrc: "/images/blog/premium-online-presence-mauritius.png",
    imageAlt:
      "Premium online presence blog image showing an executive workspace for a Mauritius business",
  },
  {
    title: "Why website design in Mauritius now needs a higher standard",
    excerpt:
      "Modern website design in Mauritius should be mobile-first, premium in presentation, and structured to build trust and convert better.",
    href: "/blog",
    category: "Website Design",
    imageSrc: "/images/blog/website-design-mauritius.png",
    imageAlt:
      "Website design blog image showing premium business website layouts for the Mauritius market",
  },
  {
    title: "Digital marketing in Mauritius: what businesses should focus on first",
    excerpt:
      "From SEO in Mauritius to Meta Ads and Google Ads, the right digital marketing priorities can increase visibility and lead quality.",
    href: "/blog",
    category: "Digital Marketing",
    imageSrc: "/images/blog/digital-marketing-mauritius.png",
    imageAlt:
      "Digital marketing blog image showing executive strategy discussion and campaign planning",
  },
  {
    title: "Accounting and tax support that gives businesses more clarity",
    excerpt:
      "Professional bookkeeping, VAT, payroll, and tax returns help Mauritian companies stay compliant while operating with more confidence.",
    href: "/blog",
    category: "Accounting & Tax",
    imageSrc: "/images/blog/accounting-tax-mauritius.png",
    imageAlt:
      "Accounting and tax blog image showing a premium finance and compliance workspace",
  },
  {
    title: "Why logistics solutions matter for smoother business operations",
    excerpt:
      "Businesses in Mauritius benefit from stronger logistics support, cleaner delivery coordination, and more reliable import and export structure.",
    href: "/blog",
    category: "Logistics",
    imageSrc: "/images/blog/logistics-solutions-mauritius.png",
    imageAlt:
      "Logistics blog image showing delivery coordination and business operations support",
  },
  {
    title: "Branding and business solutions that make companies look established",
    excerpt:
      "Professional brand assets, proposals, decks, and business plans help businesses in Mauritius present themselves with more authority.",
    href: "/blog",
    category: "Branding",
    imageSrc: "/images/blog/branding-business-solutions-mauritius.png",
    imageAlt:
      "Branding and business solutions blog image showing premium planning and consulting materials",
  },
  {
    title: "Why WhatsApp-ready conversion matters for the Mauritius market",
    excerpt:
      "Mobile-first user journeys and WhatsApp-friendly contact flows can improve response speed, trust, and local conversion performance.",
    href: "/blog",
    category: "Conversion",
    imageSrc: "/images/blog/whatsapp-conversion-mauritius.png",
    imageAlt:
      "WhatsApp conversion blog image showing mobile-first communication for a Mauritius business",
  },
  {
    title: "Business growth becomes easier when systems work together",
    excerpt:
      "When websites, marketing, accounting, quotations, and operational processes work together, growth becomes more manageable and more scalable.",
    href: "/blog",
    category: "Business Growth",
    imageSrc: "/images/blog/business-growth-systems-mauritius.png",
    imageAlt:
      "Business growth systems blog image showing reports analytics and executive operations planning",
  },
];

function chunkPosts(items: BlogPost[], size: number) {
  const chunks: BlogPost[][] = [];
  for (let i = 0; i < items.length; i += size) {
    chunks.push(items.slice(i, i + size));
  }
  return chunks;
}

function BlogCard({
  post,
  className,
}: {
  post: BlogPost;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] shadow-[0_12px_30px_rgba(7,18,38,0.04)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_42px_rgba(7,18,38,0.08)]",
        className
      )}
    >
      <div className="relative h-[210px] w-full overflow-hidden bg-slate-50 sm:h-[220px] xl:h-[210px]">
        <Image
          src={post.imageSrc}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div
          className="inline-flex w-fit rounded-full border border-[#ead9a8] bg-[#fffdf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8b6a18] sm:text-[11px]"
          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
        >
          {post.category}
        </div>

        <h3
          className="mt-4 min-h-[3.35rem] text-balance text-[1.25rem] font-semibold tracking-tight text-[#071226] sm:text-[1.35rem]"
          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
        >
          {post.title}
        </h3>

        <p
          className="mt-3 flex-1 text-[14px] leading-7 text-slate-600"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          {post.excerpt}
        </p>

        <Link
          href={post.href}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#071226] transition hover:text-[#8b6a18]"
          style={{ fontFamily: '"Poppins", "Quicksand", sans-serif' }}
          aria-label={`Read article: ${post.title}`}
        >
          Read Article
          <ArrowRight className="h-4 w-4 text-[#caa43f] transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

function MobileArrows({
  onPrev,
  onNext,
  disabledPrev,
  disabledNext,
}: {
  onPrev: () => void;
  onNext: () => void;
  disabledPrev: boolean;
  disabledNext: boolean;
}) {
  const base =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300";
  return (
    <div className="mt-5 flex items-center justify-center gap-3 md:hidden">
      <button
        type="button"
        onClick={onPrev}
        disabled={disabledPrev}
        aria-label="Previous blog slide"
        className={cn(
          base,
          disabledPrev
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
            : "border-[#d9c27c] bg-[#071226] text-[#f3d77a] shadow-[0_12px_22px_rgba(7,18,38,0.14)] hover:-translate-y-0.5"
        )}
      >
        <ArrowLeft className="h-4.5 w-4.5" />
      </button>

      <button
        type="button"
        onClick={onNext}
        disabled={disabledNext}
        aria-label="Next blog slide"
        className={cn(
          base,
          disabledNext
            ? "cursor-not-allowed border-slate-200 bg-slate-100 text-slate-300"
            : "border-[#d9c27c] bg-[#071226] text-[#f3d77a] shadow-[0_12px_22px_rgba(7,18,38,0.14)] hover:-translate-y-0.5"
        )}
      >
        <ArrowRight className="h-4.5 w-4.5" />
      </button>
    </div>
  );
}

export default function BlogPreview() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const mobileSlides = useMemo(() => chunkPosts(posts, 2), []);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  const goPrev = () => setActiveIndex((prev) => Math.max(prev - 1, 0));
  const goNext = () =>
    setActiveIndex((prev) => Math.min(prev + 1, mobileSlides.length - 1));

  return (
    <section
      ref={sectionRef}
      id="blog-preview"
      aria-labelledby="blog-preview-heading"
      className="w-full bg-white py-7 sm:py-8 lg:py-10"
    >
      <Container className="max-w-[1400px]">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="blog-preview-heading"
            className={cn(
              "text-balance text-3xl font-semibold tracking-tight text-[#071226] transition-all duration-700 sm:text-4xl lg:text-[3rem] lg:leading-[1.04]",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            Our Blog
          </h2>

          <p
            className={cn(
              "mx-auto mt-4 max-w-3xl text-pretty text-[14px] leading-7 text-slate-600 transition-all duration-700 delay-100 sm:text-[15px] lg:text-[16px]",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            Explore premium business insights for Mauritius across website design,
            digital marketing, SEO, accounting, logistics, branding, WhatsApp
            conversion, and scalable growth systems built for stronger authority
            and long-term online visibility.
          </p>

          <div
            className={cn(
              "mt-6 transition-all duration-700 delay-150",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
          >
            <PremiumButton href="/blog" variant="secondary">
              View All Articles
            </PremiumButton>
          </div>
        </div>

        <div className="mt-8 hidden gap-5 md:grid md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post, index) => (
            <div
              key={post.title}
              className={cn(
                "h-full transition-all duration-700",
                visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              )}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              <BlogCard post={post} className="h-full" />
            </div>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-[950ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {mobileSlides.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full shrink-0">
                  <div className="grid grid-cols-1 gap-4">
                    {slide.map((post, index) => (
                      <div
                        key={post.title}
                        className={cn(
                          "transition-all duration-700",
                          visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                        )}
                        style={{ transitionDelay: `${index * 90}ms` }}
                      >
                        <BlogCard post={post} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <MobileArrows
            onPrev={goPrev}
            onNext={goNext}
            disabledPrev={activeIndex === 0}
            disabledNext={activeIndex === mobileSlides.length - 1}
          />
        </div>
      </Container>
    </section>
  );
}