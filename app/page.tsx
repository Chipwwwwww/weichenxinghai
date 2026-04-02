import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "首頁",
  description:
    "在每一粒微塵裡，看見整個星海。探索微塵星海的現象學視角、純視覺震撼與每日祈福空間。",
};

const highlights = ["現象學視角", "純視覺震撼", "每日祈福空間"];

const lineSteps = [
  "加入 LINE",
  "輸入阿彌陀佛",
  "領取平安圖＋50點結緣金",
];

export default function HomePage() {
  return (
    <div className="bg-brand-deep">
      <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6 text-center">
        <div className="star-field" aria-hidden="true">
          {Array.from({ length: 36 }).map((_, idx) => (
            <span
              key={idx}
              className="star"
              style={{
                width: `${(idx % 3) + 2}px`,
                height: `${(idx % 3) + 2}px`,
                top: `${(idx * 17) % 100}%`,
                left: `${(idx * 31) % 100}%`,
                animationDelay: `${(idx % 8) * 0.6}s`,
                animationDuration: `${4 + (idx % 5)}s`,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.16),transparent_60%)] animate-drift" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl space-y-6">
          <p className="text-sm tracking-[0.4em] text-brand-cyan/80">微塵星海</p>
          <h1 className="text-4xl font-light leading-tight text-white sm:text-5xl md:text-6xl">
            在每一粒微塵裡，
            <br />
            看見整個星海
          </h1>
          <p className="text-base text-slate-200 sm:text-lg">物理現象學 × 佛教意象</p>
          <a
            href="#line-landing"
            className="inline-flex rounded-full bg-brand-gold px-8 py-3 text-sm font-medium text-[#1a1305] transition hover:brightness-110"
          >
            加入每日祈福空間
          </a>
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-4 px-4 py-16 sm:grid-cols-3 sm:px-6 lg:px-8">
        {highlights.map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
          >
            <h2 className="text-xl font-light text-brand-cyan">{item}</h2>
            <p className="mt-3 text-sm text-slate-300">以沉靜且莊重的視覺語言，聚焦內在感知與宇宙尺度。</p>
          </article>
        ))}
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-2xl font-light text-white">影片精選</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2">
              <iframe
                className="aspect-[9/16] w-full rounded-xl"
                src=""
                title={`YouTube Shorts 佔位 ${item}`}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="line-landing" className="mx-auto w-full max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-brand-gold/40 bg-[#111a32] p-8 shadow-[0_0_40px_rgba(0,0,0,0.35)]">
          <h2 className="text-2xl font-light text-brand-gold">每日祈福空間</h2>
          <p className="mt-3 text-slate-300">
            每日打卡一句阿彌陀佛，建立安定的節律，讓每一天都在光與念之中展開。
          </p>
          <ol className="mt-6 space-y-3 text-slate-200">
            {lineSteps.map((step) => (
              <li key={step} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                {step}
              </li>
            ))}
          </ol>
          <a
            href="#"
            className="mt-8 inline-flex rounded-full bg-brand-gold px-8 py-3 text-base font-medium text-[#1a1305] transition hover:brightness-110"
          >
            立即加入
          </a>
        </div>
      </section>
    </div>
  );
}
