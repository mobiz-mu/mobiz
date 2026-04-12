import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import {
  ArrowRight,
  Scale,
  ShieldCheck,
  FileText,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const siteUrl = "https://mobiz.mu";
const effectiveDate = "April 6, 2026";

export const metadata: Metadata = {
  title: "Terms of Use | MoBiz.mu",
  description:
    "Read the Terms of Use for MoBiz.mu, including the conditions governing access to the website, content, and general visitor use.",
  keywords: [
    "Terms of Use MoBiz.mu",
    "MoBiz.mu terms",
    "Website terms Mauritius",
    "Business website legal page Mauritius",
    "Terms and conditions MoBiz.mu",
  ],
  alternates: {
    canonical: `${siteUrl}/terms-of-use`,
  },
  robots: {
    index: true,
    follow: true,
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

export default function TermsOfUsePage() {
  return (
    <>
      <TermsOfUseJsonLd />

      <main className="bg-[linear-gradient(180deg,#f8fbff_0%,#ffffff_18%,#ffffff_100%)] text-[#071226]">
        <section className="border-b border-[#e8edf5] bg-[radial-gradient(circle_at_top,rgba(207,174,82,0.10),transparent_28%),linear-gradient(180deg,#fafcff_0%,#ffffff_100%)]">
          <Container className="max-w-[1240px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
            <div className="mx-auto max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d7dee9] bg-white px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#8b6a18] shadow-[0_10px_24px_rgba(7,18,38,0.04)]">
                <Scale className="h-3.5 w-3.5" />
                Terms of Use
              </div>

              <h1
                className="mt-4 text-balance text-[2rem] font-semibold tracking-tight text-[#071226] sm:text-[2.6rem] lg:text-[3.2rem] lg:leading-[1.05]"
                style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
              >
                Terms of Use
              </h1>

              <p className="mx-auto mt-4 max-w-3xl text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                These Terms of Use govern your access to and general use of the
                MoBiz.mu website. By visiting or using this website, you agree to
                these terms. If you do not agree, you should discontinue use of
                the website.
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
                  title: "Website Access",
                  text: "Defines the conditions for general access to and use of the MoBiz.mu website.",
                  icon: FileText,
                },
                {
                  title: "Responsible Use",
                  text: "Users are expected to interact with the website lawfully, respectfully, and without misuse.",
                  icon: ShieldCheck,
                },
                {
                  title: "Content Protection",
                  text: "Website materials remain protected and cannot be copied, republished, or commercially exploited without permission.",
                  icon: Sparkles,
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
              <PolicySection number="1" title="Acceptance of Terms">
                <p>
                  By accessing or using the MoBiz.mu website, you confirm that
                  you have read, understood, and accepted these Terms of Use.
                  These terms apply to all visitors, users, and other persons
                  who access the website.
                </p>
              </PolicySection>

              <PolicySection number="2" title="Website Purpose">
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

              <PolicySection number="3" title="Permitted Use">
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

              <PolicySection number="4" title="Intellectual Property">
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

              <PolicySection number="5" title="Accuracy of Information">
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

              <PolicySection number="6" title="Third-Party Links">
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

              <PolicySection number="7" title="No Warranties">
                <p>
                  The website is provided on an “as is” and “as available”
                  basis. To the fullest extent permitted by law, MoBiz.mu makes
                  no warranties, express or implied, regarding the website,
                  including availability, uninterrupted access, accuracy,
                  security, fitness for a particular purpose, or absence of
                  technical issues.
                </p>
              </PolicySection>

              <PolicySection number="8" title="Limitation of Liability">
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

              <PolicySection number="9" title="Changes to These Terms">
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

              <PolicySection number="10" title="Governing Principles">
                <p>
                  These Terms of Use are intended to support fair, lawful, and
                  professional use of the MoBiz.mu website. Any interpretation
                  or enforcement of these terms should be approached in a manner
                  consistent with applicable legal and regulatory standards.
                </p>
              </PolicySection>

              <PolicySection number="11" title="Contact">
                <p>
                  If you have any questions about these Terms of Use, you may
                  contact MoBiz.mu through the website contact page.
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
                  Contact MoBiz.mu for Questions About Website Use
                </h2>

                <p className="mt-4 text-[14px] leading-7 text-[#44556f] sm:text-[15px]">
                  If you need clarification about how these Terms of Use apply
                  to your interaction with the website, you can contact MoBiz.mu
                  directly through the contact page.
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