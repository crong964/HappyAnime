import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  logging: false,

  images: {
    qualities: [10],
    formats: ["image/webp"],
    remotePatterns: [
      { hostname: "phimimg.com", protocol: 'https' }
    ]

  },
  devIndicators: { position: "bottom-right" },
  reactStrictMode: false
};

export default nextConfig;
