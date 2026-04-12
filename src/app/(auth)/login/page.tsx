"use client";

import { FormEvent, useState } from "react";
import { createSupabaseBrowserClient } from "@/lib/supabase-browser-auth";
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
    <main className="min-h-screen bg-[linear-gradient(180deg,#071226_0%,#0d1b3d_55%,#102654_100%)] px-4 py-8 sm:px-6">
      <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
        <div className="mb-6 text-center">
          <div className="text-base font-semibold tracking-[0.12em] text-[#f3d77a] sm:text-lg">
            Bienvenue Chez Mobiz.mu
          </div>
        </div>

        <div className="w-full max-w-[390px] rounded-[28px] border border-white/10 bg-white/8 p-5 shadow-[0_24px_70px_rgba(2,8,20,0.34)] backdrop-blur-xl sm:p-6">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/88"
              >
                Login
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 w-full rounded-2xl border border-white/12 bg-white/95 px-4 text-sm text-[#071226] outline-none transition focus:border-[#f3d77a] focus:ring-4 focus:ring-[#f3d77a]/10"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-white/88"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-11 w-full rounded-2xl border border-white/12 bg-white/95 px-4 text-sm text-[#071226] outline-none transition focus:border-[#f3d77a] focus:ring-4 focus:ring-[#f3d77a]/10"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-full bg-[linear-gradient(180deg,#163469_0%,#0d1b3d_100%)] px-5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(7,18,38,0.28)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "loading" ? "Signing in..." : "Sign In"}
            </button>

            {message ? (
              <p className="text-center text-sm text-red-300">{message}</p>
            ) : null}
          </form>
        </div>
      </div>
    </main>
  );
}