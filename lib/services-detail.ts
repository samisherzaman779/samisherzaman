// # lib/services-detail.ts
import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Cloud,
  Brain,
  Code2,
  Palette,
  Zap,
} from "lucide-react";

export type ServiceSlug =
  | "website-development"
  | "saas-development"
  | "ai-integration"
  | "custom-software"
  | "ui-ux-design"
  | "api-development";

export interface PortfolioService {
  slug: ServiceSlug;
  title: string;
  description: string;
  features: string[];
  price: string;
  timeline: string;
  color: string;
  bgColor: string;
  icon: LucideIcon;
  detailIntro: string[];
  outcomes: string[];
}

export const portfolioServices: PortfolioService[] = [
  {
    slug: "website-development",
    title: "Website Development",
    icon: Globe,
    description:
      "Custom, high-performance websites built with modern technologies. From marketing sites to complex web applications, I deliver pixel-perfect, responsive solutions.",
    features: [
      "Next.js & React Development",
      "SEO-Optimized Architecture",
      "Responsive & Mobile-First Design",
      "Performance Optimization (90+ Lighthouse)",
      "Accessibility Compliance (WCAG 2.1)",
      "CMS Integration (Headless)",
    ],
    price: "From $5,000",
    timeline: "2–6 weeks",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    detailIntro: [
      "Your website is often the first impression customers have of your brand. I build fast, accessible experiences that rank well and convert visitors—without sacrificing design polish.",
      "Whether you need a sleek marketing site, a content-heavy portal, or a custom web app shell, the stack is tuned for Core Web Vitals, SEO metadata, and maintainability.",
    ],
    outcomes: [
      "Clear information architecture and structured content models",
      "Analytics-ready layouts with measurable conversion paths",
      "Deployment pipelines suited to your hosting (Vercel, AWS, custom)",
    ],
  },
  {
    slug: "saas-development",
    title: "SaaS Development",
    icon: Cloud,
    description:
      "End-to-end SaaS platform development from concept to launch. Multi-tenant architecture, authentication, billing, and scalable infrastructure.",
    features: [
      "Multi-tenant Architecture",
      "Authentication & Authorization",
      "Stripe/Payment Integration",
      "Real-time Features (WebSockets)",
      "Admin Dashboard & Analytics",
      "API Design & Documentation",
    ],
    price: "From $15,000",
    timeline: "8–16 weeks",
    color: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-500/10",
    detailIntro: [
      "Shipping a SaaS product means balancing security, scalability, and speed of iteration. I design architectures that isolate tenants, handle subscriptions cleanly, and scale as usage grows.",
      "From authentication flows to billing webhooks and admin tooling, each piece is wired for observability so issues surface before users notice.",
    ],
    outcomes: [
      "Secure signup/login with roles and optional SSO hooks",
      "Subscription lifecycle aligned with Stripe (or your PSP)",
      "Operational dashboards for admins and customer-facing analytics where needed",
    ],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    icon: Brain,
    description:
      "Integrate cutting-edge AI capabilities into your applications. From LLM-powered features to custom ML workflows, I build intelligent systems that fit your product.",
    features: [
      "OpenAI GPT & Assistants Integration",
      "LangChain & Vector Databases",
      "Retrieval-Augmented Generation (RAG)",
      "Natural Language Interfaces",
      "Prompt & Safety Patterns",
      "Automation Workflows",
    ],
    price: "From $10,000",
    timeline: "4–12 weeks",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    detailIntro: [
      "AI features should feel native—not bolted on. I integrate models behind clear UX, guardrails, and observability so responses stay useful and costs stay predictable.",
      "Whether you need chat experiences, document Q&A, classification, or workflow automation, solutions are grounded in your data via embeddings and retrieval where appropriate.",
    ],
    outcomes: [
      "Latency-aware UX with streaming and fallback behaviors",
      "Cost-conscious token usage and caching strategies",
      "Privacy-aligned handling of prompts and retrieved context",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    icon: Code2,
    description:
      "Bespoke software tailored to your processes—internal tools, client portals, integrations, and modernization of legacy stacks.",
    features: [
      "REST & GraphQL Services",
      "Microservices-Oriented Design",
      "Database Modeling & Optimization",
      "Cloud-Native Patterns",
      "Third-party Integrations",
      "Legacy Modernization Paths",
    ],
    price: "From $8,000",
    timeline: "4–16 weeks",
    color: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-500/10",
    detailIntro: [
      "Off-the-shelf tools rarely match how your team actually works. Custom software aligns workflows, reduces manual errors, and connects systems that were never designed to talk to each other.",
      "Delivery emphasizes documentation, testing, and handover—so your engineers can extend the system confidently after launch.",
    ],
    outcomes: [
      "Domain-driven modeling mapped to clear APIs and boundaries",
      "Integration layers that tolerate upstream API volatility",
      "Deployment strategies aligned with your compliance constraints",
    ],
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    icon: Palette,
    description:
      "User-centered interfaces that convert—design systems, prototypes, and frontend implementation aligned with your brand.",
    features: [
      "Design System Creation",
      "Interactive Prototyping",
      "UX Flows & Wireframes",
      "Component Libraries",
      "Motion & Micro-interactions",
      "Responsive Layout Systems",
    ],
    price: "From $4,000",
    timeline: "2–8 weeks",
    color: "from-orange-500 to-amber-500",
    bgColor: "bg-orange-500/10",
    detailIntro: [
      "Great UX removes friction before users encounter your backend. I translate goals into flows, validate assumptions early with prototypes, and ship cohesive visuals across breakpoints.",
      "Design tokens and reusable components bridge design and engineering—fewer mismatches during implementation and faster iterations afterward.",
    ],
    outcomes: [
      "Consistent typography, spacing, and color usage across screens",
      "Accessible contrast and focus patterns baked into components",
      "Handoff-ready specs alongside implementation in React where applicable",
    ],
  },
  {
    slug: "api-development",
    title: "API Development",
    icon: Zap,
    description:
      "Robust REST and GraphQL APIs—auth models, versioning, documentation, rate limits, and integrations partners can rely on.",
    features: [
      "REST & GraphQL Design",
      "Authentication (JWT, OAuth2, API Keys)",
      "OpenAPI / Schema Documentation",
      "Rate Limiting & Idempotency",
      "Webhook Delivery Patterns",
      "Performance Profiling & Caching",
    ],
    price: "From $3,500",
    timeline: "2–10 weeks",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-500/10",
    detailIntro: [
      "APIs are contracts between teams and products. I focus on predictable schemas, explicit errors, and documentation consumers can ship against without endless back-and-forth.",
      "Security defaults—least privilege, scoped credentials, audit-friendly logs—are built in rather than patched later.",
    ],
    outcomes: [
      "Versioned endpoints or GraphQL schemas with deprecation paths",
      "Observable latency and error budgets per route",
      "Partner-ready docs generated from source-of-truth schemas",
    ],
  },
];

export function getServiceBySlug(slug: string): PortfolioService | undefined {
  return portfolioServices.find((s) => s.slug === slug);
}

export function getRelatedServices(
  slug: ServiceSlug,
  limit = 3
): PortfolioService[] {
  return portfolioServices.filter((s) => s.slug !== slug).slice(0, limit);
}
