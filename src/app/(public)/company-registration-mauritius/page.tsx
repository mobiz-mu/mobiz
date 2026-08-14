import type { Metadata } from "next";
import { SeoLandingPage } from "@/components/templates/SeoLandingPage";
import { seoLandingPages } from "@/lib/seoLandingPages";
import { NATIONAL_SEO_STYLE } from "@/lib/seo-route-style";
import { buildMetadata } from "@/lib/metadata";

const SLUG = "company-registration-mauritius" as const;
const data = seoLandingPages[SLUG];
const style = NATIONAL_SEO_STYLE[SLUG];

export const metadata: Metadata = buildMetadata({
  title: data.metaTitle,
  description: data.metaDescription,
  path: `/${SLUG}`,
  keywords: [data.primaryKeyword, ...data.secondaryKeywords],
});

export default function Page() {
  return (
    <SeoLandingPage data={data} accent={style.accent} visualDivision={style.division} />
  );
}
