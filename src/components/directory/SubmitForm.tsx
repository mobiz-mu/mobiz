"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { directoryCategories } from "@/lib/directoryCategories";
import { directoryCities } from "@/lib/directory";
import { TrackEvents, track } from "@/lib/track";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "h-11 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm text-[#071226] outline-none transition focus:border-[#d4af37]";
const labelClass = "mb-2 block text-sm font-medium text-slate-700";

const initial = {
  name: "",
  category: directoryCategories[0].slug,
  city: directoryCities[0].slug,
  description: "",
  phone: "",
  whatsapp: "",
  website: "",
  email: "",
  address: "",
  openingHours: "",
};

export default function SubmitForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<Status>("idle");
  const [feedback, setFeedback] = useState("");

  function update(key: keyof typeof initial, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const res = await fetch("/api/directory", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { ok?: boolean; message?: string };

      if (!res.ok || !data.ok) {
        throw new Error(data.message || "Could not submit your business.");
      }

      track(TrackEvents.leadFormSubmit, {
        form_type: "directory_submission",
        category: form.category,
        city: form.city,
      });

      setStatus("success");
      setFeedback(data.message || "Submitted for review.");
      setForm(initial);
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error ? error.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[28px] border border-emerald-200 bg-emerald-50 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-4 text-xl font-bold text-[#071226]">
          Business submitted!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-600">
          {feedback} Our team will review your listing and publish it shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-[#071226] transition hover:border-[#071226]"
        >
          Submit another business
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div>
        <label htmlFor="b-name" className={labelClass}>
          Business name <span className="text-red-500">*</span>
        </label>
        <input
          id="b-name"
          required
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className={inputClass}
          placeholder="e.g. Island Electrical Services"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="b-category" className={labelClass}>
            Category <span className="text-red-500">*</span>
          </label>
          <select
            id="b-category"
            required
            value={form.category}
            onChange={(e) => update("category", e.target.value)}
            className={inputClass}
          >
            {directoryCategories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="b-city" className={labelClass}>
            City <span className="text-red-500">*</span>
          </label>
          <select
            id="b-city"
            required
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
            className={inputClass}
          >
            {directoryCities.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="b-description" className={labelClass}>
          Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="b-description"
          required
          rows={4}
          value={form.description}
          onChange={(e) => update("description", e.target.value)}
          className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-[#071226] outline-none transition focus:border-[#d4af37]"
          placeholder="Tell customers what your business does."
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="b-phone" className={labelClass}>
            Phone
          </label>
          <input
            id="b-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            className={inputClass}
            placeholder="+230 ..."
          />
        </div>
        <div>
          <label htmlFor="b-whatsapp" className={labelClass}>
            WhatsApp
          </label>
          <input
            id="b-whatsapp"
            type="tel"
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            className={inputClass}
            placeholder="+230 ..."
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="b-email" className={labelClass}>
            Email
          </label>
          <input
            id="b-email"
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass}
            placeholder="you@business.mu"
          />
        </div>
        <div>
          <label htmlFor="b-website" className={labelClass}>
            Website
          </label>
          <input
            id="b-website"
            type="url"
            value={form.website}
            onChange={(e) => update("website", e.target.value)}
            className={inputClass}
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="b-address" className={labelClass}>
            Address
          </label>
          <input
            id="b-address"
            value={form.address}
            onChange={(e) => update("address", e.target.value)}
            className={inputClass}
            placeholder="Street, area"
          />
        </div>
        <div>
          <label htmlFor="b-hours" className={labelClass}>
            Opening hours
          </label>
          <input
            id="b-hours"
            value={form.openingHours}
            onChange={(e) => update("openingHours", e.target.value)}
            className={inputClass}
            placeholder="e.g. Mon–Fri 9am–5pm"
          />
        </div>
      </div>

      <p className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs leading-6 text-slate-500">
        Free listings include your name, category and location. Submissions are
        reviewed before they go live. You can upgrade to Premium, Featured or
        Verified anytime.
      </p>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#071226] px-7 py-3.5 text-sm font-bold text-[#f3d77a] shadow-lg shadow-[#071226]/20 transition hover:-translate-y-0.5 hover:bg-[#0d1b3d] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Submitting..." : "Submit my business"}
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
      </button>

      {status === "error" && feedback ? (
        <p className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
