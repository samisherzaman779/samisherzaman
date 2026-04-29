import type { NextConfig } from "next";
import fs from "node:fs";
import path from "node:path";

/**
 * Ensures `.env.local` is applied even when `cwd` differs or Turbopack misses a path.
 * Merges `personal-portfolio-website/.env.local` then parent `../.env.local` for missing keys only.
 */
function mergeDotEnvLocalFiles(): void {
  const candidates = [
    path.join(process.cwd(), ".env.local"),
    path.join(process.cwd(), "..", ".env.local"),
  ];

  for (const file of candidates) {
    if (!fs.existsSync(file)) continue;
    try {
      let raw = fs.readFileSync(file, "utf8");
      raw = raw.replace(/^\uFEFF/, "");
      for (const line of raw.split(/\r?\n/)) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith("#")) continue;
        const eq = trimmed.indexOf("=");
        if (eq === -1) continue;
        const key = trimmed.slice(0, eq).trim();
        let val = trimmed.slice(eq + 1).trim();
        if (
          (val.startsWith('"') && val.endsWith('"')) ||
          (val.startsWith("'") && val.endsWith("'"))
        ) {
          val = val.slice(1, -1);
        }
        const cur = process.env[key];
        if (cur === undefined || cur === "") {
          process.env[key] = val;
        }
      }
    } catch {
      /* ignore unreadable env files */
    }
  }
}

mergeDotEnvLocalFiles();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
