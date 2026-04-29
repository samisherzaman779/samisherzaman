// # components/seo/SiteJsonLd.tsx
import { absoluteUrl, siteConfig } from "@/lib/site-config";

/** Person + WebSite schema.org JSON-LD for sitewide discovery (homepage inherits layout). */
export function SiteJsonLd() {
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.shortName,
    description: siteConfig.description,
    url: absoluteUrl("/"),
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
  };

  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: absoluteUrl("/"),
    jobTitle: "Full-Stack & AI Developer",
    sameAs: [...siteConfig.sameAs],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Artificial Intelligence",
      "SaaS",
      "API Development",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
    </>
  );
}
