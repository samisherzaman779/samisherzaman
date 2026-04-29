//  # app/skills/page.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Code2,
  Server,
  Database,
  Cloud,
  Wrench,
  Brain,
  Layout,
  Terminal,
  GitBranch,
  Figma,
  Cpu,
  Shield,
} from "lucide-react";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    icon: Layout,
    skills: [
      { name: "React / Next.js", level: 98, color: "from-cyan-500 to-blue-500" },
      { name: "TypeScript", level: 95, color: "from-blue-500 to-indigo-500" },
      { name: "Tailwind CSS", level: 96, color: "from-sky-500 to-cyan-500" },
      { name: "Framer Motion", level: 92, color: "from-pink-500 to-rose-500" },
      { name: "Three.js / R3F", level: 85, color: "from-violet-500 to-purple-500" },
      { name: "Vue.js", level: 80, color: "from-emerald-500 to-green-500" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 94, color: "from-green-500 to-emerald-500" },
      { name: "Python / FastAPI", level: 90, color: "from-yellow-500 to-amber-500" },
      { name: "GraphQL", level: 88, color: "from-pink-500 to-fuchsia-500" },
      { name: "REST API Design", level: 95, color: "from-blue-500 to-indigo-500" },
      { name: "WebSockets", level: 87, color: "from-cyan-500 to-teal-500" },
      { name: "Rust", level: 75, color: "from-orange-500 to-red-500" },
    ],
  },
  {
    id: "ai",
    label: "AI / ML",
    icon: Brain,
    skills: [
      { name: "OpenAI / GPT-4", level: 93, color: "from-emerald-500 to-green-500" },
      { name: "LangChain", level: 90, color: "from-violet-500 to-purple-500" },
      { name: "Vector Databases", level: 85, color: "from-blue-500 to-cyan-500" },
      { name: "TensorFlow / PyTorch", level: 78, color: "from-orange-500 to-amber-500" },
      { name: "NLP & LLMs", level: 88, color: "from-pink-500 to-rose-500" },
      { name: "Computer Vision", level: 72, color: "from-indigo-500 to-blue-500" },
    ],
  },
  {
    id: "database",
    label: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: 92, color: "from-blue-500 to-indigo-500" },
      { name: "MongoDB", level: 88, color: "from-green-500 to-emerald-500" },
      { name: "Redis", level: 90, color: "from-red-500 to-orange-500" },
      { name: "Prisma ORM", level: 93, color: "from-cyan-500 to-sky-500" },
      { name: "ClickHouse", level: 80, color: "from-yellow-500 to-amber-500" },
      { name: "Supabase", level: 87, color: "from-emerald-500 to-teal-500" },
    ],
  },
  {
    id: "devops",
    label: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "AWS", level: 90, color: "from-orange-500 to-amber-500" },
      { name: "Docker", level: 92, color: "from-blue-500 to-cyan-500" },
      { name: "Kubernetes", level: 82, color: "from-blue-500 to-indigo-500" },
      { name: "CI/CD (GitHub Actions)", level: 94, color: "from-gray-500 to-slate-500" },
      { name: "Vercel / Netlify", level: 96, color: "from-slate-500 to-zinc-500" },
      { name: "Terraform", level: 80, color: "from-purple-500 to-violet-500" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Others",
    icon: Wrench,
    skills: [
      { name: "Git / GitHub", level: 96, color: "from-orange-500 to-red-500" },
      { name: "Figma", level: 88, color: "from-pink-500 to-rose-500" },
      { name: "Testing (Jest/Vitest)", level: 92, color: "from-green-500 to-emerald-500" },
      { name: "Storybook", level: 90, color: "from-pink-500 to-fuchsia-500" },
      { name: "Linux / Bash", level: 88, color: "from-slate-500 to-gray-500" },
      { name: "Agile / Scrum", level: 94, color: "from-blue-500 to-indigo-500" },
    ],
  },
];

const techStack = [
  { name: "Next.js", category: "Framework" },
  { name: "React", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Runtime" },
  { name: "Python", category: "Language" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "GraphQL", category: "API" },
  { name: "REST", category: "API" },
  { name: "Docker", category: "DevOps" },
  { name: "AWS", category: "Cloud" },
  { name: "Tailwind", category: "Styling" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Three.js", category: "3D" },
  { name: "OpenAI", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "Prisma", category: "ORM" },
  { name: "GitHub Actions", category: "CI/CD" },
  { name: "Figma", category: "Design" },
  { name: "Vercel", category: "Hosting" },
  { name: "Supabase", category: "Backend" },
  { name: "WebSockets", category: "Real-time" },
  { name: "Jest", category: "Testing" },
];

function SkillBar({ skill, index }: { skill: typeof skillCategories[0]["skills"][0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ width: `${skill.level}%` });
    }
  }, [isInView, controls, skill.level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
          className={cn("h-full rounded-full bg-gradient-to-r", skill.color)}
        />
      </div>
    </div>
  );
}

