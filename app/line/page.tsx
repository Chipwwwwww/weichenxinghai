import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "加入 LINE 領今日祝福",
  description: "加入 LINE，收下今天的平安祝福。每天一張平安圖，一句靜心小語，把結緣與傳遞祝福變成日常。",
};

const lineGrid = [
  ["收下今日平安", "每天領取今日平安祝福包。"],
  ["點亮心意／今日共鳴", "選 1～3 句祝福小語，也看看大家今天共同點亮了什麼。"],
  ["邀請好友", "把今日平安圖、祝福小語或邀請連結傳給家人朋友。"],
  ["今日優惠／查看優惠券", "查看目前可用的結緣回饋。"],
  ["看看商品與禮盒", "認識三款禪意禮盒，挑選適合自用或送禮的日常祝福。"],
  ["真人客服／回饋建議", "找客服協助、回報問題、提出建議，也可了解支持創作團隊。"],
] as const;

export default function LinePage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold leading-tight text-brand-deep sm:text-5xl">加入 LINE，收下今天的平安祝福。</h1>
        <p className="mt-4 text-lg leading-8 text-brand-slate">每天一張平安圖，一句靜心小語。微塵星海把佛教裡「結緣」與「傳遞祝福」的精神，轉成看得到、用得到、分享得到的日常。</p>
        <p className="mt-3 text-base leading-8 text-brand-slate">第一次下單若想更安心，也可以直接選擇貨到付款，收到商品後再付款即可。</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {lineGrid.map(([title, text]) => (
          <article key={title} className="rounded-3xl border border-brand-teal/20 bg-white p-6 shadow-[0_8px_24px_rgba(16,34,36,0.04)]">
            <h2 className="text-2xl font-semibold text-brand-deep">{title}</h2>
            <p className="mt-3 text-base leading-8 text-brand-slate">{text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <div className="flex flex-wrap gap-3">
          <a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer" className="tap-target rounded-full bg-brand-deep px-6 py-3 text-base font-semibold text-white">加入 LINE 領今日祝福</a>
          <Link href="/shop" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">看看商品與禮盒</Link>
          <Link href="/contact" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">真人客服／回饋建議</Link>
        </div>
      </section>
    </div>
  );
}
