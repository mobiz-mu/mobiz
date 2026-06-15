// MoBiz.mu — Local SEO engine (Phase 4).
//
// Data-driven generator for city-level service landing pages, e.g.
//   /website-design-port-louis
//   /seo-services-grand-baie
//   /accounting-services-curepipe
//
// Pages are produced from the cartesian product of CITIES x SERVICE_TEMPLATES,
// so adding a city or a service automatically creates fully-formed, schema-rich,
// internally-linked pages — no duplicated route files, no manual sitemap edits.

export type CityServiceKey =
  | "website-design"
  | "seo-services"
  | "accounting-services";

export type City = {
  /** URL fragment, e.g. "port-louis" */
  slug: string;
  /** Display name, e.g. "Port Louis" */
  name: string;
  /** District / region for local copy + schema, e.g. "Port Louis District" */
  region: string;
  /** One-line positioning used in hero subtitles */
  tagline: string;
  /** Neighbourhoods / areas served — used in copy + LocalBusiness schema */
  areas: string[];
  /** Slugs of 2 nearby cities, used for internal linking */
  nearby: string[];
  /** Approx. geo-coordinates for LocalBusiness schema */
  geo: { lat: number; lng: number };
};

export type ServiceTemplate = {
  key: CityServiceKey;
  /** Human label, e.g. "Website Design" */
  label: string;
  /** The Mauritius-wide hub page this local page rolls up to */
  nationalHref: string;
  nationalLabel: string;
  priceLabel: string;
  primaryKeyword: (city: City) => string;
  secondaryKeywords: (city: City) => string[];
  intro: (city: City) => string[];
  features: { title: string; description: string }[];
  benefits: (city: City) => string[];
  process: { title: string; description: string }[];
  faqs: (city: City) => { question: string; answer: string }[];
  whatsappText: (city: City) => string;
};

export type CityServicePageData = {
  slug: string; // e.g. "website-design-port-louis"
  service: ServiceTemplate;
  city: City;
  eyebrow: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  priceLabel: string;
  whatsappText: string;
  introTitle: string;
  introParagraphs: string[];
  features: { title: string; description: string }[];
  benefitsTitle: string;
  benefits: string[];
  processTitle: string;
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  relatedLinks: { title: string; href: string }[];
};

const WHATSAPP_NUMBER = "23055068119";

// ---------------------------------------------------------------------------
// Cities (Phase 4 brief)
// ---------------------------------------------------------------------------

