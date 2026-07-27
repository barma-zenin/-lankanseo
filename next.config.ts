import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.dribbble.com",
      },
      {
        protocol: "https",
        hostname: "ngenioussolutions.com",
      },
      {
        protocol: "https",
        hostname: "travelagency-website.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "lh7-us.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ddi-dev.com",
      },
      {
        protocol: "https",
        hostname: "www.researchgate.net",
      },
      {
        protocol: "https",
        hostname: "www.inettutor.com",
      },
      {
        protocol: "https",
        hostname: "www.sab.ac.lk",
      },
      {
        protocol: "https",
        hostname: "encrypted-tbn0.gstatic.com",
      },
    ],
  },
};

export default nextConfig;
