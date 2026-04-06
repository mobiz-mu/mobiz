"use client";

import Container from "@/components/ui/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Zap } from "lucide-react";

export default function CTASection() {
  return (
    <section className="bg-white py-5 sm:py-6 lg:py-7">
      <Container className="max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[30px] border border-[#d8ebea] bg-[linear-gradient(135deg,#0b4f6c_0%,#0f6c8c_34%,#118ab2_58%,#11a36e_100%)] px-5 py-6 text-white shadow-[0_22px_54px_rgba(9,79,108,0.16)] sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-[#c6fff0]/16 blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-8 h-28 w-28 rounded-full bg-white/8 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 right-10 h-32 w-32 rounded-full bg-[#ffe27a]/12 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-5 lg:grid-cols-[1.16fr_0.84fr] lg:items-center lg:gap-6">
              <div>
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffe27a] sm:text-[11px]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  Start with MoBiz.mu
                </div>

                <h2
                  className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight sm:text-[2.25rem] lg:text-[2.85rem] lg:leading-[1.04]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Build a premium digital presence with smarter business support.
                </h2>

                <p
                  className="mt-3 max-w-2xl text-[14px] leading-7 text-white/86 sm:text-[15px]"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Launch faster with premium website design, stronger SEO, cleaner
                  customer journeys, polished branded assets, and executive business
                  support tailored for Mauritius.
                </p>

                <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  {[
                    {
                      label: "Premium presentation",
                      icon: ShieldCheck,
                    },
                    {
                      label: "Faster conversion flow",
                      icon: Zap,
                    },
                    {
                      label: "WhatsApp-ready contact",
                      icon: MessageCircle,
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-3 rounded-[18px] border border-white/12 bg-white/10 px-4 py-3 backdrop-blur-md"
                      >
                        <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#0b4f6c] shadow-[0_8px_18px_rgba(255,255,255,0.08)]">
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
              </div>

              <div className="rounded-[24px] border border-white/14 bg-white/12 p-4 backdrop-blur-xl shadow-[0_14px_34px_rgba(9,79,108,0.12)] sm:p-5">
                <div
                  className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffe27a] sm:text-[11px]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Ready to launch?
                </div>

                <h3
                  className="mt-3 text-[1.45rem] font-semibold tracking-tight text-white sm:text-[1.65rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Let’s position your business at a higher standard.
                </h3>

                <p
                  className="mt-2.5 text-[13px] leading-6 text-white/80 sm:text-sm"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  Speak with MoBiz.mu for premium website design, digital marketing,
                  SEO, accounting support, logistics solutions, and branding services
                  designed for the Mauritius market.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <PremiumButton
                    href="/contact"
                    variant="secondary"
                    className="justify-center border-white/15 bg-white/10 text-white hover:bg-white/15"
                  >
                    Get a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 text-[#ffe27a]" />
                  </PremiumButton>

                  <PremiumButton
                    href="https://wa.me/23055068119"
                    className="justify-center border-[#d8ebea] bg-white text-[#0b4f6c] hover:bg-[#f4fffb]"
                  >
                    WhatsApp Us
                    <MessageCircle className="ml-2 h-4 w-4 text-[#11a36e]" />
                  </PremiumButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
