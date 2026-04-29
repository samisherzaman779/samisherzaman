// # lib/mail.ts — SMTP transport for contact form (nodemailer)
import nodemailer from "nodemailer";

function requiredEnv(name: string): string {
  const v = process.env[name];
  if (!v?.trim()) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return v.trim();
}

export function getMailer() {
  const host = requiredEnv("SMTP_HOST");
  const port = Number(process.env.SMTP_PORT ?? "587");
  const secure = process.env.SMTP_SECURE === "true";

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASSWORD"),
    },
  });
}

/** Address shown as From — must be allowed by your SMTP provider (often same as SMTP_USER). */
export function getFromAddress(): string {
  return (
    process.env.SMTP_FROM?.trim() ||
    `"Portfolio Contact" <${process.env.SMTP_USER}>`
  );
}

/** Inbox that receives contact submissions */
export function getContactTo(): string {
  const to = process.env.CONTACT_EMAIL?.trim() || process.env.SMTP_USER?.trim();
  if (!to) throw new Error("Set CONTACT_EMAIL or SMTP_USER");
  return to;
}

export function isSmtpConfigured(): boolean {
  return Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASSWORD?.trim()
  );
}
