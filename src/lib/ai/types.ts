export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  role: ChatRole;
  content: string;
};

export type ChatApiSuccess = {
  ok: true;
  reply: string;
};

export type ChatApiError = {
  ok: false;
  /** Machine-readable category — safe to send to the client. */
  error:
    | "disabled"
    | "invalid"
    | "rate_limited"
    | "timeout"
    | "provider_error";
  /** Human-friendly fallback message for the UI. */
  message: string;
};

export type ChatApiResponse = ChatApiSuccess | ChatApiError;
