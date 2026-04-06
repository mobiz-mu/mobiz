import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  Scale,
  ShieldCheck,
  FileText,
  Sparkles,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";
const effectiveDate = "April 6, 2026";

export const metadata: Metadata = {
  title: "Terms of Use | MoBiz.mu",
  description:
    "Read the Terms of Use for MoBiz.mu, including the conditions governing access to the website, content, and general visitor use.",
  alternates: {
    canonical: `${siteUrl}/terms-of-use`,
  },
  openGraph: {
    title: "Terms of Use | MoBiz.mu",
    description:
      "Read the Terms of Use for MoBiz.mu, including the conditions governing access to the website, content, and general visitor use.",
    url: `${siteUrl}/terms-of-use`,
    siteName: "MoBiz.mu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | MoBiz.mu",
    description:
      "Read the Terms of Use for MoBiz.mu, including the conditions governing access to the website, content, and general visitor use.",
  },
};

function TermsOfUseJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Use",
    url: `${siteUrl}/terms-of-use`,
    description:
      "Terms of Use governing access to and use of the MoBiz.mu website.",
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

export default function TermsOfUsePage() {
  return (
    <>
      <TermsOfUseJsonLd />

      <main className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9fc_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="relative isolate overflow-hidden border-b border-[#e8edf5]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.12),transparent_30%),radial-gradient(circle_at_left,rgba(7,18,38,0.05),transparent_26%),linear-gradient(180deg,#f8fbff_0%,#ffffff_100%)]" />

          <Container className="relative z-10 max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white/85 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_30px_rgba(7,18,38,0.05)]">
                <Scale className="h-3.5 w-3.5" />
                Terms of Use
              </div>

              <h1
                className="mt-5 text-balance text-4xl font-semibold tracking-tight text-[#071226] sm:text-5xl lg:text-[3.8rem] lg:leading-[1.03]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Terms of Use
              </h1>

              <p className="mx-auto mt-5 max-w-3xl text-[15px] leading-8 text-[#44556f] sm:text-[16px]">
                These Terms of Use govern your access to and general use of the
                MoBiz.mu website. By visiting or using this website, you agree
                to these terms. If you do not agree, you should discontinue use
                of the website.
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
                  title: "Website Access",
                  text: "Defines the conditions for general access to and use of the MoBiz.mu website.",
                  icon: FileText,
                },
                {
                  title: "Responsible Use",
                  text: "Users are expected to interact with the website lawfully and respectfully.",
                  icon: ShieldCheck,
                },
                {
                  title: "Content Standards",
                  text: "Website materials remain protected and cannot be misused, copied, or exploited improperly.",
                  icon: Sparkles,
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
              <PolicySection title="1. Acceptance of Terms">
                <p>
                  By accessing or using the MoBiz.mu website, you confirm that
                  you have read, understood, and accepted these Terms of Use.
                  These terms apply to all visitors, users, and other persons
                  who access the website.
                </p>
              </PolicySection>

              <PolicySection title="2. Website Purpose">
                <p>
                  The MoBiz.mu website is provided for general informational,
                  promotional, and business communication purposes. Content on
                  this website is intended to describe services, business
                  capabilities, projects, insights, and general company
                  information.
                </p>
                <p>
                  Nothing on the website should be interpreted as legal,
                  accounting, tax, regulatory, or other professional advice
                  unless explicitly stated in a formal service relationship.
                </p>
              </PolicySection>

              <PolicySection title="3. Permitted Use">
                <p>
                  You may use this website for lawful purposes only. You agree
                  not to use the website in any way that could damage, disable,
                  overload, interfere with, or compromise the website, its
                  operation, its security, or its availability to other users.
                </p>
                <p>
                  You also agree not to attempt unauthorized access to any part
                  of the website, server environment, administrative interface,
                  or connected systems.
                </p>
              </PolicySection>

              <PolicySection title="4. Intellectual Property">
                <p>
                  Unless otherwise stated, all website content, including text,
                  design, layout, graphics, branding, logos, visual assets,
                  source presentation, and other materials on MoBiz.mu are owned
                  by or licensed to MoBiz.mu and are protected by applicable
                  intellectual property laws.
                </p>
                <p>
                  You may not reproduce, republish, distribute, modify, display,
                  transmit, or commercially exploit any content from this
                  website without prior written permission from MoBiz.mu.
                </p>
              </PolicySection>

              <PolicySection title="5. Accuracy of Information">
                <p>
                  MoBiz.mu aims to keep website content accurate, professional,
                  and up to date. However, we do not guarantee that all content
                  will always be complete, current, or free from error.
                </p>
                <p>
                  Information displayed on this website may be updated, revised,
                  removed, or changed at any time without prior notice.
                </p>
              </PolicySection>

              <PolicySection title="6. Third-Party Links">
                <p>
                  This website may contain links to third-party websites,
                  platforms, or services for convenience or reference. MoBiz.mu
                  does not control and is not responsible for the content,
                  privacy practices, security, or availability of third-party
                  websites.
                </p>
                <p>
                  Accessing third-party links is done at your own discretion and
                  risk.
                </p>
              </PolicySection>

              <PolicySection title="7. No Warranties">
                <p>
                  The website is provided on an “as is” and “as available”
                  basis. To the fullest extent permitted by law, MoBiz.mu makes
                  no warranties, express or implied, regarding the website,
                  including availability, uninterrupted access, accuracy,
                  security, fitness for a particular purpose, or absence of
                  technical issues.
                </p>
              </PolicySection>

              <PolicySection title="8. Limitation of Liability">
                <p>
                  To the fullest extent permitted by applicable law, MoBiz.mu
                  shall not be liable for any direct, indirect, incidental,
                  consequential, special, or punitive damages arising out of or
                  related to your access to or use of the website.
                </p>
                <p>
                  This includes, without limitation, damages related to data
                  loss, service interruption, reliance on website content, or
                  technical malfunction.
                </p>
              </PolicySection>

              <PolicySection title="9. Changes to These Terms">
                <p>
                  MoBiz.mu may revise these Terms of Use at any time to reflect
                  legal, business, technical, or operational updates. Any
                  updated version will be published on this page with a revised
                  effective date where appropriate.
                </p>
                <p>
                  Continued use of the website after changes are posted
                  constitutes acceptance of the updated terms.
                </p>
              </PolicySection>

              <PolicySection title="10. Governing Principles">
                <p>
                  These Terms of Use are intended to support fair, lawful, and
                  professional use of the MoBiz.mu website. Any interpretation
                  or enforcement of these terms should be approached in a manner
                  consistent with applicable legal and regulatory standards.
                </p>
              </PolicySection>

              <PolicySection title="11. Contact">
                <p>
                  If you have any questions about these Terms of Use, you may
                  contact MoBiz.mu through the website contact page.
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