import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mobiz.mu";

  const routes = [
    "",
    "/portfolio",
    "/why-us",
    "/testimonials",
    "/blog",
    "/careers",
    "/contact",
    "/services/website-design",
    "/services/digital-marketing",
    "/services/accounting-tax-returns",
    "/services/logistics",
    "/services/branding-business-solutions",
    "/privacy-policy",
    "/terms-of-use",
    "/terms-of-service",
    "/security-policy",
    "/mauritius-services",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}