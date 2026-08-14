import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  /** Site-relative path, e.g. "/website-design-mauritius". */
  path: string;
  /** Set false for pages that must stay out of the index. */
  index?: boolean;
  keywords?: string[];
  /** Article-specific Open Graph fields. */
  article?: { publishedTime?: string; modifiedTime?: string };
};

/**
 * One metadata builder for every route.
 *
 * Guarantees each page carries a self-canonical URL and matching Open Graph and
 * Twitter tags — the three things that most often drift apart when metadata is
 * written by hand per page.
 *
 * `title` is emitted as `absolute` so a page that already contains the brand
 * doesn't get "| MoBiz.mu" appended a second time by the root template.
 */
export function buildMetadata({
  title,
  description,
  path,
  index = true,
  keywords,
  article,
}: BuildMetadataInput): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;

  return {
    title: { absolute: title },
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: article ? "article" : "website",
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: "en_US",
      ...(article ?? {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
