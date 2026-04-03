import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "品牌理念",
  description: "認識微塵星海如何把平安、祝福與陪伴，轉化為日常可感知的生活形式。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-8 px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/10 bg-white p-8">
        <h1 className="text-3xl font-semibold text-brand-deep">關於微塵星海</h1>
        <p className="mt-6 leading-8 text-brand-slate">
          微塵星海是一個把祝福帶回日常生活的品牌。我們不強調神秘說法，而是專注在可被感受的陪伴：一句問候、
          一份香氣、一道柔和光影，讓平安與心意在日常裡被穩定地傳遞。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-brand-teal/20 bg-white p-6">
          <h2 className="text-xl font-semibold text-brand-teal">品牌定位</h2>
          <p className="mt-4 text-sm leading-7 text-brand-slate">
            以平安、祝福、淨感為核心的生活風格品牌，透過選品與內容，讓每個人都能用自然、莊重且溫柔的方式，照顧自己與家人的日常。
          </p>
        </article>
        <article className="rounded-3xl border border-brand-gold/35 bg-[#fffdf8] p-6">
          <h2 className="text-xl font-semibold text-brand-deep">我們的堅持</h2>
          <p className="mt-4 text-sm leading-7 text-brand-slate">
            所有商品文案只描述設計靈感、材質質感、使用情境與空間氛圍。我們相信真正長久的信任，來自清楚、誠實、可被驗證的溝通。
          </p>
        </article>
      </section>
    </div>
  );
}
