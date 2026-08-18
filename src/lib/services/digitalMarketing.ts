import {
  BarChart3,
  Instagram,
  Linkedin,
  MapPin,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  Palette,
  PenLine,
  Search,
  Share2,
  Target,
} from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/site";
import type { ServicePageContent } from "./types";

export const digitalMarketing: ServicePageContent = {
  divisionId: "digital-marketing",
  path: "/services/digital-marketing",

  metaTitle:
    "Digital Marketing Mauritius | Google Ads, SEO & Social",
  metaDescription:
    "SEO, Google Ads, Meta Ads, Google Business Profile and social media for Mauritius businesses, with clear monthly reporting and no invented promises.",
  keywords: [
    "digital marketing Mauritius",
    "SEO Mauritius",
    "Google Ads Mauritius",
    "Meta Ads Mauritius",
    "social media management Mauritius",
    "Google Business Profile Mauritius",
    "local SEO Mauritius",
    "Facebook marketing Mauritius",
    "WhatsApp marketing Mauritius",
    "lead generation Mauritius",
  ],

  breadcrumbLabel: "Digital Marketing",

  hero: {
    eyebrow: "Digital Marketing",
    title: "Get Found, Get Followed, Get Enquiries",
    intro:
      "We handle the marketing side of your business online — showing up on Google when people search, running Facebook and Instagram ads that reach the right audience in Mauritius, keeping your social pages active, and turning attention into WhatsApp enquiries. You get clear monthly reporting, not vanity numbers.",
    primaryCta: { label: "Discuss Your Marketing", href: "/contact" },
    secondaryCta: { label: "Chat on WhatsApp", href: WHATSAPP_BASE_URL },
    highlights: [
      "SEO & Google Ads",
      "Meta Ads",
      "Social media management",
      "Clear monthly reporting",
    ],
  },

  overview: {
    eyebrow: "Service Overview",
    title: "Marketing That Fits How Mauritius Actually Buys",
    paragraphs: [
      "Marketing in Mauritius isn't the same as marketing anywhere else. A lot of buying decisions start with a Google search or a scroll through Facebook and Instagram, and most enquiries finish on WhatsApp. We build around that reality instead of copying generic playbooks.",
      "Depending on your goals, that might mean improving your search visibility, running paid ads with a defined budget, keeping your social presence consistent, or setting up your Google Business Profile so you show up on Maps. Every engagement comes with straightforward reporting on what ran and what it did.",
    ],
    checklist: [
      "Search visibility through SEO and Google Business Profile",
      "Paid campaigns on Google, Facebook and Instagram with set budgets",
      "Consistent social media presence and content",
      "WhatsApp-led enquiry flow, not just clicks",
      "Monthly reporting in plain language — what ran, what happened",
      "No guaranteed rankings, leads or sales — just honest execution",
    ],
  },

  categories: {
    eyebrow: "What We Run",
    title: "The Full Digital Marketing Toolkit",
    subtitle:
      "Search, paid ads, social, content and analytics — pick what your business needs now, or combine them into an ongoing plan.",
    items: [
      {
        title: "Social Media Management",
        description:
          "Ongoing posting, monthly content calendars, community management and replies — keeping your Facebook and Instagram active without you having to think about it daily.",
        icon: Share2,
      },
      {
        title: "Facebook & Instagram Marketing",
        description:
          "Organic content and page management for the two platforms most Mauritian customers use, with content created to match how people actually scroll.",
        icon: Instagram,
      },
      {
        title: "LinkedIn & TikTok Marketing",
        description:
          "B2B presence on LinkedIn for professional services, and short-form video on TikTok for brands whose audience is there.",
        icon: Linkedin,
      },
      {
        title: "Search Engine Optimisation",
        description:
          "Keyword research, on-page SEO, technical SEO and competitor analysis to improve how you rank for what your customers search in Mauritius.",
        icon: Search,
      },
      {
        title: "Google Ads",
        description:
          "Google Search campaigns that put you in front of people actively looking for your service, with a defined budget and clear targeting.",
        icon: MousePointerClick,
      },
      {
        title: "Google Business Profile & Local SEO",
        description:
          "Profile setup and optimisation, Google Maps visibility, and local SEO so nearby customers find you first.",
        icon: MapPin,
      },
      {
        title: "Meta Ads",
        description:
          "Facebook and Instagram advertising for awareness, traffic and enquiries, built around a specific audience and budget rather than boosted posts.",
        icon: Megaphone,
      },
      {
        title: "Lead Generation Campaigns",
        description:
          "Landing-page campaigns and remarketing designed to collect enquiries, with the message and audience matched to the offer.",
        icon: Target,
      },
      {
        title: "Content & Copywriting",
        description:
          "Blog content, ad copy and marketing materials written to sound like your business and speak to Mauritian customers — not generic filler.",
        icon: PenLine,
      },
      {
        title: "Creative & Design",
        description:
          "Advertising creatives, banner design, social media branding and promotional videos so your campaigns actually look professional.",
        icon: Palette,
      },
      {
        title: "WhatsApp Marketing",
        description:
          "Click-to-WhatsApp ads and enquiry flows that send interested people straight to a conversation — the channel most local buyers prefer.",
        icon: MessageCircle,
      },
      {
        title: "Campaign Analytics & Reporting",
        description:
          "Monthly SEO and campaign reporting plus conversion-rate optimisation, so you can see what's working and where the budget should go next.",
        icon: BarChart3,
      },
    ],
  },

  process: {
    eyebrow: "Our Process",
    title: "How We Run a Campaign",
    steps: [
      {
        title: "Understand the Goal",
        text: "We start with what you actually want — more enquiries, more foot traffic, more bookings — and which channels make sense for your business and budget.",
      },
      {
        title: "Set Up & Target",
        text: "We build the campaigns, define the audience, write the copy, and prepare the creative, with tracking in place so results can be measured.",
      },
      {
        title: "Run & Optimise",
        text: "Campaigns go live and we adjust based on what the data shows — pausing what doesn't work and putting budget behind what does.",
      },
      {
        title: "Report & Plan Ahead",
        text: "Each month you get a plain-language report on what ran and what happened, plus a recommendation for the next period.",
      },
    ],
  },

  benefits: {
    eyebrow: "Why Businesses Choose MoBiz.mu",
    title: "Marketing You Can Actually Follow",
    subtitle:
      "No jargon, no invented metrics — practical marketing with reporting you can read.",
    items: [
      {
        title: "Built for Mauritius",
        text: "Targeting, timing and messaging tuned to the local market and the platforms Mauritian customers actually use.",
        icon: MapPin,
      },
      {
        title: "Honest Reporting",
        text: "Monthly reports in plain language — spend, activity, and results — with no cherry-picked vanity numbers.",
        icon: BarChart3,
      },
      {
        title: "WhatsApp-Led",
        text: "Campaigns route interested people to WhatsApp, the channel where most local enquiries actually convert.",
        icon: MessageCircle,
      },
      {
        title: "No Empty Promises",
        text: "We don't guarantee rankings, leads or sales. We run campaigns properly and tell you honestly what they did.",
        icon: Megaphone,
      },
    ],
  },

  industries: {
    eyebrow: "Who We Market For",
    title: "Digital Marketing Across Mauritian Sectors",
    text: "The channel mix changes by business — a restaurant needs different marketing than a law firm — but the discipline stays the same. We run campaigns for businesses across these sectors and more.",
    items: [
      "Restaurants & cafés",
      "Retail & e-commerce",
      "Tourism & tour operators",
      "Hotels & guesthouses",
      "Beauty salons & wellness",
      "Real estate agencies",
      "Professional services",
      "Car rental & transport",
      "Events & entertainment",
      "Clinics & healthcare",
      "Construction & trades",
      "Startups & SMEs",
    ],
  },

  portfolioSlugs: [],

  relatedLinks: {
    title: "Marketing Works Better Alongside These",
    subtitle:
      "Campaigns send people somewhere and need a strong destination — these services pair naturally with digital marketing.",
    links: [
      {
        label: "Website Design & Development",
        description:
          "A fast, clear website gives your ads and SEO somewhere worth sending people. We build the destination, not just the traffic.",
        href: "/services/website-design-development",
      },
      {
        label: "Free SEO Audit",
        description:
          "Not sure where your site currently stands? We will review its search visibility and tell you what is actually holding it back.",
        href: "/free-seo-audit",
      },
      {
        label: "SEO Services Mauritius",
        description:
          "Our dedicated local SEO page covers keyword strategy, technical SEO and Google ranking support for Mauritius businesses.",
        href: "/seo-services-mauritius",
      },
      {
        label: "Digital Marketing Mauritius",
        description:
          "Our local landing page with more detail on Google Business Profile, Maps visibility, and marketing for Mauritian businesses.",
        href: "/digital-marketing-mauritius",
      },
    ],
  },

  faqs: [
    {
      question: "Can you guarantee first-page Google rankings or a set number of leads?",
      answer:
        "No, and you should be cautious of anyone who does. Rankings depend on competition and Google's own algorithm, and lead volume depends on your offer, market and budget. We run SEO and campaigns properly and report honestly on results — we don't sell guarantees we can't control.",
    },
    {
      question: "How long before SEO shows results?",
      answer:
        "SEO is a slower channel — meaningful movement usually takes a few months, depending on your starting point and competition. If you need visibility faster, Google Ads and Meta Ads work immediately once live, which is why we often combine them.",
    },
    {
      question: "Do I need a big advertising budget?",
      answer:
        "No. We work with the budget you have and tell you honestly what's realistic at that level. A smaller, well-targeted budget aimed at the right audience in Mauritius often does more than a large, unfocused one.",
    },
    {
      question: "Do you manage the ad budget or do I pay Google and Meta directly?",
      answer:
        "The advertising spend goes to Google and Meta and is separate from our management fee — so you always know exactly how much is media spend versus service. We set it up transparently and report on both.",
    },
    {
      question: "Can you also handle our social media posting?",
      answer:
        "Yes. Social media management — content calendars, posting, and replying to comments and messages — is one of the services we offer, either on its own or alongside paid campaigns.",
    },
    {
      question: "Will marketing work without a good website?",
      answer:
        "It works better with one. Ads and SEO send people somewhere, and if that page is slow or unclear you lose enquiries. If your site needs work, our website design and development team can handle that side too.",
    },
  ],

  cta: {
    title: "Let's Get Your Business In Front of the Right People",
    text: "Tell us what you're trying to grow and we'll suggest a realistic mix of SEO, ads, and social — with a budget and reporting you can actually follow.",
  },
};
