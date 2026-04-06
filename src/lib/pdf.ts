import type {
  CompanyInfo,
  InvoiceDoc,
  ProposalDoc,
  QuotationDoc,
} from "@/types/documents";

const defaultCompany: CompanyInfo = {
  name: "MoBiz.mu",
  email: "support@mobiz.mu",
  phone: "+230 5506 8119",
  address: "Mauritius",
  brn: "",
  vatNumber: "",
};

function money(value: number) {
  return `Rs ${Number(value || 0).toLocaleString("en-MU", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

function safe(value?: string | null) {
  return value || "";
}

function baseStyles() {
  return `
    <style>
      * { box-sizing: border-box; }

      html, body {
        margin: 0;
        padding: 0;
        background: #ffffff;
        color: #0f172a;
        font-family: Arial, Helvetica, sans-serif;
      }

      body {
        font-size: 13px;
        line-height: 1.6;
      }

      .page {
        width: 210mm;
        min-height: 297mm;
        margin: 0 auto;
        padding: 14mm 12mm 14mm 12mm;
        background: #ffffff;
      }

      .top-accent {
        height: 8px;
        width: 100%;
        border-radius: 999px;
        background: linear-gradient(90deg, #071226 0%, #0d1b3d 55%, #d4af37 100%);
        margin-bottom: 16px;
      }

      .header {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        gap: 18px;
        align-items: start;
        padding-bottom: 14px;
        border-bottom: 1px solid #e2e8f0;
      }

      .brand h1 {
        margin: 0;
        font-size: 28px;
        line-height: 1;
        letter-spacing: -0.03em;
        color: #071226;
      }

      .brand .sub {
        margin-top: 6px;
        color: #8b6a18;
        font-size: 11px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        font-weight: 700;
      }

      .muted {
        color: #64748b;
        font-size: 12px;
        line-height: 1.7;
      }

      .doc-box {
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 14px 16px;
        background:
          linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(255,255,255,1) 100%);
      }

      .doc-type {
        font-size: 12px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.18em;
        color: #8b6a18;
      }

      .doc-number {
        margin-top: 6px;
        font-size: 24px;
        font-weight: 700;
        color: #071226;
        line-height: 1.1;
      }

      .doc-meta {
        margin-top: 8px;
        color: #64748b;
        font-size: 12px;
        line-height: 1.7;
      }

      .section-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 18px;
      }

      .card {
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 14px 16px;
        background: #fff;
      }

      .section-title {
        margin: 0 0 8px 0;
        font-size: 12px;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #8b6a18;
        font-weight: 700;
      }

      .card strong {
        color: #071226;
      }

      .main-title {
        margin: 22px 0 8px;
        font-size: 18px;
        font-weight: 700;
        color: #071226;
      }

      table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 18px;
        overflow: hidden;
        border-radius: 16px;
      }

      thead th {
        text-align: left;
        font-size: 12px;
        text-transform: uppercase;
        letter-spacing: 0.12em;
        color: #475569;
        background: #f8fafc;
        border-bottom: 1px solid #e2e8f0;
        padding: 12px 10px;
      }

      tbody td {
        border-bottom: 1px solid #e2e8f0;
        padding: 12px 10px;
        vertical-align: top;
        font-size: 13px;
      }

      tbody tr:last-child td {
        border-bottom: 1px solid #e2e8f0;
      }

      .item-title {
        font-weight: 700;
        color: #071226;
      }

      .item-desc {
        margin-top: 3px;
        color: #64748b;
        font-size: 12px;
        line-height: 1.6;
      }

      .num {
        text-align: right;
        white-space: nowrap;
      }

      .totals {
        width: 340px;
        margin-left: auto;
        margin-top: 20px;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        overflow: hidden;
        background: #fff;
      }

      .totals-row {
        display: flex;
        justify-content: space-between;
        gap: 16px;
        padding: 11px 14px;
        border-bottom: 1px solid #e2e8f0;
        font-size: 13px;
      }

      .totals-row:last-child {
        border-bottom: none;
      }

      .totals-row.total {
        background: linear-gradient(180deg, #071226 0%, #0d1b3d 100%);
        color: white;
        font-weight: 700;
        font-size: 15px;
      }

      .notes-wrap {
        margin-top: 22px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 14px;
      }

      .prose {
        white-space: pre-wrap;
        color: #334155;
        font-size: 13px;
        line-height: 1.8;
      }

      .footer-bar {
        margin-top: 28px;
        padding-top: 14px;
        border-top: 1px solid #e2e8f0;
        display: flex;
        justify-content: space-between;
        gap: 24px;
        align-items: flex-end;
      }

      .signature-area {
        flex: 1;
      }

      .signature-line {
        margin-top: 36px;
        height: 2px;
        width: 220px;
        background: #b91c1c;
      }

      .signature-label {
        margin-top: 8px;
        font-size: 12px;
        color: #64748b;
      }

      .stamp-box {
        width: 130px;
        height: 80px;
        border: 1px dashed rgba(15,23,42,0.25);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #64748b;
        font-size: 12px;
      }

      .proposal-block {
        margin-top: 18px;
        border: 1px solid #e2e8f0;
        border-radius: 18px;
        padding: 16px;
        background: #fff;
      }

      .proposal-block .heading {
        margin: 0 0 8px;
        font-size: 15px;
        font-weight: 700;
        color: #071226;
      }
    </style>
  `;
}

function companyBlock(company: CompanyInfo) {
  return `
    <div class="brand">
      <div class="sub">Mauritius Business Platform</div>
      <h1>${safe(company.name)}</h1>
      <div class="muted" style="margin-top:10px;">
        ${safe(company.address)}<br/>
        ${safe(company.email)}<br/>
        ${safe(company.phone)}
        ${company.brn ? `<br/>BRN: ${company.brn}` : ""}
        ${company.vatNumber ? `<br/>VAT: ${company.vatNumber}` : ""}
      </div>
    </div>
  `;
}

function customerBlock(customer: {
  companyName?: string;
  contactName?: string;
  email?: string;
  phone?: string;
  billingAddress?: string;
}) {
  return `
    <div class="card">
      <div class="section-title">Bill To</div>
      <div class="prose">
        <strong>${safe(customer.companyName)}</strong>
        ${customer.contactName ? `\n${customer.contactName}` : ""}
        ${customer.email ? `\n${customer.email}` : ""}
        ${customer.phone ? `\n${customer.phone}` : ""}
        ${customer.billingAddress ? `\n${customer.billingAddress}` : ""}
      </div>
    </div>
  `;
}

export function buildQuotationHtml(
  doc: QuotationDoc,
  company: CompanyInfo = defaultCompany
) {
  const items = doc.items
    .map(
      (item) => `
        <tr>
          <td>
            <div class="item-title">${safe(item.title)}</div>
            <div class="item-desc">${safe(item.description)}</div>
          </td>
          <td class="num">${item.quantity}</td>
          <td class="num">${money(item.unitPrice)}</td>
          <td class="num">${money(item.lineTotal)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <html>
      <head>${baseStyles()}</head>
      <body>
        <div class="page">
          <div class="top-accent"></div>

          <div class="header">
            ${companyBlock(company)}
            <div class="doc-box">
              <div class="doc-type">Quotation</div>
              <div class="doc-number">${safe(doc.quotationNumber)}</div>
              <div class="doc-meta">
                Issue Date: ${safe(doc.issueDate)}<br/>
                Expiry Date: ${safe(doc.expiryDate) || "—"}
              </div>
            </div>
          </div>

          <div class="section-grid">
            ${customerBlock(doc.customer)}
            <div class="card">
              <div class="section-title">Summary</div>
              <div class="muted">
                Premium quotation prepared by ${safe(company.name)}.<br/>
                Please review the pricing, scope, and terms below.
              </div>
            </div>
          </div>

          <div class="main-title">Quotation Items</div>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th class="num">Qty</th>
                <th class="num">Unit Price</th>
                <th class="num">Total</th>
              </tr>
            </thead>
            <tbody>${items}</tbody>
          </table>

          <div class="totals">
            <div class="totals-row"><span>Subtotal</span><span>${money(doc.subtotal)}</span></div>
            <div class="totals-row"><span>Discount</span><span>${money(doc.discountAmount)}</span></div>
            <div class="totals-row"><span>Tax</span><span>${money(doc.taxAmount)}</span></div>
            <div class="totals-row total"><span>Total</span><span>${money(doc.totalAmount)}</span></div>
          </div>

          <div class="notes-wrap">
            ${
              doc.notes
                ? `<div class="card"><div class="section-title">Notes</div><div class="prose">${safe(doc.notes)}</div></div>`
                : ""
            }
            ${
              doc.terms
                ? `<div class="card"><div class="section-title">Terms</div><div class="prose">${safe(doc.terms)}</div></div>`
                : ""
            }
          </div>

          <div class="footer-bar">
            <div class="signature-area">
              <div class="signature-line"></div>
              <div class="signature-label">Authorized Signature</div>
            </div>
            <div class="stamp-box">Company Stamp</div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function buildInvoiceHtml(
  doc: InvoiceDoc,
  company: CompanyInfo = defaultCompany
) {
  const items = doc.items
    .map(
      (item) => `
        <tr>
          <td>
            <div class="item-title">${safe(item.title)}</div>
            <div class="item-desc">${safe(item.description)}</div>
          </td>
          <td class="num">${item.quantity}</td>
          <td class="num">${money(item.unitPrice)}</td>
          <td class="num">${money(item.lineTotal)}</td>
        </tr>
      `
    )
    .join("");

  return `
    <html>
      <head>${baseStyles()}</head>
      <body>
        <div class="page">
          <div class="top-accent"></div>

          <div class="header">
            ${companyBlock(company)}
            <div class="doc-box">
              <div class="doc-type">Invoice</div>
              <div class="doc-number">${safe(doc.invoiceNumber)}</div>
              <div class="doc-meta">
                Issue Date: ${safe(doc.issueDate)}<br/>
                Due Date: ${safe(doc.dueDate) || "—"}
              </div>
            </div>
          </div>

          <div class="section-grid">
            ${customerBlock(doc.customer)}
            <div class="card">
              <div class="section-title">Summary</div>
              <div class="muted">
                Premium invoice prepared by ${safe(company.name)}.<br/>
                Kindly settle according to the payment instructions below.
              </div>
            </div>
          </div>

          <div class="main-title">Invoice Items</div>

          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th class="num">Qty</th>
                <th class="num">Unit Price</th>
                <th class="num">Total</th>
              </tr>
            </thead>
            <tbody>${items}</tbody>
          </table>

          <div class="totals">
            <div class="totals-row"><span>Subtotal</span><span>${money(doc.subtotal)}</span></div>
            <div class="totals-row"><span>Discount</span><span>${money(doc.discountAmount)}</span></div>
            <div class="totals-row"><span>Tax</span><span>${money(doc.taxAmount)}</span></div>
            <div class="totals-row"><span>Total Amount</span><span>${money(doc.totalAmount)}</span></div>
            <div class="totals-row"><span>Amount Paid</span><span>${money(doc.amountPaid || 0)}</span></div>
            <div class="totals-row total"><span>Balance Due</span><span>${money(doc.balanceDue || 0)}</span></div>
          </div>

          <div class="notes-wrap">
            ${
              doc.notes
                ? `<div class="card"><div class="section-title">Notes</div><div class="prose">${safe(doc.notes)}</div></div>`
                : ""
            }
            ${
              doc.paymentInstructions
                ? `<div class="card"><div class="section-title">Payment Instructions</div><div class="prose">${safe(doc.paymentInstructions)}</div></div>`
                : ""
            }
          </div>

          <div class="footer-bar">
            <div class="signature-area">
              <div class="signature-line"></div>
              <div class="signature-label">Authorized Signature</div>
            </div>
            <div class="stamp-box">Company Stamp</div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function buildProposalHtml(
  doc: ProposalDoc,
  company: CompanyInfo = defaultCompany
) {
  return `
    <html>
      <head>${baseStyles()}</head>
      <body>
        <div class="page">
          <div class="top-accent"></div>

          <div class="header">
            ${companyBlock(company)}
            <div class="doc-box">
              <div class="doc-type">Proposal</div>
              <div class="doc-number">${safe(doc.proposalNumber)}</div>
              <div class="doc-meta">
                Issue Date: ${safe(doc.issueDate)}
              </div>
            </div>
          </div>

          <div class="section-grid">
            ${customerBlock(doc.customer)}
            <div class="card">
              <div class="section-title">Proposal Title</div>
              <div style="font-size:16px;font-weight:700;color:#071226;">
                ${safe(doc.title)}
              </div>
            </div>
          </div>

          ${
            doc.executiveSummary
              ? `<div class="proposal-block"><div class="heading">Executive Summary</div><div class="prose">${safe(doc.executiveSummary)}</div></div>`
              : ""
          }
          ${
            doc.scopeOfWork
              ? `<div class="proposal-block"><div class="heading">Scope of Work</div><div class="prose">${safe(doc.scopeOfWork)}</div></div>`
              : ""
          }
          ${
            doc.deliverables
              ? `<div class="proposal-block"><div class="heading">Deliverables</div><div class="prose">${safe(doc.deliverables)}</div></div>`
              : ""
          }
          ${
            doc.timeline
              ? `<div class="proposal-block"><div class="heading">Timeline</div><div class="prose">${safe(doc.timeline)}</div></div>`
              : ""
          }
          ${
            doc.pricing
              ? `<div class="proposal-block"><div class="heading">Pricing</div><div class="prose">${safe(doc.pricing)}</div></div>`
              : ""
          }
          ${
            doc.terms
              ? `<div class="proposal-block"><div class="heading">Terms</div><div class="prose">${safe(doc.terms)}</div></div>`
              : ""
          }

          <div class="footer-bar">
            <div class="signature-area">
              <div class="signature-line"></div>
              <div class="signature-label">Authorized Signature</div>
            </div>
            <div class="stamp-box">Company Stamp</div>
          </div>
        </div>
      </body>
    </html>
  `;
}