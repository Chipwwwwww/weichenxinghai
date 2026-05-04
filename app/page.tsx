import Link from "next/link";
import type { Metadata } from "next";
import { homeMeta, lineMenus } from "@/data/rebrandContent";
export const metadata: Metadata = homeMeta;

export default function HomePage(){return <div className="mx-auto max-w-6xl px-4 py-10 space-y-8"><section><h1 className="text-4xl font-semibold">把祝福，變成每天都能傳遞的日常。</h1><p className="mt-3">每天一張平安圖，一句靜心語，也可以是一份真正放進生活裡的禪意禮盒。微塵星海從佛教的結緣與傳遞祝福得到靈感，把祝福整理成看得見、用得到、拆開就能感受到心意的日常結緣。</p><div className="flex gap-3 mt-4"><Link href="/line">加入 LINE 領今日祝福</Link><Link href="/products">看看商品與禮盒</Link><Link href="/shipping-payment">第一次下單可貨到付款</Link></div></section><section><p>每天入口的杯子、拜拜焚香後的客廳與供桌周邊、床頭與玄關的香氣陪伴，都是日常裡容易被忽略、卻很常被使用的空間。</p></section><section><h2>LINE 六格</h2><ul>{lineMenus.map(m=><li key={m}>• {m}</li>)}</ul></section><section><h2>商品</h2><ul><li>禪意日常玻璃杯禮盒｜NT$888</li><li>禪意香氛杯禮盒｜NT$1,980</li><li>小型桌面型空氣清新機｜完整禮盒版｜NT$3,980</li></ul></section><section><p>第一次下單若想更安心，也可以選擇貨到付款。收到商品後再付款，流程更單純，也更適合第一次結緣。</p><p>微塵星海不宣稱醫療效果、神奇效果、保證改善健康、保證除 PM2.5／甲醛／病毒，也不承諾開運改命或宗教功德。商品定位是禪意生活選品與日常祝福。</p></section></div>}
