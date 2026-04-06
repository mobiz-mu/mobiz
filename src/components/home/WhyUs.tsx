"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import { CheckCircle2 } from "lucide-react";

const whyImages = [
  {
    src: "/images/whyus/1.png",
    alt: "Premium executive business image representing website design digital growth and online business solutions in Mauritius by MoBiz.mu",
  },
  {
    src: "/images/whyus/2.png",
    alt: "Luxury professional business image representing premium company support brand authority and digital services in Mauritius by MoBiz.mu",
  },
  {
    src: "/images/whyus/3.jpeg",
    alt: "Executive service image representing premium digital marketing branding and business solutions in Mauritius by MoBiz.mu",
  },
  {
    src: "/images/whyus/4.png",
    alt: "High-end business image representing trusted accounting logistics and strategic business support in Mauritius by MoBiz.mu",
  },
];

const whyPoints = [
  "Premium website design in Mauritius with luxury presentation, conversion-focused structure, and stronger brand credibility.",
  "Executive support across digital marketing, accounting services, logistics solutions, and branding for growing businesses.",
  "Mobile-first business experiences with strong SEO foundations for Mauritius, Rodrigues, Réunion, and the Indian Ocean region.",
  "Professional business positioning that helps brands look more established, trustworthy, and market-ready online.",
];

export default function WhyUs() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % whyImages.length);
    }, 9000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-mobiz-mu"
      aria-labelledby="why-mobiz-mu-heading"
      className="w-full bg-white py-7 sm:py-8 lg:py-10"
    >
      <Container className="max-w-[1400px]">
        <div className="grid items-center gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8 xl:grid-cols-[0.68fr_1.32fr] xl:gap-10">
          <div
            className={cn(
              "transition-all duration-700",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_18px_42px_rgba(7,18,38,0.07)] sm:max-w-[340px] lg:max-w-[320px] xl:max-w-[340px]">
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-white">
                <div
                  className="flex h-full w-full transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                  {whyImages.map((image, index) => (
                    <div key={image.src} className="flex h-full w-full shrink-0 items-center justify-center bg-white p-2 sm:p-3">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={1800}
                        height={3200}
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 28vw"
                        className="h-full w-full object-contain object-center"
                      />
                    </div>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-0 rounded-[26px] ring-1 ring-inset ring-black/5" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/8 to-transparent" />

                <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/12 px-2 py-1 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    {whyImages.map((image, index) => (
                      <button
                        key={image.src}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Show why MoBiz.mu image ${index + 1}`}
                        className={cn(
                          "h-1.5 rounded-full transition-all duration-300",
                          index === activeIndex
                            ? "w-5 bg-white/60"
                            : "w-1.5 bg-white/18 hover:bg-white/28"
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={cn(
              "transition-all duration-700 delay-100",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            )}
          >
            <h2
              id="why-mobiz-mu-heading"
              className="text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem] lg:leading-[1.04]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              Why MoBiz.mu?
            </h2>

            <p
              className="mt-4 max-w-3xl text-pretty text-[14px] leading-7 text-slate-600 sm:text-[15px] lg:text-[16px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              MoBiz.mu is built for businesses in Mauritius, Rodrigues, Réunion,
              and the wider Indian Ocean region that want to look more premium,
              operate more professionally, and grow with stronger digital and
              business support. We bring together website design in Mauritius,
              digital marketing, accounting and tax support, logistics solutions,
              and branding with business solutions into one executive-standard
              service ecosystem.
            </p>

            <p
              className="mt-4 max-w-3xl text-pretty text-[14px] leading-7 text-slate-600 sm:text-[15px] lg:text-[16px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Our difference is in the level of presentation, structure, and
              business thinking behind every project. From luxury business
              websites and SEO in Mauritius to Meta Ads, bookkeeping, delivery
              coordination, professional brand assets, and strategic launch
              support, MoBiz.mu helps companies present themselves with greater
              authority, clarity, and trust.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {whyPoints.map((point, index) => (
                <div
                  key={point}
                  className={cn(
                    "flex items-start gap-3 rounded-[20px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)] px-4 py-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)] transition-all duration-700 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(7,18,38,0.07)]",
                    visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  )}
                  style={{ transitionDelay: `${160 + index * 90}ms` }}
                >
                  <div className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#071226] text-[#f3d77a] shadow-[0_10px_20px_rgba(7,18,38,0.10)]">
                    <CheckCircle2 className="h-4.5 w-4.5" />
                  </div>

                  <div
                    className="text-sm leading-6 text-slate-700"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {point}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}