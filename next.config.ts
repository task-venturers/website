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
      (process.env.NODE_ENV === "development"
        ? "http://localhost:3001"
        : "https://taskventurers-scheduler.vercel.app");
    return [
      {
        source: "/app",
        destination: `${schedulerUrl}/app`,
      },
      {
        source: "/app/:path*",
        destination: `${schedulerUrl}/app/:path*`,
      },
      {
        source: "/book",
        destination: `${schedulerUrl}/book`,
      },
      {
        source: "/book/:path*",
        destination: `${schedulerUrl}/book/:path*`,
      },
      {
        source: "/auth/:path*",
        destination: `${schedulerUrl}/auth/:path*`,
      },
      {
        source: "/api/calendar/:path*",
        destination: `${schedulerUrl}/api/calendar/:path*`,
      },
      {
        source: "/api/auth/:path*",
        destination: `${schedulerUrl}/api/auth/:path*`,
      },
    ];
  },
};

export default nextConfig;
