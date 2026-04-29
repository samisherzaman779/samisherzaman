// # components/services/ServiceDetailView.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getRelatedServices, getServiceBySlug } from "@/lib/services-detail";

interface ServiceDetailProps {
  slug: string;
}

export function ServiceDetailView({ slug }: ServiceDetailProps) {
  const service = getServiceBySlug(slug);
  if (!service) return null;

  const Icon = service.icon;
  const related = getRelatedServices(service.slug);

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to services
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="text-sm font-medium text-indigo-500 uppercase tracking-wider mb-4 block">
              Service
            </span>
            <div
              className={`inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} items-center justify-center mb-8 shadow-lg mx-auto`}
            >
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground">{service.description}</p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 rounded-2xl border border-border/50 bg-muted/30 px-6 py-5">
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Starting at
                </div>
                <div className="text-xl font-bold">{service.price}</div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" aria-hidden />
              <div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  Typical timeline
                </div>
                <div className="text-lg font-semibold">{service.timeline}</div>
              </div>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-14 space-y-4 text-muted-foreground max-w-none"
          >
            {service.detailIntro.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="mb-14"
          >
            <h2 className="text-2xl font-bold mb-6">What you get</h2>
            <ul className="space-y-3">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.2 }}
            className="mb-16 rounded-2xl border border-border/50 bg-card/50 p-8"
          >
            <h2 className="text-xl font-bold mb-4">Engagement outcomes</h2>
            <ul className="space-y-3">
              {service.outcomes.map((line) => (
                <li key={line} className="flex gap-2 text-sm text-muted-foreground">
                  <span className="text-primary font-bold">—</span>
                  {line}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="rounded-2xl bg-gradient-to-br from-indigo-500/15 via-purple-500/10 to-pink-500/15 border border-border/40 p-8 text-center mb-20"
          >
            <h3 className="text-xl font-bold mb-2">Ready to start?</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Tell me about your goals and timeline—I&apos;ll reply with next steps.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </article>

        {related.length > 0 && (
          <section className="max-w-4xl mx-auto border-t border-border/50 pt-16">
            <h2 className="text-lg font-semibold uppercase tracking-wider text-muted-foreground mb-8 text-center">
              Related services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((r, i) => {
                const RIcon = r.icon;
                return (
                  <motion.div
                    key={r.slug}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    <Link
                      href={`/services/${r.slug}`}
                      className="group block h-full rounded-xl border border-border/50 bg-muted/20 p-5 hover:border-border hover:bg-muted/40 transition-colors"
                    >
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.color} flex items-center justify-center mb-3`}
                      >
                        <RIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="font-semibold text-sm group-hover:text-primary transition-colors flex items-center gap-1">
                        {r.title}
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2">
                        {r.description}
                      </p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
