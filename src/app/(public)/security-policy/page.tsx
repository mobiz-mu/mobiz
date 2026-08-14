import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PolicyPage } from "@/components/templates/PolicyPage";
import { getPolicy } from "@/lib/policies";
import { buildMetadata } from "@/lib/metadata";

const SLUG = "security-policy";
const doc = getPolicy(SLUG);

export const metadata: Metadata = buildMetadata({
  title: `${doc?.title ?? "Policy"} | MoBiz.mu`,
  description: doc?.metaDescription ?? "",
  path: `/${SLUG}`,
});

export default function Page() {
  if (!doc) notFound();
  return <PolicyPage doc={doc} />;
}
