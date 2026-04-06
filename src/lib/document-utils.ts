export type EditableLineItem = {
  id?: string;
  title: string;
  description?: string;
  quantity: number;
  unit_price: number;
  line_total: number;
  sort_order: number;
};

export function calculateLineTotal(quantity: number, unitPrice: number) {
  return Number(quantity || 0) * Number(unitPrice || 0);
}

export function calculateSubtotal(items: EditableLineItem[]) {
  return items.reduce((sum, item) => sum + calculateLineTotal(item.quantity, item.unit_price), 0);
}

export function calculateGrandTotal(
  subtotal: number,
  discountAmount: number,
  taxAmount: number
) {
  return subtotal - Number(discountAmount || 0) + Number(taxAmount || 0);
}

export function calculateBalance(totalAmount: number, amountPaid: number) {
  return totalAmount - Number(amountPaid || 0);
}