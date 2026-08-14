import type { Metadata } from "next";
import { ServicesHubPage } from "@/components/templates/ServicesHubPage";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Mauritius Services | Local Website, SEO & Accounting Support | MoBiz.mu",
  description:
    "MoBiz.mu works with businesses across Mauritius. Explore website design, SEO and accounting support by town, plus our five service divisions.",
  path: "/mauritius-services",
});

export default function Page() {
  return (
    <ServicesHubPage
      eyebrow="Across Mauritius"
      title="Business services for companies across Mauritius"
      subtitle="We work with businesses island-wide — from Port Louis and Curepipe to Grand Baie — and support clients in Rodrigues and Réunion."
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Mauritius Services" }]}
      relatedTitle="Services by town"
      relatedLinks={[
        {
                title: "Website Design Port Louis",
                href: "/website-design-port-louis"
        },
        {
                title: "Website Design Curepipe",
                href: "/website-design-curepipe"
        },
        {
                title: "Website Design Quatre Bornes",
                href: "/website-design-quatre-bornes"
        },
        {
                title: "Website Design Vacoas",
                href: "/website-design-vacoas"
        },
        {
                title: "Website Design Rose Hill",
                href: "/website-design-rose-hill"
        },
        {
                title: "Website Design Grand Baie",
                href: "/website-design-grand-baie"
        },
        {
                title: "Website Design Beau Bassin",
                href: "/website-design-beau-bassin"
        },
        {
                title: "Website Design Flacq",
                href: "/website-design-flacq"
        },
        {
                title: "Website Design Phoenix",
                href: "/website-design-phoenix"
        },
        {
                title: "SEO Services Port Louis",
                href: "/seo-services-port-louis"
        },
        {
                title: "SEO Services Curepipe",
                href: "/seo-services-curepipe"
        },
        {
                title: "SEO Services Quatre Bornes",
                href: "/seo-services-quatre-bornes"
        },
        {
                title: "SEO Services Vacoas",
                href: "/seo-services-vacoas"
        },
        {
                title: "SEO Services Rose Hill",
                href: "/seo-services-rose-hill"
        },
        {
                title: "Accounting Port Louis",
                href: "/accounting-services-port-louis"
        },
        {
                title: "Accounting Curepipe",
                href: "/accounting-services-curepipe"
        },
        {
                title: "Accounting Quatre Bornes",
                href: "/accounting-services-quatre-bornes"
        },
        {
                title: "Accounting Vacoas",
                href: "/accounting-services-vacoas"
        }
]}
    />
  );
}
