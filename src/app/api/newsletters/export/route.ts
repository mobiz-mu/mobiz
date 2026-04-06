import { supabaseServer } from "@/lib/supabase-server";

export async function GET() {
  const { data, error } = await supabaseServer
    .from("newsletter_subscribers")
    .select("email, full_name, source, status, created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return new Response("Failed to export subscribers.", { status: 500 });
  }

  const rows = [
    ["email", "full_name", "source", "status", "created_at"],
    ...(data || []).map((row) => [
      row.email || "",
      row.full_name || "",
      row.source || "",
      row.status || "",
      row.created_at || "",
    ]),
  ];

  const csv = rows
    .map((row) =>
      row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(",")
    )
    .join("\n");

  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="newsletter-subscribers.csv"',
    },
  });
}