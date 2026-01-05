import { LucideIcon } from 'lucide-react';

export interface SectionContent {
  title: string;
  description: string;
  icon?: LucideIcon;
  items?: string[];
}

export interface FeatureItem {
  title: string;
  subtitle?: string;
  description: string;
  points: string[];
  icon: LucideIcon;
  quote?: string;
}

export interface Benefit {
  text: string;
  type: 'positive' | 'negative';
}