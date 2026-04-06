import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  Database,
  Lock,
  ShieldCheck,
  Sparkles,
  UserCheck,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";
const effectiveDate = "April 6, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | MoBiz.mu",
  description:
    "Read the Privacy Policy for MoBiz.mu, including how personal and business information may be collected, used, stored, and protected.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | MoBiz.mu",
    description:
      "Read the Privacy Policy for MoBiz.mu, including how personal and business information may be collected, used, stored, and protected.",
    url: `${siteUrl}/privacy-policy`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | MoBiz.mu",
    description:
      "Read the Privacy Policy for MoBiz.mu, including how personal and business information may be collected, used, stored, and protected.",
  },
};

function PrivacyPolicyJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: `${siteUrl}/privacy-policy`,
    description:
      "Privacy Policy describing how MoBiz.mu handles personal and business information.",
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicyJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <Lock className="h-3.5 w-3.5" />
                Privacy Policy
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Privacy Policy
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                This Privacy Policy explains how MoBiz.mu may collect, use,
                store, protect, and manage personal and business information in
                connection with the website, inquiries, service relationships,
                and related communications.
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
                  title: "Information Handling",
                  text: "This policy describes how information may be collected, used, and managed by MoBiz.mu.",
                  icon: Database,
                },
                {
                  title: "Privacy Awareness",
                  text: "MoBiz.mu values responsible handling of personal and business information.",
                  icon: UserCheck,
                },
                {
                  title: "Protection Standards",
                  text: "Reasonable measures are used to support confidentiality, integrity, and security.",
                  icon: ShieldCheck,
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
              <PolicySection title="1. Scope of This Policy">
                <p>
                  This Privacy Policy applies to information collected through
                  the MoBiz.mu website, contact forms, inquiries, proposals,
                  quotations, service communications, and any related
                  interaction or engagement with MoBiz.mu.
                </p>
              </PolicySection>

              <PolicySection title="2. Information We May Collect">
                <p>
                  Depending on the nature of your interaction with MoBiz.mu, we
                  may collect personal or business information such as your
                  name, company name, email address, phone number, service
                  requirements, billing-related details, project information, or
                  other information you choose to provide.
                </p>
                <p>
                  We may also collect certain technical information such as
                  device type, browser type, pages visited, general usage data,
                  and interaction data related to website analytics and site
                  improvement.
                </p>
              </PolicySection>

              <PolicySection title="3. How Information May Be Used">
                <p>MoBiz.mu may use information for purposes such as:</p>
                <p>
                  responding to inquiries, preparing quotations or proposals,
                  delivering services, managing communication, improving website
                  performance, maintaining business records, supporting client
                  relationships, and complying with applicable legal or
                  operational requirements.
                </p>
              </PolicySection>

              <PolicySection title="4. Business and Service Communications">
                <p>
                  If you contact MoBiz.mu or engage in a service relationship,
                  we may use your information to communicate about your inquiry,
                  project, scope, updates, support needs, payment-related
                  matters, or other relevant business topics connected to your
                  request or engagement.
                </p>
              </PolicySection>

              <PolicySection title="5. Analytics and Website Improvement">
                <p>
                  MoBiz.mu may use analytics tools, cookies, or similar
                  technologies to understand how visitors use the website,
                  improve user experience, measure performance, and support
                  technical optimization.
                </p>
                <p>
                  Such information is generally used to improve the website and
                  overall digital experience rather than to personally identify
                  users unnecessarily.
                </p>
              </PolicySection>

              <PolicySection title="6. Sharing of Information">
                <p>
                  MoBiz.mu does not sell personal information to third parties.
                  Information may be shared only where reasonably necessary for
                  business operations, service delivery, platform use, payment
                  processing, technical infrastructure, legal compliance, or
                  professional support connected to the service relationship.
                </p>
                <p>
                  Where third-party tools or providers are involved, information
                  may be processed under their applicable operational or privacy
                  standards.
                </p>
              </PolicySection>

              <PolicySection title="7. Data Retention">
                <p>
                  MoBiz.mu may retain information for as long as reasonably
                  necessary to support communication, service delivery, record
                  keeping, operational requirements, legal obligations, dispute
                  resolution, or legitimate business interests.
                </p>
              </PolicySection>

              <PolicySection title="8. Data Protection and Security">
                <p>
                  MoBiz.mu applies reasonable administrative, technical, and
                  operational measures designed to help protect information from
                  unauthorized access, misuse, disclosure, loss, or alteration.
                </p>
                <p>
                  However, no digital system, website, or transmission method
                  can be guaranteed to be completely secure, and users should
                  also exercise reasonable care in the information they share
                  online.
                </p>
              </PolicySection>

              <PolicySection title="9. Third-Party Platforms and Services">
                <p>
                  Some parts of MoBiz.mu operations may rely on third-party
                  platforms, software, hosting environments, form systems,
                  payment services, communication platforms, analytics tools, or
                  cloud services. Information processed through those systems may
                  also be subject to their policies and operational standards.
                </p>
              </PolicySection>

              <PolicySection title="10. Your Choices and Rights">
                <p>
                  Subject to applicable law, you may contact MoBiz.mu to request
                  clarification, correction, or update of certain information you
                  have provided. You may also ask questions about how your
                  information is handled in connection with your inquiry or
                  service relationship.
                </p>
              </PolicySection>

              <PolicySection title="11. Children’s Privacy">
                <p>
                  The MoBiz.mu website and services are intended for business,
                  professional, and general adult use. MoBiz.mu does not
                  knowingly collect personal information from children in a
                  manner inconsistent with applicable law.
                </p>
              </PolicySection>

              <PolicySection title="12. Policy Updates">
                <p>
                  MoBiz.mu may update this Privacy Policy from time to time to
                  reflect legal, business, technical, or operational changes.
                  Any revised version may be published on this page with an
                  updated effective date where appropriate.
                </p>
              </PolicySection>

              <PolicySection title="13. Contact">
                <p>
                  If you have questions about this Privacy Policy or about how
                  information is handled by MoBiz.mu, you may contact MoBiz.mu
                  through the website contact page.
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