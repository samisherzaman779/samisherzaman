// # app/sitemap.ts
import type { MetadataRoute } from "next";
import { posts } from "@/lib/blog-data";
import { portfolioServices } from "@/lib/services-detail";
import { SITE_URL } from "@/lib/site-config";

const staticPaths: {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.9 },
  { path: "/projects", changeFrequency: "weekly", priority: 0.9 },
  { path: "/services", changeFrequency: "weekly", priority: 0.95 },
  { path: "/skills", changeFrequency: "monthly", priority: 0.85 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.85 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE_URL.replace(/\/$/, "");
  const lastMod = new Date();

  const entries: MetadataRoute.Sitemap = [
    ...staticPaths.map(({ path, changeFrequency, priority }) => ({
      url: `${base}${path}`,
      lastModified: lastMod,
      changeFrequency,
      priority,
    })),
    ...posts.map((post) => ({
      url: `${base}/blog/${post.slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...portfolioServices.map((s) => ({
      url: `${base}/services/${s.slug}`,
      lastModified: lastMod,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return entries;
}
