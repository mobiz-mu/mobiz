"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";

type Review = {
  id: number;
  name: string;
  date: string;
  rating: number;
  text: string;
};

const googleReviewsHref =
  "https://www.google.com/maps/search/?api=1&query=MoBiz.mu%20La%20Croisette%20Grand%20Baie%20Mauritius";

const reviews: Review[] = [
  {
    id: 1,
    name: "Aisha Ramdin",
    date: "Jan 14, 2025",
    rating: 5,
    text: "MoBiz.mu delivered our website in record time and it looks premium. Sales went up within the first month.",
  },
  {
    id: 2,
    name: "Jean-Michel R.",
    date: "Feb 02, 2025",
    rating: 5,
    text: "Service rapide et professionnel. L’équipe a optimisé notre SEO et les leads ont augmenté.",
  },
  {
    id: 3,
    name: "Kevin Appadoo",
    date: "Feb 18, 2025",
    rating: 5,
    text: "Travay zot la tiptop. MoBiz inn fer nou branding ek social media paret bien pro.",
  },
  {
    id: 4,
    name: "Nadine Hoareau",
    date: "Mar 03, 2025",
    rating: 5,
    text: "Très belle expérience. L’équipe comprend vite le besoin et livre quelque chose de vraiment propre.",
  },
  {
    id: 5,
    name: "Ritesh Boodhun",
    date: "Mar 11, 2025",
    rating: 5,
    text: "Nou website parait beaucoup plus sérieux astèr. Mobile li super propre, rapide et rassurant.",
  },
  {
    id: 6,
    name: "Camille Lutchmeenaraidoo",
    date: "Mar 24, 2025",
    rating: 5,
    text: "Conseils clairs, exécution rapide, et surtout un vrai niveau premium dans la présentation.",
  },
  {
    id: 7,
    name: "Yashna Moothoosamy",
    date: "Apr 05, 2025",
    rating: 5,
    text: "Mo bien satisfait. Zot fine aide nous avec digital marketing ek nou business fine gagne plis visibilité.",
  },
  {
    id: 8,
    name: "Stephan Ah-Chuen",
    date: "Apr 17, 2025",
    rating: 5,
    text: "Excellent follow-up and very polished service. The website and business materials feel executive.",
  },
  {
    id: 9,
    name: "Sabrina Ramloll",
    date: "Apr 29, 2025",
    rating: 5,
    text: "Très satisfaite du rendu final. C’est classe, moderne et beaucoup plus crédible pour nos clients.",
  },
  {
    id: 10,
    name: "Jean-Noël Cangy",
    date: "May 08, 2025",
    rating: 5,
    text: "Bann designs la vrai premium. Communication rapide, équipe sérieuse, résultat bien professionnel.",
  },
  {
    id: 11,
    name: "Priya Seebun",
    date: "May 19, 2025",
    rating: 5,
    text: "MoBiz.mu helped us structure our online presence properly. The brand now feels much stronger.",
  },
  {
    id: 12,
    name: "Didier Virahsawmy",
    date: "Jun 02, 2025",
    rating: 5,
    text: "Un service très complet. Website, visibilité, conseils business — tout est bien cadré.",
  },
  {
    id: 13,
    name: "Vanessa Soobrayen",
    date: "Jun 12, 2025",
    rating: 5,
    text: "Franchement top. Nou inn gagne enn image plus sérieuse et plus luxe pour nou business.",
  },
  {
    id: 14,
    name: "Kersley Rungasamy",
    date: "Jun 25, 2025",
    rating: 5,
    text: "Professional team with a very sharp eye for presentation. Great experience from start to finish.",
  },
  {
    id: 15,
    name: "Elodie Gungadin",
    date: "Jul 04, 2025",
    rating: 5,
    text: "Très bon accompagnement. Le résultat inspire confiance et donne une vraie image haut de gamme.",
  },
  {
    id: 16,
    name: "Ruben Appanah",
    date: "Jul 15, 2025",
    rating: 5,
    text: "Mo content vraiment. Zot coné couma faire enn business parait clean, premium et sérieux.",
  },
  {
    id: 17,
    name: "Nathalie Bibi",
    date: "Jul 27, 2025",
    rating: 5,
    text: "Our website and marketing now look aligned and professional. Strong recommendation.",
  },
  {
    id: 18,
    name: "Amandine Labonne",
    date: "Aug 06, 2025",
    rating: 5,
    text: "Une équipe réactive, créative et très structurée. Le rendu final fait vraiment premium.",
  },
  {
    id: 19,
    name: "Vikash Kistnasamy",
    date: "Aug 18, 2025",
    rating: 5,
    text: "Zot service top. Mo apprécié surtout la qualité, la vitesse et l’attention aux détails.",
  },
  {
    id: 20,
    name: "Riyana Gopal",
    date: "Sep 01, 2025",
    rating: 5,
    text: "Beautiful execution, very smooth communication, and a premium business feel across everything.",
  },
];

