"use client";

import { FormEvent, useEffect, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase-client";
import { uploadImageToWebsiteMedia } from "@/lib/storage";

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  category: string | null;
  featured_image_url: string | null;
  is_published: boolean;
};

const initialForm = {
  id: "",
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  category: "",
  featured_image_url: "",
  is_published: true,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function DashboardBlogPage() {
  const [items, setItems] = useState<BlogPost[]>([]);
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  async function loadPosts() {
    const { data } = await supabaseBrowser
      .from("blog_posts")
      .select("*")
      .order("created_at", { ascending: false });

    setItems((data as BlogPost[]) || []);
  }

  useEffect(() => {
    void loadPosts();
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        title: form.title,
        slug: form.slug || slugify(form.title),
        excerpt: form.excerpt || null,
        content: form.content || null,
        category: form.category || null,
        featured_image_url: form.featured_image_url || null,
        seo_title: form.title,
        seo_description: form.excerpt || null,
        is_published: form.is_published,
        published_at: form.is_published ? new Date().toISOString() : null,
        author_name: "MoBiz.mu",
      };

      if (form.id) {
        await supabaseBrowser.from("blog_posts").update(payload).eq("id", form.id);
      } else {
        await supabaseBrowser.from("blog_posts").insert(payload);
      }

      setForm(initialForm);
      await loadPosts();
    } finally {
      setLoading(false);
    }
  }

  async function onImageChange(file: File | null) {
    if (!file) return;
    setUploading(true);

    try {
      const url = await uploadImageToWebsiteMedia(file, "blog");
      setForm((prev) => ({ ...prev, featured_image_url: url }));
    } finally {
      setUploading(false);
    }
  }

  function editPost(item: BlogPost) {
    setForm({
      id: item.id,
      title: item.title,
      slug: item.slug,
      excerpt: item.excerpt || "",
      content: item.content || "",
      category: item.category || "",
      featured_image_url: item.featured_image_url || "",
      is_published: item.is_published,
    });
  }

  return (
    <main className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Blog Manager
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Create and edit blog content
          </h2>

          <form onSubmit={onSubmit} className="mt-6 grid gap-4">
            <input
              value={form.title}
              onChange={(e) =>
                setForm((p) => ({
                  ...p,
                  title: e.target.value,
                  slug: p.id ? p.slug : slugify(e.target.value),
                }))
              }
              placeholder="Post title"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              required
            />

            <input
              value={form.slug}
              onChange={(e) => setForm((p) => ({ ...p, slug: slugify(e.target.value) }))}
              placeholder="Slug"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
              required
            />

            <input
              value={form.category}
              onChange={(e) => setForm((p) => ({ ...p, category: e.target.value }))}
              placeholder="Category"
              className="h-12 rounded-2xl border border-slate-200 px-4 text-sm"
            />

            <div className="grid gap-3">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => void onImageChange(e.target.files?.[0] || null)}
                className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              />

              {uploading ? (
                <div className="text-sm text-slate-500">Uploading image...</div>
              ) : null}

              {form.featured_image_url ? (
                <img
                  src={form.featured_image_url}
                  alt="Featured"
                  className="h-40 w-full rounded-2xl object-cover"
                />
              ) : null}
            </div>

            <textarea
              value={form.excerpt}
              onChange={(e) => setForm((p) => ({ ...p, excerpt: e.target.value }))}
              placeholder="Excerpt"
              rows={3}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <textarea
              value={form.content}
              onChange={(e) => setForm((p) => ({ ...p, content: e.target.value }))}
              placeholder="Post content"
              rows={8}
              className="rounded-2xl border border-slate-200 px-4 py-3 text-sm"
            />

            <div className="flex items-center gap-3">
              <input
                id="post-published"
                type="checkbox"
                checked={form.is_published}
                onChange={(e) =>
                  setForm((p) => ({ ...p, is_published: e.target.checked }))
                }
              />
              <label htmlFor="post-published" className="text-sm text-slate-700">
                Published
              </label>
            </div>

            <button className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white">
              {loading ? "Saving..." : form.id ? "Update Post" : "Create Post"}
            </button>
          </form>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <h3 className="text-xl font-semibold text-[#071226]">Existing Posts</h3>

          <div className="mt-5 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="rounded-[24px] border border-slate-200 bg-slate-50 p-5"
              >
                {item.featured_image_url ? (
                  <img
                    src={item.featured_image_url}
                    alt={item.title}
                    className="mb-4 h-36 w-full rounded-2xl object-cover"
                  />
                ) : null}

                <div className="text-lg font-semibold text-[#071226]">{item.title}</div>
                <div className="mt-2 text-sm text-slate-600">Slug: {item.slug}</div>
                <div className="mt-1 text-sm text-slate-500">
                  Status: {item.is_published ? "Published" : "Draft"}
                </div>

                <button
                  type="button"
                  onClick={() => editPost(item)}
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