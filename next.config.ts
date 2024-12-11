import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "statics.globant.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },

  // https://statics.globant.com
};

export default nextConfig;
