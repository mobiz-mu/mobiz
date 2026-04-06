export type DocumentLineItem = {
  title: string;
  description?: string;
  quantity: number;
  unitPrice: number;
  lineTotal: number;
};

export type CompanyInfo = {
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  brn?: string;
  vatNumber?: string;
};

export type CustomerInfo = {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  billingAddress?: string;
};

export type QuotationDoc = {
  quotationNumber: string;
  issueDate: string;
  expiryDate?: string;
  customer: CustomerInfo;
  items: DocumentLineItem[];
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  totalAmount: number;
  notes?: string;
  terms?: string;
};

export type InvoiceDoc = {
  invoiceNumber: string;
  issueDate: string;
  dueDate?: string;
  customer: CustomerInfo;
  items: DocumentLineItem[];
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  totalAmount: number;
  amountPaid?: number;
  balanceDue?: number;
  notes?: string;
  paymentInstructions?: string;
};

export type ProposalDoc = {
  proposalNumber: string;
  issueDate: string;
  title: string;
  customer: CustomerInfo;
  executiveSummary?: string;
  scopeOfWork?: string;
  deliverables?: string;
  timeline?: string;
  pricing?: string;
  terms?: string;
};