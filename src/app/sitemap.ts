import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { portfolioItems } from "@/lib/portfolio";
import { cityServiceSitemapEntries } from "@/lib/cityServicePages";

const BASE_URL = "https://mobiz.mu";

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
};

function resolveLastModified(value?: string | Date) {
  if (!value) return new Date();

  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? new Date() : date;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: StaticRoute[] = [
    { path: "", priority: 1, changeFrequency: "daily" },

    // Dedicated SEO landing pages
     { path: "/website-design-mauritius", priority: 0.97, changeFrequency: "weekly" },
     { path: "/ecommerce-website-mauritius", priority: 0.96, changeFrequency: "weekly" },
     { path: "/digital-marketing-mauritius", priority: 0.96, changeFrequency: "weekly" },
     { path: "/accounting-services-mauritius", priority: 0.96, changeFrequency: "weekly" },
     { path: "/company-registration-mauritius", priority: 0.95, changeFrequency: "weekly" },
     { path: "/vat-filing-mauritius", priority: 0.95, changeFrequency: "weekly" },
     { path: "/seo-services-mauritius", priority: 0.95, changeFrequency: "weekly" },

    // Business-specific SEO landing pages
    { path: "/car-rental-website-mauritius", priority: 0.94, changeFrequency: "weekly" },
    { path: "/booking-website-mauritius", priority: 0.94, changeFrequency: "weekly" },
    { path: "/tour-operator-website-mauritius", priority: 0.93, changeFrequency: "weekly" },
    { path: "/hotel-website-mauritius", priority: 0.91, changeFrequency: "weekly" },
    { path: "/villa-booking-website-mauritius", priority: 0.91, changeFrequency: "weekly" },
    { path: "/real-estate-website-mauritius", priority: 0.93, changeFrequency: "weekly" },
    { path: "/restaurant-website-mauritius", priority: 0.92, changeFrequency: "weekly" },
    { path: "/salon-website-mauritius", priority: 0.92, changeFrequency: "weekly" },
    { path: "/doctor-clinic-website-mauritius", priority: 0.9, changeFrequency: "weekly" },
    { path: "/school-website-mauritius", priority: 0.9, changeFrequency: "weekly" },
    { path: "/construction-website-mauritius", priority: 0.9, changeFrequency: "weekly" },
    { path: "/accounting-firm-website-mauritius", priority: 0.9, changeFrequency: "weekly" },
    { path: "/law-firm-website-mauritius", priority: 0.89, changeFrequency: "weekly" },
    { path: "/ecommerce-store-mauritius", priority: 0.94, changeFrequency: "weekly" },
    { path: "/custom-website-mauritius", priority: 0.94, changeFrequency: "weekly" },
    { path: "/web-application-development-mauritius", priority: 0.93, changeFrequency: "weekly" },
    { path: "/accounting-software-mauritius", priority: 0.92, changeFrequency: "weekly" },
    { path: "/inventory-management-system-mauritius", priority: 0.92, changeFrequency: "weekly" },
    { path: "/stock-management-system-mauritius", priority: 0.92, changeFrequency: "weekly" },
    { path: "/crm-software-mauritius", priority: 0.9, changeFrequency: "weekly" },
    { path: "/booking-system-mauritius", priority: 0.91, changeFrequency: "weekly" },
    { path: "/invoice-software-mauritius", priority: 0.9, changeFrequency: "weekly" },

    // Main commercial pages
    { path: "/services", priority: 0.98, changeFrequency: "weekly" },
    { path: "/services/website-design", priority: 0.96, changeFrequency: "weekly" },
    { path: "/services/digital-marketing", priority: 0.95, changeFrequency: "weekly" },
    { path: "/services/accounting-tax-returns", priority: 0.95, changeFrequency: "weekly" },
    { path: "/services/logistics", priority: 0.9, changeFrequency: "weekly" },
    { path: "/services/branding-business-solutions", priority: 0.9, changeFrequency: "weekly" },

    // Trust / conversion pages
    { path: "/free-seo-audit", priority: 0.9, changeFrequency: "monthly" },
    { path: "/free-website-review", priority: 0.9, changeFrequency: "monthly" },
    { path: "/free-business-consultation", priority: 0.9, changeFrequency: "monthly" },
    { path: "/portfolio", priority: 0.88, changeFrequency: "weekly" },
    { path: "/testimonials", priority: 0.86, changeFrequency: "weekly" },
    { path: "/why-us", priority: 0.86, changeFrequency: "weekly" },
    { path: "/mauritius-services", priority: 0.86, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.85, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.82, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.72, changeFrequency: "monthly" },

    // Local SEO city x service pages (auto-generated, see lib/cityServicePages)
    ...cityServiceSitemapEntries,

    // Blog
    { path: "/blog", priority: 0.84, changeFrequency: "weekly" },

    // Policy pages
    { path: "/privacy-policy", priority: 0.35, changeFrequency: "yearly" },
    { path: "/terms-of-use", priority: 0.35, changeFrequency: "yearly" },
    { path: "/terms-of-service", priority: 0.35, changeFrequency: "yearly" },
    { path: "/security-policy", priority: 0.35, changeFrequency: "yearly" },
    { path: "/policies", priority: 0.32, changeFrequency: "yearly" },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map(
    ({ path, priority, changeFrequency }) => ({
      url: `${BASE_URL}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: resolveLastModified(post.updatedAt),
    changeFrequency: "monthly",
    priority: 0.78,
  }));

  const portfolioEntries: MetadataRoute.Sitemap = portfolioItems.map((item) => ({
    url: `${BASE_URL}/portfolio/${item.slug}`,
    lastModified: resolveLastModified(item.updatedAt),
    changeFrequency: "monthly",
    priority: 0.76,
  }));

  return [...staticEntries, ...blogEntries, ...portfolioEntries];
}