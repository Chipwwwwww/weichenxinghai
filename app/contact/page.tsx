import type { Metadata } from "next";
export const metadata: Metadata={title:"真人客服／回饋建議",description:"透過 LINE 找真人客服協助。"};
export default function PageContact(){return <div className="p-8 space-y-3"><h1>真人客服／回饋建議</h1><p>如果你想看禮盒、查優惠、詢問付款配送、處理訂單或回報商品問題，都可以透過 LINE 找真人客服協助。</p><ul><li>訂單編號</li><li>下單手機末三碼</li><li>想詢問的商品</li><li>若是商品狀況，可補充照片</li></ul></div>}
