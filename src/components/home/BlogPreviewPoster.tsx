import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

import {
  BlogSectionFooterLink,
  BlogSectionIntro,
  MobileBlogStack,
  POSTS,
  getRelativeIndex,
} from "./blog-preview-shared";

/**
 * Server-rendered resting state of `BlogPreview`'s desktop deck: activeIndex
 * fixed at 0 (`BlogPreview`'s own `useState(0)` default, so this is the exact
 * geometry its very first client render already produces), copy for the
 * first post, and the deck cards rendered as inert `<div>`s instead of
 * `<button>`s. The mobile stack has no interactivity to begin with, so it's
 * shared verbatim rather than duplicated.
 */
export function BlogPreviewPoster() {
  const activeIndex = 0;
  const total = POSTS.length;
  const active = POSTS[activeIndex]!;

  return (
    <section
      aria-labelledby="insights-heading"
      className="blog-editorial-section relative overflow-hidden bg-[#F8F8F6]"
    >
      <span aria-hidden className="blog-editorial-grid pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16">
        <BlogSectionIntro />

        <div className="hidden lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-10 xl:gap-14">
          {/* LEFT — inert deck, resting on the first post */}
          <div className="relative min-h-[500px] overflow-hidden">
            <div className="absolute inset-0">
              {POSTS.map((post, index) => {
                const offset = getRelativeIndex(index, activeIndex, total);
                const distance = Math.abs(offset);
                const isVisible = distance <= 2;

                return (
                  <div
                    key={post.slug}
                    aria-hidden={index !== activeIndex}
                    className="blog-deck-card absolute left-1/2 top-1/2 block overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_28px_80px_rgba(0,0,0,0.14)]"
                    style={{
                      width: distance === 0 ? "68%" : "61%",
                      aspectRatio: "4 / 3",
                      opacity: isVisible ? 1 : 0,
                      zIndex: 100 - distance,
                      transform: `
                        translate(
                          calc(-50% + ${offset * 148}px),
                          -50%
                        )
                        rotateY(${offset * -12}deg)
                        rotateZ(${offset * 1.8}deg)
                        scale(${distance === 0 ? 1 : 0.92 - distance * 0.035})
                      `,
                      pointerEvents: "none",
                    }}
                  >
                    {isVisible ? (
                      <Image
                        src={post.imageSrc}
                        alt={post.title}
                        fill
                        quality={75}
                        sizes="(min-width: 1280px) 520px, 44vw"
                        className="object-cover"
                      />
                    ) : (
                      <div aria-hidden className="absolute inset-0 bg-[#efefec]" />
                    )}

                    <span aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex min-h-[500px] flex-col justify-center py-4">
            <div className="blog-copy-enter">
              <p className="mb-4 font-mono text-[10px] font-black uppercase tracking-[0.2em] text-brand">
                {active.category}
              </p>

              <h3 className="max-w-[620px] text-4xl font-black leading-[1.02] tracking-[-0.045em] text-[#090A0C] xl:text-5xl">
                {active.title}
              </h3>

              <p className="mt-5 max-w-[610px] text-base font-medium leading-8 text-[#62636A]">
                {active.excerpt}
              </p>

              <Link
                href={active.href}
                className="group mt-7 inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_26px_rgba(192,24,34,0.20)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#A3131C] hover:shadow-[0_14px_30px_rgba(192,24,34,0.28)]"
              >
                Read article
                <ArrowUpRight aria-hidden className="size-3.5" />
              </Link>
            </div>

            {/* Inert nav — real look, no handlers */}
            <div className="mt-9 flex items-center gap-3">
              <span
                aria-hidden
                className="flex size-11 items-center justify-center rounded-full border border-black/[0.09] bg-white text-black shadow-[0_8px_22px_rgba(0,0,0,0.06)]"
              >
                <ArrowLeft className="size-5" />
              </span>

              <span
                aria-hidden
                className="flex size-11 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_24px_rgba(192,24,34,0.20)]"
              >
                <ArrowRight className="size-5" />
              </span>
            </div>
          </div>
        </div>

        <MobileBlogStack />

        <BlogSectionFooterLink />
      </div>
    </section>
  );
}

export default BlogPreviewPoster;
