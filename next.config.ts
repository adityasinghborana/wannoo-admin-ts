import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactStrictMode: false,

  // Only apply basePath and assetPrefix in production
  ...(isProd && {
    basePath: "/admin",
    assetPrefix: "/admin",
  }),

  images: {
    domains: ["assets.aceternity.com", "localhost", "68.66.251.170"],
  },
};

export default nextConfig;
