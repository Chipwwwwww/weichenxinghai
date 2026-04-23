import type { Metadata } from "next";
import SupportEmailInline from "@/components/shared/SupportEmailInline";

export const metadata: Metadata = {
  title: "退款政策",
  description: "微塵星海退款／退換貨政策：申請條件、期限、退回方式、退款流程與運費負擔原則。",
};

export default function RefundPolicyPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">退款／退換貨政策</h1>
        <p className="mt-4 text-lg leading-8 text-brand-slate">
          微塵星海重視每一次出貨與收貨體驗。若您於收到商品後有退貨、退款、換貨、瑕疵或寄錯商品等需求，請先閱讀以下說明，並於期限內與客服聯繫。
        </p>
      </section>

      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 text-base leading-8 text-brand-slate sm:p-8">
        <h2 className="text-2xl font-semibold text-brand-deep">一、適用範圍</h2>
        <p className="mt-3">本政策適用於透過微塵星海官方網站完成之訂單。</p>
        <p>若您是透過第三方平台、活動頁面、合作通路或其他特殊方式購買，則可能另依該通路或活動規則辦理。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">二、可申請退貨或退款之情況</h2>
        <p className="mt-3">在符合相關法令與本政策條件下，您可於下列情況聯繫客服申請：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>商品有明顯瑕疵、破損或缺件</li>
          <li>實際收到之商品與訂單內容明顯不符</li>
          <li>於適用之猶豫期內提出退貨申請</li>
          <li>其他經微塵星海確認可受理之情況</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">三、不適用或可能無法受理之情況</h2>
        <p className="mt-3">下列情況，微塵星海得視實際狀況不予受理，或需酌收必要費用：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>已超過可申請期限</li>
          <li>商品已明顯使用、受損、髒污、異味殘留，或已超出檢查商品必要範圍</li>
          <li>商品本體、配件、附件、內外包裝、封膜、贈品、說明卡、發票或活動附屬物不完整</li>
          <li>因個人因素造成之損壞、保存不當或人為污染</li>
          <li>商品頁已明確標示屬客製化、特殊性質、依個別需求處理，或依法不適用猶豫期之商品</li>
          <li>其他不符合法令或本政策受理條件之情形</li>
        </ol>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">四、申請流程</h2>
        <p className="mt-3">請於期限內透過客服 Email 或 LINE 聯繫，並提供：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>訂單編號</li>
          <li>訂購人姓名</li>
          <li>聯絡方式</li>
          <li>申請原因</li>
          <li>商品照片或開箱照片（若為瑕疵、破損、寄錯或缺件）</li>
        </ol>
        <p>客服確認後，會提供後續退回方式、收件資訊、物流安排或其他必要說明。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">五、申請期限</h2>
        <ol className="mt-3 list-decimal space-y-1 pl-6">
          <li>瑕疵、破損、寄錯或缺件：建議您於到貨後儘速聯繫客服</li>
          <li>一般退貨：原則上請於到貨後七日內提出</li>
          <li>逾期申請：將依實際情況與法令規範判斷是否可受理</li>
        </ol>
        <p>實際是否受理，仍需依商品性質、保存狀態、頁面揭露內容及法令規定確認。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">六、退回商品條件</h2>
        <p className="mt-3">退回商品時，請盡量維持收到時之完整狀態，包含商品本體、配件、贈品、包裝、附件與文件。</p>
        <p>若退回內容不完整，或已影響商品再販售價值，微塵星海得拒絕退貨，或依法／依實際損失酌收必要費用。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">七、換貨處理</h2>
        <p className="mt-3">若屬寄錯商品、缺件或可確認之商品瑕疵，微塵星海會視庫存與作業狀況協助換貨；若商品已無庫存，將改以退款、補寄或其他合理方式處理。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">八、退款方式與時間</h2>
        <p className="mt-3">退款方式原則上依原付款方式或雙方另行確認之方式辦理：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>線上付款：原則上退回原付款管道，或依金流作業規則處理</li>
          <li>貨到付款：依客服確認之退款方式處理</li>
          <li>其他特殊付款方式：依實際作業為準</li>
        </ol>
        <p>退款時間通常需待退貨商品回收、內容確認完成後，再進入退款流程。</p>
        <p>實際入帳時間可能受金流、銀行、信用卡作業日或第三方服務影響。</p>
        <p>退款規則 placeholder：</p>
        <p className="font-medium text-brand-deep">[請填寫退款匯款資訊或退款原路徑規則]</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">九、運費負擔原則</h2>
        <p className="mt-3">若因商品瑕疵、寄錯、缺件或可歸責於微塵星海之原因而退換貨，相關必要運費原則上由微塵星海負擔。</p>
        <p>若因個人因素、主觀不符期待、資料填寫錯誤、拒收、未能收貨或其他可歸責於消費者之原因產生退回、再次配送或退款作業，相關運費、手續費或必要成本，可能需由消費者負擔。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">十、無法配送、拒收與退回</h2>
        <p className="mt-3">若因收件資訊錯誤、收件人無法聯繫、多次配送失敗、拒收或未於約定期間內完成收貨，而導致商品退回，微塵星海得先與您聯繫確認後續處理方式。</p>
        <p>若需重新配送，可能需另行補足相關費用。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">十一、客服聯繫方式</h2>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li>客服 Email：<SupportEmailInline /></li>
          <li>LINE 官方帳號：[請填寫 LINE 官方帳號]</li>
          <li>客服服務時間：[請填寫客服服務時間]</li>
        </ul>
      </section>
    </div>
  );
}
