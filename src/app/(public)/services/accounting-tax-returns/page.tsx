import type { Metadata } from "next";
import { ServicePillarPage } from "@/components/templates/ServicePillarPage";
import { accountingTaxReturns as content } from "@/lib/services/accountingTaxReturns";
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
