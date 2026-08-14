import { Blocks, Handshake, MapPin, MessagesSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";
import { ACCENTS, type AccentId } from "@/lib/accents";

type Reason = {
  title: string;
  body: string;
  icon: typeof Blocks;
  accent: AccentId;
};

/*
 * Why Mobiz.
 *
 * Deliberately qualitative. These are statements about how Mobiz works — all of
 * them verifiable from the services themselves — rather than invented figures.
 * No client counts, no satisfaction scores, no "X% increase" claims.
 */
const REASONS: Reason[] = [
  {
    title: "Everything under one roof",
    body: "Website, marketing, accounting, inventory and business support from one team — so your systems actually talk to each other instead of sitting in silos.",
    icon: Blocks,
    accent: "red",
  },
  {
    title: "Built for Mauritius",
    body: "We work with local realities: MRA and VAT requirements, the way Mauritian customers search, and WhatsApp as the channel people genuinely use.",
    icon: MapPin,
    accent: "blue",
  },
  {
    title: "Straight answers",
    body: "We explain what we are doing and why, in plain language. If something is not the right fit for your business, we say so rather than selling it to you.",
    icon: Handshake,
    accent: "green",
  },
  {
    title: "Reachable when you need us",
    body: "Get hold of a person on WhatsApp rather than a ticket queue. Ongoing support is part of the work, not an afterthought once a project ships.",
    icon: MessagesSquare,
    accent: "yellow",
  },
];

/**
 * Alternating horizontal panels rather than a card grid — the section reads as
 * a short argument, and it deliberately breaks the rhythm of the card-based
 * sections above and below it.
 */
export function WhyMobiz() {
  return (
    <Section spacing="flagship" className="bg-ink-950" aria-labelledby="why-heading">
      <Container className="relative">
        <Reveal className="mb-12">
          <SectionHeading
            id="why-heading"
            eyebrow="Why Mobiz"
            title="One team that understands the whole business."
            description="Most agencies solve one problem. Running a business means solving several at once — which is the gap Mobiz was built to close."
          />
        </Reveal>

        <StaggerGroup as="ul" stagger={0.1} className="space-y-4">
          {REASONS.map((reason, index) => {
            const accent = ACCENTS[reason.accent];
            return (
              <StaggerItem
                key={reason.title}
                as="li"
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <div className="group flex flex-col gap-5 rounded-2xl border border-line bg-surface-0 p-6 transition-colors hover:border-line-strong sm:flex-row sm:items-start sm:gap-7 sm:p-8">
                  <span
                    aria-hidden
                    className="flex size-13 shrink-0 items-center justify-center rounded-md"
                    style={{
                      background: `linear-gradient(145deg, ${accent.hex}ee, ${accent.hex}88)`,
                      boxShadow: `0 10px 28px ${accent.hex}45, inset 0 1px 0 rgba(255,255,255,0.3)`,
                    }}
                  >
                    <reason.icon className="size-6 text-white" />
                  </span>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-2.5 text-lg font-bold text-text-primary sm:text-xl">
                      {reason.title}
                    </h3>
                    <p className="max-w-2xl text-sm leading-relaxed text-text-secondary sm:text-base">
                      {reason.body}
                    </p>
                  </div>

                  <span
                    aria-hidden
                    className="hidden shrink-0 self-center font-mono text-xs text-text-faint sm:block"
                  >
                    0{index + 1}
                  </span>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </Container>
    </Section>
  );
}

export default WhyMobiz;
