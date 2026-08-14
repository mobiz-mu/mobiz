import type { Metadata } from "next";
import { ServicePillarPage } from "@/components/templates/ServicePillarPage";
import { warehousingInventory as content } from "@/lib/services/warehousingInventory";
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
