import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/templates/ServicesHubPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Services | Websites, Marketing, Accounting & Business Systems in Mauritius | MoBiz.mu",
  description:
    "Explore MoBiz.mu's five service divisions: website design and development, digital marketing and SEO, accounting and tax returns, warehousing and inventory, and business solutions.",
  path: "/services",
});

export default function Page() {
  return (
    <ServicesHubPage
      eyebrow="Services"
      title="Everything your business needs, connected through Mobiz"
      subtitle="Five divisions, one team. Websites that convert, marketing that brings enquiries, accounting that stays compliant, stock you can actually track, and the systems that hold it together."
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
