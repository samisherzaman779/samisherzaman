// # app/contact/layout.tsx
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for freelance projects, collaborations, or inquiries about full-stack and AI development.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Sami Sherzaman",
    description:
      "Reach out for project inquiries, collaborations, or questions about Next.js, SaaS, and AI builds.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
