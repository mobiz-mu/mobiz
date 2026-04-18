"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const POPUP_DELAY_MS = 18000;
const VIDEO_SRC = "/videos/popup-video.mp4";
const VIDEO_POSTER = "/images/hero/popup-video-poster.jpg";
const SESSION_KEY = "mobiz-homepage-video-popup-shown-v6";

export default function HomepageVideoPopup() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [entered, setEntered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown === "true") return;

    const markLoaded = () => setPageLoaded(true);

    if (document.readyState === "complete") {
      markLoaded();
    } else {
      window.addEventListener("load", markLoaded, { once: true });
    }

    return () => {
      window.removeEventListener("load", markLoaded);
    };
  }, []);

  useEffect(() => {
    if (!pageLoaded) return;

    const alreadyShown = sessionStorage.getItem(SESSION_KEY);
    if (alreadyShown === "true") return;

    const timer = window.setTimeout(() => {
      setOpen(true);
      sessionStorage.setItem(SESSION_KEY, "true");
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [pageLoaded]);

  useEffect(() => {
    if (!open) {
      setEntered(false);
      return;
    }

    window.dispatchEvent(new CustomEvent("mobiz:popup-video-open"));

    const raf = window.requestAnimationFrame(() => {
      setEntered(true);
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.playsInline = true;
      video.preload = "metadata";
      video.defaultMuted = false;
      video.muted = false;
      video.volume = 1;

      const playWithSound = async () => {
        try {
          await video.play();
        } catch {
          // Browser may block audible autoplay.
          // Fallback to muted autoplay so playback still begins visually.
          video.muted = true;
          video.volume = 0;

          try {
            await video.play();
          } catch {
            // Final fallback: remain paused until the user interacts.
          }
        }
      };

      void playWithSound();
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (!hasUserInteracted) return;

    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    video.volume = 1;

    video.play().catch(() => {
      // Some browsers can still resist immediate unmuted playback.
    });
  }, [open, hasUserInteracted]);

  function handleClose() {
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    window.dispatchEvent(new CustomEvent("mobiz:popup-video-close"));
    setEntered(false);
    setOpen(false);
  }

  function handleEnded() {
    handleClose();
  }

  if (!mounted || !open) return null;

  return (
    <div
      className={`fixed inset-0 z-[130] flex items-center justify-center bg-black/52 p-2 transition-all duration-500 sm:p-3 ${
        entered ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="MoBiz.mu popup introduction video"
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-[96vw] bg-transparent transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-w-[760px] lg:max-w-[860px] ${
          entered
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-[0.94] opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup video"
          className="absolute right-2 top-2 z-30 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/46 text-white backdrop-blur-sm transition duration-300 hover:bg-black/72 sm:right-2.5 sm:top-2.5 sm:h-7.5 sm:w-7.5"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="pointer-events-none absolute inset-0 -z-10 rounded-[20px] opacity-90 blur-2xl transition duration-700">
          <div className="absolute inset-x-[14%] top-[8%] h-[24%] rounded-full bg-white/10" />
          <div className="absolute bottom-[10%] left-[18%] h-[16%] w-[30%] rounded-full bg-[#f4d77a]/10" />
          <div className="absolute bottom-[14%] right-[14%] h-[18%] w-[34%] rounded-full bg-[#1d4ed8]/10" />
        </div>

        <div className="relative overflow-hidden rounded-[18px] bg-transparent sm:rounded-[20px]">
          <div className="relative aspect-[9/16] w-full sm:aspect-video">
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              poster={VIDEO_POSTER}
              className={`h-full w-full object-cover transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                entered ? "scale-100" : "scale-[1.06]"
              }`}
              playsInline
              preload="metadata"
              autoPlay
              controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              onEnded={handleEnded}
            />
          </div>

          <div
            className={`pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_48%,rgba(0,0,0,0.18)_100%)] transition-opacity duration-700 ${
              entered ? "opacity-100" : "opacity-0"
            }`}
          />

          <div
            className={`pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_18%,rgba(255,255,255,0.00)_38%)] transition-opacity duration-700 ${
              entered ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>
      </div>
    </div>
  );
}