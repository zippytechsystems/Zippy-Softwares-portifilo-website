export type ServiceDivisionId = 'web-development' | 'app-development' | 'ai-automation';

export interface ServiceCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  businessBenefits: string[];
  idealFor: string[];
}

export interface ServiceDivision {
  id: ServiceDivisionId;
  title: string;
  badge: string;
  shortDesc: string;
  longDesc: string;
  heroHeadline: string;
  heroSubheadline: string;
  accentColor: string;
  icon: string;
  categories: ServiceCategory[];
  technologies: { category: string; items: string[] }[];
  industriesServed: string[];
  faqs: { question: string; answer: string }[];
  metrics: { value: string; label: string }[];
}

export type ProjectCategory = 
  | 'All' 
  | 'Websites' 
  | 'Web Applications' 
  | 'Business Software' 
  | 'Mobile Applications' 
  | 'AI Automation';

export type ProjectType = 'Client Project' | 'Enterprise Concept' | 'Interactive Demo';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Websites' | 'Web Applications' | 'Business Software' | 'Mobile Applications' | 'AI Automation';
  projectType: ProjectType;
  clientOrContext: string;
  tagline: string;
  description: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  technologies: string[];
  deliverables: string[];
  keyFeatures: string[];
  metrics?: { label: string; value: string }[];
  industry: string;
  accentColor?: string;
  badgeColor?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  timeline: string;
  tagline: string;
  description: string;
  activities: string[];
  deliverables: string[];
  toolsUsed: string[];
  icon: string;
}

export interface IndustryItem {
  id: string;
  name: string;
  icon: string;
  badge: string;
  summary: string;
  solutionsProvided: string[];
  sampleUseCases: string[];
}

export interface EnquirySubmission {
  id: string;
  referenceId: string;
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  service: 'Web Development' | 'App Development' | 'AI Agent & Automation' | 'Multiple Services' | 'Other';
  budgetRange?: string;
  timeline?: string;
  projectDescription: string;
  submittedAt: string;
  status: 'received' | 'in-review' | 'contacted';
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
