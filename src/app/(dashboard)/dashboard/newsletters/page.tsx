import { supabaseServer } from "@/lib/supabase-server";

export default async function NewslettersPage() {
  const { data: subscribers, error } = await supabaseServer
    .from("newsletter_subscribers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return (
      <main className="rounded-[28px] border border-red-200 bg-red-50 p-6 text-red-700">
        Failed to load newsletter subscribers: {error.message}
      </main>
    );
  }

  return (
    <main className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.05)]">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
              Newsletter Subscribers
            </div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#071226]">
              Subscriber list and status overview
            </h2>
          </div>

          <a
            href="/api/newsletters/export"
            className="rounded-full bg-[#071226] px-5 py-3 text-sm font-semibold text-white"
          >
            Export CSV
          </a>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[760px] border-separate border-spacing-y-3">
            <thead>
              <tr className="text-left text-sm text-slate-500">
                <th className="px-4">Email</th>
                <th className="px-4">Name</th>
                <th className="px-4">Source</th>
                <th className="px-4">Status</th>
                <th className="px-4">Subscribed At</th>
              </tr>
            </thead>
            <tbody>
              {subscribers?.map((item) => (
                <tr key={item.id} className="bg-slate-50">
                  <td className="rounded-l-2xl px-4 py-4 font-medium text-[#071226]">
                    {item.email}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">
                    {item.full_name || "—"}
                  </td>
                  <td className="px-4 py-4 text-sm text-slate-700">{item.source}</td>
                  <td className="px-4 py-4 text-sm text-slate-700">{item.status}</td>
                  <td className="rounded-r-2xl px-4 py-4 text-sm text-slate-700">
                    {new Date(item.created_at).toLocaleString()}
                  </td>
                </tr>
              ))}

              {!subscribers?.length ? (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-sm text-slate-500">
                    No newsletter subscribers yet.
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}