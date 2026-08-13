import {
  AppWindow,
  Bot,
  Building2,
  ClipboardList,
  Compass,
  Contact,
  FileSignature,
  FileSpreadsheet,
  FileText,
  Presentation,
  Search,
  Workflow,
} from "lucide-react";
import type { ServicePageContent } from "./types";

export const businessSolutions: ServicePageContent = {
  divisionId: "business-solutions",
  path: "/services/business-solutions",

  metaTitle:
    "Business Solutions Mauritius | Business Plans, Pitch Decks, Proposals & Software",
  metaDescription:
    "MoBiz.mu creates business plans, pitch decks, proposals, company profiles, and business documents, plus CRM, automation and custom software for businesses in Mauritius that want to look established and run more efficiently.",
  keywords: [
    "business plan Mauritius",
    "pitch deck Mauritius",
    "company profile Mauritius",
    "business proposal Mauritius",
    "tender document Mauritius",
    "business software Mauritius",
    "CRM Mauritius",
    "workflow automation Mauritius",
    "business strategy Mauritius",
    "presentation design Mauritius",
  ],

  breadcrumbLabel: "Business Solutions",

  hero: {
    eyebrow: "Business Solutions",
    title: "Look Established, and Run Like It",
    intro:
      "We create the documents and tools that make a business look serious and work more efficiently — business plans, pitch decks, proposals and company profiles when you need to present well, plus CRM, automation, and custom software when you need to operate better. It's the professional back-office side of growing a business in Mauritius.",
    primaryCta: { label: "Tell Us What You Need", href: "/contact" },
    secondaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/23055068119" },
    highlights: [
      "Business plans & pitch decks",
      "Proposals & profiles",
      "CRM & automation",
      "Custom internal tools",
    ],
  },

  overview: {
    eyebrow: "Service Overview",
    title: "Documents That Win Trust, Tools That Save Time",
    paragraphs: [
      "A lot of good Mauritian businesses lose opportunities not because of the work they do, but because of how they present it — a weak proposal, a rushed pitch deck, or no proper company profile when a bigger client asks for one. We fix the presentation side so you're taken seriously.",
      "The other half is how the business runs day to day. When quotes, invoices, customer records, and reporting live in scattered files and someone's memory, growth gets messy. We build the templates, systems, and automation — from CRM to custom internal tools — that make the operation cleaner and less dependent on one person.",
    ],
    checklist: [
      "Business plans, pitch decks, and investor-ready documents",
      "Proposals, company profiles, and tender documents that present well",
      "Reusable templates for quotes, invoices, and communication",
      "CRM and lead management to keep customer records in one place",
      "Automation and custom tools that cut manual, repetitive work",
      "Strategy and research grounded in your real market",
    ],
  },

  categories: {
    eyebrow: "What We Deliver",
    title: "Business Documents, Strategy, Systems and Software",
    subtitle:
      "From the documents that win the deal to the tools that run the business — pick what you need now, or combine them.",
    items: [
      {
        title: "Business Plans",
        description:
          "Structured business plans, feasibility studies, and executive summaries for launches, funding, or internal planning.",
        icon: FileText,
      },
      {
        title: "Pitch Decks & Investor Presentations",
        description:
          "Investor-ready pitch decks and presentations that tell your story clearly and make the numbers easy to follow.",
        icon: Presentation,
      },
      {
        title: "Company Profiles & Presentations",
        description:
          "Company profiles, corporate presentations, PowerPoint decks, and sales presentations that make your business look established.",
        icon: Building2,
      },
      {
        title: "Proposals & Tenders",
        description:
          "Service proposals, tender documents, and capability statements built to compete for bigger clients and contracts.",
        icon: FileSignature,
      },
      {
        title: "Market Research & Analysis",
        description:
          "Market research, competitor analysis, and pricing strategy so decisions are based on your actual market, not guesses.",
        icon: Search,
      },
      {
        title: "Business Strategy",
        description:
          "Business idea development, business model design, go-to-market planning, and growth strategy for where you're headed next.",
        icon: Compass,
      },
      {
        title: "Process & Operations",
        description:
          "Business process mapping, standard operating procedures, and digital transformation and automation planning.",
        icon: Workflow,
      },
      {
        title: "Sales & Business Templates",
        description:
          "Quotation and invoice templates, company letterheads, email templates, and sales scripts your team can reuse consistently.",
        icon: FileSpreadsheet,
      },
      {
        title: "Operational Documents",
        description:
          "Customer onboarding documents, service agreements, process manuals, training materials, checklists, and KPI dashboards.",
        icon: ClipboardList,
      },
      {
        title: "Business Software",
        description:
          "Business, accounting, inventory, and booking software — set up or built around how your business actually operates.",
        icon: AppWindow,
      },
      {
        title: "CRM & Lead Management",
        description:
          "CRM solutions and lead management systems that keep customer records, follow-ups, and enquiries in one organised place.",
        icon: Contact,
      },
      {
        title: "Automation & AI Tools",
        description:
          "Automated reporting, workflow and WhatsApp automation, AI business assistants, and custom internal tools that remove manual work.",
        icon: Bot,
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    title: "From Brief to Finished Solution",
    steps: [
      {
        title: "Understand the Goal",
        text: "Whether it's winning a client, raising finance, or cleaning up operations, we start with what the document or tool actually needs to achieve.",
      },
      {
        title: "Gather the Real Inputs",
        text: "We work from your real numbers, services, and market — a plan or proposal is only useful if it reflects the actual business.",
      },
      {
        title: "Build & Refine",
        text: "We produce the document or system, then refine it with you so the wording, structure, and detail are right before it goes out.",
      },
      {
        title: "Deliver & Support",
        text: "You get finished, editable deliverables, and for software and tools we set them up, hand over access, and support them if you want.",
      },
    ],
  },

  benefits: {
    eyebrow: "Why Businesses Choose MoBiz.mu",
    title: "Substance, Not Just Slides",
    subtitle:
      "Documents and tools built on your real business — designed to be used, not just to look good.",
    items: [
      {
        title: "Look More Established",
        text: "Professional documents and presentations help smaller businesses compete with, and win against, much larger ones.",
        icon: Presentation,
      },
      {
        title: "Grounded in Reality",
        text: "Plans, proposals, and strategy built from your actual numbers and market — not generic templates with your name pasted in.",
        icon: Search,
      },
      {
        title: "Less Manual Work",
        text: "CRM, templates, and automation cut the repetitive admin that eats time and slips through the cracks as you grow.",
        icon: Workflow,
      },
      {
        title: "One Partner, Joined Up",
        text: "Because we also build websites, software, and handle accounting, your documents and tools connect to the rest of your business.",
        icon: AppWindow,
      },
    ],
  },

  industries: {
    eyebrow: "Who We Help",
    title: "Business Support for Ambitious Mauritian Businesses",
    text: "From a first business plan to a full internal system, we support businesses at different stages across many sectors in Mauritius.",
    items: [
      "Startups & founders",
      "SMEs scaling up",
      "Consultants & agencies",
      "Professional services",
      "Companies bidding for tenders",
      "Retail & e-commerce",
      "Construction & contractors",
      "Tourism operators",
      "Import & export traders",
      "Manufacturers",
      "Franchises & multi-branch",
      "Family businesses",
    ],
  },

  portfolioSlugs: ["ks-contracting-accounting-saas", "ram-pottery-hub-saas"],

  relatedLinks: {
    title: "Connects To the Rest of Your Business",
    subtitle:
      "Business documents and tools work best when they tie into everything else you run.",
    links: [
      {
        label: "Website Design & Development",
        description:
          "When a business tool needs to be a proper web application or client portal, our development team builds it.",
        href: "/services/website-design-development",
      },
      {
        label: "Accounting & Tax Returns",
        description:
          "Business plans and forecasts are stronger when built on real, up-to-date financials — which our accounting team can provide.",
        href: "/services/accounting-tax-returns",
      },
      {
        label: "CRM Software Mauritius",
        description:
          "Our dedicated page on CRM and lead management systems for businesses that want customer records in one place.",
        href: "/crm-software-mauritius",
      },
    ],
  },

  faqs: [
    {
      question: "Can you write a business plan I can use to raise finance?",
      answer:
        "Yes. We produce structured business plans, feasibility studies, and financial projections suitable for funding conversations. They're built from your real numbers and market — and they're stronger when our accounting team helps ground the financials.",
    },
    {
      question: "Do you design the pitch deck, or just write the content?",
      answer:
        "Both. We handle the structure and copy so the story is clear, and the visual design so it looks professional — you get a finished, editable deck rather than raw text or a rough template.",
    },
    {
      question: "Can you help us respond to a tender?",
      answer:
        "Yes. We prepare tender documents, service proposals, and capability statements designed to present your business competitively against larger bidders. We work to your deadline and to the tender's requirements.",
    },
    {
      question: "What kind of software or tools do you build?",
      answer:
        "Things like CRM and lead management, quotation and reporting tools, booking systems, and custom internal tools built around a specific process. If it needs to be a full web application, that's handled by our development team.",
    },
    {
      question: "We're a small business — is this overkill for us?",
      answer:
        "Not at all. A clean proposal, a simple CRM, or a set of reusable templates often makes the biggest difference for small businesses, because it lets you compete and operate like a much larger one without the overhead.",
    },
    {
      question: "Can you set up WhatsApp automation for enquiries?",
      answer:
        "Yes. WhatsApp automation and workflow automation are part of what we do — routing enquiries, sending confirmations, and cutting the manual back-and-forth, given how much local business happens on WhatsApp.",
    },
  ],

  cta: {
    title: "Let's Build What Your Business Needs to Grow",
    text: "Tell us whether it's a document to win work or a tool to run better, and we'll suggest the right starting point.",
  },
};
