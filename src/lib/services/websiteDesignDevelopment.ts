import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  CreditCard,
  Cpu,
  Gauge,
  LayoutTemplate,
  MessageCircle,
  MonitorSmartphone,
  RefreshCw,
  Search,
  ServerCog,
  ShoppingBag,
  Sparkles,
  Wrench,
} from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/site";
import type { ServicePageContent } from "./types";

export const websiteDesignDevelopment: ServicePageContent = {
  divisionId: "website-design-development",
  path: "/services/website-design-development",

  metaTitle:
    "Website Design & Development Mauritius | MoBiz.mu",
  metaDescription:
    "Business websites, online stores, booking systems and custom web apps for Mauritius companies, with WhatsApp integration, technical SEO and maintenance.",
  keywords: [
    "website design Mauritius",
    "website development Mauritius",
    "business website Mauritius",
    "e-commerce website Mauritius",
    "web application Mauritius",
    "SaaS website Mauritius",
    "booking system Mauritius",
    "website maintenance Mauritius",
    "technical SEO Mauritius",
    "WhatsApp website integration",
  ],

  breadcrumbLabel: "Website Design & Development",

  hero: {
    eyebrow: "Website Design & Development",
    title: "Websites Built to Bring In Enquiries, Not Just Look Good",
    intro:
      "We design and build business websites, online stores, booking systems, and custom web applications for companies in Mauritius. Every site is mobile-first, fast to load, structured for search engines, and connected to WhatsApp so enquiries reach you the way your customers actually want to contact you.",
    primaryCta: { label: "Start a Website Project", href: "/contact" },
    secondaryCta: { label: "Chat on WhatsApp", href: WHATSAPP_BASE_URL },
    highlights: [
      "Mobile-first builds",
      "WhatsApp-ready",
      "Technical SEO included",
      "Hosting & maintenance available",
    ],
  },

  overview: {
    eyebrow: "Service Overview",
    title: "One Team for Design, Build, SEO and Ongoing Support",
    paragraphs: [
      "Most business websites in Mauritius lose enquiries for practical reasons — slow loading on mobile data, no WhatsApp button, unclear service pages, or a contact form nobody checks. We build websites that avoid those problems from the start.",
      "Depending on what your business needs, that can mean a straightforward business website, a full online store, a customer booking system, or a custom web application tied into how you already work. Every build includes a mobile-first layout, a technical SEO foundation, and a direct WhatsApp path to enquiries.",
    ],
    checklist: [
      "Mobile-first responsive layout for phone, tablet and desktop",
      "WhatsApp button and enquiry flow built in from the start",
      "Technical SEO foundation: clean URLs, structured headings, sitemap",
      "Fast page loads, optimised images, and clean code",
      "Content and structure written for your actual services, not filler",
      "Hosting, updates, and maintenance available after launch",
    ],
  },

  categories: {
    eyebrow: "What We Build",
    title: "Twelve Ways We Help Mauritian Businesses Get Online",
    subtitle:
      "From a first business website to a custom application tied into your operations — this is the full range of website and web development work we take on.",
    items: [
      {
        title: "Business Websites",
        description:
          "A clear, professional website presenting your services, location, and contact details — built to give first-time visitors a reason to trust you.",
        icon: Building2,
      },
      {
        title: "E-Commerce Websites",
        description:
          "Online stores with product catalogues, cart and checkout flow, and WhatsApp or card payment options for businesses ready to sell online.",
        icon: ShoppingBag,
      },
      {
        title: "Industry-Specific Websites",
        description:
          "Layouts built around how your industry actually works — restaurant menus, hotel rooms, tour bookings, clinic services, or property listings.",
        icon: LayoutTemplate,
      },
      {
        title: "Website Redesign",
        description:
          "For businesses with an existing website that feels outdated, loads slowly, or looks unprofessional on mobile — rebuilt without losing what already works.",
        icon: RefreshCw,
      },
      {
        title: "Website Maintenance",
        description:
          "Ongoing updates, content changes, security patches, and technical checks so your website keeps working properly after launch.",
        icon: Wrench,
      },
      {
        title: "Performance Optimisation",
        description:
          "Faster load times through image compression, code cleanup, and caching — particularly important for visitors on mobile data in Mauritius.",
        icon: Gauge,
      },
      {
        title: "Technical SEO",
        description:
          "The structural side of search visibility: clean URLs, proper heading hierarchy, sitemap and robots configuration, and schema markup.",
        icon: Search,
      },
      {
        title: "WhatsApp Integration",
        description:
          "Direct WhatsApp buttons and pre-filled enquiry messages throughout the site, so visitors can reach you the way most Mauritian customers prefer.",
        icon: MessageCircle,
      },
      {
        title: "Custom Web Applications",
        description:
          "Tools built around a specific business process — client portals, internal dashboards, quotation systems, or anything a template can't handle.",
        icon: ServerCog,
      },
      {
        title: "SaaS Development",
        description:
          "Front-end and interface work for software products — subscription dashboards, account areas, and feature pages that need to feel like real software.",
        icon: Cpu,
      },
      {
        title: "Booking Systems",
        description:
          "Appointment or reservation flows for salons, clinics, tour operators, and rentals, with availability, confirmation, and WhatsApp follow-up.",
        icon: CalendarCheck,
      },
      {
        title: "Payment Integration",
        description:
          "Card payment and local payment gateway setup for stores and service businesses that want to take payments directly through the website.",
        icon: CreditCard,
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    title: "How a Project Actually Runs",
    steps: [
      {
        title: "Understand the Business",
        text: "We start with what your business actually does, who your customers are, and what should happen when someone lands on the site — before any design work begins.",
      },
      {
        title: "Design & Structure",
        text: "We plan the page structure and design the layout around your services and content, with mobile screens designed first, not adjusted afterward.",
      },
      {
        title: "Build, SEO & Testing",
        text: "The site is built, connected to WhatsApp, checked for technical SEO, and tested across real devices before anything goes live.",
      },
      {
        title: "Launch & Ongoing Support",
        text: "Once live, we hand over access and, if you want it, continue handling hosting, updates, and small changes so the site keeps working.",
      },
    ],
  },

  benefits: {
    eyebrow: "Why Businesses Choose MoBiz.mu",
    title: "Built for How Mauritian Customers Actually Browse",
    subtitle:
      "Not abstract promises — practical decisions that affect whether a visitor becomes an enquiry.",
    items: [
      {
        title: "Mobile-First, Not Mobile-Adjusted",
        text: "Designed for phone screens first, since that's how most visitors will actually find you, then scaled up to tablet and desktop.",
        icon: MonitorSmartphone,
      },
      {
        title: "WhatsApp Built In",
        text: "Every service page includes a direct WhatsApp path, because that's how most enquiries in Mauritius actually happen.",
        icon: MessageCircle,
      },
      {
        title: "SEO From Day One",
        text: "Technical SEO foundations are part of the build, not an add-on you have to remember to ask for later.",
        icon: BadgeCheck,
      },
      {
        title: "Support After Launch",
        text: "Hosting, updates, and small changes are available as an ongoing service, so the website doesn't stop being maintained the day it goes live.",
        icon: Sparkles,
      },
    ],
  },

  industries: {
    eyebrow: "Who We Build For",
    title: "Websites for a Wide Range of Mauritian Businesses",
    text: "The details change by industry, but the goal stays the same: a website that presents your business clearly and makes it easy for someone to enquire. We've built for businesses across these sectors and others.",
    items: [
      "Tourism & tour operators",
      "Restaurants & cafés",
      "Hotels & guesthouses",
      "Car rental companies",
      "Construction & maintenance",
      "Accounting firms",
      "Legal & consulting",
      "Beauty salons & wellness",
      "Retail & e-commerce",
      "Real estate agencies",
      "Import & export traders",
      "Startups & SMEs",
    ],
  },

  portfolioSlugs: ["dan-and-shi-pest-control-ltd", "atelier-de-mea", "multiimaint-ltd"],

  relatedLinks: {
    title: "A Website Works Harder With These",
    subtitle:
      "A site is the destination — these services help the right people find it and act once they do.",
    links: [
      {
        label: "Digital Marketing",
        description:
          "SEO, Google Ads and social campaigns that bring the right visitors to your new website instead of waiting for them to find it.",
        href: "/services/digital-marketing",
      },
      {
        label: "SEO Services Mauritius",
        description:
          "Our dedicated local SEO page — keyword strategy, technical SEO, and Google ranking support for Mauritius businesses.",
        href: "/seo-services-mauritius",
      },
      {
        label: "Business Solutions",
        description:
          "Company profiles, proposals, and custom tools that pair with your website to make the whole business look established.",
        href: "/services/business-solutions",
      },
    ],
  },

  faqs: [
    {
      question: "How long does a website project take?",
      answer:
        "It depends on scope and how quickly content and approvals come back to us. A straightforward business website typically takes a few weeks; e-commerce stores, booking systems, and custom applications take longer. We give a specific timeline once we understand what you need.",
    },
    {
      question: "Do you build online stores as well as business websites?",
      answer:
        "Yes. We build both — simple business websites for companies that mainly need enquiries, and full e-commerce stores with product catalogues, cart, checkout, and payment options for businesses that want to sell online.",
    },
    {
      question: "Will the website work properly on mobile?",
      answer:
        "Yes, every site we build is designed mobile-first, since most visitors in Mauritius browse on their phones. We test across real devices, not just desktop browsers, before launch.",
    },
    {
      question: "Can you connect the website to WhatsApp?",
      answer:
        "Yes. WhatsApp buttons and pre-filled enquiry messages are part of the standard build, not an extra — it's usually the fastest way for Mauritian customers to reach a business.",
    },
    {
      question: "Do you offer hosting and maintenance after the site is live?",
      answer:
        "Yes, on an ongoing basis if you want it. That covers hosting, security updates, and small content changes, so the site keeps working properly after launch instead of being left as-is.",
    },
    {
      question: "Can you build something more custom than a template website?",
      answer:
        "Yes. If your business needs a booking system, a client portal, a quotation tool, or another web application built around how you actually operate, that falls under our custom web application and SaaS development work.",
    },
  ],

  cta: {
    title: "Let's Talk About What Your Website Actually Needs",
    text: "Tell us about your business and we'll recommend the right starting point — a business website, an online store, a booking system, or something more custom.",
  },
};
