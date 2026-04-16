"use client";

import Image from "next/image";
import Link from "next/link";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { useCart } from "@/components/cart/CartProvider";
import { formatCurrency } from "@/lib/pricing";

export default function CartPage() {
  const { items, subtotal, shippingFee, total, updateQuantity, removeItem } = useCart();

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">購物車</h1>
      <p className="mt-3 text-lg text-brand-slate">確認商品數量與明細後，再前往結帳填寫收件資訊與付款方式。</p>

      {items.length === 0 ? (
        <section className="mt-8 rounded-3xl border border-brand-teal/15 bg-white p-8 text-center">
          <p className="text-lg text-brand-slate">目前購物車是空的，先去看看禪意選品吧。</p>
          <Link href="/shop" className="tap-target mt-5 inline-flex rounded-full bg-brand-teal px-6 py-3 text-base font-semibold text-white">
            去選購商品
          </Link>
        </section>
      ) : (
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="space-y-4">
            {items.map((item) => (
              <article key={item.productId} className="grid gap-4 rounded-2xl border border-brand-teal/15 bg-white p-4 sm:grid-cols-[130px_1fr] sm:p-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#f3f4ef]">
                  <Image src={item.image} alt={item.name} fill className="object-cover" sizes="130px" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-brand-deep">{item.name}</h2>
                  <p className="mt-2 text-base text-brand-slate">單價：{formatCurrency(item.price)}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <button type="button" className="tap-target rounded-md border border-brand-teal/35 px-3 py-1 text-lg" onClick={() => updateQuantity(item.productId, item.quantity - 1)}>
                      −
                    </button>
                    <span className="min-w-10 text-center text-lg font-semibold">{item.quantity}</span>
                    <button type="button" className="tap-target rounded-md border border-brand-teal/35 px-3 py-1 text-lg" onClick={() => updateQuantity(item.productId, item.quantity + 1)}>
                      +
                    </button>
                    <button type="button" className="tap-target ml-auto rounded-md border border-[#ac7a5f]/40 px-3 py-2 text-base text-[#7f4d35]" onClick={() => removeItem(item.productId)}>
                      刪除
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <section className="space-y-4">
            <OrderSummary subtotal={subtotal} shippingFee={shippingFee} total={total} />
            <p className="rounded-2xl border border-brand-teal/20 bg-[#fffdf8] px-4 py-3 text-sm leading-7 text-brand-slate">
              送出訂單即表示您已閱讀並同意
              <Link href="/terms" className="font-semibold text-brand-teal hover:text-[#1f5a54]">《服務條款》</Link>、
              <Link href="/privacy" className="font-semibold text-brand-teal hover:text-[#1f5a54]">《隱私權政策》</Link>
              與
              <Link href="/refund-policy" className="font-semibold text-brand-teal hover:text-[#1f5a54]">《退款政策》</Link>
              ，並理解配送、付款與售後處理方式。
            </p>
            <Link href="/checkout" className="tap-target inline-flex w-full justify-center rounded-full bg-brand-deep px-6 py-3 text-lg font-semibold text-white">
              前往結帳
            </Link>
          </section>
        </div>
      )}
    </div>
  );
}
