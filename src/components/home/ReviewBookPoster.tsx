import { Star } from "lucide-react";
import type { Testimonial } from "@/components/ui/3d-book-testimonial";

/**
 * What the book slot shows before the interactive flipbook exists.
 *
 * Measured on production: `.review-book-stage` reserved 450px and held exactly
 * one empty child until the visitor scrolled near it, at which point three
 * chunks downloaded and the subtree went from 1 to 223 nodes in one step. So the
 * section read as a blank panel and then lurched into existence — the "blank
 * section" and "slow book" in the same defect.
 *
 * This poster is plain server-rendered markup with no client cost. It shows the
 * first real review in the book's own geometry, so the slot looks finished on
 * first paint; the flipbook replaces it in place once its chunk has loaded.
 * Deliberately not a spinner or a skeleton: a placeholder that admits it is a
 * placeholder still reads as "not loaded yet".
 */
export function ReviewBookPoster({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="review-poster" aria-hidden>
      <div className="review-poster__page">
        <div className="review-poster__stars">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              aria-hidden
              className="review-poster__star"
              strokeWidth={0}
              fill={i < testimonial.rating ? "#F5B301" : "rgba(0,0,0,0.14)"}
            />
          ))}
        </div>

        <p className="review-poster__text">{testimonial.text}</p>

        <div className="review-poster__by">
          <span className="review-poster__name">{testimonial.name}</span>
          <span className="review-poster__role">{testimonial.jobtitle}</span>
        </div>
      </div>

      {/* The right leaf of the spread, closed — implies a book without drawing one. */}
      <div className="review-poster__leaf" />
    </div>
  );
}

export default ReviewBookPoster;
