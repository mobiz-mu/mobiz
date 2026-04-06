import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  Lock,
  Server,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";
const effectiveDate = "April 6, 2026";

export const metadata: Metadata = {
  title: "Security Policy | MoBiz.mu",
  description:
    "Read the Security Policy for MoBiz.mu, including general principles related to website, business, platform, data, and operational security standards.",
  alternates: {
    canonical: `${siteUrl}/security-policy`,
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
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-[#e5eaf2] bg-white p-6 shadow-[0_18px_38px_rgba(7,18,38,0.05)] sm:p-8">
      <h2
        className="text-2xl font-semibold tracking-tight text-[#071226] sm:text-[2rem]"
        style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
      >
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
        {children}
      </div>
    </section>
  );
}

export default function SecurityPolicyPage() {
  return (
    <>
      <SecurityPolicyJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Security Policy
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Security Policy
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                This Security Policy outlines the general principles and
                practices MoBiz.mu follows to help support website security,
                operational security, information protection, and a more
                professional security-aware business environment.
              </p>

              <p className="mt-4 text-sm font-medium text-slate-500">
                Effective date: {effectiveDate}
              </p>
            </div>
          </Container>
        </section>

        <section className="py-10 sm:py-12 lg:py-14">
          <Container className="max-w-[980px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-5 md:grid-cols-3">
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
                  <div
                    key={item.title}
                    className="rounded-[24px] border border-[#e6ebf2] bg-white p-5 shadow-[0_14px_30px_rgba(7,18,38,0.05)]"
                  >
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#071226_0%,#10224a_100%)] text-[#f3d77a]">
                      <Icon className="h-4.5 w-4.5" />
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

        <section className="pb-14 sm:pb-16 lg:pb-20">
          <Container className="max-w-[980px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6">
              <PolicySection title="1. Security Commitment">
                <p>
                  MoBiz.mu is committed to maintaining a responsible and
                  professional approach to security across its website,
                  operational systems, digital platforms, and business processes.
                  Security is treated as an important part of service quality,
                  trust, and responsible business conduct.
                </p>
              </PolicySection>

              <PolicySection title="2. Security Objectives">
                <p>
                  The general objectives of this Security Policy are to support
                  the confidentiality, integrity, availability, and responsible
                  handling of systems, information, and digital services used by
                  MoBiz.mu.
                </p>
              </PolicySection>

              <PolicySection title="3. Website and Platform Security">
                <p>
                  MoBiz.mu seeks to maintain appropriate safeguards for its
                  website and connected digital platforms. This may include
                  security-conscious configuration, controlled access practices,
                  software updates, technical monitoring, and use of reputable
                  hosting or platform infrastructure where applicable.
                </p>
              </PolicySection>

              <PolicySection title="4. Access Control">
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

              <PolicySection title="5. Information Protection">
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

              <PolicySection title="6. Third-Party Services and Infrastructure">
                <p>
                  MoBiz.mu may rely on third-party hosting providers, cloud
                  services, communication tools, payment platforms, analytics
                  services, software systems, and other infrastructure providers.
                  While care may be taken in selecting appropriate tools, MoBiz.mu
                  is not responsible for the independent policies, outages,
                  security incidents, or operational limitations of third-party
                  services.
                </p>
              </PolicySection>

              <PolicySection title="7. Operational Security Practices">
                <p>
                  Security is supported not only through technology but also
                  through disciplined operational practices. This may include
                  reasonable handling of credentials, workflow structure,
                  limited-access principles, organized system use, and
                  awareness-based precautions in daily operations.
                </p>
              </PolicySection>

              <PolicySection title="8. Incident Awareness and Response">
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

              <PolicySection title="9. No Absolute Guarantee">
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

              <PolicySection title="10. Policy Updates">
                <p>
                  MoBiz.mu may revise this Security Policy from time to time to
                  reflect evolving legal, technical, business, or operational
                  requirements. Revised versions may be published on this page
                  with an updated effective date where appropriate.
                </p>
              </PolicySection>

              <PolicySection title="11. Contact">
                <p>
                  If you have questions about this Security Policy or wish to
                  raise a security-related concern regarding the MoBiz.mu
                  website or services, you may contact MoBiz.mu through the
                  website contact page.
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center rounded-full border border-[#cfae52] bg-[linear-gradient(180deg,#071226_0%,#0a1733_55%,#0d2147_100%)] px-5 py-3 text-sm font-semibold text-[#f3d77a] shadow-[0_16px_30px_rgba(7,18,38,0.16)] transition-all duration-300 hover:-translate-y-0.5"
                  >
                    Contact MoBiz.mu
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </PolicySection>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}