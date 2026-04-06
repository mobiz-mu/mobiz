"use client";

import { FormEvent, useState } from "react";
import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PremiumButton from "@/components/ui/PremiumButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, MapPin, Phone } from "lucide-react";

type ContactState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
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

export default function ContactPage() {
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
    <main className="py-16 sm:py-20">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <GlassCard className="p-6 sm:p-8">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s build something premium for your business."
              description="Speak with MoBiz.mu about websites, digital marketing, accounting, logistics, branding, and executive business support."
            />

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 text-[#8b6a18]" />
                  <div>
                    <div className="font-semibold text-[#071226]">Phone / WhatsApp</div>
                    <div className="mt-1 text-sm text-slate-600">+230 5506 8119</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 text-[#8b6a18]" />
                  <div>
                    <div className="font-semibold text-[#071226]">Email</div>
                    <div className="mt-1 text-sm text-slate-600">support@mobiz.mu</div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#8b6a18]" />
                  <div>
                    <div className="font-semibold text-[#071226]">Location</div>
                    <div className="mt-1 text-sm text-slate-600">Mauritius</div>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <div className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)] sm:p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Project Inquiry
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
              Tell us about your business
            </h2>

            <form onSubmit={onSubmit} className="mt-8 grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-slate-700">
                    Full Name
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="Your full name"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label htmlFor="companyName" className="mb-2 block text-sm font-medium text-slate-700">
                    Company Name
                  </label>
                  <input
                    id="companyName"
                    type="text"
                    value={form.companyName}
                    onChange={(e) => updateField("companyName", e.target.value)}
                    placeholder="Your company name"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="you@example.com"
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="text"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    placeholder="+230 ..."
                    className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-slate-700">
                  Service Needed
                </label>
                <select
                  id="service"
                  required
                  value={form.service}
                  onChange={(e) => updateField("service", e.target.value)}
                  className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option>Website Design</option>
                  <option>Digital Marketing</option>
                  <option>Accounting & Tax Returns</option>
                  <option>Logistics</option>
                  <option>Branding & Business Solutions</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                  Project Details
                </label>
                <textarea
                  id="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell us about your business, goals, and what you want to build."
                  className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-[#d4af37]"
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <PremiumButton>
                  {status === "loading" ? "Sending..." : "Send Inquiry"}
                </PremiumButton>
                <PremiumButton href="https://wa.me/23055068119" variant="secondary">
                  WhatsApp Instead
                </PremiumButton>
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
    </main>
  );
}