import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "微塵星海｜把祝福，變成每天都能傳遞的日常",
  description:
    "每天一張平安圖，一句靜心語，也可以是一份真正放進生活裡的禪意禮盒。加入 LINE 領今日祝福，第一次下單可選貨到付款。",
};

const lineGrid = ["收下今日平安", "點亮心意／今日共鳴", "邀請好友", "今日優惠／查看優惠券", "看看商品與禮盒", "真人客服／回饋建議"];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
      <section className="rounded-3xl border bg-white p-8">
        <h1 className="text-4xl font-semibold">把祝福，變成每天都能傳遞的日常。</h1>
        <p className="mt-4 text-lg leading-8">每天一張平安圖，一句靜心語，也可以是一份真正放進生活裡的禪意禮盒。微塵星海從佛教的結緣與傳遞祝福得到靈感，把祝福整理成看得見、用得到、拆開就能感受到心意的日常結緣。</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={siteConfig.lineBlessingUrl} target="_blank" rel="noreferrer" className="rounded-full bg-brand-teal px-5 py-3 text-white">加入 LINE 領今日祝福</a>
          <Link href="/products" className="rounded-full border px-5 py-3">看看商品與禮盒</Link>
          <Link href="/shipping-payment" className="rounded-full border px-5 py-3">第一次下單可貨到付款</Link>
        </div>
      </section>
      <section className="rounded-3xl border bg-white p-8">
        <p className="leading-8">每天入口的杯子、拜拜焚香後的客廳與供桌周邊、床頭與玄關的香氣陪伴，都是日常裡容易被忽略、卻很常被使用的空間。我們把這些細節整理成更安心、更體面，也能自用、探訪、節慶與結緣的祝福選品。</p>
      </section>
      <section className="rounded-3xl border bg-white p-8"><h2 className="text-2xl font-semibold">品牌簡介</h2><p className="mt-4 leading-8">很多人本來就有誦念、祈福、替家人祝願平安的習慣。微塵星海的靈感來自佛教裡「結緣」與「傳遞祝福」的精神：把心中的善意分享出去，讓一份祝願能被更多人收到、使用，也慢慢延續下去。你可以每天在 LINE 收下一張平安圖與一句靜心小語，也可以把一份有質感、說得出理由、打開就完整的禪意禮盒，送給自己或重要的人；讓祝福不是只停在一句話，而是真的被使用、被看見、被傳下去。</p></section>
      <section className="rounded-3xl border bg-white p-8"><h2 className="text-2xl font-semibold">LINE 六格</h2><ul className="mt-4 grid gap-2 sm:grid-cols-2">{lineGrid.map((i)=><li key={i}>• {i}</li>)}</ul></section>
      <section className="rounded-3xl border bg-white p-8"><h2 className="text-2xl font-semibold">三款商品</h2><div className="mt-4 space-y-4"><p><strong>禪意日常玻璃杯禮盒｜NT$888</strong> 每天入口的杯子，其實比很多禮物更貼近生活。玻璃材質不易老化，也沒有塑化劑疑慮，搭配純圓形軟木杯墊與高級禮盒，把「願你每天喝水時，都多一點安心」變成拿得起、用得到、長久留在日常裡的祝福。</p><p><strong>禪意香氛杯禮盒｜NT$1,980</strong> 香氣不只是一種味道，也是一個空間留給人的第一印象。封裝式香氛膏、4.0mm 柱狀活性炭列陣設計與高級禮盒封裝，適合玄關、床頭、書桌與靜心位置，自用有質感，結緣也體面。</p><p><strong>小型桌面型空氣清新機｜完整禮盒版｜NT$3,980</strong> 家裡有拜拜、誦念、焚香習慣時，供桌旁、床邊、書桌邊常需要更舒服的日常整理。完整禮盒版一次備齊主機、行動電源、充電線、充電器、使用說明與禮盒封裝，安靜地送出一份更省心、更適合日常陪伴的祝福。</p></div></section>
      <section className="rounded-3xl border bg-white p-8"><p>第一次下單若想更安心，也可以選擇貨到付款。收到商品後再付款，流程更單純，也更適合第一次結緣。</p><p className="mt-3">微塵星海不宣稱醫療效果、神奇效果、保證改善健康、保證除 PM2.5／甲醛／病毒，也不承諾開運改命或宗教功德。商品定位是禪意生活選品與日常祝福。</p></section>
    </main>
  );
}
