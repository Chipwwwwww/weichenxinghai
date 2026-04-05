import type { Metadata } from "next";
import { aboutDifferences, aboutStory } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "品牌故事",
  description: "認識微塵星海如何把祝福日常化，並以官網＋LINE 形成可持續的陪伴閉環。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/10 bg-white p-8">
        <p className="text-sm tracking-[0.18em] text-brand-teal">ABOUT WEICHEN XINGHAI</p>
        <h1 className="mt-3 text-3xl font-semibold text-brand-deep">把祝福變成日常，而不是口號</h1>
        <div className="mt-6 space-y-4 text-sm leading-7 text-brand-slate sm:text-base">
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {aboutDifferences.map((item) => (
          <article key={item.title} className="rounded-3xl border border-brand-teal/15 bg-white p-6">
            <h2 className="text-xl font-semibold text-brand-deep">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-brand-slate">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-brand-gold/35 bg-[#fffdf8] p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">我們如何看待商品、祝福與陪伴</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-brand-slate">
          <li>• 祝福內容：讓你每天都有可接住心情的一句話與一張圖。</li>
          <li>• 選品：讓祝福從螢幕走進空間，成為可觸碰、可贈送的陪伴。</li>
          <li>• LINE 互動：讓祝福不只被閱讀，也能被分享、被點亮。</li>
        </ul>
      </section>

      <section className="rounded-3xl bg-brand-deep p-8 text-brand-ivory">
        <h2 className="text-2xl font-semibold">想先體驗微塵星海的日常節奏？</h2>
        <p className="mt-3 text-sm leading-7 text-[#d0d8d7]">
          從加入 LINE 開始，先收下今日祝福，再慢慢找到最適合你的陪伴方式。
        </p>
        <a
          href={siteConfig.lineOaUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-full bg-brand-gold px-5 py-2 text-sm font-medium text-[#2d2207]"
        >
          {siteConfig.cta.joinLine}
        </a>
      </section>
    </div>
  );
}
