import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: { fetches: { fullUrl: true } },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "orcablob.blob.core.windows.net",
      },
    ],
  },
  output: "standalone",
};

export default nextConfig;
