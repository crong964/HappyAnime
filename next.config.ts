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

  }
};

export default nextConfig;
