export default function SettingsPage() {
  return (
    <main className="space-y-6">
      <section className="grid gap-6 xl:grid-cols-2">
        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Company Settings
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Brand and business information
          </h2>

          <div className="mt-6 grid gap-4">
            {[
              "Company name and legal details",
              "Default contact information",
              "Invoice footer and payment instructions",
              "Logo and brand asset preferences",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
            Platform Settings
          </div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
            Site and dashboard controls
          </h2>

          <div className="mt-6 grid gap-4">
            {[
              "Homepage hero default settings",
              "Lead notification preferences",
              "Blog defaults and SEO options",
              "Role-based access configuration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}