export const cities: City[] = [
  {
    slug: "port-louis",
    name: "Port Louis",
    region: "Port Louis District",
    tagline: "the capital and commercial heart of Mauritius",
    areas: ["Caudan", "Port Louis Central", "Plaine Verte", "Cassis", "Tranquebar"],
    nearby: ["beau-bassin", "rose-hill"],
    geo: { lat: -20.1609, lng: 57.5012 },
  },
  {
    slug: "curepipe",
    name: "Curepipe",
    region: "Plaines Wilhems",
    tagline: "a major highland town and established business centre",
    areas: ["Curepipe Road", "Forest Side", "Eau Coulée", "La Brasserie"],
    nearby: ["vacoas", "quatre-bornes"],
    geo: { lat: -20.3188, lng: 57.5262 },
  },
  {
    slug: "quatre-bornes",
    name: "Quatre Bornes",
    region: "Plaines Wilhems",
    tagline: "the lively retail hub known as the City of Flowers",
    areas: ["St Jean", "Sodnac", "Palma", "La Source"],
    nearby: ["rose-hill", "vacoas"],
    geo: { lat: -20.2654, lng: 57.4791 },
  },
  {
    slug: "vacoas",
    name: "Vacoas",
    region: "Plaines Wilhems",
    tagline: "part of the busy Vacoas-Phoenix conurbation",
    areas: ["Vacoas Centre", "Phoenix", "Glen Park", "Solferino"],
    nearby: ["curepipe", "phoenix"],
    geo: { lat: -20.2981, lng: 57.4936 },
  },
  {
    slug: "rose-hill",
    name: "Rose Hill",
    region: "Plaines Wilhems",
    tagline: "a dense commercial town with strong foot traffic",
    areas: ["Rose Hill Central", "Trefles", "Plaza", "Belle Rose"],
    nearby: ["beau-bassin", "quatre-bornes"],
    geo: { lat: -20.2419, lng: 57.4674 },
  },
  {
    slug: "grand-baie",
    name: "Grand Baie",
    region: "Rivière du Rempart (North)",
    tagline: "the tourism and hospitality capital of the north",
    areas: ["Grand Baie Village", "Pereybère", "La Croisette", "Mont Choisy"],
    nearby: ["port-louis", "flacq"],
    geo: { lat: -20.0136, lng: 57.5802 },
  },
  {
    slug: "beau-bassin",
    name: "Beau Bassin",
    region: "Plaines Wilhems",
    tagline: "a residential and commercial town beside Rose Hill",
    areas: ["Beau Bassin Centre", "Barkly", "Coromandel", "Mont Roches"],
    nearby: ["rose-hill", "port-louis"],
    geo: { lat: -20.2308, lng: 57.4636 },
  },
  {
    slug: "flacq",
    name: "Flacq",
    region: "Flacq (East)",
    tagline: "the main town of the eastern region",
    areas: ["Centre de Flacq", "Belle Mare", "Quatre Cocos", "Lalmatie"],
    nearby: ["grand-baie", "port-louis"],
    geo: { lat: -20.1897, lng: 57.7136 },
  },
  {
    slug: "phoenix",
    name: "Phoenix",
    region: "Plaines Wilhems",
    tagline: "a commercial and light-industrial centre",
    areas: ["Phoenix Centre", "Pellegrin", "Jumbo Phoenix", "Trianon"],
    nearby: ["vacoas", "quatre-bornes"],
    geo: { lat: -20.2667, lng: 57.4978 },
  },
];

const cityBySlug = new Map(cities.map((c) => [c.slug, c]));

// ---------------------------------------------------------------------------
// Service templates
// ---------------------------------------------------------------------------

