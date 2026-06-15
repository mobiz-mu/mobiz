import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityServiceLandingPage from "@/components/seo/CityServiceLandingPage";
import {
  cityServiceSlugs,
  getCityServicePage,
} from "@/lib/cityServicePages";

const BASE_URL = "https://mobiz.mu";

// Only the known city x service slugs are valid. Any other path 404s exactly
// as it did before this route existed (static sibling routes still win).
export const dynamicParams = false;

export function generateStaticParams() {
  return cityServiceSlugs.map((cityServiceSlug) => ({ cityServiceSlug }));
}

type RouteParams = { cityServiceSlug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { cityServiceSlug } = await params;
  const page = getCityServicePage(cityServiceSlug);

  if (!page) {
    return {};
  }

  const url = `${BASE_URL}/${page.slug}`;

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: [page.primaryKeyword, ...page.secondaryKeywords],
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      siteName: "MoBiz.mu",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
    },
  };
}

export default async function CityServiceRoute({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { cityServiceSlug } = await params;
  const page = getCityServicePage(cityServiceSlug);

  if (!page) {
    notFound();
  }

  return <CityServiceLandingPage page={page} />;
}
