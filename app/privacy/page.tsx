import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "隱私權政策",
  description: "微塵星海隱私權政策：蒐集資料範圍、使用目的、Cookie、第三方服務與資料安全權利說明。",
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">隱私權政策</h1>
        <p className="mt-4 text-lg leading-8 text-brand-slate">
          微塵星海重視您的個人資料與隱私保護。為了讓您安心使用本網站之瀏覽、聯繫、訂購與售後服務，以下說明本網站可能蒐集哪些資料、如何使用、保存與保護，以及您可如何與我們聯繫。
        </p>
      </section>

      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 text-base leading-8 text-brand-slate sm:p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">一、蒐集資料的範圍</h2>
        <p className="mt-3">當您使用本網站時，微塵星海可能因服務需要蒐集以下資料：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>基本識別資訊：姓名、電話、Email、收件地址、聯絡方式</li>
          <li>訂單與交易資訊：訂購商品、金額、付款狀態、配送狀態、發票或退款相關資訊</li>
          <li>客服聯繫內容：您透過 Email、LINE、表單、網站訊息或其他方式提供之諮詢內容</li>
          <li>裝置與網站使用資訊：IP 位址、瀏覽器類型、裝置資訊、瀏覽紀錄、Cookie、操作行為與來源資料</li>
          <li>其他您主動提供或因服務流程所必要之資訊</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">二、蒐集目的</h2>
        <p className="mt-3">蒐集您的資料，主要用於：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>處理訂單、付款、配送、退款與售後服務</li>
          <li>提供客服回覆、交易通知、出貨通知與必要聯繫</li>
          <li>驗證交易、降低異常交易風險</li>
          <li>改善網站內容、服務流程與使用體驗</li>
          <li>作為統計分析、行銷優化、廣告成效衡量或活動通知之參考</li>
          <li>依法令、主管機關要求或爭議處理需要而保存與提供相關紀錄</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">三、資料使用方式</h2>
        <p className="mt-3">微塵星海僅於前述蒐集目的及合理相關範圍內使用您的資料。</p>
        <p>除依法令規定、主管機關要求、履行契約、處理交易、配送、退款、客服與資安維護等必要情形外，不會任意將您的個人資料提供給無關第三人。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">四、可能接觸資料之第三方</h2>
        <p className="mt-3">為完成交易與網站服務，本網站可能將必要資料提供或由下列第三方服務接觸：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>金流服務提供者</li>
          <li>物流與配送服務提供者</li>
          <li>網站主機、系統維運或表單工具提供者</li>
          <li>網站分析或廣告成效工具提供者</li>
          <li>客服、訊息通知或社群整合工具提供者</li>
        </ol>
        <p>實際使用之第三方服務，依網站當時串接情況為準。微塵星海會於必要範圍內提供資料，並盡量要求合作對象依其隱私與安全機制妥善處理。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">五、Cookie 與分析工具</h2>
        <p className="mt-3">本網站可能使用 Cookie 及相關技術，以便記錄偏好設定、分析瀏覽行為、優化網站功能與衡量廣告成效。</p>
        <p>若網站實際有使用下列工具，請依現況寫入：</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Google Analytics：[請確認是否有使用]</li>
          <li>Meta Pixel：[請確認是否有使用]</li>
          <li>其他分析或再行銷工具：[請填寫]</li>
        </ul>
        <p>您可透過瀏覽器設定拒絕部分 Cookie，但這可能影響網站部分功能或使用體驗。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">六、資料保存期間</h2>
        <p className="mt-3">微塵星海將於蒐集目的存續期間、契約履行期間、售後服務期間、法令要求保存期間或爭議處理所需期間內，保存您的個人資料。</p>
        <p>超過必要期間後，將視資料性質與作業需求，採取刪除、去識別化或其他合理方式處理。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">七、資料安全</h2>
        <p className="mt-3">微塵星海會以合理技術與管理方式，維護您的資料安全，降低未經授權之存取、洩漏、竄改或毀損風險。</p>
        <p>但網路傳輸與儲存並非絕對無風險，若遇不可抗力、第三方攻擊或系統異常，微塵星海將盡合理努力處理並依需要通知相關方。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">八、您的權利</h2>
        <p className="mt-3">就您提供之個人資料，您得依法向微塵星海申請查詢、閱覽、製給複製本、補充、更正、停止蒐集處理利用或刪除；但若因法令義務、交易紀錄、未結爭議或其他合法事由需保留者，不在此限。</p>
        <p>如欲提出申請，請透過下列方式聯繫：</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>客服 Email：{siteConfig.contact.email}</li>
          <li>LINE 官方帳號：[請填寫 LINE 官方帳號]</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">九、未成年人說明</h2>
        <p className="mt-3">若您尚未具備完全行為能力，請在法定代理人或監護人之同意與協助下使用本網站服務或完成交易。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">十、政策更新</h2>
        <p className="mt-3">本政策可能因法令、服務流程或網站調整而更新。更新後之版本將公布於網站上，自公告或更新日起生效。</p>
      </section>
    </div>
  );
}
