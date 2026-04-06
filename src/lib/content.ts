import { supabaseServer } from "@/lib/supabase-server";

export async function getActiveHeroBanners() {
  const { data, error } = await supabaseServer
    .from("hero_banners")
    .select("*")
    .eq("is_active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("getActiveHeroBanners error:", error.message);
    return [];
  }

  return data ?? [];
}

export async function getPublishedBlogPosts(limit?: number) {
  let query = supabaseServer
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;

  if (error) {
    console.error("getPublishedBlogPosts error:", error.message);
    return [];
  }

  return data ?? [];
}

export async function getPublishedBlogPostBySlug(slug: string) {
  const { data, error } = await supabaseServer
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("getPublishedBlogPostBySlug error:", error.message);
    return null;
  }

  return data;
}

export async function getPublishedTestimonials(limit?: number) {
  let query = supabaseServer
    .from("testimonials")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;

  if (error) {
    console.error("getPublishedTestimonials error:", error.message);
    return [];
  }

  return data ?? [];
}

export async function getPublishedPortfolioItems(limit?: number) {
  let query = supabaseServer
    .from("portfolio_items")
    .select("*")
    .eq("is_published", true)
    .order("sort_order", { ascending: true });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;

  if (error) {
    console.error("getPublishedPortfolioItems error:", error.message);
    return [];
  }

  return data ?? [];
}

export async function getPublishedPortfolioItemBySlug(slug: string) {
  const { data, error } = await supabaseServer
    .from("portfolio_items")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  if (error) {
    console.error("getPublishedPortfolioItemBySlug error:", error.message);
    return null;
  }

  return data;
}