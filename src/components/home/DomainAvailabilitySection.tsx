"use client";

import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { ArrowRight, Globe, Search } from "lucide-react";
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
      className="w-full bg-white py-3 sm:py-4 lg:py-5"
    >
      <Container className="max-w-[1400px]">
        <div className="relative overflow-hidden rounded-[28px] border border-[#d8ece8] px-4 py-4 text-white shadow-[0_20px_48px_rgba(8,66,89,0.12)] sm:px-5 sm:py-5 lg:px-6 lg:py-6">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,#083b67_0%,#0c5f88_22%,#1187a1_44%,#13a37f_68%,#1ba957_100%)]" />
          <div className="absolute inset-0 opacity-70 animate-[domainWave_10s_ease-in-out_infinite] bg-[radial-gradient(120%_70%_at_0%_50%,rgba(255,255,255,0.12),transparent_45%),radial-gradient(90%_60%_at_100%_50%,rgba(255,255,255,0.10),transparent_42%),radial-gradient(80%_50%_at_50%_100%,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute inset-0 opacity-50 animate-[domainWaveReverse_14s_ease-in-out_infinite] bg-[radial-gradient(110%_65%_at_20%_30%,rgba(255,255,255,0.10),transparent_42%),radial-gradient(100%_55%_at_80%_70%,rgba(255,255,255,0.08),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.02)_100%)]" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <h2
              id="domain-availability-heading"
              className="text-balance text-[1.55rem] font-semibold tracking-tight text-white sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.05]"
              style={{ fontFamily: '"Quicksand", "Poppins", sans-serif' }}
            >
              Check domain name availability for your business in Mauritius.
            </h2>

            <p
              className="mx-auto mt-2 max-w-3xl text-[13px] leading-6 text-white/90 sm:text-[14px] lg:text-[15px]"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              Search your business name and secure a stronger online identity with MoBiz.mu.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="relative z-10 mx-auto mt-4 max-w-5xl"
          >
            <div className="grid gap-2.5 lg:grid-cols-[1fr_auto]">
              <div className="flex items-center gap-3 rounded-[20px] border border-white/15 bg-white/94 px-4 py-3 shadow-[0_10px_24px_rgba(7,18,38,0.06)] backdrop-blur-xl sm:px-4 sm:py-3.5">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] bg-[linear-gradient(180deg,#0a5c7a_0%,#0f7a88_100%)] text-[#ffe27a] shadow-[0_10px_20px_rgba(8,66,89,0.16)]">
                  <Globe className="h-4.5 w-4.5" />
                </div>

                <div className="min-w-0 flex-1">
                  <label
                    htmlFor="domainName"
                    className="mb-1 block text-left text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    Search Domain Name
                  </label>
                  <input
                    id="domainName"
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="name.com"
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
                  "inline-flex items-center justify-center gap-2 rounded-[20px] border px-5 py-3.5 text-sm font-semibold transition-all duration-300 sm:px-6",
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

          {error ? (
            <div className="relative z-10 mx-auto mt-4 max-w-3xl rounded-[16px] border border-red-200/50 bg-white/95 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          ) : null}

          {searched && results.length > 0 ? (
            <div className="relative z-10 mx-auto mt-4 max-w-6xl">
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {results.map((result) => {
                  const isAvailable = result.status === "available";
                  const fullDomain = result.domain;

                  return (
                    <div
                      key={fullDomain}
                      className="rounded-[20px] border border-white/14 bg-white/95 p-4 shadow-[0_12px_24px_rgba(7,18,38,0.05)] backdrop-blur-xl"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0b7c91]">
                            Domain
                          </div>
                          <div className="mt-1 break-all text-[1.02rem] font-semibold text-[#071226]">
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

        <style jsx>{`
          @keyframes domainWave {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
              transform: translate3d(1.5%, -1.5%, 0) scale(1.03);
            }
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
          }

          @keyframes domainWaveReverse {
            0% {
              transform: translate3d(0, 0, 0) scale(1);
            }
            50% {
              transform: translate3d(-1.5%, 1.5%, 0) scale(1.04);
            }
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }
          }
        `}</style>
      </Container>
    </section>
  );
}