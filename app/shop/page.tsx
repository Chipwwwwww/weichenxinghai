import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "結緣商城",
  description: "探索微塵星海結緣商城，以視覺設計靈感打造的三款商品。",
};

const products = [
  {
    name: "扭扭杯",
    description: "以視覺折曲光學為設計靈感的禪意茶器",
  },
  {
    name: "微塵淨境平面清淨器",
    description: "以濾網過濾技術還原平面空氣質感",
  },
  {
    name: "空性香境杯",
    description: "活性碳除味結合植萃香氛，設計靈感取自禪堂淨香文化",
  },
];

export default function ShopPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-light text-white">結緣商城</h1>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="overflow-hidden rounded-3xl border border-white/10 bg-[#111a32]"
          >
            <div className="aspect-[4/3] w-full bg-gradient-to-br from-[#172645] to-[#0c1324]" />
            <div className="space-y-4 p-6">
              <h2 className="text-xl font-light text-brand-cyan">{product.name}</h2>
              <p className="text-sm text-slate-200">{product.description}</p>
              <a
                href="#"
                className="inline-flex rounded-full border border-brand-gold/50 px-5 py-2 text-sm text-brand-gold transition hover:bg-brand-gold hover:text-[#1a1305]"
              >
                前往結緣
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
        本商城所有商品文案僅描述設計靈感與使用情境，不涉及任何功效聲稱。
      </p>
    </div>
  );
}
