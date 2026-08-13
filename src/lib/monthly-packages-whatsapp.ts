import {
  WHATSAPP_BASE_URL,
  getAddOns,
  getPackage,
  type PackageId,
} from "./monthly-packages";

export type EnquiryInput = {
  packageId: PackageId;
  addOnIds: string[];
  fullName: string;
  businessName: string;
  phone: string;
  email: string;
  businessActivity: string;
  websiteStatus: string;
  contactMethod: string;
  projectDetails: string;
};

const LAUNCH_LINE =
  "3–5 business days after receiving all required information, content, approval and payment";

/** Builds the plain-text enquiry sent to Mobiz.mu on WhatsApp. */
export function buildWhatsAppMessage(input: EnquiryInput): string {
  const pkg = getPackage(input.packageId);
  const addOns = getAddOns(input.addOnIds);
  const domainSelected = input.addOnIds.includes("domain-registration");

  const addOnBlock = addOns.length
    ? addOns.map((addon) => `* ${addon.name}`).join("\n")
    : "No additional services selected.";

  return [
    "Hello Mobiz.mu,",
    "",
    "I would like to subscribe to one of your monthly digital packages.",
    "",
    "SELECTED PACKAGE",
    "",
    `Package: ${pkg.name}`,
    `Monthly Price: ${pkg.priceLabel}`,
    "Subscription Period: 12 months",
    `Website Launch: ${LAUNCH_LINE}`,
    "",
    "SELECTED ADD-ONS",
    "",
    addOnBlock,
    "",
    "CUSTOMER DETAILS",
    "",
    `Full Name: ${input.fullName}`,
    `Business Name: ${input.businessName}`,
    `Phone Number: ${input.phone}`,
    `Email Address: ${input.email}`,
    `Business Activity: ${input.businessActivity}`,
    `Current Website Status: ${input.websiteStatus}`,
    `Preferred Contact Method: ${input.contactMethod}`,
    "",
    "PROJECT REQUIREMENTS",
    "",
    input.projectDetails,
    "",
    "PACKAGE INFORMATION",
    "",
    "Hosting Included: Yes",
    `Domain Included: ${domainSelected ? "Yes (domain registration add-on selected)" : "No"}`,
    "Domain registration is otherwise billed separately.",
    "Advertising budgets are not included.",
    "Additional services are subject to final confirmation.",
    "",
    "I understand that the selected monthly package requires a 12-month subscription.",
    "",
    "Please review my enquiry and contact me with the next steps.",
    "",
    "Thank you.",
  ].join("\n");
}

export function buildWhatsAppUrl(input: EnquiryInput): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(buildWhatsAppMessage(input))}`;
}

/** Prefilled message for the plain "Chat on WhatsApp" buttons. */
export function generalWhatsAppUrl(context = "monthly packages"): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    `Hello Mobiz.mu, I would like to know more about your ${context}.`,
  )}`;
}
