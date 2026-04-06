import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CheckCircle2,
  Globe,
  Layers3,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users,
  PenTool,
  ClipboardList,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title:
    "Careers at MoBiz.mu | Premium Opportunities in Design, Marketing & Business Support",
  description:
    "Explore careers at MoBiz.mu and join a premium business solutions platform in Mauritius. Discover opportunities in UI and frontend design, digital marketing, business support, and future executive roles built for growth-minded talent.",
  keywords: [
    "MoBiz.mu careers",
    "Careers Mauritius",
    "Jobs Mauritius",
    "Digital marketing jobs Mauritius",
    "Web design jobs Mauritius",
    "Frontend designer Mauritius",
    "Business support jobs Mauritius",
    "Creative careers Mauritius",
    "Premium agency careers Mauritius",
  ],
  alternates: {
    canonical: `${siteUrl}/careers`,
  },
  openGraph: {
    title: "Careers at MoBiz.mu | Premium Opportunities in Mauritius",
    description:
      "Join MoBiz.mu and help build premium digital and business solutions for Mauritius and the Indian Ocean region.",
    url: `${siteUrl}/careers`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at MoBiz.mu | Premium Opportunities in Mauritius",
    description:
      "Explore creative, marketing, and business support roles at MoBiz.mu.",
  },
};

const roles = [
  {
    title: "UI / Frontend Designer",
    type: "Creative / Contract",
    description:
      "Work on luxury website interfaces, premium section layouts, refined mobile-first experiences, and executive visual presentation across MoBiz.mu client projects.",
    icon: MonitorSmartphone,
  },
  {
    title: "Digital Marketing Specialist",
    type: "Marketing / Flexible",
    description:
      "Support campaigns, content calendars, SEO direction, ad strategy, brand visibility, and digital growth efforts across premium client brands.",
    icon: Megaphone,
  },
  {
    title: "Business Support Associate",
    type: "Operations / Flexible",
    description:
      "Assist with quotations, invoices, proposals, client follow-ups, coordination, and the internal structure that helps MoBiz.mu run smoothly.",
    icon: ClipboardList,
  },
];

const whyJoin = [
  {
    title: "Premium Growth Environment",
    text: "MoBiz.mu is not built as a generic service company. It is being shaped into a premium business platform with higher standards of presentation, quality, and execution.",
    icon: Sparkles,
  },
  {
    title: "Multi-Skill Exposure",
    text: "Working with MoBiz.mu can expose you to websites, branding, business systems, digital marketing, operations, and premium client-facing work.",
    icon: Layers3,
  },
  {
    title: "Meaningful Work",
    text: "You will help real businesses in Mauritius improve their image, visibility, structure, and growth potential through better execution.",
    icon: TrendingUp,
  },
  {
    title: "Long-Term Opportunity",
    text: "We are building for the long term and looking for people who value quality, ambition, and serious business growth.",
    icon: Rocket,
  },
];

const values = [
  "Premium thinking and high execution standards",
  "Respect for clean design, clarity, and business quality",
  "Growth mindset and willingness to improve continuously",
  "Strong communication and professional reliability",
  "Attention to detail and polished output",
  "Commitment to helping businesses look and perform better",
];

const futureRoles = [
  {
    title: "Branding & Presentation Specialist",
    text: "For talent who can shape premium decks, proposals, visual identities, and executive business materials.",
    icon: Palette,
  },
  {
    title: "Content & SEO Strategist",
    text: "For people who understand search intent, content structure, local visibility, and premium business messaging.",
    icon: Globe,
  },
  {
    title: "Creative Brand Designer",
    text: "For professionals who can elevate visual identity, campaign look and feel, and stronger premium communication.",
    icon: PenTool,
  },
  {
    title: "Client Success & Coordination",
    text: "For structured communicators who can help manage follow-up, workflow clarity, and premium client experience.",
    icon: Users,
  },
];

const faqs = [
  {
    q: "What kind of careers does MoBiz.mu offer?",
    a: "MoBiz.mu offers opportunities across design, digital marketing, business support, and future premium business roles aligned with growth and execution quality.",
  },
  {
    q: "Can I apply even if my role is not currently listed?",
    a: "Yes. If you believe your profile, portfolio, or skills fit the MoBiz.mu direction, you can still express interest and contact the team.",
  },
  {
    q: "What kind of people are a good fit for MoBiz.mu?",
    a: "People who value premium standards, growth mindset, clean execution, strong communication, and serious business quality are the best fit.",
  },
  {
    q: "Is MoBiz.mu building for the long term?",
    a: "Yes. MoBiz.mu is being shaped as a long-term premium business solutions platform for Mauritius and the wider region.",
  },
];

function CareersJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers at MoBiz.mu",
    url: `${siteUrl}/careers`,
    description:
      "Career opportunities at MoBiz.mu for design, marketing, and business support talent in Mauritius.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function CareersPage() {
  return (
    <>
      <CareersJsonLd />
      <FaqJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <Sparkles className="h-3.5 w-3.5" />
                Careers at MoBiz.mu
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Join a Premium Business Platform Built for Growth
              </h1>

              <p className="mx-auto mt-5 max-w-4xl text-[15px] leading-8 text-[#44556f] sm:text-[16px] lg:text-[17px]">
                MoBiz.mu is growing into a premium business solutions ecosystem
                for Mauritius, combining digital design, marketing, operations,
                and business support under a more executive standard. We are
                interested in people who care about quality, presentation,
                growth, and helping businesses perform at a higher level.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_34px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Apply / Express Interest
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                >
                  Learn About MoBiz.mu
                </Link>
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {whyJoin.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[26px] border border-[#e6ebf2] bg-white p-5 shadow-[0_16px_38px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2
                      className="mt-4 text-lg font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>
                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
              <div>
                <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  Why Work With MoBiz.mu
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  We Value Premium Thinking, Execution Quality, and Growth Mindset
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  MoBiz.mu is for people who care about doing better work, not
                  only more work. The environment we are building values clean
                  design, strong communication, better business thinking,
                  presentation quality, and the ambition to help businesses in
                  Mauritius move at a more premium level.
                </p>

                <p className="mt-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Whether your strength is creative execution, marketing, client
                  support, organization, or strategic thinking, MoBiz.mu is
                  designed to create room for people who want to contribute to
                  something long term and meaningful.
                </p>
              </div>

              <div className="grid gap-3">
                {values.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[22px] border border-[#e7edf5] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(7,18,38,0.04)]"
                  >
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#8b6a18]" />
                    <p className="text-[14px] leading-7 text-[#20314d]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Current Opportunities
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Roles We Are Interested In
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                These roles reflect the kind of premium talent environment
                MoBiz.mu is building. Even when the structure is flexible, the
                standard we want is serious.
              </p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <article
                    key={role.title}
                    className="flex h-full flex-col rounded-[28px] border border-[#e6ebf2] bg-white p-6 shadow-[0_18px_38px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(7,18,38,0.08)] sm:p-7"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5.5 w-5.5" />
                    </div>

                    <div className="mt-5 inline-flex w-fit rounded-full border border-[rgba(212,175,55,0.24)] bg-[#fffdf7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8b6a18]">
                      {role.type}
                    </div>

                    <h3
                      className="mt-5 text-xl font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {role.title}
                    </h3>

                    <p className="mt-3 flex-1 text-[14px] leading-7 text-slate-600 sm:text-[15px]">
                      {role.description}
                    </p>

                    <Link
                      href="/contact"
                      className="group mt-6 inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-5 py-3 text-sm font-semibold text-[#071226] shadow-[0_10px_22px_rgba(7,18,38,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                    >
                      Apply / Express Interest
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 overflow-hidden rounded-[34px] border border-[#e5eaf2] bg-[linear-gradient(180deg,#071226_0%,#0c1a3a_100%)] p-6 text-white shadow-[0_26px_60px_rgba(7,18,38,0.18)] sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
              <div>
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#f3d77a]">
                  Future Roles & Talent Interest
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.8rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Even If You Don’t See Your Role, You Can Still Reach Out
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-white/78 sm:text-[16px]">
                  MoBiz.mu is building for the long term. If your profile fits
                  the premium direction of the brand, you do not need to wait for
                  a formal vacancy to introduce yourself. We welcome strong
                  talent, portfolios, and serious expressions of interest.
                </p>

                <div className="mt-6 grid gap-3">
                  {[
                    "Creative talent with a premium eye",
                    "Structured marketers and growth thinkers",
                    "Reliable support and operations profiles",
                    "People who care about quality and long-term value",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <BadgeCheck className="mt-1 h-5 w-5 shrink-0 text-[#f3d77a]" />
                      <p className="text-sm leading-7 text-white/82">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {futureRoles.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-white/10 bg-white/8 p-4"
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#f3d77a]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-white/74">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </Container>
        </section>

        <section className="border-y border-[#e8edf5] bg-[#fbfcfe] py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex rounded-full border border-[#dce4ef] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                FAQ
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Careers FAQ
              </h2>
            </div>

            <div className="mt-10 space-y-4">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[24px] border border-[#e4eaf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.04)] sm:p-6"
                >
                  <h3
                    className="text-lg font-semibold tracking-tight text-[#071226]"
                    style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                  >
                    {item.q}
                  </h3>
                  <p className="mt-3 text-[14.5px] leading-8 text-[#44556f] sm:text-[15.5px]">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16 lg:py-18">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-7 text-center shadow-[0_20px_46px_rgba(7,18,38,0.05)] sm:p-9 lg:p-12">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  <Rocket className="h-3.5 w-3.5" />
                  Interested in Joining?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Share Your Profile, Portfolio, or Interest
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  Even if you do not see a role listed, you can still contact
                  MoBiz.mu and share your profile, portfolio, or interest. We
                  are building for the long term and are always interested in
                  strong people who align with our premium direction.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_32px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    href="/about"
                    className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#d7dee9] bg-white px-6 py-3.5 text-sm font-semibold text-[#071226] shadow-[0_12px_28px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#cfae52] hover:text-[#8b6a18]"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}