"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/Button";
import { WhatsAppIcon } from "@/components/ui/icons";
import { CONTACT_SERVICE_OPTIONS, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

type Field = "name" | "business" | "phone" | "email" | "service" | "message";

type EnquiryFormProps = {
  /** Opening line of the composed message, e.g. the lead-magnet intro. */
  intro: string;
  submitLabel?: string;
  /** Pre-selects the service dropdown. */
  defaultService?: string;
  serviceOptions?: readonly string[];
};

/**
 * Enquiry form.
 *
 * There is no form backend on this site, so this does NOT pretend to submit.
 * It validates, then composes a prefilled WhatsApp message and opens the
 * conversation — the visitor sends it themselves and can see exactly what is
 * being sent. That is honest, and it lands the enquiry in the channel Mobiz
 * actually answers on.
 *
 * Accessibility: every control has a real `<label>`, errors are tied to their
 * input with `aria-describedby` + `aria-invalid`, the summary is announced via
 * `role="alert"`, and focus moves to the first invalid field on failure.
 */
export function EnquiryForm({
  intro,
  submitLabel = "Send on WhatsApp",
  defaultService = "",
  serviceOptions = CONTACT_SERVICE_OPTIONS,
}: EnquiryFormProps) {
  const uid = useId();
  const [values, setValues] = useState<Record<Field, string>>({
    name: "",
    business: "",
    phone: "",
    email: "",
    service: defaultService,
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [sent, setSent] = useState(false);

  const fieldId = (field: Field) => `${uid}-${field}`;
  const errorId = (field: Field) => `${uid}-${field}-error`;

  function validate(): Partial<Record<Field, string>> {
    const next: Partial<Record<Field, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) next.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please choose what you need help with.";
    if (!values.message.trim()) next.message = "Please tell us briefly what you need.";
    return next;
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const found = validate();
    setErrors(found);

    const firstInvalid = (Object.keys(found) as Field[])[0];
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus();
      return;
    }

    const lines = [
      intro,
      "",
      `Name: ${values.name.trim()}`,
      values.business.trim() ? `Business: ${values.business.trim()}` : null,
      values.phone.trim() ? `Phone: ${values.phone.trim()}` : null,
      `Email: ${values.email.trim()}`,
      `Service: ${values.service}`,
      "",
      values.message.trim(),
    ].filter((line): line is string => line !== null);

    window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  const inputClass =
    "w-full min-h-11 rounded-xl border bg-surface-1 px-3.5 py-3 text-sm text-text-primary placeholder:text-text-faint focus-visible:outline-2 focus-visible:outline-brand-mid";

  function fieldProps(field: Field) {
    return {
      id: fieldId(field),
      name: field,
      value: values[field],
      "aria-invalid": errors[field] ? (true as const) : undefined,
      "aria-describedby": errors[field] ? errorId(field) : undefined,
      onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
      ) => setValues((v) => ({ ...v, [field]: e.target.value })),
      className: cn(inputClass, errors[field] ? "border-brand" : "border-line"),
    };
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("name")} className="mb-2 block text-xs font-semibold text-text-body">
          Your name
        </label>
          <input {...fieldProps("name")} type="text" autoComplete="name" required />
          {errors.name ? (
            <p id={errorId("name")} className="mt-1.5 text-xs text-brand-mid">
              {errors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor={fieldId("business")} className="mb-2 block text-xs font-semibold text-text-body">
          Business name
          <span className="ml-1.5 font-normal text-text-muted">(optional)</span>
        </label>
          <input {...fieldProps("business")} type="text" autoComplete="organization" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId("email")} className="mb-2 block text-xs font-semibold text-text-body">
          Email
        </label>
          <input {...fieldProps("email")} type="email" autoComplete="email" required />
          {errors.email ? (
            <p id={errorId("email")} className="mt-1.5 text-xs text-brand-mid">
              {errors.email}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor={fieldId("phone")} className="mb-2 block text-xs font-semibold text-text-body">
          Phone / WhatsApp
          <span className="ml-1.5 font-normal text-text-muted">(optional)</span>
        </label>
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" inputMode="tel" />
        </div>
      </div>

      <div>
        <label htmlFor={fieldId("service")} className="mb-2 block text-xs font-semibold text-text-body">
          What do you need help with?
        </label>
        <select {...fieldProps("service")} required>
          <option value="">Choose a service…</option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.service ? (
            <p id={errorId("service")} className="mt-1.5 text-xs text-brand-mid">
              {errors.service}
            </p>
          ) : null}
      </div>

      <div>
        <label htmlFor={fieldId("message")} className="mb-2 block text-xs font-semibold text-text-body">
          Tell us briefly what you need
        </label>
        <textarea {...fieldProps("message")} rows={4} className={cn(fieldProps("message").className, "resize-y")} required />
        {errors.message ? (
            <p id={errorId("message")} className="mt-1.5 text-xs text-brand-mid">
              {errors.message}
            </p>
          ) : null}
      </div>

      <Button type="submit" variant="whatsapp" size="lg" fullWidth>
        <WhatsAppIcon size={18} className="text-[color:var(--color-whatsapp)]" />
        {submitLabel}
      </Button>

      <p className="text-xs leading-relaxed text-text-muted">
        This opens WhatsApp with your details filled in — you send the message yourself, so
        nothing is submitted without you seeing it.
      </p>

      {sent ? (
        <p
          role="alert"
          className="rounded-lg border border-[rgba(37,211,102,0.3)] bg-[rgba(37,211,102,0.08)] px-4 py-3 text-sm text-text-body"
        >
          WhatsApp should have opened in a new tab with your message ready to send. If it
          didn&apos;t, check your pop-up blocker or message us directly.
        </p>
      ) : null}
    </form>
  );
}

export default EnquiryForm;
