import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";
import { portfolioItems } from "@/lib/portfolio";

const BASE_URL = "https://mobiz.mu";

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: "daily" | "weekly" | "monthly";
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
    { path: "/services", priority: 0.95, changeFrequency: "weekly" },
    { path: "/services/website-design", priority: 0.93, changeFrequency: "weekly" },
    { path: "/services/digital-marketing", priority: 0.93, changeFrequency: "weekly" },
    { path: "/services/accounting-tax-returns", priority: 0.93, changeFrequency: "weekly" },
    { path: "/services/logistics", priority: 0.91, changeFrequency: "weekly" },
    { path: "/services/branding-business-solutions", priority: 0.91, changeFrequency: "weekly" },
    { path: "/portfolio", priority: 0.88, changeFrequency: "weekly" },
    { path: "/blog", priority: 0.86, changeFrequency: "weekly" },
    { path: "/testimonials", priority: 0.85, changeFrequency: "weekly" },
    { path: "/why-us", priority: 0.85, changeFrequency: "weekly" },
    { path: "/mauritius-services", priority: 0.84, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.84, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.8, changeFrequency: "weekly" },
    { path: "/careers", priority: 0.7, changeFrequency: "weekly" },
    { path: "/privacy-policy", priority: 0.35, changeFrequency: "monthly" },
    { path: "/terms-of-use", priority: 0.35, changeFrequency: "monthly" },
    { path: "/terms-of-service", priority: 0.35, changeFrequency: "monthly" },
    { path: "/security-policy", priority: 0.35, changeFrequency: "monthly" },
    { path: "/policies", priority: 0.32, changeFrequency: "monthly" },
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