export interface NavLink {
  label: string;
  href: string;
}

export interface ProjectSocial {
  type: "instagram" | "website";
  url: string;
}

export interface Project {
  title: string;
  category: string;
  image: string;
  socials?: ProjectSocial[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface FooterLinks {
  services: NavLink[];
  company: NavLink[];
  social: NavLink[];
  legal: NavLink[];
}

export interface SiteConfig {
  name: string;
  shortName: string;
  url: string;
  description: string;
  tagline: string;
  keywords: string[];
  establishedYear: number;
}
