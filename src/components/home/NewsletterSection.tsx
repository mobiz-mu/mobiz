"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import { Mail, ShieldCheck } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Subscription failed.");
      }

      setStatus("success");
      setMessage("You have been subscribed successfully.");
      setEmail("");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <section
      id="newsletter"
      aria-labelledby="newsletter-heading"
      className="bg-white py-5 sm:py-6 lg:py-7"
    >
      <Container className="max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[28px] border border-[#f0c96a]/40 bg-[linear-gradient(135deg,#7a0d14_0%,#a51418_22%,#c41d1d_44%,#d65e18_68%,#f1b62a_100%)] px-5 py-6 text-white shadow-[0_22px_54px_rgba(122,13,20,0.20)] sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#ffe08a]/18 blur-3xl" />
          <div className="pointer-events-none absolute left-0 top-6 h-24 w-24 rounded-full bg-white/8 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-24 w-32 rounded-full bg-[#fff1b8]/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(255,224,138,0.12),transparent_28%)]" />

          <div className="relative z-10 grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:gap-6">
            <div>
              <h2
                id="newsletter-heading"
                className="text-balance text-[1.95rem] font-semibold tracking-tight text-white sm:text-[2.25rem] lg:text-[2.8rem] lg:leading-[1.03]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Subscribe for premium business insights, offers, and Mauritius market updates.
              </h2>

              <p
                className="mt-3 max-w-3xl text-[14px] leading-7 text-white/88 sm:text-[15px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Join the MoBiz.mu newsletter for website design insights, digital marketing tips,
                SEO ideas, accounting and tax updates, logistics news, and premium offers tailored
                for businesses in Mauritius.
              </p>

              <div className="mt-5 grid gap-2.5 sm:grid-cols-2 xl:max-w-[760px]">
                {[
                  "Mauritius business insights",
                  "Website and SEO updates",
                  "Marketing and growth ideas",
                  "Premium offers and launches",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-[18px] border border-white/14 bg-white/10 px-4 py-3 backdrop-blur-md"
                  >
                    <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#8b1118] shadow-[0_8px_18px_rgba(255,255,255,0.10)]">
                      <ShieldCheck className="h-4.5 w-4.5 text-[#b8860b]" />
                    </div>

                    <div
                      className="text-[13px] font-medium text-white sm:text-sm"
                      style={{ fontFamily: '"Poppins", sans-serif' }}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <form
              onSubmit={onSubmit}
              className="rounded-[24px] border border-white/18 bg-white/14 p-4 backdrop-blur-xl shadow-[0_14px_34px_rgba(122,13,20,0.12)] sm:p-5"
            >
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#ffe08a] sm:text-[11px]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                <Mail className="h-3.5 w-3.5" />
                Join the list
              </div>

              <h3
                className="mt-4 text-[1.45rem] font-semibold tracking-tight text-white sm:text-[1.6rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Get updates in your inbox.
              </h3>

              <p
                className="mt-2 text-[13px] leading-6 text-white/78 sm:text-sm"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Premium content, useful updates, and business offers for the Mauritius market.
              </p>

              <label
                htmlFor="newsletterEmail"
                className="mt-4 mb-2 block text-sm font-medium text-white/92"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                Email Address
              </label>

              <input
                id="newsletterEmail"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-12 w-full rounded-2xl border border-white/20 bg-white px-4 text-sm text-[#071226] outline-none transition placeholder:text-slate-400 focus:border-[#f3d77a]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              />

              <div className="mt-4">
                <PremiumButton className="w-full justify-center border-[#f5d57a] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#102852_100%)] text-[#f3d77a]">
                  {status === "loading" ? "Subscribing..." : "Subscribe Now"}
                </PremiumButton>
              </div>

              {message ? (
                <p
                  className={`mt-3 text-sm ${
                    status === "success" ? "text-emerald-200" : "text-red-200"
                  }`}
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {message}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}