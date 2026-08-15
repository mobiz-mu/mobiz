"use client";

import {
  ArrowLeft,
  Check,
  ChevronRight,
  Send,
  X,
} from "lucide-react";
import {
  FormEvent,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";

import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsappUrl } from "@/lib/site";
import { serviceDivisions } from "@/lib/navigation";

const SERVICE_OPTIONS = [
  "Website Design",
  "Digital Marketing",
  "SEO & Google",
  "Accounting & Tax",
  "Inventory",
  "Software & AI",
  "Company Registration",
  "Other",
] as const;

type ChatStep =
  | "welcome"
  | "name"
  | "services"
  | "ready";

/* -------------------------------------------------------------------------- */
/* PAGE CONTEXT                                                               */
/* -------------------------------------------------------------------------- */

function messageForPath(pathname: string): string {
  const division = serviceDivisions.find((division) =>
    pathname.startsWith(division.href),
  );

  if (division) {
    return `I was viewing your ${division.label} page.`;
  }

  if (pathname.startsWith("/monthly-packages")) {
    return "I was viewing your monthly packages.";
  }

  if (pathname.startsWith("/portfolio")) {
    return "I was viewing your portfolio.";
  }

  if (pathname.startsWith("/blog")) {
    return "I was reading your blog.";
  }

  if (pathname.endsWith("-mauritius")) {
    const topic = pathname
      .replace(/^\//, "")
      .replace(/-mauritius$/, "")
      .replace(/-/g, " ");

    return `I was viewing your ${topic} in Mauritius page.`;
  }

  return "I was browsing mobiz.mu.";
}

/* -------------------------------------------------------------------------- */
/* GREETING                                                                   */
/* -------------------------------------------------------------------------- */

function getMauritiusGreeting() {
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      timeZone: "Indian/Mauritius",
      hour: "2-digit",
      hourCycle: "h23",
    }).format(new Date()),
  );

  if (hour >= 5 && hour < 12) {
    return "Good morning";
  }

  if (hour >= 12 && hour < 18) {
    return "Good afternoon";
  }

  return "Good evening";
}

/* -------------------------------------------------------------------------- */
/* MESSAGE                                                                    */
/* -------------------------------------------------------------------------- */

function buildWhatsAppMessage({
  name,
  services,
  pathname,
}: {
  name: string;
  services: string[];
  pathname: string;
}) {
  const serviceList = services
    .map((service) => `• ${service}`)
    .join("\n");

  return `Hello Mobiz 👋

My name is ${name}.

I would like to know more about:
${serviceList}

${messageForPath(pathname)}

I would like to discuss my business requirements.`;
}

/* -------------------------------------------------------------------------- */
/* COMPONENT                                                                  */
/* -------------------------------------------------------------------------- */

