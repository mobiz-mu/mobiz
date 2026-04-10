"use client";

import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";

const POPUP_DELAY_MS = 18000;
const VIDEO_SRC = "/videos/popup-video.mp4";
const SESSION_KEY = "mobiz-homepage-video-popup-shown-v4";

export default function HomepageVideoPopup() {
  const [open, setOpen] = useState(false);
  const [pageLoaded, setPageLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.muted = false;
      video.volume = 1;

      const playPromise = video.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {
          // Browser may block autoplay with sound.
          // Controls stay visible so the visitor can press play manually.
        });
      }
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function handleClose() {
    const video = videoRef.current;

    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setOpen(false);
  }

  function handleEnded() {
    handleClose();
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[130] flex items-center justify-center bg-[#071226]/78 p-3 backdrop-blur-md sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="mobiz-popup-video-title"
    >
      <div className="relative w-full max-w-[94vw] overflow-hidden rounded-[22px] border border-[#f3d77a]/30 bg-[linear-gradient(180deg,#040b16_0%,#071226_55%,#09162c_100%)] shadow-[0_28px_80px_rgba(2,8,20,0.52),0_0_0_1px_rgba(243,215,122,0.08),0_0_24px_rgba(243,215,122,0.10)] animate-[mobizPopupIn_420ms_cubic-bezier(0.22,1,0.36,1)] sm:max-w-[620px] sm:rounded-[28px]">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#f3d77a]/75 to-transparent" />
        <div className="pointer-events-none absolute -left-6 top-0 h-24 w-28 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 rounded-full bg-[#f3d77a]/12 blur-2xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-24 w-40 -translate-x-1/2 rounded-full bg-[#f3d77a]/8 blur-3xl" />

        <button
          type="button"
          onClick={handleClose}
          aria-label="Close popup video"
          className="absolute right-2.5 top-2.5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-black/35 text-white backdrop-blur-md transition hover:border-[#f3d77a]/35 hover:bg-black/55 sm:right-3 sm:top-3 sm:h-11 sm:w-11"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="px-3 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4">
          <div
            id="mobiz-popup-video-title"
            className="pr-12 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-xs"
          >
            MoBiz.mu
          </div>

          <div className="mt-2 overflow-hidden rounded-[18px] border border-white/10 bg-black shadow-[0_18px_38px_rgba(2,8,20,0.30)] sm:rounded-[22px]">
            <div className="relative aspect-video w-full">
              <video
                ref={videoRef}
                src={VIDEO_SRC}
                className="h-full w-full object-cover"
                controls
                playsInline
                preload="auto"
                autoPlay
                onEnded={handleEnded}
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes mobizPopupIn {
            0% {
              opacity: 0;
              transform: translateY(18px) scale(0.94);
            }
            100% {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>
      </div>
    </div>
  );
}