export const serviceTemplates: Record<CityServiceKey, ServiceTemplate> = {
  "website-design": {
    key: "website-design",
    label: "Website Design",
    nationalHref: "/website-design-mauritius",
    nationalLabel: "Website Design Mauritius",
    priceLabel: "Business websites as from Rs 8,000",
    primaryKeyword: (c) => `website design ${c.name}`,
    secondaryKeywords: (c) => [
      `web design ${c.name}`,
      `website developer ${c.name}`,
      `business website ${c.name}`,
      `web designer near ${c.name}`,
      `website design ${c.region}`,
    ],
    intro: (c) => [
      `Customers in ${c.name} judge your business by your website before they ever call. A slow, dated or hard-to-read site quietly sends enquiries to your competitors — often without you ever knowing.`,
      `MoBiz.mu designs premium, fast and mobile-first websites for businesses across ${c.name} and the wider ${c.region}. We focus on clear messaging, strong calls to action and a clean structure that turns visitors into WhatsApp messages, calls and quote requests.`,
      `Whether you run a shop in ${c.areas[0]}, a service business near ${c.areas[1]}, or you serve clients across ${c.tagline}, we build a site that makes you look established and earns trust on the first scroll.`,
    ],
    features: [
      { title: "Premium custom design", description: "A modern, executive layout built around your brand — not a recycled template." },
      { title: "Mobile-first build", description: "Designed for the phone first, where most Mauritian customers browse and message you." },
      { title: "WhatsApp & call buttons", description: "One-tap WhatsApp, call and direction buttons placed where customers actually convert." },
      { title: "SEO-ready structure", description: "Clean headings, fast loading and proper metadata so Google can rank you locally." },
      { title: "Lead capture", description: "Enquiry and quote forms wired to reach you instantly so no lead goes cold." },
      { title: "Easy to grow", description: "A structure you can extend with new pages, services and locations over time." },
    ],
    benefits: (c) => [
      `Look established to customers searching in ${c.name}`,
      "Convert more visitors into WhatsApp and phone enquiries",
      "Load fast on mobile data and older phones",
      `Rank for "near me" searches across ${c.region}`,
      "Build long-term trust with a professional brand presence",
    ],
    process: [
      { title: "Discovery", description: "We learn your business, customers and goals in a short consultation." },
      { title: "Design", description: "We craft a premium layout and copy structure for your services." },
      { title: "Build", description: "We develop a fast, responsive, SEO-ready site and connect your forms." },
      { title: "Launch & support", description: "We publish, test on real devices and stay available to help you grow." },
    ],
    faqs: (c) => [
      {
        question: `How much does a website cost in ${c.name}?`,
        answer: `Most business websites for clients in ${c.name} start from Rs 8,000. The final price depends on the number of pages, features such as booking or ecommerce, and how much content you need written. We give you a clear quote before any work begins.`,
      },
      {
        question: `Do you meet clients in ${c.name}?`,
        answer: `Yes. We work with businesses across ${c.name} and ${c.region}, both in person where useful and remotely over WhatsApp, call and email so the process stays fast and convenient.`,
      },
      {
        question: "How long does it take to build my website?",
        answer: "A standard business website is typically ready within 1 to 3 weeks once we have your content and approvals. More complex sites such as ecommerce or booking platforms take a little longer.",
      },
      {
        question: "Will my website work well on mobile?",
        answer: "Absolutely. Every site we build is mobile-first, because the majority of Mauritian customers browse and contact businesses from their phones.",
      },
    ],
    whatsappText: (c) =>
      `Hello MoBiz.mu, I want a professional website for my business in ${c.name}.`,
  },

  "seo-services": {
    key: "seo-services",
    label: "SEO Services",
    nationalHref: "/seo-services-mauritius",
    nationalLabel: "SEO Services Mauritius",
    priceLabel: "Local SEO retainers tailored to your goals",
    primaryKeyword: (c) => `SEO services ${c.name}`,
    secondaryKeywords: (c) => [
      `SEO ${c.name}`,
      `local SEO ${c.name}`,
      `Google ranking ${c.name}`,
      `SEO expert ${c.name}`,
      `SEO agency ${c.region}`,
    ],
    intro: (c) => [
      `When someone in ${c.name} searches for what you sell, the businesses on the first page of Google take almost all the calls. If you are not there, you are invisible to ready-to-buy customers.`,
      `MoBiz.mu provides local SEO for businesses in ${c.name} and the surrounding ${c.region}. We optimise your Google Business Profile, build location-relevant pages, fix technical issues and earn the signals Google uses to rank you for "near me" searches.`,
      `From ${c.areas[0]} to ${c.areas[2] ?? c.areas[1]}, we help you show up when local customers are looking — and keep showing up month after month.`,
    ],
    features: [
      { title: "Local keyword strategy", description: "We target the exact terms your customers in the area actually search for." },
      { title: "Google Business Profile", description: "We optimise and maintain your Maps listing for local visibility." },
      { title: "On-page SEO", description: "Titles, headings, content and internal links tuned for ranking and clarity." },
      { title: "Technical SEO", description: "Speed, mobile, indexing and structured data issues identified and fixed." },
      { title: "Local landing pages", description: "Pages built around your services and service areas to capture more searches." },
      { title: "Transparent reporting", description: "Clear monthly updates on rankings, traffic and the enquiries SEO brings in." },
    ],
    benefits: (c) => [
      `Appear when customers in ${c.name} search on Google`,
      `Win more "near me" and ${c.region} searches`,
      "Reduce reliance on paid ads over time",
      "Earn trust through visibility and reviews",
      "Build a compounding, long-term traffic asset",
    ],
    process: [
      { title: "Audit", description: "We assess your current rankings, site health and local presence." },
      { title: "Strategy", description: "We map the keywords and pages that will move the needle for you." },
      { title: "Optimise", description: "We implement on-page, technical and local SEO improvements." },
      { title: "Grow & report", description: "We build momentum each month and report on real results." },
    ],
    faqs: (c) => [
      {
        question: `How long does SEO take to work in ${c.name}?`,
        answer: `Local SEO usually shows early movement within 2 to 3 months, with stronger results building from month 4 onward. Timelines depend on competition in ${c.name} and the current state of your website.`,
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer: "No reputable SEO provider can honestly guarantee a fixed position, because Google controls the rankings. What we do guarantee is a sound, transparent strategy and steady, measurable progress.",
      },
      {
        question: "Is SEO better than paid ads?",
        answer: "They serve different goals. Ads buy instant visibility; SEO builds a lasting asset that keeps generating enquiries without paying per click. Many businesses use both.",
      },
      {
        question: `Can you help if I do not have a website yet?`,
        answer: `Yes. We can design an SEO-ready website for your ${c.name} business first, then run SEO on a foundation built to rank from day one.`,
      },
    ],
    whatsappText: (c) =>
      `Hello MoBiz.mu, I want to rank my business higher on Google in ${c.name}.`,
  },

  "accounting-services": {
    key: "accounting-services",
    label: "Accounting Services",
    nationalHref: "/accounting-services-mauritius",
    nationalLabel: "Accounting Services Mauritius",
    priceLabel: "Accounting packages tailored to your business size",
    primaryKeyword: (c) => `accounting services ${c.name}`,
    secondaryKeywords: (c) => [
      `accountant ${c.name}`,
      `bookkeeping ${c.name}`,
      `VAT filing ${c.name}`,
      `tax returns ${c.name}`,
      `accounting firm ${c.region}`,
    ],
    intro: (c) => [
      `Running a business in ${c.name} is hard enough without falling behind on bookkeeping, VAT and tax deadlines. Late or messy accounts cost you in penalties, stress and missed decisions.`,
      `MoBiz.mu provides reliable accounting support for businesses across ${c.name} and the ${c.region}. We handle bookkeeping, VAT computation and filing, statutory returns and clear monthly figures so you always know where you stand.`,
      `Whether you are a sole trader near ${c.areas[0]} or a growing company serving ${c.tagline}, we keep your accounts accurate, compliant and easy to understand.`,
    ],
    features: [
      { title: "Bookkeeping", description: "Accurate, up-to-date records so your numbers are always ready." },
      { title: "VAT filing", description: "VAT computation and timely returns for eligible businesses." },
      { title: "Tax returns", description: "Income tax and statutory filing prepared and submitted correctly." },
      { title: "Payroll support", description: "Salary, contribution and payslip handling done properly." },
      { title: "Management figures", description: "Clear monthly summaries so you can make confident decisions." },
      { title: "Compliance peace of mind", description: "Deadlines tracked so you avoid penalties and surprises." },
    ],
    benefits: (c) => [
      `Stay compliant with Mauritian tax and VAT rules`,
      "Avoid late-filing penalties and stress",
      "Understand your real profitability each month",
      `Free up time to focus on running your ${c.name} business`,
      "Get a finance partner who answers when you need one",
    ],
    process: [
      { title: "Review", description: "We assess your current records, obligations and deadlines." },
      { title: "Set up", description: "We organise your books and a simple workflow for documents." },
      { title: "Maintain", description: "We keep records current and file VAT and returns on time." },
      { title: "Advise", description: "We share clear figures and guidance as your business grows." },
    ],
    faqs: (c) => [
      {
        question: `Do you offer accounting for small businesses in ${c.name}?`,
        answer: `Yes. We work with sole traders, SMEs and growing companies across ${c.name}, with packages scaled to your size so you only pay for the support you actually need.`,
      },
      {
        question: "Can you handle my VAT filing?",
        answer: "Yes. For VAT-registered businesses we handle VAT computation and timely filing, and we can advise on whether registration applies to you.",
      },
      {
        question: "Do I need to come to your office?",
        answer: "Not necessarily. Many clients share documents digitally over WhatsApp and email, with in-person meetings only when helpful.",
      },
      {
        question: "Will you remind me of deadlines?",
        answer: "Yes. Keeping you ahead of VAT, tax and statutory deadlines is a core part of the service, so you never miss a filing.",
      },
    ],
    whatsappText: (c) =>
      `Hello MoBiz.mu, I need accounting and tax support for my business in ${c.name}.`,
  },
};

