import type { AccentId } from "@/lib/accents";

export type SuggestedQuestion = {
  id: string;
  /** Chip label shown in the panel. */
  label: string;
  /** The message actually sent — phrased as a visitor would ask it. */
  prompt: string;
  accent: AccentId;
};

/**
 * The opening quick-questions.
 *
 * These carry the same category colours as the rest of the site, and they are
 * phrased as real visitor intents so the first reply is immediately useful.
 * None of them ask the assistant for anything it is not allowed to answer.
 */
export const SUGGESTED_QUESTIONS: SuggestedQuestion[] = [
  {
    id: "website",
    label: "I need a website",
    prompt: "I need a website for my business in Mauritius. What does Mobiz offer?",
    accent: "blue",
  },
  {
    id: "packages",
    label: "Monthly packages",
    prompt: "Tell me about your monthly website packages and what is included.",
    accent: "red",
  },
  {
    id: "ecommerce",
    label: "E-commerce store",
    prompt: "I want to sell online. Can Mobiz build an e-commerce store?",
    accent: "blue",
  },
  {
    id: "seo",
    label: "SEO & Google",
    prompt: "How can Mobiz help my business get found on Google in Mauritius?",
    accent: "sky",
  },
  {
    id: "marketing",
    label: "Digital marketing",
    prompt: "What digital marketing services does Mobiz provide?",
    accent: "yellow",
  },
  {
    id: "accounting",
    label: "Accounting & tax",
    prompt: "What accounting, VAT and tax return support does Mobiz offer?",
    accent: "green",
  },
  {
    id: "inventory",
    label: "Inventory & stock",
    prompt: "How does Mobiz help with inventory and stock management?",
    accent: "emerald",
  },
  {
    id: "software",
    label: "Business software",
    prompt: "Can Mobiz build custom business software or automate my processes?",
    accent: "red",
  },
];
