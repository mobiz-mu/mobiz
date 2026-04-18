"use client";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroImage = {
  src: string;
  alt: string;
};

const landscapeImages: HeroImage[] = [
  {
    src: "/images/hero/H1.webp",
    alt: "MoBiz.mu Mauritius website design and development hero banner showcasing premium executive business website services and digital solutions",
  },
  {
    src: "/images/hero/H2.webp",
    alt: "MoBiz.mu Mauritius digital marketing hero banner showcasing SEO services social media marketing and online business growth solutions",
  },
  {
    src: "/images/hero/H3.webp",
    alt: "MoBiz.mu Mauritius branding and business solutions hero banner with premium corporate identity and executive brand development visuals",
  },
  {
    src: "/images/hero/H4.webp",
    alt: "MoBiz.mu Mauritius luxury business websites hero banner showing professional company presentation and premium web design services",
  },
  {
    src: "/images/hero/H5.webp",
    alt: "MoBiz.mu Mauritius accounting services hero banner with bookkeeping financial management and executive business support visuals",
  },
  {
    src: "/images/hero/H6.webp",
    alt: "MoBiz.mu Mauritius tax filing and compliance hero banner with premium finance and business tax return service visuals",
  },
  {
    src: "/images/hero/H7.webp",
    alt: "MoBiz.mu Mauritius logistics solutions hero banner with delivery operations and professional business support visuals",
  },
  {
    src: "/images/hero/H8.webp",
    alt: "MoBiz.mu Mauritius import export support hero banner with premium trade logistics and business expansion visuals",
  },
  {
    src: "/images/hero/H9.webp",
    alt: "MoBiz.mu Mauritius business support and strategic solutions hero banner with executive consulting and company growth visuals",
  },
];

const HERO_VIDEO_SRC = "/videos/herobannervideo.mp4";
const HERO_VIDEO_POSTER = "/images/hero/video-poster.webp";
const AUTO_ADVANCE_MS = 5200;
const INITIAL_SLIDE_DELAY_MS = 7000;

function SliderDots({
  total,
  activeIndex,
  onSelect,
}: {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="absolute bottom-3 left-1/2 z-20 -translate-x-1/2">
      <div
        className="flex items-center gap-1.5 rounded-full bg-black/20 px-2 py-1 backdrop-blur-sm"
        role="tablist"
        aria-label="Hero slides"
      >
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show hero slide ${index + 1}`}
            aria-selected={index === activeIndex}
            aria-controls={`hero-slide-${index}`}
            role="tab"
            tabIndex={index === activeIndex ? 0 : -1}
            className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
              index === activeIndex
                ? "w-5 bg-white/75"
                : "w-1.5 bg-white/30 hover:bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function LandscapeSlider({
  className = "",
}: {
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let intervalId: number | null = null;

    const startDelayId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % landscapeImages.length);
      }, AUTO_ADVANCE_MS);
    }, INITIAL_SLIDE_DELAY_MS);

    return () => {
      window.clearTimeout(startDelayId);
      if (intervalId !== null) {
        window.clearInterval(intervalId);
      }
    };
  }, []);

  return (
    <div
      className={`relative w-full overflow-hidden bg-white ${className}`}
      aria-label="MoBiz.mu hero banner slider"
    >
      {landscapeImages.map((image, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={image.src}
            id={`hero-slide-${index}`}
            role="tabpanel"
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isActive
                ? "z-10 opacity-100 scale-100"
                : "z-0 opacity-0 scale-[1.01]"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index < 2}
              fetchPriority={index < 2 ? "high" : "auto"}
              loading={index < 2 ? "eager" : "lazy"}
              quality={75}
              sizes="(max-width: 1279px) 100vw, 68vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}

      <SliderDots
        total={landscapeImages.length}
        activeIndex={activeIndex}
        onSelect={setActiveIndex}
      />
    </div>
  );
}

function VideoPanel({
  className = "",
  preload = "metadata",
}: {
  className?: string;
  preload?: "none" | "metadata" | "auto";
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isInView, setIsInView] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const markInteracted = () => setHasUserInteracted(true);

    window.addEventListener("pointerdown", markInteracted, { once: true });
    window.addEventListener("keydown", markInteracted, { once: true });
    window.addEventListener("touchstart", markInteracted, { once: true });

    return () => {
      window.removeEventListener("pointerdown", markInteracted);
      window.removeEventListener("keydown", markInteracted);
      window.removeEventListener("touchstart", markInteracted);
    };
  }, []);

  useEffect(() => {
    const handleVisibility = () => {
      setPageVisible(!document.hidden);
    };

    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.35);
      },
      { threshold: [0, 0.15, 0.35, 0.6, 1] }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handlePopupOpen = () => {
      setPopupOpen(true);
      videoRef.current?.pause();
    };

    const handlePopupClose = () => {
      setPopupOpen(false);
    };

    window.addEventListener(
      "mobiz:popup-video-open",
      handlePopupOpen as EventListener
    );
    window.addEventListener(
      "mobiz:popup-video-close",
      handlePopupClose as EventListener
    );

    return () => {
      window.removeEventListener(
        "mobiz:popup-video-open",
        handlePopupOpen as EventListener
      );
      window.removeEventListener(
        "mobiz:popup-video-close",
        handlePopupClose as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const shouldPause = !pageVisible || popupOpen || !isInView;

    if (shouldPause) {
      video.pause();
      return;
    }

    if (hasUserInteracted) {
      video.muted = false;
      video.volume = 1;
    } else {
      video.muted = true;
      video.volume = 0;
    }

    video.play().catch(() => {
      // Browsers may block audible autoplay until user interaction.
    });
  }, [pageVisible, popupOpen, isInView, hasUserInteracted]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        poster={HERO_VIDEO_POSTER}
        className="absolute inset-0 h-full w-full object-cover object-[center_10%]"
        aria-label="MoBiz.mu hero introduction video"
        playsInline
        preload={preload}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default function HeroSliderClient() {
  return (
    <>
      <Head>
        <link rel="preload" as="image" href="/images/hero/H1.webp" />
        <link rel="preload" as="image" href={HERO_VIDEO_POSTER} />
      </Head>

      <section
        className="w-full bg-white py-0"
        aria-label="MoBiz.mu homepage hero section"
      >
        <div className="w-full px-0">
          {/* Mobile: video only */}
          <div className="block md:hidden">
            <VideoPanel className="h-[72svh] min-h-[520px]" preload="metadata" />
          </div>

          {/* Tablet: banner only */}
          <div className="hidden md:block xl:hidden">
            <LandscapeSlider className="h-[520px] lg:h-[620px]" />
          </div>

          {/* Desktop: banner left + video right */}
          <div className="hidden xl:grid xl:grid-cols-[minmax(0,1.72fr)_minmax(340px,0.9fr)] 2xl:grid-cols-[minmax(0,1.76fr)_minmax(380px,0.86fr)]">
            <LandscapeSlider className="h-[560px] 2xl:h-[640px]" />
            <VideoPanel className="h-[560px] 2xl:h-[640px]" preload="metadata" />
          </div>
        </div>
      </section>
    </>
  );
}