export function WhatsAppFloat() {
  const pathname = usePathname() ?? "/";

  const [open, setOpen] =
    useState(false);

  const [step, setStep] =
    useState<ChatStep>("welcome");

  const [nameInput, setNameInput] =
    useState("");

  const [name, setName] =
    useState("");

  const [
    selectedServices,
    setSelectedServices,
  ] = useState<string[]>([]);

  const greeting = useMemo(
    () => getMauritiusGreeting(),
    [],
  );

  const context =
    messageForPath(pathname);

  const finalUrl = useMemo(() => {
    if (!name || selectedServices.length === 0) {
      return "#";
    }

    return whatsappUrl(
      buildWhatsAppMessage({
        name,
        services:
          selectedServices,
        pathname,
      }),
    );
  }, [
    name,
    pathname,
    selectedServices,
  ]);

  function submitName(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    const cleanName =
      nameInput.trim();

    if (!cleanName) {
      return;
    }

    setName(cleanName);

    // Immediate step switch.
    setStep("services");
  }

  function toggleService(
    service: string,
  ) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter(
            (item) =>
              item !== service,
          )
        : [...current, service],
    );
  }

  function reset() {
    setName("");
    setNameInput("");
    setSelectedServices([]);
    setStep("welcome");
  }

  return (
    <div
      className="fixed z-[90]"
      style={{
        right:
          "max(1rem, env(safe-area-inset-right))",
        bottom:
          "max(1rem, env(safe-area-inset-bottom))",
      }}
    >
      {/* ================================================================ */}
      {/* PHONE                                                            */}
      {/* ================================================================ */}

      {open && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-[356px] overflow-hidden rounded-[28px] border border-black/20 bg-[#111B21] shadow-[0_26px_80px_rgba(0,0,0,0.48)]">
          {/* ============================================================ */}
          {/* PHONE TOP BAR                                                */}
          {/* ============================================================ */}

          <div className="flex h-6 items-center justify-center bg-[#111B21]">
            <span className="h-1.5 w-16 rounded-full bg-white/12" />
          </div>

          {/* ============================================================ */}
          {/* WHATSAPP HEADER                                              */}
          {/* ============================================================ */}

          <header className="flex h-[62px] items-center gap-3 bg-[#075E54] px-3.5">
            <button
              type="button"
              aria-label="Close chat"
              onClick={() =>
                setOpen(false)
              }
              className="flex size-9 items-center justify-center rounded-full text-white/85 transition-colors duration-100 hover:bg-white/10"
            >
              <X className="size-4.5" />
            </button>

            <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white">
              <WhatsAppIcon
                size={22}
                className="text-[#25D366]"
              />
            </span>

            <div className="min-w-0 flex-1">
              <p className="truncate text-[14px] font-bold text-white">
                Mobiz.mu
              </p>

              <p className="mt-0.5 flex items-center gap-1.5 text-[10px] text-white/65">
                <span className="size-1.5 rounded-full bg-[#25D366]" />
                online
              </p>
            </div>
          </header>

          {/* ============================================================ */}
          {/* CHAT BACKGROUND                                              */}
          {/* ============================================================ */}

          <div className="whatsapp-chat-bg relative h-[430px] overflow-y-auto px-3.5 py-4">
            {/* date chip */}
            <div className="mb-4 flex justify-center">
              <span className="rounded-md bg-[#182229]/90 px-2.5 py-1 text-[9px] font-medium uppercase tracking-wide text-white/45 shadow-sm">
                Today
              </span>
            </div>

            {/* ========================================================== */}
            {/* WELCOME                                                    */}
            {/* ========================================================== */}

            {step === "welcome" && (
              <div className="wa-step">
                <div className="wa-message wa-message-in">
                  <p className="text-[13px] leading-[1.55]">
                    {greeting} 👋
                  </p>

                  <p className="mt-1 text-[13px] leading-[1.55]">
                    Welcome to{" "}
                    <strong>
                      Mobiz.mu
                    </strong>
                    .
                  </p>

                  <p className="mt-1.5 text-[12px] leading-[1.55] text-white/70">
                    We help Mauritian
                    businesses build,
                    market, manage and
                    grow.
                  </p>

                  <MessageTime />
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setStep("name")
                  }
                  className="mt-3 flex min-h-10 items-center gap-1.5 rounded-lg bg-[#00A884] px-4 text-[12px] font-bold text-white transition-transform duration-100 active:scale-[0.98]"
                >
                  Start conversation
                  <ChevronRight className="size-3.5" />
                </button>
              </div>
            )}

            {/* ========================================================== */}
            {/* NAME                                                       */}
            {/* ========================================================== */}

            {step === "name" && (
              <div className="wa-step">
                <div className="wa-message wa-message-in">
                  <p className="text-[13px] leading-[1.55]">
                    Before we continue,
                    what&apos;s your name?
                  </p>

                  <MessageTime />
                </div>

                <form
                  onSubmit={submitName}
                  className="mt-3"
                >
                  <div className="flex items-center gap-2 rounded-xl bg-[#202C33] p-2">
                    <input
                      autoFocus
                      value={nameInput}
                      onChange={(event) =>
                        setNameInput(
                          event.target.value,
                        )
                      }
                      maxLength={60}
                      autoComplete="name"
                      placeholder="Type your name"
                      className="h-9 min-w-0 flex-1 bg-transparent px-2 text-[13px] text-white outline-none placeholder:text-white/35"
                    />

                    <button
                      type="submit"
                      aria-label="Continue"
                      disabled={
                        !nameInput.trim()
                      }
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#00A884] text-white transition-transform duration-75 active:scale-95 disabled:opacity-35"
                    >
                      <Send className="size-4" />
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* ========================================================== */}
            {/* SERVICES                                                   */}
            {/* ========================================================== */}

            {step === "services" && (
              <div className="wa-step">
                <div className="ml-auto w-fit max-w-[82%] rounded-lg rounded-tr-none bg-[#005C4B] px-3 py-2 text-[13px] text-white shadow-sm">
                  My name is {name}.
                  <MessageTime sent />
                </div>

                <div className="wa-message wa-message-in mt-2">
                  <p className="font-semibold">
                    Hello {name} 👋
                  </p>

                  <p className="mt-1 text-[12px] leading-[1.5] text-white/70">
                    Which service can we
                    help you with?
                  </p>

                  <MessageTime />
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map(
                    (service) => {
                      const selected =
                        selectedServices.includes(
                          service,
                        );

                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() =>
                            toggleService(
                              service,
                            )
                          }
                          className={[
                            "inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3 text-[10px] font-semibold transition-colors duration-75",
                            selected
                              ? "border-[#00A884] bg-[#00A884] text-white"
                              : "border-white/12 bg-[#202C33] text-white/70",
                          ].join(
                            " ",
                          )}
                        >
                          {selected && (
                            <Check className="size-3" />
                          )}

                          {service}
                        </button>
                      );
                    },
                  )}
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() =>
                      setStep("name")
                    }
                    className="inline-flex min-h-9 items-center gap-1 text-[10px] font-semibold text-white/45"
                  >
                    <ArrowLeft className="size-3" />
                    Back
                  </button>

                  <button
                    type="button"
                    disabled={
                      selectedServices.length ===
                      0
                    }
                    onClick={() =>
                      setStep("ready")
                    }
                    className="inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-[#00A884] px-4 text-[11px] font-bold text-white transition-transform duration-75 active:scale-[0.98] disabled:opacity-35"
                  >
                    Continue
                    <ChevronRight className="size-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* ========================================================== */}
            {/* READY                                                      */}
            {/* ========================================================== */}

            {step === "ready" && (
              <div className="wa-step">
                <div className="wa-message wa-message-in">
                  <p className="font-semibold">
                    Perfect, {name} 👍
                  </p>

                  <p className="mt-1 text-[12px] leading-[1.5] text-white/70">
                    Your enquiry is ready
                    to send to our team.
                  </p>

                  <MessageTime />
                </div>

                <div className="mt-2 rounded-lg bg-[#202C33] px-3 py-3">
                  <p className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#00A884]">
                    Selected
                  </p>

                  <ul className="mt-2 space-y-1">
                    {selectedServices.map(
                      (service) => (
                        <li
                          key={service}
                          className="flex items-center gap-2 text-[11px] text-white/70"
                        >
                          <span className="size-1.5 rounded-full bg-[#00A884]" />
                          {service}
                        </li>
                      ),
                    )}
                  </ul>

                  <p className="mt-3 border-t border-white/[0.06] pt-2 text-[10px] leading-4 text-white/40">
                    {context}
                  </p>
                </div>

                <a
                  href={finalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 text-[12px] font-black text-[#062D1A] transition-transform duration-75 active:scale-[0.99]"
                >
                  <WhatsAppIcon
                    size={18}
                  />
                  Continue on WhatsApp
                  <Send className="size-3.5" />
                </a>

                <button
                  type="button"
                  onClick={reset}
                  className="mx-auto mt-3 block min-h-8 text-[9px] font-medium text-white/35 hover:text-white/60"
                >
                  Start again
                </button>
              </div>
            )}
          </div>

          {/* phone bottom */}
          <div className="flex h-6 items-center justify-center bg-[#111B21]">
            <span className="h-1 w-24 rounded-full bg-white/20" />
          </div>
        </div>
      )}

      {/* ================================================================ */}
      {/* LAUNCHER                                                         */}
      {/* ================================================================ */}

      <button
        type="button"
        onClick={() =>
          setOpen((value) => !value)
        }
        aria-expanded={open}
        aria-label={
          open
            ? "Close Mobiz chat"
            : "Chat with Mobiz on WhatsApp"
        }
        className="relative ml-auto flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.35)] transition-transform duration-100 hover:scale-105 active:scale-95"
      >
        {open ? (
          <X className="size-5" />
        ) : (
          <WhatsAppIcon
            size={27}
            className="text-white"
          />
        )}
      </button>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* TIME                                                                       */
/* -------------------------------------------------------------------------- */

function MessageTime({
  sent = false,
}: {
  sent?: boolean;
}) {
  return (
    <span className="mt-1 flex items-center justify-end gap-1 text-[8px] text-white/35">
      now

      {sent ? (
        <span className="text-[#53BDEB]">
          ✓✓
        </span>
      ) : null}
    </span>
  );
}

export default WhatsAppFloat;