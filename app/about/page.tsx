import type { Metadata } from "next";
import { aboutPillars, aboutStory } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "品牌故事",
  description: "認識微塵星海如何把祝福帶進日常，形成溫柔、穩定、可分享的陪伴。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/10 bg-white p-8">
        <p className="text-sm tracking-[0.18em] text-brand-teal">ABOUT WEICHEN XINGHAI</p>
        <h1 className="mt-3 text-3xl font-semibold text-brand-deep">把祝福留在日常，而不是口號</h1>
        <div className="mt-6 space-y-4 text-sm leading-7 text-brand-slate sm:text-base">
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {aboutPillars.map((item) => (
          <article key={item.title} className="rounded-3xl border border-brand-teal/15 bg-white p-6">
            <h2 className="text-xl font-semibold text-brand-deep">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-brand-slate">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-brand-gold/35 bg-[#fffdf8] p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">我們的溝通原則</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-brand-slate">
          <li>• 不使用神效、開運保證等誇大語言。</li>
          <li>• 只描述商品的設計、材質與真實使用情境。</li>
          <li>• 保留留白與溫度，讓品牌像一份可以長期陪伴的日常禮物。</li>
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
          加入 LINE
        </a>
      </section>
    </div>
  );
}
