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

export type LeadInput = ContactLeadInput | NewsletterLeadInput;

type PartialLeadInput = Partial<ContactLeadInput> | Partial<NewsletterLeadInput>;

function isContactLeadInput(
  input: PartialLeadInput
): input is Partial<ContactLeadInput> {
  return input.type === "contact";
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
  return {
    id: crypto.randomUUID(),
    ...input,
    createdAt: new Date().toISOString(),
  };
}