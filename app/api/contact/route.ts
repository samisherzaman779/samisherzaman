// # app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import {
  getContactTo,
  getFromAddress,
  getMailer,
  isSmtpConfigured,
} from "@/lib/mail";

const MAX_SUBJECT = 200;
const MAX_MESSAGE = 10000;
const MAX_NAME = 120;

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  if (!isSmtpConfigured()) {
    return NextResponse.json(
      {
        error:
          "Email is not configured. Add SMTP_* variables to your environment (see .env.example).",
      },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const raw = body as Record<string, unknown>;
  const name = typeof raw.name === "string" ? raw.name.trim() : "";
  const email = typeof raw.email === "string" ? raw.email.trim() : "";
  const subject =
    typeof raw.subject === "string" ? raw.subject.trim() : "";
  const message =
    typeof raw.message === "string" ? raw.message.trim() : "";

  if (!name || name.length > MAX_NAME) {
    return NextResponse.json(
      { error: "Please enter a valid name." },
      { status: 400 }
    );
  }
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 }
    );
  }
  if (!message || message.length > MAX_MESSAGE) {
    return NextResponse.json(
      { error: "Please enter a message (max " + MAX_MESSAGE + " characters)." },
      { status: 400 }
    );
  }
  if (subject.length > MAX_SUBJECT) {
    return NextResponse.json(
      { error: "Subject is too long." },
      { status: 400 }
    );
  }

  const subjectLine = subject || "(No subject)";
  const text = [
    `New message from portfolio contact form`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subjectLine}`,
    ``,
    message,
  ].join("\n");

  const html = `
    <p><strong>New message</strong> from portfolio contact form</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}<br/>
    <strong>Email:</strong> ${escapeHtml(email)}<br/>
    <strong>Subject:</strong> ${escapeHtml(subjectLine)}</p>
    <hr/>
    <pre style="white-space:pre-wrap;font-family:inherit">${escapeHtml(message)}</pre>
  `;

  try {
    const transporter = getMailer();
    const to = getContactTo();
    const from = getFromAddress();

    await transporter.sendMail({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subjectLine}`,
      text,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact]", err);
    return NextResponse.json(
      {
        error:
          "Could not send email. Check SMTP settings and server logs.",
      },
      { status: 502 }
    );
  }
}
