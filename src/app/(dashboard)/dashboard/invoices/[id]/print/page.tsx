import { supabaseServer } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import DocumentPrintView from "@/components/documents/DocumentPrintView";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function InvoicePrintPage({ params }: Props) {
  const { id } = await params;

  const { data: invoice } = await supabaseServer
    .from("invoices")
    .select("*, customers(*)")
    .eq("id", id)
    .single();

  if (!invoice) notFound();

  const { data: items } = await supabaseServer
    .from("invoice_items")
    .select("*")
    .eq("invoice_id", id)
    .order("sort_order", { ascending: true });

  return (
    <DocumentPrintView
      kind="invoice"
      number={invoice.invoice_number}
      issueDate={invoice.issue_date}
      customer={invoice.customers}
      items={(items || []).map((item) => ({
        id: item.id,
        description: item.description,
        unit_price: Number(item.unit_price || 0),
        qty: Number(item.qty || 0),
        amount: Number(item.amount || 0),
      }))}
      subTotal={Number(invoice.sub_total || 0)}
      discountPercent={Number(invoice.discount_percent || 0)}
      discountAmount={Number(invoice.discount_amount || 0)}
      totalAmount={Number(invoice.total_amount || 0)}
      notes={invoice.notes}
      terms={invoice.terms}
      bankAccountKey={invoice.bank_account_key}
      isPaid={invoice.status === "paid"}
    />
  );
}