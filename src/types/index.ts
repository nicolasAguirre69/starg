import type { LucideIcon } from "lucide-react";

export interface BenefitItem {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
}

export interface Plan {
  id: number;
  name: string;
  price: string;
  speed: string;
  features: string[];
  tvIncluded: boolean;
  recommended?: boolean;
}

export interface Channel {
  name: string;
  filename: string;
}

export interface NavItem {
  name: string;
  link: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface RouteConfig {
  path: string;
  component: React.ComponentType;
}
