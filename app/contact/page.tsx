// # app/contact/page.tsx
"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Clock,
  ArrowUpRight,
  Loader2,
  AlertCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "samisherzaman779@gmail.com",
    href: "mailto:samisherzaman779@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 306 6039949",
    href: "tel:+923066039949",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pakistan",
    href: "#",
  },
  {
    icon: Clock,
    label: "Availability",
    value: "Mon — Fri, 9AM — 6PM PKT",
    href: "#",
  },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/samisherzaman779" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/sami-sherzaman" },
  { icon: Twitter, label: "X", href: "https://x.com/SamiSherzaman" },
];

export default function ContactPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");
    setErrorMessage(null);

    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
      };

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(
          data.error || `Something went wrong (${res.status}). Try again later.`
        );
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error — check your connection and try again.");
    }
  }

  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            className="text-sm font-medium text-indigo-500 uppercase tracking-wider mb-4 block"
          >
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
          >
            Let&apos;s build something{" "}
            <span className="text-gradient">extraordinary</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Tell me about your project, timeline, and goals. I typically reply within
            one business day.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="rounded-2xl border border-border/60 bg-card p-6 space-y-6">
              <h2 className="text-lg font-semibold flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Direct lines
              </h2>
              <ul className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  const inner = (
                    <>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted">
                        <Icon className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wide text-muted-foreground">
                          {item.label}
                        </div>
                        <div className="font-medium">{item.value}</div>
                      </div>
                    </>
                  );
                  return (
                    <li key={item.label}>
                      {item.href.startsWith("#") ? (
                        <div className="flex items-start gap-4">{inner}</div>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-start gap-4 rounded-xl p-2 -m-2 hover:bg-muted/60 transition-colors"
                        >
                          {inner}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-4">Social</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/60 bg-muted/40 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      aria-label={s.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              View recent work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about scope, stack preferences, and timeline…"
                  className="w-full resize-y rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring min-h-[140px]"
                />
              </div>
              <motion.button
                type="submit"
                disabled={status === "loading"}
                whileHover={status === "loading" ? undefined : { scale: 1.02 }}
                whileTap={status === "loading" ? undefined : { scale: 0.98 }}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:pointer-events-none"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send message
                  </>
                )}
              </motion.button>
              {status === "success" && (
                <p className="text-sm text-green-600 dark:text-green-400" role="status">
                  Message sent — I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && errorMessage && (
                <p
                  className="text-sm text-destructive flex items-start gap-2"
                  role="alert"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  {errorMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
