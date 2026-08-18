"use client";

import dynamic from "next/dynamic";

import { useNearViewport } from "@/lib/hooks/useNearViewport";
import { WebsiteTemplateCarouselPoster } from "./WebsiteTemplateCarouselPoster";

const WebsiteTemplateCarousel = dynamic(() =>
  import("./WebsiteTemplateCarousel").then((m) => m.WebsiteTemplateCarousel),
);

/**
 * Server-renders the finished, static carousel poster immediately; swaps in
 * the drag-enabled client component only once this section is near the
 * viewport, so its JS is never part of the initial page load.
 */
export function WebsiteTemplateCarouselIsland() {
  const { ref, near } = useNearViewport<HTMLDivElement>();

  return (
    <div ref={ref}>
      {near ? <WebsiteTemplateCarousel /> : <WebsiteTemplateCarouselPoster />}
    </div>
  );
}

export default WebsiteTemplateCarouselIsland;
