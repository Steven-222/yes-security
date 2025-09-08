import type { NextConfig } from "next";

// Configure static export for GitHub Pages.
// Default to "/yes-security"; allow override via PAGES_BASE.
const base = process.env.PAGES_BASE ?? "/yes-security";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: base },
  basePath: base,
  assetPrefix: `${base}/`,
};

export default nextConfig;
