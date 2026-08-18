import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesHubPage } from "@/components/templates/ServicesHubPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services in Mauritius | Web, Marketing & Accounting",
  description:
    "Five divisions, one team: website design, digital marketing and SEO, accounting and tax, warehousing and inventory, and business solutions in Mauritius.",
  path: "/services",
});

export default function Page() {
  return (
    <ServicesHubPage
      /*
       * The hub gets its own hero. `eyebrow`/`title`/`subtitle` stay because the
       * template's other consumer (/mauritius-services) still renders PageHero
       * from them; here they are superseded by the override.
       */
      hero={
        <ServicesHero
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        />
      }
      eyebrow="Services"
      title="Everything your business needs. One trusted partner."
      subtitle="From websites and digital marketing to accounting, inventory and business solutions — Mobiz brings the essential services Mauritian businesses need to grow under one roof."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
      relatedTitle="Popular services"
      relatedLinks={[
        { title: "Website Design Mauritius", href: "/website-design-mauritius" },
        { title: "SEO Services Mauritius", href: "/seo-services-mauritius" },
        { title: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
        { title: "Accounting Services Mauritius", href: "/accounting-services-mauritius" },
        { title: "VAT Filing Mauritius", href: "/vat-filing-mauritius" },
        { title: "Company Registration Mauritius", href: "/company-registration-mauritius" },
        { title: "Ecommerce Website Mauritius", href: "/ecommerce-website-mauritius" },
        { title: "Inventory Management System", href: "/inventory-management-system-mauritius" },
        { title: "Monthly Website Packages", href: "/monthly-packages" },
      ]}
    />
  );
}
