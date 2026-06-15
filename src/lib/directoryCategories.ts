import type { ComponentType } from "react";
import {
  Zap,
  Wrench,
  HardHat,
  Car,
  Calculator,
  Scale,
  KeyRound,
  Building2,
  UtensilsCrossed,
  Hotel,
  Scissors,
  Sparkles,
  Bug,
  Hammer,
  Briefcase,
  Globe,
  Store,
  Map as MapIcon,
} from "lucide-react";

export type DirectoryCategory = {
  slug: string;
  label: string;
  /** Plural noun used in copy, e.g. "electricians" */
  plural: string;
  icon: ComponentType<{ className?: string }>;
  blurb: string;
};

export const directoryCategories: DirectoryCategory[] = [
  { slug: "electricians", label: "Electricians", plural: "electricians", icon: Zap, blurb: "Licensed electricians for installations, repairs and rewiring." },
  { slug: "plumbers", label: "Plumbers", plural: "plumbers", icon: Wrench, blurb: "Plumbing repairs, installations and emergency callouts." },
  { slug: "builders", label: "Builders", plural: "builders", icon: HardHat, blurb: "Construction, renovation and masonry specialists." },
  { slug: "mechanics", label: "Mechanics", plural: "mechanics", icon: Car, blurb: "Car servicing, repairs and diagnostics." },
  { slug: "accountants", label: "Accountants", plural: "accountants", icon: Calculator, blurb: "Bookkeeping, VAT, tax and payroll professionals." },
  { slug: "lawyers", label: "Lawyers", plural: "lawyers", icon: Scale, blurb: "Legal advice, contracts and representation." },
  { slug: "car-rentals", label: "Car Rentals", plural: "car rental companies", icon: KeyRound, blurb: "Vehicle hire, airport transfers and rental packages." },
  { slug: "real-estate-agents", label: "Real Estate Agents", plural: "real estate agents", icon: Building2, blurb: "Property sales, rentals and management." },
  { slug: "restaurants", label: "Restaurants", plural: "restaurants", icon: UtensilsCrossed, blurb: "Dining, takeaway and catering." },
  { slug: "hotels", label: "Hotels", plural: "hotels", icon: Hotel, blurb: "Hotels, guesthouses and accommodation." },
  { slug: "beauty-salons", label: "Beauty Salons", plural: "beauty salons", icon: Scissors, blurb: "Hair, beauty, nails and grooming." },
  { slug: "cleaning-services", label: "Cleaning Services", plural: "cleaning services", icon: Sparkles, blurb: "Home, office and commercial cleaning." },
  { slug: "pest-control", label: "Pest Control", plural: "pest control services", icon: Bug, blurb: "Pest inspection, treatment and prevention." },
  { slug: "contractors", label: "Contractors", plural: "contractors", icon: Hammer, blurb: "General contracting and project work." },
  { slug: "consultants", label: "Consultants", plural: "consultants", icon: Briefcase, blurb: "Business, financial and specialist consulting." },
  { slug: "digital-services", label: "Digital Services", plural: "digital service providers", icon: Globe, blurb: "Web, design, marketing and IT services." },
  { slug: "shops", label: "Shops", plural: "shops", icon: Store, blurb: "Retail shops and stores." },
  { slug: "tour-operators", label: "Tour Operators", plural: "tour operators", icon: MapIcon, blurb: "Tours, excursions and travel experiences." },
];

const bySlug = new Map(directoryCategories.map((c) => [c.slug, c]));

export function getCategory(slug: string): DirectoryCategory | undefined {
  return bySlug.get(slug);
}

export const directoryCategorySlugs = directoryCategories.map((c) => c.slug);
