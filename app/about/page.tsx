import type { Metadata } from "next";
import { aboutPillars, aboutStory } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "品牌理念",
  description: "理解微塵星海如何把 LINE、每日祝福、選品與陪伴整合成同一套品牌系統。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-8 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/10 bg-white p-6 sm:p-8">
        <p className="text-sm tracking-[0.18em] text-brand-teal">ABOUT WEICHEN XINGHAI</p>
        <h1 className="mt-3 text-3xl font-semibold leading-tight text-brand-deep sm:text-4xl">微塵星海：把祝福變成可被日常接住的系統</h1>
        <div className="mt-6 space-y-4 text-sm leading-7 text-brand-slate sm:text-base">
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {aboutPillars.map((item) => (
          <article key={item.title} className="rounded-3xl border border-brand-teal/15 bg-white p-6 shadow-[0_8px_24px_rgba(16,34,36,0.04)]">
            <h2 className="text-xl font-semibold text-brand-deep">{item.title}</h2>
            <p className="mt-3 text-sm leading-7 text-brand-slate">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-3xl border border-brand-gold/35 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">我們如何看待「祝福儀式物」</h2>
        <div className="mt-4 space-y-3 text-sm leading-7 text-brand-slate">
          <p>
            祝福儀式物不是一次性口號商品，而是能被抽取、收藏、送人的日常媒介。
            它可以放進手機殼、書桌、床頭或包包，讓一句平安不只停留在當下。
          </p>
          <p>
            這也是我們把 LINE、官網與選品整合的原因：先有每日內容的陪伴，再有可長期留下的器物承接，形成完整閉環。
          </p>
        </div>
      </section>

      <section className="rounded-3xl border border-brand-teal/10 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">我們的溝通原則</h2>
        <ul className="mt-4 space-y-2 text-sm leading-7 text-brand-slate">
          <li>• 不使用神效、開運保證等誇大語言。</li>
          <li>• 不做醫療暗示，只描述設計、材質與使用情境。</li>
          <li>• 不以宗教壓迫口吻溝通，保留溫柔、留白與可選擇性。</li>
        </ul>
      </section>

      <section className="rounded-3xl border border-brand-deep/30 bg-brand-deep p-6 text-brand-ivory sm:p-8">
        <h2 className="text-2xl font-semibold">想先感受微塵星海的日常節奏？</h2>
        <p className="mt-3 text-sm leading-7 text-[#d0d8d7]">
          從 LINE 收下今日祝福開始，再慢慢找到最適合你與重要之人的陪伴方式。
        </p>
        <a
          href={siteConfig.lineOaUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex rounded-full bg-brand-gold px-5 py-2 text-sm font-medium text-[#2d2207] transition hover:brightness-95"
        >
          {siteConfig.cta.joinLine}
        </a>
      </section>
    </div>
  );
}
