import type { NextConfig } from "next";

// Configure for Vercel deployment by default, GitHub Pages if GITHUB_PAGES=true
const isGitHubPages = process.env.GITHUB_PAGES === "true";
const base = isGitHubPages ? (process.env.PAGES_BASE ?? "/yes-security") : "";

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: "export",
    basePath: base,
    assetPrefix: `${base}/`,
  }),
  images: { unoptimized: isGitHubPages },
  env: { NEXT_PUBLIC_BASE_PATH: base },
};

export default nextConfig;
