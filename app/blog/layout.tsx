// # app/blog/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles on full-stack development, AI, Next.js, and building production-grade software.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Engineering & AI Notes",
    description:
      "Long-form notes on scalable Next.js apps, LLM integration, TypeScript, and shipping reliable products.",
    url: "/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return children;
}
