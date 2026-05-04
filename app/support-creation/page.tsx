import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "支持創作團隊",
  description: "支持微塵星海創作團隊，維持祝福內容與服務穩定更新。",
};

export default function SupportCreationPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">支持創作團隊</h1>
        <p className="mt-4 text-base leading-8 text-brand-slate">這是給微塵星海創作團隊成員的自願支持。這筆支持不是商品訂單、不是會員、不是折扣、不是抽獎、不是優先客服、不是投資、不是公益捐款、不是宗教功德。</p>
        <p className="mt-3 text-base leading-8 text-brand-slate">如果想購買禪意禮盒或商品，請前往「看看商品與禮盒」下單；商品交易會依一般商業規則處理。</p>
      </section>
      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">支持用途</h2>
        <p className="mt-3 text-base leading-8 text-brand-slate">這份支持會用於團隊持續製作平安圖、靜心小語、LINE 祝福流程、客服整理、網站內容、好友分享流程、個人化祝福卡、節日祝福活動、商品與禮盒測試，以及更穩定的內容整理與服務維護。</p>
      </section>
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">可提供與不可提供</h2>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 可提供：感謝語、感謝圖、進度更新</li>
          <li>• 不可提供或暗示：商品、折扣、會員、抽獎、優先客服、付費專屬內容、投資回報、公益捐款、宗教功德、免稅承諾</li>
        </ul>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/shop" className="tap-target rounded-full bg-brand-deep px-6 py-3 text-base font-semibold text-white">看看商品與禮盒</Link>
          <a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">加入 LINE 領今日祝福</a>
          <Link href="/contact" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">真人客服／回饋建議</Link>
        </div>
      </section>
    </div>
  );
}
