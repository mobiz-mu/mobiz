"use client";

import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

export default function WhatsAppFloat() {
  return (
    <Link
      href="https://wa.me/23055068119"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with MoBiz.mu on WhatsApp"
      className="fixed bottom-5 right-5 z-[70] inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#071226] text-white shadow-[0_18px_40px_rgba(7,18,38,0.25)] transition-transform duration-300 hover:scale-105 sm:bottom-6 sm:right-6"
    >
      <MessageCircleMore className="h-6 w-6" />
    </Link>
  );
}
