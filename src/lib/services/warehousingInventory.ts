import {
  Boxes,
  ClipboardCheck,
  ClipboardList,
  Database,
  Gauge,
  Laptop,
  MapPin,
  PackageCheck,
  PackageX,
  ScanBarcode,
  Users,
  Warehouse,
} from "lucide-react";
import type { ServicePageContent } from "./types";

export const warehousingInventory: ServicePageContent = {
  divisionId: "warehousing-inventory",
  path: "/services/warehousing-inventory",

  metaTitle:
    "Warehousing & Inventory Services Mauritius | Stock Counting, Systems & Audits",
  metaDescription:
    "MoBiz.mu provides inventory and warehouse operations services in Mauritius — physical stock counting, stock reconciliation, barcode and inventory systems, warehouse organisation, and process audits. We manage and improve your operation; we do not rent out warehouse space.",
  keywords: [
    "inventory management Mauritius",
    "stock counting Mauritius",
    "warehouse management Mauritius",
    "stock reconciliation Mauritius",
    "barcode system Mauritius",
    "inventory software Mauritius",
    "stock management system Mauritius",
    "warehouse audit Mauritius",
    "inventory accuracy Mauritius",
    "SKU setup Mauritius",
  ],

  breadcrumbLabel: "Warehousing & Inventory",

  hero: {
    eyebrow: "Warehousing & Inventory",
    title: "Know Exactly What Stock You Have and Where",
    intro:
      "We help Mauritian businesses get their inventory and warehouse operations under control — counting stock accurately, setting up barcode and inventory systems, organising the warehouse, and fixing the processes that cause stock loss. We're an operations and systems partner: we manage and improve your inventory; we don't rent out warehouse space.",
    primaryCta: { label: "Discuss Your Inventory", href: "/contact" },
    secondaryCta: { label: "Chat on WhatsApp", href: "https://wa.me/23055068119" },
    highlights: [
      "Physical stock counting",
      "Barcode & inventory systems",
      "Warehouse organisation",
      "Process audits",
    ],
  },

  overview: {
    eyebrow: "Service Overview",
    title: "Operations and Systems — Not Storage Space",
    paragraphs: [
      "It's worth being clear upfront: MoBiz.mu is not a warehouse rental company. We don't provide storage space. What we do is help you run the stock and warehouse you already have far more accurately — through physical counting, better systems, clearer processes, and ongoing support.",
      "For a lot of businesses in Mauritius, inventory is either tracked in a spreadsheet that's out of date or not tracked properly at all. That leads to lost stock, over-ordering, expired goods, and money tied up on shelves. We fix the counting, put a proper system in place, and set up the processes and reporting so you actually know what you have.",
    ],
    checklist: [
      "Accurate physical stock counts and reconciliation",
      "Barcode and inventory systems set up around how you work",
      "Warehouse organisation, bin locations, and SKU structure",
      "Cleaner receiving, dispatch, and picking processes",
      "Stock dashboards, reorder levels, and alerts",
      "Ongoing support and audits — not just a one-off count",
    ],
  },

  categories: {
    eyebrow: "What We Do",
    title: "Inventory Operations, Systems and Consulting",
    subtitle:
      "Hands-on stock work, the systems to track it, and the process changes that keep it accurate — scoped to your operation.",
    items: [
      {
        title: "Physical Stock Counting",
        description:
          "Full physical stock counts and cycle counting, with inventory verification so your records match what's actually on the shelves.",
        icon: ClipboardList,
      },
      {
        title: "Stock Reconciliation & Accuracy",
        description:
          "Stock reconciliation, inventory accuracy checks, and stock variance investigation to find where and why numbers drift.",
        icon: Boxes,
      },
      {
        title: "Damaged, Expired & Dead Stock",
        description:
          "Identifying damaged, expired, slow-moving, and obsolete stock so it's dealt with instead of quietly tying up cash and space.",
        icon: PackageX,
      },
      {
        title: "Warehouse Organisation & Layout",
        description:
          "Warehouse organisation, layout planning, and storage optimisation so the space works with your flow rather than against it.",
        icon: Warehouse,
      },
      {
        title: "Bin Locations & SKU Structure",
        description:
          "Bin location setup, rack labelling, and SKU organisation so anyone can find and put away stock quickly and consistently.",
        icon: MapPin,
      },
      {
        title: "Barcode Implementation",
        description:
          "Barcode systems and product coding so stock is scanned in and out accurately instead of keyed in by hand.",
        icon: ScanBarcode,
      },
      {
        title: "Receiving & Dispatch Processes",
        description:
          "Improved receiving, dispatch, and picking-and-packing processes so stock is recorded correctly at every point it moves.",
        icon: PackageCheck,
      },
      {
        title: "Inventory Management Software",
        description:
          "Inventory and stock management systems — off-the-shelf or custom inventory applications — matched to your products and volume.",
        icon: Database,
      },
      {
        title: "Stock Dashboards & Alerts",
        description:
          "Stock-control dashboards, reorder-level setup, stock alerts, and inventory reporting so you act before you run out or over-order.",
        icon: Gauge,
      },
      {
        title: "Warehouse Digitalisation",
        description:
          "Moving from paper or messy spreadsheets to a proper digital system — including SKU creation and clean spreadsheet setups where that's the right fit.",
        icon: Laptop,
      },
      {
        title: "Inventory & Warehouse Audits",
        description:
          "Inventory and warehouse process audits plus standard operating procedures, so good practice is documented and repeatable.",
        icon: ClipboardCheck,
      },
      {
        title: "Outsourced Support & Training",
        description:
          "Staff training, stock-loss reduction, inventory KPI setup, monthly inventory support, and outsourced inventory management.",
        icon: Users,
      },
    ],
  },

  process: {
    eyebrow: "How We Work",
    title: "From Guesswork to Accurate Stock",
    steps: [
      {
        title: "Audit the Current State",
        text: "We look at how stock is counted, stored, and recorded today, and where accuracy is being lost — the count almost always reveals the real gap.",
      },
      {
        title: "Count and Reconcile",
        text: "We carry out a proper physical count and reconcile it against your records, so you have an accurate baseline to work from.",
      },
      {
        title: "Put Systems and Processes In Place",
        text: "We set up the inventory system, SKUs, bin locations, barcodes, and processes so stock stays accurate as it moves in and out.",
      },
      {
        title: "Support and Review",
        text: "We train your team, set reorder levels and reporting, and can provide ongoing counts and audits so accuracy doesn't slip back.",
      },
    ],
  },

  benefits: {
    eyebrow: "Why Businesses Choose MoBiz.mu",
    title: "Practical Inventory Help, On the Ground",
    subtitle:
      "Systems plus hands-on operational work — not just software you're left to figure out alone.",
    items: [
      {
        title: "Operations, Not Storage",
        text: "We manage and improve the inventory you already have. We're clear that we don't rent warehouse space — this is operational and systems work.",
        icon: Warehouse,
      },
      {
        title: "Hands-On Counting",
        text: "We do the physical count, not just recommend one — you get an accurate baseline you can actually trust.",
        icon: ClipboardList,
      },
      {
        title: "Less Stock Loss",
        text: "Better processes, barcodes, and reporting reduce shrinkage, over-ordering, and cash tied up in dead stock.",
        icon: PackageX,
      },
      {
        title: "Works With Your Setup",
        text: "Whether you run a shop, a store room, or a full warehouse, we fit the systems and processes to how you actually operate.",
        icon: Database,
      },
    ],
  },

  industries: {
    eyebrow: "Who We Help",
    title: "Inventory Support Across Stock-Heavy Businesses",
    text: "Any business holding stock benefits from counting it accurately and tracking it properly. We work with a range of stock-heavy operations in Mauritius.",
    items: [
      "Retail & shops",
      "Supermarkets & grocery",
      "Wholesalers & distributors",
      "Import & export traders",
      "Hardware & building supplies",
      "Pharmacies",
      "Spare parts & automotive",
      "Restaurants & catering",
      "E-commerce sellers",
      "Manufacturers",
      "Electronics retailers",
      "Growing SMEs",
    ],
  },

  portfolioSlugs: [],

  relatedLinks: {
    title: "Pairs Well With Inventory Work",
    subtitle:
      "Getting stock under control often goes hand in hand with better systems and tools.",
    links: [
      {
        label: "Inventory Management System Mauritius",
        description:
          "Our dedicated page on inventory management software — stock tracking, reorder levels, and reporting for Mauritius businesses.",
        href: "/inventory-management-system-mauritius",
      },
      {
        label: "Stock Management System Mauritius",
        description:
          "Focused detail on stock and warehouse software for businesses moving off spreadsheets and manual counts.",
        href: "/stock-management-system-mauritius",
      },
      {
        label: "Business Solutions",
        description:
          "Custom internal tools, dashboards, and business software — useful when a standard inventory system isn't quite enough.",
        href: "/services/business-solutions",
      },
    ],
  },

  faqs: [
    {
      question: "Do you rent out warehouse space?",
      answer:
        "No. MoBiz.mu does not provide storage or warehouse space for rent. We're an inventory operations and systems partner — we help you count, organise, and track the stock in the space you already have, and improve the processes around it.",
    },
    {
      question: "Can you do a full physical stock count for us?",
      answer:
        "Yes. Physical stock counting and cycle counting are core to what we do. We carry out the count, reconcile it against your records, and give you an accurate baseline plus a view of where discrepancies are coming from.",
    },
    {
      question: "We only use a spreadsheet — is that a problem?",
      answer:
        "It's common, and it's usually where the accuracy problems start. We can either set up a proper inventory system or, where a spreadsheet is genuinely the right fit for your size, build a clean, structured one that actually stays accurate.",
    },
    {
      question: "Do you set up barcode systems?",
      answer:
        "Yes. We implement barcode systems and product coding so stock is scanned accurately in and out, rather than keyed in manually — which removes a major source of counting errors.",
    },
    {
      question: "Can you provide ongoing inventory support, not just a one-off?",
      answer:
        "Yes. Alongside one-off counts and setups, we offer monthly inventory support, periodic audits, and outsourced inventory management for businesses that want accuracy maintained over time.",
    },
    {
      question: "Will you train our staff to keep it accurate?",
      answer:
        "Yes. A system only stays accurate if the team uses it properly, so staff training and clear standard operating procedures are part of how we work.",
    },
  ],

  cta: {
    title: "Let's Get Your Stock Under Control",
    text: "Tell us how you track inventory today and we'll suggest where to start — a proper count, a system, cleaner processes, or ongoing support.",
  },
};