const serviceOrder: CityServiceKey[] = [
  "website-design",
  "seo-services",
  "accounting-services",
];

// ---------------------------------------------------------------------------
// Generators
// ---------------------------------------------------------------------------

function buildPage(service: ServiceTemplate, city: City): CityServicePageData {
  const slug = `${service.key}-${city.slug}`;
  const title = `${service.label} in ${city.name}, Mauritius`;
  const subtitle = `MoBiz.mu delivers ${service.label.toLowerCase()} for businesses in ${city.name} — ${city.tagline}. Premium, local and built to bring you more enquiries.`;

  // Internal links: sibling services in the same city, the national hub,
  // and the same service in 2 nearby cities. This builds a strong mesh.
  const siblingLinks = serviceOrder
    .filter((key) => key !== service.key)
    .map((key) => {
      const sib = serviceTemplates[key];
      return { title: `${sib.label} in ${city.name}`, href: `/${key}-${city.slug}` };
    });

  const nearbyLinks = city.nearby
    .map((nslug) => cityBySlug.get(nslug))
    .filter((c): c is City => Boolean(c))
    .map((c) => ({
      title: `${service.label} in ${c.name}`,
      href: `/${service.key}-${c.slug}`,
    }));

  const relatedLinks = [
    ...siblingLinks,
    { title: service.nationalLabel, href: service.nationalHref },
    ...nearbyLinks,
  ];

  return {
    slug,
    service,
    city,
    eyebrow: `${service.label} ${city.name}`,
    title,
    subtitle,
    metaTitle: `${service.label} ${city.name} | MoBiz.mu Mauritius`,
    metaDescription: `${service.label} in ${city.name}, Mauritius by MoBiz.mu. ${service.priceLabel}. Local support for ${city.region} businesses — WhatsApp us for a fast quote.`,
    primaryKeyword: service.primaryKeyword(city),
    secondaryKeywords: service.secondaryKeywords(city),
    priceLabel: service.priceLabel,
    whatsappText: service.whatsappText(city),
    introTitle: `${service.label} built for ${city.name} businesses`,
    introParagraphs: service.intro(city),
    features: service.features,
    benefitsTitle: `Why ${city.name} businesses choose MoBiz.mu`,
    benefits: service.benefits(city),
    processTitle: "How we work",
    process: service.process,
    faqs: service.faqs(city),
    relatedLinks,
  };
}

/** Every generated city-service page (cities x services). */
export const cityServicePages: CityServicePageData[] = cities.flatMap((city) =>
  serviceOrder.map((key) => buildPage(serviceTemplates[key], city))
);

const pageBySlug = new Map(cityServicePages.map((p) => [p.slug, p]));

export function getCityServicePage(slug: string): CityServicePageData | undefined {
  return pageBySlug.get(slug);
}

export const cityServiceSlugs: string[] = cityServicePages.map((p) => p.slug);

/** Sitemap entries so local pages self-register (no manual sitemap edits). */
export const cityServiceSitemapEntries = cityServicePages.map((p) => ({
  path: `/${p.slug}`,
  priority: 0.88,
  changeFrequency: "weekly" as const,
}));

export function buildCityWhatsappUrl(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
