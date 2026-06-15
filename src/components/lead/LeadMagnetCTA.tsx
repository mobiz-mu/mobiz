"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileSearch,
  Gauge,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { leadMagnetList } from "@/lib/leadMagnets";
import { CONTACT_WHATSAPP_URL } from "@/lib/contact-data";
import { TrackEvents, track } from "@/lib/track";
import { cn } from "@/lib/utils";

const icons = {
  "free-seo-audit": Gauge,
  "free-website-review": FileSearch,
  "free-business-consultation": MessageCircle,
} as const;

const iconStyles = {
  "free-seo-audit":
    "from-[#ef4444] via-[#dc2626] to-[#991b1b] shadow-[0_14px_28px_rgba(220,38,38,0.28)]",
  "free-website-review":
    "from-[#3b82f6] via-[#2563eb] to-[#1e3a8a] shadow-[0_14px_28px_rgba(37,99,235,0.28)]",
  "free-business-consultation":
    "from-[#22c55e] via-[#16a34a] to-[#166534] shadow-[0_14px_28px_rgba(34,197,94,0.24)]",
} as const;

type Props = {
  title?: string;
  description?: string;
};

export default function LeadMagnetCTA({
  title = "Start with something free",
  description = "Not ready to commit? Get real value first. Pick a free option below, and we reply within one business day.",
}: Props) {
  return (
    <section
      id="free-business-help"
      aria-labelledby="free-business-help-heading"
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071226] py-9 text-white sm:py-10 lg:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(243,215,122,0.17),transparent_25%),radial-gradient(circle_at_82%_80%,rgba(19,163,127,0.18),transparent_28%),linear-gradient(135deg,#071226_0%,#0b1831_48%,#071f5f_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />
      <div className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-[#d92121]/12 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#13a37f]/14 blur-3xl" />

      <Container className="relative z-10 max-w-[1520px]">
        <div className="grid gap-7 lg:grid-cols-[0.36fr_0.64fr] lg:items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f8d75a] backdrop-blur-md sm:text-[11px]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Free for Mauritius businesses
            </div>

            <h2
              id="free-business-help-heading"
              className="mt-4 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.05]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              {title}
            </h2>

            <p
              className="mt-3 max-w-2xl text-pretty text-[14px] leading-7 text-white/74 sm:text-[15px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              {description}
            </p>

            <a
              href={CONTACT_WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                track(TrackEvents.whatsappClick, { context: "lead_magnet_cta" })
              }
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-bold text-white shadow-[0_14px_28px_rgba(0,0,0,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#071226]"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Us Now
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {leadMagnetList.map((magnet, index) => {
              const Icon =
                icons[magnet.slug as keyof typeof icons] ?? MessageCircle;
              const iconClass =
                iconStyles[magnet.slug as keyof typeof iconStyles] ??
                iconStyles["free-business-consultation"];

              return (
                <Link
                  key={magnet.slug}
                  href={`/${magnet.slug}`}
                  onClick={() =>
                    track(TrackEvents.quoteClick, {
                      context: "lead_magnet_cta",
                      form_type: magnet.key,
                    })
                  }
                  className="group relative flex min-h-[230px] flex-col overflow-hidden rounded-[26px] border border-white/14 bg-white/[0.075] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f8d75a]/35 hover:bg-white/[0.11] hover:shadow-[0_26px_62px_rgba(0,0,0,0.26)] sm:min-h-[240px]"
                  style={{ transitionDelay: `${index * 70}ms` }}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-white/[0.05] transition-transform duration-300 group-hover:scale-125" />

                  <div
                    className={cn(
                      "relative flex h-13 w-13 items-center justify-center rounded-[18px] bg-gradient-to-br text-white transition-all duration-300 group-hover:rotate-3 group-hover:scale-105",
                      iconClass
                    )}
                  >
                    <span className="pointer-events-none absolute inset-[1px] rounded-[17px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.58),transparent_43%)]" />
                    <Icon className="relative z-10 h-5.5 w-5.5" />
                  </div>

                  <h3
                    className="mt-5 text-[1.05rem] font-bold leading-tight text-white sm:text-[1.12rem]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {magnet.eyebrow}
                  </h3>

                  <p
                    className="mt-3 flex-1 text-[13.5px] leading-6 text-white/70 sm:text-[14px]"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {magnet.subheadline}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-[13px] font-bold text-[#f8d75a] transition duration-300 group-hover:text-white">
                    {magnet.ctaLabel}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

