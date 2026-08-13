import { z } from "zod";
import { AI_CONFIG } from "./config";

/**
 * Server-side validation for the /api/ai-chat request body.
 * Rejects malformed input cleanly before anything reaches the provider.
 */
export const chatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z
    .string()
    .trim()
    .min(1, "Message cannot be empty.")
    .max(AI_CONFIG.maxMessageChars, "Message is too long."),
});

export const chatRequestSchema = z.object({
  messages: z
    .array(chatMessageSchema)
    .min(1, "At least one message is required.")
    .max(AI_CONFIG.maxHistoryMessages, "Too many messages in one request."),
});

export type ChatRequest = z.infer<typeof chatRequestSchema>;
