"use client";

import Link from "next/link";
import { ArrowRight, FileSearch, Gauge, MessageCircle } from "lucide-react";
import { leadMagnetList } from "@/lib/leadMagnets";
import { CONTACT_WHATSAPP_URL } from "@/lib/contact-data";
import { TrackEvents, track } from "@/lib/track";

const icons = {
  "free-seo-audit": Gauge,
  "free-website-review": FileSearch,
  "free-business-consultation": MessageCircle,
} as const;

type Props = {
  /** Optional override heading */
  title?: string;
  description?: string;
};

export default function LeadMagnetCTA({
  title = "Start with something free",
  description = "Not ready to commit? Get real value first. Pick a free option below — we reply within one business day.",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-[#071226] py-14 text-white sm:py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_34%)]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#f3d77a]">
            Free for Mauritius businesses
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">
            {description}
          </p>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {leadMagnetList.map((magnet) => {
            const Icon = icons[magnet.slug];
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
                className="group flex flex-col rounded-[24px] border border-white/10 bg-white/[0.06] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#f3d77a]/35 hover:bg-white/[0.1]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f3d77a] text-[#071226] shadow-lg shadow-[#f3d77a]/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-white">
                  {magnet.eyebrow}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-6 text-white/68">
                  {magnet.subheadline}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#f3d77a]">
                  {magnet.ctaLabel}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="mt-6">
          <a
            href={CONTACT_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track(TrackEvents.whatsappClick, { context: "lead_magnet_cta" })
            }
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#071226]"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
