import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "微塵星海客服資訊：客服信箱、客服電話與 LINE ID。",
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-8 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <p className="text-base font-semibold tracking-[0.12em] text-brand-teal">客服支援</p>
        <h1 className="mt-3 text-4xl font-semibold text-brand-deep sm:text-5xl">聯絡我們</h1>
        <p className="mt-4 text-lg leading-8 text-brand-slate">
          如有商品、訂單或配送問題，歡迎來信 {siteConfig.contact.email} 或來電 {siteConfig.contact.phone} 與我們聯繫。
        </p>
      </section>

      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">客服資訊</h2>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 品牌名稱：{siteConfig.name}</li>
          <li>• 客服信箱：{siteConfig.contact.email}</li>
          <li>• 客服電話：{siteConfig.contact.phone}</li>
          <li>• LINE ID：{siteConfig.contact.lineId}</li>
          <li>• 社群名稱：{siteConfig.contact.social}</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 text-base leading-8 text-brand-slate sm:p-8">
        <p>微塵星海｜把祝福，變成每天都能傳遞的日常。</p>
        <div className="mt-4 flex flex-wrap gap-4">
          <Link href="/shop" className="tap-target font-semibold text-brand-teal hover:text-[#1f5a54]">
            看看禪意選品 →
          </Link>
          <Link href="/about" className="tap-target font-semibold text-brand-teal hover:text-[#1f5a54]">
            了解微塵星海 →
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-brand-teal/20 bg-[#fffdf8] p-6 text-base leading-8 text-brand-slate sm:p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">聯繫資料與隱私提醒</h2>
        <p className="mt-3">
          送出訊息或提供聯絡資訊前，建議先閱讀
          <Link href="/privacy" className="font-semibold text-brand-teal hover:text-[#1f5a54]">《隱私權政策》</Link>
          。我們僅在處理客服諮詢、訂單與售後需求的必要範圍內使用您的資料。
        </p>
      </section>
    </div>
  );
}
