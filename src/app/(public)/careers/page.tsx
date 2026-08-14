import type { Metadata } from "next";
import { Check } from "lucide-react";
import { PageHero } from "@/components/page/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { CTASection } from "@/components/ui/CTASection";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ServiceVisual } from "@/components/visual/ServiceVisual";
import { buildMetadata } from "@/lib/metadata";
import { buildBreadcrumbSchema } from "@/lib/breadcrumbs";
import { JsonLd } from "@/lib/services/schema";
import { CAREER_VALUES, FUTURE_ROLES, ROLES, WHY_JOIN } from "@/lib/company";
import { ACCENTS, type AccentId } from "@/lib/accents";
import { CONTACT_EMAIL, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Careers at MoBiz.mu | Opportunities in Mauritius",
  description:
    "Areas MoBiz.mu is open to hearing from — design, digital marketing and business support — plus how to introduce yourself for future opportunities in Mauritius.",
  path: "/careers",
});

const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Careers" }];

const ROLE_ACCENTS: AccentId[] = ["blue", "yellow", "green"];
const JOIN_ACCENTS: AccentId[] = ["red", "blue", "green", "yellow"];

const APPLY_MESSAGE =
  "Hello Mobiz, I am interested in opportunities at MoBiz.mu. I would like to introduce myself.";

/**
 * Careers.
 *
 * Written as an honest evergreen interest page, not a jobs board. The source
 * material lists areas Mobiz works in — it does not confirm live vacancies with
 * dates, salaries or headcount — so the page invites introductions rather than
 * advertising open positions.
 *
 * For the same reason no JobPosting schema is emitted: that markup asserts a
 * real, currently-open role, and marking these up as postings would be a false
 * claim to Google. Add it only when genuine vacancies are supplied.
 */
export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Work with Mobiz"
        subtitle="We are always interested in hearing from people who care about doing good work. There is no formal vacancy list — if one of these areas is yours, introduce yourself."
        breadcrumbs={breadcrumbs}
        background="service"
        primaryCta={{ label: "Introduce yourself", href: "/contact" }}
        whatsappMessage={APPLY_MESSAGE}
        visual={<ServiceVisual division="business-solutions" />}
      />

      {/* Areas of interest — explicitly framed as areas, not vacancies. */}
      <Section spacing="default" className="bg-ink-900">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Areas we work in"
              title="Where we are usually open to talent"
              description="These are the areas we most often need support in. They are standing areas of interest rather than confirmed open positions — we will tell you honestly what is available when you get in touch."
            />
          </Reveal>

          <StaggerGroup as="ul" className="mt-11 grid gap-5 sm:grid-cols-3">
            {ROLES.map((role, index) => {
              const accent = ACCENTS[ROLE_ACCENTS[index % ROLE_ACCENTS.length] ?? "red"];
              return (
                <StaggerItem key={role.title} as="li" direction="up">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-0 p-6">
                    <span
                      className="mb-4 inline-flex w-fit rounded-md px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-wider"
                      style={{
                        border: `1px solid ${accent.hex}55`,
                        color: accent.hex,
                        background: `${accent.hex}14`,
                      }}
                    >
                      {role.type}
                    </span>
                    <h3 className="mb-2.5 text-base font-bold text-text-primary">
                      {role.title}
                    </h3>
                    <p className="flex-1 text-sm leading-relaxed text-text-secondary">
                      {role.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* Why join */}
      <Section spacing="default" className="overflow-hidden bg-ink-950">
        <span aria-hidden className="absolute inset-0 tech-grid-fine" />
        <Container className="relative">
          <Reveal>
            <SectionHeading eyebrow="Why join" title="What working here is like" />
          </Reveal>

          <StaggerGroup as="ul" className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_JOIN.map((item, index) => {
              const accent = ACCENTS[JOIN_ACCENTS[index % JOIN_ACCENTS.length] ?? "red"];
              return (
                <StaggerItem key={item.title} as="li" direction="up">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-surface-0 p-6">
                    <span
                      aria-hidden
                      className="mb-4 h-0.5 w-9 rounded-full"
                      style={{ background: accent.hex }}
                    />
                    <h3 className="mb-2.5 text-base font-bold text-text-primary">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary">{item.text}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </Container>
      </Section>

      {/* What we look for + future areas */}
      <Section spacing="default" className="bg-ink-900">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal direction="left">
              <SectionHeading eyebrow="What we look for" title="The people who do well here" />
              <ul className="mt-8 space-y-3">
                {CAREER_VALUES.map((value) => (
                  <li key={value} className="flex items-start gap-3">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-brand" />
                    <span className="text-sm leading-relaxed text-text-body">{value}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="right">
              <SectionHeading
                eyebrow="Future areas"
                title="Skills we expect to need"
                accent="blue"
              />
              <ul className="mt-8 flex flex-wrap gap-2">
                {FUTURE_ROLES.map((role) => (
                  <li
                    key={role}
                    className="rounded-lg border border-line bg-surface-0 px-3.5 py-2.5 text-sm text-text-body"
                  >
                    {role}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* How to apply */}
      <Section spacing="default" className="bg-ink-950">
        <Container>
          <Reveal direction="scale">
            <div className="glow-card p-7 sm:p-12">
              <span aria-hidden className="glow-blob absolute -right-16 -top-24" />
              <div className="relative max-w-2xl">
                <h2 className="mb-4 text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                  How to introduce yourself
                </h2>
                <p className="mb-8 text-base leading-relaxed text-text-secondary">
                  Send us a short message about what you do, the kind of work you want, and
                  anything we can look at — a portfolio, a site you built, or work you are
                  proud of. Message us on WhatsApp or email; both reach the team directly.
                </p>
                <div className="flex flex-wrap gap-3">
                  <ButtonLink
                    href={whatsappUrl(APPLY_MESSAGE)}
                    variant="whatsapp"
                    size="lg"
                    external
                  >
                    <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
                    Message us on WhatsApp
                  </ButtonLink>
                  <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary" size="lg">
                    Email {CONTACT_EMAIL}
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <CTASection
        title="Not a fit right now?"
        description="We keep introductions on file. If something opens up in your area, we will come back to you."
        primaryLabel="Get in touch"
        whatsappMessage={APPLY_MESSAGE}
      />

      <JsonLd data={buildBreadcrumbSchema(breadcrumbs)} />
    </>
  );
}
