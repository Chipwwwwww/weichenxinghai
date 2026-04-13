import { formatCurrency } from "@/lib/pricing";

export function OrderSummary({
  subtotal,
  shippingFee,
  total,
}: {
  subtotal: number;
  shippingFee: number;
  total: number;
}) {
  return (
    <div className="rounded-2xl border border-brand-teal/15 bg-[#fcfbf7] p-5 text-base text-brand-slate">
      <h3 className="text-xl font-semibold text-brand-deep">訂單摘要</h3>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between">
          <span>小計</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>配送費（宅配到府）</span>
          <span>{shippingFee === 0 ? "免運費" : formatCurrency(shippingFee)}</span>
        </div>
        <div className="mt-3 border-t border-brand-teal/20 pt-3 text-lg font-semibold text-brand-deep">
          <div className="flex items-center justify-between">
            <span>總計</span>
            <span>{formatCurrency(total)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
