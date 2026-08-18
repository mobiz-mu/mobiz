"use client";

import * as React from "react";
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

/* -------------------------------------------------------------------------- */
/* DESKTOP CAROUSEL                                                           */
/* -------------------------------------------------------------------------- */

function DesktopBlogCarousel() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const total = POSTS.length;
  const active = POSTS[activeIndex]!;

  function previous() {
    setActiveIndex((current) => (current - 1 + total) % total);
  }

  function next() {
    setActiveIndex((current) => (current + 1) % total);
  }

  return (
    <div className="hidden lg:grid lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch lg:gap-10 xl:gap-14">
      {/* LEFT */}
      <div className="relative min-h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          {POSTS.map((post, index) => {
            const offset = getRelativeIndex(index, activeIndex, total);
            const distance = Math.abs(offset);
            const isVisible = distance <= 2;

            return (
              <button
                key={post.slug}
                type="button"
                aria-label={`Show article: ${post.title}`}
                onClick={() => setActiveIndex(index)}
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

                  pointerEvents: isVisible ? "auto" : "none",
                }}
              >
                {/*
                 * Only the 5 cards within `isVisible` distance get a real
                 * `<Image>`. All 8 exist in the DOM for the deck's 3D stack,
                 * but at any moment 3 sit at opacity:0 off to either side —
                 * measured on a clean profile, those 3 still fired real
                 * network requests every load (~50KB nobody was looking at).
                 * A plain div holds the identical box until its card is
                 * within 2 of the active one, so nothing pops in: by the time
                 * a card is close enough to be seen, it already has 1-2
                 * clicks of lead time to load before the visitor reaches it.
                 */}
                {isVisible ? (
                  <Image
                    src={post.imageSrc}
                    alt={post.title}
                    fill
                    quality={75}
                    sizes="(min-width: 1280px) 520px, 44vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                ) : (
                  <div aria-hidden className="absolute inset-0 bg-[#efefec]" />
                )}

                <span aria-hidden className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
              </button>
            );
          })}
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex min-h-[500px] flex-col justify-center py-4">
        <div key={active.slug} className="blog-copy-enter">
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

            <ArrowUpRight aria-hidden className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* ARROWS */}
        <div className="mt-9 flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous article"
            onClick={previous}
            className="flex size-11 items-center justify-center rounded-full border border-black/[0.09] bg-white text-black shadow-[0_8px_22px_rgba(0,0,0,0.06)] transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand"
          >
            <ArrowLeft className="size-5" />
          </button>

          <button
            type="button"
            aria-label="Next article"
            onClick={next}
            className="flex size-11 items-center justify-center rounded-full bg-brand text-white shadow-[0_10px_24px_rgba(192,24,34,0.20)] transition-[transform,background-color] duration-200 hover:-translate-y-0.5 hover:bg-[#A3131C]"
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION                                                                    */
/* -------------------------------------------------------------------------- */

export function BlogPreview() {
  return (
    <section
      aria-labelledby="insights-heading"
      className="blog-editorial-section relative overflow-hidden bg-[#F8F8F6]"
    >
      <span aria-hidden className="blog-editorial-grid pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 xl:px-16">
        <BlogSectionIntro />

        <DesktopBlogCarousel />
        <MobileBlogStack />

        <BlogSectionFooterLink />
      </div>
    </section>
  );
}

export default BlogPreview;
