import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Heart,
  Mail,
  MapPin,
  Phone,
  Search,
  Sparkles,
} from "lucide-react";

const coreServices = [
  { label: "Website Design", href: "/services/website-design" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Accounting & Tax Returns", href: "/services/accounting-tax-returns" },
  { label: "Logistics", href: "/services/logistics" },
  {
    label: "Branding & Business Solutions",
    href: "/services/branding-business-solutions",
  },
];

const companyLinks = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Why MoBiz.mu", href: "/why-us" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Mauritius Services", href: "/mauritius-services" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Careers", href: "/careers" },
];

const policyLinks = [
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Security Policy", href: "/security-policy" },
];

const popularSearches = [
  { label: "Website Design Mauritius", href: "/website-design-mauritius" },
  { label: "Ecommerce Website Mauritius", href: "/ecommerce-website-mauritius" },
  { label: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
  { label: "Accounting Services Mauritius", href: "/accounting-services-mauritius" },
  { label: "Company Registration Mauritius", href: "/company-registration-mauritius" },
  { label: "VAT Filing Mauritius", href: "/vat-filing-mauritius" },
  { label: "SEO Services Mauritius", href: "/seo-services-mauritius" },

  { label: "Car Rental Website Mauritius", href: "/car-rental-website-mauritius" },
  { label: "Booking Website Mauritius", href: "/booking-website-mauritius" },
  { label: "Tour Operator Website Mauritius", href: "/tour-operator-website-mauritius" },
  { label: "Hotel Website Mauritius", href: "/hotel-website-mauritius" },
  { label: "Villa Booking Website Mauritius", href: "/villa-booking-website-mauritius" },
  { label: "Real Estate Website Mauritius", href: "/real-estate-website-mauritius" },
  { label: "Restaurant Website Mauritius", href: "/restaurant-website-mauritius" },
  { label: "Salon Website Mauritius", href: "/salon-website-mauritius" },
  { label: "Clinic Website Mauritius", href: "/doctor-clinic-website-mauritius" },
  { label: "School Website Mauritius", href: "/school-website-mauritius" },
  { label: "Construction Website Mauritius", href: "/construction-website-mauritius" },
  { label: "Accounting Firm Website Mauritius", href: "/accounting-firm-website-mauritius" },
  { label: "Law Firm Website Mauritius", href: "/law-firm-website-mauritius" },
  { label: "Ecommerce Store Mauritius", href: "/ecommerce-store-mauritius" },
  { label: "Custom Website Mauritius", href: "/custom-website-mauritius" },
  {
    label: "Web Application Development Mauritius",
    href: "/web-application-development-mauritius",
  },
  { label: "Accounting Software Mauritius", href: "/accounting-software-mauritius" },
  {
    label: "Inventory Management System Mauritius",
    href: "/inventory-management-system-mauritius",
  },
  { label: "Stock Management System Mauritius", href: "/stock-management-system-mauritius" },
  { label: "CRM Software Mauritius", href: "/crm-software-mauritius" },
  { label: "Booking System Mauritius", href: "/booking-system-mauritius" },
  { label: "Invoice Software Mauritius", href: "/invoice-software-mauritius" },
];

const mapEmbedSrc =
  "https://www.google.com/maps?q=MoBiz.mu%20La%20Croisette%20Grand%20Baie%20Mauritius&z=15&output=embed";

const googleReviewLink = "https://g.page/r/CQN8HIPUVP1DEBM/review";

const whatsappLink =
  "https://wa.me/23055068119?text=Hello%20MoBiz.mu%2C%20I%20want%20to%20discuss%20a%20business%20service.";

function FooterList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f3d77a]">
        {title}
      </h4>

      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex text-sm font-medium leading-6 text-white/72 transition hover:text-[#f3d77a]"
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
      className="relative overflow-hidden border-t border-white/10 bg-[#071226] text-white"
      aria-labelledby="footer-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.16),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent)]" />

      <Container className="relative py-8 sm:py-10 lg:py-12">
        <h2 id="footer-heading" className="sr-only">
          MoBiz.mu footer
        </h2>

        <div className="overflow-hidden rounded-[30px] border border-white/15 bg-white/[0.045] shadow-[0_28px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.05fr_0.95fr] lg:p-8 xl:grid-cols-[1.05fr_0.82fr_0.78fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f3d77a]/30 bg-[#f3d77a]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.24em] text-[#f3d77a]">
                <Sparkles className="h-3.5 w-3.5" />
                MoBiz.mu
              </div>

              <h3 className="mt-5 max-w-xl text-balance text-[2rem] font-black leading-[1.08] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.8rem]">
                Premium Business Solutions in Mauritius
              </h3>

              <p className="mt-5 max-w-xl text-sm leading-7 text-white/70 sm:text-[15px]">
                Website design, ecommerce development, SEO, digital marketing,
                accounting, company registration, VAT filing, logistics,
                branding and business support for ambitious businesses in
                Mauritius, Rodrigues and Réunion.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f3d77a] px-5 py-3 text-sm font-black text-[#071226] shadow-[0_16px_34px_rgba(243,215,122,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
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

              <div className="mt-7 grid gap-3 text-sm text-white/78">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#f3d77a]" />
                  <span>La Croisette, Grand Baie, Mauritius</span>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#f3d77a]" />
                  <Link
                    href="mailto:support@mobiz.mu"
                    className="transition hover:text-[#f3d77a]"
                  >
                    support@mobiz.mu
                  </Link>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-[18px] w-[18px] shrink-0 text-[#f3d77a]" />
                  <Link
                    href="tel:+23055068119"
                    className="transition hover:text-[#f3d77a]"
                  >
                    +230 5506 8119
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-7 sm:grid-cols-3 xl:col-span-1">
              <FooterList title="Core Services" links={coreServices} />
              <FooterList title="Company" links={companyLinks} />
              <FooterList title="Policies" links={policyLinks} />
            </div>

            <div className="xl:pl-2">
              <h4 className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f3d77a]">
                Location
              </h4>

              <div className="mt-4 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_18px_42px_rgba(2,8,20,0.2)]">
                <div className="relative h-[190px] w-full sm:h-[220px] xl:h-[170px]">
                  <iframe
                    src={mapEmbedSrc}
                    title="MoBiz.mu Google Map location"
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-4 rounded-[24px] border border-white/10 bg-white p-3 shadow-[0_18px_42px_rgba(2,8,20,0.2)]">
                <div className="grid items-center gap-3 sm:grid-cols-[92px_minmax(0,1fr)] xl:grid-cols-1 2xl:grid-cols-[92px_minmax(0,1fr)]">
                  <Link
                    href={googleReviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Leave a Google review for MoBiz.mu"
                    className="group block"
                  >
                    <div className="relative mx-auto h-[92px] w-[92px] overflow-hidden rounded-[18px] border border-slate-200 bg-white transition duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_12px_24px_rgba(7,18,38,0.12)]">
                      <Image
                        src="/icons/googleQRcodereviews.png"
                        alt="Google reviews QR code for MoBiz.mu"
                        fill
                        sizes="92px"
                        className="object-contain p-2"
                      />
                    </div>
                  </Link>

                  <div className="min-w-0 text-center sm:text-left xl:text-center 2xl:text-left">
                    <Link
                      href={googleReviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open Google reviews page for MoBiz.mu"
                      className="block"
                    >
                      <div className="relative h-[76px] w-full overflow-hidden rounded-[18px] border border-slate-200 bg-white">
                        <Image
                          src="/images/google-reviews-cover.jpg"
                          alt="Google reviews cover image for MoBiz.mu"
                          fill
                          sizes="(max-width: 640px) 100vw, 240px"
                          className="object-contain bg-white"
                        />
                      </div>
                    </Link>

                    <p className="mt-2 text-sm font-black text-[#071226]">
                      Support MoBiz.mu
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Scan or tap to leave your Google review.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 bg-white/[0.03] px-5 py-6 sm:px-7 lg:px-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#f3d77a]/25 bg-[#f3d77a]/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.22em] text-[#f3d77a]">
                  <Search className="h-3.5 w-3.5" />
                  Popular Searches
                </div>

                <p className="mt-3 text-sm leading-6 text-white/66">
                  High-intent Mauritius SEO pages for businesses searching for
                  websites, booking systems, ecommerce stores and custom software.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:max-w-[780px] lg:justify-end">
                {popularSearches.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full border border-white/12 bg-white/[0.07] px-3.5 py-2 text-xs font-bold text-white/76 transition hover:-translate-y-0.5 hover:border-[#f3d77a]/40 hover:bg-[#f3d77a] hover:text-[#071226]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 px-5 py-5 sm:px-7 lg:px-8">
            <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
              <div>
                <p className="text-sm text-white/66">
                  © 2026 MoBiz.mu — All rights reserved.
                </p>

                <p className="mt-1 text-sm font-medium text-white/82">
                  Website design, accounting, tax, digital marketing and
                  business solutions in Mauritius.
                </p>
              </div>

              <div className="flex items-center justify-center gap-2.5">
                <span className="text-sm font-semibold text-white/88">
                  Built with Love
                </span>
                <span className="relative inline-flex">
                  <span className="absolute inline-flex h-8 w-8 animate-ping rounded-full bg-red-500/35" />
                  <Heart className="relative h-8 w-8 animate-pulse fill-[#e11d48] text-[#e11d48] drop-shadow-[0_0_14px_rgba(225,29,72,0.55)]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}