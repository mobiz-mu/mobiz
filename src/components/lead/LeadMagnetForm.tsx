"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import {
  LEAD_SERVICE_OPTIONS,
  PREFERRED_CONTACT_OPTIONS,
  buildLeadMagnetWhatsappUrl,
  type LeadMagnetData,
  type LeadMagnetFormValues,
} from "@/lib/leadMagnets";
import { TrackEvents, track } from "@/lib/track";

type Props = {
  magnet: LeadMagnetData;
};

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#d4af37]";
const labelClass = "mb-2 block text-sm font-medium text-slate-700";

export default function LeadMagnetForm({ magnet }: Props) {
  const initial: LeadMagnetFormValues = {
    fullName: "",
    businessName: "",
    phone: "",
    whatsapp: "",
    email: "",
    website: "",
    service: magnet.defaultService,
    preferredContact: PREFERRED_CONTACT_OPTIONS[0],
    message: "",
  };

  const [form, setForm] = useState<LeadMagnetFormValues>(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  // Fire a single lead_form_view event when the form first mounts.
  useEffect(() => {
    track(TrackEvents.leadFormView, { form_type: magnet.key });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function update<K extends keyof LeadMagnetFormValues>(
    key: K,
    value: LeadMagnetFormValues[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    const payload = {
      type: "lead_magnet" as const,
      magnet: magnet.key,
      ...form,
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Could not send your request.");
      }

      // Record the conversion, then send them to WhatsApp with details filled in.
      track(TrackEvents.leadFormSubmit, {
        form_type: magnet.key,
        service: form.service,
      });
      track(TrackEvents.whatsappClick, {
        form_type: magnet.key,
        context: "lead_magnet_success",
      });

      const waUrl = buildLeadMagnetWhatsappUrl(magnet, form);

      setStatus("success");
      setFeedback(
        "Your request has been received. We're opening WhatsApp so you can send it to us instantly."
      );

      // Open WhatsApp in a new tab; keep the success state visible behind it.
      if (typeof window !== "undefined") {
        window.open(waUrl, "_blank", "noopener,noreferrer");
      }

      setForm({ ...initial });
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or WhatsApp us."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 text-center sm:p-8">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-[#071226]">
          Request received — thank you!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
          {feedback}
        </p>
        <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={buildLeadMagnetWhatsappUrl(magnet, initial)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track(TrackEvents.whatsappClick, {
                form_type: magnet.key,
                context: "success_button",
              })
            }
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#071226] px-6 py-3 text-sm font-bold text-[#f3d77a] transition hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" />
            Open WhatsApp again
          </a>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFeedback("");
            }}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#071226] transition hover:border-[#071226]"
          >
            Send another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lm-fullName" className={labelClass}>
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="lm-fullName"
            type="text"
            required
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lm-businessName" className={labelClass}>
            Business name
          </label>
          <input
            id="lm-businessName"
            type="text"
            autoComplete="organization"
            value={form.businessName}
            onChange={(e) => update("businessName", e.target.value)}
            placeholder="Your business name"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lm-phone" className={labelClass}>
            Phone number
          </label>
          <input
            id="lm-phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+230 ..."
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lm-whatsapp" className={labelClass}>
            WhatsApp number
          </label>
          <input
            id="lm-whatsapp"
            type="tel"
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            placeholder="+230 ..."
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lm-email" className={labelClass}>
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            id="lm-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="lm-website" className={labelClass}>
            Website URL{" "}
            <span className="text-xs font-normal text-slate-400">
              (optional)
            </span>
          </label>
          <input
            id="lm-website"
            type="url"
            inputMode="url"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            placeholder="https://yourbusiness.mu"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lm-service" className={labelClass}>
            Service interested in <span className="text-red-500">*</span>
          </label>
          <select
            id="lm-service"
            required
            value={form.service}
            onChange={(e) => update("service", e.target.value)}
            className={inputClass}
          >
            {LEAD_SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lm-preferred" className={labelClass}>
            Preferred contact method
          </label>
          <select
            id="lm-preferred"
            value={form.preferredContact}
            onChange={(e) => update("preferredContact", e.target.value)}
            className={inputClass}
          >
            {PREFERRED_CONTACT_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lm-message" className={labelClass}>
          Message / business challenge
        </label>
        <textarea
          id="lm-message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us briefly about your business and what you'd like to improve."
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#071226] outline-none transition focus:border-[#d4af37]"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#071226] px-7 py-3.5 text-sm font-bold text-[#f3d77a] shadow-lg shadow-[#071226]/20 transition hover:-translate-y-0.5 hover:bg-[#0d1b3d] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : magnet.submitLabel}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>

      <p className="text-center text-xs leading-6 text-slate-500">
        On submit we save your request and open WhatsApp with your details so you
        can send it to us in one tap. No obligation.
      </p>

      {status === "error" && feedback ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
