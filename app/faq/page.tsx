import type { Metadata } from "next";
import { faqItems } from "@/data/brandContent";

export const metadata: Metadata = {
  title: "常見問題",
  description: "微塵星海常見問題：品牌定位、LINE 內容、送禮建議、完整禮盒版、配送與付款方式。",
};

export default function FaqPage() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">常見問題 FAQ</h1>
      <p className="mt-3 text-lg text-brand-slate">我們把品牌、商品、配送與付款資訊整理在同一頁，方便你在下單前快速確認。</p>
      <div className="mt-8 space-y-3">
        {faqItems.map((item, index) => (
          <details key={item.q} open={index === 0} className="rounded-2xl border border-brand-teal/15 bg-white px-5 py-4">
            <summary className="tap-target cursor-pointer text-lg font-semibold leading-8 text-brand-deep">{item.q}</summary>
            <p className="pt-3 text-base leading-8 text-brand-slate">{item.a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
