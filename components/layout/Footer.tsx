// # components/layout/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  ArrowUpRight,
  Heart,
  MapPin,
  Phone,
} from "lucide-react";

const footerLinks = {
  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Services", href: "/services" },
    { label: "Skills", href: "/skills" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Website Development", href: "/services/website-development" },
    { label: "SaaS Development", href: "/services/saas-development" },
    { label: "AI Integration", href: "/services/ai-integration" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "UI/UX Design", href: "/services/ui-ux-design" },
    { label: "API Development", href: "/services/api-development" },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/samisherzaman779", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sami-sherzaman", icon: Linkedin },
    { label: "X", href: "https://x.com/SamiSherzaman", icon: Twitter },
    { label: "Email", href: "mailto:samisherzaman779@gmail.com", icon: Mail },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-muted/30">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <span className="text-white font-bold text-sm">SS</span>
                </div>
                <div>
                  <span className="text-lg font-bold tracking-tight block">
                    Sami Sherzaman
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    Full-Stack & AI Developer
                  </span>
                </div>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Building premium digital experiences with cutting-edge technology.
              Specializing in Next.js, React, TypeScript, and AI integration for
              high-end clients worldwide.
            </p>
            <div className="flex items-center gap-4">
              {footerLinks.social.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                    aria-label={item.label}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:samisherzaman779@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                samisherzaman779@gmail.com
              </a>
              <a
                href="tel:+923066039949"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                +92 306 6039949
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Pakistan
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {new Date().getFullYear()} Sami Sherzaman. Crafted with
            <Heart className="w-3 h-3 text-red-500 fill-red-500 mx-1" />
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}