const marqueeReviews = [...reviews, ...reviews, ...reviews];

function getInitials(name: string) {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 1).toUpperCase();
  return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
}

function avatarColor(seed: string) {
  const colors = [
    "bg-[#5c6bc0]",
    "bg-[#ab47bc]",
    "bg-[#ef5350]",
    "bg-[#26a69a]",
    "bg-[#42a5f5]",
    "bg-[#ec407a]",
    "bg-[#ff7043]",
    "bg-[#7e57c2]",
    "bg-[#26c6da]",
    "bg-[#8d6e63]",
  ];

  let total = 0;
  for (let i = 0; i < seed.length; i++) total += seed.charCodeAt(i);
  return colors[total % colors.length];
}

function Stars({
  rating,
  size = 16,
}: {
  rating: number;
  size?: number;
}) {
  const fullStars = Math.floor(rating);
  const partial = rating - fullStars;

  return (
    <div className="flex items-center gap-[2px]">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFull = star <= fullStars;
        const isPartial = !isFull && star === fullStars + 1 && partial > 0;

        return (
          <span
            key={star}
            className="relative inline-flex"
            style={{ width: size, height: size }}
          >
            <Star
              className="absolute inset-0 text-[#f3b316]/35"
              style={{ width: size, height: size }}
              strokeWidth={1.8}
            />
            {(isFull || isPartial) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{ width: isFull ? "100%" : `${partial * 100}%` }}
              >
                <Star
                  className="fill-[#f3b316] text-[#f3b316]"
                  style={{ width: size, height: size }}
                  strokeWidth={1.8}
                />
              </span>
            )}
          </span>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="w-[280px] shrink-0 rounded-[20px] border border-[#e8edf5] bg-white px-4 py-4 transition-all duration-500 hover:-translate-y-0.5 sm:w-[300px]">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold text-white ${avatarColor(
              review.name
            )}`}
          >
            {getInitials(review.name)}
          </div>

          <div className="min-w-0">
            <h4 className="truncate text-[15px] font-semibold leading-tight text-[#071226]">
              {review.name}
            </h4>
            <p className="mt-1 text-[12px] leading-none text-slate-500">
              {review.date}
            </p>
          </div>
        </div>

        <Link
          href={googleReviewsHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open Mobiz.mu Google reviews"
          className="mt-[2px] shrink-0"
        >
          <Image
            src="/images/google-badge.jpg"
            alt="Google Reviews badge for Mobiz.mu"
            width={22}
            height={22}
            className="h-[22px] w-[22px] object-contain mix-blend-multiply"
          />
        </Link>
      </div>

      <div className="mt-3">
        <Stars rating={review.rating} />
      </div>

      <p className="mt-3 text-[14px] leading-[1.6] text-slate-700">
        {review.text}
      </p>
    </article>
  );
}

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="w-full bg-white py-7 sm:py-8 lg:py-10"
    >
      <div className="w-full overflow-hidden bg-white">
        <div className="mb-5 flex flex-col gap-4 px-4 md:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8 xl:px-10">
          <div>
            <h2
              id="testimonials-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              Testimonials
            </h2>

            <p
              className="mt-3 max-w-3xl text-[14px] leading-7 text-slate-600 sm:text-[15px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Real feedback from clients who chose MoBiz.mu for premium website
              design, digital marketing, accounting support, logistics
              solutions, and luxury business presentation in Mauritius.
            </p>
          </div>

          <Link
            href={googleReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-[20px] border border-[#e8edf5] bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5"
          >
            <div className="flex h-[58px] w-[70px] items-center justify-center overflow-hidden rounded-[10px] bg-transparent">
              <Image
                src="/images/google-reviews-cover.jpg"
                alt="MoBiz.mu Google reviews cover"
                width={70}
                height={58}
                className="h-full w-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="min-w-0">
              <h3 className="text-[15px] font-semibold leading-[1.1] text-[#071226]">
                MoBiz.mu
              </h3>

              <div className="mt-2 flex items-center gap-2">
                <Stars rating={4.9} />
                <span className="text-[14px] font-semibold text-[#071226]">
                  4.9/5
                </span>
              </div>

              <p className="mt-1 text-[12px] font-medium leading-none text-slate-500">
                Google Reviews
              </p>
            </div>
          </Link>
        </div>

        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/85 to-transparent md:w-16" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/85 to-transparent md:w-16" />

          <div className="reviews-fade reviews-marquee flex w-max items-stretch gap-4 px-4 md:gap-5 md:px-6 lg:px-8 xl:px-10">
            {marqueeReviews.map((review, idx) => (
              <ReviewCard key={`${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .reviews-marquee {
          animation: mobizReviewsMarquee 84s linear infinite;
          will-change: transform;
        }

        .reviews-fade {
          animation-composition: replace;
        }

        @keyframes mobizReviewsMarquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.333%, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reviews-marquee {
            animation: none !important;
            transform: translate3d(0, 0, 0) !important;
          }
        }
      `}</style>
    </section>
  );
}