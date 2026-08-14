import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { portfolioItems } from "@/lib/portfolio";
import { cityServiceSitemapEntries } from "@/lib/cityServicePages";
import { SITE_URL } from "@/lib/site";

/**
 * Sitemap.
 *
 * Dynamic sections are derived from the same data the routes are generated
 * from, so a new blog post, project or city page appears here automatically and
 * an invalid slug can never appear at all.
 *
 * Deliberately excluded: /api/*, and anything not a real indexable page.
 */

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
};

function lastModified(value?: string | Date): Date {
  if (!value) return new Date();
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

const STATIC_ROUTES: StaticRoute[] = [
  { path: "", priority: 1, changeFrequency: "daily" },

  // Service pillars
  { path: "/services", priority: 0.98, changeFrequency: "weekly" },
  { path: "/services/website-design-development", priority: 0.96, changeFrequency: "weekly" },
  { path: "/services/digital-marketing", priority: 0.95, changeFrequency: "weekly" },
  { path: "/services/accounting-tax-returns", priority: 0.95, changeFrequency: "weekly" },
  { path: "/services/warehousing-inventory", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services/business-solutions", priority: 0.9, changeFrequency: "weekly" },

  // National SEO landing pages
  { path: "/website-design-mauritius", priority: 0.97, changeFrequency: "weekly" },
  { path: "/ecommerce-website-mauritius", priority: 0.96, changeFrequency: "weekly" },
  { path: "/digital-marketing-mauritius", priority: 0.96, changeFrequency: "weekly" },
  { path: "/accounting-services-mauritius", priority: 0.96, changeFrequency: "weekly" },
  { path: "/company-registration-mauritius", priority: 0.95, changeFrequency: "weekly" },
  { path: "/vat-filing-mauritius", priority: 0.95, changeFrequency: "weekly" },
  { path: "/seo-services-mauritius", priority: 0.95, changeFrequency: "weekly" },

  // Industry and software SEO pages
  { path: "/car-rental-website-mauritius", priority: 0.94, changeFrequency: "weekly" },
  { path: "/booking-website-mauritius", priority: 0.94, changeFrequency: "weekly" },
  { path: "/ecommerce-store-mauritius", priority: 0.94, changeFrequency: "weekly" },
  { path: "/custom-website-mauritius", priority: 0.94, changeFrequency: "weekly" },
  { path: "/tour-operator-website-mauritius", priority: 0.93, changeFrequency: "weekly" },
  { path: "/real-estate-website-mauritius", priority: 0.93, changeFrequency: "weekly" },
  { path: "/web-application-development-mauritius", priority: 0.93, changeFrequency: "weekly" },
  { path: "/restaurant-website-mauritius", priority: 0.92, changeFrequency: "weekly" },
  { path: "/salon-website-mauritius", priority: 0.92, changeFrequency: "weekly" },
  { path: "/accounting-software-mauritius", priority: 0.92, changeFrequency: "weekly" },
  { path: "/inventory-management-system-mauritius", priority: 0.92, changeFrequency: "weekly" },
  { path: "/stock-management-system-mauritius", priority: 0.92, changeFrequency: "weekly" },
  { path: "/hotel-website-mauritius", priority: 0.91, changeFrequency: "weekly" },
  { path: "/villa-booking-website-mauritius", priority: 0.91, changeFrequency: "weekly" },
  { path: "/booking-system-mauritius", priority: 0.91, changeFrequency: "weekly" },
  { path: "/doctor-clinic-website-mauritius", priority: 0.9, changeFrequency: "weekly" },
  { path: "/school-website-mauritius", priority: 0.9, changeFrequency: "weekly" },
  { path: "/construction-website-mauritius", priority: 0.9, changeFrequency: "weekly" },
  { path: "/accounting-firm-website-mauritius", priority: 0.9, changeFrequency: "weekly" },
  { path: "/crm-software-mauritius", priority: 0.9, changeFrequency: "weekly" },
  { path: "/invoice-software-mauritius", priority: 0.9, changeFrequency: "weekly" },
  { path: "/law-firm-website-mauritius", priority: 0.89, changeFrequency: "weekly" },

  // Commercial and conversion pages
  { path: "/monthly-packages", priority: 0.9, changeFrequency: "monthly" },
  { path: "/free-seo-audit", priority: 0.9, changeFrequency: "monthly" },
  { path: "/free-website-review", priority: 0.9, changeFrequency: "monthly" },
  { path: "/free-business-consultation", priority: 0.9, changeFrequency: "monthly" },
  { path: "/portfolio", priority: 0.88, changeFrequency: "weekly" },
  { path: "/testimonials", priority: 0.86, changeFrequency: "weekly" },
  { path: "/why-us", priority: 0.86, changeFrequency: "weekly" },
  { path: "/mauritius-services", priority: 0.86, changeFrequency: "weekly" },
  { path: "/contact", priority: 0.85, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.84, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.82, changeFrequency: "weekly" },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" },
  { path: "/careers", priority: 0.72, changeFrequency: "monthly" },

  // Policy pages
  { path: "/privacy-policy", priority: 0.35, changeFrequency: "yearly" },
  { path: "/terms-of-use", priority: 0.35, changeFrequency: "yearly" },
  { path: "/terms-of-service", priority: 0.35, changeFrequency: "yearly" },
  { path: "/security-policy", priority: 0.35, changeFrequency: "yearly" },
  { path: "/policies", priority: 0.32, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    ...STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })),

    ...cityServiceSitemapEntries.map((entry) => ({
      url: `${SITE_URL}${entry.path ?? ""}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: entry.priority ?? 0.8,
    })),

    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: lastModified(post.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.78,
    })),

    ...portfolioItems.map((item) => ({
      url: `${SITE_URL}/portfolio/${item.slug}`,
      lastModified: lastModified(item.updatedAt),
      changeFrequency: "monthly" as const,
      priority: 0.76,
    })),
  ];
}
