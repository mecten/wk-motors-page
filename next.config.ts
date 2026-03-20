import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "http", hostname: "wk-motors.de" },
      { protocol: "https", hostname: "wk-motors.de" },
    ],
  },
};

export default nextConfig;
