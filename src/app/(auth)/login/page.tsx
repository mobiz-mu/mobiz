"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser-auth";
import Container from "@/components/ui/Container";
import PremiumButton from "@/components/ui/PremiumButton";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const supabase = createSupabaseBrowserClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setStatus("error");
      setMessage(error.message);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f8fafc_0%,#f8f6f1_100%)] py-16 sm:py-24">
      <Container className="max-w-xl">
        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="inline-flex rounded-full border border-[rgba(212,175,55,0.24)] bg-[#fffdf7] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#8b6a18]">
            Dashboard Login
          </div>

          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#071226] sm:text-4xl">
            Sign in to MoBiz Admin
          </h1>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Access your analytics, leads, banners, blog content, quotations, invoices, and proposals.
          </p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                placeholder="admin@mobiz.mu"
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-12 w-full rounded-2xl border border-slate-200 bg-white px-4 text-sm outline-none transition focus:border-[#d4af37]"
                placeholder="••••••••"
              />
            </div>

            <PremiumButton>
              {status === "loading" ? "Signing in..." : "Sign In"}
            </PremiumButton>

            {message ? <p className="text-sm text-red-600">{message}</p> : null}
          </form>
        </div>
      </Container>
    </main>
  );
}