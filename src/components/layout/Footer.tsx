import Container from "@/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
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

const googleReviewLink = "https://g.page/r/CQN8HIPUVP1DEBM/review";

export default function Footer() {
  return (
    <footer
      className="border-t border-white/10 bg-[#071226] text-white"
      aria-labelledby="footer-heading"
    >
      <Container className="py-6 sm:py-8 lg:py-9">
        <h2 id="footer-heading" className="sr-only">
          MoBiz.mu footer
        </h2>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_1.05fr_0.9fr] lg:gap-6">
          <div>
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
              MoBiz.mu
            </div>

            <h3 className="mt-3 text-balance text-[1.7rem] font-semibold leading-tight text-white sm:text-[2rem] lg:text-[2.2rem]">
              MoBiz.mu — Digital Business Solutions in Mauritius
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/72">
              Premium website design, digital marketing, accounting, logistics,
              branding, and business support for companies in Mauritius,
              Rodrigues, Réunion, and the wider Indian Ocean region.
            </p>

            <div className="mt-4 space-y-2.5 text-sm text-white/80">
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

          <div className="grid gap-6 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white/64">
                  {column.title}
                </h4>

                <ul className="mt-3 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm leading-6 text-white/80 transition hover:text-[#f3d77a]"
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

            <div className="mt-3 overflow-hidden rounded-[20px] border border-white/10 bg-white/5 shadow-[0_16px_36px_rgba(2,8,20,0.16)]">
              <div className="relative h-[190px] w-full">
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

            <div className="mt-4 rounded-[22px] border border-white/10 bg-white p-2.5 shadow-[0_18px_38px_rgba(2,8,20,0.18)]">
              <div className="grid items-center gap-2.5 sm:grid-cols-[92px_minmax(0,1fr)]">
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

                <div className="min-w-0">
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

                  <p className="mt-2 text-sm font-semibold text-[#071226]">
                    Thanks for your support!
                  </p>

                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Scan the QR code or tap the image to leave your Google review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <div className="flex flex-col items-center justify-center gap-1.5 text-center">
            <p className="text-sm text-white/68">
              © 2026 MoBiz.mu — All rights reserved.
            </p>

            <p className="text-sm font-medium text-white/82">
              Powered by MoBiz.mu
            </p>

            <div className="flex items-center justify-center gap-2.5 pt-1">
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
      </Container>
    </footer>
  );
}