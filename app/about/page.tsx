import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "關於",
  description: "認識微塵星海的品牌故事、IP定位與現象學對應原則。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <h1 className="text-3xl font-light text-white">關於微塵星海</h1>
        <p className="mt-6 leading-8 text-slate-200">
          微塵星海不是宗教頻道，也不是科普頻道。它是一個觀察角度——當現代物理學描述宇宙在極大尺度下的互聯結構，當兩千五百年前的文本描述「一即一切、一切即一」，這種結構上的高度一致性，本身就值得被認真凝視。我們用影像做這件事。
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-3xl border border-brand-cyan/30 bg-[#0f1b36] p-6">
          <h2 className="text-xl font-light text-brand-cyan">IP 定位</h2>
          <p className="mt-4 text-sm leading-7 text-slate-200">
            微塵星海定位為「物理現象學 × 佛教意象」的純視覺 IP，透過極簡敘事與深色調影像語言，建立可反覆凝視的心靈場景。
          </p>
        </article>
        <article className="rounded-3xl border border-brand-gold/30 bg-[#161d34] p-6">
          <h2 className="text-xl font-light text-brand-gold">現象學對應原則</h2>
          <p className="mt-4 text-sm leading-7 text-slate-200">
            以「宇宙大尺度互聯性」對應「因陀羅網拓撲結構」，在視覺中呈現彼此映照、相即相入的關係，讓觀者在當下體驗結構之美。
          </p>
        </article>
      </section>
    </div>
  );
}
