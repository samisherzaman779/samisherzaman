// # app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of Sami Sherzaman's portfolio website and engagement inquiries.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-28 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <p className="text-sm text-muted-foreground mb-2">
          Last updated: April 29, 2026
        </p>
        <h1 className="text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Agreement</h2>
            <p>
              By accessing this website you agree to these terms. If you do not agree, please do not
              use the site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Use of the site</h2>
            <p>
              Content on this portfolio is provided for informational purposes. You may browse and
              share links to public pages in line with fair use. You agree not to misuse forms,
              APIs, or automated tools to harass, overload, or scrape the site beyond reasonable use.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Intellectual property</h2>
            <p>
              Text, visuals, logos, and code samples displayed here remain owned by their
              respective licensors unless stated otherwise. Client names or trademarks shown in case
              studies belong to those organizations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Project inquiries</h2>
            <p>
              Submitting a contact form does not create a binding contract. Formal engagements
              require a separate written agreement describing scope, fees, and deliverables.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Disclaimer</h2>
            <p>
              The site is provided &quot;as is&quot; without warranties of any kind. Availability,
              accuracy of descriptions, and links to third-party resources are not guaranteed.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, liability arising from use of this website is
              limited. Nothing here excludes liability that cannot legally be excluded.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Governing law</h2>
            <p>
              These terms are governed by applicable laws of Pakistan where compatible with mandatory
              consumer protections in your jurisdiction.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p>
              Questions about these terms:{" "}
              <a
                href="mailto:samisherzaman779@gmail.com"
                className="text-primary hover:underline"
              >
                samisherzaman779@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
