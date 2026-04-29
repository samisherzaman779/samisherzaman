// # app/blog/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/lib/blog-data";
import {
  ArrowUpRight,
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";

const featured = posts.find((p) => p.featured);
const rest = posts.filter((p) => !p.featured);

export default function BlogPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
          >
            <Sparkles className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-medium text-muted-foreground">
              Insights & tutorials
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-4"
          >
            The <span className="text-gradient">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Deep dives on shipping modern web products — Next.js, AI integration,
            architecture, and lessons learned along the way.
          </motion.p>
        </div>

        {/* Featured */}
        {featured && (
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="max-w-4xl mx-auto mb-14"
          >
            <Link
              href={`/blog/${featured.slug}`}
              className="group block relative rounded-2xl overflow-hidden border border-border/60 bg-card p-8 sm:p-10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <div className="relative flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <BookOpen className="h-7 w-7" />
                </div>
                <div className="flex-1 space-y-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary" className="uppercase tracking-wide">
                      Featured
                    </Badge>
                    <Badge variant="outline">{featured.category}</Badge>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight group-hover:text-gradient transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      {featured.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      {featured.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    Read article
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {rest.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 hover:border-primary/35 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                </div>
                <h2 className="text-xl font-bold tracking-tight mb-3 group-hover:text-gradient transition-colors flex-grow">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-border/50">
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary shrink-0 transition-colors" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Newsletter hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto mt-20 text-center rounded-2xl border border-dashed border-border/70 bg-muted/20 px-6 py-10"
        >
          <p className="text-sm text-muted-foreground mb-2">
            More articles coming soon — including guides on deployment, testing,
            and AI safety.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            Request a topic
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
