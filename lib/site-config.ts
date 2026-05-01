// # lib/site-config.ts
/** Canonical site URL (no trailing slash). Used for SEO, OG URLs, JSON-LD, sitemap. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://samisherzaman.vercel.app";

export function absoluteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export const siteConfig = {
  name: "Sami Sherzaman",
  shortName: "Sami Sherzaman Portfolio",
  /** Default title before template applies */
  title: "Sami Sherzaman | Full-Stack & AI Developer",
  description:
    "Premium full-stack developer specializing in Next.js, React, TypeScript, AI/ML integration, and SaaS development. Building world-class digital experiences for discerning clients.",
  locale: "en_US",
  twitterHandle: "@SamiSherzaman",
  /** Same-as profiles for structured data */
  sameAs: [
    "https://github.com/samisherzaman779",
    "https://www.linkedin.com/in/sami-sherzaman",
    "https://x.com/SamiSherzaman",
    "mailto:samisherzaman779@gmail.com",
  ],
  keywords: [
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "React",
    "TypeScript",
    "SaaS Development",
    "Software Engineer",
    "Web Development",
    "Pakistan",
    "Freelance Developer",
    "Chatbot Development",
    "Python Development",
    "AI Solutions",
  ],
} as const;
