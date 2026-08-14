import type { Metadata } from "next";
import { AlertCircle, Check } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { ProcessSteps } from "@/components/page/ContentBlocks";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { FAQSection } from "@/components/ui/FAQSection";
import { InternalLinks } from "@/components/ui/InternalLinks";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { PackageComparison } from "@/components/packages/PackageComparison";
import { BrowserMockup } from "@/components/visual/Mockups";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd, buildFaqSchema } from "@/lib/services/schema";
import {
  ADDON_CATEGORY_LABELS,
  ADDON_PRICE_LABEL,
  CURRENCY,
  FEATURE_GROUP_LABELS,
  HOW_IT_WORKS,
  IMPORTANT_NOTES,
  MONTHLY_PACKAGES,
  PACKAGE_ADDONS,
  PACKAGE_FAQS,
  TRUST_BADGES,
  WHY_MOBIZ,
  type PackageAddOn,
} from "@/lib/monthly-packages";
import { generalWhatsAppUrl } from "@/lib/monthly-packages-whatsapp";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { SITE_NAME, SITE_URL, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Monthly Website Packages Mauritius | From Rs 1,499/month | MoBiz.mu",
  description:
    "Monthly website packages for Mauritius businesses. Website, hosting, Google setup, SEO basics, social media and support from Rs 1,499/month on a 12-month subscription.",
  path: "/monthly-packages",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Monthly Packages" }];

const ACCENT_BY_PACKAGE: Record<string, AccentId> = {
  starter: "blue",
  business: "red",
  premium: "yellow",
};

/**
 * Monthly packages — the site's primary commercial page.
 *
 * Every price, feature line, add-on, condition and CTA label is read from
 * `lib/monthly-packages.ts`, which carries the verified commercial data. Nothing
 * on this page is written by hand, so the page cannot drift from the real offer.
 *
 * Two deliberate honesty decisions:
 *
 *  - Add-ons show "Price confirmed after requirements review" rather than a
 *    number, because no fixed rate is confirmed for them.
 *  - The Offer schema publishes only the three real monthly prices, with the
 *    12-month commitment stated. No AggregateRating, no fake discount.
 *
 * The exclusions block is given real visual weight rather than being buried in
 * small print — it is the thing that prevents a mis-sold expectation.
 */
export default function MonthlyPackagesPage() {
  const grouped = PACKAGE_ADDONS.reduce<Record<string, PackageAddOn[]>>((acc, addon) => {
    (acc[addon.category] ??= []).push(addon);
    return acc;
  }, {});

  return (
    <>
      <PageHero
        eyebrow="Monthly website packages"
        title="A complete web presence, on a monthly plan"
        subtitle="Website, hosting, Google setup, SEO basics, social media and support in one predictable monthly cost — with no large upfront build fee."
        breadcrumbs={breadcrumbs}
        background="full"
        bullets={[...TRUST_BADGES]}
        primaryCta={{ label: "Compare packages", href: "#packages" }}
        whatsappMessage="Hello Mobiz, I would like to know more about your monthly website packages."
        visual={
          <BrowserMockup url="mobiz.mu/monthly-packages">
            <div className="space-y-3 p-5">
              {MONTHLY_PACKAGES.map((pkg) => {
                const accent = ACCENTS[ACCENT_BY_PACKAGE[pkg.id] ?? "red"];
                return (
                  <div
                    key={pkg.id}
                    className="flex items-center justify-between gap-3 rounded-lg border border-line bg-surface-1 px-3.5 py-3"
                  >
                    <span className="text-xs font-semibold text-text-primary">{pkg.name}</span>
                    <span
                      className="font-mono text-[11px] font-bold"
                      style={{ color: accent.onDark }}
                    >
                      {pkg.priceLabel}
                    </span>
                  </div>
                );
              })}
            </div>
          </BrowserMockup>
        }
      />

      {/* Packages */}
      <Section id="packages" spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Choose your package"
              title="Three packages, one predictable monthly cost"
              description="Every package includes the website, hosting and support. The difference is how much marketing and content work comes with it."
            />
          </Reveal>

          <ul className="mt-12 grid gap-5 lg:grid-cols-3">
            {MONTHLY_PACKAGES.map((pkg, index) => {
              const accent = ACCENTS[ACCENT_BY_PACKAGE[pkg.id] ?? "red"];
              const featured = Boolean(pkg.badge);

              return (
                <li key={pkg.id} className="flex">
                  <Reveal direction="up" delay={index * 0.08} className="flex w-full">
                    <div
                      className={cn(
                        "glow-card flex w-full flex-col p-6 sm:p-7",
                        featured && "lg:-translate-y-4",
                      )}
                      style={{ ["--glow-hue" as string]: accent.rgb }}
                    >
                      {featured ? (
                        <span aria-hidden className="glow-blob absolute -right-16 -top-24" />
                      ) : null}

                      <div className="relative flex flex-1 flex-col">
                        <div className="mb-5 flex items-center justify-between gap-3">
                          <h3 className="text-lg font-bold text-text-primary">{pkg.name}</h3>
                          {pkg.badge ? (
                            <span
                              className="rounded-md px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider"
                              style={{
                                border: `1px solid ${accent.hex}70`,
                                color: accent.onDark,
                                background: `${accent.hex}18`,
                              }}
                            >
                              {pkg.badge}
                            </span>
                          ) : null}
                        </div>

                        <p className="text-3xl font-bold tracking-tight text-text-primary">
                          {pkg.priceLabel.split("/")[0]}
                          <span className="text-base font-medium text-text-muted">/month</span>
                        </p>
                        <p className="mt-1.5 text-xs text-text-muted">
                          {pkg.commitment} · Launch in {pkg.launch}
                        </p>

                        <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                          {pkg.description}
                        </p>
                        {pkg.inherits ? (
                          <p
                            className="mt-4 text-xs font-semibold"
                            style={{ color: accent.onDark }}
                          >
                            {pkg.inherits}
                          </p>
                        ) : null}

                        <div className="mt-6 flex-1 space-y-5">
                          {(
                            Object.keys(FEATURE_GROUP_LABELS) as (keyof typeof FEATURE_GROUP_LABELS)[]
                          ).map((groupKey) => {
                            const items = pkg.features[groupKey];
                            if (!items?.length) return null;
                            return (
                              <div key={groupKey}>
                                <p className="mb-2.5 font-mono text-[9px] uppercase tracking-widest text-text-faint">
                                  {FEATURE_GROUP_LABELS[groupKey]}
                                </p>
                                <ul className="space-y-2">
                                  {items.map((feature) => (
                                    <li key={feature} className="flex items-start gap-2.5">
                                      <Check
                                        aria-hidden
                                        className="mt-0.5 size-3.5 shrink-0"
                                        style={{ color: accent.onDark }}
                                      />
                                      <span className="text-xs leading-relaxed text-text-body">
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-7">
                          <ButtonLink
                            href={whatsappUrl(
                              `Hello Mobiz, I am interested in the ${pkg.name} package (${pkg.priceLabel}). Please send me the next steps.`,
                            )}
                            variant="whatsapp"
                            fullWidth
                            external
                          >
                            <WhatsAppIcon
                              size={16}
                              className="text-[color:var(--color-whatsapp)]"
                            />
                            {pkg.ctaLabel}
                          </ButtonLink>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        </Container>
      </Section>

      {/* Comparison */}
      <Section spacing="default" className="bg-ink-950">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Side by side"
              title="Compare what's included"
              description="The full breakdown, so you can see exactly where the packages differ."
            />
          </Reveal>
          <Reveal className="mt-10">
            <PackageComparison />
          </Reveal>
        </Container>
      </Section>

      {/* Add-ons */}
      <Section spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Add-ons"
              title="Extras you can add to any package"
              description={ADDON_PRICE_LABEL + " — tell us what you need and we will quote it."}
            />
          </Reveal>

          <div className="mt-11 space-y-8">
            {Object.entries(grouped).map(([category, addons]) => (
              <div key={category}>
                <h3 className="mb-4 font-mono text-[10px] uppercase tracking-widest text-brand-bright">
                  {ADDON_CATEGORY_LABELS[category as PackageAddOn["category"]]}
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {addons.map((addon) => (
                    <li
                      key={addon.id}
                      className="rounded-xl border border-line bg-surface-0 p-5"
                    >
                      <p className="mb-1.5 text-sm font-semibold text-text-primary">
                        {addon.name}
                      </p>
                      <p className="text-xs leading-relaxed text-text-secondary">
                        {addon.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <ProcessSteps
        eyebrow="How it works"
        title="From choosing a package to going live"
        steps={HOW_IT_WORKS.map((step) => ({ title: step.title, description: step.body }))}
      />

      {/* Why Mobiz */}
      <Section spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading eyebrow="Why this works" title="What you get every month" />
          </Reveal>
          <StaggerGroup as="ul" className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_MOBIZ.map((item) => (
              <StaggerItem key={item.title} as="li" direction="up">
                <div className="h-full rounded-xl border border-line bg-surface-0 p-5">
                  <p className="mb-1.5 text-sm font-semibold text-text-primary">
                    {item.title}
                  </p>
                  <p className="text-xs leading-relaxed text-text-secondary">{item.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Exclusions — given real weight, not hidden in small print. */}
      <Section spacing="default" className="bg-ink-950">
        <Container>
          <Reveal>
            <div className="rounded-2xl border border-line-strong bg-surface-0 p-6 sm:p-8">
              <h2 className="mb-2.5 flex items-center gap-2.5 text-lg font-bold text-text-primary">
                <AlertCircle aria-hidden className="size-5 shrink-0 text-brand" />
                Important — what is and isn&apos;t included
              </h2>
              <p className="mb-6 text-sm text-text-secondary">
                So there are no surprises later, here is exactly how these packages work.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {IMPORTANT_NOTES.map((note) => (
                  <li key={note} className="flex items-start gap-2.5">
                    <span
                      aria-hidden
                      className="mt-2 size-1 shrink-0 rounded-full bg-brand"
                    />
                    <span className="text-xs leading-relaxed text-text-body">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </Section>

      <FAQSection faqs={[...PACKAGE_FAQS]} title="Questions about the packages" />

      <InternalLinks
        title="Related services"
        links={[
          { title: "Website Design Mauritius", href: "/website-design-mauritius" },
          { title: "Ecommerce Website Mauritius", href: "/ecommerce-website-mauritius" },
          { title: "SEO Services Mauritius", href: "/seo-services-mauritius" },
          { title: "Digital Marketing Mauritius", href: "/digital-marketing-mauritius" },
          { title: "Website design & development", href: "/services/website-design-development" },
          { title: "Free website review", href: "/free-website-review" },
        ]}
      />

      {/*
       * Sticky mobile CTA. Sits above the safe-area inset and is hidden on
       * desktop, where the package cards are already in view.
       */}
      <div
        className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ink-950/95 px-4 py-3 backdrop-blur-lg lg:hidden"
        style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
      >
        <ButtonLink
          href={generalWhatsAppUrl("monthly packages")}
          variant="whatsapp"
          fullWidth
          external
        >
          <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
          Ask about packages on WhatsApp
        </ButtonLink>
      </div>
      {/* Clears the sticky bar so the footer is never covered. */}
      <div aria-hidden className="h-20 lg:hidden" />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
      <JsonLd data={buildFaqSchema([...PACKAGE_FAQS])} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "MoBiz.mu Monthly Website Packages",
          description:
            "Monthly website packages for Mauritius businesses including website, hosting, Google setup, SEO basics, social media and support.",
          brand: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
          url: `${SITE_URL}/monthly-packages`,
          offers: MONTHLY_PACKAGES.map((pkg) => ({
            "@type": "Offer",
            name: pkg.name,
            price: pkg.price,
            priceCurrency: CURRENCY,
            url: `${SITE_URL}/monthly-packages`,
            availability: "https://schema.org/InStock",
            description: `${pkg.description} ${pkg.commitment}.`,
          })),
        }}
      />
    </>
  );
}
