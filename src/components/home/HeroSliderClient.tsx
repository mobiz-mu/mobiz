"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

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

const YOUTUBE_VIDEO_ID = "9DXJYd7vfkE";

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
    <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2">
      <div className="flex items-center gap-1.5 rounded-full bg-white/7 px-2 py-1 backdrop-blur-sm">
        {Array.from({ length: total }).map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show hero slide ${index + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "w-5 bg-white/52"
                : "w-1.5 bg-white/10 hover:bg-white/20"
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
      <div
        className="flex h-full w-full transition-transform duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={image.src} className="h-full w-full shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              width={2200}
              height={1200}
              priority={index === 0}
              sizes="(max-width: 1279px) 100vw, 74vw"
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/6 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/6 to-transparent" />

      <SliderDots
        total={images.length}
        activeIndex={activeIndex}
        onSelect={onSelect}
      />
    </div>
  );
}

function VideoPanel() {
  const videoSrc = useMemo(
    () =>
      `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=0&controls=1&loop=1&playlist=${YOUTUBE_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1`,
    []
  );

  return (
    <div className="relative h-[420px] w-full overflow-hidden bg-[#050b18] sm:h-[500px] lg:h-[560px] xl:h-[640px]">
      <iframe
        src={videoSrc}
        title="MoBiz.mu featured short video about business growth digital services and premium Mauritius solutions"
        className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-[1.01]"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/8 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/8 to-transparent" />
    </div>
  );
}

export default function HeroSliderClient() {
  const [landscapeIndex, setLandscapeIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setLandscapeIndex((prev) => (prev + 1) % landscapeImages.length);
    }, 7600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-0">
      <div className="w-full px-0">
        <div className="grid gap-0 bg-white xl:grid-cols-[1.86fr_0.64fr]">
          <div className="hidden xl:block">
            <LandscapeSlider
              images={landscapeImages}
              activeIndex={landscapeIndex}
              onSelect={setLandscapeIndex}
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