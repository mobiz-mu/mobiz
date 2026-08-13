import { z } from "zod";
import {
  CONTACT_METHOD_OPTIONS,
  PACKAGE_ADDONS,
  WEBSITE_STATUS_OPTIONS,
} from "./monthly-packages";

const knownAddOnIds = PACKAGE_ADDONS.map((a) => a.id);

/** Permissive enough for local and international formats, strict enough to catch typos. */
const PHONE_PATTERN = /^[+]?[0-9][0-9\s().-]{6,23}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

export const enquirySchema = z.object({
  packageId: z.enum(["starter", "business", "premium"], {
    message: "Choose one of the three monthly packages.",
  }),
  fullName: z
    .string()
    .trim()
    .min(2, "Enter your full name.")
    .max(80, "Please shorten your name to 80 characters or fewer."),
  businessName: z
    .string()
    .trim()
    .min(2, "Enter your business name.")
    .max(100, "Please shorten your business name to 100 characters or fewer."),
  phone: z
    .string()
    .trim()
    .min(7, "Enter a phone number we can reach you on.")
    .max(24, "That phone number looks too long.")
    .regex(PHONE_PATTERN, "Enter a valid phone number, for example +230 5123 4567.")
    .refine(
      (value) => value.replace(/\D/g, "").length >= 7,
      "Enter a valid phone number, for example +230 5123 4567.",
    ),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .max(120, "That email address looks too long.")
    .regex(EMAIL_PATTERN, "Enter a valid email address, for example name@business.com."),
  businessActivity: z
    .string()
    .trim()
    .min(3, "Tell us what your business does, for example restaurant or beauty salon.")
    .max(120, "Please keep this under 120 characters."),
  websiteStatus: z.enum(WEBSITE_STATUS_OPTIONS, {
    message: "Select your current website status.",
  }),
  contactMethod: z.enum(CONTACT_METHOD_OPTIONS, {
    message: "Choose how you would like us to contact you.",
  }),
  projectDetails: z
    .string()
    .trim()
    .min(20, "Add at least a sentence or two about your business and the pages you need.")
    .max(2000, "Please keep the project details under 2000 characters."),
  addOnIds: z
    .array(z.string())
    .max(knownAddOnIds.length)
    .refine(
      (ids) => ids.every((id) => knownAddOnIds.includes(id)),
      "One of the selected add-ons is not recognised.",
    ),
  agree: z
    .boolean()
    .refine(
      (value) => value === true,
      "Please confirm you understand the 12-month subscription and domain terms.",
    ),
  /** Honeypot — must stay empty. Real people never see this field. */
  company: z.string().max(0, "Leave this field empty.").optional(),
});

export type EnquiryFormValues = z.infer<typeof enquirySchema>;