function OrbitSkills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const orbitRef = useRef(null);
  const isInView = useInView(orbitRef, { once: true });

  const orbit1 = techStack.slice(0, 8);
  const orbit2 = techStack.slice(8, 16);
  const orbit3 = techStack.slice(16, 24);

  return (
    <div ref={orbitRef} className="relative w-full max-w-lg mx-auto aspect-square">
      {/* Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-xl shadow-indigo-500/30 z-10">
        <Code2 className="w-8 h-8 text-white" />
      </div>

      {/* Orbit 1 */}
      <motion.div
        animate={isInView ? { rotate: 360 } : {}}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-border/30"
      >
        {orbit1.map((tech, i) => {
          const angle = (i / orbit1.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 50 + 50;
          const y = Math.sin(rad) * 50 + 50;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1 }}
              className="absolute w-10 h-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className={cn(
                  "w-full h-full rounded-xl bg-card border border-border/50 flex items-center justify-center text-[8px] font-bold cursor-pointer hover:border-primary hover:shadow-lg transition-all",
                  hoveredSkill === tech.name && "border-primary shadow-lg scale-110"
                )}
                onMouseEnter={() => setHoveredSkill(tech.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {tech.name.slice(0, 3)}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Orbit 2 */}
      <motion.div
        animate={isInView ? { rotate: -360 } : {}}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute inset-20 rounded-full border border-border/20"
      >
        {orbit2.map((tech, i) => {
          const angle = (i / orbit2.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 50 + 50;
          const y = Math.sin(rad) * 50 + 50;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="absolute w-9 h-9 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className={cn(
                  "w-full h-full rounded-lg bg-card border border-border/50 flex items-center justify-center text-[7px] font-bold cursor-pointer hover:border-primary hover:shadow-lg transition-all",
                  hoveredSkill === tech.name && "border-primary shadow-lg scale-110"
                )}
                onMouseEnter={() => setHoveredSkill(tech.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {tech.name.slice(0, 3)}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Orbit 3 */}
      <motion.div
        animate={isInView ? { rotate: 360 } : {}}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-32 rounded-full border border-border/10"
      >
        {orbit3.map((tech, i) => {
          const angle = (i / orbit3.length) * 360;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * 50 + 50;
          const y = Math.sin(rad) * 50 + 50;
          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + i * 0.1 }}
              className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <div
                className={cn(
                  "w-full h-full rounded-md bg-card border border-border/50 flex items-center justify-center text-[6px] font-bold cursor-pointer hover:border-primary hover:shadow-lg transition-all",
                  hoveredSkill === tech.name && "border-primary shadow-lg scale-110"
                )}
                onMouseEnter={() => setHoveredSkill(tech.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                {tech.name.slice(0, 3)}
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Tooltip */}
      {hoveredSkill && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg glass text-xs font-medium whitespace-nowrap"
        >
          {hoveredSkill}
        </motion.div>
      )}
    </div>
  );
}

export default function SkillsPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium text-indigo-500 uppercase tracking-wider mb-4 block"
          >
            Expertise
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Skills & <span className="text-gradient">Technologies</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            A comprehensive toolkit built over 3 years of continuous learning
            and real-world application.
          </motion.p>
        </div>

        {/* Orbit Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <OrbitSkills />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: catIndex * 0.1 }}
                className="p-6 lg:p-8 rounded-2xl bg-card border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold">{category.label}</h2>
                </div>
                <div className="space-y-5">
                  {category.skills.map((skill, index) => (
                    <SkillBar key={skill.name} skill={skill} index={index} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Complete <span className="text-gradient">Tech Stack</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technologies I use daily to build world-class applications
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="group p-4 rounded-xl bg-card border border-border/50 hover:border-border hover:shadow-lg transition-all text-center"
              >
                <div className="text-sm font-semibold mb-1 group-hover:text-gradient transition-all">
                  {tech.name}
                </div>
                <div className="text-xs text-muted-foreground">{tech.category}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}