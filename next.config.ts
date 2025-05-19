import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  assetPrefix: "/admin/",
  /* config options here */
  images: {
    domains: ["assets.aceternity.com","localhost","68.66.251.170"],
  },
};

export default nextConfig;
