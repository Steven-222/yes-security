import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standard Vercel deployment - no basePath needed
  images: { unoptimized: false },
  env: { NEXT_PUBLIC_BASE_PATH: "" },
};

export default nextConfig;
