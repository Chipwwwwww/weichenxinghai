export const DELIVERY_FEE = 120;

export function getDeliveryFee(subtotal: number) {
  if (subtotal <= 0) return 0;
  if (subtotal >= 3000) return 0;
  return DELIVERY_FEE;
}
