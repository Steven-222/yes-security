import type { NextConfig } from "next";

// Configure static export for GitHub Pages.
// If deploying to a project site (https://username.github.io/REPO_NAME),
// set PAGES_BASE to "/REPO_NAME" in the environment, or replace below.
const base = process.env.PAGES_BASE ?? process.env.GITHUB_PAGES_BASE ?? "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: base,
  },
  // Uncomment and set explicitly if you know the repo name:
  basePath: "/yes-security",
  assetPrefix: "/yes-security/",
  ...(base
    ? { basePath: base, assetPrefix: `${base}/` }
    : {}),
};

export default nextConfig;
