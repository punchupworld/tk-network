import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "tk-network";

function normalizeBasePath(value: string): string {
  if (!value || value === "/") return "";
  return `/${value.replace(/^\/+|\/+$/g, "")}`;
}

// Domain root (customer zip): leave unset.
// Subfolder: BASE_PATH=/handbook
// GitHub Pages CI: GITHUB_PAGES=true
const basePath = normalizeBasePath(
  process.env.BASE_PATH ?? (isGithubPages ? `/${repoName}` : ""),
);

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
