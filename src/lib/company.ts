/**
 * Company, FAQ and careers content.
 *
 * Migrated from the live site. Every statement here already existed in
 * production — nothing has been added, and in particular there are no invented
 * testimonials, ratings, client counts, awards or results.
 *
 * The testimonials page deliberately shows what clients can expect rather than
 * unverifiable quotes, and points at the real Google review profile instead.
 * Keep it that way.
 */

export type Faq = { question: string; answer: string };
export type FaqCategory = { id: string; label: string; faqs: Faq[] };
export type ValueItem = { title: string; text: string };
export type Role = { title: string; type: string; description: string };

/* ── FAQ ─────────────────────────────────────────────────────────────────── */

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    "id": "websites",
    "label": "Websites",
    "faqs": [
      {
        "question": "What kind of websites does MoBiz.mu build?",
        "answer": "Business websites, e-commerce stores, booking sites, and web applications — all mobile-first and built to bring in enquiries rather than just look good."
      },
      {
        "question": "Will my website work well on mobile?",
        "answer": "Yes. Most visitors in Mauritius browse on a phone, so every build is designed and tested for phones, tablets, and desktops."
      },
      {
        "question": "Do you help with SEO on the website?",
        "answer": "Yes. We build clean page structure, sensible headings, fast-loading pages, and the on-page basics search engines look for, so the site is ready to rank."
      }
    ]
  },
  {
    "id": "digital-marketing",
    "label": "Digital Marketing",
    "faqs": [
      {
        "question": "What digital marketing services do you offer?",
        "answer": "SEO, social media management, content planning, and paid campaigns on Google and Meta — focused on visibility and enquiries for Mauritius businesses."
      },
      {
        "question": "Can you manage our Google and social media ads?",
        "answer": "Yes. We can set up and manage Google Ads and Meta (Facebook/Instagram) campaigns, and report on what is working so budget goes where it performs."
      }
    ]
  },
  {
    "id": "accounting-tax",
    "label": "Accounting & Tax",
    "faqs": [
      {
        "question": "What accounting and tax support do you provide?",
        "answer": "Bookkeeping, VAT computation and filing, statutory and tax filing, and support with annual financial statements — kept organised and compliant with the MRA."
      },
      {
        "question": "Can you help with VAT filing in Mauritius?",
        "answer": "Yes. We help with VAT computation and returns so filings are accurate and on time. We confirm scope and timelines with you before starting."
      }
    ]
  },
  {
    "id": "warehousing-inventory",
    "label": "Warehousing & Inventory",
    "faqs": [
      {
        "question": "What does your warehousing and inventory service cover?",
        "answer": "Stock counting, inventory systems, and stock audits so you always know exactly what stock you have and where — this is operational support, not physical warehouse rental."
      },
      {
        "question": "Can you set up an inventory or stock system for us?",
        "answer": "Yes. We can help you put a practical stock-management system in place and organise your existing inventory data so reports reflect reality."
      }
    ]
  },
  {
    "id": "business-solutions",
    "label": "Business Solutions",
    "faqs": [
      {
        "question": "What falls under Business Solutions?",
        "answer": "Business plans, pitch decks, proposals, branding and brand kits, and business software such as CRM, invoicing, and booking systems — the tools that help you look established and win work."
      },
      {
        "question": "Can you design our branding and business documents?",
        "answer": "Yes. We can produce logos, brand kits, presentations, and business plans that give your company a more polished, professional image."
      }
    ]
  },
  {
    "id": "monthly-packages",
    "label": "Monthly Packages",
    "faqs": [
      {
        "question": "How do the monthly packages work?",
        "answer": "They are 12-month subscriptions that bundle a website with ongoing support. Starter is Rs 1,499/month, Business is Rs 2,299/month, and Premium Growth is Rs 4,999/month. Hosting is included; the domain is not."
      },
      {
        "question": "Is the domain included in the monthly package?",
        "answer": "Hosting is included in every package. The domain name is not included — you can register your own, or we can help you arrange it separately."
      }
    ]
  },
  {
    "id": "payments-terms",
    "label": "Payments & Terms",
    "faqs": [
      {
        "question": "How do I get a quotation?",
        "answer": "Message us on WhatsApp or use the contact page with a short description of what you need. We review it and reply with clear next steps and pricing."
      },
      {
        "question": "How is pricing and payment handled?",
        "answer": "We confirm the scope, price, and payment terms in your quote before any work starts — no hidden charges. Everything is agreed up front."
      }
    ]
  },
  {
    "id": "general-support",
    "label": "General Support",
    "faqs": [
      {
        "question": "Do you only work with businesses in Mauritius?",
        "answer": "Mauritius is our main focus, but we also support businesses in Rodrigues, Réunion, and the wider Indian Ocean region depending on the project."
      },
      {
        "question": "How long does a project usually take?",
        "answer": "It depends on the service, project size, and how quickly content and approvals come through. Smaller website or branding tasks move faster; larger or multi-service work takes longer. We give you a realistic timeline in your quote."
      },
      {
        "question": "What's the fastest way to reach you?",
        "answer": "WhatsApp is the quickest way to reach us. You can also use the contact page or email for business enquiries and project discussions."
      }
    ]
  }
];

