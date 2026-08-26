import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    const schedulerUrl =
      process.env.SCHEDULER_APP_URL ||
      "https://taskventurers-scheduler.vercel.app";
    return [
      {
        source: "/app/scheduling-flow/:path*",
        destination: `${schedulerUrl}/app/scheduling-flow/:path*`,
      },
      {
        source: "/book/:path*",
        destination: `${schedulerUrl}/book/:path*`,
      },
      {
        source: "/api/calendar/:path*",
        destination: `${schedulerUrl}/api/calendar/:path*`,
      },
    ];
  },
};

export default nextConfig;
