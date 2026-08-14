import { Container } from "./Container";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { cn } from "@/lib/utils";

export type Faq = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  faqs: Faq[];
  title?: string;
  eyebrow?: string;
  className?: string;
};

/**
 * FAQ list built on native <details>/<summary>.
 *
 * No JavaScript, no hydration, and the answers are in the HTML whether or not
 * the item is open — so they stay crawlable and match any FAQPage schema the
 * page emits. Keyboard and screen-reader behaviour comes free from the element.
 */
export function FAQSection({
  faqs,
  title = "Frequently asked questions",
  eyebrow = "Questions",
  className,
}: FAQSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <Section spacing="calm" className={cn("border-t border-line-faint", className)} deferPaint>
      <Container>
        <Reveal>
          <SectionHeading eyebrow={eyebrow} title={title} />
        </Reveal>

        <div className="mt-10 divide-y divide-[color:var(--color-line-faint)] border-y border-line-faint">
          {faqs.map((faq) => (
            <details key={faq.question} className="group">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left text-base font-semibold text-text-primary transition-colors hover:text-brand-mid [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden
                  className="relative mt-1.5 size-3 shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-45"
                >
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current" />
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
                </span>
              </summary>
              <p className="max-w-3xl pb-6 text-sm leading-relaxed text-text-secondary text-pretty sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default FAQSection;
