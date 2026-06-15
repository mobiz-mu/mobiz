import { supabaseServer } from "@/lib/supabase-server";
import { cities, type City } from "@/lib/cityServicePages";

export type DirectoryStatus = "pending" | "approved" | "rejected";
export type DirectoryTier = "free" | "premium" | "featured" | "verified";

export type DirectoryBusiness = {
  id: string;
  created_at: string;
  name: string;
  slug: string;
  category: string;
  city: string | null;
  description: string | null;
  phone: string | null;
  whatsapp: string | null;
  website: string | null;
  email: string | null;
  address: string | null;
  photos: string[] | null;
  opening_hours: string | null;
  rating: number | null;
  review_count: number | null;
  tier: DirectoryTier;
  featured: boolean;
  verified: boolean;
  status: DirectoryStatus;
};

export const DIRECTORY_TIERS: {
  value: DirectoryTier;
  label: string;
  price: string;
}[] = [
  { value: "free", label: "Free Listing", price: "Free" },
  { value: "premium", label: "Premium Listing", price: "Rs 300/month" },
  { value: "featured", label: "Featured Listing", price: "Rs 600/month" },
  { value: "verified", label: "Verified Listing", price: "Rs 1,000/month" },
];

// Directory cities reuse the canonical 9-city list from the local SEO engine.
export const directoryCities: City[] = cities;
const cityBySlug = new Map(directoryCities.map((c) => [c.slug, c]));
export function getDirectoryCity(slug: string): City | undefined {
  return cityBySlug.get(slug);
}
export const directoryCitySlugs = directoryCities.map((c) => c.slug);

const SELECT_COLUMNS =
  "id, created_at, name, slug, category, city, description, phone, whatsapp, website, email, address, photos, opening_hours, rating, review_count, tier, featured, verified, status";

type ListParams = {
  category?: string;
  city?: string;
  search?: string;
  limit?: number;
};

/** Approved businesses with optional category/city/search filters. */
export async function getApprovedBusinesses(
  params: ListParams = {}
): Promise<DirectoryBusiness[]> {
  try {
    let query = supabaseServer
      .from("directory_businesses")
      .select(SELECT_COLUMNS)
      .eq("status", "approved");

    if (params.category) query = query.eq("category", params.category);
    if (params.city) query = query.eq("city", params.city);
    if (params.search) {
      const term = params.search.replace(/[%,]/g, " ").trim();
      if (term) {
        query = query.or(
          `name.ilike.%${term}%,description.ilike.%${term}%`
        );
      }
    }

    const ordered = query
      .order("featured", { ascending: false })
      .order("verified", { ascending: false })
      .order("rating", { ascending: false })
      .order("created_at", { ascending: false });

    const finalQuery = params.limit ? ordered.limit(params.limit) : ordered;

    const { data, error } = await finalQuery;
    if (error || !data) return [];
    return data as DirectoryBusiness[];
  } catch {
    return [];
  }
}

export async function getFeaturedBusinesses(
  limit = 6
): Promise<DirectoryBusiness[]> {
  try {
    const { data, error } = await supabaseServer
      .from("directory_businesses")
      .select(SELECT_COLUMNS)
      .eq("status", "approved")
      .eq("featured", true)
      .order("rating", { ascending: false })
      .limit(limit);
    if (error || !data) return [];
    return data as DirectoryBusiness[];
  } catch {
    return [];
  }
}

export async function getBusinessBySlug(
  slug: string
): Promise<DirectoryBusiness | null> {
  try {
    const { data, error } = await supabaseServer
      .from("directory_businesses")
      .select(SELECT_COLUMNS)
      .eq("slug", slug)
      .eq("status", "approved")
      .maybeSingle();
    if (error || !data) return null;
    return data as DirectoryBusiness;
  } catch {
    return null;
  }
}

/** Count of approved businesses per category slug (for the index grid). */
export async function getCategoryCounts(): Promise<Record<string, number>> {
  try {
    const { data, error } = await supabaseServer
      .from("directory_businesses")
      .select("category")
      .eq("status", "approved");
    if (error || !data) return {};
    return (data as { category: string }[]).reduce<Record<string, number>>(
      (acc, row) => {
        acc[row.category] = (acc[row.category] || 0) + 1;
        return acc;
      },
      {}
    );
  } catch {
    return {};
  }
}

/** Approved business slugs for the sitemap (safe: returns [] on any failure). */
export async function getApprovedBusinessSlugs(): Promise<
  { slug: string; updatedAt: string }[]
> {
  try {
    const { data, error } = await supabaseServer
      .from("directory_businesses")
      .select("slug, created_at")
      .eq("status", "approved");
    if (error || !data) return [];
    return (data as { slug: string; created_at: string }[]).map((row) => ({
      slug: row.slug,
      updatedAt: row.created_at,
    }));
  } catch {
    return [];
  }
}

export function tierBadge(business: Pick<DirectoryBusiness, "tier" | "verified" | "featured">) {
  return {
    showVerified: business.verified || business.tier === "verified",
    showFeatured: business.featured || business.tier === "featured",
  };
}

/** Build a slug from a business name (used for submissions). */
export function slugifyBusinessName(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
}

export type BusinessSubmissionInput = {
  name: string;
  category: string;
  city: string;
  description: string;
  phone?: string;
  whatsapp?: string;
  website?: string;
  email?: string;
  address?: string;
  openingHours?: string;
};

export function validateBusinessSubmission(
  input: Partial<BusinessSubmissionInput>
): { valid: true } | { valid: false; message: string } {
  if (!input.name || input.name.trim().length < 2) {
    return { valid: false, message: "Please enter your business name." };
  }
  if (!input.category) {
    return { valid: false, message: "Please choose a category." };
  }
  if (!input.city) {
    return { valid: false, message: "Please choose a city." };
  }
  if (!input.description || input.description.trim().length < 10) {
    return {
      valid: false,
      message: "Please add a short description (at least 10 characters).",
    };
  }
  if (!input.phone && !input.whatsapp) {
    return {
      valid: false,
      message: "Please provide a phone or WhatsApp number.",
    };
  }
  if (input.email && !/\S+@\S+\.\S+/.test(input.email)) {
    return { valid: false, message: "Please enter a valid email address." };
  }
  return { valid: true };
}

/** Insert a new business submission as 'pending' for admin approval. */
export async function createBusinessSubmission(
  input: BusinessSubmissionInput
) {
  const baseSlug = slugifyBusinessName(input.name) || "business";
  const suffix = Math.random().toString(36).slice(2, 8);
  const slug = `${baseSlug}-${suffix}`;

  const { data, error } = await supabaseServer
    .from("directory_businesses")
    .insert({
      name: input.name.trim(),
      slug,
      category: input.category,
      city: input.city,
      description: input.description.trim(),
      phone: input.phone?.trim() || null,
      whatsapp: input.whatsapp?.trim() || null,
      website: input.website?.trim() || null,
      email: input.email?.trim().toLowerCase() || null,
      address: input.address?.trim() || null,
      opening_hours: input.openingHours?.trim() || null,
      tier: "free",
      featured: false,
      verified: false,
      status: "pending",
    })
    .select("id, slug")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return data as { id: string; slug: string };
}
