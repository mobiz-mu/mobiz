"use client";

import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";
import { Star } from "lucide-react";

export interface Testimonial {
  image?: string;
  text: string;
  name: string;
  jobtitle: string;
  rating: number;
}

interface ComponentProps {
  testimonials: Testimonial[];
}

type FlipBookRef =
  React.ElementRef<typeof HTMLFlipBook>;

function InitialAvatar({
  name,
}: {
  name: string;
}) {
  const initials = name
    .split(/\s+/)
    .slice(0, 2)
    .map(
      (part) =>
        part[0] ?? "",
    )
    .join("")
    .toUpperCase();

  return (
    <span
      aria-hidden
      className="flex size-[86px] items-center justify-center rounded-full bg-linear-to-br from-[#C01822] to-[#111111] text-lg font-black text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]"
    >
      {initials}
    </span>
  );
}

function Rating({
  rating,
}: {
  rating: number;
}) {
  const safeRating = Math.max(
    0,
    Math.min(
      5,
      Math.round(rating),
    ),
  );

  return (
    <div
      className="flex justify-center gap-1"
      aria-label={`${safeRating} out of 5 stars`}
    >
      {Array.from({
        length: 5,
      }).map(
        (_, index) => {
          const active =
            index <
            safeRating;

          return (
            <Star
              key={index}
              aria-hidden
              className={
                active
                  ? "size-5 fill-[#F5B82E] text-[#F5B82E]"
                  : "size-5 fill-[#D5D5D5] text-[#D5D5D5]"
              }
            />
          );
        },
      )}
    </div>
  );
}

export function Component({
  testimonials,
}: ComponentProps) {
  const book =
    useRef<FlipBookRef>(
      null,
    );

  function handleFlip(
    pageNum: number,
  ) {
    book.current
      ?.pageFlip()
      ?.flip(pageNum);
  }

  return (
    <div className="flex h-[450px] w-[600px] items-center justify-center text-black">
      <HTMLFlipBook
        ref={book}
        width={300}
        height={450}
        showCover={true}

        /*
         * IMPORTANT:
         * Always keep the two-page landscape book.
         * Mobile responsiveness is handled by the outer CSS scale.
         */
        usePortrait={false}

        className=""
        style={{}}
        startPage={0}
        size="fixed"
        minWidth={300}
        maxWidth={300}
        minHeight={450}
        maxHeight={450}
        drawShadow={true}
        flippingTime={780}
        startZIndex={0}
        autoSize={false}
        maxShadowOpacity={0.22}
        mobileScrollSupport={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={20}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {/* ============================================================ */}
        {/* COVER                                                        */}
        {/* ============================================================ */}

        <div className="relative flex h-full w-full cursor-grab flex-col rounded-xl border border-white/10 bg-[#08090A] p-8 text-white shadow-[0_20px_55px_rgba(0,0,0,0.28)]">
          <div>
            <p className="font-mono text-[9px] font-black uppercase tracking-[0.22em] text-[#E32B35]">
              MOBIZ.MU
            </p>

            <h3 className="mt-10 text-center text-[36px] font-black leading-[0.94] tracking-[-0.045em]">
              What our
              <br />
              customers
              <br />
              say.
            </h3>
          </div>

          <div className="mt-auto">
            <div className="mb-6 h-[2px] w-full bg-white/80" />

            <Rating
              rating={5}
            />

            <p className="mt-5 text-center text-[11px] font-medium leading-5 text-white/60">
              Real customer
              feedback from
              businesses across
              Mauritius.
            </p>
          </div>
        </div>

        {/* ============================================================ */}
        {/* INDEX                                                        */}
        {/* ============================================================ */}

        <div className="relative box-border h-full w-full cursor-grab rounded-xl border border-black/10 bg-[#EEEEEC]">
          <div className="border-b border-black/10 bg-[#B7B7B2] px-4 py-2 font-mono text-[9px] font-bold uppercase tracking-wider text-white">
            Index
          </div>

          <div className="p-6">
            <h3 className="text-xl font-black tracking-[-0.03em] text-black">
              Customer reviews
            </h3>

            <ol className="mt-6 grid grid-cols-[1fr_auto] gap-x-4 gap-y-3">
              {testimonials.map(
                (
                  testimonial,
                  index,
                ) => (
                  <React.Fragment
                    key={
                      testimonial.name
                    }
                  >
                    <li>
                      <button
                        type="button"
                        onClick={() =>
                          handleFlip(
                            index +
                              2,
                          )
                        }
                        className="flex min-h-7 items-center text-left text-[10px] font-semibold text-black/75 transition-colors hover:text-[#C01822]"
                      >
                        {
                          testimonial.name
                        }
                      </button>
                    </li>

                    <li className="flex items-center justify-end font-mono text-[9px] text-black/35">
                      {index +
                        2}
                    </li>
                  </React.Fragment>
                ),
              )}
            </ol>
          </div>
        </div>

        {/* ============================================================ */}
        {/* CUSTOMER REVIEWS                                             */}
        {/* ============================================================ */}

        {testimonials.map(
          (
            testimonial,
            index,
          ) => (
            <div
              key={
                testimonial.name
              }
              className="relative box-border h-full w-full cursor-grab rounded-xl border border-black/10 bg-[#F2F2EF] text-black"
            >
              <div className="border-b border-black/[0.07] px-4 py-2 text-right font-mono text-[9px] font-bold text-black/35">
                {index +
                  2}
              </div>

              <div className="flex h-[calc(100%-33px)] flex-col items-center px-5 pb-5 pt-6">
                {testimonial.image ? (
                  <Image
                    src={
                      testimonial.image
                    }
                    alt={
                      testimonial.name
                    }
                    width={
                      86
                    }
                    height={
                      86
                    }
                    sizes="86px"
                    className="size-[86px] rounded-full object-cover shadow-[0_12px_30px_rgba(0,0,0,0.15)]"
                  />
                ) : (
                  <InitialAvatar
                    name={
                      testimonial.name
                    }
                  />
                )}

                <div className="mt-3 text-center">
                  <h3 className="text-[15px] font-black leading-tight">
                    {
                      testimonial.name
                    }
                  </h3>

                  <p className="mt-1 text-[10px] font-medium text-black/45">
                    {
                      testimonial.jobtitle
                    }
                  </p>
                </div>

                <blockquote className="mt-5 flex-1 overflow-hidden text-center font-serif text-[12px] font-semibold leading-[1.6] text-black/70">
                  “
                  {
                    testimonial.text
                  }
                  ”
                </blockquote>

                <div className="mt-4">
                  <Rating
                    rating={
                      testimonial.rating
                    }
                  />
                </div>
              </div>
            </div>
          ),
        )}

        {/* ============================================================ */}
        {/* BACK                                                         */}
        {/* ============================================================ */}

        <div className="flex h-full w-full cursor-grab flex-col items-center justify-center rounded-xl border border-white/10 bg-[#08090A] p-8 text-center text-white shadow-[0_20px_55px_rgba(0,0,0,0.28)]">
          <Star
            aria-hidden
            className="size-12 fill-[#C01822] text-[#C01822]"
          />

          <h3 className="mt-6 text-3xl font-black">
            Thank You!
          </h3>

          <p className="mt-4 max-w-[220px] text-[12px] leading-5 text-white/60">
            We truly appreciate
            your feedback and
            your trust in Mobiz.
          </p>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default Component;