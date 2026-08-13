import { describe, it, expect } from "vitest";
import { blogPosts } from "@/lib/blog";
import { portfolioItems } from "@/lib/portfolio";
import { cityServicePages, cityServiceSlugs, getCityServicePage } from "@/lib/cityServicePages";
import { serviceDivisions, mainNavLinks, secondaryNavLinks } from "@/lib/navigation";
import { MONTHLY_PACKAGES, getPackage, isPackageId } from "@/lib/monthly-packages";

/**
 * These routes are an SEO contract with Google. This suite fails loudly if a
 * slug is renamed, dropped or duplicated during the rebuild.
 */

const STATIC_ROUTES = [
  "/",
  "/about",
  "/accounting-firm-website-mauritius",
  "/accounting-services-mauritius",
  "/accounting-software-mauritius",
  "/blog",
  "/booking-system-mauritius",
  "/booking-website-mauritius",
  "/careers",
  "/car-rental-website-mauritius",
  "/company-registration-mauritius",
  "/construction-website-mauritius",
  "/contact",
  "/crm-software-mauritius",
  "/custom-website-mauritius",
  "/digital-marketing-mauritius",
  "/doctor-clinic-website-mauritius",
  "/ecommerce-store-mauritius",
  "/ecommerce-website-mauritius",
  "/faq",
  "/free-business-consultation",
  "/free-seo-audit",
  "/free-website-review",
  "/hotel-website-mauritius",
  "/inventory-management-system-mauritius",
  "/invoice-software-mauritius",
  "/law-firm-website-mauritius",
  "/mauritius-services",
  "/monthly-packages",
  "/policies",
  "/portfolio",
  "/privacy-policy",
  "/real-estate-website-mauritius",
  "/restaurant-website-mauritius",
  "/salon-website-mauritius",
  "/school-website-mauritius",
  "/security-policy",
  "/seo-services-mauritius",
  "/services",
  "/services/accounting-tax-returns",
  "/services/business-solutions",
  "/services/digital-marketing",
  "/services/warehousing-inventory",
  "/services/website-design-development",
  "/stock-management-system-mauritius",
  "/terms-of-service",
  "/terms-of-use",
  "/testimonials",
  "/tour-operator-website-mauritius",
  "/vat-filing-mauritius",
  "/villa-booking-website-mauritius",
  "/web-application-development-mauritius",
  "/website-design-mauritius",
  "/why-us",
];

describe("route inventory", () => {
  it("preserves every static production route", () => {
    expect(STATIC_ROUTES).toHaveLength(54);
    expect(new Set(STATIC_ROUTES).size).toBe(STATIC_ROUTES.length);
  });

  it("keeps all 8 blog slugs unique and non-empty", () => {
    expect(blogPosts.length).toBe(8);
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((s) => expect(s).toMatch(/^[a-z0-9-]+$/));
  });

  it("keeps all 8 portfolio slugs unique and non-empty", () => {
    expect(portfolioItems.length).toBe(8);
    const slugs = portfolioItems.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    slugs.forEach((s) => expect(s).toMatch(/^[a-z0-9-]+$/));
  });

  it("generates 27 city x service pages (9 cities x 3 services)", () => {
    expect(cityServicePages).toHaveLength(27);
    expect(new Set(cityServiceSlugs).size).toBe(27);
  });

  it("resolves a known city-service slug and rejects an unknown one", () => {
    expect(getCityServicePage("website-design-port-louis")).toBeDefined();
    expect(getCityServicePage("website-design-atlantis")).toBeUndefined();
    expect(getCityServicePage("")).toBeUndefined();
  });

  it("never lets a city-service slug collide with a static route", () => {
    const staticSet = new Set(STATIC_ROUTES.map((r) => r.replace(/^\//, "")));
    cityServiceSlugs.forEach((slug) => expect(staticSet.has(slug)).toBe(false));
  });

  it("exposes exactly the five service divisions with unique hrefs", () => {
    expect(serviceDivisions).toHaveLength(5);
    const hrefs = serviceDivisions.map((d) => d.href);
    expect(new Set(hrefs).size).toBe(5);
    hrefs.forEach((h) => expect(STATIC_ROUTES).toContain(h));
  });

  it("points every navigation link at a real route", () => {
    [...mainNavLinks, ...secondaryNavLinks].forEach((link) => {
      expect(STATIC_ROUTES).toContain(link.href);
    });
  });
});

describe("monthly packages", () => {
  it("preserves the three verified packages and their prices", () => {
    expect(MONTHLY_PACKAGES).toHaveLength(3);
    expect(getPackage("starter").price).toBe(1499);
    expect(getPackage("business").price).toBe(2299);
    expect(getPackage("premium").price).toBe(4999);
  });

  it("keeps priceLabel in sync with price", () => {
    MONTHLY_PACKAGES.forEach((pkg) => {
      expect(pkg.priceLabel).toContain(pkg.price.toLocaleString("en-US"));
    });
  });

  it("validates package ids", () => {
    expect(isPackageId("starter")).toBe(true);
    expect(isPackageId("enterprise")).toBe(false);
  });

  it("throws rather than silently falling back on an unknown id", () => {
    // @ts-expect-error — exercising the runtime guard with an invalid id
    expect(() => getPackage("nope")).toThrow();
  });
});
