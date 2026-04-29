// # app/not-found.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative min-h-[calc(100vh-12rem)] flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-indigo-500/5 via-transparent to-purple-500/5" />
      <div className="pointer-events-none absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-indigo-500/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-lg text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Error 404
        </p>
        <h1 className="mb-4 text-7xl font-bold tracking-tight sm:text-8xl">
          <span className="text-gradient">404</span>
        </h1>
        <h2 className="mb-3 text-xl font-semibold tracking-tight sm:text-2xl">
          Page not found
        </h2>
        <p className="mb-10 text-muted-foreground leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Try
          heading home or pick another section from the navigation.
        </p>

        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 sm:w-auto"
            >
              <Home className="h-4 w-4" />
              Back to home
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border/80 bg-muted/40 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-muted/70 sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              View projects
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
