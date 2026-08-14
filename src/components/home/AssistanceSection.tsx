import { Bot, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/motion/Reveal";
import { SUGGESTED_QUESTIONS } from "@/lib/ai/suggested-questions";
import { ACCENTS } from "@/lib/accents";
import { whatsappUrl } from "@/lib/site";
import { isAiEnabled } from "@/lib/ai/config";

/**
 * AI + WhatsApp assistance.
 *
 * Mirrors the assistant's real surface — the same quick questions, the same card
 * language — so the section previews the actual product rather than advertising
 * a generic chatbot.
 *
 * The AI half only renders when a provider key is configured; without it the
 * section becomes a clean WhatsApp block instead of pointing at something that
 * isn't there.
 */
export function AssistanceSection() {
  const aiEnabled = isAiEnabled();

  return (
    <Section deferPaint spacing="default" className="overflow-hidden bg-ink-900" aria-labelledby="assistance-heading">
      <span aria-hidden className="absolute inset-0 tech-grid" />

      <Container className="relative">
        <Reveal className="mb-12">
          <SectionHeading
            id="assistance-heading"
            eyebrow="Get answers fast"
            title="Ask a question, get a straight answer."
            description="Start with our assistant for quick questions about what we do — or go straight to WhatsApp when you want to talk to a person."
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {aiEnabled ? (
            <Reveal direction="left">
              <div className="glow-card h-full p-6 sm:p-8">
                <span aria-hidden className="glow-blob absolute -right-16 -top-24" />
                <div className="relative">
                  <span
                    aria-hidden
                    className="mb-5 flex size-12 items-center justify-center rounded-lg bg-linear-[135deg,var(--color-brand),var(--color-brand-deep)]"
                  >
                    <Bot className="size-5.5 text-white" />
                  </span>
                  <h3 className="mb-3 text-xl font-bold text-text-primary">
                    Mobiz Assistant
                  </h3>
                  <p className="mb-6 text-sm leading-relaxed text-text-secondary">
                    Ask about our services, monthly packages or how we work. It answers
                    from what Mobiz actually offers — and hands you to a person when a
                    question needs one.
                  </p>

                  <p className="mb-3 font-mono text-[9px] uppercase tracking-widest text-text-faint">
                    Popular questions
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {SUGGESTED_QUESTIONS.slice(0, 5).map((q) => (
                      <li
                        key={q.id}
                        className="rounded-lg border px-3 py-2 text-xs font-medium text-text-body"
                        style={{ borderColor: `${ACCENTS[q.accent].hex}55` }}
                      >
                        {q.label}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-xs text-text-muted">
                    Open it any time from the assistant button in the corner of the screen.
                  </p>
                </div>
              </div>
            </Reveal>
          ) : null}

          <Reveal direction={aiEnabled ? "right" : "up"} className={aiEnabled ? "" : "lg:col-span-2"}>
            <div className="flex h-full flex-col rounded-2xl border border-[rgba(37,211,102,0.22)] bg-[rgba(37,211,102,0.06)] p-6 sm:p-8">
              <span
                aria-hidden
                className="mb-5 flex size-12 items-center justify-center rounded-lg bg-[color:var(--color-whatsapp)]"
              >
                <MessageCircle className="size-5.5 text-white" />
              </span>
              <h3 className="mb-3 text-xl font-bold text-text-primary">
                Talk to us on WhatsApp
              </h3>
              <p className="mb-7 flex-1 text-sm leading-relaxed text-text-secondary">
                For quotations, scoping a project, or anything specific about your business —
                message us directly. You will get a real answer from the team, not an
                automated reply.
              </p>
              <ButtonLink
                href={whatsappUrl(
                  "Hello Mobiz, I would like to ask a question about my business.",
                )}
                variant="whatsapp"
                external
              >
                <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
                Message Mobiz on WhatsApp
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default AssistanceSection;
