import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Heart, ArrowUpRight } from "lucide-react";

const footerColumns = [
  {
    title: "Core Services",
    links: [
      { label: "Website Design", href: "/services/website-design" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Accounting & Tax Returns", href: "/services/accounting-tax-returns" },
      { label: "Logistics", href: "/services/logistics" },
      { label: "Branding & Business Solutions", href: "/services/branding-business-solutions" },
    ],
  },
  {
    title: "Popular Services",
    links: [
      { label: "Website Design Mauritius", href: "/website-design-mauritius" },
      { label: "Ecommerce Website Mauritius", href: "/ecommerce-website-mauritius" },
      { label: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
      { label: "Accounting Services Mauritius", href: "/accounting-services-mauritius" },
      { label: "Company Registration Mauritius", href: "/company-registration-mauritius" },
      { label: "VAT Filing Mauritius", href: "/vat-filing-mauritius" },
      { label: "SEO Services Mauritius", href: "/seo-services-mauritius" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Why MoBiz.mu", href: "/why-us" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Mauritius Services", href: "/mauritius-services" },
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Security Policy", href: "/security-policy" },
    ],
  },
];

const mapEmbedSrc =
  "https://www.google.com/maps?q=MoBiz.mu%20La%20Croisette%20Grand%20Baie%20Mauritius&z=15&output=embed";

const googleReviewLink = "https://g.page/r/CQN8HIPUVP1DEBM/review";

const whatsappLink =
  "https://wa.me/23055068119?text=Hello%20MoBiz.mu%2C%20I%20want%20to%20discuss%20a%20business%20service.";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t border-white/10 bg-[#071226] text-white"
      aria-labelledby="footer-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.16),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(37,99,235,0.14),transparent_32%)]" />

      <Container className="relative py-10 sm:py-12 lg:py-14">
        <h2 id="footer-heading" className="sr-only">
          MoBiz.mu footer
        </h2>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur sm:p-6 lg:p-8">
          <div className="grid gap-9 lg:grid-cols-[1.05fr_1.35fr_0.9fr] xl:gap-10">
            <div>
              <div className="inline-flex rounded-full border border-[#f3d77a]/25 bg-[#f3d77a]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#f3d77a]">
                MoBiz.mu
              </div>

              <h3 className="mt-4 text-balance text-[1.75rem] font-semibold leading-tight text-white sm:text-[2.1rem] lg:text-[2.25rem]">
                Premium Business Solutions in Mauritius
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
                Website design, ecommerce development, SEO, digital marketing,
                accounting, company registration, VAT filing, logistics,
                branding and business support for ambitious businesses in
                Mauritius, Rodrigues and Réunion.
              </p>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#f3d77a] px-5 py-2.5 text-sm font-bold text-[#071226] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Request a Quote
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>

                <Link
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-[#071226]"
                >
                  WhatsApp Us
                </Link>
              </div>

              <div className="mt-6 space-y-3 text-sm text-white/80">
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

            <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d77a]">
                    {column.title}
                  </h4>

                  <ul className="mt-4 space-y-2.5">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="group inline-flex text-sm leading-6 text-white/76 transition hover:text-[#f3d77a]"
                        >
                          <span className="transition group-hover:translate-x-1">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#f3d77a]">
                Location
              </h4>

              <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-white/5 shadow-[0_16px_36px_rgba(2,8,20,0.18)]">
                <div className="relative h-[190px] w-full sm:h-[210px] lg:h-[190px]">
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

              <div className="mt-4 rounded-[22px] border border-white/10 bg-white p-3 shadow-[0_18px_38px_rgba(2,8,20,0.18)]">
                <div className="grid items-center gap-3 sm:grid-cols-[92px_minmax(0,1fr)] lg:grid-cols-1 xl:grid-cols-[92px_minmax(0,1fr)]">
                  <Link
                    href={googleReviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Leave a Google review for MoBiz.mu"
                    className="group block"
                  >
                    <div className="relative mx-auto h-[92px] w-[92px] overflow-hidden rounded-[16px] border border-slate-200 bg-white transition duration-300 group-hover:scale-[1.02] group-hover:shadow-[0_12px_24px_rgba(7,18,38,0.10)]">
                      <Image
                        src="/icons/googleQRcodereviews.png"
                        alt="Google reviews QR code for MoBiz.mu"
                        fill
                        sizes="92px"
                        className="object-contain p-2"
                      />
                    </div>
                  </Link>

                  <div className="min-w-0 text-center sm:text-left lg:text-center xl:text-left">
                    <Link
                      href={googleReviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label="Open Google reviews page for MoBiz.mu"
                    >
                      <div className="relative h-[82px] w-full overflow-hidden rounded-[16px] border border-slate-200 bg-white">
                        <Image
                          src="/images/google-reviews-cover.jpg"
                          alt="Google reviews cover image for MoBiz.mu"
                          fill
                          sizes="(max-width: 640px) 100vw, 240px"
                          className="object-contain bg-white"
                        />
                      </div>
                    </Link>

                    <p className="mt-2 text-sm font-bold text-[#071226]">
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

          <div className="mt-8 border-t border-white/10 pt-5">
            <div className="flex flex-col items-center justify-between gap-4 text-center lg:flex-row lg:text-left">
              <div>
                <p className="text-sm text-white/68">
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