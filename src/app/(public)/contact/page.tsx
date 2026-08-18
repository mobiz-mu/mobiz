import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { FAQSection } from "@/components/ui/FAQSection";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { Reveal } from "@/components/motion/Reveal";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { FAQ_CATEGORIES } from "@/lib/company";
import {
  CONTACT_AREA_SERVED,
  CONTACT_EMAIL,
  CONTACT_LOCATION,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_E164,
  SITE_NAME,
  SITE_URL,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title:
    "Contact MoBiz.mu | Mauritius Business Support",
  description:
    "Contact MoBiz.mu for website design, digital marketing, accounting, inventory and business solutions in Mauritius. WhatsApp us for a fast reply.",
  path: "/contact",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

const WHATSAPP_MESSAGE = "Hello Mobiz, I would like to discuss my business needs.";

/**
 * Contact.
 *
 * WhatsApp leads deliberately — it is the channel Mobiz actually answers on and
 * the primary conversion path, so it is the first thing on the page and the
 * form's submit action.
 *
 * Only channels the business genuinely has appear here: phone, WhatsApp, email
 * and the country served. No street address and no opening hours, because
 * neither is established in the source material — and ContactPoint schema is
 * emitted without an address for the same reason.
 */
export default function ContactPage() {
  // The support questions are the ones people actually ask before getting in touch.
  const supportFaqs =
    FAQ_CATEGORIES.find((c) => c.id === "support")?.faqs ??
    FAQ_CATEGORIES[FAQ_CATEGORIES.length - 1]?.faqs ??
    [];

  const channels = [
    {
      label: "WhatsApp",
      value: CONTACT_PHONE_DISPLAY,
      note: "Fastest reply — usually the same working day.",
      href: whatsappUrl(WHATSAPP_MESSAGE),
      external: true,
      icon: MessageCircle,
      primary: true,
    },
    {
      label: "Phone",
      value: CONTACT_PHONE_DISPLAY,
      note: "Call us during business hours.",
      href: `tel:${CONTACT_PHONE_E164}`,
      external: false,
      icon: Phone,
      primary: false,
    },
    {
      label: "Email",
      value: CONTACT_EMAIL,
      note: "Best for detailed briefs and documents.",
      href: `mailto:${CONTACT_EMAIL}`,
      external: false,
      icon: Mail,
      primary: false,
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what your business needs"
        subtitle="Message us on WhatsApp for the fastest reply, or send the form below and we will come back to you with a straight recommendation."
        breadcrumbs={breadcrumbs}
        background="full"
        whatsappMessage={WHATSAPP_MESSAGE}
      />

      <Section spacing="default" className="bg-ink-900">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            {/* Channels */}
            <Reveal direction="left">
              <SectionHeading eyebrow="Get in touch" title="How to reach us" />

              <ul className="mt-8 space-y-3">
                {channels.map((channel) => (
                  <li key={channel.label}>
                    <a
                      href={channel.href}
                      {...(channel.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={
                        channel.primary
                          ? "flex min-h-11 items-start gap-4 rounded-xl border border-[rgba(37,211,102,0.28)] bg-[rgba(37,211,102,0.08)] p-5 transition-colors hover:bg-[rgba(37,211,102,0.14)]"
                          : "flex min-h-11 items-start gap-4 rounded-xl border border-line bg-surface-0 p-5 transition-colors hover:border-line-strong"
                      }
                    >
                      <span
                        aria-hidden
                        className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface-1"
                      >
                        <channel.icon
                          className="size-4"
                          style={{
                            color: channel.primary
                              ? "var(--color-whatsapp)"
                              : "var(--color-brand-mid)",
                          }}
                        />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold uppercase tracking-wider text-text-muted">
                          {channel.label}
                        </span>
                        <span className="mt-1 block text-base font-semibold text-text-primary">
                          {channel.value}
                        </span>
                        <span className="mt-1 block text-xs text-text-secondary">
                          {channel.note}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 rounded-xl border border-line bg-surface-0 p-5">
                <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                  <MapPin aria-hidden className="size-3.5 text-brand" />
                  Where we work
                </p>
                <p className="text-sm leading-relaxed text-text-body">
                  Based in {CONTACT_LOCATION}, working with businesses across{" "}
                  {CONTACT_AREA_SERVED.join(", ")}.
                </p>
              </div>

              <div className="mt-6">
                <ButtonLink
                  href={whatsappUrl(WHATSAPP_MESSAGE)}
                  variant="whatsapp"
                  size="lg"
                  fullWidth
                  external
                >
                  <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
                  Message us on WhatsApp
                </ButtonLink>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal direction="right">
              <div className="glow-card p-6 sm:p-8">
                <span aria-hidden className="glow-blob absolute -right-16 -top-24" />
                <div className="relative">
                  <h2 className="mb-2 text-xl font-bold tracking-tight text-text-primary sm:text-2xl">
                    Send us the details
                  </h2>
                  <p className="mb-7 text-sm leading-relaxed text-text-secondary">
                    Fill this in and we will open WhatsApp with your details ready to send.
                  </p>
                  <EnquiryForm intro="Hello Mobiz, I would like to discuss a project." />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {supportFaqs.length ? (
        <FAQSection faqs={supportFaqs} title="Before you get in touch" eyebrow="Quick answers" />
      ) : null}

      <InternalLinks
        title="Or start here"
        links={[
          { title: "Monthly packages", href: "/monthly-packages" },
          { title: "Free website review", href: "/free-website-review" },
          { title: "Free SEO audit", href: "/free-seo-audit" },
          { title: "Free business consultation", href: "/free-business-consultation" },
          { title: "All services", href: "/services" },
          { title: "Common questions", href: "/faq" },
        ]}
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: `${SITE_URL}/contact`,
          name: `Contact ${SITE_NAME}`,
          mainEntity: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: SITE_URL,
            email: CONTACT_EMAIL,
            telephone: CONTACT_PHONE_DISPLAY,
            contactPoint: [
              {
                "@type": "ContactPoint",
                contactType: "customer support",
                telephone: CONTACT_PHONE_E164,
                email: CONTACT_EMAIL,
                areaServed: [...CONTACT_AREA_SERVED],
                availableLanguage: ["en", "fr"],
              },
            ],
          },
        }}
      />
    </>
  );
}
