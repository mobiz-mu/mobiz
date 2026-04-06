import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  BriefcaseBusiness,
  FileText,
  Scale,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";
const effectiveDate = "April 6, 2026";

export const metadata: Metadata = {
  title: "Terms of Service | MoBiz.mu",
  description:
    "Read the Terms of Service for MoBiz.mu, including service engagement conditions, client responsibilities, project scope standards, payment principles, and general business relationship terms.",
  alternates: {
    canonical: `${siteUrl}/terms-of-service`,
  },
  openGraph: {
    title: "Terms of Service | MoBiz.mu",
    description:
      "Read the Terms of Service for MoBiz.mu, including service engagement conditions, client responsibilities, project scope standards, payment principles, and general business relationship terms.",
    url: `${siteUrl}/terms-of-service`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | MoBiz.mu",
    description:
      "Read the Terms of Service for MoBiz.mu, including service engagement conditions, client responsibilities, project scope standards, payment principles, and general business relationship terms.",
  },
};

function TermsOfServiceJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    url: `${siteUrl}/terms-of-service`,
    description:
      "Terms of Service governing business engagements and service relationships with MoBiz.mu.",
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

export default function TermsOfServicePage() {
  return (
    <>
      <TermsOfServiceJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <BriefcaseBusiness className="h-3.5 w-3.5" />
                Terms of Service
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Terms of Service
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                These Terms of Service govern the professional service
                relationship between MoBiz.mu and its clients. They outline the
                general principles that apply when engaging MoBiz.mu for digital,
                business, operational, creative, or advisory services.
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
                  title: "Service Clarity",
                  text: "Defines the framework for project scope, engagement, and service expectations.",
                  icon: FileText,
                },
                {
                  title: "Professional Standards",
                  text: "Supports a clear and serious business relationship between MoBiz.mu and clients.",
                  icon: ShieldCheck,
                },
                {
                  title: "Business Fairness",
                  text: "Helps align both parties around delivery, communication, responsibility, and payment principles.",
                  icon: Scale,
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
              <PolicySection title="1. Service Relationship">
                <p>
                  These Terms of Service apply when a client engages MoBiz.mu
                  for any service, including but not limited to website design,
                  digital marketing, branding, accounting support, logistics
                  solutions, business consulting, operational support, or
                  related services.
                </p>
                <p>
                  A service engagement may be initiated through written
                  communication, quotation acceptance, invoice acceptance,
                  proposal approval, direct agreement, or any other documented
                  confirmation between the client and MoBiz.mu.
                </p>
              </PolicySection>

              <PolicySection title="2. Scope of Work">
                <p>
                  Service scope is based on what is expressly agreed between the
                  parties. This may be defined through a quotation, invoice,
                  proposal, message thread, formal document, or other written
                  confirmation.
                </p>
                <p>
                  Any work, deliverable, revision, extension, or additional task
                  outside the agreed scope may require separate approval,
                  separate pricing, or an updated agreement.
                </p>
              </PolicySection>

              <PolicySection title="3. Client Responsibilities">
                <p>
                  Clients are responsible for providing timely and accurate
                  information, content, access, approvals, decisions, and any
                  required materials needed for service delivery.
                </p>
                <p>
                  Delays in providing required inputs, approvals, or responses
                  may affect timelines, delivery flow, project continuity, or
                  final execution.
                </p>
              </PolicySection>

              <PolicySection title="4. Timelines and Delivery">
                <p>
                  MoBiz.mu aims to deliver work professionally and within
                  reasonable timelines based on the complexity of the service,
                  the scope of engagement, and the responsiveness of the client.
                </p>
                <p>
                  Timelines may be adjusted where necessary due to revisions,
                  scope changes, access delays, third-party dependencies,
                  technical issues, or operational circumstances beyond direct
                  control.
                </p>
              </PolicySection>

              <PolicySection title="5. Revisions and Changes">
                <p>
                  Where revisions are included in a service engagement, they
                  apply only within the scope originally agreed. Requests that
                  materially change direction, add new requirements, or expand
                  the original work may be treated as additional work.
                </p>
                <p>
                  MoBiz.mu reserves the right to assess whether a request falls
                  within agreed revisions or constitutes new scope.
                </p>
              </PolicySection>

              <PolicySection title="6. Payments and Fees">
                <p>
                  Fees for services are based on the proposal, quotation,
                  invoice, or other pricing communication issued by MoBiz.mu.
                  Payment terms may vary depending on the type of work,
                  structure of engagement, and commercial arrangement.
                </p>
                <p>
                  Unless otherwise agreed in writing, services may require full
                  payment in advance, partial upfront payment, staged payment,
                  recurring payment, or milestone-based payment depending on the
                  service.
                </p>
                <p>
                  Work may be paused, delayed, withheld, or not initiated where
                  required payments have not been received in accordance with the
                  agreed arrangement.
                </p>
              </PolicySection>

              <PolicySection title="7. No Guarantee of Specific Business Results">
                <p>
                  MoBiz.mu provides services with the objective of improving
                  business presentation, visibility, structure, efficiency, or
                  growth support. However, no specific business outcome, revenue
                  result, lead volume, search ranking, or commercial result is
                  guaranteed unless explicitly agreed in writing.
                </p>
                <p>
                  Business outcomes may depend on multiple factors outside the
                  direct control of MoBiz.mu, including market conditions,
                  client decisions, timing, competition, operational capacity,
                  and execution by third parties.
                </p>
              </PolicySection>

              <PolicySection title="8. Intellectual Property and Deliverables">
                <p>
                  Ownership, licensing, and usage rights for deliverables may
                  depend on the type of service and the terms agreed for that
                  engagement. Unless otherwise agreed in writing, MoBiz.mu
                  retains ownership of its processes, methodologies, reusable
                  systems, proprietary materials, concepts, templates, internal
                  frameworks, and any pre-existing intellectual property.
                </p>
                <p>
                  Clients may only use delivered materials in accordance with
                  the agreed service arrangement and any related payment status.
                </p>
              </PolicySection>

              <PolicySection title="9. Suspension or Termination">
                <p>
                  MoBiz.mu reserves the right to suspend, pause, or terminate a
                  service relationship if there is non-payment, abuse, repeated
                  breakdown of communication, unlawful use, misuse of
                  deliverables, unreasonable conduct, or other circumstances
                  that materially affect the ability to continue the engagement
                  professionally.
                </p>
                <p>
                  A client may also choose to discontinue a service engagement,
                  but payments already made, work already completed, or time
                  already allocated may remain non-refundable unless otherwise
                  agreed in writing.
                </p>
              </PolicySection>

              <PolicySection title="10. Third-Party Platforms and Dependencies">
                <p>
                  Some services may involve third-party platforms, hosting
                  providers, software, payment processors, advertising
                  platforms, social networks, registrars, cloud systems, or
                  other external services. MoBiz.mu is not responsible for the
                  policies, interruptions, limitations, pricing changes, or
                  actions of such third parties.
                </p>
              </PolicySection>

              <PolicySection title="11. Limitation of Liability">
                <p>
                  To the fullest extent permitted by applicable law, MoBiz.mu
                  shall not be liable for indirect, incidental, special,
                  punitive, or consequential losses arising from or related to
                  the service relationship, including loss of revenue, loss of
                  data, business interruption, or missed opportunities.
                </p>
                <p>
                  Liability, where legally applicable, shall be interpreted in a
                  fair and commercially reasonable manner based on the nature of
                  the service relationship.
                </p>
              </PolicySection>

              <PolicySection title="12. Changes to These Terms">
                <p>
                  MoBiz.mu may update these Terms of Service from time to time
                  to reflect changes in business operations, legal standards,
                  services, delivery practices, or commercial structure. Any
                  updated version may be published with a revised effective date.
                </p>
              </PolicySection>

              <PolicySection title="13. Contact">
                <p>
                  If you have questions about these Terms of Service or about a
                  specific service engagement, you may contact MoBiz.mu through
                  the website contact page.
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