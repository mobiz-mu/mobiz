import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { DataHighway } from "@/components/visual/DataHighway";
import { WhatsAppIcon } from "@/components/ui/icons";
import { serviceDivisions } from "@/lib/navigation";
import {
  CONTACT_EMAIL,
  CONTACT_GEO_LABEL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  SOCIAL_LINKS,
  WHATSAPP_DEFAULT_MESSAGE,
  whatsappUrl,
} from "@/lib/site";

/*
 * Footer link groups.
 *
 * "Popular" carries the highest-value SEO landing pages — this block is a real
 * part of the internal linking structure, not decoration, so it stays curated
 * rather than exhaustive.
 */
const LINK_GROUPS: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Services",
    links: serviceDivisions.map((d) => ({ label: d.label, href: d.href })),
  },
  {
    heading: "Popular",
    links: [
      { label: "Website Design Mauritius", href: "/website-design-mauritius" },
      { label: "SEO Services Mauritius", href: "/seo-services-mauritius" },
      { label: "Accounting Services Mauritius", href: "/accounting-services-mauritius" },
      { label: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
      { label: "Company Registration", href: "/company-registration-mauritius" },
      { label: "VAT Filing Mauritius", href: "/vat-filing-mauritius" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Mobiz", href: "/about" },
      { label: "Why Choose Us", href: "/why-us" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Monthly Packages", href: "/monthly-packages" },
      { label: "Blog & Insights", href: "/blog" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Security Policy", href: "/security-policy" },
      { label: "Policies", href: "/policies" },
    ],
  },
];

/**
 * The single production footer.
 *
 * Contrast is the thing that previously broke here: every link uses
 * `text-text-body` (14.6:1) and brightens to pure white on hover. The only
 * `text-text-faint` copy is the decorative coordinate strip, which carries no
 * information that isn't available elsewhere.
 *
 * Server component — the Data Highway is SVG and the whole footer ships no JS.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line-faint bg-ink-950">
      <DataHighway opacity={0.22} density="trace" className="hidden lg:block" />

      {/* Wordmark band */}
      <div className="relative overflow-hidden border-b border-line-faint">
        <div className="absolute inset-x-0 top-0 h-px overflow-hidden" aria-hidden>
          <div className="footer-scan h-full w-24 bg-linear-to-r from-transparent via-brand to-transparent" />
        </div>

        <div className="mx-auto max-w-[1320px] px-5 pb-10 pt-16 sm:px-8 lg:px-16">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 font-mono text-[9px] uppercase tracking-widest text-text-muted">
                © {year} · Mauritius · {CONTACT_GEO_LABEL}
              </p>
              <p
                aria-hidden
                className="select-none text-[clamp(52px,10vw,140px)] font-bold leading-none tracking-tight"
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.12)",
                  color: "transparent",
                  letterSpacing: "-0.02em",
                }}
              >
                MOBIZ
                <span style={{ WebkitTextStroke: "1px rgba(192,24,34,0.5)" }}>.MU</span>
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:max-w-[280px] sm:pb-2">
              <p className="text-lg font-bold leading-snug text-text-primary">
                Build. Market.
                <br />
                Manage. Grow.
              </p>
              <a
                href={whatsappUrl(WHATSAPP_DEFAULT_MESSAGE)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 self-start rounded-xl border border-[rgba(37,211,102,0.25)] bg-[rgba(37,211,102,0.12)] px-5 py-2.5 text-sm font-semibold text-text-primary transition-colors hover:bg-[rgba(37,211,102,0.2)]"
              >
                <WhatsAppIcon size={14} className="text-[color:var(--color-whatsapp)]" />
                Chat on WhatsApp
                <ArrowRight aria-hidden className="size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Link grid */}
      <div className="relative mx-auto max-w-[1320px] px-5 py-14 sm:px-8 lg:px-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <Logo className="mb-5" />
            <p className="mb-5 max-w-[220px] text-sm leading-relaxed text-text-secondary">
              Digital solutions built for businesses in Mauritius.
            </p>

            <p className="mb-3 flex items-center gap-1.5">
              <MapPin aria-hidden className="size-3 shrink-0 text-brand" />
              <span className="font-mono text-xs text-text-muted">{CONTACT_LOCATION}</span>
            </p>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-text-body transition-colors hover:text-text-primary"
            >
              <WhatsAppIcon size={13} className="text-[color:var(--color-whatsapp)]" />
              {CONTACT_PHONE_DISPLAY}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-2 block text-sm text-text-body transition-colors hover:text-text-primary"
            >
              {CONTACT_EMAIL}
            </a>

            <ul className="mt-3 flex flex-wrap gap-x-4">
              {SOCIAL_LINKS.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center px-1 text-xs font-medium text-text-body underline-offset-4 transition-colors hover:text-text-primary hover:underline"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {LINK_GROUPS.map((group) => (
            <nav key={group.heading} aria-label={group.heading}>
              <h2 className="mb-5 font-mono text-[9px] font-semibold uppercase tracking-widest text-text-muted">
                {group.heading}
              </h2>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-11 items-center text-sm text-text-body transition-colors hover:text-brand-mid"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-line-faint pt-8 sm:flex-row">
          <p className="font-mono text-[10px] text-text-muted">
            © {year} Mobiz.mu · All rights reserved · Mauritius
          </p>
          <p className="flex flex-wrap items-center gap-3 font-mono text-[9px] uppercase tracking-widest text-text-faint">
            <span>Mauritius / Digital Business Infrastructure</span>
            <span aria-hidden className="size-1 shrink-0 rounded-full bg-brand" />
            <span>{CONTACT_GEO_LABEL}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