export const ALL_FAQS: Faq[] = FAQ_CATEGORIES.flatMap((c) => c.faqs);

/* ── Testimonials / what clients value ───────────────────────────────────── */

/** The verified Google review profile — the only review source we point at. */
export const GOOGLE_REVIEWS_HREF = "https://g.page/r/CQN8HIPUVP1DEBM/review";

export const CLIENT_VALUES: ValueItem[] = [
  {
    "title": "Premium presentation",
    "text": "We design so your business looks as credible online as it is in person — cleaner, sharper, more executive."
  },
  {
    "title": "Clear communication",
    "text": "Straight answers over WhatsApp, not slow ticket queues. You always know what's happening and what's next."
  },
  {
    "title": "Mobile-first delivery",
    "text": "Everything we build is designed and tested for the phones your customers actually use."
  },
  {
    "title": "One partner, many needs",
    "text": "Websites, marketing, accounting, warehousing and inventory, and business solutions coordinated by one team."
  },
  {
    "title": "Realistic timelines",
    "text": "We scope the work, agree it, and deliver — with honest timelines set up front, not vague promises."
  },
  {
    "title": "Ongoing support",
    "text": "Launch is the beginning. We stay available for the changes and questions that come afterwards."
  }
];

export const TESTIMONIAL_FAQS: Faq[] = [
  {
    "question": "Where can I read genuine reviews of MoBiz.mu?",
    "answer": "We invite every client to leave a review on our Google profile — that is the most reliable, verifiable place to read real feedback about working with us."
  },
  {
    "question": "Can you share a client reference?",
    "answer": "Depending on the project and the client's consent, we may be able to arrange a reference relevant to your industry. Just ask us on WhatsApp."
  },
  {
    "question": "What should I expect when working with MoBiz.mu?",
    "answer": "We start by understanding your business, agree a clear scope and timeline, deliver and refine the work, and stay available for support after launch."
  }
];

/* ── Careers ─────────────────────────────────────────────────────────────── */

export const WHY_JOIN: ValueItem[] = [
  {
    "title": "Premium Growth Environment",
    "text": "MoBiz.mu is being shaped into a premium business platform with higher standards of presentation, quality, and execution."
  },
  {
    "title": "Multi-Skill Exposure",
    "text": "Working with MoBiz.mu can expose you to websites, branding, business systems, digital marketing, operations, and client-facing work."
  },
  {
    "title": "Meaningful Work",
    "text": "You will help real businesses in Mauritius improve their image, visibility, structure, and growth potential through better execution."
  },
  {
    "title": "Long-Term Opportunity",
    "text": "We are building for the long term and looking for people who value quality, ambition, and serious business growth."
  }
];

/**
 * Roles Mobiz is open to hearing from. These are standing areas of interest
 * carried from the live site, not confirmed live vacancies — the page is worded
 * accordingly and must stay that way unless real openings are supplied.
 */
export const ROLES: Role[] = [
  {
    "title": "UI / Frontend Designer",
    "type": "Creative / Contract",
    "description": "Work on luxury website interfaces, premium section layouts, refined mobile-first experiences, and executive visual presentation across MoBiz.mu client projects."
  },
  {
    "title": "Digital Marketing Specialist",
    "type": "Marketing / Flexible",
    "description": "Support campaigns, content calendars, SEO direction, ad strategy, brand visibility, and digital growth efforts across premium client brands."
  },
  {
    "title": "Business Support Associate",
    "type": "Operations / Flexible",
    "description": "Assist with quotations, invoices, proposals, client follow-ups, coordination, and the internal structure that helps MoBiz.mu run smoothly."
  }
];

export const CAREER_VALUES: string[] = [
  "Premium thinking and high execution standards",
  "Respect for clean design, clarity, and business quality",
  "Growth mindset and willingness to improve continuously",
  "Strong communication and professional reliability",
  "Attention to detail and polished output",
  "Commitment to helping businesses look and perform better"
];

export const FUTURE_ROLES: string[] = [
  "Branding & Presentation Specialist",
  "For talent who can shape premium decks, proposals, visual identities, and executive business materials.",
  "Content & SEO Strategist",
  "For people who understand search intent, content structure, local visibility, and premium business messaging.",
  "Creative Brand Designer",
  "For professionals who can elevate visual identity, campaign look and feel, and stronger premium communication.",
  "Client Success & Coordination",
  "For structured communicators who can help manage follow-up, workflow clarity, and premium client experience."
];

