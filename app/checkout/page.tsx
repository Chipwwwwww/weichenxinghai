"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/cart/CartProvider";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { formatCurrency } from "@/lib/pricing";

export default function CheckoutPage() {
  const { items, subtotal, shippingFee, total, createCheckoutPayload, clearCart } = useCart();
  const [resultMessage, setResultMessage] = useState("");

  if (items.length === 0) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <h1 className="text-4xl font-semibold text-brand-deep">結帳</h1>
        <p className="mt-4 text-lg text-brand-slate">購物車目前沒有商品，請先加入商品再前往結帳。</p>
        <Link href="/shop" className="tap-target mt-5 inline-flex rounded-full bg-brand-teal px-6 py-3 text-base font-semibold text-white">
          回到選品頁
        </Link>
      </div>
    );
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    const payload = createCheckoutPayload({
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      address: String(formData.get("address") || ""),
      deliveryMethod: "home_delivery",
      paymentMethod: String(formData.get("paymentMethod")) === "cod" ? "cod" : "online",
    });

    // TODO(ECPay Integration): 在這裡呼叫 server action / API route 建立訂單，並依 paymentMethod
    // 決定導向綠界（線上付款）或建立貨到付款訂單。
    console.info("[CHECKOUT_PLACEHOLDER_PAYLOAD]", payload);

    setResultMessage("已建立結帳資料（目前為 placeholder），可直接在此接上綠界付款流程。若選貨到付款，後端可直接建立訂單並通知客服。\n\n示意總額：" + formatCurrency(payload.total));
    clearCart();
    event.currentTarget.reset();
  };

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">結帳</h1>
      <p className="mt-3 text-lg leading-8 text-brand-slate">配送方式目前為宅配到府；付款方式提供線上付款與貨到付款。第一次下單若想更安心，也可選貨到付款。</p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <form className="space-y-5 rounded-3xl border border-brand-teal/15 bg-white p-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-brand-deep">收件資訊</h2>
          <label className="block text-base text-brand-slate">收件人姓名
            <input required name="name" className="mt-2 w-full rounded-xl border border-brand-teal/30 px-4 py-3" />
          </label>
          <label className="block text-base text-brand-slate">手機
            <input required name="phone" className="mt-2 w-full rounded-xl border border-brand-teal/30 px-4 py-3" />
          </label>
          <label className="block text-base text-brand-slate">Email（選填）
            <input name="email" type="email" className="mt-2 w-full rounded-xl border border-brand-teal/30 px-4 py-3" />
          </label>
          <label className="block text-base text-brand-slate">收件地址
            <input required name="address" className="mt-2 w-full rounded-xl border border-brand-teal/30 px-4 py-3" />
          </label>

          <div className="rounded-2xl border border-brand-teal/15 bg-[#fcfbf7] p-4">
            <p className="font-semibold text-brand-deep">配送方式</p>
            <label className="mt-3 flex items-center gap-2 text-base text-brand-slate">
              <input type="radio" defaultChecked readOnly /> 宅配到府
            </label>
          </div>

          <div className="rounded-2xl border border-brand-teal/15 bg-[#fcfbf7] p-4">
            <p className="font-semibold text-brand-deep">付款方式</p>
            <label className="mt-3 flex items-center gap-2 text-base text-brand-slate">
              <input type="radio" name="paymentMethod" value="online" defaultChecked /> 線上付款（下一步前往綠界）
            </label>
            <label className="mt-2 flex items-center gap-2 text-base text-brand-slate">
              <input type="radio" name="paymentMethod" value="cod" /> 貨到付款
            </label>
          </div>

          <button type="submit" className="tap-target w-full rounded-full bg-brand-deep px-6 py-3 text-lg font-semibold text-white">送出訂單 / 前往付款</button>
          {resultMessage ? <p className="whitespace-pre-line rounded-xl border border-brand-gold/45 bg-[#fffdf8] p-4 text-base text-brand-slate">{resultMessage}</p> : null}
        </form>

        <aside className="space-y-4">
          <section className="rounded-2xl border border-brand-teal/15 bg-white p-5">
            <h3 className="text-xl font-semibold text-brand-deep">商品明細</h3>
            <ul className="mt-4 space-y-2 text-base text-brand-slate">
              {items.map((item) => (
                <li key={item.productId} className="flex items-start justify-between gap-4">
                  <span>{item.name} × {item.quantity}</span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </li>
              ))}
            </ul>
          </section>
          <OrderSummary subtotal={subtotal} shippingFee={shippingFee} total={total} />
        </aside>
      </div>
    </div>
  );
}
