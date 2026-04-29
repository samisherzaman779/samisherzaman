// # app/services/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailView } from "@/components/services/ServiceDetailView";
import {
  getServiceBySlug,
  portfolioServices,
} from "@/lib/services-detail";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioServices.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };

  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: `${service.title} — Services`,
      description: service.description,
      url: `/services/${slug}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  if (!getServiceBySlug(slug)) notFound();

  return <ServiceDetailView slug={slug} />;
}
