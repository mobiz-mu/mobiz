"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Clock3,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import {
  CONTACT_BUSINESS_FOCUS,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_SERVICE_OPTIONS,
  CONTACT_WHATSAPP_URL,
} from "@/lib/contact-data";
import type { ContactServiceOption } from "@/lib/contact-data";

type ContactState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: ContactServiceOption | "";
  message: string;
};

const initialState: ContactState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactPageClient() {
  const [form, setForm] = useState<ContactState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function updateField<K extends keyof ContactState>(key: K, value: ContactState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...form }),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Could not send inquiry.");
      }

      setStatus("success");
      setFeedback("Your inquiry has been sent successfully.");
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  return (
    <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
      <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
        <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
              <Sparkles className="h-3.5 w-3.5" />
              Contact MoBiz.mu
            </div>

            <h1
              className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              Let’s Build Something Premium for Your Business
            </h1>

            <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
              Speak with MoBiz.mu about websites, digital marketing, accounting,
              logistics, branding, and executive business support built for
              stronger trust, visibility, and growth in Mauritius.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-6 sm:py-8 lg:py-10">
        <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Fast Response Direction",
                text: "We focus on clear communication and premium business support from the first inquiry.",
                icon: MessageCircle,
              },
              {
                title: "Mobile-Friendly Contact Flow",
                text: "The contact journey is designed to work smoothly across mobile, tablet, and desktop devices.",
                icon: Phone,
              },
              {
                title: "WhatsApp Ready",
                text: "Clients in Mauritius often prefer fast WhatsApp communication, so that option stays easy and visible.",
                icon: CheckCircle2,
              },
              {
                title: "Professional Follow-Up",
                text: "Every inquiry is handled with structure, clarity, and stronger business presentation in mind.",
                icon: ShieldCheck,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h2
                    className="mt-4 text-[1.1rem] font-semibold tracking-tight text-[#071226]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.title}
                  </h2>

                  <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-4 sm:py-6 lg:py-8">
        <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="rounded-[28px] border border-[#e5eaf2] bg-white p-5 shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-6">
              <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                Contact Details
              </div>

              <h2
                className="mt-4 text-balance text-[1.8rem] font-semibold tracking-tight text-[#071226] sm:text-[2.2rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Speak With MoBiz.mu Directly
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                Reach out to MoBiz.mu for premium websites, digital marketing,
                branding, accounting support, logistics solutions, and business
                growth support tailored for Mauritius.
              </p>

              <div className="mt-5 space-y-3">
                <div className="rounded-[20px] border border-[#e7edf5] bg-white p-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                  <div className="flex items-start gap-3">
                    <Phone className="mt-1 h-5 w-5 text-[#8b6a18]" />
                    <div>
                      <div className="font-semibold text-[#071226]">Phone / WhatsApp</div>
                      <div className="mt-1 text-sm text-slate-600">{CONTACT_PHONE_DISPLAY}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[20px] border border-[#e7edf5] bg-white p-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-1 h-5 w-5 text-[#8b6a18]" />
                    <div>
                      <div className="font-semibold text-[#071226]">Email</div>
                      <div className="mt-1 text-sm text-slate-600">{CONTACT_EMAIL}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[20px] border border-[#e7edf5] bg-white p-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-5 w-5 text-[#8b6a18]" />
                    <div>
                      <div className="font-semibold text-[#071226]">Location</div>
                      <div className="mt-1 text-sm text-slate-600">{CONTACT_LOCATION}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-[20px] border border-[#e7edf5] bg-white p-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                  <div className="flex items-start gap-3">
                    <Clock3 className="mt-1 h-5 w-5 text-[#8b6a18]" />
                    <div>
                      <div className="font-semibold text-[#071226]">Business Focus</div>
                      <div className="mt-1 text-sm text-slate-600">
                        {CONTACT_BUSINESS_FOCUS}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  WhatsApp Instead
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>

                <Link
                  href="/services"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] border border-[#e5eaf2] bg-white p-5 shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-6">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                Project Inquiry
              </div>

              <h2
                className="mt-4 text-balance text-[1.8rem] font-semibold tracking-tight text-[#071226] sm:text-[2.2rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Tell Us About Your Business
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                Share your project goals and the type of support you need. MoBiz.mu
                will use that context to guide the conversation in a clearer,
                more premium way.
              </p>

              <form onSubmit={onSubmit} className="mt-5 grid gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Your full name"
                      className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="companyName"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Company Name
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      value={form.companyName}
                      onChange={(e) => updateField("companyName", e.target.value)}
                      placeholder="Your company name"
                      className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                      className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-slate-700"
                    >
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="text"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+230 ..."
                      className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    required
                    value={form.service}
                    onChange={(e) =>
                      updateField("service", e.target.value as ContactServiceOption | "")
                    }
                    className="h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {CONTACT_SERVICE_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={(e) => updateField("message", e.target.value)}
                    placeholder="Tell us about your business, goals, and what you want to build."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d4af37]"
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="submit"
                    className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-2.5 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {status === "loading" ? "Sending..." : "Send Inquiry"}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>

                  <a
                    href={CONTACT_WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-5 py-2.5 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    WhatsApp Instead
                  </a>
                </div>

                {feedback ? (
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {feedback}
                  </p>
                ) : null}
              </form>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-6 sm:py-8 lg:py-10">
        <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[30px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-6 text-center shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                <Sparkles className="h-3.5 w-3.5" />
                Ready to Start?
              </div>

              <h2
                className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.4rem] lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Let’s Give Your Business a More Premium Direction
              </h2>

              <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                Whether you need a premium website, stronger digital marketing,
                cleaner branding, accounting support, or logistics coordination,
                MoBiz.mu is here to help your business look stronger and move
                forward with more confidence.
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={CONTACT_WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  WhatsApp MoBiz.mu
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>

                <Link
                  href="/portfolio"
                  className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}