"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import { uploadImageToWebsiteMedia } from "@/lib/storage";
import DeleteButton from "@/components/dashboard/DeleteButton";
import ReorderButtons from "@/components/dashboard/ReorderButtons";
import SmartImage from "@/components/ui/SmartImage";

type Banner = {
  id: string;
  title: string;
  subtitle: string | null;
  cta_primary_label: string | null;
  cta_primary_href: string | null;
  cta_secondary_label: string | null;
  cta_secondary_href: string | null;
  desktop_image_url: string | null;
  mobile_image_url: string | null;
  sort_order: number;
  is_active: boolean;
};

const initialForm = {
  id: "",
  title: "",
  subtitle: "",
  cta_primary_label: "Get a Free Consultation",
  cta_primary_href: "/contact",
  cta_secondary_label: "Explore Services",
  cta_secondary_href: "/services",
  desktop_image_url: "",
  mobile_image_url: "",
  sort_order: 1,
  is_active: true,
};

export default function BannersPage() {
  const [items, setItems] = useState<Banner[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [uploadingDesktop, setUploadingDesktop] = useState(false);
  const [uploadingMobile, setUploadingMobile] = useState(false);

  async function loadBanners() {
    const { data } = await supabaseBrowser
      .from("hero_banners")
      .select("*")
      .order("sort_order", { ascending: true });

    setItems((data as Banner[]) || []);
  }

  useEffect(() => {
    void loadBanners();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        title: form.title,
        subtitle: form.subtitle || null,
        cta_primary_label: form.cta_primary_label || null,
        cta_primary_href: form.cta_primary_href || null,
        cta_secondary_label: form.cta_secondary_label || null,
        cta_secondary_href: form.cta_secondary_href || null,
        desktop_image_url: form.desktop_image_url || null,
        mobile_image_url: form.mobile_image_url || null,
        sort_order: Number(form.sort_order),
        is_active: form.is_active,
      };

      if (form.id) {
        await supabaseBrowser.from("hero_banners").update(payload).eq("id", form.id);
      } else {
        await supabaseBrowser.from("hero_banners").insert(payload);
      }

      setForm(initialForm);
      await loadBanners();
    } finally {
      setLoading(false);
    }
  }

  async function onDesktopChange(file: File | null) {
    if (!file) return;
    setUploadingDesktop(true);
    try {
      const url = await uploadImageToWebsiteMedia(file, "banners/desktop");
      setForm((prev) => ({ ...prev, desktop_image_url: url }));
    } finally {
      setUploadingDesktop(false);
    }
  }

  async function onMobileChange(file: File | null) {
    if (!file) return;
    setUploadingMobile(true);
    try {
      const url = await uploadImageToWebsiteMedia(file, "banners/mobile");
      setForm((prev) => ({ ...prev, mobile_image_url: url }));
    } finally {
      setUploadingMobile(false);
    }
  }

  function editBanner(item: Banner) {
    setForm({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle || "",
      cta_primary_label: item.cta_primary_label || "",
      cta_primary_href: item.cta_primary_href || "",
      cta_secondary_label: item.cta_secondary_label || "",
      cta_secondary_href: item.cta_secondary_href || "",
      desktop_image_url: item.desktop_image_url || "",
      mobile_image_url: item.mobile_image_url || "",
      sort_order: item.sort_order,
      is_active: item.is_active,
    });
  }

  return (
    <main className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Hero Banners
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Create and edit homepage hero banners
          </h2>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input
              value={form.title}
              onChange={(e) => setForm((p) => ({ ...p, title: e.target.value }))}
              placeholder="Banner title"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              required
            />

            <textarea
              value={form.subtitle}
              onChange={(e) => setForm((p) => ({ ...p, subtitle: e.target.value }))}
              placeholder="Banner subtitle"
              rows={4}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.cta_primary_label}
                onChange={(e) => setForm((p) => ({ ...p, cta_primary_label: e.target.value }))}
                placeholder="Primary CTA label"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <input
                value={form.cta_primary_href}
                onChange={(e) => setForm((p) => ({ ...p, cta_primary_href: e.target.value }))}
                placeholder="Primary CTA href"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={form.cta_secondary_label}
                onChange={(e) => setForm((p) => ({ ...p, cta_secondary_label: e.target.value }))}
                placeholder="Secondary CTA label"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
              <input
                value={form.cta_secondary_href}
                onChange={(e) => setForm((p) => ({ ...p, cta_secondary_href: e.target.value }))}
                placeholder="Secondary CTA href"
                className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => void onDesktopChange(e.target.files?.[0] || null)}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                />
                {uploadingDesktop ? <div className="text-sm text-slate-500">Uploading desktop image...</div> : null}
                {form.desktop_image_url ? (
                  <div className="relative h-32 overflow-hidden rounded-2xl">
                    <SmartImage
                      src={form.desktop_image_url}
                      alt="Desktop banner"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                ) : null}
              </div>

              <div className="grid gap-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => void onMobileChange(e.target.files?.[0] || null)}
                  className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                />
                {uploadingMobile ? <div className="text-sm text-slate-500">Uploading mobile image...</div> : null}
                {form.mobile_image_url ? (
                  <div className="relative h-32 overflow-hidden rounded-2xl">
                    <SmartImage
                      src={form.mobile_image_url}
                      alt="Mobile banner"
                      fill
                      className="object-cover"
                      sizes="400px"
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <input
                id="banner-active"
                type="checkbox"
                checked={form.is_active}
                onChange={(e) => setForm((p) => ({ ...p, is_active: e.target.checked }))}
              />
              <label htmlFor="banner-active" className="text-sm text-slate-700">
                Active banner
              </label>
            </div>

            <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white">
              {loading ? "Saving..." : form.id ? "Update Banner" : "Create Banner"}
            </button>
          </form>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">Existing Banners</h3>

          <div className="mt-5 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden rounded-[24px] border border-slate-200 bg-slate-50"
              >
                <div className="relative h-36">
                  <SmartImage
                    src={item.desktop_image_url}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="600px"
                  />
                </div>

                <div className="p-5">
                  <div className="text-lg font-semibold text-[#071226]">{item.title}</div>
                  <div className="mt-2 text-sm text-slate-600">
                    Status: {item.is_active ? "Active" : "Inactive"}
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Sort Order: {item.sort_order}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <ReorderButtons
                      table="hero_banners"
                      id={item.id}
                      currentOrder={item.sort_order}
                      onDone={loadBanners}
                    />

                    <button
                      type="button"
                      onClick={() => editBanner(item)}
                      className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700"
                    >
                      Edit
                    </button>

                    <DeleteButton
                      table="hero_banners"
                      id={item.id}
                      onDone={loadBanners}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}