// # lib/blog-data.ts

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  featured?: boolean;
  body: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "building-scalable-nextjs-apps",
    title: "Building Scalable Next.js Apps in 2026",
    excerpt:
      "App Router patterns, caching, and how to structure large codebases without losing velocity.",
    date: "Mar 12, 2026",
    readTime: "8 min read",
    category: "Engineering",
    featured: true,
    body: [
      "The App Router has matured into the default mental model for new projects. Treating layouts, loading, and error boundaries as first-class concerns up front saves weeks of retrofitting later.",
      "Caching in Next 16+ rewards explicit intent: mark what is static, stamp what is time-bound, and isolate per-user regions so you never paint the wrong variant on the wrong user.",
      "For large teams, convention matters as much as code. Co-locate route groups, enforce feature folders, and keep server actions small and audit-friendly—especially when billing and PII enter the picture.",
    ],
  },
  {
    slug: "llm-integration-patterns",
    title: "LLM Integration Patterns That Don’t Break in Production",
    excerpt:
      "Streaming, retries, observability, and cost control when wiring OpenAI and custom models into real products.",
    date: "Feb 28, 2026",
    readTime: "12 min read",
    category: "AI",
    body: [
      "Users tolerate streaming delays; they do not tolerate silent failures. Wrap every model call with structured errors, backoff, and user-visible retry affordances.",
      "Log token usage per request ID, not per server. You will need these numbers when finance asks why the GPU bill doubled in a weekend.",
      "Prompt versioning belongs next to migration scripts—immutable snapshots help reproduce regressions when the vendor tweaks weights overnight.",
    ],
  },
  {
    slug: "typescript-advanced-types",
    title: "TypeScript Patterns for API-First Teams",
    excerpt:
      "From zod inference to end-to-end types with tRPC-style contracts — keeping the stack honest.",
    date: "Feb 14, 2026",
    readTime: "10 min read",
    category: "TypeScript",
    body: [
      "Infer schemas once at the boundary—HTTP handlers or RPC routers—and fan types outward through handlers instead of manually duplicating interfaces.",
      "Discriminated unions shine when modelling webhook payloads or workflow states; exhaustiveness checks replace tribal knowledge about magic strings.",
      "Reserve generics for reusable primitives; route handlers stay boring on purpose.",
    ],
  },
  {
    slug: "design-systems-that-stick",
    title: "Design Systems That Teams Actually Maintain",
    excerpt:
      "Tokens, accessibility, and documentation that survives the first redesign without a full rewrite.",
    date: "Jan 22, 2026",
    readTime: "6 min read",
    category: "Design",
    body: [
      "Tokens encode intent—semantic colours beat hex hunting across sixty screens.",
      "Accessibility baked into primitives beats audits bolted on before launch.",
      "Storybook drift is real; snapshot meaningful interaction states, not just idle renders.",
    ],
  },
  {
    slug: "postgres-performance-notes",
    title: "PostgreSQL Performance Notes From the Field",
    excerpt:
      "Indexes, query plans, and connection pooling lessons from high-traffic SaaS workloads.",
    date: "Jan 5, 2026",
    readTime: "9 min read",
    category: "Data",
    body: [
      "Explain analyse becomes ritual—automate nightly captures against critical endpoints.",
      "Composite indexes reward queries written around actual traffic shapes, not hypothetical futures.",
      "Pools saturate faster than CPUs; observe queue depth before blaming Postgres itself.",
    ],
  },
  {
    slug: "career-notes-senior-engineer",
    title: "What I Wish I Knew Earlier as a Senior Engineer",
    excerpt:
      "Communication, ownership, and navigating trade-offs when the spec is fuzzy and the deadline isn’t.",
    date: "Dec 18, 2025",
    readTime: "7 min read",
    category: "Career",
    body: [
      "Writing beats debating—summaries unlock alignment faster than repeated meetings.",
      "Ownership includes raising risks early with proposed mitigations—not theatrical heroics.",
      "Documentation ages like milk unless someone maintains it—prefer living diagrams tied to CI.",
    ],
  },
];
