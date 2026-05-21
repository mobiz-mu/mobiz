export type BusinessSeoPageKey =
  | "car-rental-website-mauritius"
  | "booking-website-mauritius"
  | "tour-operator-website-mauritius"
  | "hotel-website-mauritius"
  | "villa-booking-website-mauritius"
  | "real-estate-website-mauritius"
  | "restaurant-website-mauritius"
  | "salon-website-mauritius"
  | "doctor-clinic-website-mauritius"
  | "school-website-mauritius"
  | "construction-website-mauritius"
  | "accounting-firm-website-mauritius"
  | "law-firm-website-mauritius"
  | "ecommerce-store-mauritius"
  | "custom-website-mauritius"
  | "web-application-development-mauritius"
  | "accounting-software-mauritius"
  | "inventory-management-system-mauritius"
  | "stock-management-system-mauritius"
  | "crm-software-mauritius"
  | "booking-system-mauritius"
  | "invoice-software-mauritius";

export type BusinessSeoPageData = {
  slug: BusinessSeoPageKey;
  eyebrow: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  priceLabel: string;
  heroBullets: string[];
  overviewTitle: string;
  overviewParagraphs: string[];
  featuresTitle: string;
  features: {
    title: string;
    description: string;
  }[];
  benefitsTitle: string;
  benefits: string[];
  processTitle: string;
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedLinks: {
    title: string;
    href: string;
  }[];
};

