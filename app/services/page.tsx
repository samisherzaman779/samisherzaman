//  # app/services/page.tsx
"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Check,
  ArrowRight,
  MessageSquare,
  Lightbulb,
  Rocket,
  Wrench,
  Sparkles,
} from "lucide-react";
import type { PortfolioService } from "@/lib/services-detail";
import { portfolioServices as services } from "@/lib/services-detail";

const process = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Discovery",
    description: "Deep dive into your vision, goals, and requirements. We define scope, timeline, and success metrics together.",
  },
  {
    icon: Lightbulb,
    step: "02",
    title: "Strategy",
    description: "Technical architecture, tech stack selection, and detailed project roadmap with milestones.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description: "Agile development with weekly demos, continuous feedback, and transparent progress tracking.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Testing",
    description: "Rigorous QA, performance testing, security audits, and cross-browser compatibility checks.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Launch",
    description: "Production deployment, monitoring setup, documentation, and post-launch support.",
  },
  {
    icon: Sparkles,
    step: "06",
    title: "Support",
    description: "Ongoing maintenance, feature iterations, and performance optimization as you grow.",
  },
];

const whyChoose = [
  {
    title: "Technical Excellence",
    description: "3 years of experience building production-grade applications used by millions.",
  },
  {
    title: "Fast Delivery",
    description: "Agile methodology with weekly deliverables and transparent communication.",
  },
  {
    title: "Premium Quality",
    description: "Every line of code is reviewed, tested, and optimized for performance.",
  },
  {
    title: "Full Ownership",
    description: "You own 100% of the code, documentation, and intellectual property.",
  },
  {
    title: "Scalable Architecture",
    description: "Built to grow with your business, handling traffic spikes gracefully.",
  },
  {
    title: "Post-Launch Support",
    description: "30 days of free support after launch to ensure smooth operations.",
  },
];

function ServiceCard({ service, index }: { service: PortfolioService; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="relative p-6 lg:p-8 rounded-2xl bg-card border border-border/50 hover:border-border transition-all duration-300 h-full flex flex-col">
        <Link href={`/services/${service.slug}`} className="inline-flex">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
        </Link>

        <Link href={`/services/${service.slug}`}>
          <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">{service.title}</h3>
        </Link>
        <p className="text-sm text-muted-foreground mb-6 flex-grow">{service.description}</p>

        <div className="space-y-3 mb-6">
          {service.features.map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-sm">
              <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border/50 mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="text-xs text-muted-foreground">Starting at</div>
              <div className="text-lg font-bold">{service.price}</div>
            </div>
            <div className="text-right">
              <div className="text-xs text-muted-foreground">Timeline</div>
              <div className="text-sm font-medium">{service.timeline}</div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Link
              href={`/services/${service.slug}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-border bg-transparent text-sm font-medium hover:bg-muted transition-colors"
            >
              View details
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="/contact"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
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
            Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            What I <span className="text-gradient">Offer</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Premium development services tailored to elevate your digital presence
            and drive measurable business growth.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {services.map((service, index) => (
            <ServiceCard key={service.slug} service={service} index={index} />
          ))}
        </div>

        {/* Process Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              My <span className="text-gradient">Process</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures every project is delivered on time,
              on budget, and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-2xl bg-card border border-border/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-3xl font-bold text-muted-foreground/30">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Why Choose Me */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Why <span className="text-gradient">Choose Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              What sets me apart from other developers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-muted/50 border border-border/30"
              >
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}