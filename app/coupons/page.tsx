import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "今日優惠／查看優惠券",
  description: "優惠券可依系統規則疊加使用，實際折抵以下單頁或系統試算為準。",
};

export default function CouponsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">今日優惠／查看優惠券</h1>
        <p className="mt-4 text-base leading-8 text-brand-slate">優惠券可依系統規則疊加使用，主要限制由各商品折抵上限控管。實際折抵以下單頁或系統試算為準。</p>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 禪意日常玻璃杯禮盒最高折 NT$100</li>
          <li>• 禪意香氛杯禮盒最高折 NT$200</li>
          <li>• 小型桌面型空氣清新機｜完整禮盒版最高折 NT$300</li>
        </ul>
      </section>
      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">使用提醒</h2>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 不可折現</li>
          <li>• 不可找零</li>
          <li>• 退款、取消或未付款失敗單，依訂單狀態與系統規則處理</li>
          <li>• 客服不會先口頭保證最後折多少，實際以下單頁或系統試算為準</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/shop" className="tap-target rounded-full bg-brand-deep px-6 py-3 text-base font-semibold text-white">看看商品與禮盒</Link>
          <a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">加入 LINE 領今日祝福</a>
          <Link href="/contact" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">真人客服／回饋建議</Link>
        </div>
      </section>
    </div>
  );
}
