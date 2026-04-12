import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  CheckCircle2,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Client Testimonials Mauritius | MoBiz.mu Reviews, Feedback & Success Stories",
  description:
    "Read premium client testimonials for MoBiz.mu across website design, digital marketing, accounting support, logistics solutions, and branding services in Mauritius.",
  keywords: [
    "MoBiz.mu testimonials",
    "MoBiz.mu reviews",
    "Client reviews Mauritius",
    "Website Design Mauritius reviews",
    "Digital Marketing Mauritius reviews",
    "Business Services Mauritius testimonials",
    "MoBiz.mu Google reviews",
  ],
  alternates: {
    canonical: `${siteUrl}/testimonials`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MoBiz.mu Testimonials | Premium Client Feedback in Mauritius",
    description:
      "Explore real client feedback for MoBiz.mu across websites, marketing, branding, accounting, and business support services in Mauritius.",
    url: `${siteUrl}/testimonials`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MoBiz.mu Testimonials | Premium Client Feedback",
    description:
      "Read real testimonials from businesses that chose MoBiz.mu for premium business growth support in Mauritius.",
  },
};

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

const faqs = [
  {
    q: "What do clients say about MoBiz.mu?",
    a: "Clients consistently highlight premium presentation, fast execution, stronger communication, better visibility, and a more professional business image after working with MoBiz.mu.",
  },
  {
    q: "What services do testimonials mention most often?",
    a: "The testimonials most often mention website design, branding, digital marketing, business presentation, and the overall premium feel of the service.",
  },
  {
    q: "Why do businesses trust MoBiz.mu?",
    a: "Businesses trust MoBiz.mu because the work is structured, polished, mobile-friendly, premium in presentation, and aligned with real business growth goals.",
  },
  {
    q: "Can I contact MoBiz.mu after reading the reviews?",
    a: "Yes. If you want a similar premium result for your own business, you can contact MoBiz.mu directly through the contact page or Google profile link.",
  },
];

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

function AggregateJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MoBiz.mu",
    url: siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <article className="group h-full rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(7,18,38,0.08)] sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-start gap-3">
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[14px] font-semibold text-white ${avatarColor(
              review.name
            )}`}
          >
            {getInitials(review.name)}
          </div>

          <div className="min-w-0">
            <h3
              className="truncate text-[15px] font-semibold leading-tight text-[#071226] sm:text-[16px]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              {review.name}
            </h3>
            <p className="mt-1 text-[12px] leading-none text-slate-500">
              {review.date}
            </p>
          </div>
        </div>

        <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#fff8e8] text-[#c99a18]">
          <Quote className="h-4.5 w-4.5" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <Stars rating={review.rating} />
        <span className="text-[13px] font-semibold text-[#071226]">
          {review.rating.toFixed(1)}/5
        </span>
      </div>

      <p className="mt-4 text-[14px] leading-7 text-slate-700 sm:text-[15px]">
        {review.text}
      </p>
    </article>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <AggregateJsonLd />
      <FaqJsonLd />

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <Sparkles className="h-3.5 w-3.5" />
                Client Testimonials
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Real Feedback from Businesses That Chose MoBiz.mu
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                Explore client feedback across premium website design, digital
                marketing, branding, accounting support, logistics solutions, and
                executive business presentation in Mauritius.
              </p>

              <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={googleReviewsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  View Google Reviews
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "4.9/5 Client Rating",
                  text: "A strong satisfaction signal reflecting quality, presentation, and follow-through.",
                  icon: Star,
                },
                {
                  title: "Premium Service Feel",
                  text: "Many clients highlight the executive and polished quality of the final result.",
                  icon: Sparkles,
                },
                {
                  title: "Stronger Trust",
                  text: "Businesses often say their brand feels more credible and more serious after launch.",
                  icon: ShieldCheck,
                },
                {
                  title: "Growth Support",
                  text: "Clients regularly mention better visibility, stronger presentation, and improved business perception.",
                  icon: TrendingUp,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h2
                      className="mt-4 text-[1.1rem] font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>

                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-4 sm:py-6 lg:py-8">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  Why Testimonials Matter
                </div>

                <h2
                  className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.7rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Trust Is Built Faster When Real Clients Speak for the Work
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  A premium service should not only look good. It should leave
                  clients feeling more confident, better supported, and more
                  satisfied with the result. These reviews help new visitors
                  understand what it feels like to work with MoBiz.mu.
                </p>

                <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  Across websites, branding, SEO, digital marketing, accounting,
                  logistics, and business support, the common pattern is clarity,
                  polish, speed, premium presentation, and stronger business
                  trust after delivery.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  "Premium presentation that makes businesses feel more executive",
                  "Better communication, smoother project flow, and fast response",
                  "Results that feel cleaner, more modern, and more trustworthy",
                  "Support that helps companies present themselves more seriously",
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[20px] border border-[#e7edf5] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8b6a18]" />
                    <p className="text-[14px] leading-7 text-[#20314d]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  Client Reviews
                </div>

                <h2
                  className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.8rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Testimonials from Real Clients
                </h2>

                <p className="mt-3 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  Feedback from clients who chose MoBiz.mu for premium website
                  design, digital marketing, branding, accounting support,
                  logistics solutions, and executive business presentation in
                  Mauritius.
                </p>
              </div>

              <Link
                href={googleReviewsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-[20px] border border-[#e8edf5] bg-white px-4 py-3 shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex h-[54px] w-[66px] items-center justify-center overflow-hidden rounded-[10px] bg-transparent">
                  <Image
                    src="/images/google-reviews-cover.jpg"
                    alt="MoBiz.mu Google reviews cover"
                    width={66}
                    height={54}
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

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-5 text-white shadow-[0_22px_52px_rgba(7,18,38,0.16)] sm:p-7 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div>
                  <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-[11px]">
                    Why Businesses Recommend MoBiz.mu
                  </div>

                  <h2
                    className="mt-4 text-balance text-[1.8rem] font-semibold tracking-tight sm:text-[2.2rem] lg:text-[2.7rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    Premium Execution Makes a Visible Difference
                  </h2>

                  <p className="mt-4 text-[14px] leading-7 text-white/78 sm:text-[15px]">
                    Businesses recommend MoBiz.mu because the results do not feel
                    generic. They feel cleaner, more premium, more structured,
                    and more aligned with real business goals.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Website Design",
                    "Digital Marketing",
                    "Branding Support",
                    "Accounting Services",
                    "Logistics Solutions",
                    "Executive Business Presentation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/84"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-[#e8edf5] bg-[#fbfcfe] py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                FAQ
              </div>

              <h2
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Testimonials FAQ
              </h2>
            </div>

            <div className="mt-6 space-y-3">
              {faqs.map((item) => (
                <article
                  key={item.q}
                  className="rounded-[22px] border border-[#e4eaf2] bg-white p-5 shadow-[0_12px_26px_rgba(7,18,38,0.04)] sm:p-6"
                >
                  <h3
                    className="text-[1.05rem] font-semibold tracking-tight text-[#071226]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-6 text-center shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  <Users className="h-3.5 w-3.5" />
                  Ready to Become Our Next Success Story?
                </div>

                <h2
                  className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.4rem] lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s Create a Premium Result for Your Business
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  Whether you need a premium website, stronger branding, better
                  digital visibility, accounting support, or a more complete
                  business presentation, MoBiz.mu is here to help you move
                  forward with higher standards and better results.
                </p>

                <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href={googleReviewsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Read More Reviews
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