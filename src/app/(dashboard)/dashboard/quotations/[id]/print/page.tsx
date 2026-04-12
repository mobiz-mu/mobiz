import { supabaseServer } from "@/lib/supabase-server";
import { notFound } from "next/navigation";
import DocumentPrintView from "@/components/documents/DocumentPrintView";

type Props = {
  params: Promise<{ id: string }>;
};

export default async function QuotationPrintPage({ params }: Props) {
  const { id } = await params;

  const { data: quotation } = await supabaseServer
    .from("quotations")
    .select("*, customers(*)")
    .eq("id", id)
    .single();

  if (!quotation) notFound();

  const { data: items } = await supabaseServer
    .from("quotation_items")
    .select("*")
    .eq("quotation_id", id)
    .order("sort_order", { ascending: true });

  return (
    <DocumentPrintView
      kind="quotation"
      number={quotation.quotation_number}
      issueDate={quotation.issue_date}
      customer={quotation.customers}
      items={(items || []).map((item) => ({
        id: item.id,
        description: item.description,
        unit_price: Number(item.unit_price || 0),
        qty: Number(item.qty || 0),
        amount: Number(item.amount || 0),
      }))}
      subTotal={Number(quotation.sub_total || 0)}
      discountPercent={Number(quotation.discount_percent || 0)}
      discountAmount={Number(quotation.discount_amount || 0)}
      totalAmount={Number(quotation.total_amount || 0)}
      notes={quotation.notes}
      terms={quotation.terms}
      bankAccountKey={quotation.bank_account_key}
    />
  );
}