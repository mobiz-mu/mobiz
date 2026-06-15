import { supabaseServer } from "@/lib/supabase-server";

export type ContactLeadInput = {
  type: "contact";
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

export type NewsletterLeadInput = {
  type: "newsletter";
  email: string;
};

export type LeadMagnetKey =
  | "free_seo_audit"
  | "free_website_review"
  | "free_business_consultation";

export type LeadMagnetLeadInput = {
  type: "lead_magnet";
  magnet: LeadMagnetKey;
  fullName: string;
  businessName?: string;
  phone?: string;
  whatsapp?: string;
  email: string;
  website?: string;
  service: string;
  preferredContact?: string;
  message?: string;
};

export type LeadInput =
  | ContactLeadInput
  | NewsletterLeadInput
  | LeadMagnetLeadInput;

type PartialLeadInput =
  | Partial<ContactLeadInput>
  | Partial<NewsletterLeadInput>
  | Partial<LeadMagnetLeadInput>;

const LEAD_MAGNET_LABELS: Record<LeadMagnetKey, string> = {
  free_seo_audit: "Free SEO Audit",
  free_website_review: "Free Website Review",
  free_business_consultation: "Free Business Consultation",
};

function isContactLeadInput(
  input: PartialLeadInput
): input is Partial<ContactLeadInput> {
  return input.type === "contact";
}

function isLeadMagnetInput(
  input: PartialLeadInput
): input is Partial<LeadMagnetLeadInput> {
  return input.type === "lead_magnet";
}

export function validateLeadPayload(input: PartialLeadInput) {
  if (!input.type) {
    return { valid: false, message: "Missing payload type." };
  }

  if (input.type === "newsletter") {
    if (!input.email || !/\S+@\S+\.\S+/.test(input.email)) {
      return { valid: false, message: "A valid email is required." };
    }

    return { valid: true as const };
  }

  if (isLeadMagnetInput(input)) {
    if (
      !input.magnet ||
      !LEAD_MAGNET_LABELS[input.magnet as LeadMagnetKey] ||
      !input.fullName ||
      !input.email ||
      !input.service ||
      !/\S+@\S+\.\S+/.test(input.email)
    ) {
      return {
        valid: false,
        message: "Please fill in your name, email, and the service you need.",
      };
    }

    return { valid: true as const };
  }

  if (!isContactLeadInput(input)) {
    return { valid: false, message: "Invalid payload type." };
  }

  if (
    !input.fullName ||
    !input.email ||
    !input.service ||
    !input.message ||
    !/\S+@\S+\.\S+/.test(input.email)
  ) {
    return {
      valid: false,
      message: "Please fill in all required contact form fields.",
    };
  }

  return { valid: true as const };
}

export async function persistLead(input: LeadInput) {
  if (input.type === "newsletter") {
    const { data, error } = await supabaseServer
      .from("newsletter_subscribers")
      .insert({
        email: input.email.trim().toLowerCase(),
      })
      .select("*")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return {
      type: "newsletter" as const,
      record: data,
    };
  }

  if (input.type === "lead_magnet") {
    const label = LEAD_MAGNET_LABELS[input.magnet];

    const detailLines = [
      `[${label} request]`,
      input.preferredContact
        ? `Preferred contact: ${input.preferredContact.trim()}`
        : null,
      input.whatsapp ? `WhatsApp: ${input.whatsapp.trim()}` : null,
      input.website ? `Website: ${input.website.trim()}` : null,
    ].filter(Boolean) as string[];

    const composedMessage = [
      detailLines.join("\n"),
      input.message?.trim() ? `\n${input.message.trim()}` : "",
    ]
      .join("")
      .trim();

    const { data, error } = await supabaseServer
      .from("leads")
      .insert({
        full_name: input.fullName.trim(),
        company_name: input.businessName?.trim() || null,
        email: input.email.trim().toLowerCase(),
        phone: input.phone?.trim() || input.whatsapp?.trim() || null,
        service: input.service.trim(),
        message: composedMessage,
        source: input.magnet,
        status: "new",
      })
      .select("*")
      .single();

    if (error) {
      throw new Error(error.message);
    }

    return {
      type: "lead_magnet" as const,
      record: data,
    };
  }

  const { data, error } = await supabaseServer
    .from("leads")
    .insert({
      full_name: input.fullName.trim(),
      company_name: input.companyName?.trim() || null,
      email: input.email.trim().toLowerCase(),
      phone: input.phone?.trim() || null,
      service: input.service.trim(),
      message: input.message.trim(),
      source: "contact_form",
      status: "new",
    })
    .select("*")
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return {
    type: "contact" as const,
    record: data,
  };
}