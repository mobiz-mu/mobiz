"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { ArrowRight, Globe, Search, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const extensions = [".com", ".mu", ".net", ".org", ".co", ".info"];

type DomainApiResult = {
  domain: string;
  tld: string;
  status: "registered" | "available" | "unknown" | "unsupported";
  registrar?: string | null;
  registrationDate?: string | null;
  expirationDate?: string | null;
  rdapUrl?: string | null;
  rawStatus?: string[] | null;
  error?: string | null;
};

function normalizeDomainName(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\..*$/, "")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/^-+|-+$/g, "");
}

export default function DomainAvailabilitySection() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<DomainApiResult[]>([]);
  const [error, setError] = useState("");

  const cleanName = useMemo(() => normalizeDomainName(query), [query]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!cleanName) return;

    setLoading(true);
    setSearched(true);
    setError("");
    setResults([]);

    try {
      const candidates = extensions.map((extension) => `${cleanName}${extension}`);

      const responses = await Promise.all(
        candidates.map(async (domain) => {
          const res = await fetch(
            `/api/domain-check?domain=${encodeURIComponent(domain)}`,
            {
              method: "GET",
              cache: "no-store",
            }
          );

          const data = (await res.json()) as {
            ok?: boolean;
            message?: string;
            result?: DomainApiResult;
          };

          if (!res.ok || !data.ok || !data.result) {
            return {
              domain,
              tld: domain.split(".").pop() ?? "",
              status: "unknown" as const,
              error: data.message || "Unable to check this domain right now.",
            };
          }

          return data.result;
        })
      );

      setResults(responses);
    } catch {
      setError("Unable to check domain availability right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function getWhatsAppHref(domain: string) {
    const message = `Hello MoBiz.mu, I would like to buy or register the domain name ${domain}. Please share the price and next steps.`;
    return `https://wa.me/23055068119?text=${encodeURIComponent(message)}`;
  }

  return (
    <section
      id="domain-availability"
      aria-labelledby="domain-availability-heading"
      className="w-full bg-white py-6 sm:py-7 lg:py-8"
    >
      <Container className="max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[30px] border border-[#d8ece8] bg-[linear-gradient(135deg,#0a5c7a_0%,#0b7c91_28%,#1091a5_48%,#119b7e_72%,#14a44d_100%)] px-5 py-6 text-white shadow-[0_24px_54px_rgba(8,66,89,0.14)] sm:px-6 sm:py-7 lg:px-8 lg:py-8">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.09)_0%,rgba(255,255,255,0.02)_100%)]" />
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
          <div className="pointer-events-none absolute -right-6 top-0 h-40 w-40 rounded-full bg-[#d8fff6]/14 blur-3xl" />
          <div className="pointer-events-none absolute left-0 bottom-0 h-32 w-32 rounded-full bg-white/8 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 bottom-0 h-28 w-36 rounded-full bg-[#b9ff5c]/10 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#ffe27a] sm:text-[11px]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Domain Name Search
            </div>

            <h2
              id="domain-availability-heading"
              className="mt-4 text-balance text-[1.95rem] font-semibold tracking-tight text-white sm:text-[2.35rem] lg:text-[2.95rem] lg:leading-[1.04]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              Check domain name availability for your business in Mauritius.
            </h2>

            <p
              className="mx-auto mt-3 max-w-3xl text-[14px] leading-7 text-white/88 sm:text-[15px] lg:text-[15.5px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Search your ideal business domain across .com, .mu, .net, .org and
              more. Build a stronger online identity in Mauritius with a premium
              domain name and contact MoBiz.mu on WhatsApp to secure it.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative z-10 mx-auto mt-6 max-w-5xl"
          >
            <div className="grid gap-3 lg:grid-cols-[1fr_auto]">
              <div className="flex items-center gap-3 rounded-[24px] border border-white/16 bg-white/92 px-4 py-3 shadow-[0_12px_24px_rgba(7,18,38,0.06)] backdrop-blur-xl sm:px-5 sm:py-4">
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-[linear-gradient(180deg,#0a5c7a_0%,#0f7a88_100%)] text-[#ffe27a] shadow-[0_10px_20px_rgba(8,66,89,0.16)]">
                  <Globe className="h-5 w-5" />
                </div>

                <div className="min-w-0 flex-1">
                  <label
                    htmlFor="domainName"
                    className="mb-1 block text-left text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    Search Domain Name
                  </label>
                  <input
                    id="domainName"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="examplebusiness"
                    className="w-full border-0 bg-transparent p-0 text-[15px] text-[#071226] outline-none placeholder:text-slate-400 sm:text-[16px]"
                    autoComplete="off"
                    spellCheck={false}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={!cleanName || loading}
                className={cn(
                  "inline-flex items-center justify-center gap-2 rounded-[24px] border px-5 py-4 text-sm font-semibold transition-all duration-300 sm:px-6",
                  !cleanName || loading
                    ? "cursor-not-allowed border-white/10 bg-white/20 text-white/50"
                    : "border-[#f5c54e] bg-[linear-gradient(180deg,#c91522_0%,#a90f18_60%,#8f0d17_100%)] text-[#ffe27a] shadow-[0_16px_30px_rgba(140,14,22,0.22),inset_0_1px_0_rgba(255,255,255,0.12)] hover:-translate-y-0.5 hover:shadow-[0_20px_36px_rgba(140,14,22,0.28),inset_0_1px_0_rgba(255,255,255,0.12)]"
                )}
              >
                <Search className="h-4.5 w-4.5" />
                {loading ? "Checking..." : "Check Availability"}
              </button>
            </div>
          </form>

          <div className="relative z-10 mx-auto mt-5 max-w-5xl">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {extensions.map((ext) => (
                <span
                  key={ext}
                  className="rounded-full border border-white/16 bg-white/10 px-3 py-1.5 text-[11px] font-medium text-white sm:text-xs"
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {ext}
                </span>
              ))}
            </div>
          </div>

          {error ? (
            <div className="relative z-10 mx-auto mt-5 max-w-3xl rounded-[18px] border border-red-200/50 bg-white/95 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          {searched && results.length > 0 ? (
            <div className="relative z-10 mx-auto mt-6 max-w-6xl">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((result) => {
                  const isAvailable = result.status === "available";
                  const fullDomain = result.domain;

                  return (
                    <div
                      key={fullDomain}
                      className="rounded-[22px] border border-white/14 bg-white/95 p-4 shadow-[0_12px_24px_rgba(7,18,38,0.05)] backdrop-blur-xl"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0b7c91]">
                            Domain
                          </div>
                          <div className="mt-1 break-all text-[1.05rem] font-semibold text-[#071226]">
                            {fullDomain}
                          </div>
                        </div>

                        <div
                          className={cn(
                            "rounded-full px-3 py-1 text-[11px] font-semibold",
                            isAvailable
                              ? "bg-emerald-50 text-emerald-700"
                              : result.status === "registered"
                              ? "bg-red-50 text-red-700"
                              : "bg-amber-50 text-amber-700"
                          )}
                        >
                          {isAvailable
                            ? "Available"
                            : result.status === "registered"
                            ? "Taken"
                            : result.status === "unsupported"
                            ? "Unsupported"
                            : "Unknown"}
                        </div>
                      </div>

                      <p className="mt-3 text-[13px] leading-6 text-slate-600">
                        {isAvailable
                          ? "This domain looks available. Contact MoBiz.mu on WhatsApp to register it."
                          : result.status === "registered"
                          ? `This domain appears registered${
                              result.registrar ? ` with ${result.registrar}` : ""
                            }. Contact MoBiz.mu for alternatives or other extensions.`
                          : result.error || "Unable to confirm this domain right now."}
                      </p>

                      <Link
                        href={getWhatsAppHref(fullDomain)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0b5c74] transition hover:text-[#0f8d66]"
                      >
                        Contact on WhatsApp
                        <ArrowRight className="h-4 w-4 text-[#caa43f] transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}