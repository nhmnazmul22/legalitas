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
  // Trust the proxy headers (important for HTTPS detection behind NGINX)
  trustHost: true,
};

export default nextConfig;
