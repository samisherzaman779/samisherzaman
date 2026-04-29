// # app/skills/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical stack and competencies: React & Next.js, TypeScript, backend APIs, databases, cloud, AI/LLMs, and UI engineering.",
  alternates: { canonical: "/skills" },
  openGraph: {
    title: "Skills & Technologies",
    description:
      "Languages, frameworks, tooling, and strengths across full-stack development and AI integration.",
    url: "/skills",
    type: "website",
  },
};

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return children;
}
