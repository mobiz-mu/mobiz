"use client";

import { useEffect, useRef } from "react";

const HERO_VIDEO_SRC = "/videos/Mobizherovideo.mp4";
const HERO_VIDEO_POSTER = "/videos/MoBiZ.muheroposter.webp";

export default function HeroSliderClient() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.volume = 0;

    const playVideo = () => {
      video.play().catch(() => {
        // Muted autoplay can still be delayed by some browsers.
      });
    };

    playVideo();

    video.addEventListener("canplay", playVideo, { once: true });

    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

  return (
    <section
      className="w-full overflow-hidden bg-[#071226]"
      aria-label="MoBiz.mu homepage hero video"
    >
      <link
        rel="preload"
        as="image"
        href={HERO_VIDEO_POSTER}
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="video"
        href={HERO_VIDEO_SRC}
        type="video/mp4"
      />

      <div className="relative w-full aspect-video overflow-hidden bg-[#071226]">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-contain"
          src={HERO_VIDEO_SRC}
          poster={HERO_VIDEO_POSTER}
          aria-label="MoBiz.mu premium business solutions hero video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
        />
      </div>
    </section>
  );
}
