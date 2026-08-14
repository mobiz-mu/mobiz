import type { Metadata } from "next";
import { ServicePillarPage } from "@/components/templates/ServicePillarPage";
import { businessSolutions as content } from "@/lib/services/businessSolutions";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: content.metaTitle,
  description: content.metaDescription,
  path: content.path,
  keywords: content.keywords,
});

export default function Page() {
  return <ServicePillarPage content={content} />;
}
