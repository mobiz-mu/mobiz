/**
 * Legal and policy content.
 *
 * Migrated verbatim from the live site. The wording carries legal meaning — it
 * may be re-typeset, re-ordered visually or given a table of contents, but the
 * substance must not be rewritten. Treat edits here as a legal change, not a
 * copy change.
 */

export type PolicySection = {
  /** Displayed section number, preserved from the source document. */
  number: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type PolicyDocument = {
  slug: string;
  title: string;
  metaDescription: string;
  intro: string;
  effectiveDate: string;
  sections: PolicySection[];
};

export const POLICY_DOCUMENTS: Record<string, PolicyDocument> = {
  "privacy-policy": {
    "slug": "privacy-policy",
    "title": "Privacy Policy",
    "metaDescription": "Read the Privacy Policy for MoBiz.mu, including how personal and business information may be collected, used, stored, and protected.",
    "intro": "How MoBiz.mu collects, uses, stores and protects personal and business information.",
    "effectiveDate": "April 6, 2026",
    "sections": [
      {
        "number": "1",
        "title": "Scope of This Policy",
        "paragraphs": [
          "This Privacy Policy applies to information collected through the MoBiz.mu website, contact forms, inquiries, proposals, quotations, service communications, and any related interaction or engagement with MoBiz.mu."
        ]
      },
      {
        "number": "2",
        "title": "Information We May Collect",
        "paragraphs": [
          "Depending on the nature of your interaction with MoBiz.mu, we may collect personal or business information such as your name, company name, email address, phone number, service requirements, billing-related details, project information, or other information you choose to provide.",
          "We may also collect certain technical information such as device type, browser type, pages visited, general usage data, and interaction data related to website analytics and site improvement."
        ]
      },
      {
        "number": "3",
        "title": "How Information May Be Used",
        "paragraphs": [
          "MoBiz.mu may use information for purposes such as responding to inquiries, preparing quotations or proposals, delivering services, managing communication, improving website performance, maintaining business records, supporting client relationships, and complying with applicable legal or operational requirements."
        ]
      },
      {
        "number": "4",
        "title": "Business and Service Communications",
        "paragraphs": [
          "If you contact MoBiz.mu or engage in a service relationship, we may use your information to communicate about your inquiry, project, scope, updates, support needs, payment-related matters, or other relevant business topics connected to your request or engagement."
        ]
      },
      {
        "number": "5",
        "title": "Analytics and Website Improvement",
        "paragraphs": [
          "MoBiz.mu may use analytics tools, cookies, or similar technologies to understand how visitors use the website, improve user experience, measure performance, and support technical optimization.",
          "Such information is generally used to improve the website and overall digital experience rather than to personally identify users unnecessarily."
        ]
      },
      {
        "number": "6",
        "title": "Sharing of Information",
        "paragraphs": [
          "MoBiz.mu does not sell personal information to third parties. Information may be shared only where reasonably necessary for business operations, service delivery, platform use, payment processing, technical infrastructure, legal compliance, or professional support connected to the service relationship.",
          "Where third-party tools or providers are involved, information may be processed under their applicable operational or privacy standards."
        ]
      },
      {
        "number": "7",
        "title": "Data Retention",
        "paragraphs": [
          "MoBiz.mu may retain information for as long as reasonably necessary to support communication, service delivery, record keeping, operational requirements, legal obligations, dispute resolution, or legitimate business interests."
        ]
      },
      {
        "number": "8",
        "title": "Data Protection and Security",
        "paragraphs": [
          "MoBiz.mu applies reasonable administrative, technical, and operational measures designed to help protect information from unauthorized access, misuse, disclosure, loss, or alteration.",
          "However, no digital system, website, or transmission method can be guaranteed to be completely secure, and users should also exercise reasonable care in the information they share online."
        ]
      },
      {
        "number": "9",
        "title": "Third-Party Platforms and Services",
        "paragraphs": [
          "Some parts of MoBiz.mu operations may rely on third-party platforms, software, hosting environments, form systems, payment services, communication platforms, analytics tools, or cloud services. Information processed through those systems may also be subject to their policies and operational standards."
        ]
      },
      {
        "number": "10",
        "title": "Your Choices and Rights",
        "paragraphs": [
          "Subject to applicable law, you may contact MoBiz.mu to request clarification, correction, or update of certain information you have provided. You may also ask questions about how your information is handled in connection with your inquiry or service relationship."
        ]
      },
      {
        "number": "11",
        "title": "Children’s Privacy",
        "paragraphs": [
          "The MoBiz.mu website and services are intended for business, professional, and general adult use. MoBiz.mu does not knowingly collect personal information from children in a manner inconsistent with applicable law."
        ]
      },
      {
        "number": "12",
        "title": "Policy Updates",
        "paragraphs": [
          "MoBiz.mu may update this Privacy Policy from time to time to reflect legal, business, technical, or operational changes. Any revised version may be published on this page with an updated effective date where appropriate."
        ]
      },
      {
        "number": "13",
        "title": "Contact",
        "paragraphs": [
          "If you have questions about this Privacy Policy or about how information is handled by MoBiz.mu, you may contact MoBiz.mu through the website contact page."
        ]
      }
    ]
  },
  "terms-of-use": {
    "slug": "terms-of-use",
    "title": "Terms of Use",
    "metaDescription": "Read the Terms of Use for MoBiz.mu, including the conditions governing access to the website, content, and general visitor use.",
    "intro": "The conditions governing access to the MoBiz.mu website, its content and general visitor use.",
    "effectiveDate": "April 6, 2026",
    "sections": [
      {
        "number": "1",
        "title": "Acceptance of Terms",
        "paragraphs": [
          "By accessing or using the MoBiz.mu website, you confirm that you have read, understood, and accepted these Terms of Use. These terms apply to all visitors, users, and other persons who access the website."
        ]
      },
      {
        "number": "2",
        "title": "Website Purpose",
        "paragraphs": [
          "The MoBiz.mu website is provided for general informational, promotional, and business communication purposes. Content on this website is intended to describe services, business capabilities, projects, insights, and general company information.",
          "Nothing on the website should be interpreted as legal, accounting, tax, regulatory, or other professional advice unless explicitly stated in a formal service relationship."
        ]
      },
      {
        "number": "3",
        "title": "Permitted Use",
        "paragraphs": [
          "You may use this website for lawful purposes only. You agree not to use the website in any way that could damage, disable, overload, interfere with, or compromise the website, its operation, its security, or its availability to other users.",
          "You also agree not to attempt unauthorized access to any part of the website, server environment, administrative interface, or connected systems."
        ]
      },
      {
        "number": "4",
        "title": "Intellectual Property",
        "paragraphs": [
          "Unless otherwise stated, all website content, including text, design, layout, graphics, branding, logos, visual assets, source presentation, and other materials on MoBiz.mu are owned by or licensed to MoBiz.mu and are protected by applicable intellectual property laws.",
          "You may not reproduce, republish, distribute, modify, display, transmit, or commercially exploit any content from this website without prior written permission from MoBiz.mu."
        ]
      },
      {
        "number": "5",
        "title": "Accuracy of Information",
        "paragraphs": [
          "MoBiz.mu aims to keep website content accurate, professional, and up to date. However, we do not guarantee that all content will always be complete, current, or free from error.",
          "Information displayed on this website may be updated, revised, removed, or changed at any time without prior notice."
        ]
      },
      {
        "number": "6",
        "title": "Third-Party Links",
        "paragraphs": [
          "This website may contain links to third-party websites, platforms, or services for convenience or reference. MoBiz.mu does not control and is not responsible for the content, privacy practices, security, or availability of third-party websites.",
          "Accessing third-party links is done at your own discretion and risk."
        ]
      },
      {
        "number": "7",
        "title": "No Warranties",
        "paragraphs": [
          "The website is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, MoBiz.mu makes no warranties, express or implied, regarding the website, including availability, uninterrupted access, accuracy, security, fitness for a particular purpose, or absence of technical issues."
        ]
      },
      {
        "number": "8",
        "title": "Limitation of Liability",
        "paragraphs": [
          "To the fullest extent permitted by applicable law, MoBiz.mu shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or related to your access to or use of the website.",
          "This includes, without limitation, damages related to data loss, service interruption, reliance on website content, or technical malfunction."
        ]
      },
      {
        "number": "9",
        "title": "Changes to These Terms",
        "paragraphs": [
          "MoBiz.mu may revise these Terms of Use at any time to reflect legal, business, technical, or operational updates. Any updated version will be published on this page with a revised effective date where appropriate.",
          "Continued use of the website after changes are posted constitutes acceptance of the updated terms."
        ]
      },
      {
        "number": "10",
        "title": "Governing Principles",
        "paragraphs": [
          "These Terms of Use are intended to support fair, lawful, and professional use of the MoBiz.mu website. Any interpretation or enforcement of these terms should be approached in a manner consistent with applicable legal and regulatory standards."
        ]
      },
      {
        "number": "11",
        "title": "Contact",
        "paragraphs": [
          "If you have any questions about these Terms of Use, you may contact MoBiz.mu through the website contact page."
        ]
      }
    ]
  },
  "terms-of-service": {
    "slug": "terms-of-service",
    "title": "Terms of Service",
    "metaDescription": "Read the Terms of Service for MoBiz.mu, including service engagement conditions, client responsibilities, project scope standards, payment principles, and general business relationship terms.",
    "intro": "The terms that apply when engaging MoBiz.mu for business, digital or operational support.",
    "effectiveDate": "April 6, 2026",
    "sections": [
      {
        "number": "1",
        "title": "Service Relationship",
        "paragraphs": [
          "These Terms of Service apply when a client engages MoBiz.mu for any service, including but not limited to website design, digital marketing, branding, accounting support, logistics solutions, business consulting, operational support, or related services.",
          "A service engagement may be initiated through written communication, quotation acceptance, invoice acceptance, proposal approval, direct agreement, or any other documented confirmation between the client and MoBiz.mu."
        ]
      },
      {
        "number": "2",
        "title": "Scope of Work",
        "paragraphs": [
          "Service scope is based on what is expressly agreed between the parties. This may be defined through a quotation, invoice, proposal, message thread, formal document, or other written confirmation.",
          "Any work, deliverable, revision, extension, or additional task outside the agreed scope may require separate approval, separate pricing, or an updated agreement."
        ]
      },
      {
        "number": "3",
        "title": "Client Responsibilities",
        "paragraphs": [
          "Clients are responsible for providing timely and accurate information, content, access, approvals, decisions, and any required materials needed for service delivery.",
          "Delays in providing required inputs, approvals, or responses may affect timelines, delivery flow, project continuity, or final execution."
        ]
      },
      {
        "number": "4",
        "title": "Timelines and Delivery",
        "paragraphs": [
          "MoBiz.mu aims to deliver work professionally and within reasonable timelines based on the complexity of the service, the scope of engagement, and the responsiveness of the client.",
          "Timelines may be adjusted where necessary due to revisions, scope changes, access delays, third-party dependencies, technical issues, or operational circumstances beyond direct control."
        ]
      },
      {
        "number": "5",
        "title": "Revisions and Changes",
        "paragraphs": [
          "Where revisions are included in a service engagement, they apply only within the scope originally agreed. Requests that materially change direction, add new requirements, or expand the original work may be treated as additional work.",
          "MoBiz.mu reserves the right to assess whether a request falls within agreed revisions or constitutes new scope."
        ]
      },
      {
        "number": "6",
        "title": "Payments and Fees",
        "paragraphs": [
          "Fees for services are based on the proposal, quotation, invoice, or other pricing communication issued by MoBiz.mu. Payment terms may vary depending on the type of work, structure of engagement, and commercial arrangement.",
          "Unless otherwise agreed in writing, services may require full payment in advance, partial upfront payment, staged payment, recurring payment, or milestone-based payment depending on the service.",
          "Work may be paused, delayed, withheld, or not initiated where required payments have not been received in accordance with the agreed arrangement."
        ]
      },
      {
        "number": "7",
        "title": "No Guarantee of Specific Business Results",
        "paragraphs": [
          "MoBiz.mu provides services with the objective of improving business presentation, visibility, structure, efficiency, or growth support. However, no specific business outcome, revenue result, lead volume, search ranking, or commercial result is guaranteed unless explicitly agreed in writing.",
          "Business outcomes may depend on multiple factors outside the direct control of MoBiz.mu, including market conditions, client decisions, timing, competition, operational capacity, and execution by third parties."
        ]
      },
      {
        "number": "8",
        "title": "Intellectual Property and Deliverables",
        "paragraphs": [
          "Ownership, licensing, and usage rights for deliverables may depend on the type of service and the terms agreed for that engagement. Unless otherwise agreed in writing, MoBiz.mu retains ownership of its processes, methodologies, reusable systems, proprietary materials, concepts, templates, internal frameworks, and any pre-existing intellectual property.",
          "Clients may only use delivered materials in accordance with the agreed service arrangement and any related payment status."
        ]
      },
      {
        "number": "9",
        "title": "Suspension or Termination",
        "paragraphs": [
          "MoBiz.mu reserves the right to suspend, pause, or terminate a service relationship if there is non-payment, abuse, repeated breakdown of communication, unlawful use, misuse of deliverables, unreasonable conduct, or other circumstances that materially affect the ability to continue the engagement professionally.",
          "A client may also choose to discontinue a service engagement, but payments already made, work already completed, or time already allocated may remain non-refundable unless otherwise agreed in writing."
        ]
      },
      {
        "number": "10",
        "title": "Third-Party Platforms and Dependencies",
        "paragraphs": [
          "Some services may involve third-party platforms, hosting providers, software, payment processors, advertising platforms, social networks, registrars, cloud systems, or other external services. MoBiz.mu is not responsible for the policies, interruptions, limitations, pricing changes, or actions of such third parties."
        ]
      },
      {
        "number": "11",
        "title": "Limitation of Liability",
        "paragraphs": [
          "To the fullest extent permitted by applicable law, MoBiz.mu shall not be liable for indirect, incidental, special, punitive, or consequential losses arising from or related to the service relationship, including loss of revenue, loss of data, business interruption, or missed opportunities.",
          "Liability, where legally applicable, shall be interpreted in a fair and commercially reasonable manner based on the nature of the service relationship."
        ]
      },
      {
        "number": "12",
        "title": "Changes to These Terms",
        "paragraphs": [
          "MoBiz.mu may update these Terms of Service from time to time to reflect changes in business operations, legal standards, services, delivery practices, or commercial structure. Any updated version may be published with a revised effective date."
        ]
      },
      {
        "number": "13",
        "title": "Contact",
        "paragraphs": [
          "If you have questions about these Terms of Service or about a specific service engagement, you may contact MoBiz.mu through the website contact page."
        ]
      }
    ]
  },
  "security-policy": {
    "slug": "security-policy",
    "title": "Security Policy",
    "metaDescription": "Read the Security Policy for MoBiz.mu, including general principles related to website, business, platform, data, and operational security standards.",
    "intro": "The principles and safeguards MoBiz.mu follows to help maintain platform, business and information security.",
    "effectiveDate": "April 6, 2026",
    "sections": [
      {
        "number": "1",
        "title": "Security Commitment",
        "paragraphs": [
          "MoBiz.mu is committed to maintaining a responsible and professional approach to security across its website, operational systems, digital platforms, and business processes. Security is treated as an important part of service quality, trust, and responsible business conduct."
        ]
      },
      {
        "number": "2",
        "title": "Security Objectives",
        "paragraphs": [
          "The general objectives of this Security Policy are to support the confidentiality, integrity, availability, and responsible handling of systems, information, and digital services used by MoBiz.mu."
        ]
      },
      {
        "number": "3",
        "title": "Website and Platform Security",
        "paragraphs": [
          "MoBiz.mu seeks to maintain appropriate safeguards for its website and connected digital platforms. This may include security-conscious configuration, controlled access practices, software updates, technical monitoring, and use of reputable hosting or platform infrastructure where applicable."
        ]
      },
      {
        "number": "4",
        "title": "Access Control",
        "paragraphs": [
          "Access to business systems, internal platforms, service environments, administrative interfaces, and operational tools is intended to be limited to authorized persons with a legitimate business need.",
          "Reasonable efforts may be used to reduce the risk of unauthorized access, misuse, or compromise."
        ]
      },
      {
        "number": "5",
        "title": "Information Protection",
        "paragraphs": [
          "MoBiz.mu aims to handle personal, business, project, and operational information with appropriate care and with awareness of confidentiality, business sensitivity, and data protection responsibilities.",
          "Information protection practices may vary depending on the nature of the service, the systems used, and the operational context involved."
        ]
      },
      {
        "number": "6",
        "title": "Third-Party Services and Infrastructure",
        "paragraphs": [
          "MoBiz.mu may rely on third-party hosting providers, cloud services, communication tools, payment platforms, analytics services, software systems, and other infrastructure providers. While care may be taken in selecting appropriate tools, MoBiz.mu is not responsible for the independent policies, outages, security incidents, or operational limitations of third-party services."
        ]
      },
      {
        "number": "7",
        "title": "Operational Security Practices",
        "paragraphs": [
          "Security is supported not only through technology but also through disciplined operational practices. This may include reasonable handling of credentials, workflow structure, limited-access principles, organized system use, and awareness-based precautions in daily operations."
        ]
      },
      {
        "number": "8",
        "title": "Incident Awareness and Response",
        "paragraphs": [
          "If a security-related concern, technical vulnerability, or operational issue is identified, MoBiz.mu may take steps considered reasonable and appropriate in the circumstances to assess, contain, mitigate, investigate, or address the issue.",
          "Response measures may vary depending on the nature, scale, and impact of the issue."
        ]
      },
      {
        "number": "9",
        "title": "No Absolute Guarantee",
        "paragraphs": [
          "Although MoBiz.mu seeks to maintain a security-aware and responsible operational environment, no website, platform, transmission method, or technical system can be guaranteed to be completely secure or free from all risk.",
          "Users and clients should also exercise reasonable care in protecting their own credentials, devices, accounts, and information when interacting online."
        ]
      },
      {
        "number": "10",
        "title": "Policy Updates",
        "paragraphs": [
          "MoBiz.mu may revise this Security Policy from time to time to reflect evolving legal, technical, business, or operational requirements. Revised versions may be published on this page with an updated effective date where appropriate."
        ]
      },
      {
        "number": "11",
        "title": "Contact",
        "paragraphs": [
          "If you have questions about this Security Policy or wish to raise a security-related concern regarding the MoBiz.mu website or services, you may contact MoBiz.mu through the website contact page."
        ]
      }
    ]
  }
};

export const POLICY_SLUGS = Object.keys(POLICY_DOCUMENTS);

export function getPolicy(slug: string): PolicyDocument | undefined {
  return POLICY_DOCUMENTS[slug];
}

/** The /policies index — descriptions carried from the live hub page. */
export const POLICY_INDEX = [
  {
    title: 'Terms of Use',
    description:
      'Read the general conditions governing the use of the MoBiz.mu website, content, pages, and visitor interactions.',
    href: '/terms-of-use',
  },
  {
    title: 'Terms of Service',
    description:
      'Understand the service-related terms that apply when engaging MoBiz.mu for business, digital, or operational support.',
    href: '/terms-of-service',
  },
  {
    title: 'Privacy Policy',
    description:
      'Learn how MoBiz.mu collects, uses, stores, and protects personal and business information.',
    href: '/privacy-policy',
  },
  {
    title: 'Security Policy',
    description:
      'Review the principles and safeguards MoBiz.mu follows to help maintain platform, business, and information security.',
    href: '/security-policy',
  },
] as const;
