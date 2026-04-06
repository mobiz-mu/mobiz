import Container from "@/components/ui/Container";
import GlassCard from "@/components/ui/GlassCard";
import PremiumButton from "@/components/ui/PremiumButton";
import SectionHeading from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

type ServicePageTemplateProps = {
  eyebrow: string;
  title: string;
  description: string;
  features: string[];
  idealFor: string[];
};

export default function ServicePageTemplate({
  eyebrow,
  title,
  description,
  features,
  idealFor,
}: ServicePageTemplateProps) {
  return (
    <main>
      <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12),transparent_24%),linear-gradient(180deg,#ffffff_0%,#f8fafc_55%,#f8f6f1_100%)]" />
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <SectionHeading
                eyebrow={eyebrow}
                title={title}
                description={description}
              />

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <PremiumButton href="/contact">Request a Quote</PremiumButton>
                <PremiumButton href="https://wa.me/23055068119" variant="secondary">
                  WhatsApp Us
                </PremiumButton>
              </div>
            </div>

            <GlassCard className="p-6 sm:p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8b6a18]">
                Included
              </div>

              <div className="mt-5 space-y-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#8b6a18]" />
                    <span className="text-sm leading-6 text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </Container>
      </section>

      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <GlassCard className="p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#071226]">
                What you get
              </h2>

              <div className="mt-6 grid gap-3">
                {features.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-sm font-medium leading-6 text-slate-700"
                  >
                    {feature}
                  </div>
                ))}
              </div>
            </GlassCard>

            <div className="rounded-[30px] bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_100%)] p-6 text-white shadow-[0_24px_80px_rgba(7,18,38,0.18)] sm:p-8">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                Ideal For
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight">
                Best suited for
              </h2>

              <div className="mt-6 grid gap-3">
                {idealFor.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-sm font-medium text-white"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <PremiumButton
                href="/contact"
                variant="secondary"
                className="mt-8 border-white/15 bg-white/10 text-white hover:bg-white/15"
              >
                Speak with MoBiz
              </PremiumButton>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}