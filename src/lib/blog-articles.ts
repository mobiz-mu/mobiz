/**
 * Blog article bodies.
 *
 * Carried over verbatim from the live site, where this content was embedded in
 * the article route file. Extracting it into a data module keeps the route thin
 * and makes the content reviewable and testable on its own.
 *
 * Do not rewrite these — they are the real published articles.
 */

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ArticleBody = {
  intro: string;
  sections: ArticleSection[];
  readTime: string;
};

export const ARTICLE_BODIES: Record<string, ArticleBody> = {
    "how-mauritian-businesses-can-look-more-premium-online": {
      readTime: "5 min read",
      intro:
        "Many businesses in Mauritius have strong services but still appear average online. In many cases, the issue is not the service itself, but the way the business is presented digitally. A more premium online presence helps create trust faster, build stronger credibility, and improve how clients perceive the company from the very first interaction.",
      sections: [
        {
          title: "Why premium presentation matters",
          paragraphs: [
            "When a website, brand image, or digital presence feels outdated, cluttered, or inconsistent, it can reduce trust even before a potential client makes contact. In contrast, a cleaner and more premium presence helps the business feel more serious, more established, and more reliable.",
            "In Mauritius, where competition is growing and clients increasingly compare businesses online first, the visual and structural quality of a company’s digital presence can have a major influence on perception.",
          ],
        },
        {
          title: "What makes a business look more premium online",
          paragraphs: [
            "A premium online presence is usually built through better website design, stronger content hierarchy, more consistent branding, improved imagery, mobile-friendly execution, and clearer messaging. It is not only about luxury visuals. It is also about clarity, confidence, and the feeling that the business is operating at a higher standard.",
          ],
          bullets: [
            "Cleaner and more executive website layout",
            "Better brand consistency",
            "More premium service presentation",
            "Stronger mobile responsiveness",
            "Sharper trust signals and calls to action",
          ],
        },
        {
          title: "How MoBiz.mu approaches this",
          paragraphs: [
            "At MoBiz.mu, the goal is not to make businesses look flashy for no reason. The goal is to help them look more trustworthy, more premium, and more aligned with serious business growth. That is why design, structure, content, and conversion thinking are all treated together.",
          ],
        },
      ],
    },
    "why-website-design-in-mauritius-now-needs-a-higher-standard": {
      readTime: "5 min read",
      intro:
        "Website design in Mauritius can no longer be treated as a simple online placeholder. Businesses now need websites that create trust, support SEO, feel premium on mobile, and guide visitors more clearly toward action.",
      sections: [
        {
          title: "The market expectation has changed",
          paragraphs: [
            "More people are making their first judgment of a business through its website. If the experience feels slow, generic, weak on mobile, or visually outdated, trust can drop quickly.",
            "A higher standard is no longer a luxury. It is becoming the baseline for businesses that want to appear more credible and competitive.",
          ],
        },
        {
          title: "What a higher standard means",
          paragraphs: [
            "A better website standard means more than visual polish. It includes mobile responsiveness, premium layout quality, clear service architecture, stronger SEO foundations, better copywriting, and more thoughtful conversion paths.",
          ],
          bullets: [
            "Mobile-first user experience",
            "Cleaner premium interface design",
            "Better content hierarchy",
            "Stronger local SEO readiness",
            "Trust-building layout and messaging",
          ],
        },
        {
          title: "Why it matters for Mauritius businesses",
          paragraphs: [
            "In Mauritius, many businesses still compete with websites that do not fully reflect their quality. A more premium website can become a strong differentiator and help the brand look more serious, more modern, and more growth-ready.",
          ],
        },
      ],
    },
    "digital-marketing-in-mauritius-what-businesses-should-focus-on-first": {
      readTime: "6 min read",
      intro:
        "Digital marketing can feel overwhelming when businesses try to do everything at once. In Mauritius, the smartest approach is often to focus first on the channels and foundations that create real visibility and trust.",
      sections: [
        {
          title: "Start with visibility and clarity",
          paragraphs: [
            "Before investing heavily into content volume or paid campaigns, businesses should first make sure their messaging, website, and digital presentation are strong enough to support the traffic they want to attract.",
          ],
        },
        {
          title: "The main priorities",
          paragraphs: [
            "For many businesses, the most important starting points are SEO structure, a premium and mobile-friendly website, clear service presentation, and focused paid campaigns where relevant.",
          ],
          bullets: [
            "SEO foundations and on-page improvements",
            "Clear service messaging",
            "Mobile-ready website experience",
            "Google Ads or Meta Ads where appropriate",
            "Consistent brand-aligned content direction",
          ],
        },
        {
          title: "Build in the right order",
          paragraphs: [
            "A business that improves its website, messaging, and trust signals first often gets more value from later digital marketing efforts. Strong foundations tend to make all later campaigns perform better.",
          ],
        },
      ],
    },
    "accounting-and-tax-support-that-gives-businesses-more-clarity": {
      readTime: "5 min read",
      intro:
        "Accounting and tax support are not only about compliance. They also help businesses become more structured, more confident, and better prepared to make good decisions.",
      sections: [
        {
          title: "Why clarity matters",
          paragraphs: [
            "When records, filing, VAT, payroll, and finance-related documents are better organized, businesses gain more control and more confidence. Without that clarity, operations can feel heavier and more reactive.",
          ],
        },
        {
          title: "Where support makes the biggest difference",
          paragraphs: [
            "For many businesses in Mauritius, accounting support is most valuable when it improves ongoing organization rather than only solving problems at the last minute.",
          ],
          bullets: [
            "Bookkeeping support",
            "VAT assistance",
            "Tax return preparation",
            "Statutory filing support",
            "More organized financial documentation",
          ],
        },
        {
          title: "Business confidence comes from structure",
          paragraphs: [
            "The more structured the financial side of a business becomes, the easier it is to grow with confidence. Clear accounting support does not only reduce friction. It also supports better long-term management.",
          ],
        },
      ],
    },
    "why-logistics-solutions-matter-for-smoother-business-operations": {
      readTime: "5 min read",
      intro:
        "Logistics can quietly shape the overall efficiency of a business. In Mauritius, smoother sourcing, procurement, and operational coordination often make a major difference to daily business performance.",
      sections: [
        {
          title: "Operations need structure",
          paragraphs: [
            "Businesses that depend on products, imports, sourcing, stock movement, or supplier coordination usually benefit when logistics processes become more organized and easier to follow.",
          ],
        },
        {
          title: "Common pressure points",
          paragraphs: [
            "Many operational issues start with weak coordination, unclear sourcing structure, delayed communication, or fragmented process flow.",
          ],
          bullets: [
            "Import and export setup needs",
            "Procurement support",
            "Supplier and sourcing flow",
            "Warehousing coordination",
            "Delivery and movement structure",
          ],
        },
        {
          title: "Why better logistics matters",
          paragraphs: [
            "When operational flow becomes smoother, businesses often gain more reliability, more efficiency, and less friction in day-to-day execution. That creates room for stronger growth and better decision-making.",
          ],
        },
      ],
    },
    "branding-and-business-solutions-that-make-companies-look-established": {
      readTime: "5 min read",
      intro:
        "Branding is often what makes a business feel either ordinary or established. A more premium visual and business presentation can influence trust faster than many companies realize.",
      sections: [
        {
          title: "Branding is more than a logo",
          paragraphs: [
            "A business feels more established when its brand system, proposals, presentations, decks, and communication all work together with consistency and clarity.",
          ],
        },
        {
          title: "Where presentation matters most",
          paragraphs: [
            "Clients and partners often judge a business not only by the offer, but by how professionally it is presented. Branding and business assets create that first layer of confidence.",
          ],
          bullets: [
            "Brand kits and templates",
            "Proposal design",
            "Presentation design",
            "Business plans and pitch decks",
            "Launch materials and premium visual assets",
          ],
        },
        {
          title: "Why this matters in Mauritius",
          paragraphs: [
            "In a market where businesses are increasingly competing for trust and visibility, stronger brand presentation can help a company feel more serious, more premium, and more ready for growth.",
          ],
        },
      ],
    },
    "why-whatsapp-ready-conversion-matters-for-the-mauritius-market": {
      readTime: "4 min read",
      intro:
        "In Mauritius, WhatsApp often plays a central role in how clients inquire, compare, and decide. That is why WhatsApp-ready conversion is not just a convenience. It can be a strategic advantage.",
      sections: [
        {
          title: "Mobile habits shape business conversion",
          paragraphs: [
            "Many users prefer quick contact over long forms or delayed email conversations. Businesses that align with this behavior often feel more accessible and easier to trust.",
          ],
        },
        {
          title: "What WhatsApp-ready conversion means",
          paragraphs: [
            "It means the website, content flow, and calls to action are structured to make inquiry faster and smoother for mobile-first users.",
          ],
          bullets: [
            "Clear WhatsApp call-to-action placement",
            "Faster contact flow",
            "Better mobile friendliness",
            "Reduced friction before inquiry",
            "More local relevance in user journey design",
          ],
        },
        {
          title: "Why it improves trust",
          paragraphs: [
            "When businesses make it easier to reach them in a familiar way, they often feel more responsive and more client-friendly. That can improve both trust and conversion performance.",
          ],
        },
      ],
    },
    "business-growth-becomes-easier-when-systems-work-together": {
      readTime: "5 min read",
      intro:
        "Growth usually becomes more manageable when the business is not relying on disconnected efforts. Stronger systems create stronger consistency, better visibility, and smoother operations.",
      sections: [
        {
          title: "Fragmentation slows growth",
          paragraphs: [
            "When the website, marketing, quotations, finance structure, and operational flow all feel disconnected, the business often works harder than necessary to maintain progress.",
          ],
        },
        {
          title: "What connected systems look like",
          paragraphs: [
            "A stronger business system usually connects digital presentation, lead generation, operational clarity, and internal business processes in a more deliberate way.",
          ],
          bullets: [
            "Website and conversion alignment",
            "Marketing connected to offer clarity",
            "Accounting and business admin structure",
            "Operational support and logistics flow",
            "Clearer long-term business visibility",
          ],
        },
        {
          title: "Why it supports scalability",
          paragraphs: [
            "When systems work together, businesses can make better decisions, reduce friction, and grow with more control. That is often what separates short-term activity from real business progress.",
          ],
        },
      ],
    },
};

/** Fallback used only if a post somehow has no body — keeps the route total. */
export const FALLBACK_ARTICLE: ArticleBody = {
  intro:
    "This article explores a business topic relevant to companies operating in Mauritius.",
  readTime: "4 min read",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "This article explores a premium business topic related to Mauritius and explains why stronger structure, presentation, and business thinking matter more than ever.",
      ],
    },
  ],
};

export function getArticleBody(slug: string): ArticleBody {
  return ARTICLE_BODIES[slug] ?? FALLBACK_ARTICLE;
}
