// # components/seo/BlogPostingJsonLd.tsx
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type Props = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  datePublishedIso?: string;
};

export function BlogPostingJsonLd({
  slug,
  title,
  excerpt,
  category,
  datePublishedIso,
}: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    ...(datePublishedIso
      ? {
          datePublished: datePublishedIso,
          dateModified: datePublishedIso,
        }
      : {}),
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
    articleSection: category,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${slug}`),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
