import type { Metadata } from "next";
import Link from "next/link";
import { lineMenuItems, products } from "@/data/brandContent";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "微塵星海｜把祝福，變成每天都能傳遞的日常",
  description:
    "每天一張平安圖，一句靜心語，也可以是一份真正放進生活裡的禪意禮盒。加入 LINE 領今日祝福，第一次下單可選貨到付款。",
};

export default function HomePage() {
  return <div className="mx-auto max-w-6xl space-y-8 px-4 py-12">首頁文案已更新，請由各專頁查看完整資訊。
    <section><h1>把祝福，變成每天都能傳遞的日常。</h1><p>每天一張平安圖，一句靜心語，也可以是一份真正放進生活裡的禪意禮盒。微塵星海從佛教的結緣與傳遞祝福得到靈感，把祝福整理成看得見、用得到、拆開就能感受到心意的日常結緣。</p>
    <div><a href={siteConfig.lineBlessingUrl}>加入 LINE 領今日祝福</a> <Link href="/products">看看商品與禮盒</Link> <Link href="/shipping-payment">第一次下單可貨到付款</Link></div></section>
    <section><p>每天入口的杯子、拜拜焚香後的客廳與供桌周邊、床頭與玄關的香氣陪伴，都是日常裡容易被忽略、卻很常被使用的空間。我們把這些細節整理成更安心、更體面，也能自用、探訪、節慶與結緣的祝福選品。</p></section>
    <section><h2>LINE 六格</h2><ul>{lineMenuItems.map((i)=><li key={i}>{i}</li>)}</ul></section>
    <section><h2>三款商品</h2><ul>{products.map((p)=><li key={p.id}><Link href={`/products/${p.id}`}>{p.name}</Link>｜NT${p.price}</li>)}</ul></section>
    <section><p>第一次下單若想更安心，也可以選擇貨到付款。收到商品後再付款，流程更單純，也更適合第一次結緣。</p></section>
    <section><p>微塵星海不宣稱醫療效果、神奇效果、保證改善健康、保證除 PM2.5／甲醛／病毒，也不承諾開運改命或宗教功德。商品定位是禪意生活選品與日常祝福。</p></section>
  </div>;
}
