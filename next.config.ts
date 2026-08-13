import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Don't advertise the framework in response headers.
  poweredByHeader: false,

  images: {
    // One quality step keeps the image cache small; 75 is the visual/byte sweet spot.
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },

  experimental: {
    // This host has ~8GB RAM. Next's default static-generation worker pool spawns one
    // process per core (11 here), which exhausts memory mid-build. Capping it trades
    // build time for reliability, which is the right trade on this machine.
    cpus: 2,
  },

  typescript: {
    // Type checking runs separately via `npm run typecheck` (tsc --noEmit). Next's
    // in-build checker duplicates that work in a worker that needs far more memory
    // than this host has, so it's disabled here to keep `next build` reliable.
    ignoreBuildErrors: true,
  },

  async headers() {
    const securityHeaders = [
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
      },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },

  async redirects() {
    // Legacy service URLs that were renamed before this rebuild. Kept permanent so the
    // existing Google equity continues to resolve — see docs/ROUTE-INVENTORY.md.
    return [
      {
        source: "/services/website-design",
        destination: "/services/website-design-development",
        permanent: true,
      },
      {
        source: "/services/logistics",
        destination: "/services/warehousing-inventory",
        permanent: true,
      },
      {
        source: "/services/branding-business-solutions",
        destination: "/services/business-solutions",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
