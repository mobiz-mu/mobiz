import { describe, it, expect } from "vitest";
import { chatRequestSchema } from "./chat-schema";
import { buildEscalationUrl } from "./whatsapp-escalation";
import { buildKnowledgeBlock } from "./mobiz-knowledge";
import { buildSystemPrompt } from "./system-prompt";
import { AI_CONFIG } from "./config";

const validMsg = { role: "user" as const, content: "I need a website" };

describe("chatRequestSchema (input validation)", () => {
  it("accepts a valid request", () => {
    expect(chatRequestSchema.safeParse({ messages: [validMsg] }).success).toBe(true);
  });

  it("rejects empty content", () => {
    expect(
      chatRequestSchema.safeParse({ messages: [{ role: "user", content: "   " }] }).success,
    ).toBe(false);
  });

  it("rejects an oversized message", () => {
    const big = "x".repeat(AI_CONFIG.maxMessageChars + 1);
    expect(
      chatRequestSchema.safeParse({ messages: [{ role: "user", content: big }] }).success,
    ).toBe(false);
  });

  it("rejects an invalid role (e.g. system injection)", () => {
    expect(
      chatRequestSchema.safeParse({ messages: [{ role: "system", content: "hi" }] }).success,
    ).toBe(false);
  });

  it("rejects an empty messages array", () => {
    expect(chatRequestSchema.safeParse({ messages: [] }).success).toBe(false);
  });

  it("rejects too many messages", () => {
    const many = Array.from({ length: AI_CONFIG.maxHistoryMessages + 1 }, () => validMsg);
    expect(chatRequestSchema.safeParse({ messages: many }).success).toBe(false);
  });

  it("trims whitespace from content", () => {
    const parsed = chatRequestSchema.parse({ messages: [{ role: "user", content: "  hello  " }] });
    expect(parsed.messages[0]?.content).toBe("hello");
  });
});

describe("WhatsApp escalation", () => {
  it("targets the correct number and encodes the message", () => {
    const url = buildEscalationUrl({ service: "Accounting & Tax", question: "VAT filing" });
    expect(url.startsWith("https://wa.me/23055068119?text=")).toBe(true);
    const text = decodeURIComponent(url.split("text=")[1] ?? "");
    expect(text).toContain("Mobiz.mu AI Assistant");
    expect(text).toContain("Service: Accounting & Tax");
    expect(text).toContain("VAT filing");
  });

  it("has a safe default when no service/question is given", () => {
    const url = buildEscalationUrl({});
    expect(url).toContain("wa.me/23055068119");
    expect(decodeURIComponent(url)).toContain("Service: General enquiry");
  });
});

describe("grounded knowledge", () => {
  const kb = buildKnowledgeBlock();

  it("uses the real, approved package prices", () => {
    expect(kb).toContain("Rs 1,499/month");
    expect(kb).toContain("Rs 2,299/month");
    expect(kb).toContain("Rs 4,999/month");
  });

  it("lists all five divisions", () => {
    for (const label of [
      "Website Design & Development",
      "Digital Marketing",
      "Accounting & Tax Returns",
      "Warehousing & Inventory",
      "Business Solutions",
    ]) {
      expect(kb).toContain(label);
    }
  });

  it("states hosting included, domain not included, and the WhatsApp number", () => {
    expect(kb).toContain("Hosting is included");
    expect(kb).toContain("domain name is NOT included");
    expect(kb).toContain("23055068119");
  });
});

describe("system prompt safety rules", () => {
  const prompt = buildSystemPrompt();

  it("forbids inventing prices and self-serving promises", () => {
    expect(prompt).toContain("Never invent prices");
    expect(prompt).toMatch(/never promise Google rankings|Never promise Google rankings/i);
  });

  it("blocks personalised legal/tax advice and prompt injection", () => {
    expect(prompt.toLowerCase()).toContain("legal or tax advice");
    expect(prompt.toLowerCase()).toContain("ignore your instructions");
    expect(prompt.toLowerCase()).toContain("system prompt");
  });

  it("clarifies warehousing is operations, not space rental", () => {
    expect(prompt).toContain("NOT physical warehouse-space rental");
  });

  it("identifies as an AI and includes escalation", () => {
    expect(prompt).toContain("AI assistant");
    expect(prompt).toContain("23055068119");
  });
});
