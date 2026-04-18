"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type HeroImage = {
  src: string;
  alt: string;
};

const landscapeImages: HeroImage[] = [
  {
    src: "/images/hero/H1.png",
    alt: "MoBiz.mu Mauritius website design and development hero banner showcasing premium executive business website services and digital solutions",
  },
  {
    src: "/images/hero/H2.png",
    alt: "MoBiz.mu Mauritius digital marketing hero banner showcasing SEO services social media marketing and online business growth solutions",
  },
  {
    src: "/images/hero/H3.png",
    alt: "MoBiz.mu Mauritius branding and business solutions hero banner with premium corporate identity and executive brand development visuals",
  },
  {
    src: "/images/hero/H4.png",
    alt: "MoBiz.mu Mauritius luxury business websites hero banner showing professional company presentation and premium web design services",
  },
  {
    src: "/images/hero/H5.png",
    alt: "MoBiz.mu Mauritius accounting services hero banner with bookkeeping financial management and executive business support visuals",
  },
  {
    src: "/images/hero/H6.png",
    alt: "MoBiz.mu Mauritius tax filing and compliance hero banner with premium finance and business tax return service visuals",
  },
  {
    src: "/images/hero/H7.png",
    alt: "MoBiz.mu Mauritius logistics solutions hero banner with delivery operations and professional business support visuals",
  },
  {
    src: "/images/hero/H8.png",
    alt: "MoBiz.mu Mauritius import export support hero banner with premium trade logistics and business expansion visuals",
  },
  {
    src: "/images/hero/H9.png",
    alt: "MoBiz.mu Mauritius business support and strategic solutions hero banner with executive consulting and company growth visuals",
  },
];

const HERO_VIDEO_SRC = "/videos/herobannervideo.mp4";
const HERO_VIDEO_POSTER = "/images/hero/video-poster.jpg";
const AUTO_ADVANCE_MS = 5200;

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
            role="tab"
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-5 bg-white/70"
                : "w-1.5 bg-white/30 hover:bg-white/45"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function LandscapeSlider({
  images,
  activeIndex,
  onSelect,
  className = "",
}: {
  images: HeroImage[];
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-white ${className}`}
      aria-label="MoBiz.mu hero banner slider"
    >
      {images.map((image, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={image.src}
            className={`absolute inset-0 transition-[opacity,transform] duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isActive
                ? "z-10 opacity-100 scale-100"
                : "z-0 opacity-0 scale-[1.015]"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 ? "eager" : "lazy"}
              quality={75}
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 100vw, 68vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}

      <SliderDots
        total={images.length}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />
    </div>
  );
}

function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const updateDirection = () => {
      const y = window.scrollY;
      const diff = y - lastY;

      if (Math.abs(diff) > 6) {
        setDirection(diff > 0 ? "down" : "up");
        lastY = y;
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return direction;
}

function VideoPanel({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isInView, setIsInView] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);

  const scrollDirection = useScrollDirection();

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
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting && entry.intersectionRatio > 0.35);
      },
      {
        threshold: [0, 0.15, 0.35, 0.6, 1],
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handlePopupOpen = () => {
      setPopupOpen(true);
      const video = videoRef.current;
      if (video) video.pause();
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

  const shouldPause = useMemo(() => {
    if (!pageVisible) return true;
    if (popupOpen) return true;
    if (!isInView) return true;
    if (scrollDirection === "down") return true;
    return false;
  }, [pageVisible, popupOpen, isInView, scrollDirection]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
      // Audible autoplay may be blocked by the browser until user interaction.
    });
  }, [shouldPause, hasUserInteracted]);

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full overflow-hidden ${className}`}
      aria-label="MoBiz.mu hero introduction video"
    >
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        poster={HERO_VIDEO_POSTER}
        className="absolute inset-0 h-full w-full object-cover object-[center_10%]"
        playsInline
        preload={priority ? "auto" : "metadata"}
        autoPlay
        loop
        muted
      />
    </div>
  );
}

export default function HeroSliderClient() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % landscapeImages.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="w-full bg-white py-0"
      aria-label="MoBiz.mu homepage hero section"
    >
      <div className="w-full px-0">
        {/* Mobile: video only */}
        <div className="block md:hidden">
          <VideoPanel className="h-[72svh] min-h-[520px]" priority />
        </div>

        {/* Tablet: banner only */}
        <div className="hidden md:block xl:hidden">
          <LandscapeSlider
            images={landscapeImages}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            className="h-[520px] lg:h-[620px]"
          />
        </div>

        {/* Desktop: banner left, video right */}
        <div className="hidden xl:grid xl:grid-cols-[minmax(0,1.72fr)_minmax(340px,0.9fr)] 2xl:grid-cols-[minmax(0,1.76fr)_minmax(380px,0.86fr)]">
          <LandscapeSlider
            images={landscapeImages}
            activeIndex={activeIndex}
            onSelect={setActiveIndex}
            className="h-[560px] 2xl:h-[640px]"
          />

          <VideoPanel className="h-[560px] 2xl:h-[640px]" priority />
        </div>
      </div>
    </section>
  );
}