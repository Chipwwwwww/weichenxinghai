import type { Metadata } from "next";
import { aboutPillars, aboutStory } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "了解微塵星海",
  description: "微塵星海把佛教祝福、靜心陪伴與禪意生活，整合成可領取、可分享、可送禮的日常系統。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <p className="text-base font-semibold tracking-[0.12em] text-brand-teal">ABOUT WEICHEN XINGHAI</p>
        <h1 className="mt-3 text-4xl font-semibold leading-tight text-brand-deep sm:text-5xl">微塵星海：把祝福，變成每天都能傳遞的日常。</h1>
        <p className="mt-4 text-lg leading-8 text-brand-slate">微塵星海｜把祝福，變成每天都能傳遞的日常。</p>
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
        <h2 className="text-3xl font-semibold text-brand-deep">商品理念</h2>
        <div className="mt-4 space-y-3 text-base leading-8 text-brand-slate">
          <p>我們的商品不是誇大神效的商品，而是能自然融入日常、兼具禪意、美感、陪伴感、送禮意義與高級封裝感的生活用品。</p>
          <p>因此，我們只會描述設計方向、外觀、使用情境、空間氛圍與送禮建議，並維持長輩友善、可成交、可送禮的語氣。</p>
        </div>
      </section>

      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">安心溝通原則</h2>
        <p className="mt-3 text-base leading-8 text-brand-slate">如有商品、訂單或配送問題，歡迎來信 {siteConfig.contact.email} 或來電 {siteConfig.contact.phone} 與我們聯繫。</p>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 只談設計、外觀、情境、禮盒與陪伴，不做未經證實宣稱。</li>
          <li>• 語氣溫柔、穩定、長輩友善，不浮誇、不神棍、不廉價促銷。</li>
          <li>• 首頁、FAQ、分類頁與商品頁命名一致，避免多套世界觀並存。</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-brand-deep/30 bg-brand-deep p-6 text-brand-ivory sm:p-8">
        <h2 className="text-3xl font-semibold">先從今天開始傳遞祝福</h2>
        <p className="mt-3 text-lg leading-8 text-[#dce3e2]">加入 LINE 領今日祝福，收下今日平安圖與今日靜心小語。</p>
        <a
          href={siteConfig.lineBlessingUrl}
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
