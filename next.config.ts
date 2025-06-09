import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "legalitas.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
