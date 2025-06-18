import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "legalitas.org",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "202.74.74.123",
        port: "80",
        pathname: "/blogs-img/**",
      },
    ],
  },
};

export default nextConfig;
