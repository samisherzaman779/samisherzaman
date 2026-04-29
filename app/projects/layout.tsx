// # app/projects/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected portfolio work: SaaS, AI integrations, Next.js platforms, and production-grade interfaces shipped end-to-end.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects — Portfolio Work",
    description:
      "Case highlights spanning modern frontends, APIs, AI features, and scalable architecture.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
