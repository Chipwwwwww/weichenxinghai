import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "LINE 社群規範",
  description: "微塵星海｜分享今日祝福 社群規範與管理方式。",
};

export default function CommunityGuidelinesPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">LINE 社群規範</h1>
        <p className="mt-4 text-base leading-8 text-brand-slate">LINE 社群名稱：微塵星海｜分享今日祝福</p>
        <p className="mt-3 text-base leading-8 text-brand-slate">社群負責讓使用者分享今日小語、平安圖、日常祝福、修行故事與禮盒使用感受。LINE 官方帳號負責一對一祝福領取、查券、客服與交易承接；社群負責分享、互動、信任與回流。</p>
      </section>
      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">歡迎分享</h2>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 今日祝福小語</li><li>• 微塵星海平安圖</li><li>• 個人修行與靜心故事</li><li>• 日常祝福</li><li>• 禮盒使用感受</li><li>• 節日祝福與善意回饋</li>
        </ul>
      </section>
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">禁止內容</h2>
        <ul className="mt-4 space-y-2 text-base leading-8 text-brand-slate">
          <li>• 詐騙訊息</li><li>• 投資／借貸／博弈／色情</li><li>• 政治攻擊</li><li>• 未經同意公開個資</li><li>• 私下收款或導購</li><li>• 冒名官方</li><li>• 醫療或神奇功效宣稱</li><li>• 宗教功德保證</li><li>• 惡意洗版</li><li>• 人身攻擊</li><li>• 仇恨歧視</li><li>• 違法內容</li><li>• 轉售或盜用官方素材</li>
        </ul>
        <p className="mt-4 text-base leading-8 text-brand-slate">管理員可提醒、隱藏、刪除、禁言或移出社群；嚴重情況保留紀錄並交由客服或平台處理。</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer" className="tap-target rounded-full bg-brand-deep px-6 py-3 text-base font-semibold text-white">加入 LINE 領今日祝福</a>
          <Link href="/contact" className="tap-target rounded-full border-2 border-brand-teal px-6 py-3 text-base font-semibold text-brand-teal">真人客服／回饋建議</Link>
        </div>
      </section>
    </div>
  );
}
