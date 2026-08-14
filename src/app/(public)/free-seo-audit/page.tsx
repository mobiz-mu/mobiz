import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadMagnetPage } from "@/components/templates/LeadMagnetPage";
import { leadMagnets } from "@/lib/leadMagnets";
import { buildMetadata } from "@/lib/metadata";

const SLUG = "free-seo-audit" as const;
const data = leadMagnets[SLUG];

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/${SLUG}`,
});

export default function Page() {
  if (!data) notFound();
  return <LeadMagnetPage data={data} accent="sky" visualDivision="digital-marketing" />;
}
