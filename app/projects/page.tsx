// # app/projects/page.tsx
"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  ExternalLink,
  Filter,
  X,
  ChevronRight,
  Calendar,
  Clock,
  Users,
  Layers,
} from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  "All",
  "Frontend",
  "Full Stack",
  "AI / ML",
  "SaaS",
  "Web App",
  "Mobile",
];

const projects = [
  {
    id: "1",
    title: "NeonFlow AI",
    description: "AI-powered SaaS platform for automated workflow optimization and intelligent task management with natural language processing.",
    longDescription: "NeonFlow AI revolutionizes how teams manage workflows by leveraging cutting-edge AI models to automate task assignment, predict bottlenecks, and optimize resource allocation. The platform processes over 1M tasks daily with 99.9% uptime.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    category: ["AI / ML", "SaaS", "Full Stack"],
    tags: ["Next.js 14", "TypeScript", "OpenAI GPT-4", "LangChain", "Prisma", "PostgreSQL", "Redis", "Docker"],
    liveUrl: "https://neonflow.ai",
    githubUrl: "https://github.com/samisherzaman779/neonflow",
    featured: true,
    date: "2024",
    role: "Lead Developer & Architect",
    client: "Internal Product",
    duration: "8 months",
    challenges: [
      "Scaling AI inference to handle 10K+ concurrent users",
      "Implementing real-time collaboration with WebSockets",
      "Ensuring data privacy with enterprise-grade security",
    ],
    solutions: [
      "Built custom queue system with Redis for AI task processing",
      "Implemented optimistic UI updates for instant feedback",
      "Designed zero-trust architecture with end-to-end encryption",
    ],
    results: "300% increase in team productivity, 40% reduction in project delays",
  },
  {
    id: "2",
    title: "Quantum Commerce",
    description: "Headless e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout experience.",
    longDescription: "A next-generation headless commerce solution built for scale. Features include AI-driven product recommendations, real-time inventory sync across multiple warehouses, and a conversion-optimized checkout flow.",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    category: ["Full Stack", "SaaS", "Web App"],
    tags: ["Next.js", "Stripe", "Redis", "Tailwind CSS", "GraphQL", "PostgreSQL", "AWS Lambda"],
    liveUrl: "https://quantum-commerce.demo",
    githubUrl: "https://github.com/samisherzaman779/quantum-commerce",
    featured: true,
    date: "2024",
    role: "Full-Stack Developer",
    client: "RetailTech Inc.",
    duration: "6 months",
    challenges: [
      "Handling 50K+ concurrent users during flash sales",
      "Integrating with 15+ third-party logistics providers",
      "Building real-time inventory synchronization",
    ],
    solutions: [
      "Implemented edge caching with Cloudflare Workers",
      "Built unified API gateway for logistics integrations",
      "Created event-driven inventory system with Kafka",
    ],
    results: "$2.5M in sales in first month, 99.98% uptime",
  },
  {
    id: "3",
    title: "Nexus Analytics",
    description: "Real-time data visualization dashboard with predictive analytics, custom reporting, and collaborative insights.",
    longDescription: "Enterprise-grade analytics platform that transforms raw data into actionable insights. Features custom drag-and-drop report builder, predictive forecasting, and team collaboration tools.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: ["Full Stack", "Web App", "AI / ML"],
    tags: ["React", "D3.js", "Python", "FastAPI", "AWS", "TensorFlow", "ClickHouse"],
    liveUrl: "https://nexus-analytics.demo",
    githubUrl: "https://github.com/samisherzaman779/nexus-analytics",
    featured: true,
    date: "2023",
    role: "Lead Frontend & ML Engineer",
    client: "DataDrive Solutions",
    duration: "10 months",
    challenges: [
      "Rendering 1M+ data points in real-time",
      "Building predictive models with 95%+ accuracy",
      "Creating intuitive drag-and-drop report builder",
    ],
    solutions: [
      "Implemented virtualized rendering with canvas API",
      "Trained custom LSTM models for time-series forecasting",
      "Built modular component system with React DnD",
    ],
    results: "Reduced reporting time by 80%, identified $500K in cost savings",
  },
  {
    id: "4",
    title: "Aura Design System",
    description: "Comprehensive design system with 50+ components, theming engine, and accessibility-first approach.",
    longDescription: "A production-ready design system used across 12 products. Includes a fully documented component library, Figma plugin, and automated visual regression testing.",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=600&fit=crop",
    category: ["Frontend"],
    tags: ["React", "TypeScript", "Storybook", "Tailwind CSS", "Radix UI", "Vitest"],
    liveUrl: "https://aura-design.demo",
    githubUrl: "https://github.com/samisherzaman779/aura-design",
    featured: false,
    date: "2023",
    role: "Design System Lead",
    client: "TechCorp International",
    duration: "4 months",
    challenges: [
      "Ensuring WCAG 2.1 AA compliance across all components",
      "Creating flexible theming for white-label products",
      "Maintaining consistency across 12 different products",
    ],
    solutions: [
      "Built automated a11y testing with axe-core",
      "Designed CSS custom properties architecture",
      "Created shared tokens package with semantic naming",
    ],
    results: "60% faster development, 100% a11y compliance",
  },
  {
    id: "5",
    title: "SynthWave Mobile",
    description: "Cross-platform mobile app for music production with real-time audio processing and cloud sync.",
    longDescription: "A professional music production app for iOS and Android featuring real-time audio effects, MIDI support, and seamless cloud project synchronization.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
    category: ["Mobile", "Full Stack"],
    tags: ["React Native", "TypeScript", "Expo", "Firebase", "Web Audio API", "Node.js"],
    liveUrl: "https://synthwave.app",
    githubUrl: "https://github.com/samisherzaman779/synthwave",
    featured: false,
    date: "2023",
    role: "Mobile Lead Developer",
    client: "AudioLabs",
    duration: "12 months",
    challenges: [
      "Achieving sub-10ms audio latency on mobile devices",
      "Building offline-first architecture for studio use",
      "Implementing real-time collaboration on compositions",
    ],
    solutions: [
      "Optimized audio pipeline with native modules",
      "Designed CRDT-based sync for conflict resolution",
      "Built WebRTC mesh for low-latency collaboration",
    ],
    results: "50K+ downloads, 4.8★ rating, featured on App Store",
  },
  {
    id: "6",
    title: "VaultSecure",
    description: "Enterprise password manager with zero-knowledge architecture, biometric auth, and team sharing.",
    longDescription: "Bank-grade security password manager for enterprise teams. Features zero-knowledge encryption, biometric authentication, and granular access controls.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    category: ["Full Stack", "SaaS", "Web App"],
    tags: ["Next.js", "Rust", "WebAssembly", "PostgreSQL", "WebAuthn", "AES-256"],
    liveUrl: "https://vaultsecure.io",
    githubUrl: "https://github.com/samisherzaman779/vaultsecure",
    featured: false,
    date: "2024",
    role: "Security Architect & Developer",
    client: "SecureTech",
    duration: "7 months",
    challenges: [
      "Implementing zero-knowledge architecture in browser",
      "Passing SOC 2 Type II audit requirements",
      "Supporting WebAuthn across all major browsers",
    ],
    solutions: [
      "Built encryption engine in Rust compiled to WASM",
      "Designed comprehensive audit logging system",
      "Created fallback auth with TOTP and recovery codes",
    ],
    results: "SOC 2 certified, 10K+ enterprise users, zero security incidents",
  },
];

function ProjectModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative aspect-video">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>

        <div className="p-6 lg:p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map((cat) => (
              <Badge key={cat} variant="secondary">{cat}</Badge>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
          <p className="text-muted-foreground mb-6">{project.longDescription}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="p-3 rounded-lg bg-muted">
              <Calendar className="w-4 h-4 text-muted-foreground mb-1" />
              <div className="text-xs text-muted-foreground">Year</div>
              <div className="text-sm font-semibold">{project.date}</div>
            </div>
            <div className="p-3 rounded-lg bg-muted">
              <Users className="w-4 h-4 text-muted-foreground mb-1" />
              <div className="text-xs text-muted-foreground">Role</div>
              <div className="text-sm font-semibold">{project.role}</div>
            </div>
            <div className="p-3 rounded-lg bg-muted">
              <Layers className="w-4 h-4 text-muted-foreground mb-1" />
              <div className="text-xs text-muted-foreground">Client</div>
              <div className="text-sm font-semibold">{project.client}</div>
            </div>
            <div className="p-3 rounded-lg bg-muted">
              <Clock className="w-4 h-4 text-muted-foreground mb-1" />
              <div className="text-xs text-muted-foreground">Duration</div>
              <div className="text-sm font-semibold">{project.duration}</div>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Challenges</h3>
              <ul className="space-y-1">
                {project.challenges?.map((c, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Solutions</h3>
              <ul className="space-y-1">
                {project.solutions?.map((s, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            {project.results && (
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="font-semibold mb-1">Results</h3>
                <p className="text-sm text-muted-foreground">{project.results}</p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium text-indigo-500 uppercase tracking-wider mb-4 block"
          >
            Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Featured <span className="text-gradient">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A showcase of my best work across frontend, full-stack, AI, and SaaS development.
          </motion.p>
        </div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-2 mb-12 overflow-x-auto pb-2"
        >
          <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.category.slice(0, 2).map((cat) => (
                        <span key={cat} className="px-2.5 py-1 rounded-full glass text-xs font-medium">
                          {cat}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-gradient transition-all">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-0.5 rounded-md bg-muted text-[10px] font-medium text-muted-foreground">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}