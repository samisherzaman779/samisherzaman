// # app/about/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Sami Sherzaman — full-stack & AI developer: background, stack focus, experience highlights, and how we can collaborate on premium web products.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sami Sherzaman",
    description:
      "Background, engineering approach, and experience building Next.js, SaaS, and AI-powered products.",
    url: "/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
