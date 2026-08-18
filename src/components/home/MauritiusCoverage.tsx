"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";

import { GOOGLE_REVIEWS_HREF } from "@/lib/company";
import type { Testimonial } from "@/components/ui/3d-book-testimonial";

const ReviewBook = dynamic(
  () =>
    import("@/components/ui/3d-book-testimonial").then(
      (mod) => mod.Component,
    ),
  {
    ssr: false,
  },
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
 */
function useNearViewport<T extends HTMLElement>(rootMargin = "300px") {
  const ref = useRef<T | null>(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || near) return;

    // No IntersectionObserver (or a very old browser): just mount it. Deferred
    // to a task so this isn't a synchronous setState inside the effect body.
    if (typeof IntersectionObserver === "undefined") {
      const timer = setTimeout(() => setNear(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setNear(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [near, rootMargin]);

  return { ref, near };
}


const testimonials: Testimonial[] = [
  {
    name: "Marika Velloo",
    jobtitle: "Facebook Review",
    rating: 5,
    text: "Very good service. Highly recommend. They were very good at giving me the right information and guidance for the creation of my website. Thank you so much!!",
  },
  {
    name: "Nasreen Mustun-Maherally",
    jobtitle: "Facebook Review",
    rating: 5,
    text: "I highly recommend Mobiz. Their customer service is second to none. I was impressed with their professionalism. Mr Vega was very helpful and patient since day one. He was quick to respond to my complex needs. Big thanks to Mobiz.",
  },
  {
    name: "Devysen Chocalingum",
    jobtitle: "Facebook Review",
    rating: 5,
    text: "Mo ti guet Mobiz.mu pu fair mo return MRA et mo bien satisfait. Lekip top, keep it up. A recommender 100%.",
  },
  {
    name: "Naresh Kumarsing Daumoo",
    jobtitle: "Google Review",
    rating: 5,
    text: "Amazing service! Our website was delivered in under a week, and the team has been incredibly attentive throughout the whole process. They listened to our needs, made quick adjustments, and ensured everything was perfect. Truly a reliable and dedicated team!",
  },
  {
    name: "Aurélie Thomas",
    jobtitle: "Google Review",
    rating: 5,
    text: "I had my website built by Mobiz and I'm very satisfied with the service. The web developer was attentive, did a professional job, and offered helpful advice for the site. In the end, I'm very happy with the result and I recommend Mobiz.",
  },
  {
    name: "Guillaume St Hubert",
    jobtitle: "Google Review",
    rating: 5,
    text: "An exceptional team! Thanks to Mobiz.mu, our company finally has a modern, elegant and professional online presence. Very happy with the support and the result.",
  },
  {
    name: "Alex",
    jobtitle: "Google Review",
    rating: 5,
    text: "Excellent accounting service! The Mobiz team is professional, responsive, and always ready to help. I highly recommend their services!",
  },
  {
    name: "Laurent",
    jobtitle: "Google Review",
    rating: 5,
    text: "I had an amazing experience working with Mobiz.mu! From the very first consultation, their team was professional, responsive, and genuinely cared about helping my business grow.",
  },
];

function SummaryStars() {
  return (
    <div
      className="flex gap-1"
      role="img"
      aria-label="5 out of 5 stars"
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          aria-hidden
          className="size-5 fill-[#F5B82E] text-[#F5B82E]"
        />
      ))}
    </div>
  );
}

export function MauritiusCoverage() {
  const { ref: bookStageRef, near: bookNear } =
    useNearViewport<HTMLDivElement>();

  return (
    <section
      aria-labelledby="reviews-heading"
      className="relative overflow-hidden bg-[#F7F7F4]"
    >
      {/* subtle technical grid */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.11]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* light Mobiz atmosphere */}
      <span
        aria-hidden
        className="pointer-events-none absolute right-[6%] top-1/2 h-[420px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,24,34,0.055),transparent_68%)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] items-center gap-7 px-5 py-7 sm:px-8 sm:py-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-10 lg:px-12 lg:py-9 xl:px-16">
        {/* ============================================================ */}
        {/* LEFT                                                         */}
        {/* ============================================================ */}

        <div className="mx-auto w-full max-w-[530px] lg:mx-0">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-10 bg-[#C01822]" />

            <p className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#C01822]">
              Customer Feedback
            </p>
          </div>

          <h2
            id="reviews-heading"
            className="font-black leading-[0.91] tracking-[-0.055em] text-[#070709]"
            style={{
              fontSize:
                "clamp(2.35rem,4.6vw,4.45rem)",
            }}
          >
            What our
            <br />
            customers{" "}
            <span className="text-[#C01822]">
              think
            </span>
            <br />
            <span className="text-[#C01822]">
              about us.
            </span>
          </h2>

          <p className="mt-4 max-w-[500px] text-sm font-medium leading-6 text-[#62636A] sm:text-[15px]">
            Real feedback from customers who trusted Mobiz with their websites,
            business systems, accounting and digital projects.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <SummaryStars />

            <span className="text-[11px] font-bold text-black/40">
              Real customer feedback
            </span>
          </div>

          <a
            href={GOOGLE_REVIEWS_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex min-h-11 items-center gap-2 rounded-lg bg-[#C01822] px-5 py-2.5 text-[11px] font-black text-white shadow-[0_12px_30px_rgba(192,24,34,0.22)] transition-[transform,background-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:bg-[#A3121B] hover:shadow-[0_15px_34px_rgba(192,24,34,0.3)]"
          >
            Leave us a Google review

            <ArrowUpRight
              aria-hidden
              className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* ============================================================ */}
        {/* RIGHT — TWO-PAGE BOOK                                        */}
        {/* ============================================================ */}

        <div className="min-w-0 overflow-hidden">
           <div ref={bookStageRef} className="review-book-stage">
              <div className="review-book-spread">
                 {bookNear ? (
                   <ReviewBook
                     testimonials={testimonials}
                   />
                 ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MauritiusCoverage;