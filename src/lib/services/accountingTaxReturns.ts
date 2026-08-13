import {
  Banknote,
  Building2,
  Calculator,
  FileCheck,
  FileText,
  LayoutDashboard,
  LineChart,
  PieChart,
  ReceiptText,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";
import type { ServicePageContent } from "./types";

export const accountingTaxReturns: ServicePageContent = {
  divisionId: "accounting-tax-returns",
  path: "/services/accounting-tax-returns",

  metaTitle:
    "Accounting & Tax Returns Mauritius | Bookkeeping, VAT & MRA Compliance",
  metaDescription:
    "MoBiz.mu provides bookkeeping, VAT returns, payroll, individual and company tax return support, and financial reporting for businesses in Mauritius. Requirements depend on your business structure and applicable Mauritius regulations.",
  keywords: [
    "accounting services Mauritius",
    "tax returns Mauritius",
    "bookkeeping Mauritius",
    "VAT returns Mauritius",
    "payroll Mauritius",
    "company tax return Mauritius",
    "MRA compliance Mauritius",
    "management accounts Mauritius",
    "financial reporting Mauritius",
    "cash flow forecasting Mauritius",
  ],

  breadcrumbLabel: "Accounting & Tax Returns",

  hero: {
    eyebrow: "Accounting & Tax Returns",
    title: "Keep Your Books Clean and Your Filings On Time",
    intro:
      "We handle the bookkeeping, VAT, payroll, and tax return support that keeps a Mauritian business organised and compliant — so you spend less time on paperwork and more on running the business. The exact requirements depend on your business structure and applicable Mauritius regulations, and we'll walk you through what applies to you.",
    primaryCta: { label: "Talk to Us About Your Books", href: "/contact" },
    secondaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/23055068119" },
    highlights: [
      "Bookkeeping & VAT",
      "Payroll & PAYE",
      "Tax return support",
      "MRA-deadline aware",
    ],
  },

  overview: {
    eyebrow: "Service Overview",
    title: "The Financial Admin Side, Handled Properly",
    paragraphs: [
      "Late filings, messy records, and missed deadlines cause real problems for Mauritian businesses — penalties, stress, and decisions made without knowing the actual numbers. We keep the books accurate and the filings on schedule so none of that catches you out.",
      "Whether you're a sole trader, a growing SME, or an established company, we can cover the day-to-day bookkeeping, prepare your VAT and payroll, and support your individual or company tax returns. What exactly you need depends on your structure and turnover, and we're clear about that upfront rather than selling you more than applies.",
    ],
    checklist: [
      "Accurate bookkeeping and organised financial records",
      "VAT returns and payroll prepared and filed on schedule",
      "Individual and company tax return support",
      "Clear picture of your numbers through regular reporting",
      "MRA deadlines tracked so nothing is missed",
      "Honest scope — you're told what actually applies to your business",
    ],
  },

  categories: {
    eyebrow: "What We Handle",
    title: "Accounting, Tax and Finance Support",
    subtitle:
      "From day-to-day bookkeeping to tax filings and financial planning — the support depends on your business, so we scope it to what you actually need.",
    items: [
      {
        title: "Bookkeeping",
        description:
          "Monthly bookkeeping, sales and purchase records, and expense tracking kept accurate and up to date, so your accounts are always ready.",
        icon: Calculator,
      },
      {
        title: "Bank Reconciliation",
        description:
          "Regular reconciliation of your bank statements against your records, so discrepancies are caught early rather than at year-end.",
        icon: Banknote,
      },
      {
        title: "Management Accounts & Reporting",
        description:
          "Accounts preparation and financial reporting that give you a clear, regular picture of how the business is actually performing.",
        icon: FileText,
      },
      {
        title: "Payroll & PAYE Support",
        description:
          "Payroll processing and PAYE support so staff are paid correctly and the associated filings are handled on time.",
        icon: Users,
      },
      {
        title: "VAT Registration & Returns",
        description:
          "VAT registration support and periodic VAT return preparation. Whether and when you need to register depends on your turnover and activity.",
        icon: ReceiptText,
      },
      {
        title: "Individual Tax Returns",
        description:
          "Preparation and support for personal income tax returns, with the documentation organised so filing is straightforward.",
        icon: FileCheck,
      },
      {
        title: "Company Tax Returns",
        description:
          "Corporate tax return support for companies, coordinated with your accounts so the filing reflects your actual position.",
        icon: Building2,
      },
      {
        title: "MRA Compliance & Statutory Filing",
        description:
          "Support with MRA compliance, annual return filing, tax documentation, and keeping track of deadlines across the year.",
        icon: ShieldCheck,
      },
      {
        title: "Cash Flow Monitoring",
        description:
          "Ongoing monitoring and cash flow forecasting so you can see what's coming in and going out before it becomes a problem.",
        icon: TrendingUp,
      },
      {
        title: "Financial Forecasting & Budgeting",
        description:
          "Financial forecasting and budget preparation to help you plan ahead with numbers grounded in your actual trading.",
        icon: LineChart,
      },
      {
        title: "Profit & Loss and Balance Sheet",
        description:
          "Profit and loss analysis, balance sheet preparation, and business cost analysis so you understand where money is made and spent.",
        icon: PieChart,
      },
      {
        title: "Financial Dashboards & Pricing",
        description:
          "Financial dashboard setup and pricing analysis to turn your numbers into something you can actually use for decisions.",
        icon: LayoutDashboard,
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    title: "Getting Your Accounts In Order",
    steps: [
      {
        title: "Review Where You Are",
        text: "We look at your current records, structure, and obligations to understand what applies to your business and what needs attention first.",
      },
      {
        title: "Organise the Records",
        text: "We get the bookkeeping into a clean, consistent state so everything after that — VAT, payroll, tax — is built on accurate numbers.",
      },
      {
        title: "Handle Filings on Schedule",
        text: "VAT, payroll, and tax filings are prepared and submitted against MRA deadlines, so nothing is left to the last minute.",
      },
      {
        title: "Report & Advise on Scope",
        text: "You get regular reporting on your numbers, and we're clear about what does and doesn't apply — without overstating what we provide.",
      },
    ],
  },

  benefits: {
    eyebrow: "Why Businesses Choose MoBiz.mu",
    title: "Organised, On Time, and Straight With You",
    subtitle:
      "Practical financial support with clear scope — no overstated promises about tax outcomes.",
    items: [
      {
        title: "Deadline-Aware",
        text: "MRA and filing deadlines are tracked through the year, so you're not scrambling — or paying penalties — at the last minute.",
        icon: ShieldCheck,
      },
      {
        title: "Clear Scope",
        text: "We tell you what actually applies to your business structure and turnover, rather than selling services you don't need.",
        icon: FileCheck,
      },
      {
        title: "Numbers You Understand",
        text: "Regular reporting in plain terms, so you always know how the business is doing — not just at year-end.",
        icon: PieChart,
      },
      {
        title: "Built for Mauritian SMEs",
        text: "Support shaped around how small and growing businesses in Mauritius actually operate, from sole traders to established companies.",
        icon: Calculator,
      },
    ],
  },

  industries: {
    eyebrow: "Who We Support",
    title: "Accounting Support Across Mauritian Businesses",
    text: "The obligations differ by structure and sector, but every business needs clean books and on-time filings. We support a wide range of Mauritian businesses.",
    items: [
      "Sole traders & freelancers",
      "Retail & shops",
      "Restaurants & cafés",
      "Construction & contractors",
      "Import & export traders",
      "Professional services",
      "Tourism operators",
      "E-commerce sellers",
      "Beauty & wellness",
      "Startups",
      "Growing SMEs",
      "Established companies",
    ],
  },

  portfolioSlugs: [],

  relatedLinks: {
    title: "Often Needed Alongside Accounting",
    subtitle:
      "Clean books make everything else easier — these services pair naturally with accounting and tax support.",
    links: [
      {
        label: "Business Solutions",
        description:
          "Business plans, financial forecasts, and pitch decks that draw on real numbers — useful when raising finance or planning growth.",
        href: "/services/business-solutions",
      },
      {
        label: "Accounting Services Mauritius",
        description:
          "Our local landing page with more detail on bookkeeping, VAT, payroll, and tax support for Mauritius businesses.",
        href: "/accounting-services-mauritius",
      },
      {
        label: "VAT Filing Mauritius",
        description:
          "Focused guidance on VAT registration and periodic VAT return preparation for registered businesses.",
        href: "/vat-filing-mauritius",
      },
    ],
  },

  faqs: [
    {
      question: "Do you give personalised tax or legal advice?",
      answer:
        "We provide practical bookkeeping, filing, and accounting support, and we'll explain what generally applies to your situation. For personalised tax planning or legal advice specific to complex circumstances, we'll be clear about the limits of our scope and, where needed, recommend involving a specialist. The exact requirements depend on your business structure and applicable Mauritius regulations.",
    },
    {
      question: "Do I need to register for VAT?",
      answer:
        "That depends on your turnover and business activity under Mauritius regulations. We'll review your situation and tell you honestly whether registration applies to you now, rather than registering you unnecessarily.",
    },
    {
      question: "Can you handle both my bookkeeping and my tax returns?",
      answer:
        "Yes. Keeping the bookkeeping and the returns with one team means your filings are built directly on accurate, up-to-date records — which usually means fewer surprises at filing time.",
    },
    {
      question: "What documents do you need from me?",
      answer:
        "Typically your sales and purchase records, bank statements, payroll details, and any prior filings. We'll give you a clear list based on what applies to your business, and help organise anything that's currently messy.",
    },
    {
      question: "Will you keep track of MRA deadlines for me?",
      answer:
        "Yes. Tracking the relevant filing deadlines through the year is part of the service, so VAT, payroll, and tax filings are prepared on schedule rather than rushed at the last minute.",
    },
    {
      question: "I'm a sole trader, not a company — can you still help?",
      answer:
        "Yes. We support sole traders and freelancers as well as companies. The obligations differ, and we scope the support to what actually applies to how you operate.",
    },
  ],

  cta: {
    title: "Let's Get Your Books and Filings Under Control",
    text: "Tell us about your business and we'll explain what applies to you and how we can help — bookkeeping, VAT, payroll, or tax return support.",
  },
};
