import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;