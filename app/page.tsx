// # app/page.tsx
import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Testimonials } from "@/components/sections/Testimonials";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <FeaturedProjects />
      <Testimonials />
    </>
  );
}
