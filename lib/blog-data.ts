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
      "🚀 The Reality of Scaling Next.js Apps\nShipping a small app is easy. Scaling it to support thousands of users and multiple developers? That’s where things break. In 2026, building scalable Next.js apps is less about hacks and more about discipline in architecture.",
      
      "🧠 App Router as a Mental Model\nThe App Router is no longer optional—it defines how your app behaves. Layouts, loading states, and error boundaries must be designed upfront. Treat them as core architecture, not afterthoughts.",
      
      "⚡ Smart Caching = Real Performance\nNext.js now rewards intentional caching. Decide what is static, what is dynamic, and what needs revalidation. Guessing leads to bugs. Precision leads to performance.",
      
      "📁 Structure Beats Talent\nEven great developers struggle in messy codebases. Use feature-based folders, isolate server actions, and keep logic predictable. A clean structure scales better than clever code.",
      
      "👥 Teams Need Conventions\nWhen multiple developers work together, conventions matter more than preferences. Standardize naming, routing, and data fetching patterns to avoid chaos.",
      
      "🏁 Final Thought\nScalability is not a feature you add later—it’s something you design from day one.",
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
      "🤖 AI Demos Are Easy, Production Is Not\nCalling an LLM API is simple. Building a system users can rely on is not. Production-grade AI requires reliability, monitoring, and cost awareness.",
      
      "⚡ Streaming Improves UX\nStreaming responses make your app feel fast. But partial responses must be handled carefully—broken streams destroy user trust instantly.",
      
      "🔁 Retries & Failure Handling\nFailures will happen. Always implement retries with exponential backoff. More importantly, show users what’s happening instead of failing silently.",
      
      "💰 Cost नियंत्रण is Critical\nLLMs are powerful—but expensive. Track token usage per request. Without visibility, your costs can explode overnight.",
      
      "🧾 Prompt Versioning\nTreat prompts like code. Version them, track changes, and keep history. When something breaks, you’ll need to know why.",
      
      "📊 Observability Wins\nLog everything: inputs, outputs, latency, failures. Without observability, debugging AI systems becomes guesswork.",
      
      "🏁 Final Thought\nSmart AI systems are not just intelligent—they are reliable, observable, and cost-efficient.",
    ],
  },

  {
    slug: "typescript-advanced-types",
    title: "TypeScript Patterns for API-First Teams",
    excerpt:
      "Designing APIs first and implementing later is becoming the standard. TypeScript enhances this workflow with safety, clarity, and scalability across teams.",
    date: "Feb 14, 2026",
    readTime: "10 min read",
    category: "TypeScript",
    body: [
      "🚀 API-First is the New Default\nModern teams design APIs before writing implementation. This ensures alignment, reduces confusion, and speeds up development across frontend and backend.",
      
      "🧩 Contracts Define Everything\nYour API contract is your single source of truth. TypeScript allows you to represent it clearly, eliminating mismatches between systems.",
      
      "⚡ Type-Safe API Clients\nGenerics enable fully typed API calls. This removes guesswork and catches errors during development instead of production.",
      
      "🔄 Versioning Done Right\nAPIs evolve. Instead of breaking clients, extend types and introduce versions. Stability builds trust.",
      
      "📚 Self-Updating Documentation\nGenerate docs from TypeScript types. This ensures documentation never goes outdated and onboarding becomes easier.",
      
      "🧪 Strong Testing Culture\nTypes catch structure issues. Tests catch behavior issues. Together, they create reliable APIs.",
      
      "📊 Monitoring & Logging\nTyped logs and structured errors make debugging faster and systems more predictable.",
      
      "🛑 Better Error Handling\nDefine clear error shapes so clients can respond intelligently instead of guessing.",
      
      "🏁 Final Thought\nTypeScript turns APIs into reliable, scalable systems—not just endpoints.",
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
      "🎨 Why Most Design Systems Fail\nMany design systems look great on paper but fail in real usage. The problem is not design—it’s adoption and maintenance.",
      
      "🧱 Design Tokens = Foundation\nTokens represent intent, not just style. They make it easy to maintain consistency across large applications.",
      
      "♿ Accessibility First\nAccessibility should be built into components—not added later. This ensures inclusivity and avoids costly fixes.",
      
      "📚 Documentation Drives Adoption\nIf developers don’t understand how to use your system, they won’t use it. Good documentation is as important as good design.",
      
      "⚖️ Balance Simplicity & Power\nOver-engineered systems fail. Keep it simple, flexible, and easy to adopt.",
      
      "🏁 Final Thought\nA design system succeeds when teams actually use it—not when it looks perfect.",
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
      "⚙️ Performance is a Continuous Process\nDatabase performance is never 'done'. Real traffic reveals real problems—not test data.",
      
      "📌 Indexing Strategy Matters\nIndexes are powerful but must match real query patterns. Wrong indexes can hurt performance.",
      
      "🔍 Query Plan Analysis\nRegularly analyze query plans to identify bottlenecks. Automate this for critical endpoints.",
      
      "🔗 Connection Pooling\nPoor connection management can crash systems faster than slow queries. Always monitor pool usage.",
      
      "📊 Measure Everything\nWithout metrics, performance tuning becomes guesswork.",
      
      "🏁 Final Thought\nGood database performance comes from observation, not assumptions.",
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
      "🧠 Seniority is Not Just Code\nBeing a senior engineer is less about coding and more about thinking, communication, and decision-making.",
      
      "✍️ Writing > Talking\nClear written communication solves problems faster than long meetings.",
      
      "📌 Real Ownership\nOwnership means identifying risks early and proposing solutions—not just completing tasks.",
      
      "⚖️ Trade-offs Are Everywhere\nThere is no perfect solution. Learn to balance speed, quality, and complexity.",
      
      "🤝 Mentorship Matters\nHelping others grow makes the entire team stronger—and improves your own skills.",
      
      "📚 Living Documentation\nStatic docs die quickly. Keep documentation updated and tied to real systems.",
      
      "🏁 Final Thought\nGreat engineers don’t just build systems—they improve teams.",
    ],
  },
];