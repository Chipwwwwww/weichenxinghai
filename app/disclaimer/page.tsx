import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "免責聲明",
  description: "微塵星海商品與內容之免責與風險邊界說明。",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">免責聲明</h1>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 微塵星海商品不是醫療用品。</li>
          <li>• 不宣稱治療、預防、改善疾病。</li>
          <li>• 不保證除 PM2.5、除甲醛、除病毒或除菌率。</li>
          <li>• 不承諾開運改命、宗教功德或神奇效果。</li>
          <li>• 祝福、結緣與佛教靈感是品牌精神與生活美學轉化，不構成宗教功德保證。</li>
          <li>• 禪意香氛杯禮盒是香氣陪伴與空間氛圍選品，不是空氣清淨或健康改善產品。</li>
          <li>• 小型桌面型空氣清新機｜完整禮盒版適合小空間日常使用，建議搭配通風；不做醫療、除菌、除甲醛、除病毒等保證。</li>
          <li>• 禪意日常玻璃杯禮盒主打日常使用、材質清楚與送禮心意，不做保健、排毒、治療等宣稱。</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/shop" className="tap-target rounded-full bg-brand-deep px-6 py-3 text-base font-semibold text-white">看看商品與禮盒</Link>
          <Link href="/shipping-payment" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">付款配送</Link>
          <Link href="/contact" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">真人客服／回饋建議</Link>
        </div>
      </section>
    </div>
  );
}
