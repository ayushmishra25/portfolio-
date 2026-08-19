import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Static export -> produces `out/`, a folder of plain HTML/CSS/JS.
   * Deployable to Nevtan Cloud, any static bucket, nginx, or a container.
   * No Node runtime required in production.
   */
  output: "export",

  // Static export cannot use the on-demand image optimiser.
  images: { unoptimized: true },

  // Emits /about/index.html instead of /about.html — friendlier for most static hosts.
  trailingSlash: true,
};

export default nextConfig;
