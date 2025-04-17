import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Skip all ESLint errors during build
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Skip all TypeScript errors during build
    ignoreBuildErrors: true,
  },
  // Optional: ignore image domains if they cause issues
  // images: {
  //   unoptimized: true, // disables next/image optimization
  // },
  // If you want to completely remove static checks:
  experimental: {
    typedRoutes: false, // disables typed route enforcement
    // any other experimental things you want to disable
  },
};

export default nextConfig;
