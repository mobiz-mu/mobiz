import Image from "next/image";
import { BANK_ACCOUNTS, DOCUMENT_BRAND } from "@/lib/document-config";

type LineItem = {
  id: string;
  description: string;
  unit_price: number;
  qty: number;
  amount: number;
};

type Party = {
  company_name?: string | null;
  contact_name?: string | null;
  billing_address?: string | null;
  phone?: string | null;
  email?: string | null;
  brn?: string | null;
  vat_number?: string | null;
};

type DocumentPrintViewProps = {
  kind: "quotation" | "invoice";
  number: string;
  issueDate: string | null;
  customer: Party | null;
  items: LineItem[];
  subTotal: number;
  discountPercent: number;
  discountAmount: number;
  totalAmount: number;
  notes?: string | null;
  terms?: string | null;
  bankAccountKey?: string | null;
  isPaid?: boolean;
};

function money(value: number) {
  return `Rs ${Number(value || 0).toLocaleString("en-MU", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}`;
}

export default function DocumentPrintView({
  kind,
  number,
  issueDate,
  customer,
  items,
  subTotal,
  discountPercent,
  discountAmount,
  totalAmount,
  notes,
  terms,
  bankAccountKey,
  isPaid = false,
}: DocumentPrintViewProps) {
  const bank =
    BANK_ACCOUNTS[(bankAccountKey as keyof typeof BANK_ACCOUNTS) || "personal_mcb"] ||
    BANK_ACCOUNTS.personal_mcb;

  return (
    <div className="mx-auto w-[210mm] min-h-[297mm] bg-[#f4f4f4] text-black print:min-h-0 print:w-full">
      <div className="grid grid-cols-4 h-[12px]">
        <div className="bg-red-600" />
        <div className="bg-blue-900" />
        <div className="bg-yellow-400" />
        <div className="bg-green-600" />
      </div>

      <div className="px-[20mm] py-[16mm]">
        <div className="flex items-start justify-between gap-8">
          <div>
            <h1 className="text-[34px] font-black uppercase tracking-tight">
              {kind === "quotation" ? "QUOTATION" : "INVOICE"}
            </h1>

            <div className="mt-5 text-[14px] leading-8">
              <div>
                {kind === "quotation" ? "Quotation Number" : "Invoice Number"}: {number}
              </div>
              <div>
                {kind === "quotation" ? "Quotation Date" : "Invoice Date"}:{" "}
                {issueDate ? new Date(issueDate).toLocaleDateString("en-GB") : "—"}
              </div>
            </div>
          </div>

          <div className="relative h-[110px] w-[110px] shrink-0">
            <Image src={DOCUMENT_BRAND.logoPath} alt="MoBiz.mu" fill className="object-contain" />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-10 text-[14px] leading-7">
          <div>
            <div className="font-bold text-[16px]">{DOCUMENT_BRAND.companyName}</div>
            <div>{DOCUMENT_BRAND.addressLine1}</div>
            <div>{DOCUMENT_BRAND.phone}</div>
            <div>{DOCUMENT_BRAND.email}</div>
            <div>{DOCUMENT_BRAND.preparedByPerson}</div>
          </div>

          <div>
            <div className="font-black text-[16px] uppercase">Bill To</div>
            <div>{customer?.company_name || customer?.contact_name || "—"}</div>
            <div>{customer?.billing_address || "—"}</div>
            <div>{customer?.contact_name ? `C/o ${customer.contact_name}` : "—"}</div>
            <div>{customer?.phone || "—"}</div>
            {customer?.brn ? <div>BRN: {customer.brn}</div> : null}
            {customer?.vat_number ? <div>VAT: {customer.vat_number}</div> : null}
          </div>
        </div>

        <div className="mt-6 border border-black">
          <table className="w-full border-collapse text-[13px]">
            <thead>
              <tr className="border-b border-black">
                <th className="border-r border-black px-3 py-3 text-center font-bold">Description</th>
                <th className="border-r border-black px-3 py-3 text-center font-bold w-[120px]">Unit Price</th>
                <th className="border-r border-black px-3 py-3 text-center font-bold w-[70px]">Qty</th>
                <th className="px-3 py-3 text-center font-bold w-[140px]">Amount</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-black last:border-b-0">
                  <td className="border-r border-black px-4 py-4 align-top whitespace-pre-wrap">
                    {item.description}
                  </td>
                  <td className="border-r border-black px-3 py-4 text-center align-top">
                    {item.unit_price ? Number(item.unit_price).toLocaleString("en-MU") : "-"}
                  </td>
                  <td className="border-r border-black px-3 py-4 text-center align-top">
                    {item.qty ? Number(item.qty).toLocaleString("en-MU") : "-"}
                  </td>
                  <td className="px-3 py-4 text-center align-top">
                    {item.amount ? Number(item.amount).toLocaleString("en-MU") : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid grid-cols-[1.2fr_1fr] gap-8">
          <div>
            <div className="text-[14px] font-black uppercase">Notes / Terms:</div>
            <ul className="mt-3 list-disc pl-5 text-[13px] leading-8">
              {(terms || "In case of cancellation, no refund will be applicable.\nFull payment required.")
                .split("\n")
                .filter(Boolean)
                .map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
            </ul>

            <p className="mt-6 max-w-[340px] text-[12px] leading-6 text-blue-900">
              {DOCUMENT_BRAND.reviewText}
            </p>

            <div className="mt-4 flex items-center gap-3">
              <div className="relative h-[76px] w-[76px]">
                <Image src={DOCUMENT_BRAND.googleReviewQrPath} alt="Google Review QR" fill className="object-contain" />
              </div>
              <div className="relative h-[46px] w-[120px]">
                <Image src={DOCUMENT_BRAND.googleReviewGooglePath} alt="Google Reviews" fill className="object-contain" />
              </div>
            </div>

            <div className="mt-6">
              <div className="text-[14px] font-black uppercase">Payment Method</div>
              <div className="mt-3 text-[13px] leading-8">
                <div>Bank: {bank.bankName}</div>
                <div>Account Name: {bank.accountName}</div>
                <div>Account Number: {bank.accountNumber}</div>
              </div>
            </div>
          </div>

          <div>
            <div className="space-y-4">
              <div className="grid grid-cols-[1fr_auto] border border-black">
                <div className="border-r border-black px-4 py-4 text-center text-[15px] font-black uppercase">Sub Total</div>
                <div className="px-5 py-4 text-[15px] font-black">{money(subTotal)}</div>
              </div>

              <div className="grid grid-cols-[1fr_auto] border border-black">
                <div className="border-r border-black px-4 py-4 text-center text-[15px] font-black uppercase">
                  Discount {discountPercent ? `${discountPercent}%` : ""}
                </div>
                <div className="px-5 py-4 text-[15px] font-black">{money(discountAmount)}</div>
              </div>

              <div className="grid grid-cols-[1fr_auto] border border-black">
                <div className="border-r border-black px-4 py-4 text-center text-[15px] font-black uppercase">Total</div>
                <div className="px-5 py-4 text-[18px] font-black">{money(totalAmount)}</div>
              </div>
            </div>

            <div className="relative mt-8 flex items-end justify-between">
              <div>
                <div className="relative h-[84px] w-[180px]">
                  <Image src={DOCUMENT_BRAND.signaturePath} alt="Signature" fill className="object-contain" />
                </div>
                <div className="mt-1 text-[13px] font-black uppercase">Prepared By</div>
                <div className="mt-2 text-[13px]">{DOCUMENT_BRAND.preparedBy}</div>
              </div>

              <div className="relative h-[90px] w-[90px]">
                <Image src={DOCUMENT_BRAND.stampPath} alt="Stamp" fill className="object-contain" />
              </div>

              {isPaid ? (
                <div className="absolute right-[30px] top-[-20px] h-[120px] w-[120px] opacity-90">
                  <Image src={DOCUMENT_BRAND.paidStampPath} alt="Paid Stamp" fill className="object-contain" />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 h-[12px]">
        <div className="bg-red-600" />
        <div className="bg-blue-900" />
        <div className="bg-yellow-400" />
        <div className="bg-green-600" />
      </div>
    </div>
  );
}