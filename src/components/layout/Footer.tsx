import Container from "@/components/ui/Container";
import Link from "next/link";
import { Mail, MapPin, Phone, Heart } from "lucide-react";

const footerColumns = [
  {
    title: "Services",
    links: [
      { label: "Website Design", href: "/services/website-design" },
      { label: "Digital Marketing", href: "/services/digital-marketing" },
      { label: "Accounting & Tax Returns", href: "/services/accounting-tax-returns" },
      { label: "Logistics", href: "/services/logistics" },
      { label: "Branding & Business Solutions", href: "/services/branding-business-solutions" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Portfolio", href: "/portfolio" },
      { label: "Why Us", href: "/why-us" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blog", href: "/blog" },
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

const mapLink =
  "https://www.google.com/maps/search/?api=1&query=MoBiz.mu%20La%20Croisette%20Grand%20Baie%20Mauritius";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#071226] text-white"
      aria-labelledby="footer-heading"
    >
      <Container className="py-8 sm:py-10 lg:py-12">
        <h2 id="footer-heading" className="sr-only">
          MoBiz.mu footer
        </h2>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1.1fr_0.95fr] lg:gap-8">
          <div>
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
              MoBiz.mu
            </div>

            <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight text-white sm:text-3xl">
              MoBiz.mu — Digital Business Solutions in Mauritius
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-white/72">
              Premium website design, digital marketing, accounting, logistics,
              branding, and business support for companies in Mauritius,
              Rodrigues, Réunion, and the wider Indian Ocean region.
            </p>

            <div className="mt-5 space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#f3d77a]" />
                <span>La Croisette, Grand Baie</span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#f3d77a]" />
                <Link
                  href="mailto:support@mobiz.mu"
                  className="transition hover:text-[#f3d77a]"
                >
                  support@mobiz.mu
                </Link>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[#f3d77a]" />
                <Link
                  href="tel:+23055068119"
                  className="transition hover:text-[#f3d77a]"
                >
                  +230 5506 8119
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64">
                  {column.title}
                </h4>

                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/80 transition hover:text-[#f3d77a]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64">
              Location
            </h4>

            <div className="mt-4 overflow-hidden rounded-[22px] border border-white/10 bg-white/5">
              <div className="relative h-[220px] w-full">
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

            <div className="mt-4">
              <Link
                href={mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/12 bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-[#f3d77a]/40 hover:text-[#f3d77a]"
              >
                Open in Google Maps
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
            <p>© 2026 MoBiz.mu — All rights reserved.</p>

            <div className="flex items-center gap-2 text-white/75">
              <span>Powered by MoBiz.mu</span>
              <Heart className="h-5 w-5 animate-pulse fill-[#e11d48] text-[#e11d48]" />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}