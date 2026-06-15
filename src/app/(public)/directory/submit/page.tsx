import type { Metadata } from "next";
import SubmitForm from "@/components/directory/SubmitForm";
import { DIRECTORY_TIERS } from "@/lib/directory";

const BASE_URL = "https://mobiz.mu";

export const metadata: Metadata = {
  title: "List Your Business Free | MoBiz Directory Mauritius",
  description:
    "Add your business to the MoBiz Mauritius directory for free. Upgrade to Premium, Featured or Verified for more visibility and trust.",
  alternates: { canonical: `${BASE_URL}/directory/submit` },
  openGraph: {
    title: "List Your Business Free | MoBiz Directory",
    description: "Add your Mauritius business to the MoBiz directory in minutes.",
    url: `${BASE_URL}/directory/submit`,
    siteName: "MoBiz.mu",
    type: "website",
  },
};

export default function SubmitBusinessPage() {
  return (
    <main className="bg-white text-[#071226]">
      <section className="relative overflow-hidden bg-[#071226] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(243,215,122,0.2),transparent_40%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h1 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            List your business on the MoBiz Directory
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/75">
            Reach customers searching for your services across Mauritius. Free to
            start, with upgrades when you&apos;re ready to grow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)] sm:p-8">
            <h2 className="text-xl font-bold">Business details</h2>
            <p className="mt-2 text-sm text-slate-600">
              Submitted listings are reviewed before going live.
            </p>
            <div className="mt-6">
              <SubmitForm />
            </div>
          </div>

          <aside>
            <h2 className="text-xl font-bold">Listing plans</h2>
            <div className="mt-4 space-y-3">
              {DIRECTORY_TIERS.map((tier) => (
                <div
                  key={tier.value}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#071226]">
                      {tier.label}
                    </span>
                    <span className="text-sm font-semibold text-[#a98221]">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-6 text-slate-500">
                    {tier.value === "free" &&
                      "Basic profile with name, category and location."}
                    {tier.value === "premium" &&
                      "Website link, WhatsApp button, photos and better placement."}
                    {tier.value === "featured" &&
                      "Featured placement on category and homepage highlights."}
                    {tier.value === "verified" &&
                      "Verified badge, priority placement and an enhanced profile."}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs leading-6 text-slate-500">
              Start free now — our team can help you upgrade once your listing is
              live.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
