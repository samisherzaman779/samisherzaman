// # app/blog/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/lib/blog-data";
import { blogDisplayDateToIso } from "@/lib/blog-seo";
import { BlogPostingJsonLd } from "@/components/seo/BlogPostingJsonLd";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };

  const iso = blogDisplayDateToIso(post.date);

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: "article",
      ...(iso ? { publishedTime: iso, modifiedTime: iso } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const iso = blogDisplayDateToIso(post.date);

  return (
    <>
      <BlogPostingJsonLd
        slug={post.slug}
        title={post.title}
        excerpt={post.excerpt}
        category={post.category}
        datePublishedIso={iso}
      />
      <article className="pt-28 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to blog
          </Link>

          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="outline">{post.category}</Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 leading-tight text-foreground">
              {post.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          <div className="max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-10 border-l-2 border-primary/40 pl-6">
              {post.excerpt}
            </p>
            <div className="space-y-6 text-[15px] sm:text-base text-muted-foreground leading-relaxed">
              {post.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
