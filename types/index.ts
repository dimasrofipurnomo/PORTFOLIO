import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  fullTitle?: string;
  slug: string;
  description: string; // Short description for project cards only
  imageUrl: string;
  featured: boolean;
  subRole: string;
  imageBg: string;
  category: string[];
  year: number;
  timelineLabel: string;
  subtitle: string;
  teamSize: string;
  overview: string; // Narrative overview for detail pages
  techStackDetailed: {
    category: string;
    tags: string[];
  }[];
  gallery: string[];
  
  // Optional links
  github?: string;
  designLink?: string;
  link?: string;
}

export interface Organization {
  name: string;
  role: string;
  period: string;
  description: string;
  logoUrl?: string;
  tags?: string[];
  color?: "yellow" | "blue" | "pink" | "orange" | "green";
}
