"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppFloat() {
  return (
    <>
      <Link
        href="https://wa.me/23055068119"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with MoBiz.mu on WhatsApp"
        className="fixed bottom-5 right-5 z-[70] inline-flex items-center justify-center transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:bottom-6 sm:right-6"
      >
        <Image
          src="/icons/whatsapp.png"
          alt="WhatsApp"
          width={58}
          height={58}
          priority
          className="h-[54px] w-[54px] object-contain drop-shadow-[0_14px_30px_rgba(7,18,38,0.22)] motion-safe:animate-[mobizWhatsappFloat_2.8s_ease-in-out_infinite] sm:h-[58px] sm:w-[58px]"
        />
      </Link>

      <style jsx>{`
        @keyframes mobizWhatsappFloat {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -4px, 0) scale(1.06);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .motion-safe\\:animate-\\[mobizWhatsappFloat_2\\.8s_ease-in-out_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}