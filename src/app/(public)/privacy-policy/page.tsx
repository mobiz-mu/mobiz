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
  CheckCircle2,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";
const effectiveDate = "April 6, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | MoBiz.mu",
  description:
    "Read the Privacy Policy for MoBiz.mu, including how personal and business information may be collected, used, stored, and protected.",
  keywords: [
    "Privacy Policy MoBiz.mu",
    "MoBiz.mu privacy policy",
    "Privacy policy Mauritius business website",
    "Data protection Mauritius website",
    "Business privacy policy Mauritius",
  ],
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  robots: {
    index: true,
    follow: true,
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <PrivacyPolicyJsonLd />

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <Lock className="h-3.5 w-3.5" />
                Privacy Policy
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Privacy Policy
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                This Privacy Policy explains how MoBiz.mu may collect, use,
                store, protect, and manage personal and business information in
                connection with the website, inquiries, service relationships,
                and related communications.
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
                  title: "Information Handling",
                  text: "This policy describes how information may be collected, used, stored, and managed by MoBiz.mu.",
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
              <PolicySection number="1" title="Scope of This Policy">
                <p>
                  This Privacy Policy applies to information collected through
                  the MoBiz.mu website, contact forms, inquiries, proposals,
                  quotations, service communications, and any related
                  interaction or engagement with MoBiz.mu.
                </p>
              </PolicySection>

              <PolicySection number="2" title="Information We May Collect">
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

              <PolicySection number="3" title="How Information May Be Used">
                <p>
                  MoBiz.mu may use information for purposes such as responding
                  to inquiries, preparing quotations or proposals, delivering
                  services, managing communication, improving website
                  performance, maintaining business records, supporting client
                  relationships, and complying with applicable legal or
                  operational requirements.
                </p>
              </PolicySection>

              <PolicySection number="4" title="Business and Service Communications">
                <p>
                  If you contact MoBiz.mu or engage in a service relationship,
                  we may use your information to communicate about your inquiry,
                  project, scope, updates, support needs, payment-related
                  matters, or other relevant business topics connected to your
                  request or engagement.
                </p>
              </PolicySection>

              <PolicySection number="5" title="Analytics and Website Improvement">
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

              <PolicySection number="6" title="Sharing of Information">
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

              <PolicySection number="7" title="Data Retention">
                <p>
                  MoBiz.mu may retain information for as long as reasonably
                  necessary to support communication, service delivery, record
                  keeping, operational requirements, legal obligations, dispute
                  resolution, or legitimate business interests.
                </p>
              </PolicySection>

              <PolicySection number="8" title="Data Protection and Security">
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

              <PolicySection number="9" title="Third-Party Platforms and Services">
                <p>
                  Some parts of MoBiz.mu operations may rely on third-party
                  platforms, software, hosting environments, form systems,
                  payment services, communication platforms, analytics tools, or
                  cloud services. Information processed through those systems may
                  also be subject to their policies and operational standards.
                </p>
              </PolicySection>

              <PolicySection number="10" title="Your Choices and Rights">
                <p>
                  Subject to applicable law, you may contact MoBiz.mu to request
                  clarification, correction, or update of certain information you
                  have provided. You may also ask questions about how your
                  information is handled in connection with your inquiry or
                  service relationship.
                </p>
              </PolicySection>

              <PolicySection number="11" title="Children’s Privacy">
                <p>
                  The MoBiz.mu website and services are intended for business,
                  professional, and general adult use. MoBiz.mu does not
                  knowingly collect personal information from children in a
                  manner inconsistent with applicable law.
                </p>
              </PolicySection>

              <PolicySection number="12" title="Policy Updates">
                <p>
                  MoBiz.mu may update this Privacy Policy from time to time to
                  reflect legal, business, technical, or operational changes.
                  Any revised version may be published on this page with an
                  updated effective date where appropriate.
                </p>
              </PolicySection>

              <PolicySection number="13" title="Contact">
                <p>
                  If you have questions about this Privacy Policy or about how
                  information is handled by MoBiz.mu, you may contact MoBiz.mu
                  through the website contact page.
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
                  Contact MoBiz.mu for Privacy Questions
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  If you need clarification about how information may be
                  collected, used, or handled in connection with the website or
                  a service relationship, you can contact MoBiz.mu directly
                  through the contact page.
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