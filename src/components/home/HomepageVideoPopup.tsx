"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const POPUP_DELAY_MS = 18000;
const VIDEO_SRC = "/videos/popup-video.mp4";
const VIDEO_POSTER = "/images/hero/popup-video-poster.webp";
const SESSION_KEY = "mobiz-homepage-video-popup-shown-v8";

export default function HomepageVideoPopup() {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

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
    if (sessionStorage.getItem(SESSION_KEY) === "true") return;

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
      closeButtonRef.current?.focus();
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
      video.muted = !hasUserInteracted;
      video.volume = hasUserInteracted ? 1 : 0;

      video.play().catch(() => {
        video.muted = true;
        video.volume = 0;
        video.play().catch(() => {
          // Some browsers may still block autoplay.
        });
      });
    }

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("keydown", handleKeyDown);
    };
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

  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[130] flex items-center justify-center bg-black/52 p-2 transition-opacity duration-500 sm:p-3 ${
        entered ? "opacity-100" : "opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="MoBiz.mu popup introduction video"
      onClick={handleClose}
    >
      <div
        className={`relative w-full max-w-[96vw] transition-all duration-[650ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:max-w-[760px] lg:max-w-[860px] ${
          entered
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-8 scale-[0.95] opacity-0"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          aria-label="Close popup video"
          className="absolute right-2 top-2 z-30 inline-flex h-7 w-7 items-center justify-center rounded-full bg-black/62 text-white transition duration-300 hover:bg-black/78 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:h-8 sm:w-8"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        <div className="relative overflow-hidden rounded-[18px] sm:rounded-[20px]">
          <div className="relative aspect-[9/16] w-full sm:aspect-video">
            <video
              ref={videoRef}
              src={VIDEO_SRC}
              poster={VIDEO_POSTER}
              className="h-full w-full object-cover"
              aria-label="MoBiz.mu promotional video"
              playsInline
              preload="none"
              autoPlay
              controls
              controlsList="nodownload noplaybackrate"
              disablePictureInPicture
              onEnded={handleClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
}