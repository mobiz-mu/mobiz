import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CityServiceLandingPage } from "@/components/templates/CityServiceLandingPage";
import { cityServicePages, getCityServicePage } from "@/lib/cityServicePages";
import { buildMetadata } from "@/lib/metadata";

type Params = { cityServiceSlug: string };

/**
 * City × service landing pages.
 *
 * This is the site's only open dynamic segment at the root, so it is the one
 * route that could swallow unknown URLs and serve them a 200. It must not:
 *
 *  - `generateStaticParams` enumerates the 27 valid slugs, so those prerender.
 *  - `dynamicParams = false` makes anything outside that list a 404 rather than
 *    an on-demand render. A typo'd or spammed URL therefore never becomes an
 *    indexable page with invented content.
 *  - `generateMetadata` still calls `notFound()` defensively, so the two paths
 *    can't disagree.
 */
export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return cityServicePages.map((page) => ({ cityServiceSlug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { cityServiceSlug } = await params;
  const data = getCityServicePage(cityServiceSlug);
  if (!data) notFound();

  return buildMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/${data.slug}`,
    keywords: [data.primaryKeyword, ...data.secondaryKeywords],
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { cityServiceSlug } = await params;
  const data = getCityServicePage(cityServiceSlug);
  if (!data) notFound();

  return <CityServiceLandingPage data={data} />;
}
