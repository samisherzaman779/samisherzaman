// # types/index.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  category: string[];
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
  role: string;
  client?: string;
  duration?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
  timeline?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
  color?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  description?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  url?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}