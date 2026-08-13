import { AI_WHATSAPP_NUMBER } from "./mobiz-knowledge";

/**
 * Builds a prefilled WhatsApp URL for handing a visitor over to a person.
 * The assistant only ever SUGGESTS this link — the visitor chooses to open it.
 * The conversation is never sent automatically.
 */
export function buildEscalationUrl(input: {
  service?: string;
  question?: string;
}): string {
  const message = [
    "Hello Mobiz.mu,",
    "",
    "I was speaking with the Mobiz.mu AI Assistant and would like some help.",
    "",
    `Service: ${input.service?.trim() || "General enquiry"}`,
    "",
    "My question / requirement:",
    input.question?.trim() || "(please describe your requirement)",
    "",
    "Please contact me regarding the next steps.",
    "",
    "Thank you.",
  ].join("\n");

  return `https://wa.me/${AI_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Plain link used by the UI's "Chat with a person on WhatsApp" button. */
export function generalEscalationUrl(): string {
  return buildEscalationUrl({});
}