/* ── About ───────────────────────────────────────────────────────────────── */

export const ABOUT_BLOCKS: ValueItem[] = [
  {
    "title": "Too many suppliers",
    "text": "A web agency here, a bookkeeper there, someone else for print — nobody sees the whole picture, and things fall through the gaps."
  },
  {
    "title": "Presentation that undersells",
    "text": "Good businesses that look smaller than they are online, losing enquiries to competitors with a more credible presence."
  },
  {
    "title": "Operations run on guesswork",
    "text": "Stock, invoices, and paperwork tracked in scattered spreadsheets, so decisions get made on rough estimates instead of real numbers."
  },
  {
    "title": "Digital",
    "text": "Websites, e-commerce, and marketing that make your business easy to find and easy to trust."
  },
  {
    "title": "Financial",
    "text": "Bookkeeping, VAT, and tax filing that keep you organised and compliant with the MRA."
  },
  {
    "title": "Operational",
    "text": "Warehousing and inventory support so you always know what stock you have and where."
  },
  {
    "title": "Business",
    "text": "Plans, decks, branding, and software that help you look established and win work."
  },
  {
    "title": "Understand",
    "text": "We learn your business, customers, and the specific problem to solve."
  },
  {
    "title": "Plan",
    "text": "We agree a clear scope, direction, and priorities before building."
  },
  {
    "title": "Build",
    "text": "We deliver the work and refine the details until it feels premium."
  },
  {
    "title": "Support",
    "text": "We stay available over WhatsApp for the changes that come after launch."
  }
];

/* ── Why us ──────────────────────────────────────────────────────────────── */

export const WHY_US_BLOCKS: ValueItem[] = [
  {
    "title": "One Partner, Many Needs",
    "text": "Websites, marketing, accounting, warehousing and inventory, and business solutions handled through one structured partner instead of five separate suppliers."
  },
  {
    "title": "Built for Mauritius",
    "text": "We work with Mauritian businesses day to day — local context, MRA and VAT realities, and the way customers here actually search and buy."
  },
  {
    "title": "Mobile-First Standards",
    "text": "Most of your visitors are on a phone. Everything we build is designed and tested for real-world use across phones, tablets, and desktops."
  },
  {
    "title": "Growth-Aware, Not Just Pretty",
    "text": "We think beyond design — search visibility, conversion clarity, page speed, and the practical next step that turns a visitor into an enquiry."
  },
  {
    "title": "Website Design & Development",
    "text": "Business websites, e-commerce stores, and web apps built for trust and enquiries — not just good looks."
  },
  {
    "title": "Digital Marketing",
    "text": "SEO, social media, and paid campaigns focused on visibility and measurable growth for Mauritius businesses."
  },
  {
    "title": "Accounting & Tax Returns",
    "text": "Bookkeeping, VAT support, and tax filing that keep your business organised and compliant with the MRA."
  },
  {
    "title": "Warehousing & Inventory",
    "text": "Stock counting, inventory systems, and audits so you always know exactly what stock you have and where."
  },
  {
    "title": "Business Solutions",
    "text": "Business plans, pitch decks, proposals, branding, and software that help you look established and run like it."
  },
  {
    "title": "We Understand Your Business",
    "text": "We start with your services, customers, and market position — and what specifically needs to improve."
  },
  {
    "title": "We Set a Clear Direction",
    "text": "We shape structure, messaging, and visual presentation around your real business priorities."
  },
  {
    "title": "We Build and Refine",
    "text": "We deliver, then polish the details so the final result feels premium, complete, and easy to use."
  },
  {
    "title": "We Support Growth",
    "text": "The goal isn't just launch — it's a stronger presence with better confidence, trust, and performance over time."
  }
];

/*
 * The two arrays above are flat captures of each source page. These named slices
 * restore the original groupings so pages consume meaning, not indexes.
 */

/** /about — the three problems Mobiz was set up to solve. */
export const ABOUT_PROBLEMS: ValueItem[] = ABOUT_BLOCKS.slice(0, 3);
/** /about — the four areas the divisions combine across. */
export const ABOUT_COMBINE: ValueItem[] = ABOUT_BLOCKS.slice(3, 7);
/** /about — how an engagement runs. */
export const ABOUT_STEPS: ValueItem[] = ABOUT_BLOCKS.slice(7);

/** /why-us — the four headline reasons. */
export const WHY_US_REASONS: ValueItem[] = WHY_US_BLOCKS.slice(0, 4);
/** /why-us — the five divisions, described for this page. */
export const WHY_US_SERVICES: ValueItem[] = WHY_US_BLOCKS.slice(4, 9);
/** /why-us — how an engagement runs. */
export const WHY_US_STEPS: ValueItem[] = WHY_US_BLOCKS.slice(9);
