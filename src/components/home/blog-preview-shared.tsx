import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { blogPosts } from "@/lib/blog";

/**
 * Shared between `BlogPreviewPoster` (server, resting state) and
 * `BlogPreview` (client, clickable deck) so the post list and the fully
 * static mobile stack — which has no interactivity at all — exist in exactly
 * one place instead of shipping twice.
 */
export const POSTS = blogPosts.slice(0, 8);

export function getRelativeIndex(index: number, activeIndex: number, total: number) {
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

/* -------------------------------------------------------------------------- */
/* MOBILE STACK — no interactivity, safe to server-render either way          */
/* -------------------------------------------------------------------------- */

export function MobileBlogStack() {
  return (
    <div className="lg:hidden">
      <ul className="space-y-0">
        {POSTS.map((post, index) => (
          <li
            key={post.slug}
            className="blog-mobile-stack sticky"
            style={{ top: `${72 + Math.min(index, 4) * 8}px`, zIndex: 20 + index }}
          >
            <Link
              href={post.href}
              className="group relative block overflow-hidden rounded-[24px] border border-black/[0.08] bg-black shadow-[0_18px_50px_rgba(0,0,0,0.14)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={post.imageSrc}
                  alt={post.title}
                  fill
                  quality={75}
                  sizes="92vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />

                <span aria-hidden className="absolute inset-0 bg-linear-to-t from-black/88 via-black/25 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="mb-2 font-mono text-[9px] font-black uppercase tracking-[0.18em] text-red-400">
                    {post.category}
                  </p>

                  <h3 className="text-xl font-black leading-tight tracking-[-0.03em] text-white sm:text-2xl">
                    {post.title}
                  </h3>

                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-white/80">
                    Read article
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION INTRO — identical heading/link in both poster and live section     */
/* -------------------------------------------------------------------------- */

export function BlogSectionIntro() {
  return (
    <div className="mb-8 flex items-end justify-between gap-6 lg:mb-9">
      <div>
        <div className="mb-3 flex items-center gap-3">
          <span className="h-px w-10 bg-brand" />
          <p className="font-mono text-[10px] font-black uppercase tracking-[0.2em] text-brand">
            Insights
          </p>
        </div>

        <h2
          id="insights-heading"
          className="max-w-[900px] font-black leading-[0.95] tracking-[-0.045em] text-[#090A0C]"
          style={{ fontSize: "clamp(2rem,4.3vw,4rem)" }}
        >
          Practical thinking for{" "}
          <span className="text-brand">Mauritian businesses.</span>
        </h2>
      </div>

      <Link
        href="/blog"
        className="hidden min-h-11 shrink-0 items-center gap-2 rounded-lg border border-black/[0.09] bg-white px-4 py-2.5 text-xs font-bold text-black transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:text-brand sm:inline-flex"
      >
        View all articles
        <ArrowUpRight aria-hidden className="size-3.5" />
      </Link>
    </div>
  );
}

export function BlogSectionFooterLink() {
  return (
    <div className="mt-7 text-center sm:hidden">
      <Link
        href="/blog"
        className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-xs font-bold text-white"
      >
        View all articles
        <ArrowUpRight aria-hidden className="size-3.5" />
      </Link>
    </div>
  );
}
