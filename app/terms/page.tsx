import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "服務條款",
  description: "微塵星海服務條款：網站使用規範、交易成立條件、智慧財產權、責任限制與爭議處理。",
};

export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">服務條款</h1>
        <p className="mt-4 text-lg leading-8 text-brand-slate">
          歡迎您使用微塵星海網站與相關服務。為維護雙方權益，請您於使用本網站、瀏覽內容、填寫資料、聯繫客服、參與活動或完成訂購前，先閱讀以下條款。當您使用本網站服務，即表示您已閱讀、理解並同意本條款內容。
        </p>
      </section>

      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 text-base leading-8 text-brand-slate sm:p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">一、條款適用範圍</h2>
        <p className="mt-3">本條款適用於您使用微塵星海網站、相關頁面、客服聯繫、訂單流程、會員或表單功能（如有）及與本網站相關之其他服務。</p>
        <p>如本網站另有活動辦法、商品頁補充說明、隱私權政策、退款政策或其他規則，亦視為本條款之一部分。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">二、網站內容與服務說明</h2>
        <p className="mt-3">微塵星海提供之內容，包含但不限於品牌介紹、商品資訊、活動資訊、客服聯繫、下單與售後相關頁面。</p>
        <p>微塵星海得依實際營運需要，調整網站內容、商品資訊、價格、頁面設計、服務方式、活動內容、可提供之付款與配送方式，並保留修改、暫停或終止部分服務之權利。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">三、使用者資料真實性義務</h2>
        <p className="mt-3">您於下單、填寫表單、聯繫客服或使用網站服務時，應提供真實、完整且可聯繫之資料。</p>
        <p>若因您提供之姓名、聯絡方式、收件資料、付款資訊或其他必要內容有誤，導致通知失敗、配送異常、訂單延遲、退款失敗或其他損害，應由您自行承擔相應風險。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">四、訂單成立與保留接單權</h2>
        <p className="mt-3">您送出訂單後，僅代表提出購買要約；實際交易是否成立，仍以微塵星海確認訂單內容、付款狀態、庫存情況、配送可行性及其他交易條件後為準。</p>
        <p>如遇下列情形，微塵星海得拒絕接單、取消訂單、調整訂單內容或另行通知：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>商品缺貨或停產</li>
          <li>價格、活動或商品資訊顯示異常</li>
          <li>金流授權失敗、付款未完成</li>
          <li>收件資訊不完整或異常</li>
          <li>系統錯誤、重複下單、異常交易或其他合理懷疑風險情形</li>
          <li>其他無法正常履行交易之情況</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">五、價格與資訊錯誤</h2>
        <p className="mt-3">微塵星海會盡力維持網站資訊之正確性，但若因系統、輸入、連線、第三方服務或其他因素導致價格、庫存、內容、規格、活動條件或圖片顯示錯誤，微塵星海保留修正、取消或不成立該交易之權利。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">六、智慧財產權</h2>
        <p className="mt-3">本網站上之文字、圖片、設計、版型、標誌、商標、商品頁內容、視覺素材及其他內容，除依法應由第三方享有權利者外，均屬微塵星海或合法權利人所有。</p>
        <p>未經書面同意，不得擅自重製、改作、散布、公開傳輸、轉載、商業利用或以其他方式侵害相關權益。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">七、禁止不當使用網站</h2>
        <p className="mt-3">您不得以任何方式干擾或破壞本網站正常運作，不得從事以下行為：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>惡意下單、重複取消、測試交易或濫用退款機制</li>
          <li>未經授權擷取、複製、蒐集或商用網站內容</li>
          <li>散布惡意程式、干擾伺服器或試圖入侵網站</li>
          <li>冒用他人資料、提供不實資訊或從事違法行為</li>
          <li>其他足以損害微塵星海、其他使用者或第三方權益之行為</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">八、第三方服務</h2>
        <p className="mt-3">本網站可能串接第三方金流、物流、分析工具、社群服務或其他外部服務。</p>
        <p>您於使用該等服務時，亦可能受各該第三方之條款、隱私政策或作業流程規範；相關外部服務之穩定性、可用性與作業時間，亦可能影響網站部分功能或交易流程。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">九、責任限制</h2>
        <p className="mt-3">微塵星海會以合理方式維持網站與交易流程之正常運作，但對於因天災、網路中斷、系統異常、第三方服務故障、物流延遲、法令調整或其他不可歸責事由所造成之不便、延誤或損失，將於法律容許範圍內以合理方式處理。</p>
        <p>微塵星海不就未經證實之特殊用途、個人期待效果或超出商品頁揭露範圍之主張負保證責任。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">十、條款修訂與生效</h2>
        <p className="mt-3">微塵星海得依營運需求、法令變動或網站調整，不定期修訂本條款。</p>
        <p>修訂後之內容將公布於網站上，自公告或更新日生效；您於修訂後繼續使用網站或完成交易者，視為同意修訂後之條款。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">十一、準據與爭議處理</h2>
        <p className="mt-3">本條款之解釋與適用，以中華民國相關法令及一般交易誠信原則為依據。</p>
        <p>若發生爭議，雙方應先以客服協商方式處理；如仍無法解決，再依相關法令處理。</p>
      </section>
    </div>
  );
}
