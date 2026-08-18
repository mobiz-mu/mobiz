"use client";

import dynamic from "next/dynamic";

import { useNearViewport } from "@/lib/hooks/useNearViewport";
import { ServicesTabsPoster } from "./ServicesTabsPoster";

const ServicesTabs = dynamic(() =>
  import("./ServicesTabs").then((m) => m.ServicesTabs),
);

/**
 * Renders the real, finished section on the server (`ServicesTabsPoster`) so
 * it looks complete before any JS runs. Only once this element is actually
 * about to enter the viewport does the client swap in the fully interactive
 * `ServicesTabs` — its chunk is requested at that point, not during initial
 * page load. A visitor scrolling normally never sees the swap happen; a
 * crawler or a no-JS visitor sees the complete first division regardless.
 */
export function ServicesTabsIsland() {
  const { ref, near } = useNearViewport<HTMLDivElement>();

  return (
    <div ref={ref}>
      {near ? <ServicesTabs /> : <ServicesTabsPoster />}
    </div>
  );
}

export default ServicesTabsIsland;
