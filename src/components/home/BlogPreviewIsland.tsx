"use client";

import dynamic from "next/dynamic";

import { useNearViewport } from "@/lib/hooks/useNearViewport";
import { BlogPreviewPoster } from "./BlogPreviewPoster";

const BlogPreview = dynamic(() =>
  import("./BlogPreview").then((m) => m.BlogPreview),
);

/**
 * Server-renders the finished blog section (deck resting on the first post,
 * full mobile stack) immediately; swaps in the clickable deck only once the
 * section is near the viewport, so its JS is never part of the initial page
 * load.
 */
export function BlogPreviewIsland() {
  const { ref, near } = useNearViewport<HTMLDivElement>();

  return (
    <div ref={ref}>
      {near ? <BlogPreview /> : <BlogPreviewPoster />}
    </div>
  );
}

export default BlogPreviewIsland;
