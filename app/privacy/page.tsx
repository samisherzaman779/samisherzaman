// # app/privacy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Sami Sherzaman collects, uses, and protects information when you use this portfolio website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-2">
          Last updated: April 29, 2026
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Overview</h2>
            <p>
              This policy describes how personal information is handled when you browse this
              portfolio, use the contact form, or interact with optional features such as the chat
              assistant. By using the site, you agree to this policy.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Contact details you voluntarily submit (for example name, email address, and
                message content).
              </li>
              <li>
                Technical data commonly logged by hosting and analytics providers (for example IP
                address, browser type, approximate region, and pages viewed).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
            <p>
              Information is used to respond to inquiries, improve site performance and security,
              and understand aggregate usage patterns. Messages sent through contact forms are used
              solely to communicate about your request unless you agree otherwise.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Cookies & analytics</h2>
            <p>
              This site may use cookies or similar technologies as implemented by the hosting or
              analytics tools configured for the deployment (for example Vercel Analytics). You can
              control cookies through your browser settings.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Third-party services</h2>
            <p>
              Email delivery, AI chat features, or other integrations rely on third-party APIs.
              Those providers process data according to their own privacy policies. Reasonable steps
              are taken to minimize shared data and use secure connections where available.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Retention</h2>
            <p>
              Contact messages are retained only as long as needed to handle your inquiry or meet
              legal obligations. Analytics data may be aggregated and retained according to the
              analytics provider defaults.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Your rights</h2>
            <p>
              Depending on where you live, you may have rights to access, correct, or delete your
              personal information. To exercise these rights or ask questions, email{" "}
              <a
                href="mailto:samisherzaman779@gmail.com"
                className="text-primary hover:underline"
              >
                samisherzaman779@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Changes</h2>
            <p>
              This policy may be updated occasionally. The &quot;Last updated&quot; date at the top
              reflects the latest revision.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
