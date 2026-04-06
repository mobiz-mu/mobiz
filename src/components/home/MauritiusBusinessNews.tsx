"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Newspaper } from "lucide-react";

type NewsItem = {
  title: string;
  link: string;
  pubDate: string;
  source: string;
  image: string;
};

type ApiResponse = {
  ok: boolean;
  updatedAt: string;
  items: NewsItem[];
};

const DEFAULT_PLACEHOLDER = "/images/mauritiusnews/defimedia.jpg";

const FALLBACK_ITEMS: NewsItem[] = [
  {
    title: "Mauritius market updates and business headlines from trusted local media",
    link: "https://defimedia.info",
    pubDate: new Date().toISOString(),
    source: "Defimedia",
    image: "/images/mauritiusnews/defimedia.jpg",
  },
  {
    title: "Economic and finance stories relevant to businesses in Mauritius",
    link: "https://lexpress.mu",
    pubDate: new Date().toISOString(),
    source: "L'Express",
    image: "/images/mauritiusnews/lexpress.jpg",
  },
  {
    title: "Local business coverage and market developments across Mauritius",
    link: "https://topfm.mu",
    pubDate: new Date().toISOString(),
    source: "Top FM",
    image: "/images/mauritiusnews/topfm.png",
  },
  {
    title: "Mauritius business and economic coverage from national publishers",
    link: "https://lemauricien.com",
    pubDate: new Date().toISOString(),
    source: "Le Mauricien",
    image: "/images/mauritiusnews/lemauricien.jpg",
  },
  {
    title: "Economic news and business information for the Mauritian market",
    link: "https://defimedia.info",
    pubDate: new Date().toISOString(),
    source: "Défi Info",
    image: "/images/mauritiusnews/defimedia.jpg",
  },
];

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-MU", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function NewsThumb({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  const safeSrc = src && src.trim() ? src : DEFAULT_PLACEHOLDER;

  return (
    <img
      src={safeSrc}
      alt={alt}
      loading="eager"
      decoding="async"
      referrerPolicy="no-referrer"
      className="h-full w-full object-cover object-center"
      onError={(e) => {
        const target = e.currentTarget;
        if (target.src !== DEFAULT_PLACEHOLDER) {
          target.src = DEFAULT_PLACEHOLDER;
        }
      }}
    />
  );
}

function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex h-[160px] w-[360px] shrink-0 overflow-hidden rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] shadow-[0_10px_24px_rgba(7,18,38,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_36px_rgba(7,18,38,0.08)] sm:h-[170px] sm:w-[390px] lg:h-[178px] lg:w-[420px]">
      <div className="relative h-full w-[145px] shrink-0 overflow-hidden bg-slate-100 sm:w-[155px] lg:w-[170px]">
        <NewsThumb src={item.image} alt={item.title} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent" />
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-between p-3.5 sm:p-4">
        <div>
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0b7c91]">
            <span>{item.source}</span>
            {item.pubDate ? <span className="text-slate-300">•</span> : null}
            {item.pubDate ? (
              <span className="text-slate-500 normal-case tracking-normal">
                {formatDate(item.pubDate)}
              </span>
            ) : null}
          </div>

          <h3
            className="mt-2 line-clamp-4 text-[14px] font-semibold leading-5 text-[#071226] sm:text-[14.5px] sm:leading-[1.45]"
            style={{ fontFamily: '"Poppins", sans-serif' }}
          >
            {item.title}
          </h3>
        </div>

        <Link
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#071226] transition hover:text-[#8b6a18]"
        >
          View Article
          <ArrowRight className="h-3.5 w-3.5 text-[#caa43f] transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

export default function MauritiusBusinessNews() {
  const [items, setItems] = useState<NewsItem[]>(FALLBACK_ITEMS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6500);

    async function loadNews() {
      try {
        const res = await fetch("/api/mauritius-business-news", {
          cache: "no-store",
          signal: controller.signal,
        });

        const data = (await res.json()) as ApiResponse;

        if (!alive) return;

        if (Array.isArray(data.items) && data.items.length > 0) {
          setItems(data.items);
        } else {
          setItems(FALLBACK_ITEMS);
        }
      } catch {
        if (!alive) return;
        setItems(FALLBACK_ITEMS);
      } finally {
        clearTimeout(timeout);
        if (alive) setLoading(false);
      }
    }

    loadNews();

    return () => {
      alive = false;
      clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  const marqueeItems = useMemo(
    () => (items.length ? [...items, ...items] : [...FALLBACK_ITEMS, ...FALLBACK_ITEMS]),
    [items]
  );

  return (
    <section
      id="mauritius-business-news"
      aria-labelledby="mauritius-business-news-heading"
      className="w-full bg-white py-4 sm:py-5 lg:py-6"
    >
      <div className="w-full">
        <div className="relative overflow-hidden border-y border-slate-200/80 bg-white px-4 py-5 shadow-[0_16px_40px_rgba(7,18,38,0.04)] sm:px-5 sm:py-6 lg:px-8 lg:py-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,123,147,0.06),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(17,155,126,0.06),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#d9c27c] to-transparent" />

          <div className="relative z-10 mb-4 px-1 sm:mb-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ead9a8] bg-[#fffdf7] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
              <Newspaper className="h-3.5 w-3.5" />
              Mauritius Business & Economic News
            </div>

            <h2
              id="mauritius-business-news-heading"
              className="mt-3 text-balance text-[1.45rem] font-semibold tracking-tight text-[#071226] sm:text-[1.75rem] lg:text-[2rem]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              Latest business and economic headlines for Mauritius.
            </h2>
          </div>

          <div className="relative z-10 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-16" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-16" />

            {loading && items.length === 0 ? (
              <div className="flex gap-3 sm:gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-[160px] w-[360px] shrink-0 rounded-[22px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] sm:h-[170px] sm:w-[390px] lg:h-[178px] lg:w-[420px]"
                  />
                ))}
              </div>
            ) : (
              <div className="news-marquee flex w-max items-stretch gap-3 sm:gap-4">
                {marqueeItems.map((item, index) => (
                  <NewsCard key={`${item.link}-${index}`} item={item} />
                ))}
              </div>
            )}
          </div>

          <style>{`
            .news-marquee {
              animation: mobizNewsMarquee 90s linear infinite;
              will-change: transform;
            }

            @keyframes mobizNewsMarquee {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            @media (prefers-reduced-motion: reduce) {
              .news-marquee {
                animation: none !important;
                transform: translate3d(0, 0, 0) !important;
              }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}