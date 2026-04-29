// # components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
];

const CONTACT_HREF = "/contact";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const contactActive =
    pathname === CONTACT_HREF || pathname.startsWith(`${CONTACT_HREF}/`);

  return (
    <motion.header
      initial={false}
      className={cn(
        "sticky top-0 z-[55] w-full transition-[background,border-color,box-shadow] duration-300 ease-out",
        scrolled
          ? "border-b border-border/70 bg-background/88 backdrop-blur-xl shadow-[0_12px_40px_-16px_rgba(0,0,0,0.55)] supports-[backdrop-filter]:bg-background/75"
          : "border-b border-white/[0.06] bg-background/35 backdrop-blur-md supports-[backdrop-filter]:bg-background/25"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-[4.25rem] items-center justify-between gap-4 lg:gap-8">
          <Link
            href="/"
            className="group inline-flex shrink-0 items-center gap-3 outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
            onClick={() => setMobileOpen(false)}
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:scale-[1.03] group-hover:shadow-indigo-500/35">
              SS
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
            <div className="hidden min-[380px]:block leading-tight">
              <span className="block text-sm font-bold tracking-tight transition-colors group-hover:text-indigo-200">
                Sami Sherzaman
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Full-Stack & AI
              </span>
            </div>
          </Link>

          {/* Desktop — centered links */}
          <nav
            className="hidden lg:flex flex-1 items-center justify-center gap-1 xl:gap-1.5"
            aria-label="Main"
          >
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span className="relative z-[1]">{link.label}</span>
                  {active ? (
                    <>
                      <span
                        className="absolute inset-0 rounded-full bg-muted/55 ring-1 ring-border/60"
                        aria-hidden
                      />
                      <span
                        className="absolute bottom-1 left-1/2 h-[2px] w-[calc(100%-1rem)] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-[0_0_14px_rgba(139,92,246,0.35)]"
                        aria-hidden
                      />
                    </>
                  ) : (
                    <>
                      <span
                        className="absolute inset-0 rounded-full bg-muted/0 transition-colors duration-200 group-hover:bg-muted/45"
                        aria-hidden
                      />
                      <span
                        className="absolute bottom-1 left-1/2 h-[2px] w-0 max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500/90 via-purple-500/90 to-pink-500/90 opacity-0 transition-[width,opacity] duration-300 ease-out group-hover:w-full group-hover:opacity-100"
                        aria-hidden
                      />
                    </>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop — Contact CTA */}
          <div className="hidden lg:flex shrink-0 items-center">
            <Link
              href={CONTACT_HREF}
              className={cn(
                "group relative inline-flex items-center gap-1.5 overflow-hidden rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300",
                contactActive
                  ? "bg-muted text-foreground ring-2 ring-primary/40 shadow-inner"
                  : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/35 hover:brightness-110"
              )}
            >
              {!contactActive && (
                <span className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              )}
              <span className="relative">Contact</span>
              <ArrowUpRight className="relative h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Tablet: compact nav + CTA */}
          <nav
            className="hidden md:flex lg:hidden flex-1 flex-wrap items-center justify-center gap-x-1 gap-y-1 py-1"
            aria-label="Main tablet"
          >
            {navLinks.map((link) => {
              const active = isActive(pathname, link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "whitespace-nowrap rounded-lg px-2.5 py-2 text-xs font-medium transition-colors",
                    active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href={CONTACT_HREF}
              className={cn(
                "ml-1 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
                contactActive
                  ? "bg-muted text-foreground ring-1 ring-border"
                  : "bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:brightness-110"
              )}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-muted/30 text-foreground backdrop-blur-sm transition-colors hover:bg-muted/70"
              onClick={() => setMobileOpen((o) => !o)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-2xl md:hidden"
          >
            <nav
              className="container mx-auto flex flex-col gap-1 px-4 pb-5 pt-3"
              aria-label="Mobile"
            >
              {navLinks.map((link, i) => {
                const active = isActive(pathname, link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center rounded-xl px-4 py-3.5 text-sm font-medium transition-colors",
                        active
                          ? "bg-muted text-foreground ring-1 ring-border/80"
                          : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-3 pt-3 border-t border-border/50"
              >
                <Link
                  href={CONTACT_HREF}
                  className={cn(
                    "flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors",
                    contactActive
                      ? "bg-muted text-foreground ring-2 ring-primary/40"
                      : "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-lg shadow-indigo-500/25"
                  )}
                  onClick={() => setMobileOpen(false)}
                >
                  Let&apos;s talk
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
