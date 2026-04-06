"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";

type Testimonial = {
  id: string;
  client_name: string;
  role_title: string | null;
  company_name: string | null;
  quote: string;
  rating: number;
  sort_order: number;
  is_published: boolean;
};

const initialForm = {
  id: "",
  client_name: "",
  role_title: "",
  company_name: "",
  quote: "",
  rating: 5,
  sort_order: 1,
  is_published: true,
};

export default function DashboardTestimonialsPage() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  async function loadTestimonials() {
    const { data } = await supabaseBrowser
      .from("testimonials")
      .select("*")
      .order("sort_order", { ascending: true });

    setItems((data as Testimonial[]) || []);
  }

  useEffect(() => {
    void loadTestimonials();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        client_name: form.client_name,
        role_title: form.role_title || null,
        company_name: form.company_name || null,
        quote: form.quote,
        rating: Number(form.rating),
        sort_order: Number(form.sort_order),
        is_published: form.is_published,
      };

      if (form.id) {
        await supabaseBrowser.from("testimonials").update(payload).eq("id", form.id);
      } else {
        await supabaseBrowser.from("testimonials").insert(payload);
      }

      setForm(initialForm);
      await loadTestimonials();
    } finally {
      setLoading(false);
    }
  }

  function editItem(item: Testimonial) {
    setForm({
      id: item.id,
      client_name: item.client_name,
      role_title: item.role_title || "",
      company_name: item.company_name || "",
      quote: item.quote,
      rating: item.rating,
      sort_order: item.sort_order,
      is_published: item.is_published,
    });
  }

  return (
    <main className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Testimonials
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Create and edit testimonials
          </h2>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input
              value={form.client_name}
              onChange={(e) => setForm((p) => ({ ...p, client_name: e.target.value }))}
              placeholder="Client name"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              required
            />
            <input
              value={form.role_title}
              onChange={(e) => setForm((p) => ({ ...p, role_title: e.target.value }))}
              placeholder="Role title"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
            />
            <input
              value={form.company_name}
              onChange={(e) => setForm((p) => ({ ...p, company_name: e.target.value }))}
              placeholder="Company name"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
            />
            <textarea
              value={form.quote}
              onChange={(e) => setForm((p) => ({ ...p, quote: e.target.value }))}
              placeholder="Quote"
              rows={5}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="number"
                min={1}
                max={5}
                value={form.rating}
                onChange={(e) => setForm((p) => ({ ...p, rating: Number(e.target.value) }))}
                placeholder="Rating"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <input
                type="number"
                min={0}
                value={form.sort_order}
                onChange={(e) => setForm((p) => ({ ...p, sort_order: Number(e.target.value) }))}
                placeholder="Sort order"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
            </div>

            <div className="flex items-center gap-3">
              <input
                id="testimonial-published"
                type="checkbox"
                checked={form.is_published}
                onChange={(e) => setForm((p) => ({ ...p, is_published: e.target.checked }))}
              />
              <label htmlFor="testimonial-published" className="text-sm text-slate-700">
                Published
              </label>
            </div>

            <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white">
              {loading ? "Saving..." : form.id ? "Update Testimonial" : "Create Testimonial"}
            </button>
          </form>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">Existing Testimonials</h3>

          <div className="mt-5 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                <div className="text-lg font-semibold text-[#071226]">{item.client_name}</div>
                <div className="mt-2 text-sm text-slate-600">{item.role_title || "Client"}</div>
                <div className="mt-1 text-sm text-slate-500">
                  Status: {item.is_published ? "Published" : "Draft"}
                </div>

                <button
                  onClick={() => editItem(item)}
                  className="mt-4 rounded-full bg-[#071226] px-4 py-2 text-sm font-medium text-white"
                >
                  Edit
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}