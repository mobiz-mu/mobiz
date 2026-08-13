import type { ComponentType } from "react";
import type { ServiceDivisionId } from "@/lib/navigation";

export type ServiceIcon = ComponentType<{ className?: string }>;

export type ServiceCategoryItem = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export type ServiceProcessStep = {
  title: string;
  text: string;
};

export type ServiceBenefit = {
  title: string;
  text: string;
  icon: ServiceIcon;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceRelatedLink = {
  label: string;
  description: string;
  href: string;
};

/**
 * Full content contract for one service-division page. Every field here is
 * consumed by the shared src/components/services/* components — a new
 * division page is built by writing one of these, not new markup.
 */
export type ServicePageContent = {
  divisionId: ServiceDivisionId;
  path: string;

  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  breadcrumbLabel: string;

  hero: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    highlights: string[];
  };

  overview: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    checklist: string[];
  };

  categories: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceCategoryItem[];
  };

  process: {
    eyebrow: string;
    title: string;
    steps: ServiceProcessStep[];
  };

  benefits: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: ServiceBenefit[];
  };

  industries: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
  };

  portfolioSlugs: string[];

  relatedLinks?: {
    title: string;
    subtitle: string;
    links: ServiceRelatedLink[];
  };

  faqs: ServiceFaq[];

  cta: {
    title: string;
    text: string;
  };
};
