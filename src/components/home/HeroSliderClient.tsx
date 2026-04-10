"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type HeroImage = {
  src: string;
  alt: string;
};

const landscapeImages: HeroImage[] = [
  {
    src: "/images/hero/H1.png",
    alt: "MoBiz.mu Mauritius website design and development banner showing premium executive business website services and digital solutions",
  },
  {
    src: "/images/hero/H2.png",
    alt: "MoBiz.mu Mauritius digital marketing banner showing SEO services social media marketing and online business growth solutions",
  },
  {
    src: "/images/hero/H3.png",
    alt: "MoBiz.mu Mauritius branding and business solutions banner with premium corporate identity and executive brand development visuals",
  },
  {
    src: "/images/hero/H4.png",
    alt: "MoBiz.mu Mauritius luxury business websites banner showing professional company presentation and premium web design services",
  },
  {
    src: "/images/hero/H5.png",
    alt: "MoBiz.mu Mauritius accounting services banner with bookkeeping financial management and executive business support visuals",
  },
  {
    src: "/images/hero/H6.png",
    alt: "MoBiz.mu Mauritius tax filing and compliance banner with premium finance and business tax return service visuals",
  },
  {
    src: "/images/hero/H7.png",
    alt: "MoBiz.mu Mauritius logistics solutions banner with delivery operations and professional business support visuals",
  },
  {
    src: "/images/hero/H8.png",
    alt: "MoBiz.mu Mauritius import export support banner with premium trade logistics and business expansion visuals",
  },
  {
    src: "/images/hero/H9.png",
    alt: "MoBiz.mu Mauritius business support and strategic solutions banner with executive consulting and company growth visuals",
  },
];

const HERO_VIDEO_SRC = "/videos/herobannervideo.mp4";
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
        className="flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-1 backdrop-blur-sm"
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
                ? "w-5 bg-white/60"
                : "w-1.5 bg-white/20 hover:bg-white/30"
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
}: {
  images: HeroImage[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="relative h-[420px] w-full overflow-hidden bg-white sm:h-[500px] lg:h-[560px] xl:h-[640px]">
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
              fetchPriority={index < 3 ? "high" : "auto"}
              loading={index < 3 ? "eager" : "lazy"}
              quality={75}
              sizes="(max-width: 1279px) 100vw, 74vw"
              className="object-cover object-center"
            />
          </div>
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-black/6 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black/6 to-transparent" />

      <SliderDots
        total={images.length}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />
    </div>
  );
}

function VideoPanel() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [inView, setInView] = useState(true);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [playStarted, setPlayStarted] = useState(false);

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
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio > 0.45);
      },
      {
        threshold: [0, 0.2, 0.45, 0.7, 1],
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlayWithSound = async () => {
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
        setPlayStarted(true);
      } catch {
        // Browser may block audible autoplay until user interaction.
      }
    };

    if (inView) {
      video.currentTime = 0;
      void tryPlayWithSound();
    } else {
      video.pause();
    }
  }, [inView]);

  useEffect(() => {
    if (!hasUserInteracted) return;

    const video = videoRef.current;
    if (!video || !inView) return;

    const playAfterInteraction = async () => {
      try {
        video.muted = false;
        video.volume = 1;
        await video.play();
        setPlayStarted(true);
      } catch {
        // If blocked again, nothing else to do without another interaction.
      }
    };

    void playAfterInteraction();
  }, [hasUserInteracted, inView]);

  return (
    <div
      ref={sectionRef}
      className="relative h-[420px] w-full overflow-hidden bg-black sm:h-[500px] lg:h-[560px] xl:h-[640px]"
    >
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        className="absolute inset-0 h-full w-full object-cover"
        playsInline
        preload="auto"
        autoPlay
        loop
      />

      {!playStarted && (
        <div className="pointer-events-none absolute inset-0 bg-black/0" />
      )}
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
    <section className="w-full bg-white py-0" aria-label="MoBiz.mu homepage hero">
      <div className="w-full px-0">
        <div className="grid gap-0 bg-white xl:grid-cols-[1.86fr_0.64fr]">
          <div className="hidden xl:block">
            <LandscapeSlider
              images={landscapeImages}
              activeIndex={activeIndex}
              onSelect={setActiveIndex}
            />
          </div>

          <div className="w-full">
            <VideoPanel />
          </div>
        </div>
      </div>
    </section>
  );
}