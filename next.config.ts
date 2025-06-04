import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["legalitas.org"], // 👈 add the allowed domain here
  },
};

export default nextConfig;
