import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Don't advertise the framework in response headers.
  poweredByHeader: false,

  images: {
    // One quality step keeps the image cache small; 75 is the visual/byte sweet spot.
    qualities: [75],
    formats: ["image/avif", "image/webp"],

    /*
     * Measured on production: every optimized image came back
     * `Cache-Control: public, max-age=0, must-revalidate`, so the logo and every
     * portfolio/blog thumbnail re-validated on each navigation — which is what
     * made images look like they "popped in late".
     *
     * The optimizer takes the larger of this value and the upstream
     * Cache-Control, and unversioned files in `public/` send max-age=0, which is
     * where the 0 came from. 30 days is long enough to make repeat views instant
     * and short enough that replacing a file at the same path still propagates
     * without a deploy-time cache bust.
     */
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  experimental: {
    // This host has ~8GB RAM. Next's default static-generation worker pool spawns one
    // process per core (11 here), which exhausts memory mid-build. Capping it trades
    // build time for reliability, which is the right trade on this machine.
    cpus: 2,
  },

  typescript: {
    // Type errors must fail the build. `npm run typecheck` still runs tsc separately,
    // but relying on that alone meant a type error could ship if the gate was skipped.
    // The in-build checker is memory-hungry on this ~8GB host, which is why the build
    // script raises --max-old-space-size; if it ever OOMs, fix the memory ceiling
    // rather than turning this back off.
    ignoreBuildErrors: false,
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
    /*
     * Caching for files served straight out of `public/`.
     *
     * Deliberately NOT `immutable`: these paths are not content-hashed, so an
     * immutable year would strand a replaced image in browsers indefinitely. A
     * day of browser cache with a week of stale-while-revalidate gives repeat
     * visits an instant hit, serves stale-then-refresh for a week, and still
     * picks up a swapped file within a day. Assets that genuinely need forever
     * caching are imported from source instead, so Next hashes their filenames.
     */
    const imageCache = [
      {
        key: "Cache-Control",
        value: "public, max-age=86400, stale-while-revalidate=604800",
      },
    ];

    // Icons change about once a rebrand; a week costs nothing.
    const iconCache = [
      { key: "Cache-Control", value: "public, max-age=604800" },
    ];

    return [
      { source: "/:path*", headers: securityHeaders },
      { source: "/images/:path*", headers: imageCache },
      { source: "/icon.png", headers: iconCache },
      { source: "/icon-32.png", headers: iconCache },
      { source: "/icon-48.png", headers: iconCache },
      { source: "/icons/:path*", headers: iconCache },
      { source: "/apple-icon.png", headers: iconCache },
      { source: "/favicon.ico", headers: iconCache },
      { source: "/site.webmanifest", headers: iconCache },
    ];
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
