import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages deployment configuration
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: process.env.NODE_ENV === 'production' ? '/yes-security' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/yes-security' : '',
  env: { 
    NEXT_PUBLIC_BASE_PATH: process.env.NODE_ENV === 'production' ? '/yes-security' : '' 
  },
};

export default nextConfig;
