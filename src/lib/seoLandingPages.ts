export type SeoLandingPageKey =
  | "website-design-mauritius"
  | "ecommerce-website-mauritius"
  | "digital-marketing-mauritius"
  | "accounting-services-mauritius"
  | "company-registration-mauritius"
  | "vat-filing-mauritius"
  | "seo-services-mauritius";

export type SeoLandingPageData = {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  priceLabel: string;
  ctaLabel: string;
  ctaHref: string;
  whatsappText: string;
  introTitle: string;
  introParagraphs: string[];
  featuresTitle: string;
  features: {
    title: string;
    description: string;
  }[];
  industriesTitle: string;
  industries: string[];
  processTitle: string;
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    href: string;
  }[];
};

export const seoLandingPages: Record<SeoLandingPageKey, SeoLandingPageData> = {
  "website-design-mauritius": {
    slug: "website-design-mauritius",
    eyebrow: "Website Design Mauritius",
    title: "Professional Website Design in Mauritius",
    subtitle:
      "MoBiz.mu designs premium, fast and mobile-friendly websites for Mauritius businesses that want to look professional, attract clients and grow online.",
    metaTitle:
      "Website Design Mauritius | Professional Websites from Rs 8,000",
    metaDescription:
      "Professional website design in Mauritius by MoBiz.mu. Business websites, landing pages, ecommerce websites and custom platforms from Rs 8,000.",
    primaryKeyword: "website design Mauritius",
    secondaryKeywords: [
      "web design Mauritius",
      "website development Mauritius",
      "business website Mauritius",
      "professional website Mauritius",
      "web designer Mauritius",
    ],
    priceLabel: "Websites as from Rs 8,000",
    ctaLabel: "Request a Website Quote",
    ctaHref: "/contact",
    whatsappText:
      "Hello MoBiz.mu, I want a professional website for my business in Mauritius.",
    introTitle: "Build a website that makes your business look premium",
    introParagraphs: [
      "Your website is often the first impression customers get about your business. A slow, outdated or confusing website can make people lose trust before they even contact you.",
      "At MoBiz.mu, we create modern websites for Mauritius businesses with clear messaging, premium design, fast loading, mobile responsiveness and strong SEO structure.",
      "Whether you need a simple business website, a service website, a booking platform or a custom solution, we help you create a professional online presence that converts visitors into enquiries.",
    ],
    featuresTitle: "What our website design service includes",
    features: [
      {
        title: "Premium custom design",
        description:
          "A clean, modern and executive layout designed around your business, brand and target audience.",
      },
      {
        title: "Mobile responsive pages",
        description:
          "Your website will work smoothly on desktop, tablet, Android and iPhone screens.",
      },
      {
        title: "SEO-ready structure",
        description:
          "We prepare your pages with proper headings, metadata, internal links and Google-friendly structure.",
      },
      {
        title: "WhatsApp and contact integration",
        description:
          "We add clear call-to-action buttons so clients can contact you quickly by WhatsApp, phone or email.",
      },
      {
        title: "Fast loading experience",
        description:
          "We optimize layouts, images and code structure to give users a smoother browsing experience.",
      },
      {
        title: "Business-focused content",
        description:
          "We help present your services clearly so customers understand what you offer and why they should choose you.",
      },
    ],
    industriesTitle: "Websites we can build in Mauritius",
    industries: [
      "Car rental websites",
      "Tour and travel websites",
      "Salon and beauty websites",
      "Restaurant and food business websites",
      "Corporate company websites",
      "Accounting and consulting websites",
      "Real estate and property websites",
      "School and academy websites",
      "Online booking websites",
      "Custom business platforms",
    ],
    processTitle: "Our website design process",
    process: [
      {
        title: "Business discovery",
        description:
          "We understand your business, services, audience, design preference and main website goal.",
      },
      {
        title: "Content and structure",
        description:
          "We plan the website pages, headings, sections, service blocks, calls-to-action and SEO keywords.",
      },
      {
        title: "Design and development",
        description:
          "We build a modern, responsive and premium website using a clean technical structure.",
      },
      {
        title: "Testing and launch",
        description:
          "We test the website across devices, check performance and prepare it for launch.",
      },
    ],
    faqs: [
      {
        question: "How much does website design cost in Mauritius?",
        answer:
          "At MoBiz.mu, professional websites start from Rs 8,000 depending on the number of pages, features, content and custom requirements.",
      },
      {
        question: "Can you build ecommerce websites in Mauritius?",
        answer:
          "Yes. We build ecommerce websites, product catalogues, online stores and WhatsApp-based order systems for Mauritius businesses.",
      },
      {
        question: "Will my website be mobile responsive?",
        answer:
          "Yes. Every MoBiz.mu website is designed to work properly on desktop, tablet and mobile devices.",
      },
      {
        question: "Can you connect the website to WhatsApp?",
        answer:
          "Yes. We can add WhatsApp buttons, enquiry forms, booking forms and contact sections to help customers reach you faster.",
      },
    ],
    relatedServices: [
      { title: "Ecommerce Website Mauritius", href: "/ecommerce-website-mauritius" },
      { title: "SEO Services Mauritius", href: "/seo-services-mauritius" },
      { title: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
    ],
  },

  "ecommerce-website-mauritius": {
    slug: "ecommerce-website-mauritius",
    eyebrow: "Ecommerce Website Mauritius",
    title: "Ecommerce Website Development in Mauritius",
    subtitle:
      "Sell your products online with a premium ecommerce website designed for Mauritius businesses, local customers and mobile-first shopping.",
    metaTitle:
      "Ecommerce Website Mauritius | Online Store Development",
    metaDescription:
      "MoBiz.mu builds ecommerce websites in Mauritius for shops, brands and entrepreneurs. Product catalogues, online stores, WhatsApp orders and payment-ready structures.",
    primaryKeyword: "ecommerce website Mauritius",
    secondaryKeywords: [
      "online store Mauritius",
      "ecommerce development Mauritius",
      "shopping website Mauritius",
      "sell online Mauritius",
      "product catalogue website Mauritius",
    ],
    priceLabel: "Ecommerce websites available on quote",
    ctaLabel: "Request Ecommerce Quote",
    ctaHref: "/contact",
    whatsappText:
      "Hello MoBiz.mu, I want an ecommerce website for my business in Mauritius.",
    introTitle: "Start selling online with a professional ecommerce website",
    introParagraphs: [
      "Customers in Mauritius are searching online before buying. A professional ecommerce website helps your products look trustworthy, organized and easy to order.",
      "MoBiz.mu builds ecommerce websites for local shops, product brands, handmade businesses, importers, wholesalers and growing online stores.",
      "We can create a full online store, a product catalogue, a WhatsApp ordering system, or a custom ecommerce experience depending on your business model.",
    ],
    featuresTitle: "What our ecommerce website service includes",
    features: [
      {
        title: "Product catalogue setup",
        description:
          "Organized product pages with categories, images, descriptions, prices and enquiry options.",
      },
      {
        title: "Mobile shopping experience",
        description:
          "A smooth layout designed for customers browsing from mobile phones.",
      },
      {
        title: "WhatsApp order flow",
        description:
          "Customers can send product enquiries or order details directly to WhatsApp.",
      },
      {
        title: "SEO product structure",
        description:
          "Product and category pages can be structured to help Google understand what you sell.",
      },
      {
        title: "Premium brand design",
        description:
          "Your online store will look clean, professional and aligned with your brand identity.",
      },
      {
        title: "Scalable setup",
        description:
          "We can build from a small catalogue to a larger ecommerce platform depending on your goals.",
      },
    ],
    industriesTitle: "Ecommerce websites we can build",
    industries: [
      "Fashion stores",
      "Beauty and skincare stores",
      "Pottery and handmade product stores",
      "Electronics stores",
      "Home decor stores",
      "Food and grocery stores",
      "Furniture catalogues",
      "Wholesale product catalogues",
      "Gift shops",
      "Local Mauritius online stores",
    ],
    processTitle: "Our ecommerce development process",
    process: [
      {
        title: "Product and business review",
        description:
          "We understand your products, categories, pricing, delivery method and order process.",
      },
      {
        title: "Store structure planning",
        description:
          "We plan categories, product pages, cart flow, WhatsApp flow and customer journey.",
      },
      {
        title: "Design and build",
        description:
          "We create a professional ecommerce interface that makes products easy to browse and order.",
      },
      {
        title: "Launch and optimization",
        description:
          "We test the store, improve loading, check mobile layout and prepare for Google indexing.",
      },
    ],
    faqs: [
      {
        question: "Can MoBiz.mu build an online store in Mauritius?",
        answer:
          "Yes. We build ecommerce websites and product catalogue websites for Mauritius businesses.",
      },
      {
        question: "Can customers order through WhatsApp?",
        answer:
          "Yes. We can create a WhatsApp order flow where product and customer details are sent directly to your business.",
      },
      {
        question: "Can I add products later?",
        answer:
          "Yes. Depending on the system used, we can create a setup where products can be managed and updated.",
      },
      {
        question: "Do you build ecommerce websites for small businesses?",
        answer:
          "Yes. We work with small businesses, local brands, entrepreneurs and growing companies in Mauritius.",
      },
    ],
    relatedServices: [
      { title: "Website Design Mauritius", href: "/website-design-mauritius" },
      { title: "SEO Services Mauritius", href: "/seo-services-mauritius" },
      { title: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
    ],
  },

  "digital-marketing-mauritius": {
    slug: "digital-marketing-mauritius",
    eyebrow: "Digital Marketing Mauritius",
    title: "Digital Marketing Services in Mauritius",
    subtitle:
      "Grow your business online with social media, Google visibility, SEO, content creation and digital campaigns designed for Mauritius audiences.",
    metaTitle:
      "Digital Marketing Mauritius | SEO, Social Media & Google Ads",
    metaDescription:
      "Digital marketing services in Mauritius by MoBiz.mu. Social media management, SEO, Google Ads, content creation, branding and online growth strategies.",
    primaryKeyword: "digital marketing Mauritius",
    secondaryKeywords: [
      "digital marketing agency Mauritius",
      "social media marketing Mauritius",
      "Google Ads Mauritius",
      "SEO Mauritius",
      "online marketing Mauritius",
    ],
    priceLabel: "Digital marketing as from Rs 5,000/month",
    ctaLabel: "Request Marketing Plan",
    ctaHref: "/contact",
    whatsappText:
      "Hello MoBiz.mu, I want digital marketing services for my business in Mauritius.",
    introTitle: "Make your business more visible online",
    introParagraphs: [
      "A good business can still lose customers if people cannot find it online. Digital marketing helps you build visibility, trust and enquiries across the platforms your customers use daily.",
      "MoBiz.mu helps Mauritius businesses with social media content, Google visibility, SEO, campaign planning, branding and lead generation strategies.",
      "We focus on practical marketing that helps your business look professional, communicate clearly and attract better customers.",
    ],
    featuresTitle: "What our digital marketing service includes",
    features: [
      {
        title: "Social media management",
        description:
          "Professional content planning and posting for platforms like Facebook, Instagram and LinkedIn.",
      },
      {
        title: "SEO strategy",
        description:
          "Keyword targeting, page optimization and content planning to improve Google visibility.",
      },
      {
        title: "Google Ads support",
        description:
          "Campaign setup and guidance to help your services appear in front of potential clients.",
      },
      {
        title: "Content creation",
        description:
          "Marketing copy, graphics direction, service posts, offers and promotional content.",
      },
      {
        title: "Brand positioning",
        description:
          "Clear messaging that makes your business look more credible and premium.",
      },
      {
        title: "Lead-focused campaigns",
        description:
          "Marketing designed around enquiries, WhatsApp messages, calls and conversions.",
      },
    ],
    industriesTitle: "Businesses we can promote",
    industries: [
      "Car rental businesses",
      "Tour operators",
      "Beauty salons",
      "Restaurants",
      "Real estate agencies",
      "Accounting firms",
      "Construction companies",
      "Retail stores",
      "Online shops",
      "Professional service providers",
    ],
    processTitle: "Our digital marketing process",
    process: [
      {
        title: "Business audit",
        description:
          "We review your current online presence, offers, competitors and target audience.",
      },
      {
        title: "Strategy planning",
        description:
          "We create a practical marketing direction with keywords, content themes and conversion goals.",
      },
      {
        title: "Content and campaigns",
        description:
          "We prepare content, posts, ads or SEO actions depending on your package.",
      },
      {
        title: "Review and improve",
        description:
          "We track what is working and improve your content, pages and campaign direction over time.",
      },
    ],
    faqs: [
      {
        question: "Does MoBiz.mu offer digital marketing in Mauritius?",
        answer:
          "Yes. MoBiz.mu provides digital marketing services including social media, SEO, content creation and Google visibility support.",
      },
      {
        question: "Can you manage my Facebook and Instagram pages?",
        answer:
          "Yes. We can help plan and manage social media content for your business.",
      },
      {
        question: "Can digital marketing generate leads?",
        answer:
          "Yes, when combined with a strong offer, clear landing page and consistent campaign strategy.",
      },
      {
        question: "Do you also provide website design?",
        answer:
          "Yes. We can combine digital marketing with website design and SEO for stronger results.",
      },
    ],
    relatedServices: [
      { title: "SEO Services Mauritius", href: "/seo-services-mauritius" },
      { title: "Website Design Mauritius", href: "/website-design-mauritius" },
      { title: "Ecommerce Website Mauritius", href: "/ecommerce-website-mauritius" },
    ],
  },

  "accounting-services-mauritius": {
    slug: "accounting-services-mauritius",
    eyebrow: "Accounting Services Mauritius",
    title: "Accounting Services for Businesses in Mauritius",
    subtitle:
      "MoBiz.mu supports Mauritius businesses with bookkeeping, VAT filing, tax returns, payroll, statutory filing and financial administration.",
    metaTitle:
      "Accounting Services Mauritius | Bookkeeping, VAT & Tax Filing",
    metaDescription:
      "Accounting services in Mauritius by MoBiz.mu. Bookkeeping, VAT filing, payroll, tax returns, statutory filing and financial statements for businesses.",
    primaryKeyword: "accounting services Mauritius",
    secondaryKeywords: [
      "bookkeeping Mauritius",
      "VAT filing Mauritius",
      "tax filing Mauritius",
      "payroll services Mauritius",
      "accounting firm Mauritius",
    ],
    priceLabel: "Bookkeeping as from Rs 2,000/month",
    ctaLabel: "Request Accounting Support",
    ctaHref: "/contact",
    whatsappText:
      "Hello MoBiz.mu, I need accounting services for my business in Mauritius.",
    introTitle: "Keep your business accounts clean and compliant",
    introParagraphs: [
      "Managing accounts, tax filing and statutory obligations can become stressful when your business starts growing.",
      "MoBiz.mu helps entrepreneurs and SMEs in Mauritius stay organized with bookkeeping, VAT filing, payroll, tax computation, annual financial statements and business administration support.",
      "Our goal is to help business owners save time, reduce confusion and maintain a more professional financial structure.",
    ],
    featuresTitle: "What our accounting service includes",
    features: [
      {
        title: "Monthly bookkeeping",
        description:
          "Transaction recording and organized bookkeeping support for your business activity.",
      },
      {
        title: "VAT computation and filing",
        description:
          "Support for VAT return preparation and filing based on your business records.",
      },
      {
        title: "Tax computation and filing",
        description:
          "Assistance with tax return preparation and submission requirements.",
      },
      {
        title: "Payroll services",
        description:
          "Payroll preparation for employees with clear monthly calculations.",
      },
      {
        title: "Statutory filing",
        description:
          "Support for required business filings and administrative compliance.",
      },
      {
        title: "Annual financial statements",
        description:
          "Preparation support for annual accounts and financial summaries.",
      },
    ],
    industriesTitle: "Who we support",
    industries: [
      "Sole traders",
      "Small businesses",
      "SMEs",
      "Online shops",
      "Service businesses",
      "Consultants",
      "Contractors",
      "Import and export businesses",
      "Retail businesses",
      "Growing companies",
    ],
    processTitle: "Our accounting support process",
    process: [
      {
        title: "Business review",
        description:
          "We understand your business type, monthly transactions and compliance requirements.",
      },
      {
        title: "Document collection",
        description:
          "We collect or organize invoices, receipts, statements and required financial records.",
      },
      {
        title: "Computation and preparation",
        description:
          "We prepare bookkeeping, VAT, payroll, tax or filing documents based on the selected service.",
      },
      {
        title: "Filing and follow-up",
        description:
          "We assist with submission and keep your business records more organized going forward.",
      },
    ],
    faqs: [
      {
        question: "How much does bookkeeping cost in Mauritius?",
        answer:
          "At MoBiz.mu, monthly bookkeeping starts from Rs 2,000 depending on the number of transactions and business requirements.",
      },
      {
        question: "Do you provide VAT filing in Mauritius?",
        answer:
          "Yes. We provide VAT computation and filing support for eligible Mauritius businesses.",
      },
      {
        question: "Can you help with payroll?",
        answer:
          "Yes. MoBiz.mu provides payroll services for businesses with employees.",
      },
      {
        question: "Can you help sole traders?",
        answer:
          "Yes. We support sole traders, small businesses and companies in Mauritius.",
      },
    ],
    relatedServices: [
      { title: "VAT Filing Mauritius", href: "/vat-filing-mauritius" },
      { title: "Company Registration Mauritius", href: "/company-registration-mauritius" },
      { title: "Website Design Mauritius", href: "/website-design-mauritius" },
    ],
  },

  "company-registration-mauritius": {
    slug: "company-registration-mauritius",
    eyebrow: "Company Registration Mauritius",
    title: "Company Registration Services in Mauritius",
    subtitle:
      "Start your business properly with MoBiz.mu. We assist with company registration, sole trader registration and business setup support in Mauritius.",
    metaTitle:
      "Company Registration Mauritius | Business Setup Services",
    metaDescription:
      "Register your company in Mauritius with MoBiz.mu. Company registration, sole trader registration, business setup, bank account support and compliance guidance.",
    primaryKeyword: "company registration Mauritius",
    secondaryKeywords: [
      "register company Mauritius",
      "business registration Mauritius",
      "sole trader registration Mauritius",
      "start business Mauritius",
      "business setup Mauritius",
    ],
    priceLabel: "Company registration from Rs 12,500",
    ctaLabel: "Start Company Registration",
    ctaHref: "/contact",
    whatsappText:
      "Hello MoBiz.mu, I want to register a company in Mauritius.",
    introTitle: "Register your business with the right structure",
    introParagraphs: [
      "Starting a business in Mauritius is exciting, but the registration process and documents can be confusing if you are doing it for the first time.",
      "MoBiz.mu assists entrepreneurs with company registration, sole trader registration, business setup guidance and related administrative services.",
      "We help you understand the steps clearly so you can start your business with more confidence and professionalism.",
    ],
    featuresTitle: "What our company registration service includes",
    features: [
      {
        title: "Business structure guidance",
        description:
          "We help you understand whether a sole trader or company structure may be suitable for your activity.",
      },
      {
        title: "Company registration support",
        description:
          "Assistance with the registration process and required business information.",
      },
      {
        title: "Sole trader registration support",
        description:
          "Support for individuals who want to register and operate as sole traders.",
      },
      {
        title: "Business documents guidance",
        description:
          "We guide you on the information and documents generally required for registration.",
      },
      {
        title: "Bank account opening support",
        description:
          "We can assist with business bank account opening preparation where required.",
      },
      {
        title: "Post-registration services",
        description:
          "We can also support accounting, tax filing, websites and digital marketing after registration.",
      },
    ],
    industriesTitle: "Businesses we help register",
    industries: [
      "Consulting businesses",
      "Trading businesses",
      "Online stores",
      "Service companies",
      "Import and export businesses",
      "Freelancers",
      "Creative businesses",
      "Construction and contracting businesses",
      "Tourism-related businesses",
      "Local startups",
    ],
    processTitle: "Our registration process",
    process: [
      {
        title: "Initial consultation",
        description:
          "We understand your business activity, preferred structure and registration objective.",
      },
      {
        title: "Information preparation",
        description:
          "We help organize the required details and documents for the registration process.",
      },
      {
        title: "Registration support",
        description:
          "We assist with the company or sole trader registration process.",
      },
      {
        title: "After-registration guidance",
        description:
          "We guide you on next steps such as accounting, bank account, website and marketing.",
      },
    ],
    faqs: [
      {
        question: "How much does company registration cost at MoBiz.mu?",
        answer:
          "Company registration starts from Rs 12,500. Sole trader registration starts from Rs 7,500.",
      },
      {
        question: "Can you help me register as a sole trader?",
        answer:
          "Yes. MoBiz.mu assists with sole trader registration in Mauritius.",
      },
      {
        question: "Can you help after the company is registered?",
        answer:
          "Yes. We can support accounting, tax filing, website design, branding and digital marketing.",
      },
      {
        question: "Do you help with business bank account opening?",
        answer:
          "Yes. MoBiz.mu provides bank account opening support for sole traders and companies.",
      },
    ],
    relatedServices: [
      { title: "Accounting Services Mauritius", href: "/accounting-services-mauritius" },
      { title: "VAT Filing Mauritius", href: "/vat-filing-mauritius" },
      { title: "Website Design Mauritius", href: "/website-design-mauritius" },
    ],
  },

  "vat-filing-mauritius": {
    slug: "vat-filing-mauritius",
    eyebrow: "VAT Filing Mauritius",
    title: "VAT Filing Services in Mauritius",
    subtitle:
      "MoBiz.mu helps Mauritius businesses with VAT computation, VAT return preparation and filing support.",
    metaTitle:
      "VAT Filing Mauritius | VAT Computation & Return Support",
    metaDescription:
      "VAT filing services in Mauritius by MoBiz.mu. VAT computation, VAT return preparation and filing support for eligible businesses.",
    primaryKeyword: "VAT filing Mauritius",
    secondaryKeywords: [
      "VAT return Mauritius",
      "VAT computation Mauritius",
      "VAT services Mauritius",
      "tax filing Mauritius",
      "accounting Mauritius",
    ],
    priceLabel: "VAT filing from Rs 5,000/return",
    ctaLabel: "Request VAT Filing Support",
    ctaHref: "/contact",
    whatsappText:
      "Hello MoBiz.mu, I need VAT filing support for my business in Mauritius.",
    introTitle: "Prepare and file your VAT with more confidence",
    introParagraphs: [
      "VAT filing requires accurate records, proper computation and timely submission. Mistakes or disorganized documents can create unnecessary stress for business owners.",
      "MoBiz.mu supports Mauritius businesses with VAT computation and filing assistance based on their sales, purchases and accounting records.",
      "We help you keep the process clearer, more structured and easier to manage.",
    ],
    featuresTitle: "What our VAT filing service includes",
    features: [
      {
        title: "VAT record review",
        description:
          "We review your available sales, purchases and supporting business records.",
      },
      {
        title: "VAT computation",
        description:
          "We calculate VAT based on your business information and applicable records.",
      },
      {
        title: "VAT return preparation",
        description:
          "We prepare the required VAT return information for filing.",
      },
      {
        title: "Filing support",
        description:
          "We assist with the VAT filing process according to your business requirements.",
      },
      {
        title: "Document organization",
        description:
          "We help organize supporting records so your filing process is cleaner.",
      },
      {
        title: "Accounting support",
        description:
          "We can combine VAT filing with bookkeeping and tax filing support.",
      },
    ],
    industriesTitle: "VAT support for businesses such as",
    industries: [
      "Retail businesses",
      "Service companies",
      "Import businesses",
      "Online stores",
      "Consultants",
      "Contractors",
      "Trading businesses",
      "Hospitality businesses",
      "Professional service providers",
      "Growing SMEs",
    ],
    processTitle: "Our VAT filing process",
    process: [
      {
        title: "Collect records",
        description:
          "We collect your sales, purchase invoices and supporting financial documents.",
      },
      {
        title: "Review and compute",
        description:
          "We review the records and compute VAT figures based on the available information.",
      },
      {
        title: "Prepare return",
        description:
          "We prepare the VAT return details clearly for filing.",
      },
      {
        title: "Submit and organize",
        description:
          "We assist with filing and help keep your records organized for future periods.",
      },
    ],
    faqs: [
      {
        question: "Does MoBiz.mu provide VAT filing in Mauritius?",
        answer:
          "Yes. MoBiz.mu provides VAT computation and filing support for Mauritius businesses.",
      },
      {
        question: "How much does VAT filing cost?",
        answer:
          "VAT filing starts from Rs 5,000 per return depending on your business records and requirements.",
      },
      {
        question: "Can you also do bookkeeping?",
        answer:
          "Yes. We can combine VAT filing with monthly bookkeeping services.",
      },
      {
        question: "Can you help organize my invoices?",
        answer:
          "Yes. We can help organize your financial records for easier accounting and VAT filing.",
      },
    ],
    relatedServices: [
      { title: "Accounting Services Mauritius", href: "/accounting-services-mauritius" },
      { title: "Company Registration Mauritius", href: "/company-registration-mauritius" },
      { title: "SEO Services Mauritius", href: "/seo-services-mauritius" },
    ],
  },

  "seo-services-mauritius": {
    slug: "seo-services-mauritius",
    eyebrow: "SEO Services Mauritius",
    title: "SEO Services in Mauritius",
    subtitle:
      "Improve your Google visibility with SEO strategy, technical optimization, content planning and local search support for Mauritius businesses.",
    metaTitle:
      "SEO Services Mauritius | Google Ranking & Local SEO",
    metaDescription:
      "SEO services in Mauritius by MoBiz.mu. Technical SEO, local SEO, keyword pages, content strategy and Google Search Console setup for businesses.",
    primaryKeyword: "SEO services Mauritius",
    secondaryKeywords: [
      "SEO Mauritius",
      "Google ranking Mauritius",
      "local SEO Mauritius",
      "website SEO Mauritius",
      "search engine optimization Mauritius",
    ],
    priceLabel: "SEO support available monthly or one-time",
    ctaLabel: "Request SEO Audit",
    ctaHref: "/contact",
    whatsappText:
      "Hello MoBiz.mu, I want SEO services to improve my Google ranking in Mauritius.",
    introTitle: "Help customers find your business on Google",
    introParagraphs: [
      "A beautiful website is not enough if customers cannot find it. SEO helps your website become more visible for the services people search for on Google.",
      "MoBiz.mu provides SEO services for Mauritius businesses, including technical SEO, keyword research, content planning, service page optimization and Google Search Console setup.",
      "We focus on building a strong foundation so your business has a better chance of ranking for relevant Mauritius searches.",
    ],
    featuresTitle: "What our SEO service includes",
    features: [
      {
        title: "SEO audit",
        description:
          "We review your website structure, pages, metadata, speed, content and indexing setup.",
      },
      {
        title: "Keyword research",
        description:
          "We identify the search terms your customers may use in Mauritius.",
      },
      {
        title: "On-page SEO",
        description:
          "We optimize page titles, descriptions, headings, internal links and content structure.",
      },
      {
        title: "Technical SEO",
        description:
          "We improve sitemap, robots, structured data, canonical setup and crawlability.",
      },
      {
        title: "Local SEO",
        description:
          "We optimize for Mauritius-specific searches and local business visibility.",
      },
      {
        title: "SEO content strategy",
        description:
          "We plan landing pages and blog topics that can help attract targeted search traffic.",
      },
    ],
    industriesTitle: "SEO for Mauritius businesses",
    industries: [
      "Website design companies",
      "Car rental businesses",
      "Tourism businesses",
      "Accounting firms",
      "Online stores",
      "Real estate agencies",
      "Beauty salons",
      "Schools and academies",
      "Consultants",
      "Local service providers",
    ],
    processTitle: "Our SEO process",
    process: [
      {
        title: "SEO audit",
        description:
          "We check your current Google visibility, website structure and technical setup.",
      },
      {
        title: "Keyword mapping",
        description:
          "We map priority keywords to the correct pages or create new landing page opportunities.",
      },
      {
        title: "Optimization",
        description:
          "We improve your metadata, content, headings, internal links, schema and sitemap.",
      },
      {
        title: "Content growth",
        description:
          "We build ranking pages and blog content to increase search visibility over time.",
      },
    ],
    faqs: [
      {
        question: "Can MoBiz.mu help my website rank on Google?",
        answer:
          "Yes. We can improve your SEO foundation, create ranking pages and help your site become more visible for relevant Mauritius searches.",
      },
      {
        question: "Can SEO guarantee first page ranking?",
        answer:
          "No honest SEO provider can guarantee instant first page ranking, but strong technical SEO, content, local SEO and backlinks can greatly improve your chances.",
      },
      {
        question: "Do you set up Google Search Console?",
        answer:
          "Yes. We can help set up Google Search Console, submit your sitemap and request indexing for important pages.",
      },
      {
        question: "Do you offer SEO with website design?",
        answer:
          "Yes. We can build websites with SEO structure from the beginning.",
      },
    ],
    relatedServices: [
      { title: "Website Design Mauritius", href: "/website-design-mauritius" },
      { title: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
      { title: "Ecommerce Website Mauritius", href: "/ecommerce-website-mauritius" },
    ],
  },
};