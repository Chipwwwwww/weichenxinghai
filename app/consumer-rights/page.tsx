import type { Metadata } from "next";
import SupportEmailInline from "@/components/shared/SupportEmailInline";

export const metadata: Metadata = {
  title: "消費者權益說明",
  description: "微塵星海消費者權益說明：訂購流程、付款配送、七日鑑賞期、退換貨與爭議聯繫方式。",
};

export default function ConsumerRightsPage() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-6 px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <section className="rounded-3xl border border-brand-teal/15 bg-white p-6 sm:p-8">
        <h1 className="text-4xl font-semibold text-brand-deep sm:text-5xl">消費者權益說明</h1>
        <p className="mt-4 text-lg leading-8 text-brand-slate">
          歡迎來到微塵星海。
          我們希望把祝福，變成每天都能傳遞的日常；也希望每一次瀏覽、下單、收貨與售後，都能清楚、安心、有依據。以下內容是微塵星海目前對外揭露的消費者權益說明，方便您在購物前了解訂購、付款、配送、退換貨與售後處理原則。
        </p>
      </section>

      <section className="rounded-3xl border border-brand-gold/40 bg-[#fffdf8] p-6 text-base leading-8 text-brand-slate sm:p-8">
        <h2 className="text-3xl font-semibold text-brand-deep">一、商家與客服資訊</h2>
        <ul className="mt-4 list-disc space-y-1 pl-6">
          <li>商家名稱：微塵星海</li>
          <li>客服 Email：<SupportEmailInline /></li>
          <li>LINE 官方帳號：[請填寫 LINE 官方帳號]</li>
          <li>客服服務時間：[請填寫客服服務時間]</li>
          <li>聯絡地址：[請填寫公司/商業登記地址或聯絡地址]</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">二、商品資訊揭露原則</h2>
        <p className="mt-3">微塵星海會盡力於網站上提供商品名稱、主要內容、價格、適用情境、配送方式與注意事項等資訊。</p>
        <p>商品圖片、色澤、包裝與細節，可能因拍攝光線、螢幕顯示或批次差異而有些微不同，仍以實際出貨內容為準。</p>
        <p>商品頁若有特別標示之限制條件、使用方式、出貨時間或不適用退貨情形，將以該商品頁揭露內容為準。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">三、訂購流程說明</h2>
        <p className="mt-3">您可依網站頁面指示選購商品，填寫收件與聯絡資料，完成付款或選擇可用之付款方式後送出訂單。</p>
        <p>訂單送出後，系統或客服可能以 Email、LINE、簡訊或其他方式提供訂單確認、付款通知、出貨通知或售後聯繫。</p>
        <p>如您填寫之資料不完整、付款未完成、商品缺貨、價格標示異常、系統異常或有其他無法正常受理之情形，微塵星海保留與您聯繫、調整、取消或不成立訂單之權利。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">四、付款方式說明</h2>
        <p className="mt-3">目前網站提供之付款方式，依結帳頁實際顯示為準。</p>
        <p>現行規劃以以下方式為主：</p>
        <ol className="list-decimal space-y-1 pl-6">
          <li>線上付款</li>
          <li>貨到付款（如該商品或配送方式有開放）</li>
        </ol>
        <p>實際可使用之付款方式，仍以結帳頁當下顯示內容為準。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">五、配送方式說明</h2>
        <p className="mt-3">目前配送方式以宅配到府為主，實際配送範圍、配送天數與可否使用貨到付款，依商品頁、結帳頁及客服說明為準。</p>
        <p>一般情況下，商品將依訂單順序安排出貨；若遇節慶、活動期間、天候因素、物流延遲、缺貨補貨或其他不可歸責於微塵星海之情形，出貨與送達時間可能調整。</p>
        <p>若收件資料填寫錯誤、無人簽收、無法配送、拒收或其他可歸責於消費者之原因導致配送失敗，相關處理方式與必要費用將由雙方另行確認。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">六、訂單修改、取消與出貨前聯繫</h2>
        <p className="mt-3">若您於下單後需要修改收件資訊、取消訂單或調整品項，請儘快透過客服聯繫。</p>
        <p>若訂單尚未進入出貨流程，微塵星海會盡量協助處理；若商品已進入備貨、包裝、交寄或配送流程，則可能無法修改或需依實際情況酌收必要費用。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">七、七日鑑賞期說明</h2>
        <p className="mt-3">依消費者保護相關規範，消費者於適用範圍內，原則上得於商品到貨後七日內享有猶豫期權益。</p>
        <p>但猶豫期並非試用期。退回商品須保持商品本體、配件、附件、包裝、贈品、發票或其他隨附文件完整，且不得有非檢查商品所必要之使用痕跡。</p>
        <p>若商品依法令規定、商品性質或商品頁揭露內容屬不適用七日猶豫期之情形，將以商品頁標示與當時法令規範為準。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">八、退換貨與退款處理原則</h2>
        <p className="mt-3">若您收到之商品有瑕疵、破損、缺件、寄錯商品，或於適用條件內欲申請退貨退款，請於合理期間內儘速聯繫客服，並提供訂單資訊與必要照片或說明，以利確認。</p>
        <p>符合退貨或退款條件者，微塵星海將依實際付款方式、物流狀態與退款作業流程處理。</p>
        <p>退款時間會因付款方式、金流作業、銀行作業日或物流回收確認時間而有所不同。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">九、特殊情況處理</h2>
        <p className="mt-3">若因商品缺貨、價格標示錯誤、系統異常、配送中斷、天災、法令變動、金流或物流服務異常等不可歸責於微塵星海之情況，微塵星海保留與消費者協調更換、延後、取消或退款之權利。</p>
        <p>如有爭議，微塵星海會以誠信原則與合理方式優先協助處理。</p>

        <h2 className="mt-8 text-2xl font-semibold text-brand-deep">十、消費爭議聯繫方式</h2>
        <p className="mt-3">若您對商品、訂單、配送、退款或其他消費事項有疑問，請先透過以下方式與我們聯繫：</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>客服 Email：<SupportEmailInline /></li>
          <li>LINE 官方帳號：[請填寫 LINE 官方帳號]</li>
          <li>客服服務時間：[請填寫客服服務時間]</li>
        </ul>

        <p className="mt-6">本頁為網站對外揭露版本；若實際作業流程、合作服務或法令規範調整，微塵星海將同步更新。</p>
      </section>
    </div>
  );
}
