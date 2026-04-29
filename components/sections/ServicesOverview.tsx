// # components/sections/ServicesOverview.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Cloud,
  Brain,
  Code2,
  Palette,
  Zap,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom, high-performance websites built with Next.js, React, and modern web technologies.",
    features: ["SEO Optimized", "Responsive Design", "Performance Tuned"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    description: "End-to-end SaaS platforms with authentication, billing, and scalable architecture.",
    features: ["Multi-tenant", "Stripe Integration", "Real-time Updates"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Intelligent systems powered by OpenAI, LangChain, and custom ML models.",
    features: ["LLM Integration", "Automation", "Data Analysis"],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description: "Bespoke software solutions tailored to your unique business requirements.",
    features: ["API Development", "Microservices", "Cloud Native"],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Stunning, user-centered interfaces that convert visitors into customers.",
    features: ["Design Systems", "Prototyping", "User Research"],
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Zap,
    title: "Automation Systems",
    description: "Streamline workflows with intelligent automation and integration solutions.",
    features: ["CI/CD Pipelines", "DevOps", "Monitoring"],
    color: "from-emerald-500 to-teal-500",
  },
];

export function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium text-indigo-500 uppercase tracking-wider mb-4 block"
          >
            What I Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Premium <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Comprehensive development services designed to elevate your digital
            presence and drive business growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative p-6 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-0.5 rounded-md bg-muted text-xs text-muted-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all"
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}