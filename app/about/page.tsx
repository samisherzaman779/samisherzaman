// # app/about/page.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Briefcase,
  GraduationCap,
  Award,
  MapPin,
  Calendar,
  ChevronRight,
  Code2,
  Terminal,
  Database,
  Cloud,
  Palette,
  Cpu,
} from "lucide-react";

const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "TechCorp International",
    location: "San Francisco, CA",
    period: "2022 — Present",
    description: "Leading development of enterprise SaaS platforms serving 500K+ users. Architecting microservices and AI integrations.",
    achievements: [
      "Reduced application load time by 65% through optimization",
      "Led team of 8 developers across 3 time zones",
      "Implemented AI-powered features increasing user engagement by 40%",
    ],
    technologies: ["Next.js", "TypeScript", "Python", "AWS", "PostgreSQL"],
  },
  {
    role: "Full-Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    period: "2020 — 2022",
    description: "Built and scaled MVP to production-ready platform. Handled everything from database design to frontend architecture.",
    achievements: [
      "Built platform from 0 to 100K users in 18 months",
      "Implemented real-time features using WebSockets",
      "Designed and deployed CI/CD pipeline reducing deployment time by 80%",
    ],
    technologies: ["React", "Node.js", "MongoDB", "Docker", "Redis"],
  },
  {
    role: "Frontend Developer",
    company: "Digital Agency Pro",
    location: "New York, NY",
    period: "2018 — 2020",
    description: "Developed high-performance websites and web applications for Fortune 500 clients.",
    achievements: [
      "Delivered 30+ projects with 100% client satisfaction",
      "Introduced component library reducing development time by 50%",
      "Mentored 4 junior developers",
    ],
    technologies: ["React", "Vue.js", "Sass", "Webpack", "Figma"],
  },
];

const education = [
  {
    degree: "M.S. Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2016 — 2018",
    description: "Specialized in Artificial Intelligence and Distributed Systems",
  },
  {
    degree: "B.S. Software Engineering",
    institution: "MIT",
    location: "Cambridge, MA",
    period: "2012 — 2016",
    description: "Dean's List, Graduated with Honors",
  },
];

const certifications = [
  { name: "AWS Solutions Architect Professional", issuer: "Amazon Web Services", date: "2023" },
  { name: "Google Cloud Professional Developer", issuer: "Google", date: "2023" },
  { name: "Meta Frontend Developer Professional", issuer: "Meta", date: "2022" },
  { name: "OpenAI API Developer", issuer: "OpenAI", date: "2024" },
];

const philosophies = [
  {
    icon: Code2,
    title: "Clean Code First",
    description: "I believe maintainable, well-documented code is the foundation of every successful project.",
  },
  {
    icon: Terminal,
    title: "Performance Matters",
    description: "Every millisecond counts. I optimize for speed without compromising on quality or features.",
  },
  {
    icon: Database,
    title: "Data-Driven Decisions",
    description: "I leverage analytics and user feedback to make informed development choices.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description: "Building scalable, resilient systems designed for the modern cloud infrastructure.",
  },
  {
    icon: Palette,
    title: "Design Thinking",
    description: "Great software combines technical excellence with intuitive, beautiful user experiences.",
  },
  {
    icon: Cpu,
    title: "AI-First Approach",
    description: "Integrating intelligent systems to create smarter, more adaptive applications.",
  },
];

export default function AboutPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="max-w-4xl mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium text-indigo-500 uppercase tracking-wider mb-4 block"
          >
            About Me
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            The Mind Behind the <span className="text-gradient">Code</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            I'm Sami Sherzaman, a passionate full-stack developer and AI specialist with 3 years of experience 
            building digital products that make a difference. I combine technical expertise with creative problem-solving 
            to deliver exceptional results.
          </motion.p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted relative shadow-xl ring-1 ring-border/60">
              <Image
                src="/images/profile_image/hero-image.png"
                alt="Sami Sherzaman — portrait"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -right-6 p-4 rounded-xl glass shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Available for work</div>
                  <div className="text-xs text-muted-foreground">Open to new projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold">My Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey into software development began at age 12 when I built my first website. 
                What started as curiosity quickly evolved into a lifelong passion for creating digital experiences.
              </p>
              <p>
                Over the past 3 years, I've had the privilege of working with startups, agencies, and 
                enterprise clients across the globe. From building e-commerce platforms handling millions 
                in transactions to developing AI systems that automate complex workflows, every project 
                has been an opportunity to push boundaries.
              </p>
              <p>
                Today, I specialize in the intersection of web development and artificial intelligence, 
                helping businesses leverage cutting-edge technology to solve real-world problems.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-4">
              <Badge variant="secondary" className="px-3 py-1">Problem Solver</Badge>
              <Badge variant="secondary" className="px-3 py-1">Team Leader</Badge>
              <Badge variant="secondary" className="px-3 py-1">Continuous Learner</Badge>
              <Badge variant="secondary" className="px-3 py-1">Detail Oriented</Badge>
            </div>
          </motion.div>
        </div>

        {/* Developer Philosophy */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Developer <span className="text-gradient">Philosophy</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Principles that guide my approach to every project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {philosophies.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border/50 hover:border-border transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Professional <span className="text-gradient">Experience</span>
            </h2>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-border" />
                <div className="hidden md:block absolute left-0 top-2 w-2 h-2 rounded-full bg-primary -translate-x-[3px]" />
                
                <div className="md:pl-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">@ {exp.company}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{exp.description}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <ChevronRight className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Education</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{edu.degree}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              <span className="text-gradient">Certifications</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-xl bg-card border border-border/50 hover:border-border transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold mb-1">{cert.name}</h3>
                <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}