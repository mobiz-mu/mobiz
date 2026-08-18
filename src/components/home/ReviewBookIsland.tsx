"use client";

import dynamic from "next/dynamic";

import { useNearViewport } from "@/lib/hooks/useNearViewport";
import { ReviewBookPoster } from "@/components/home/ReviewBookPoster";
import type { Testimonial } from "@/components/ui/3d-book-testimonial";

const ReviewBook = dynamic(
  () => import("@/components/ui/3d-book-testimonial").then((mod) => mod.Component),
  { ssr: false },
);

/*
 * react-pageflip builds and measures a lot of DOM up front. Measured on the
 * homepage it cost ~2.2s of main-thread time, of which only ~270ms was script
 * execution — the rest was style and layout. `ssr: false` alone does not avoid
 * that: the chunk still loads and mounts right after hydration, while the user
 * is still at the top of the page.
 *
 * So the book is held back until its section is near the viewport. This is safe
 * for layout because `.review-book-stage` is a fixed 450px box and
 * `.review-book-spread` is absolutely positioned inside it, so the space is
 * reserved by CSS whether or not the book has mounted — mounting it later
 * cannot shift anything.
 *
 * This is the ONLY client-side piece of the reviews section — the heading,
 * stars, CTA and testimonial copy around it are plain server-rendered markup
 * in `MauritiusCoverage`, which ships zero extra JS of its own.
 */
export function ReviewBookIsland({ testimonials }: { testimonials: Testimonial[] }) {
  const { ref: bookStageRef, near: bookNear } = useNearViewport<HTMLDivElement>("300px");

  return (
    <div ref={bookStageRef} className="review-book-stage">
      <div className="review-book-spread">
        {bookNear ? (
          <ReviewBook testimonials={testimonials} />
        ) : (
          /*
           * Never an empty box. This is server-rendered markup, so the
           * slot looks finished on first paint instead of reserving
           * 450px of nothing until the flipbook chunk arrives.
           */
          <ReviewBookPoster testimonial={testimonials[0]!} />
        )}
      </div>
    </div>
  );
}

export default ReviewBookIsland;
