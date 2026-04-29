// # app/services/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium development services: websites, SaaS, AI integration, custom software, UI/UX, and APIs — scoped timelines and transparent pricing tiers.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Development Offerings",
    description:
      "Website development, SaaS builds, AI features, bespoke software, UI/UX, and API engineering.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesSegmentLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
