"use client";

import Container from "@/components/ui/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Globe2,
  Landmark,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const localHighlights = [
  {
    title: "Mauritius-Focused Positioning",
    description:
      "Luxury website design and executive brand presentation tailored for the Mauritius market, with stronger trust, clarity, and premium business perception.",
    icon: MapPin,
    color:
      "bg-[linear-gradient(180deg,#ef4444_0%,#dc2626_55%,#b91c1c_100%)]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(239,68,68,0.14),transparent_34%)]",
  },
  {
    title: "Mauritius SEO & Conversion",
    description:
      "SEO structure for Mauritius searches, stronger local service intent, premium messaging, and conversion paths designed for serious buyers.",
    icon: Search,
    color:
      "bg-[linear-gradient(180deg,#3b82f6_0%,#2563eb_55%,#1d4ed8_100%)]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.14),transparent_34%)]",
  },
  {
    title: "WhatsApp-Ready Journeys",
    description:
      "Mobile-first customer journeys with faster inquiry flow, WhatsApp conversion, cleaner interaction, and smoother business decision-making.",
    icon: MessageCircle,
    color:
      "bg-[linear-gradient(180deg,#22c55e_0%,#16a34a_55%,#15803d_100%)]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(22,163,74,0.14),transparent_34%)]",
  },
  {
    title: "Complete Business Support",
    description:
      "From websites to accounting, tax, registration, logistics, visibility, and strategy, MoBiz.mu supports growth under one premium standard.",
    icon: Landmark,
    color:
      "bg-[linear-gradient(180deg,#facc15_0%,#eab308_55%,#ca8a04_100%)]",
    glow:
      "bg-[radial-gradient(circle_at_top_right,rgba(234,179,8,0.14),transparent_34%)]",
  },
];

const quickPoints = [
  { label: "Mauritius-facing SEO", icon: Globe2 },
  { label: "Premium mobile UX", icon: BriefcaseBusiness },
  { label: "WhatsApp conversion", icon: MessageCircle },
  { label: "Business growth support", icon: TrendingUp },
];

const extraBenefits = [
  {
    title: "Built for local trust",
    text: "Cleaner presentation, stronger credibility, and more confidence for Mauritian customers, business clients, and decision-makers.",
    icon: ShieldCheck,
  },
  {
    title: "Made for real growth",
    text: "Not only design — the structure supports leads, calls, WhatsApp, visibility, and long-term business expansion in Mauritius.",
    icon: Building2,
  },
];

export default function MauritiusServices() {
  return (
    <section
      id="mauritius-services"
      aria-labelledby="mauritius-services-heading"
      className="bg-white py-6 sm:py-7 lg:py-8"
    >
      <Container className="max-w-[1400px]">
        <div className="grid gap-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-5 xl:gap-6">
          <div className="relative overflow-hidden rounded-[28px] border border-[#e7ebf2] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(247,250,255,0.92)_100%)] p-5 shadow-[0_18px_40px_rgba(7,18,38,0.05)] backdrop-blur-[16px] sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f3d77a]/70 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(243,215,122,0.08),transparent_24%),radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.06),transparent_24%),radial-gradient(circle_at_85%_30%,rgba(99,102,241,0.05),transparent_24%)]" />

            <div className="relative z-10">
              <div
                className="inline-flex rounded-full border border-[#ead9a8] bg-[#fffdf7] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Mauritius Market Focus
              </div>

              <h2
                id="mauritius-services-heading"
                className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.3rem] lg:text-[2.75rem] lg:leading-[1.04]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Mauritius digital and business services with an executive luxury standard.
              </h2>

              <p
                className="mt-3 max-w-3xl text-[14px] leading-7 text-slate-600 sm:text-[15px] lg:text-[15.5px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                MoBiz.mu is built for the Mauritius market with a premium
                business approach that combines luxury digital presentation,
                strong local SEO structure, mobile-first conversion, WhatsApp
                readiness, and practical service support for real growth.
              </p>
            </div>

            <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
              {localHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-[22px] border border-white/70 bg-white/72 p-4 shadow-[0_10px_26px_rgba(7,18,38,0.04),inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/80 hover:shadow-[0_16px_32px_rgba(7,18,38,0.07)]"
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 opacity-90 ${item.glow}`}
                    />
                    <div className="pointer-events-none absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-90" />

                    <div className="relative z-10 flex items-start gap-3">
                      <div
                        className={`relative inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[16px] border border-white/20 text-white shadow-[0_10px_22px_rgba(7,18,38,0.10)] ${item.color}`}
                      >
                        <span className="pointer-events-none absolute inset-0 rounded-[16px] bg-[linear-gradient(180deg,rgba(255,255,255,0.18)_0%,rgba(255,255,255,0.04)_100%)]" />
                        <Icon className="relative z-10 h-4.5 w-4.5" />
                      </div>

                      <div className="min-w-0">
                        <h3
                          className="text-[15px] font-semibold tracking-tight text-[#071226] sm:text-base"
                          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                        >
                          {item.title}
                        </h3>
                        <p
                          className="mt-1.5 text-[13px] leading-6 text-slate-600 sm:text-sm"
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#1e335f] bg-[linear-gradient(180deg,#071226_0%,#0c1b3f_52%,#102852_100%)] p-5 text-white shadow-[0_22px_52px_rgba(7,18,38,0.14)] sm:p-6 lg:p-7">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#f3d77a]/60 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#f3d77a]/10 blur-3xl" />
            <div className="pointer-events-none absolute left-0 top-8 h-28 w-28 rounded-full bg-white/5 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(243,215,122,0.08),transparent_26%)]" />

            <div className="relative z-10">
              <div
                className="inline-flex rounded-full border border-white/12 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a] sm:text-[11px]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Luxury Business Advantage
              </div>

              <h3
                className="mt-4 text-balance text-[1.9rem] font-semibold tracking-tight sm:text-[2.15rem] lg:text-[2.4rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                A stronger digital standard tailored for businesses in Mauritius.
              </h3>

              <p
                className="mt-3 text-[14px] leading-7 text-white/78 sm:text-[15px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                This platform is crafted for Mauritian businesses that want a
                more premium image, stronger credibility, smoother mobile
                conversion, and a cleaner online experience that feels world-class.
              </p>
            </div>

            <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
              {quickPoints.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-[18px] border border-white/10 bg-white/[0.10] px-4 py-3 backdrop-blur-md"
                  >
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#071226] shadow-[0_8px_18px_rgba(255,255,255,0.07)]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <div
                      className="text-[13px] font-medium text-white sm:text-sm"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 mt-5 grid gap-3">
              {extraBenefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[20px] border border-white/10 bg-white/[0.08] p-4 backdrop-blur-md"
                  >
                    <div className="flex items-start gap-3">
                      <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white/12 text-[#f3d77a]">
                        <Icon className="h-4.5 w-4.5" />
                      </div>

                      <div>
                        <h4
                          className="text-sm font-semibold text-white"
                          style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                        >
                          {item.title}
                        </h4>
                        <p
                          className="mt-1.5 text-[13px] leading-6 text-white/74 sm:text-sm"
                          style={{ fontFamily: '"Poppins", sans-serif' }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="relative z-10 mt-6">
              <PremiumButton
                href="/mauritius-services"
                variant="secondary"
                className="border-[#d9c27c]/35 bg-white/10 text-white hover:bg-white/15"
              >
                Explore Mauritius Services
                <ArrowRight className="ml-2 h-4 w-4 text-[#f3d77a]" />
              </PremiumButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}