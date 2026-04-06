import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  FileText,
  Lock,
  ShieldCheck,
  Scale,
  Sparkles,
  BadgeCheck,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";

export const metadata: Metadata = {
  title: "Policies | MoBiz.mu",
  description:
    "Explore MoBiz.mu policies including Terms of Use, Terms of Service, Privacy Policy, and Security Policy.",
  alternates: {
    canonical: `${siteUrl}/policies`,
  },
  openGraph: {
    title: "Policies | MoBiz.mu",
    description:
      "Explore MoBiz.mu policies including Terms of Use, Terms of Service, Privacy Policy, and Security Policy.",
    url: `${siteUrl}/policies`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Policies | MoBiz.mu",
    description:
      "Explore MoBiz.mu policies including Terms of Use, Terms of Service, Privacy Policy, and Security Policy.",
  },
};

const policyPages = [
  {
    title: "Terms of Use",
    description:
      "Read the general conditions governing the use of the MoBiz.mu website, content, pages, and visitor interactions.",
    href: "/terms-of-use",
    icon: Scale,
  },
  {
    title: "Terms of Service",
    description:
      "Understand the service-related terms that apply when engaging MoBiz.mu for business, digital, or operational support.",
    href: "/terms-of-service",
    icon: FileText,
  },
  {
    title: "Privacy Policy",
    description:
      "Learn how MoBiz.mu collects, uses, stores, and protects personal and business information.",
    href: "/privacy-policy",
    icon: Lock,
  },
  {
    title: "Security Policy",
    description:
      "Review the principles and safeguards MoBiz.mu follows to help maintain platform, business, and information security.",
    href: "/security-policy",
    icon: ShieldCheck,
  },
];

function PoliciesJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "MoBiz.mu Policies",
    url: `${siteUrl}/policies`,
    description:
      "Explore MoBiz.mu policies including Terms of Use, Terms of Service, Privacy Policy, and Security Policy.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function PoliciesPage() {
  return (
    <>
      <PoliciesJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1320px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <Sparkles className="h-3.5 w-3.5" />
                MoBiz.mu Policies
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[4rem] lg:leading-[1.02]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Policies and Legal Information
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px] lg:text-[17px]">
                This section provides access to the main policy and legal pages
                of MoBiz.mu. These pages are designed to help visitors,
                customers, and business partners understand the standards,
                protections, and responsibilities that apply when using the
                website or working with MoBiz.mu.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[1320px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Clear Standards",
                  text: "Policies help define expectations clearly for visitors, clients, and business relationships.",
                  icon: BadgeCheck,
                },
                {
                  title: "Business Trust",
                  text: "Strong policy pages support credibility, transparency, and a more professional digital presence.",
                  icon: ShieldCheck,
                },
                {
                  title: "Privacy Awareness",
                  text: "Important information is provided about how personal and business data is handled.",
                  icon: Lock,
                },
                {
                  title: "Service Clarity",
                  text: "Service terms help set a cleaner framework for project execution, communication, and responsibilities.",
                  icon: FileText,
                },
              ].map((item) => {
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
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex rounded-full border border-[#dfc985] bg-[#fff9ea] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                Policy Directory
              </div>

              <h2
                className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Explore the Main MoBiz.mu Policy Pages
              </h2>

              <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                Each page below covers a different aspect of legal use,
                privacy, security, and service relationship standards for
                MoBiz.mu.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {policyPages.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group rounded-[28px] border border-[#e6ebf2] bg-white p-5 shadow-[0_18px_38px_rgba(7,18,38,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(7,18,38,0.08)]"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a] shadow-[0_12px_24px_rgba(7,18,38,0.14)]">
                      <Icon className="h-5.5 w-5.5" />
                    </div>

                    <h3
                      className="mt-4 text-xl font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[14px] leading-7 text-[#4a5b76]">
                      {item.description}
                    </p>

                    <div className="mt-5">
                      <Link
                        href={item.href}
                        className="group/link inline-flex items-center text-sm font-semibold text-[#8b6a18] transition-colors duration-300 hover:text-[#071226]"
                      >
                        Read Page
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-0.5" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-14 sm:py-16 lg:py-18">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[34px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-7 text-center shadow-[0_20px_46px_rgba(7,18,38,0.05)] sm:p-9 lg:p-12">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Need More Information?
                </div>

                <h2
                  className="mt-5 text-balance text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Contact MoBiz.mu for Policy or Service Clarification
                </h2>

                <p className="mt-5 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                  If you need clarification on any policy, service standard, or
                  legal page, you can contact MoBiz.mu directly for additional
                  guidance.
                </p>

                <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3.5 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_32px_rgba(7,18,38,0.18)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
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