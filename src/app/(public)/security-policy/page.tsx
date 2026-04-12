import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  Lock,
  Server,
  ShieldCheck,
  Workflow,
  CheckCircle2,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";
const effectiveDate = "April 6, 2026";

export const metadata: Metadata = {
  title: "Security Policy | MoBiz.mu",
  description:
    "Read the Security Policy for MoBiz.mu, including general principles related to website, business, platform, data, and operational security standards.",
  keywords: [
    "Security Policy MoBiz.mu",
    "MoBiz.mu security policy",
    "Website security Mauritius",
    "Business security policy Mauritius",
    "Data and platform security MoBiz.mu",
  ],
  alternates: {
    canonical: `${siteUrl}/security-policy`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Security Policy | MoBiz.mu",
    description:
      "Read the Security Policy for MoBiz.mu, including general principles related to website, business, platform, data, and operational security standards.",
    url: `${siteUrl}/security-policy`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security Policy | MoBiz.mu",
    description:
      "Read the Security Policy for MoBiz.mu, including general principles related to website, business, platform, data, and operational security standards.",
  },
};

function SecurityPolicyJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Security Policy",
    url: `${siteUrl}/security-policy`,
    description:
      "Security Policy describing the general security principles and practices of MoBiz.mu.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function PolicySection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[24px] border border-[#e5eaf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)] sm:p-6">
      <div className="flex items-start gap-3">
        <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ead8a1] bg-[#fff9ea] text-sm font-semibold text-[#8b6a18]">
          {number}
        </div>

        <div className="min-w-0">
          <h2
            className="text-[1.35rem] font-semibold tracking-tight text-[#071226] sm:text-[1.55rem]"
            style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
          >
            {title}
          </h2>

          <div className="mt-3 space-y-3 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SecurityPolicyPage() {
  return (
    <>
      <SecurityPolicyJsonLd />

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Security Policy
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Security Policy
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                This Security Policy outlines the general principles and
                practices MoBiz.mu follows to help support website security,
                operational security, information protection, and a more
                professional security-aware business environment.
              </p>

              <div className="mt-4 inline-flex rounded-full border border-[#e2e8f0] bg-white px-3 py-1.5 text-[12px] font-medium text-slate-500 shadow-[0_8px_20px_rgba(7,18,38,0.04)]">
                Effective date: {effectiveDate}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-6 sm:py-8 lg:py-10">
          <Container className="max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {[
                {
                  title: "Protection Principles",
                  text: "MoBiz.mu aims to maintain responsible safeguards across website, systems, and business operations.",
                  icon: Lock,
                },
                {
                  title: "Operational Security",
                  text: "Security is approached as part of a broader professional standard across processes and platforms.",
                  icon: Workflow,
                },
                {
                  title: "Platform Awareness",
                  text: "Hosting, access control, technical environment, and information handling are approached with security in mind.",
                  icon: Server,
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a]">
                      <Icon className="h-4.5 w-4.5" />
                    </div>

                    <h2
                      className="mt-4 text-[1.05rem] font-semibold tracking-tight text-[#071226]"
                      style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                    >
                      {item.title}
                    </h2>

                    <p className="mt-2 text-[14px] leading-7 text-[#4a5b76]">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </section>

        <section className="py-4 sm:py-6 lg:py-8">
          <Container className="max-w-[980px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4">
              <PolicySection number="1" title="Security Commitment">
                <p>
                  MoBiz.mu is committed to maintaining a responsible and
                  professional approach to security across its website,
                  operational systems, digital platforms, and business
                  processes. Security is treated as an important part of
                  service quality, trust, and responsible business conduct.
                </p>
              </PolicySection>

              <PolicySection number="2" title="Security Objectives">
                <p>
                  The general objectives of this Security Policy are to support
                  the confidentiality, integrity, availability, and responsible
                  handling of systems, information, and digital services used by
                  MoBiz.mu.
                </p>
              </PolicySection>

              <PolicySection number="3" title="Website and Platform Security">
                <p>
                  MoBiz.mu seeks to maintain appropriate safeguards for its
                  website and connected digital platforms. This may include
                  security-conscious configuration, controlled access practices,
                  software updates, technical monitoring, and use of reputable
                  hosting or platform infrastructure where applicable.
                </p>
              </PolicySection>

              <PolicySection number="4" title="Access Control">
                <p>
                  Access to business systems, internal platforms, service
                  environments, administrative interfaces, and operational tools
                  is intended to be limited to authorized persons with a
                  legitimate business need.
                </p>
                <p>
                  Reasonable efforts may be used to reduce the risk of
                  unauthorized access, misuse, or compromise.
                </p>
              </PolicySection>

              <PolicySection number="5" title="Information Protection">
                <p>
                  MoBiz.mu aims to handle personal, business, project, and
                  operational information with appropriate care and with
                  awareness of confidentiality, business sensitivity, and data
                  protection responsibilities.
                </p>
                <p>
                  Information protection practices may vary depending on the
                  nature of the service, the systems used, and the operational
                  context involved.
                </p>
              </PolicySection>

              <PolicySection number="6" title="Third-Party Services and Infrastructure">
                <p>
                  MoBiz.mu may rely on third-party hosting providers, cloud
                  services, communication tools, payment platforms, analytics
                  services, software systems, and other infrastructure
                  providers. While care may be taken in selecting appropriate
                  tools, MoBiz.mu is not responsible for the independent
                  policies, outages, security incidents, or operational
                  limitations of third-party services.
                </p>
              </PolicySection>

              <PolicySection number="7" title="Operational Security Practices">
                <p>
                  Security is supported not only through technology but also
                  through disciplined operational practices. This may include
                  reasonable handling of credentials, workflow structure,
                  limited-access principles, organized system use, and
                  awareness-based precautions in daily operations.
                </p>
              </PolicySection>

              <PolicySection number="8" title="Incident Awareness and Response">
                <p>
                  If a security-related concern, technical vulnerability, or
                  operational issue is identified, MoBiz.mu may take steps
                  considered reasonable and appropriate in the circumstances to
                  assess, contain, mitigate, investigate, or address the issue.
                </p>
                <p>
                  Response measures may vary depending on the nature, scale, and
                  impact of the issue.
                </p>
              </PolicySection>

              <PolicySection number="9" title="No Absolute Guarantee">
                <p>
                  Although MoBiz.mu seeks to maintain a security-aware and
                  responsible operational environment, no website, platform,
                  transmission method, or technical system can be guaranteed to
                  be completely secure or free from all risk.
                </p>
                <p>
                  Users and clients should also exercise reasonable care in
                  protecting their own credentials, devices, accounts, and
                  information when interacting online.
                </p>
              </PolicySection>

              <PolicySection number="10" title="Policy Updates">
                <p>
                  MoBiz.mu may revise this Security Policy from time to time to
                  reflect evolving legal, technical, business, or operational
                  requirements. Revised versions may be published on this page
                  with an updated effective date where appropriate.
                </p>
              </PolicySection>

              <PolicySection number="11" title="Contact">
                <p>
                  If you have questions about this Security Policy or wish to
                  raise a security-related concern regarding the MoBiz.mu
                  website or services, you may contact MoBiz.mu through the
                  website contact page.
                </p>

                <div className="pt-1">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </PolicySection>
            </div>
          </Container>
        </section>

        <section className="py-8 sm:py-10 lg:py-12">
          <Container className="max-w-[1100px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[30px] border border-[#eadcb0] bg-[linear-gradient(180deg,#fffaf0_0%,#ffffff_100%)] p-6 text-center shadow-[0_18px_40px_rgba(7,18,38,0.05)] sm:p-8 lg:p-10">
              <div className="mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-[#ead8a1] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] sm:text-[11px]">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Need Clarification?
                </div>

                <h2
                  className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-[#071226] sm:text-[2.4rem] lg:text-[3rem]"
                  style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
                >
                  Contact MoBiz.mu for Security Questions
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  If you need clarification about this Security Policy or want
                  to raise a security-related concern regarding the website or
                  services, you can contact MoBiz.mu directly through the
                  contact page.
                </p>

                <div className="mt-6 flex justify-center">
                  <Link
                    href="/contact"
                    className="group inline-flex min-w-[220px] items-center justify-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-6 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_14px_28px_rgba(7,18,38,0.14)] transition-all duration-300 hover:-translate-y-0.5"
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