const commonRelatedLinks = [
  { title: "Website Design Mauritius", href: "/website-design-mauritius" },
  { title: "Ecommerce Website Mauritius", href: "/ecommerce-website-mauritius" },
  { title: "SEO Services Mauritius", href: "/seo-services-mauritius" },
  { title: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
];

export const businessSeoPages: Record<BusinessSeoPageKey, BusinessSeoPageData> = {
  "car-rental-website-mauritius": {
    slug: "car-rental-website-mauritius",
    eyebrow: "Car Rental Website Mauritius",
    title: "Car Rental Website Design in Mauritius",
    subtitle:
      "MoBiz.mu builds premium car rental websites with vehicle listings, booking enquiry forms, airport transfer options, WhatsApp integration and mobile-first design.",
    metaTitle:
      "Car Rental Website Mauritius | Online Booking & WhatsApp Integration | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds car rental websites in Mauritius with vehicle listings, booking forms, airport transfer pages, WhatsApp enquiries and SEO-ready design.",
    primaryKeyword: "car rental website Mauritius",
    secondaryKeywords: [
      "car rental booking website Mauritius",
      "vehicle rental website Mauritius",
      "airport transfer website Mauritius",
      "car hire website Mauritius",
      "rental booking system Mauritius",
    ],
    priceLabel: "Car rental websites from Rs 18,000 depending on features",
    heroBullets: [
      "Vehicle model listing pages",
      "WhatsApp booking enquiries",
      "Airport transfer and rental packages",
      "Mobile-friendly design for tourists and local clients",
    ],
    overviewTitle: "Turn your car rental business into a professional booking platform",
    overviewParagraphs: [
      "A car rental business needs more than a simple Facebook page. Customers want to see your vehicles, compare options, check rental conditions and contact you quickly.",
      "MoBiz.mu creates car rental websites in Mauritius that help your fleet look professional, organized and easy to book.",
      "We can include vehicle pages, daily and weekly rental enquiry, airport transfer sections, pickup and drop-off details, WhatsApp redirection and SEO structure for car rental searches.",
    ],
    featuresTitle: "What we can include in your car rental website",
    features: [
      {
        title: "Vehicle catalogue",
        description:
          "Show car models, images, seats, transmission, luggage capacity and rental details clearly.",
      },
      {
        title: "Booking enquiry form",
        description:
          "Capture pickup date, return date, location, vehicle preference and customer contact details.",
      },
      {
        title: "WhatsApp integration",
        description:
          "Redirect booking queries directly to WhatsApp with customer details included.",
      },
      {
        title: "Airport transfer pages",
        description:
          "Promote airport pickup, hotel transfers and custom transfer packages.",
      },
      {
        title: "SEO-ready structure",
        description:
          "Pages can be structured around car rental Mauritius, airport transfer and vehicle rental keywords.",
      },
      {
        title: "Mobile-first layout",
        description:
          "Designed for tourists and clients browsing quickly from mobile devices.",
      },
    ],
    benefitsTitle: "Why car rental companies choose this type of website",
    benefits: [
      "Look more professional than basic social media pages",
      "Receive clearer booking enquiries",
      "Promote your fleet and rental packages better",
      "Improve trust with tourists and local clients",
      "Support Google visibility for car rental searches",
      "Connect enquiries directly to WhatsApp",
    ],
    processTitle: "Our car rental website process",
    process: [
      {
        title: "Fleet and business review",
        description:
          "We understand your vehicles, rental terms, pickup locations and booking flow.",
      },
      {
        title: "Website structure",
        description:
          "We plan vehicle pages, booking sections, WhatsApp flow and SEO sections.",
      },
      {
        title: "Design and development",
        description:
          "We build a premium, mobile-friendly website for your car rental business.",
      },
      {
        title: "Launch and SEO setup",
        description:
          "We prepare the website for indexing, enquiries and customer use.",
      },
    ],
    faqs: [
      {
        question: "Can MoBiz.mu build a car rental website in Mauritius?",
        answer:
          "Yes. We build car rental websites with vehicle listings, booking enquiries, WhatsApp integration and SEO-ready structure.",
      },
      {
        question: "Can customers book through WhatsApp?",
        answer:
          "Yes. We can create a WhatsApp booking enquiry flow with rental details included.",
      },
      {
        question: "Can I show different car models?",
        answer:
          "Yes. We can create vehicle listing cards and individual car detail sections.",
      },
      {
        question: "Can you include airport transfer services?",
        answer:
          "Yes. Airport transfer and pickup/drop-off services can be promoted on the website.",
      },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "booking-website-mauritius": {
    slug: "booking-website-mauritius",
    eyebrow: "Booking Website Mauritius",
    title: "Booking Website Development in Mauritius",
    subtitle:
      "MoBiz.mu creates booking websites for service businesses, rentals, tours, hotels, salons, clinics and appointment-based companies in Mauritius.",
    metaTitle:
      "Booking Website Mauritius | Online Booking Systems for Businesses | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds booking websites in Mauritius for car rentals, tours, hotels, villas, salons, clinics and service businesses with enquiry forms and WhatsApp integration.",
    primaryKeyword: "booking website Mauritius",
    secondaryKeywords: [
      "online booking system Mauritius",
      "appointment website Mauritius",
      "reservation website Mauritius",
      "booking platform Mauritius",
      "service booking website Mauritius",
    ],
    priceLabel: "Booking websites available on quote",
    heroBullets: [
      "Online enquiry and reservation forms",
      "WhatsApp booking flow",
      "Service, date and time selection",
      "Suitable for rentals, tours, salons, clinics and hotels",
    ],
    overviewTitle: "Make it easier for customers to request bookings online",
    overviewParagraphs: [
      "Customers want fast and simple booking experiences. If they cannot easily request a booking, they may move to another provider.",
      "MoBiz.mu builds booking websites that help businesses collect customer details, preferred dates, services and enquiries in a clean and professional way.",
      "Your booking website can redirect to WhatsApp, collect form submissions, showcase services and improve your online credibility.",
    ],
    featuresTitle: "What we can include in your booking website",
    features: [
      {
        title: "Booking enquiry forms",
        description:
          "Collect name, phone, email, date, time, service type and special requests.",
      },
      {
        title: "Service pages",
        description:
          "Present each bookable service with details, images, prices and conditions.",
      },
      {
        title: "WhatsApp redirection",
        description:
          "Send booking enquiries directly to your WhatsApp with a structured message.",
      },
      {
        title: "Mobile responsive design",
        description:
          "Give customers a smooth booking experience from any device.",
      },
      {
        title: "SEO landing structure",
        description:
          "Target searches around bookings, reservations and appointments in Mauritius.",
      },
      {
        title: "Premium trust sections",
        description:
          "Add testimonials, FAQs, process, location and business credibility sections.",
      },
    ],
    benefitsTitle: "Why a booking website helps your business",
    benefits: [
      "Reduce messy back-and-forth messages",
      "Collect clearer booking details",
      "Look more professional online",
      "Help customers understand your services",
      "Improve local Google visibility",
      "Increase enquiries from mobile users",
    ],
    processTitle: "Our booking website process",
    process: [
      {
        title: "Booking flow planning",
        description:
          "We map how customers should request bookings and what details you need.",
      },
      {
        title: "Content structure",
        description:
          "We organize your services, packages, pricing and booking conditions.",
      },
      {
        title: "Design and form setup",
        description:
          "We build the website sections and booking enquiry flow.",
      },
      {
        title: "Testing and launch",
        description:
          "We test the booking process on mobile, tablet and desktop before launch.",
      },
    ],
    faqs: [
      {
        question: "Can you build an online booking website in Mauritius?",
        answer:
          "Yes. MoBiz.mu builds booking websites for many industries, including rentals, tours, hotels, salons and clinics.",
      },
      {
        question: "Can booking requests go to WhatsApp?",
        answer:
          "Yes. We can redirect booking enquiries to WhatsApp with structured details.",
      },
      {
        question: "Can the website collect customer details?",
        answer:
          "Yes. We can add forms to collect booking details and customer contact information.",
      },
      {
        question: "Is this suitable for small businesses?",
        answer:
          "Yes. Booking websites are useful for small and growing businesses that want more organized enquiries.",
      },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "tour-operator-website-mauritius": {
    slug: "tour-operator-website-mauritius",
    eyebrow: "Tour Operator Website Mauritius",
    title: "Tour Operator Website Design in Mauritius",
    subtitle:
      "Promote tours, excursions, packages and travel experiences with a premium website built for Mauritius tourism businesses.",
    metaTitle:
      "Tour Operator Website Mauritius | Tours, Packages & Booking Websites | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds tour operator websites in Mauritius with tour pages, package listings, booking enquiry forms, WhatsApp integration and SEO structure.",
    primaryKeyword: "tour operator website Mauritius",
    secondaryKeywords: [
      "tour website Mauritius",
      "excursion website Mauritius",
      "travel agency website Mauritius",
      "tour booking website Mauritius",
      "Mauritius tours website",
    ],
    priceLabel: "Tour websites available on quote",
    heroBullets: [
      "Tour and excursion pages",
      "Package enquiry forms",
      "WhatsApp booking integration",
      "SEO structure for tourism searches",
    ],
    overviewTitle: "Showcase your Mauritius tours with a stronger digital presence",
    overviewParagraphs: [
      "Tour operators need a website that inspires trust, presents packages clearly and makes booking enquiries easy.",
      "MoBiz.mu creates tourism websites for Mauritius-based tour operators, excursion providers, travel agents and activity businesses.",
      "Your website can include tour detail pages, galleries, itinerary sections, prices, FAQs, WhatsApp enquiries and local SEO structure.",
    ],
    featuresTitle: "What we can include in your tour website",
    features: [
      {
        title: "Tour package pages",
        description:
          "Display each tour with itinerary, duration, price, inclusions and images.",
      },
      {
        title: "Booking enquiry flow",
        description:
          "Collect preferred date, number of guests, package choice and contact details.",
      },
      {
        title: "Gallery sections",
        description:
          "Showcase beautiful images from tours, beaches, activities and attractions.",
      },
      {
        title: "WhatsApp integration",
        description:
          "Allow customers to enquire or book directly through WhatsApp.",
      },
      {
        title: "Review and trust sections",
        description:
          "Present testimonials, ratings and reasons to choose your tour business.",
      },
      {
        title: "Tourism SEO structure",
        description:
          "Target keywords around Mauritius tours, excursions and activities.",
      },
    ],
    benefitsTitle: "Benefits for tour operators",
    benefits: [
      "Present tours more professionally",
      "Increase enquiries from tourists",
      "Make packages easier to understand",
      "Build trust before customers contact you",
      "Improve Google visibility for tourism searches",
      "Connect bookings directly to WhatsApp",
    ],
    processTitle: "Our tour website process",
    process: [
      {
        title: "Tour review",
        description:
          "We review your packages, pricing, itineraries and target customers.",
      },
      {
        title: "Page planning",
        description:
          "We plan tour pages, booking flow, gallery sections and trust content.",
      },
      {
        title: "Website build",
        description:
          "We build a premium, mobile-friendly tourism website.",
      },
      {
        title: "SEO launch",
        description:
          "We prepare pages for search visibility and customer enquiries.",
      },
    ],
    faqs: [
      {
        question: "Can you build a tour operator website in Mauritius?",
        answer:
          "Yes. MoBiz.mu builds websites for tour operators, travel agencies and excursion providers.",
      },
      {
        question: "Can I show tour packages?",
        answer:
          "Yes. We can create dedicated tour pages with itinerary, images, prices and enquiry buttons.",
      },
      {
        question: "Can customers enquire by WhatsApp?",
        answer:
          "Yes. WhatsApp enquiry buttons can be included throughout the website.",
      },
      {
        question: "Can this help with Google ranking?",
        answer:
          "A structured website with strong content and SEO pages can improve your visibility over time.",
      },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "hotel-website-mauritius": {
    slug: "hotel-website-mauritius",
    eyebrow: "Hotel Website Mauritius",
    title: "Hotel Website Design in Mauritius",
    subtitle:
      "MoBiz.mu builds elegant hotel websites with rooms, offers, booking enquiries, galleries, location sections and premium hospitality presentation.",
    metaTitle:
      "Hotel Website Mauritius | Rooms, Offers & Booking Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu creates hotel websites in Mauritius with room pages, booking enquiry forms, galleries, offers, WhatsApp contact and mobile-friendly design.",
    primaryKeyword: "hotel website Mauritius",
    secondaryKeywords: [
      "hotel booking website Mauritius",
      "resort website Mauritius",
      "guest house website Mauritius",
      "hospitality website Mauritius",
      "room booking website Mauritius",
    ],
    priceLabel: "Hotel websites available on quote",
    heroBullets: [
      "Room and suite pages",
      "Booking enquiry forms",
      "Gallery and location sections",
      "Premium hospitality design",
    ],
    overviewTitle: "Create a premium online presence for your hotel or guest house",
    overviewParagraphs: [
      "A hotel website should create confidence before a guest makes an enquiry. It should show rooms, facilities, location, offers and booking options clearly.",
      "MoBiz.mu designs hotel and hospitality websites for businesses in Mauritius that want a professional and trustworthy digital image.",
      "We can include room pages, offers, gallery sections, nearby attractions, booking enquiry forms and WhatsApp contact.",
    ],
    featuresTitle: "What we can include in your hotel website",
    features: [
      { title: "Room pages", description: "Show room types, amenities, prices, images and booking options." },
      { title: "Booking enquiry forms", description: "Collect guest dates, number of people, room preference and contact details." },
      { title: "Gallery sections", description: "Show hotel rooms, pool, restaurant, beach, views and facilities." },
      { title: "Offers and packages", description: "Promote stay packages, seasonal offers and special deals." },
      { title: "Location and map", description: "Help guests understand where you are located and nearby attractions." },
      { title: "Mobile hospitality design", description: "Designed for travellers browsing from mobile devices." },
    ],
    benefitsTitle: "Why hotels need a strong website",
    benefits: [
      "Increase direct enquiries",
      "Show rooms and facilities professionally",
      "Reduce dependence on third-party platforms",
      "Build stronger trust with guests",
      "Promote offers clearly",
      "Improve search visibility for hotel-related terms",
    ],
    processTitle: "Our hotel website process",
    process: [
      { title: "Hospitality review", description: "We understand your rooms, facilities, offers and target guests." },
      { title: "Content planning", description: "We organize room pages, booking flow, gallery and trust sections." },
      { title: "Design and build", description: "We create a premium hotel website experience." },
      { title: "Launch support", description: "We test mobile responsiveness, enquiry forms and SEO basics." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build hotel websites?", answer: "Yes. We build websites for hotels, guest houses, villas and hospitality businesses." },
      { question: "Can guests request bookings?", answer: "Yes. We can add booking enquiry forms and WhatsApp contact options." },
      { question: "Can I show rooms and packages?", answer: "Yes. Room pages, package sections and offer blocks can be included." },
      { question: "Is the website mobile-friendly?", answer: "Yes. The website will be built for mobile, tablet and desktop screens." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "villa-booking-website-mauritius": {
    slug: "villa-booking-website-mauritius",
    eyebrow: "Villa Booking Website Mauritius",
    title: "Villa Booking Website Design in Mauritius",
    subtitle:
      "Promote villas, holiday rentals and premium stays with a professional booking website designed for direct enquiries.",
    metaTitle:
      "Villa Booking Website Mauritius | Holiday Rental Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds villa booking websites in Mauritius with property galleries, availability enquiries, WhatsApp booking and premium rental presentation.",
    primaryKeyword: "villa booking website Mauritius",
    secondaryKeywords: [
      "holiday rental website Mauritius",
      "villa rental website Mauritius",
      "Airbnb style website Mauritius",
      "property booking website Mauritius",
      "vacation rental website Mauritius",
    ],
    priceLabel: "Villa booking websites available on quote",
    heroBullets: [
      "Villa gallery and details",
      "Availability enquiry forms",
      "WhatsApp booking flow",
      "Premium holiday rental presentation",
    ],
    overviewTitle: "Get more direct villa booking enquiries",
    overviewParagraphs: [
      "Villa owners and property managers can increase direct enquiries with a professional website that presents properties beautifully.",
      "MoBiz.mu builds villa booking websites with property details, galleries, amenities, location, enquiry forms and WhatsApp booking buttons.",
      "This helps your rental look more premium and gives potential guests a clear way to contact you.",
    ],
    featuresTitle: "What we can include in your villa booking website",
    features: [
      { title: "Property gallery", description: "Show bedrooms, pool, kitchen, exterior, views and facilities." },
      { title: "Amenities section", description: "List Wi-Fi, air conditioning, pool, parking, kitchen and other features." },
      { title: "Availability enquiry", description: "Collect preferred dates, guests and customer details." },
      { title: "WhatsApp booking", description: "Send booking enquiries directly to your WhatsApp." },
      { title: "Location section", description: "Show the area, nearby beaches, attractions and map details." },
      { title: "SEO-ready pages", description: "Structure content around villa rental and holiday rental searches in Mauritius." },
    ],
    benefitsTitle: "Benefits for villa owners",
    benefits: [
      "Increase direct enquiries",
      "Present the property professionally",
      "Reduce reliance on marketplace platforms",
      "Build more trust with guests",
      "Promote premium features clearly",
      "Improve visibility for rental searches",
    ],
    processTitle: "Our villa website process",
    process: [
      { title: "Property review", description: "We understand your villa, location, features and booking process." },
      { title: "Page structure", description: "We plan gallery, amenities, enquiry flow and location sections." },
      { title: "Website design", description: "We design a premium property booking experience." },
      { title: "Launch", description: "We test enquiries, mobile layout and SEO essentials." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a villa booking website?", answer: "Yes. We build villa and holiday rental websites for Mauritius properties." },
      { question: "Can guests enquire through WhatsApp?", answer: "Yes. WhatsApp booking enquiries can be included." },
      { question: "Can I show property photos?", answer: "Yes. Gallery sections are an important part of the website." },
      { question: "Can the website work like Airbnb?", answer: "We can create an Airbnb-style property presentation and enquiry flow depending on your needs." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "real-estate-website-mauritius": {
    slug: "real-estate-website-mauritius",
    eyebrow: "Real Estate Website Mauritius",
    title: "Real Estate Website Design in Mauritius",
    subtitle:
      "MoBiz.mu creates real estate websites with property listings, enquiry forms, agent sections, gallery pages and SEO-ready property presentation.",
    metaTitle:
      "Real Estate Website Mauritius | Property Listing Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds real estate websites in Mauritius with property listings, gallery pages, enquiry forms, WhatsApp contact and SEO-ready structure.",
    primaryKeyword: "real estate website Mauritius",
    secondaryKeywords: [
      "property website Mauritius",
      "real estate agency website Mauritius",
      "property listing website Mauritius",
      "house for sale website Mauritius",
      "rental property website Mauritius",
    ],
    priceLabel: "Real estate websites available on quote",
    heroBullets: [
      "Property listings",
      "Gallery and location sections",
      "WhatsApp enquiry flow",
      "SEO-ready property pages",
    ],
    overviewTitle: "Present properties professionally and generate better enquiries",
    overviewParagraphs: [
      "Real estate clients want to view properties, images, locations and details before contacting an agency.",
      "MoBiz.mu builds real estate websites in Mauritius that help property businesses showcase listings clearly and professionally.",
      "Your website can include property cards, detail pages, enquiry forms, WhatsApp buttons, map sections and SEO content.",
    ],
    featuresTitle: "What we can include in your real estate website",
    features: [
      { title: "Property listings", description: "Show properties for sale, rent or investment in a clean layout." },
      { title: "Property detail pages", description: "Add images, price, location, bedrooms, bathrooms and property features." },
      { title: "Search-ready structure", description: "Organize property categories, locations and listing types." },
      { title: "WhatsApp enquiry", description: "Let visitors enquire about properties directly through WhatsApp." },
      { title: "Agent or agency section", description: "Present your team, credibility and real estate expertise." },
      { title: "SEO support", description: "Create keyword-focused content for Mauritius property searches." },
    ],
    benefitsTitle: "Benefits for real estate businesses",
    benefits: [
      "Show properties more professionally",
      "Generate clearer buyer and renter enquiries",
      "Improve trust with potential clients",
      "Promote your agency brand",
      "Support Google visibility",
      "Connect leads directly to WhatsApp",
    ],
    processTitle: "Our real estate website process",
    process: [
      { title: "Agency review", description: "We understand your property types, locations and enquiry process." },
      { title: "Listing structure", description: "We plan property listings, detail pages and contact flow." },
      { title: "Design and build", description: "We build a premium property website." },
      { title: "Launch and optimize", description: "We test mobile experience, enquiry flow and SEO setup." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a real estate website?", answer: "Yes. We build property listing websites for real estate businesses in Mauritius." },
      { question: "Can I add property listings?", answer: "Yes. We can structure property listing cards and detail pages." },
      { question: "Can clients contact through WhatsApp?", answer: "Yes. WhatsApp enquiry buttons can be included on property pages." },
      { question: "Can the website support SEO?", answer: "Yes. The site can be structured for property-related Mauritius searches." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "restaurant-website-mauritius": {
    slug: "restaurant-website-mauritius",
    eyebrow: "Restaurant Website Mauritius",
    title: "Restaurant Website Design in Mauritius",
    subtitle:
      "MoBiz.mu builds restaurant websites with menus, food galleries, booking enquiries, location details, WhatsApp contact and mobile-friendly design.",
    metaTitle:
      "Restaurant Website Mauritius | Menu, Reservations & Food Business Websites | MoBiz.mu",
    metaDescription:
      "MoBiz.mu creates restaurant websites in Mauritius with menus, galleries, reservation enquiries, WhatsApp contact, location maps and SEO-ready structure.",
    primaryKeyword: "restaurant website Mauritius",
    secondaryKeywords: [
      "food business website Mauritius",
      "restaurant menu website Mauritius",
      "cafe website Mauritius",
      "reservation website Mauritius",
      "takeaway website Mauritius",
    ],
    priceLabel: "Restaurant websites from Rs 8,000 depending on scope",
    heroBullets: [
      "Digital menu sections",
      "Food gallery",
      "Reservation enquiries",
      "Location and WhatsApp contact",
    ],
    overviewTitle: "Make your restaurant easier to find, trust and visit",
    overviewParagraphs: [
      "Customers often search online before choosing where to eat. A professional website helps your restaurant present menus, location, photos and booking options clearly.",
      "MoBiz.mu creates restaurant and food business websites in Mauritius that look premium and work smoothly on mobile.",
      "Your website can include menus, food galleries, reservations, takeaway information, Google Map, WhatsApp contact and SEO sections.",
    ],
    featuresTitle: "What we can include in your restaurant website",
    features: [
      { title: "Digital menu", description: "Display food categories, prices, images and signature dishes." },
      { title: "Reservation enquiry", description: "Collect table booking requests and customer contact details." },
      { title: "Food gallery", description: "Show your dishes, restaurant interior and dining experience." },
      { title: "WhatsApp contact", description: "Let customers message your restaurant quickly." },
      { title: "Location map", description: "Add opening hours, address and Google Map." },
      { title: "SEO structure", description: "Support searches for restaurants, cafés and food businesses in Mauritius." },
    ],
    benefitsTitle: "Benefits for restaurants and food businesses",
    benefits: [
      "Show your menu clearly",
      "Increase bookings and enquiries",
      "Improve customer trust",
      "Help people find your location",
      "Promote offers and events",
      "Look more professional online",
    ],
    processTitle: "Our restaurant website process",
    process: [
      { title: "Business review", description: "We understand your food concept, menu and booking needs." },
      { title: "Content planning", description: "We organize menu, gallery, location and contact sections." },
      { title: "Website design", description: "We create a beautiful, mobile-friendly restaurant website." },
      { title: "Launch support", description: "We test the website and prepare it for customer enquiries." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a restaurant website?", answer: "Yes. We build restaurant, café, takeaway and food business websites." },
      { question: "Can I show my menu?", answer: "Yes. We can create a clean digital menu section with categories and prices." },
      { question: "Can customers reserve tables?", answer: "Yes. We can add reservation enquiry forms or WhatsApp booking links." },
      { question: "Is the website mobile-friendly?", answer: "Yes. Restaurant websites are designed to work smoothly on mobile." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "salon-website-mauritius": {
    slug: "salon-website-mauritius",
    eyebrow: "Salon Website Mauritius",
    title: "Salon & Beauty Website Design in Mauritius",
    subtitle:
      "MoBiz.mu creates premium salon websites with treatment menus, appointment enquiries, WhatsApp booking, galleries, prices and beauty service pages.",
    metaTitle:
      "Salon Website Mauritius | Beauty, Spa & Appointment Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds salon and beauty websites in Mauritius with services, prices, galleries, appointment enquiries, WhatsApp booking and SEO-ready structure.",
    primaryKeyword: "salon website Mauritius",
    secondaryKeywords: [
      "beauty salon website Mauritius",
      "spa website Mauritius",
      "hair salon website Mauritius",
      "appointment website Mauritius",
      "beauty business website Mauritius",
    ],
    priceLabel: "Salon websites from Rs 8,000 depending on scope",
    heroBullets: [
      "Treatment and service menu",
      "Appointment enquiries",
      "WhatsApp booking",
      "Gallery and review sections",
    ],
    overviewTitle: "Make your salon look more premium and easier to book",
    overviewParagraphs: [
      "Beauty clients want to see your services, prices, results and booking options before contacting you.",
      "MoBiz.mu builds salon and beauty websites in Mauritius that help your brand look elegant, professional and trustworthy.",
      "Your website can include treatment pages, price lists, WhatsApp booking, galleries, testimonials and SEO content for local beauty searches.",
    ],
    featuresTitle: "What we can include in your salon website",
    features: [
      { title: "Service menu", description: "Show hair, nails, makeup, spa, facial, massage or beauty services." },
      { title: "Price list", description: "Present prices and packages in a clean, easy-to-read format." },
      { title: "Appointment request", description: "Collect preferred service, date, time and client contact details." },
      { title: "WhatsApp booking", description: "Allow clients to message directly for bookings." },
      { title: "Gallery", description: "Show salon work, before/after results, interior and client transformations." },
      { title: "Local SEO structure", description: "Support salon, spa and beauty searches in Mauritius." },
    ],
    benefitsTitle: "Benefits for salons and beauty businesses",
    benefits: [
      "Look more premium online",
      "Make services and prices clear",
      "Increase appointment enquiries",
      "Build trust with new clients",
      "Promote packages and offers",
      "Improve local Google visibility",
    ],
    processTitle: "Our salon website process",
    process: [
      { title: "Brand review", description: "We understand your salon services, style and target clients." },
      { title: "Service structure", description: "We organize services, prices, booking flow and gallery sections." },
      { title: "Website design", description: "We build a premium, mobile-friendly beauty website." },
      { title: "Launch", description: "We test forms, WhatsApp links and mobile experience." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a salon website in Mauritius?", answer: "Yes. We build websites for salons, spas, beauty brands and wellness businesses." },
      { question: "Can clients book appointments online?", answer: "Yes. We can add appointment enquiry forms and WhatsApp booking buttons." },
      { question: "Can I show prices and treatments?", answer: "Yes. Service menus and price lists can be included." },
      { question: "Can I add gallery photos?", answer: "Yes. Gallery sections are ideal for salon and beauty websites." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "doctor-clinic-website-mauritius": {
    slug: "doctor-clinic-website-mauritius",
    eyebrow: "Clinic Website Mauritius",
    title: "Doctor & Clinic Website Design in Mauritius",
    subtitle:
      "MoBiz.mu builds professional websites for clinics, doctors and healthcare service providers with appointment enquiries, service pages and trust-focused design.",
    metaTitle:
      "Doctor Clinic Website Mauritius | Healthcare Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu creates doctor and clinic websites in Mauritius with healthcare service pages, appointment enquiries, location details and professional design.",
    primaryKeyword: "doctor clinic website Mauritius",
    secondaryKeywords: [
      "clinic website Mauritius",
      "doctor website Mauritius",
      "medical website Mauritius",
      "healthcare website Mauritius",
      "appointment website Mauritius",
    ],
    priceLabel: "Clinic websites available on quote",
    heroBullets: [
      "Doctor and clinic profiles",
      "Appointment enquiry forms",
      "Healthcare service pages",
      "Professional trust-focused design",
    ],
    overviewTitle: "Create a professional healthcare website patients can trust",
    overviewParagraphs: [
      "A clinic website should be clear, professional and easy for patients to use.",
      "MoBiz.mu builds healthcare websites for clinics, doctors and medical service providers in Mauritius.",
      "Your website can include services, practitioner profiles, opening hours, appointment requests, map, FAQs and contact details.",
    ],
    featuresTitle: "What we can include in your clinic website",
    features: [
      { title: "Service pages", description: "Present consultations, treatments and medical services clearly." },
      { title: "Appointment enquiry", description: "Allow patients to request appointments online or through WhatsApp." },
      { title: "Doctor profiles", description: "Show qualifications, specialities and professional background." },
      { title: "Clinic information", description: "Add opening hours, location, contact details and patient information." },
      { title: "FAQ sections", description: "Answer common patient questions clearly." },
      { title: "Mobile responsive design", description: "Make information easy to access from phones." },
    ],
    benefitsTitle: "Benefits for healthcare providers",
    benefits: [
      "Build trust before patients contact you",
      "Make appointment requests easier",
      "Present services clearly",
      "Improve online credibility",
      "Help patients find your location",
      "Support local search visibility",
    ],
    processTitle: "Our clinic website process",
    process: [
      { title: "Clinic review", description: "We understand your services, practitioners and patient journey." },
      { title: "Content planning", description: "We plan services, profiles, appointment flow and contact sections." },
      { title: "Website build", description: "We create a clean and professional healthcare website." },
      { title: "Launch", description: "We test responsiveness, contact forms and page structure." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a clinic website?", answer: "Yes. We build websites for clinics, doctors and healthcare service providers." },
      { question: "Can patients request appointments?", answer: "Yes. Appointment enquiry forms and WhatsApp contact can be included." },
      { question: "Can doctor profiles be added?", answer: "Yes. Practitioner profiles can be included." },
      { question: "Is the design professional?", answer: "Yes. Healthcare websites are built with a clean and trust-focused presentation." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "school-website-mauritius": {
    slug: "school-website-mauritius",
    eyebrow: "School Website Mauritius",
    title: "School & Academy Website Design in Mauritius",
    subtitle:
      "MoBiz.mu builds professional school websites with programmes, admissions, galleries, contact forms, announcements and parent-friendly design.",
    metaTitle:
      "School Website Mauritius | Academy & Education Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds school and academy websites in Mauritius with admissions pages, programme sections, galleries, contact forms and mobile-friendly design.",
    primaryKeyword: "school website Mauritius",
    secondaryKeywords: [
      "academy website Mauritius",
      "education website Mauritius",
      "nursery website Mauritius",
      "school admission website Mauritius",
      "training centre website Mauritius",
    ],
    priceLabel: "School websites available on quote",
    heroBullets: [
      "Programme and admission pages",
      "Gallery and activities sections",
      "Parent enquiry forms",
      "Mobile-friendly education design",
    ],
    overviewTitle: "Give your school a professional online presence",
    overviewParagraphs: [
      "Parents often research schools online before contacting or visiting. A strong website helps your institution look organized, caring and trustworthy.",
      "MoBiz.mu builds school, academy, nursery and training centre websites in Mauritius.",
      "Your website can include programmes, admissions, gallery, announcements, testimonials, contact forms and location details.",
    ],
    featuresTitle: "What we can include in your school website",
    features: [
      { title: "Admissions page", description: "Explain how parents can apply or request information." },
      { title: "Programme sections", description: "Show classes, curriculum, activities and learning approach." },
      { title: "Gallery", description: "Show school environment, events, activities and facilities." },
      { title: "Parent enquiry form", description: "Collect parent details and admission enquiries." },
      { title: "Announcements", description: "Promote news, notices, events and updates." },
      { title: "Mobile responsive design", description: "Make your school website easy to use on mobile devices." },
    ],
    benefitsTitle: "Benefits for schools and academies",
    benefits: [
      "Look more professional to parents",
      "Increase admission enquiries",
      "Explain programmes clearly",
      "Show facilities and school life",
      "Build trust online",
      "Support Google visibility for education searches",
    ],
    processTitle: "Our school website process",
    process: [
      { title: "Institution review", description: "We understand your programmes, age groups and admission process." },
      { title: "Content planning", description: "We structure pages for parents, admissions, programmes and activities." },
      { title: "Website design", description: "We build a professional and welcoming education website." },
      { title: "Launch support", description: "We test forms, mobile layouts and SEO basics." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a school website?", answer: "Yes. We build websites for schools, nurseries, academies and training centres." },
      { question: "Can parents enquire online?", answer: "Yes. Parent enquiry and admission forms can be included." },
      { question: "Can we show activities and photos?", answer: "Yes. Gallery and activity sections can be added." },
      { question: "Can announcements be included?", answer: "Yes. News and announcement sections can be added depending on your needs." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "construction-website-mauritius": {
    slug: "construction-website-mauritius",
    eyebrow: "Construction Website Mauritius",
    title: "Construction Company Website Design in Mauritius",
    subtitle:
      "MoBiz.mu builds premium construction websites with project galleries, services, enquiry forms, company profile and trust-building sections.",
    metaTitle:
      "Construction Website Mauritius | Contractor Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu creates construction company websites in Mauritius with service pages, project galleries, company profiles, enquiry forms and SEO-ready design.",
    primaryKeyword: "construction website Mauritius",
    secondaryKeywords: [
      "contractor website Mauritius",
      "construction company website Mauritius",
      "building contractor website Mauritius",
      "civil works website Mauritius",
      "renovation website Mauritius",
    ],
    priceLabel: "Construction websites available on quote",
    heroBullets: [
      "Project portfolio sections",
      "Construction service pages",
      "Quote enquiry forms",
      "Premium contractor presentation",
    ],
    overviewTitle: "Show your construction company as serious, capable and trusted",
    overviewParagraphs: [
      "Construction clients want proof of work, services, credibility and a simple way to request a quote.",
      "MoBiz.mu builds websites for construction companies, contractors, renovation businesses and building service providers in Mauritius.",
      "Your website can include project galleries, service pages, company profile, safety/trust sections and quote enquiries.",
    ],
    featuresTitle: "What we can include in your construction website",
    features: [
      { title: "Project gallery", description: "Show completed projects, before/after work and construction progress." },
      { title: "Service pages", description: "Present construction, renovation, maintenance and civil work services." },
      { title: "Quote request form", description: "Collect project details and customer contact information." },
      { title: "Company profile", description: "Explain your experience, team, values and capabilities." },
      { title: "Trust sections", description: "Add testimonials, project types, certifications or experience highlights." },
      { title: "SEO structure", description: "Support searches related to construction and contractors in Mauritius." },
    ],
    benefitsTitle: "Benefits for construction companies",
    benefits: [
      "Show past work professionally",
      "Generate quote enquiries",
      "Build trust with potential clients",
      "Explain services clearly",
      "Look more established online",
      "Improve local visibility",
    ],
    processTitle: "Our construction website process",
    process: [
      { title: "Company review", description: "We understand your services, projects and target clients." },
      { title: "Project structure", description: "We organize galleries, services, quote flow and trust sections." },
      { title: "Website build", description: "We design and build a professional contractor website." },
      { title: "Launch", description: "We test mobile layout, forms and SEO setup." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a construction website?", answer: "Yes. We build websites for construction companies and contractors in Mauritius." },
      { question: "Can I show my project portfolio?", answer: "Yes. Project gallery and case study sections can be included." },
      { question: "Can clients request quotes?", answer: "Yes. Quote enquiry forms and WhatsApp contact can be added." },
      { question: "Can this improve credibility?", answer: "Yes. A professional construction website helps clients trust your company faster." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "accounting-firm-website-mauritius": {
    slug: "accounting-firm-website-mauritius",
    eyebrow: "Accounting Firm Website Mauritius",
    title: "Accounting Firm Website Design in Mauritius",
    subtitle:
      "MoBiz.mu builds professional websites for accounting firms, tax consultants and finance service providers in Mauritius.",
    metaTitle:
      "Accounting Firm Website Mauritius | Accountant Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu creates accounting firm websites in Mauritius with service pages, consultation enquiry forms, trust sections and SEO-ready structure.",
    primaryKeyword: "accounting firm website Mauritius",
    secondaryKeywords: [
      "accountant website Mauritius",
      "tax consultant website Mauritius",
      "bookkeeping website Mauritius",
      "finance consultant website Mauritius",
      "professional services website Mauritius",
    ],
    priceLabel: "Accounting firm websites available on quote",
    heroBullets: [
      "Accounting service pages",
      "Consultation enquiry forms",
      "Trust and credibility sections",
      "SEO structure for finance services",
    ],
    overviewTitle: "Help your accounting firm look more professional online",
    overviewParagraphs: [
      "Accounting and tax clients look for trust, clarity and professionalism before choosing a provider.",
      "MoBiz.mu builds websites for accounting firms, tax consultants, bookkeepers and finance advisors in Mauritius.",
      "Your website can include service pages, team profiles, consultation forms, FAQs, trust sections and SEO content.",
    ],
    featuresTitle: "What we can include in your accounting firm website",
    features: [
      { title: "Service pages", description: "Present bookkeeping, VAT, payroll, tax and advisory services clearly." },
      { title: "Consultation enquiry", description: "Collect client needs and contact details through forms or WhatsApp." },
      { title: "Trust sections", description: "Show experience, testimonials, industries served and reasons to choose your firm." },
      { title: "FAQ content", description: "Answer common client questions about accounting and compliance." },
      { title: "SEO-ready structure", description: "Target accounting, tax and bookkeeping keywords in Mauritius." },
      { title: "Professional design", description: "Create a serious and credible business presentation." },
    ],
    benefitsTitle: "Benefits for accounting firms",
    benefits: [
      "Look more trustworthy online",
      "Explain services clearly",
      "Generate consultation enquiries",
      "Support Google visibility",
      "Build professional credibility",
      "Educate potential clients through FAQs",
    ],
    processTitle: "Our accounting firm website process",
    process: [
      { title: "Service review", description: "We understand your accounting services and target clients." },
      { title: "Content planning", description: "We plan service pages, trust sections and enquiry flow." },
      { title: "Website build", description: "We create a polished professional services website." },
      { title: "Launch", description: "We prepare SEO, forms and mobile responsiveness." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build websites for accountants?", answer: "Yes. We build websites for accounting firms, tax consultants and finance advisors." },
      { question: "Can service pages be included?", answer: "Yes. We can create pages for bookkeeping, VAT, payroll, tax and advisory services." },
      { question: "Can clients request consultations?", answer: "Yes. Consultation forms and WhatsApp enquiry links can be included." },
      { question: "Can the website support SEO?", answer: "Yes. We can structure the website around accounting keywords in Mauritius." },
    ],
    relatedLinks: [
      { title: "Accounting Services Mauritius", href: "/accounting-services-mauritius" },
      { title: "VAT Filing Mauritius", href: "/vat-filing-mauritius" },
      { title: "Company Registration Mauritius", href: "/company-registration-mauritius" },
      ...commonRelatedLinks,
    ],
  },

  "law-firm-website-mauritius": {
    slug: "law-firm-website-mauritius",
    eyebrow: "Law Firm Website Mauritius",
    title: "Law Firm Website Design in Mauritius",
    subtitle:
      "MoBiz.mu creates professional websites for law firms, legal consultants and advisory practices with service pages and trust-focused design.",
    metaTitle:
      "Law Firm Website Mauritius | Legal Website Design | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds professional law firm websites in Mauritius with practice area pages, consultation enquiries, attorney profiles and credibility sections.",
    primaryKeyword: "law firm website Mauritius",
    secondaryKeywords: [
      "lawyer website Mauritius",
      "legal website Mauritius",
      "attorney website Mauritius",
      "legal consultant website Mauritius",
      "professional law website Mauritius",
    ],
    priceLabel: "Law firm websites available on quote",
    heroBullets: [
      "Practice area pages",
      "Consultation enquiries",
      "Professional profiles",
      "Trust-focused legal design",
    ],
    overviewTitle: "Create a serious and professional online presence for your legal practice",
    overviewParagraphs: [
      "Legal clients need clarity, trust and professionalism before making contact.",
      "MoBiz.mu builds law firm websites that present practice areas, profiles, experience and consultation options clearly.",
      "The website can be structured for legal service searches while maintaining a clean and professional image.",
    ],
    featuresTitle: "What we can include in your law firm website",
    features: [
      { title: "Practice area pages", description: "Present legal services and advisory areas clearly." },
      { title: "Lawyer profiles", description: "Show attorney or consultant experience, qualifications and focus areas." },
      { title: "Consultation enquiry", description: "Collect contact details and consultation requests." },
      { title: "Trust sections", description: "Show experience, values, approach and client-focused messaging." },
      { title: "FAQ sections", description: "Answer general questions about contacting the firm or booking consultation." },
      { title: "Professional layout", description: "Use a clean, premium design suitable for legal services." },
    ],
    benefitsTitle: "Benefits for law firms",
    benefits: [
      "Look more professional and established",
      "Explain practice areas clearly",
      "Generate consultation enquiries",
      "Improve trust with potential clients",
      "Support legal service visibility",
      "Present the firm with more authority",
    ],
    processTitle: "Our law firm website process",
    process: [
      { title: "Practice review", description: "We understand your legal services and client journey." },
      { title: "Content planning", description: "We structure practice areas, profiles and enquiry sections." },
      { title: "Design and build", description: "We build a clean and serious law firm website." },
      { title: "Launch", description: "We test mobile design, forms and SEO basics." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a law firm website?", answer: "Yes. We create professional websites for law firms and legal consultants." },
      { question: "Can practice areas be listed?", answer: "Yes. Practice area pages and service sections can be included." },
      { question: "Can clients request consultation?", answer: "Yes. Consultation enquiry forms or contact links can be added." },
      { question: "Will the design look professional?", answer: "Yes. We use a clean and premium design suitable for legal services." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "ecommerce-store-mauritius": {
    slug: "ecommerce-store-mauritius",
    eyebrow: "Ecommerce Store Mauritius",
    title: "Ecommerce Store Development in Mauritius",
    subtitle:
      "MoBiz.mu builds ecommerce stores for Mauritius brands with product catalogues, online store structure, WhatsApp ordering and SEO-ready product pages.",
    metaTitle:
      "Ecommerce Store Mauritius | Online Store Development for Local Brands | MoBiz.mu",
    metaDescription:
      "MoBiz.mu develops ecommerce stores in Mauritius with product catalogues, online ordering, WhatsApp enquiry flow, mobile design and SEO-ready structure.",
    primaryKeyword: "ecommerce store Mauritius",
    secondaryKeywords: [
      "online store Mauritius",
      "ecommerce website Mauritius",
      "shopping website Mauritius",
      "product catalogue Mauritius",
      "sell online Mauritius",
    ],
    priceLabel: "Ecommerce stores from Rs 35,000 depending on product count",
    heroBullets: [
      "Product catalogue pages",
      "Online store structure",
      "WhatsApp order flow",
      "Mobile shopping experience",
    ],
    overviewTitle: "Sell your products online with a professional ecommerce store",
    overviewParagraphs: [
      "A strong ecommerce store helps customers browse products, understand your brand and send orders more easily.",
      "MoBiz.mu creates ecommerce stores for Mauritius businesses, product brands, retailers and handmade businesses.",
      "We can build product categories, product pages, checkout or WhatsApp ordering flows, SEO structure and premium store design.",
    ],
    featuresTitle: "What we can include in your ecommerce store",
    features: [
      { title: "Product catalogue", description: "Display products with images, names, prices, categories and descriptions." },
      { title: "Category pages", description: "Organize products clearly for easier browsing." },
      { title: "WhatsApp ordering", description: "Send product and customer details directly to WhatsApp." },
      { title: "Mobile shopping UX", description: "Create a smooth product browsing experience on mobile." },
      { title: "SEO-ready product structure", description: "Prepare product and category pages for search visibility." },
      { title: "Premium store design", description: "Make your store look trustworthy and professional." },
    ],
    benefitsTitle: "Benefits of an ecommerce store",
    benefits: [
      "Sell products more professionally",
      "Show catalogue clearly",
      "Receive better order enquiries",
      "Improve trust with customers",
      "Support online marketing campaigns",
      "Increase Google visibility over time",
    ],
    processTitle: "Our ecommerce store process",
    process: [
      { title: "Product review", description: "We understand your products, categories and selling process." },
      { title: "Store planning", description: "We plan product pages, categories and order flow." },
      { title: "Design and setup", description: "We build a premium ecommerce experience." },
      { title: "Launch", description: "We test mobile browsing, ordering and SEO basics." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build ecommerce stores?", answer: "Yes. We build ecommerce stores and product catalogue websites for Mauritius businesses." },
      { question: "Can customers order through WhatsApp?", answer: "Yes. WhatsApp ordering can be included." },
      { question: "Can I show product categories?", answer: "Yes. Category and product pages can be created." },
      { question: "Can the store support SEO?", answer: "Yes. Product and category pages can be structured for SEO." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "custom-website-mauritius": {
    slug: "custom-website-mauritius",
    eyebrow: "Custom Website Mauritius",
    title: "Custom Website Development in Mauritius",
    subtitle:
      "MoBiz.mu builds custom websites for businesses that need more than a basic template, with tailored design, features, SEO structure and premium presentation.",
    metaTitle:
      "Custom Website Mauritius | Tailored Website Development for Businesses | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds custom websites in Mauritius with premium design, tailored features, SEO structure, mobile responsiveness and lead generation sections.",
    primaryKeyword: "custom website Mauritius",
    secondaryKeywords: [
      "custom web development Mauritius",
      "tailored website Mauritius",
      "business website Mauritius",
      "premium website Mauritius",
      "custom web design Mauritius",
    ],
    priceLabel: "Custom websites from Rs 18,000 depending on scope",
    heroBullets: [
      "Tailored website structure",
      "Premium UI design",
      "Business-specific features",
      "SEO and conversion-focused layout",
    ],
    overviewTitle: "Build a website around your business, not around a template",
    overviewParagraphs: [
      "Many businesses need a website that fits their service flow, customer journey and brand positioning.",
      "MoBiz.mu builds custom websites in Mauritius for businesses that want premium design, custom sections, stronger content and better conversion flow.",
      "A custom website can include service pages, booking forms, product sections, dashboards, integrations and advanced layouts depending on your goals.",
    ],
    featuresTitle: "What we can include in a custom website",
    features: [
      { title: "Custom page structure", description: "Pages planned around your services, audience and business goals." },
      { title: "Premium interface design", description: "A more executive look that builds trust and brand value." },
      { title: "Lead capture sections", description: "Contact forms, quote requests, WhatsApp buttons and conversion CTAs." },
      { title: "SEO foundation", description: "Headings, metadata, internal links and keyword-focused content structure." },
      { title: "Custom components", description: "Special sections for packages, listings, bookings, FAQs or business workflows." },
      { title: "Responsive development", description: "Built to work smoothly across desktop, tablet and mobile." },
    ],
    benefitsTitle: "Why choose a custom website",
    benefits: [
      "Stand out from generic templates",
      "Match your business model better",
      "Improve credibility and conversion",
      "Support SEO from the beginning",
      "Add features as your business grows",
      "Create a more premium brand image",
    ],
    processTitle: "Our custom website process",
    process: [
      { title: "Discovery", description: "We understand your business model, goals, audience and website needs." },
      { title: "Strategy", description: "We plan pages, sections, content flow, SEO and conversion structure." },
      { title: "Design and development", description: "We build a custom website with a premium interface." },
      { title: "Launch and refine", description: "We test, optimize and prepare the website for growth." },
    ],
    faqs: [
      { question: "Does MoBiz.mu build custom websites?", answer: "Yes. We build custom websites for Mauritius businesses that need tailored design and features." },
      { question: "How much does a custom website cost?", answer: "Custom websites usually start from Rs 18,000 depending on the features and number of pages." },
      { question: "Can the website include special features?", answer: "Yes. Booking forms, product sections, dashboards and integrations can be planned." },
      { question: "Will it be SEO-ready?", answer: "Yes. We build custom websites with SEO structure in mind." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "web-application-development-mauritius": {
    slug: "web-application-development-mauritius",
    eyebrow: "Web Application Mauritius",
    title: "Web Application Development in Mauritius",
    subtitle:
      "MoBiz.mu develops custom web applications, business dashboards, portals, booking systems, CRM tools and internal platforms for Mauritius businesses.",
    metaTitle:
      "Web Application Development Mauritius | Custom Business Platforms | MoBiz.mu",
    metaDescription:
      "MoBiz.mu develops web applications in Mauritius including dashboards, booking systems, accounting interfaces, inventory systems, CRM tools and custom business platforms.",
    primaryKeyword: "web application development Mauritius",
    secondaryKeywords: [
      "custom web application Mauritius",
      "business software Mauritius",
      "web app Mauritius",
      "dashboard system Mauritius",
      "custom business platform Mauritius",
    ],
    priceLabel: "Web applications available on quote",
    heroBullets: [
      "Custom business dashboards",
      "Customer and admin portals",
      "Booking and workflow systems",
      "Role-based web platforms",
    ],
    overviewTitle: "Digitize your business operations with a custom web application",
    overviewParagraphs: [
      "Some businesses need more than a website. They need a system that helps manage operations, customers, bookings, stock, invoices or internal workflows.",
      "MoBiz.mu develops custom web applications in Mauritius for businesses that want to work smarter and look more professional.",
      "We can build dashboards, portals, booking systems, CRM tools, accounting interfaces, inventory systems and other business platforms.",
    ],
    featuresTitle: "What we can build as a web application",
    features: [
      { title: "Admin dashboards", description: "Manage key business data from a structured admin interface." },
      { title: "Customer portals", description: "Let customers view information, submit requests or access services." },
      { title: "Booking systems", description: "Handle enquiries, reservations and appointment workflows." },
      { title: "CRM tools", description: "Track leads, customers, follow-ups and communication." },
      { title: "Inventory systems", description: "Manage products, stock levels, warehouses and movements." },
      { title: "Reports and exports", description: "Generate business reports, PDFs or downloadable data." },
    ],
    benefitsTitle: "Benefits of a custom web application",
    benefits: [
      "Reduce manual work",
      "Improve business organization",
      "Centralize important data",
      "Create smoother workflows",
      "Support growth and scalability",
      "Build a system around your exact process",
    ],
    processTitle: "Our web application process",
    process: [
      { title: "Workflow discovery", description: "We study your business process and system requirements." },
      { title: "System planning", description: "We plan roles, pages, database structure and user journeys." },
      { title: "Development", description: "We build the web application with a scalable structure." },
      { title: "Testing and launch", description: "We test functionality, security, responsiveness and workflow." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build custom web applications?", answer: "Yes. We build web applications, portals, dashboards and business systems." },
      { question: "Can you build admin dashboards?", answer: "Yes. Admin dashboards and management panels can be developed." },
      { question: "Can the system include users and roles?", answer: "Yes. Role-based access can be planned depending on requirements." },
      { question: "Is pricing fixed?", answer: "Web application pricing depends on features, complexity and development scope." },
    ],
    relatedLinks: commonRelatedLinks,
  },

  "accounting-software-mauritius": {
    slug: "accounting-software-mauritius",
    eyebrow: "Accounting Software Mauritius",
    title: "Accounting Software Development in Mauritius",
    subtitle:
      "MoBiz.mu develops custom accounting software interfaces, invoicing systems, quotation systems, customer records, payment tracking and finance dashboards.",
    metaTitle:
      "Accounting Software Mauritius | Invoicing, Finance & Dashboard Systems | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds accounting software systems in Mauritius with invoices, quotations, payments, customers, VAT tracking, dashboards and PDF exports.",
    primaryKeyword: "accounting software Mauritius",
    secondaryKeywords: [
      "invoice software Mauritius",
      "quotation software Mauritius",
      "finance dashboard Mauritius",
      "business accounting system Mauritius",
      "custom accounting system Mauritius",
    ],
    priceLabel: "Accounting software available on quote",
    heroBullets: [
      "Invoices and quotations",
      "Customer and payment records",
      "Finance dashboards",
      "PDF and WhatsApp sharing",
    ],
    overviewTitle: "Create a custom accounting system for your business workflow",
    overviewParagraphs: [
      "Many businesses need a simple internal system to manage invoices, quotations, customers, payments and reports.",
      "MoBiz.mu can develop custom accounting software interfaces and finance dashboards for Mauritius businesses.",
      "Your system can include invoice creation, quotation approval, customer records, payment tracking, PDF exports, WhatsApp sharing and reporting sections.",
    ],
    featuresTitle: "What we can include in accounting software",
    features: [
      { title: "Invoice management", description: "Create, edit, print and track invoices." },
      { title: "Quotation system", description: "Generate quotations and convert them into invoices or proposals." },
      { title: "Customer records", description: "Store customer details and transaction history." },
      { title: "Payment tracking", description: "Track paid, unpaid and partially paid invoices." },
      { title: "Dashboard reports", description: "View revenue, outstanding balances and business summaries." },
      { title: "PDF export", description: "Generate professional PDF invoices, quotations or statements." },
    ],
    benefitsTitle: "Benefits of custom accounting software",
    benefits: [
      "Organize invoices and quotations",
      "Reduce manual spreadsheet work",
      "Track customers and payments",
      "Generate professional documents",
      "Improve internal reporting",
      "Build around your exact business process",
    ],
    processTitle: "Our accounting software process",
    process: [
      { title: "Requirements review", description: "We understand your invoicing, quotation and finance workflow." },
      { title: "Database planning", description: "We plan customers, invoices, payments, items and reports." },
      { title: "System development", description: "We build the interface, logic and document generation." },
      { title: "Testing", description: "We test calculations, documents, statuses and user flows." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build accounting software?", answer: "Yes. We can develop custom accounting, invoicing and finance management systems." },
      { question: "Can it generate PDF invoices?", answer: "Yes. PDF invoice and quotation generation can be included." },
      { question: "Can it track payments?", answer: "Yes. Payment tracking and outstanding balances can be included." },
      { question: "Can it be customized?", answer: "Yes. The system can be built around your business workflow." },
    ],
    relatedLinks: [
      { title: "Invoice Software Mauritius", href: "/invoice-software-mauritius" },
      { title: "Accounting Services Mauritius", href: "/accounting-services-mauritius" },
      { title: "Web Application Development Mauritius", href: "/web-application-development-mauritius" },
      ...commonRelatedLinks,
    ],
  },

  "inventory-management-system-mauritius": {
    slug: "inventory-management-system-mauritius",
    eyebrow: "Inventory Management System Mauritius",
    title: "Inventory Management System Development in Mauritius",
    subtitle:
      "MoBiz.mu builds inventory management systems for product tracking, warehouse movements, stock levels, suppliers, reports and business operations.",
    metaTitle:
      "Inventory Management System Mauritius | Stock & Warehouse Tracking | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds inventory management systems in Mauritius with product tracking, stock movements, suppliers, warehouses, reports and dashboards.",
    primaryKeyword: "inventory management system Mauritius",
    secondaryKeywords: [
      "stock management system Mauritius",
      "warehouse system Mauritius",
      "inventory software Mauritius",
      "product tracking system Mauritius",
      "stock software Mauritius",
    ],
    priceLabel: "Inventory systems available on quote",
    heroBullets: [
      "Product and stock tracking",
      "Warehouse movement records",
      "Supplier and purchase records",
      "Inventory dashboards and reports",
    ],
    overviewTitle: "Manage products, stock and warehouse activity more efficiently",
    overviewParagraphs: [
      "Inventory becomes difficult to manage when products, suppliers, stock movements and warehouse records are spread across notebooks or spreadsheets.",
      "MoBiz.mu develops inventory management systems in Mauritius to help businesses track products, stock levels, movements and reports in one place.",
      "This is suitable for retail, wholesale, warehouses, import/export businesses and product-based companies.",
    ],
    featuresTitle: "What we can include in an inventory system",
    features: [
      { title: "Product database", description: "Store product names, SKUs, categories, prices and details." },
      { title: "Stock movement tracking", description: "Record stock in, stock out, adjustments and transfers." },
      { title: "Warehouse records", description: "Manage stock across one or multiple locations." },
      { title: "Supplier management", description: "Track suppliers, purchases and restocking details." },
      { title: "Low stock alerts", description: "Highlight products that need restocking." },
      { title: "Reports", description: "View stock value, movement history and product summaries." },
    ],
    benefitsTitle: "Benefits of inventory management software",
    benefits: [
      "Reduce stock confusion",
      "Track product movements better",
      "Improve warehouse organization",
      "Understand low stock quickly",
      "Support purchasing decisions",
      "Replace messy spreadsheets",
    ],
    processTitle: "Our inventory system process",
    process: [
      { title: "Operations review", description: "We understand your products, warehouse flow and stock challenges." },
      { title: "System planning", description: "We plan product fields, movements, roles and reports." },
      { title: "Development", description: "We build the inventory system interface and logic." },
      { title: "Testing", description: "We test stock calculations, movements and reporting flows." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build an inventory management system?", answer: "Yes. We build custom inventory and stock management systems." },
      { question: "Can it track stock movements?", answer: "Yes. Stock in, stock out, transfers and adjustments can be tracked." },
      { question: "Can it support warehouses?", answer: "Yes. Warehouse and location-based tracking can be planned." },
      { question: "Can reports be included?", answer: "Yes. Inventory reports and dashboards can be included." },
    ],
    relatedLinks: [
      { title: "Stock Management System Mauritius", href: "/stock-management-system-mauritius" },
      { title: "Web Application Development Mauritius", href: "/web-application-development-mauritius" },
      ...commonRelatedLinks,
    ],
  },

  "stock-management-system-mauritius": {
    slug: "stock-management-system-mauritius",
    eyebrow: "Stock Management System Mauritius",
    title: "Stock Management System Development in Mauritius",
    subtitle:
      "MoBiz.mu builds stock management systems to help Mauritius businesses track products, quantities, stock movements, alerts and reports.",
    metaTitle:
      "Stock Management System Mauritius | Inventory & Warehouse Software | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds stock management systems in Mauritius with product tracking, stock movements, low stock alerts, warehouse records and dashboards.",
    primaryKeyword: "stock management system Mauritius",
    secondaryKeywords: [
      "stock software Mauritius",
      "inventory software Mauritius",
      "warehouse software Mauritius",
      "product stock system Mauritius",
      "stock tracking Mauritius",
    ],
    priceLabel: "Stock management systems available on quote",
    heroBullets: [
      "Stock in and stock out tracking",
      "Product quantity management",
      "Low stock alerts",
      "Reports and dashboards",
    ],
    overviewTitle: "Track your stock clearly and reduce operational mistakes",
    overviewParagraphs: [
      "Stock management is critical for product-based businesses. Without a proper system, it is easy to lose track of quantities, movements and restocking needs.",
      "MoBiz.mu builds stock management systems for Mauritius businesses that need a clearer way to manage inventory.",
      "The system can include product records, stock in/out, low stock alerts, supplier tracking, warehouse locations and reports.",
    ],
    featuresTitle: "What we can include in your stock system",
    features: [
      { title: "Product records", description: "Store product information, codes, categories and quantities." },
      { title: "Stock movement logs", description: "Track stock in, stock out, returns and adjustments." },
      { title: "Low stock alerts", description: "Identify products that need restocking." },
      { title: "Supplier tracking", description: "Connect products with supplier and purchase records." },
      { title: "Warehouse locations", description: "Track stock in one or multiple locations." },
      { title: "Dashboard reports", description: "View stock summaries and movement reports." },
    ],
    benefitsTitle: "Benefits of a stock management system",
    benefits: [
      "Know what stock you have",
      "Reduce product tracking errors",
      "Improve restocking decisions",
      "Manage warehouse activity better",
      "Save time compared to manual records",
      "Improve business control",
    ],
    processTitle: "Our stock system process",
    process: [
      { title: "Stock flow review", description: "We understand how your stock enters, moves and leaves your business." },
      { title: "System mapping", description: "We plan product records, movements, alerts and reports." },
      { title: "Development", description: "We build the system with your workflow in mind." },
      { title: "Testing", description: "We test stock calculations, entries and reporting." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a stock management system?", answer: "Yes. We build custom stock management systems for Mauritius businesses." },
      { question: "Can it show low stock?", answer: "Yes. Low stock alerts can be included." },
      { question: "Can it track stock movement?", answer: "Yes. Stock in, out and adjustments can be tracked." },
      { question: "Can reports be added?", answer: "Yes. Dashboards and reports can be developed." },
    ],
    relatedLinks: [
      { title: "Inventory Management System Mauritius", href: "/inventory-management-system-mauritius" },
      { title: "Web Application Development Mauritius", href: "/web-application-development-mauritius" },
      ...commonRelatedLinks,
    ],
  },

  "crm-software-mauritius": {
    slug: "crm-software-mauritius",
    eyebrow: "CRM Software Mauritius",
    title: "CRM Software Development in Mauritius",
    subtitle:
      "MoBiz.mu develops custom CRM systems to help businesses manage leads, customers, follow-ups, sales activity and client records.",
    metaTitle:
      "CRM Software Mauritius | Lead & Customer Management System | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds CRM software in Mauritius with lead tracking, customer records, follow-ups, sales pipeline, notes and dashboards.",
    primaryKeyword: "CRM software Mauritius",
    secondaryKeywords: [
      "customer management system Mauritius",
      "lead management software Mauritius",
      "sales CRM Mauritius",
      "business CRM Mauritius",
      "client database Mauritius",
    ],
    priceLabel: "CRM systems available on quote",
    heroBullets: [
      "Lead and customer tracking",
      "Follow-up management",
      "Sales pipeline views",
      "Dashboards and reports",
    ],
    overviewTitle: "Manage leads and customers in one organized system",
    overviewParagraphs: [
      "When enquiries come from phone, WhatsApp, forms and social media, leads can easily get lost.",
      "MoBiz.mu builds CRM systems in Mauritius to help businesses track customers, leads, notes, follow-ups and sales stages.",
      "A custom CRM can be shaped around your sales process and team workflow.",
    ],
    featuresTitle: "What we can include in your CRM",
    features: [
      { title: "Lead records", description: "Track new enquiries and potential clients." },
      { title: "Customer database", description: "Store customer details, history and notes." },
      { title: "Follow-up reminders", description: "Track next actions and sales follow-ups." },
      { title: "Pipeline stages", description: "Organize leads by status, stage or priority." },
      { title: "Team access", description: "Give access to users based on roles." },
      { title: "Reports", description: "View leads, conversions and customer activity." },
    ],
    benefitsTitle: "Benefits of CRM software",
    benefits: [
      "Stop losing leads",
      "Improve customer follow-up",
      "Organize sales activity",
      "Track business opportunities",
      "Improve team visibility",
      "Build a system around your sales process",
    ],
    processTitle: "Our CRM development process",
    process: [
      { title: "Sales process review", description: "We understand how your leads and customers are managed." },
      { title: "CRM planning", description: "We map fields, stages, roles and reports." },
      { title: "Development", description: "We build a CRM system around your process." },
      { title: "Testing", description: "We test lead flows, records and dashboards." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build CRM software?", answer: "Yes. We develop custom CRM systems for businesses in Mauritius." },
      { question: "Can it track leads?", answer: "Yes. Lead tracking and follow-up management can be included." },
      { question: "Can team members use it?", answer: "Yes. User roles and access can be planned." },
      { question: "Can reports be included?", answer: "Yes. CRM reports and dashboards can be added." },
    ],
    relatedLinks: [
      { title: "Web Application Development Mauritius", href: "/web-application-development-mauritius" },
      ...commonRelatedLinks,
    ],
  },

  "booking-system-mauritius": {
    slug: "booking-system-mauritius",
    eyebrow: "Booking System Mauritius",
    title: "Booking System Development in Mauritius",
    subtitle:
      "MoBiz.mu builds custom booking systems for rentals, appointments, services, tours, clinics, salons and reservation-based businesses.",
    metaTitle:
      "Booking System Mauritius | Custom Reservation & Appointment Software | MoBiz.mu",
    metaDescription:
      "MoBiz.mu develops booking systems in Mauritius for appointments, rentals, reservations, tours and service businesses with admin dashboards and enquiry flow.",
    primaryKeyword: "booking system Mauritius",
    secondaryKeywords: [
      "reservation system Mauritius",
      "appointment system Mauritius",
      "rental booking system Mauritius",
      "tour booking system Mauritius",
      "online booking software Mauritius",
    ],
    priceLabel: "Booking systems available on quote",
    heroBullets: [
      "Reservation workflows",
      "Admin booking dashboard",
      "Customer enquiry forms",
      "WhatsApp and email notifications",
    ],
    overviewTitle: "Organize your bookings with a custom system",
    overviewParagraphs: [
      "A booking system helps businesses manage reservations, enquiries and availability more clearly.",
      "MoBiz.mu develops booking systems in Mauritius for car rentals, tours, salons, clinics, hotels and service businesses.",
      "The system can include customer forms, admin views, booking statuses, notifications and reporting.",
    ],
    featuresTitle: "What we can include in your booking system",
    features: [
      { title: "Booking forms", description: "Collect date, time, service, customer and special request details." },
      { title: "Admin dashboard", description: "View and manage incoming bookings." },
      { title: "Status tracking", description: "Track pending, confirmed, completed or cancelled bookings." },
      { title: "Notifications", description: "Send booking details through WhatsApp or email depending on setup." },
      { title: "Availability logic", description: "Plan availability or time slots depending on your business needs." },
      { title: "Reports", description: "View booking activity and business performance." },
    ],
    benefitsTitle: "Benefits of a booking system",
    benefits: [
      "Organize customer enquiries",
      "Reduce manual booking confusion",
      "Improve customer experience",
      "Track booking statuses",
      "Save administrative time",
      "Build around your business workflow",
    ],
    processTitle: "Our booking system process",
    process: [
      { title: "Booking workflow review", description: "We understand how you receive and confirm bookings." },
      { title: "System planning", description: "We plan forms, statuses, notifications and admin screens." },
      { title: "Development", description: "We build the booking system interface and logic." },
      { title: "Testing", description: "We test booking flows and admin management." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build a booking system?", answer: "Yes. We build custom booking systems for Mauritius businesses." },
      { question: "Can it include an admin dashboard?", answer: "Yes. Admin booking management can be included." },
      { question: "Can it connect to WhatsApp?", answer: "Yes. WhatsApp enquiry or notification flows can be planned." },
      { question: "Can it manage appointments?", answer: "Yes. Appointment and reservation workflows can be developed." },
    ],
    relatedLinks: [
      { title: "Booking Website Mauritius", href: "/booking-website-mauritius" },
      { title: "Web Application Development Mauritius", href: "/web-application-development-mauritius" },
      ...commonRelatedLinks,
    ],
  },

  "invoice-software-mauritius": {
    slug: "invoice-software-mauritius",
    eyebrow: "Invoice Software Mauritius",
    title: "Invoice Software Development in Mauritius",
    subtitle:
      "MoBiz.mu develops invoice software for businesses that need professional invoices, quotations, customer records, payments, PDFs and dashboards.",
    metaTitle:
      "Invoice Software Mauritius | Invoicing & Quotation System | MoBiz.mu",
    metaDescription:
      "MoBiz.mu builds invoice software in Mauritius with invoices, quotations, customers, payments, PDF export, WhatsApp sharing and finance dashboards.",
    primaryKeyword: "invoice software Mauritius",
    secondaryKeywords: [
      "invoicing system Mauritius",
      "quotation software Mauritius",
      "billing software Mauritius",
      "invoice PDF system Mauritius",
      "business invoice software Mauritius",
    ],
    priceLabel: "Invoice software available on quote",
    heroBullets: [
      "Invoice and quotation creation",
      "Customer records",
      "Payment status tracking",
      "PDF and WhatsApp sharing",
    ],
    overviewTitle: "Create invoices and quotations in a more professional way",
    overviewParagraphs: [
      "Many businesses still manage invoices manually, which can become slow and disorganized.",
      "MoBiz.mu builds invoice software systems for Mauritius businesses that need a cleaner way to create invoices, quotations, PDFs and payment records.",
      "The system can include invoice templates, customer database, product/service items, payment statuses, dashboards and document sharing.",
    ],
    featuresTitle: "What we can include in your invoice software",
    features: [
      { title: "Invoice creation", description: "Create professional invoices with item lines, totals and customer details." },
      { title: "Quotation creation", description: "Generate quotations and convert them into invoices if required." },
      { title: "Customer database", description: "Store client details and document history." },
      { title: "Payment tracking", description: "Track paid, unpaid and partially paid documents." },
      { title: "PDF exports", description: "Generate printable invoice and quotation PDFs." },
      { title: "WhatsApp sharing", description: "Share document links or messages through WhatsApp depending on setup." },
    ],
    benefitsTitle: "Benefits of invoice software",
    benefits: [
      "Look more professional with clients",
      "Save time creating documents",
      "Track payments better",
      "Keep customer records organized",
      "Reduce manual errors",
      "Improve business reporting",
    ],
    processTitle: "Our invoice software process",
    process: [
      { title: "Document workflow review", description: "We understand how you create invoices, quotations and payments." },
      { title: "System planning", description: "We plan fields, document templates, statuses and reports." },
      { title: "Development", description: "We build the invoicing system and PDF logic." },
      { title: "Testing", description: "We test calculations, PDFs, statuses and sharing." },
    ],
    faqs: [
      { question: "Can MoBiz.mu build invoice software?", answer: "Yes. We build custom invoice and quotation systems for businesses." },
      { question: "Can it generate PDFs?", answer: "Yes. PDF invoice and quotation exports can be included." },
      { question: "Can it track payments?", answer: "Yes. Payment statuses and outstanding balances can be added." },
      { question: "Can it include customer records?", answer: "Yes. A customer database can be included." },
    ],
    relatedLinks: [
      { title: "Accounting Software Mauritius", href: "/accounting-software-mauritius" },
      { title: "Web Application Development Mauritius", href: "/web-application-development-mauritius" },
      ...commonRelatedLinks,
    ],
  },
};