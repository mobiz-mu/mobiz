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

type StaticRoute = { path: string };

/*
 * Returns a real modification date, or undefined when we genuinely do not know
 * one. It never falls back to "now".
 *
 * Google ignores <changefreq> and <priority> outright, and it discounts
 * <lastmod> for the whole site once it catches the values being wrong. This
 * sitemap used to stamp `new Date()` on all 54 static routes plus the 27
 * city-service routes, so 81 of 97 URLs claimed to have changed on every
 * single build. Omitting the field is the honest signal: only the blog and
 * portfolio entries carry a real `updatedAt`, so only they state a date.
 */
function lastModified(value?: string | Date): Date | undefined {
  if (!value) return undefined;
  const date = value instanceof Date ? value : new Date(value);
  return Number.isNaN(date.getTime()) ? undefined : date;
}

const STATIC_ROUTES: StaticRoute[] = [
  { path: "" },

  // Service pillars
  { path: "/services" },
  { path: "/services/website-design-development" },
  { path: "/services/digital-marketing" },
  { path: "/services/accounting-tax-returns" },
  { path: "/services/warehousing-inventory" },
  { path: "/services/business-solutions" },

  // National SEO landing pages
  { path: "/website-design-mauritius" },
  { path: "/ecommerce-website-mauritius" },
  { path: "/digital-marketing-mauritius" },
  { path: "/accounting-services-mauritius" },
  { path: "/company-registration-mauritius" },
  { path: "/vat-filing-mauritius" },
  { path: "/seo-services-mauritius" },

  // Industry and software SEO pages
  { path: "/car-rental-website-mauritius" },
  { path: "/booking-website-mauritius" },
  { path: "/ecommerce-store-mauritius" },
  { path: "/custom-website-mauritius" },
  { path: "/tour-operator-website-mauritius" },
  { path: "/real-estate-website-mauritius" },
  { path: "/web-application-development-mauritius" },
  { path: "/restaurant-website-mauritius" },
  { path: "/salon-website-mauritius" },
  { path: "/accounting-software-mauritius" },
  { path: "/inventory-management-system-mauritius" },
  { path: "/stock-management-system-mauritius" },
  { path: "/hotel-website-mauritius" },
  { path: "/villa-booking-website-mauritius" },
  { path: "/booking-system-mauritius" },
  { path: "/doctor-clinic-website-mauritius" },
  { path: "/school-website-mauritius" },
  { path: "/construction-website-mauritius" },
  { path: "/accounting-firm-website-mauritius" },
  { path: "/crm-software-mauritius" },
  { path: "/invoice-software-mauritius" },
  { path: "/law-firm-website-mauritius" },

  // Commercial and conversion pages
  { path: "/monthly-packages" },
  { path: "/free-seo-audit" },
  { path: "/free-website-review" },
  { path: "/free-business-consultation" },
  { path: "/portfolio" },
  { path: "/testimonials" },
  { path: "/why-us" },
  { path: "/mauritius-services" },
  { path: "/contact" },
  { path: "/blog" },
  { path: "/faq" },
  { path: "/about" },
  { path: "/careers" },

  // Policy pages
  { path: "/privacy-policy" },
  { path: "/terms-of-use" },
  { path: "/terms-of-service" },
  { path: "/security-policy" },
  { path: "/policies" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_ROUTES.map(({ path }) => ({
      url: `${SITE_URL}${path}`,
    })),

    ...cityServiceSitemapEntries.map((entry) => ({
      url: `${SITE_URL}${entry.path ?? ""}`,
    })),

    ...blogPosts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: lastModified(post.updatedAt),
    })),

    ...portfolioItems.map((item) => ({
      url: `${SITE_URL}/portfolio/${item.slug}`,
      lastModified: lastModified(item.updatedAt),
    })),
  ];
}
