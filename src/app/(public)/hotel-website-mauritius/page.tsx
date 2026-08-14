import type { Metadata } from "next";
import { BusinessSeoLandingPage } from "@/components/templates/BusinessSeoLandingPage";
import { businessSeoPages } from "@/lib/businessSeoPages";
import { BUSINESS_SEO_STYLE } from "@/lib/seo-route-style";
import { buildMetadata } from "@/lib/metadata";

const SLUG = "hotel-website-mauritius" as const;
const data = businessSeoPages[SLUG];
const style = BUSINESS_SEO_STYLE[SLUG];

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/${SLUG}`,
  keywords: [data.primaryKeyword, ...data.secondaryKeywords],
});

export default function Page() {
  return (
    <BusinessSeoLandingPage data={data} accent={style.accent} visualDivision={style.division} />
  );
}
