import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "配送與付款",
  description: "配送方式以宅配到府為主；付款方式提供線上付款與貨到付款。",
};

export default function ShippingPaymentPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">配送與付款</h1>
        <p className="mt-4 text-lg leading-8 text-brand-slate">目前以宅配到府為主，提供線上付款與貨到付款兩種方式。第一次下單若想更安心，也可以直接選擇貨到付款，收到商品後再付款即可。</p>
      </section>

      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">配送方式</h2>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 配送方式：宅配到府為主。</li>
          <li>• 出貨資訊與禮盒包裝皆以「微塵星海」名義呈現。</li>
          <li>• 下單後可於客服時段聯繫客服確認配送細節。</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">付款方式</h2>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 線上付款：結帳最後一步可導向綠界付款頁。</li>
          <li>• 貨到付款：第一次購買想更安心可選擇此方式。</li>
          <li>• 請先於購物車確認商品明細與金額，再前往結帳。</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/cart" className="tap-target rounded-full bg-brand-deep px-6 py-3 text-base font-semibold text-white">前往購物車</Link>
          <Link href="/checkout" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">直接前往結帳</Link>
        </div>
      </section>
    </div>
  );
}
