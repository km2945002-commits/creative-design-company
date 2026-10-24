export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  name: string;
  shortTag: string;
  category: string;
  tagline: string;
  description: string;
  heroHighlight: string;
  deliverables: string[];
  techOrMaterials: string[];
  estimatedTurnaround: string;
  startingPrice: string;
  features: ServiceFeature[];
}

export interface BusinessSolution {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  keyFeatures: string[];
  recommendedTech: string;
  idealFor: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  categoryLabel: string;
  tagline: string;
  imageSrc: string;
  toolsUsed: string;
  deliverables: string[];
  specifications: {
    format: string;
    finishOrStack: string;
    timeline: string;
  };
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  iconName: string;
  description: string;
  inclusions: string[];
}

export interface WhyChooseCommitment {
  title: string;
  description: string;
  borderColor: string;
  badge: string;
}

export interface TechTool {
  name: string;
  category: string;
  iconName: string;
  badge: string;
  badgeColor: string;
  description: string;
  workflowUse: string[];
}
