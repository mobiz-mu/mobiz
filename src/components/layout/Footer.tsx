import Container from "@/components/ui/Container";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Building2,
  Calculator,
  Globe2,
  Mail,
  MapPin,
  Megaphone,
  Phone,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
} from "lucide-react";

const serviceLinks = [
  { label: "Website Design", href: "/services/website-design" },
  { label: "E-Commerce Solutions", href: "/ecommerce-website-mauritius" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Accounting & Tax", href: "/services/accounting-tax-returns" },
  { label: "Logistics Support", href: "/services/logistics" },
  { label: "Branding Solutions", href: "/services/branding-business-solutions" },
];

const companyLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Why MoBiz.mu", href: "/why-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Mauritius Solutions", href: "/mauritius-services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Security Policy", href: "/security-policy" },
];

const seoSearches = [
  {
    label: "Website Design Mauritius",
    href: "/website-design-mauritius",
    Icon: Globe2,
    color: "from-[#ef4444] to-[#991b1b]",
  },
  {
    label: "Ecommerce Website Mauritius",
    href: "/ecommerce-website-mauritius",
    Icon: ShoppingBag,
    color: "from-[#f97316] to-[#c2410c]",
  },
  {
    label: "Digital Marketing Mauritius",
    href: "/digital-marketing-mauritius",
    Icon: Megaphone,
    color: "from-[#3b82f6] to-[#1e3a8a]",
  },
  {
    label: "Accounting Services Mauritius",
    href: "/accounting-services-mauritius",
    Icon: Calculator,
    color: "from-[#facc15] to-[#b45309]",
  },
  {
    label: "Company Registration Mauritius",
    href: "/company-registration-mauritius",
    Icon: Building2,
    color: "from-[#22c55e] to-[#166534]",
  },
  {
    label: "SEO Services Mauritius",
    href: "/seo-services-mauritius",
    Icon: Search,
    color: "from-[#06b6d4] to-[#155e75]",
  },
  {
    label: "Business Software Mauritius",
    href: "/web-application-development-mauritius",
    Icon: BriefcaseBusiness,
    color: "from-[#8b5cf6] to-[#5b21b6]",
  },
];

const whatsappLink =
  "https://wa.me/23055068119?text=Hello%20MoBiz.mu%2C%20I%20want%20to%20discuss%20a%20business%20service.";

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3
        className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f8d75a]"
        style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
      >
        {title}
      </h3>

      <ul className="mt-3 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex text-[13px] font-semibold leading-5 text-white/68 transition hover:text-[#f8d75a]"
            >
              <span className="transition duration-300 group-hover:translate-x-1">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#071226] text-white"
      aria-labelledby="footer-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_10%,rgba(248,215,90,0.16),transparent_24%),radial-gradient(circle_at_90%_80%,rgba(19,163,127,0.16),transparent_26%),linear-gradient(135deg,#071226_0%,#0b1831_45%,#071f5f_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/18" />

      <Container className="relative z-10 max-w-[1520px] py-8 sm:py-9 lg:py-10">
        <h2 id="footer-heading" className="sr-only">
          MoBiz.mu footer
        </h2>

        <div className="rounded-[30px] border border-white/12 bg-white/[0.055] p-5 shadow-[0_28px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl sm:p-6 lg:p-7">
          <div className="grid gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-[#f8d75a]/28 bg-[#f8d75a]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-[#f8d75a]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                MoBiz.mu
              </div>

              <h3
                className="mt-4 max-w-3xl text-balance text-3xl font-black leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-[2.7rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Premium Business Solutions in Mauritius
              </h3>

              <p
                className="mt-4 max-w-3xl text-pretty text-[14px] leading-7 text-white/72 sm:text-[15px]"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                MoBiz.mu helps Mauritius businesses grow with website design,
                ecommerce websites, SEO, digital marketing, accounting and tax
                services, company registration, VAT filing, logistics support,
                branding and business software solutions.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f8d75a] px-5 py-3 text-sm font-black text-[#071226] shadow-[0_16px_34px_rgba(248,215,90,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Request a Quote
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/18 bg-white/10 px-5 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#071226]"
                >
                  WhatsApp Us
                </Link>
              </div>

              <div className="mt-5 grid gap-2 text-[13px] font-semibold text-white/72 sm:grid-cols-3">
                <div className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#f8d75a]" />
                  <span>La Croisette, Grand Baie</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#f8d75a]" />
                  <Link
                    href="mailto:support@mobiz.mu"
                    className="transition hover:text-[#f8d75a]"
                  >
                    support@mobiz.mu
                  </Link>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#f8d75a]" />
                  <Link
                    href="tel:+23055068119"
                    className="transition hover:text-[#f8d75a]"
                  >
                    +230 5506 8119
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <FooterColumn title="Services" links={serviceLinks} />
              <FooterColumn title="Company" links={companyLinks} />
              <FooterColumn title="Policies" links={policyLinks} />
            </div>
          </div>

          <div className="my-6 h-px bg-white/10" />

          <div className="grid gap-4 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-[#f8d75a]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                <ShieldCheck className="h-3.5 w-3.5" />
                Popular Mauritius Searches
              </div>

              <p
                className="mt-2 max-w-md text-[12.5px] leading-5 text-white/60"
                style={{ fontFamily: '"Poppins", sans-serif' }}
              >
                SEO pages built for high-intent Mauritius business searches.
              </p>
            </div>

            <div className="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:overflow-visible sm:px-0">
              <div className="flex min-w-max gap-2 sm:min-w-0 sm:flex-wrap lg:justify-end">
                {seoSearches.map((link) => {
                  const Icon = link.Icon;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.07] px-3 py-2 text-[12px] font-bold text-white/76 transition hover:-translate-y-0.5 hover:border-[#f8d75a]/35 hover:bg-white hover:text-[#071226]"
                    >
                      <span
                        className={`inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${link.color} text-white shadow-[0_8px_16px_rgba(0,0,0,0.18)]`}
                      >
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-5 text-center lg:flex-row lg:text-left">
            <p className="text-[12.5px] text-white/58">
              Copyright 2026 MoBiz.mu. All rights reserved.
            </p>

            <p className="text-[12.5px] font-semibold text-white/76">
              Website design, accounting, tax, SEO and digital marketing in
              Mauritius.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
