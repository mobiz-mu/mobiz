import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { GlowCard } from "@/components/ui/GlowCard";
import { Badge } from "@/components/ui/Badge";
import { TechBackground } from "@/components/visual/TechBackground";
import { OrbitScene } from "@/components/visual/OrbitScene";
import { BrowserMockup, DashboardPanel, MiniBars } from "@/components/visual/Mockups";
import { Reveal } from "@/components/motion/Reveal";
import { HERO_ORBIT_ITEMS } from "@/lib/orbit-items";

/** Temporary token/primitive verification page — replaced by the real homepage. */
export default function TokenCheck() {
  return (
    <main className="relative">
      <TechBackground variant="full" />
      <Section spacing="flagship" className="relative">
        <Container>
          <SectionHeading
            eyebrow="Token check"
            title="Tech Orbit primitives"
            description="Verifying that theme tokens generate real utilities."
            as="h1"
          />
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Badge accent="blue">Website</Badge>
            <Badge accent="yellow">Marketing</Badge>
            <Badge accent="green">Accounting</Badge>
            <Badge accent="red">AI</Badge>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact" withArrow>
              Primary
            </ButtonLink>
            <ButtonLink href="/services" variant="secondary" withArrow>
              Secondary
            </ButtonLink>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal direction="left">
              <GlowCard accent="blue" className="p-6">
                <p className="text-sm text-text-secondary">Glow card, blue accent.</p>
                <div className="mt-4">
                  <BrowserMockup url="mobiz.mu/services">
                    <div className="h-40" />
                  </BrowserMockup>
                </div>
              </GlowCard>
            </Reveal>
            <Reveal direction="right">
              <DashboardPanel title="Revenue overview" status="Live" accent="green">
                <MiniBars values={[30, 45, 38, 62, 55, 78, 90]} accent="green" />
              </DashboardPanel>
            </Reveal>
          </div>

          <div className="mx-auto mt-14 max-w-[640px]">
            <OrbitScene
              items={HERO_ORBIT_ITEMS}
              centreImage="/images/hero/orbit-figure.png"
              centreAlt=""
              priority
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
