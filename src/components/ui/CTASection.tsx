import { Container } from "./Container";
import { Section } from "./Section";
import { ButtonLink } from "./Button";
import { WhatsAppIcon } from "./icons";
import { Reveal } from "@/components/motion/Reveal";
import { whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type CTASectionProps = {
  title?: string;
  description?: string;
  /** Primary action. Defaults to the contact page. */
  primaryHref?: string;
  primaryLabel?: string;
  /** Prefilled WhatsApp message — always page/service specific. */
  whatsappMessage: string;
  className?: string;
};

/**
 * The closing conversion block, used at the foot of every commercial page.
 *
 * Deliberately two actions, not eight: a considered enquiry (contact) and an
 * immediate one (WhatsApp). Keeping the labels identical site-wide is what makes
 * the CTA hierarchy legible across 97 pages.
 */
export function CTASection({
  title = "Ready to grow your business?",
  description = "Tell us what you need. We will come back with a clear, honest recommendation — not a hard sell.",
  primaryHref = "/contact",
  primaryLabel = "Start a project",
  whatsappMessage,
  className,
}: CTASectionProps) {
  return (
    <Section spacing="default" className={cn("overflow-hidden", className)}>
      <Container>
        <Reveal direction="scale">
          <div className="glow-card relative px-6 py-14 text-center sm:px-12 lg:py-20">
            {/* Painted once, never animated. */}
            <span
              aria-hidden
              className="glow-blob absolute -top-20 left-1/2 -translate-x-1/2"
            />
            <span aria-hidden className="absolute inset-0 tech-grid opacity-60" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-[clamp(1.875rem,4vw,3rem)] font-bold leading-[1.05] tracking-tight text-text-primary text-balance">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-text-secondary text-pretty sm:text-lg">
                {description}
              </p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
                <ButtonLink href={primaryHref} size="lg" withArrow>
                  {primaryLabel}
                </ButtonLink>
                <ButtonLink
                  href={whatsappUrl(whatsappMessage)}
                  variant="whatsapp"
                  size="lg"
                  external
                >
                  <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
                  Chat on WhatsApp
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

export default CTASection;
