import type { Metadata } from "next";
import { aboutPillars, aboutStory } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "品牌理念",
  description: "用白話看懂微塵星海：加入 LINE 會收到什麼、商品能怎麼用、如何安心詢問。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <p className="text-base font-semibold tracking-[0.12em] text-brand-teal">ABOUT WEICHEN XINGHAI</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-brand-deep sm:text-5xl">微塵星海是做什麼的？三分鐘看懂</h1>
        <div className="mt-6 space-y-4 text-lg leading-8 text-brand-slate">
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {aboutPillars.map((item) => (
          <article key={item.title} className="rounded-3xl border border-brand-teal/20 bg-white p-6 shadow-[0_8px_24px_rgba(16,34,36,0.04)]">
            <h2 className="text-2xl font-semibold text-brand-deep">{item.title}</h2>
            <p className="mt-3 text-base leading-8 text-brand-slate">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">我們如何看待「祝福儀式物」</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-brand-slate">
          <p>祝福儀式物不是一次性口號商品，而是日常可使用、可收藏、可送人的小物。擺在看得到的地方，就能天天提醒自己慢下來。</p>
          <p>我們把 LINE 內容與選品搭在一起：先讓你每天收到祝福，再讓你選擇是否把祝福延伸到生活空間。</p>
        </div>
      </section>

      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">安心溝通原則</h2>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 不使用神效、開運保證等誇大語言。</li>
          <li>• 不做醫療暗示，只描述設計、材質、使用情境與規格。</li>
          <li>• 客服與詢問方式以 LINE 為主，流程清楚、回覆可追蹤。</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-brand-deep/30 bg-brand-deep p-6 text-brand-ivory sm:p-8">
        <h2 className="text-3xl font-semibold">想先感受微塵星海的每日祝福？</h2>
        <p className="mt-3 text-lg leading-8 text-[#dce3e2]">加入 LINE 後即可收到每日平安圖與靜心小語，也能隨時詢問商品價格與規格。</p>
        <a
          href={siteConfig.lineOaUrl}
          target="_blank"
          rel="noreferrer"
          className="tap-target mt-5 inline-flex rounded-full bg-brand-gold px-6 py-3 text-lg font-semibold text-[#2d2207] transition hover:brightness-95"
        >
          {siteConfig.cta.joinLine}
        </a>
      </section>
    </div>
  );
}
